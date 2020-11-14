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

// If the directory is not yet created, create it.
// if (!fs.existsSync(`./src/components/${dir}`)) {
//   fs.mkdirSync(`./src/components/${dir}`);
// }

// コピー元となるファイル
const template = "./resources/ts/tools/componentTemplates/Component.tsx";
// コピー先のディレクトリ
const dests = `./resources/ts/${dir}/${granularity}/${component}.tsx`;

fs.copyFileSync(
  template,
  dests
);
console.log(`✨ Create component template ${dests}`);
// console.log(dests);

// fs.mkdirSync(`./resources/ts/components/${dir}/${granularity}/${component}`);

// Error when a component already exists
// templates.forEach((template, index) => {
//   fs.copyFileSync(
//     template,
//     dests[index],
//     fs.constants.COPYFILE_EXCL,
//     (error) => {
//       if (error) {
//         throw error;
//       }
//     }
//   );
  // console.log(`✨ Create component template ${dests[index]}`);
// });