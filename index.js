const number = document.querySelector('.time');
let startingMinutes;
for (let i = 0; i < 1; i++) {
    const userNumber = +prompt('Введите время в минутaх от 1 до 60, чтоб запустить таймер');

    if(isNaN(userNumber)) {
        alert('Введите число');
        i--;
    } else {
        startingMinutes = userNumber;
    }
}


let time = startingMinutes * 60;

let timerId = setInterval(updateTime, 1000)

function addZero (num) {
    if (num < 10 && num >= 0){
        return `0${num}`
    } else {
        return num;
    }
}
updateTime();
function updateTime () {
    let minutes = addZero(Math.floor(time / 60)),
        seconds = addZero(time % 60);
    
    number.innerHTML = `${minutes}: ${seconds}`;
    time--;
    if(time < 0) {
        number.classList.add('hide')
        clearInterval(timerId);
    }
}


