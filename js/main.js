(function () {

    const spanEl = document.querySelector('main h2 span');
    const txtArr = ['No Limit and Sustainable'];

    let index = 0;
    let currentTxt = txtArr[index].split('');
    //화면에 표시할 문장 배열에서 요소를 가져와 배열로만듬

    function writeTxt() {

        spanEl.textContent += currentTxt.shift(); //파괴적요소 shift() 배열 맨앞요소 추출 추출한 요소 배열에서 삭제
        if (currentTxt.length !== 0) { //배열의 길이가 0이 아니라면 writetxt함수 다시 호출
            setTimeout(writeTxt, Math.floor(Math.random() * 100)); //0부터 100사이의 난수 생성
        } else { //배열이 비었다면
            currentTxt = spanEl.textContent.split(''); //sapnEl의 단어단위로 분리해 배열할당
            setTimeout(deleteTxt, 3000); //3초뒤 deletetxt 함수 호출
        }
    }
    writeTxt();

    function deleteTxt() {
        currentTxt.pop(); //베열의 끝부터 삭제 pop()
        spanEl.textContent = currentTxt.join(''); //join함수로 현재 문자열을 합친다
        if (currentTxt.length !== 0) { //배열의 길이가 0 이 아니라면 delete 함수 호출
            setTimeout(deleteTxt, Math.floor(Math.random() * 100)); //0부터 100사이의 난수 생성
        } else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }
})(); // 즉시실행함수 전역스코프를 오염시키지 않음



//header scroll event

const headerEl = document.querySelector('header');
window.addEventListener('scroll', function () {

    if (window.scrollY > 0) {
        headerEl.classList.add('active')
    } else {
        headerEl.classList.remove('active')
    }
})




//stars

const starWrap = document.querySelector('.stars_wrap')
const main = document.getElementById('main')

function createStar() {
    const el = document.createElement('div')
    el.classList.add('stars')
    el.style.marginLeft = randomposition() + 'px'
    starWrap.appendChild(el)
}

function randomposition() {
    return Math.floor(Math.random() * window.innerWidth);
}
for (let i = 0; i < 300; i++) {
    createStar()
}





const btn01 = document.getElementById('btn01')
const btn02 = document.getElementById('btn02')
const btn03 = document.getElementById('btn03')
const btn04 = document.getElementById('btn04')
const btn05 = document.getElementById('btn05')
const section01 = document.getElementById('main')
const section02 = document.getElementById('about')
const section03 = document.getElementById('cardflip')
const section04 = document.getElementById('portfolio')
const section05 = document.getElementById('contact')




btn01.addEventListener('click', () => {
    gsap.to(window, 0.3, {
        scrollTo: section01,
    })

})

btn02.addEventListener('click', () => {
    gsap.to(window, 0.3, {
        scrollTo: section02,
    })

})

btn03.addEventListener('click', () => {
    gsap.to(window, 0.3, {
        scrollTo: section03,
    })

})

btn04.addEventListener('click', () => {
    gsap.to(window, 0.3, {
        scrollTo: section04,
    })

})
btn05.addEventListener('click', () => {
    gsap.to(window, 0.3, {
        scrollTo: section05,
    })

})


const aboutLeft = document.querySelector('.about_self .left')
const aboutRight = document.querySelector('.about_self .right')
const cardLis = document.querySelectorAll('.gsap01')

//about animation
// window.addEventListener('scroll', function () {
//     if (window.scrollY >= 700) {

gsap.to(aboutLeft, 0.5, {
    scrollTrigger: {
        trigger: section01,
        start: 'bottom 30%',
    },
    translateY: 0,
    opacity: 1
})

gsap.to(aboutRight, 0.5, {
    scrollTrigger: {
        trigger: section01,
        start: 'bottom 30%',
    },
    translateY: 0,
    opacity: 1
})

//     }

// })


//skills card animation


cardLis.forEach((value) => {
    gsap.to(value, 0.8, {
        scrollTrigger: {
            trigger: section02,
            start: 'bottom 30%',
        },
        translateX: 0,
        rotate: 360,
        opacity: 1,
    })
})





//숫자하고 프로그레스바 올라가는거 

// window.addEventListener('scroll', function () {

//     if (window.pageYOffset>= 1500  ) {

// let countBox = document.getElementById('skill01') //html
// let countBox2 = document.getElementById('skill02') //css
// let countBox3 = document.getElementById('skill03') //js
// let count = 0;

// let counting = setInterval(function () {
//     if (count == 100) {
//         clearInterval(counting);
//         return false;
//     }
//     count += 1
//     countBox.innerHTML = count + '%'
//     countBox2.innerHTML = count + '%'
//     countBox3.innerHTML = (count - 10) + '%'


// }, 25);




// const progress = document.getElementsByTagName('progress')

// let cnt = 0;
// let progressCnt = setInterval(() => {

//     if (cnt == 100) {
//         clearInterval(progressCnt);
//         return false;
//     }
//     cnt += 1

//     progress[0].value = cnt
//     progress[1].value = cnt
//     progress[2].value = cnt - 10
// }, 25);



//     }//if
// }) //window scroll




//progress value 올라가는거
const progress = document.getElementsByTagName('progress')

let cnt = 0;
let progressCnt = setInterval(() => {

    if (cnt == 100) {
        clearInterval(progressCnt);
        return false;
    }
    cnt += 1

    progress[0].value = cnt
    progress[1].value = cnt
    progress[2].value = cnt - 10
    progress[3].value = cnt - 20
    progress[4].value = cnt - 10
    progress[5].value = cnt - 20
    progress[6].value = cnt - 20
    progress[7].value = cnt
    progress[8].value = cnt - 20
    progress[9].value = cnt
}, 25);




//숫자 카운트올라가는거 gsap으로

const num = document.querySelectorAll('.span02')
gsap.from(num, {
    textContent: 0,
    duration: 4,
    scrollTrigger: {
        trigger: section02,
        start: 'bottom 50%',
    },
    stagger: {
        onUpdate: function () {
            this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent) + '%';
        }
    }
})







///contact event

const cards = document.querySelectorAll('.card')
const contactRight = document.querySelector('.contact .right')

cards.forEach((val, idx) => {

    gsap.from(val, 0.3, {
        scrollTrigger: {
            trigger: section04,
            start: 'bottom 50%',
        },
        y: 50,
        opacity: 0,
        delay: (idx + 1) * 0.3
    })

})

gsap.from(contactRight, 0.3, {
    scrollTrigger: {
        trigger: section04,
        start: 'bottom 50%',
    },
    y: -200,
    opacity: 0,
    delay: 0.3,

})