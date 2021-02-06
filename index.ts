#!npx ts-node

import path from 'path';
import { DefaultExiftoolArgs, ExifTool } from 'exiftool-vendored';

const configPath = path.resolve('./my.config');
const sourceImagePath = path.resolve('./DSC01005.ARW');
const destImagePath = path.resolve('./extracted');

console.info({ configPath, sourceImagePath, destImagePath });

(async () => {
  const et = new ExifTool({exiftoolArgs: ['-config', configPath, ...DefaultExiftoolArgs]});

  try {
    await et.extractBinaryTag('-RotatedJpegFromRaw', sourceImagePath, path.join(destImagePath, 'JpegFromRaw.jpg'));
  } catch (err) {
    console.error(err);
  }

  try {
    await et.extractBinaryTag('-RotatedPreview', sourceImagePath, path.join(destImagePath, 'preview.jpg'));
  } catch (err) {
    console.error(err);
  }

  try {
    await et.extractBinaryTag('-RotatedThumbnail', sourceImagePath, path.join(destImagePath, 'thumbnail.jpg'));
  } catch (err) {
    console.error(err);
  }
})();
