import test from "ava";
import fs from 'fs';
import getCSS from '../../_getCSS.mjs';

test('Check _strip-units function', t => {
  const successCSS = fs.readFileSync('./test-lib/functions/strip-units/index.css').toString();
  const resultCSS = getCSS("./test-lib/functions/strip-units/index.scss");
  t.is(resultCSS, successCSS);
})