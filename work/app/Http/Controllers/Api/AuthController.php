<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['register', 'login', 'refresh']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register()
    {
        $user_information = request(['name', 'email', 'password']);
        $credentials = request(['email', 'password']);

        if (User::where('name', $user_information['name'])->first()) {
            return response()->json(['error' => 'ユーザー名は既に存在しています。別のユーザー名を指定してください'], 500);
        }
        if (User::where('email', $user_information['email'])->first()) {
            return response()->json(['error' => 'メールアドレスは既に使用されています。'], 500);
        }

        $user = new User;
        $user->name = $user_information['name'];
        $user->email = $user_information['email'];
        $user->password = bcrypt($user_information['password']);
        $user->save();

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'ユーザー登録に失敗しました。'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'ログアウトしました。']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'id' => auth()->user()->id,
            'name' => auth()->user()->name,
            'email' => auth()->user()->email,
        ]);
    }
}
