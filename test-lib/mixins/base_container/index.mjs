import test from "ava";
import fs from 'fs';
import getCSS from '../../_getCSS.mjs';

test('Check base_container mixin', t => {
  const successCSS = fs.readFileSync('./test-lib/mixins/base_container/index.css').toString();
  const resultCSS = getCSS("./test-lib/mixins/base_container/index.scss");
  t.is(resultCSS, successCSS);
});