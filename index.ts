#!npx ts-node

import path from 'path';
import { ExifTool } from 'exiftool-vendored';

const configPath = path.resolve('./my.config');
const sourceImagePath = path.resolve('./DSC01005.ARW');
const destImagePath = path.resolve('./out.jpg');

console.info({ configPath, sourceImagePath, destImagePath });

(async () => {
  const et = new ExifTool({exiftoolArgs: ['-config', configPath]});
  try {
    await et.extractBinaryTag('rotatedthumbnail', sourceImagePath, destImagePath);
  } catch (err) {
    console.error(err);
  }
})();
