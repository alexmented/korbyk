const button = document.getElementById('button');
const result1 = document.getElementById('result');
const button1 = document.getElementById('button1');
button.hidden = true;
let rando = 0;

const rand = () => {
    return Math.floor(Math.random()*10000);
}
const getRand = () => {
    const val = new Set(rand().toString());
    if (val.size !== 4) {
        return getRand();
    }
    return [...val].join('');
}

const calc = (num, result) => {
    console.log(result)
    if (num.length !== 4) {
        alert('ОШИБКА')
        return
    }
    let kor = 0;
    let byk = 0;
    num.split('').forEach((el, index) => {
        if (el === result[index]) {
            byk++;
        }
        else if (result.includes(el)) {
            kor++;
        }
    })
    return [kor,byk]
}

button.addEventListener('click', (e) => {
    const val = document.getElementsByTagName('input')[0];
    if (val.value.length !== 4) {
        alert('Введи 4 цифры')
        return
    }
    const [kor, byk] = calc(val.value, rando.toString())
    result1.innerHTML = result1.innerHTML + `<div>ВАШЕ ЧИСЛО:${val.value} <b>${byk}</b> БЫКОВ, <b>${kor}</b> КОРОВ</div>`
    val.value = '';
    if (byk === 4) {
        alert('ПОБЕДА!!!')
        button.hidden = true;
    }
})
button1.addEventListener('click', (e) => {
    rando = getRand();
    button.hidden = false;
    result1.innerHTML = '';
})
