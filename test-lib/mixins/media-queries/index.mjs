import test from "ava";
import fs from 'fs';
import getCSS from '../../_getCSS.mjs';

test('Check media-queries-v1 mixin', t => {
  const successCSS = fs.readFileSync('./test-lib/mixins/media-queries/index.css').toString();
  const resultCSS = getCSS("./test-lib/mixins/media-queries/index.scss");
  t.is(resultCSS, successCSS);
});


test('Check media-queries-v2 mixin', t => {
  const successCSS = fs.readFileSync('./test-lib/mixins/media-queries/index2.css').toString();
  const resultCSS = getCSS("./test-lib/mixins/media-queries/index2.scss");
  t.is(resultCSS, successCSS);
});



//
//
// import test from "ava";
// import fs from 'fs';
// // const fs = require('fs');
// import getCSS from '../_getCSS.mjs';
//
// test('Check media queries mixins', t => {
//   let scss = fs.readFileSync('./test/media-queries/index.scss').toString();
//   let successCSS = fs.readFileSync('./test/media-queries/index.css').toString();
//   let resultCSS = getCSS(scss);
//   t.is(resultCSS, successCSS);
// });
//
// test('Check media queries mixins - customize', t => {
//   let scss = fs.readFileSync('./test/media-queries/index2.scss').toString();
//   let successCSS = fs.readFileSync('./test/media-queries/index2.css').toString();
//   let resultCSS = getCSS(scss);
//   t.is(resultCSS, successCSS);
// });