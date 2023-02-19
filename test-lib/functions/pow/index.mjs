import test from "ava";
import fs from 'fs';
import getCSS from '../../_getCSS.mjs';

test('Check _pow function', t => {
  const successCSS = fs.readFileSync('./test-lib/functions/pow/index.css').toString();
  const resultCSS = getCSS("./test-lib/functions/pow/index.scss");
  t.is(resultCSS, successCSS);
});