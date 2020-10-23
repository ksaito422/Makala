# lara_react_docker
自分だけのdockerファイル

# docker-compose.yml構成
php7.4<br>
mysql8.0<br>
nginx1.18

# 使い方
黒い画面に貼り付け

`git clone git@github.com:sait0-kun/lara_react_docker.git`

# セットアップ
コンテナ起動<br>
`docker-compose up -d`

コンテナ起動確認<br>
`docker-compose ps`

composerのバージョン確認<br>
`docker exec -it [phpコンテナ名] bash`<br>
`composer --version`

laravelプロジェクト作成<br>
`composer create-project --prefer-dist "laravel/laravel=6.8.*" work`<br>
laaravel6.8使いたいので、バージョン指定してる

一応laravelバージョン確認
```
cd work
php artisan -V
```

Reactインストール<br>
`composer require laravel/ui:1.2.0`<br>
`php artisan ui react --auth`<br>
laravel標準のログイン機能つきインストール

黒い画面に出るからやる<br>
`npm install && npm run dev`

React変更の監視<br>
`npm run watch`

# 参考
[絶対に失敗しないDockerでLaravel6.8+Vueの実行環境（LEMP環境）を構築する方法〜後編〜](https://qiita.com/shimotaroo/items/679104b7e00dd9f89907)<br>
[初めてのLaravel6.xとReact入門](https://reffect.co.jp/laravel/laravel6-react-router#Laravel)


