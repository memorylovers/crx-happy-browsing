import { exec as _exec } from "child_process";
import glob from "fast-glob";
import { writeFile } from "fs/promises";
import { promisify } from "util";
const exec = promisify(_exec);

// ****************************
// * MAIN
// ****************************
async function main() {
  console.warn(`***** START MAIN`);

  // build: gen/sounds.ts
  await generateTs("sound/*.mp3", "sounds");
  // build: gen/anims.ts
  await generateTs("lotties/*.json", "anims");

  console.warn(`***** END   MAIN`);
}

// ********************************************************
// * private
// ********************************************************
async function generateTs(source: string, key: string) {
  const filePaths = (await glob(source, { cwd: "./public" })).map((v) => `/${v}`);
  const constData = `export const ${key} = ${JSON.stringify(filePaths, null, 2)};`;
  const outputFilePath = `./src/gen/${key}.ts`;
  await writeFile(outputFilePath, constData, { encoding: "utf-8" });
  await exec(`pnpm prettier -w ${outputFilePath}`);
  console.log(`** generated: ${outputFilePath}`);
}

// Launch
main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(`Error: error`, error);
    process.exit(1);
  });
