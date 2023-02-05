import './index.html';
import './index.scss';
import webpack from './img/webpack.png'
import { mult, sum } from './modules/calc';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = webpack;
img.width = 700;
imgWrap.append(img);

console.log(mult(3, 4));
console.log(sum(3, 4));