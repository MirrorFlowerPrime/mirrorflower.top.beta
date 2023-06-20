let log1 = document.getElementById('log1');
let log3 = document.getElementById('log3');
let log5 = document.getElementById('log5');
let log7 = document.getElementById('log7');

log1.onclick = function () {
    log2.classList.toggle('zhankai');
}

log3.onclick = function () {
    log4.classList.toggle('zhankai');
    log3.classList.toggle('zhankai1');
    log1.classList.toggle('zhankai2');
}

log5.onclick = function () {
    log6.classList.toggle('zhankai');
    log5.classList.toggle('zhankai1');
    log1.classList.toggle('zhankai2');
}
