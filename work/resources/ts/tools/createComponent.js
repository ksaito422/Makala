const { program } = require("commander");
const fs = require("fs");

program
  // option設定   例: -c atoms/button で作成するコンポーネント名を指定する
  .option(
    "-c, --component [component name]",
    "The name of the component to be created (ex) atoms/Button"
  )
  .parse(process.argv);

// オプション忘れるとヘルプを表示
if (!program.component) {
  program.help();
}

// '/'ごとに分けて配列にする    例:[coponents, atoms, originalComponent]
const argument = program.component.split("/");
const dir = argument[0];
const granularity = argument[1];
const component = argument[2];

// componentsならatoms or moleculesのみ許可
if (["components"].includes(dir)){
  if (!["atoms", "molecules"].includes(granularity)){
    console.error(
      "ERROR: For components, only atoms and molecules can be specified."
    );
    return;
  }
}
// containersならorganismsのみ許可
if (["containers"].includes(dir)){
  if (!["organisms"].includes(granularity)){
    console.error(
      "ERROR: For containers, only organisms can be specified."
    );
    return;
  }
}

// ディレクトリがなかったら作る
if (!fs.existsSync(`./resources/ts/${dir}/${granularity}`)) {
  fs.mkdirSync(`./resources/ts/${dir}/${granularity}`);
}

// コピー元となるファイル
const template = "./resources/ts/tools/componentTemplates/Component.tsx";
// コピー先のディレクトリ
const dests = `./resources/ts/${dir}/${granularity}/${component}.tsx`;

// 既にファイルが存在する場合は上書きしないようにリターンする
if (fs.existsSync(dests)) {
  console.log(`There are already files in that ${dests}`);
  return;
}

// コンポーネントを作成
fs.copyFileSync(
  template,
  dests
);
console.log(`✨ Create component template ${dests}`);