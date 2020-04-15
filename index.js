import x from './src/x.js';
import png from './assets/1.png';

console.log(x);
console.log(png);

const div = document.getElementById('app');
div.innerHTML = `<img src="${png}">`;

const button = document.createElement('button');
button.innerText = '懒加载';
div.appendChild(button);
button.onclick = function () {
    //import的动态语法，返回一个Promise对象
    const promise = import('./src/lazy.js');
    promise.then((module) => {
            module.lazy();
        },
        () => {
            console.log("模块加载错误");
        });
};