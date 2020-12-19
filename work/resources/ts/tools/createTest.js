const { program } = require('commander');
const fs = require('fs');

program
  // option設定   例: -c atoms/button で作成するテスト名を指定する
  .option(
    '-c, --component [test name]',
    'The name of the test to be created (ex) atoms/Button'
  )
  .parse(process.argv);

// オプション忘れるとヘルプを表示
if (!program.component) {
  program.help();
}

// '/'ごとに分けて配列にする    例:[atoms, test]
const argument = program.component.split('/');
const granularity = argument[0];
const component = argument[1];

// 下に表記した粒度以外が指定されたらエラー吐いてリターンする
if (!['atoms', 'molecules', 'organisms', 'pages'].includes(granularity)) {
  console.error(
    'ERROR: only atoms and molecules and organisms and pages can be specified.'
  );
  return;
}

// components or containersのディレクトリを代入
let dir = null;

// atoms or moleculesなら dir = components
if (['atoms', 'molecules'].includes(granularity)) {
  dir = 'components';
}
// organisms or pagesなら dir = containers
if (['organisms', 'pages'].includes(granularity)) {
  dir = 'containers';
}

// ディレクトリがなかったら作る
if (!fs.existsSync(`./resources/ts/${dir}/${granularity}/tests`)) {
  fs.mkdirSync(`./resources/ts/${dir}/${granularity}/tests`);
}

// コピー元となるファイル
// コピー先のディレクトリ
const template = "./resources/ts/tools/componentTemplates/Test.tsx";
const dests = `./resources/ts/${dir}/${granularity}/tests/${component}.test.tsx`;

// 既にファイルが存在する場合は上書きしないようにリターンする
if (fs.existsSync(dests)) {
  console.log(`There are already files in that ${dests}`);
  return;
}

// テストを作成
fs.copyFileSync(
  template,
  dests
);
console.log(`✨ Create test template ${dests}`);