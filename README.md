# タイトル
Makala

### 名前の由来
スワヒリ語で「記事」を意味します。

# 概要
文章構成を考案・構築するためのサービスです。<br>
いつ・どこにいても、ブログや記事の内容をささっと書き残すことができます。

- レスポンシブ対応しているので、スマホからもご利用できます。
- ドラッグ&ドロップ機能を備えているため、文章を好きな段落から書くことができ、後から簡単に文章構成を修正できます。
- 入力した内容をMarkdown形式でエクスポートする機能を備えています。

# 使用技術
- Laravel 6.8
- React 16.14.0
- TypeScript 4.0.3
- MySQL 8.0
- Nginx
- Docker / Docker-compose
- AWS
  - EC2 / ECS / ECR / RDS / Route53
- PHPUnit

### ライブラリ
- jwt-auth
- Material-ui 4.0
- React-Router-Dom 5.1.6
- React-Hook-Form 6.12.2
- react-beautiful-dnd 13.0.0
- React-Markdown-Preview 1.0.9

# AWS(インフラ)構成図
<img width="760" alt="aws_makala_image" src="https://user-images.githubusercontent.com/62602802/102435192-899d8180-4059-11eb-81f3-d3dc7b712753.png">


# 機能一覧
- ユーザー登録
- ログイン・ログアウト機能
- CRUD機能
- ドラッグ&ドロップ機能
- Markdownファイルのエクスポート機能