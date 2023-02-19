import test from "ava";
import fs from 'fs';
import getCSS from '../../_getCSS.mjs';

test('Check columns mixin', t => {
  const successCSS = fs.readFileSync('./test-lib/mixins/columns/index.css').toString();
  const resultCSS = getCSS("./test-lib/mixins/columns/index.scss");
  t.is(resultCSS, successCSS);
});