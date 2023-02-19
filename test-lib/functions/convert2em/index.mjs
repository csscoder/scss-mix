import test from "ava";
import fs from 'fs';
import getCSS from '../../_getCSS.mjs';

test('Check _convert2em function', t => {
  const successCSS = fs.readFileSync('./test-lib/functions/convert2em/index.css').toString();
  const resultCSS = getCSS("./test-lib/functions/convert2em/index.scss");
  t.is(resultCSS, successCSS);
});