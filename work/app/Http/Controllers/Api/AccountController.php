<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class AccountController extends Controller
{
    /**
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function changeName(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name;
        $user->save();
        return response()->json(['message' => 'ユーザー名を変更しました。']);
    }

    public function changeEmail(Request $request, $id)
    {
        // ユーザーを取得して、認証情報を保管
        $user = USER::find($id);
        $credentials = request(['email', 'password']);

        // パスワードが正しければメールアドレス変更する。違ったら変更できない
        if (auth()->validate($credentials)) {
            $user->email = $request->newEmail;
            $user->save();
            return response()->json(['message' => 'メールアドレスを変更しました。']);
        } else {
            return response()->json([
                'message' => 'パスワードが違うため、メールアドレスを変更できませんでした。',
            ], 401, [], JSON_UNESCAPED_UNICODE);
        }
    }

    public function changePassword(Request $request, $id)
    {
        // ユーザーを取得して、認証情報を保管
        $user = USER::find($id);
        $credentials = request(['email', 'password']);

        // パスワードが正しければパスワード変更する。違ったら変更できない
        if (auth()->validate($credentials)) {
            $user->password = bcrypt($request->newPassword);
            $user->save();
            return response()->json(['message' => 'パスワードを変更しました。']);
        } else {
            return response()->json([
                'message' => 'パスワードが違うため、パスワードを変更できませんでした。',
                ], 401, [], JSON_UNESCAPED_UNICODE);
        }
    }
}
