import test from "ava";
import fs from 'fs';
import getCSS from '../../_getCSS.mjs';

test('Check _precision-round function', t => {
  let successCSS = fs.readFileSync('./test-lib/functions/precision-round/index.css').toString();
  const resultCSS = getCSS("./test-lib/functions/precision-round/index.scss");
  t.is(resultCSS, successCSS);
});