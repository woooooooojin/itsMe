const headerEl = document.querySelector('header');
window.addEventListener('scroll', function () {

    if (window.scrollY > 0) {
        headerEl.classList.add('active')
    } else {
        headerEl.classList.remove('active')
    }
})



////////////섹션별 gsap애니메이션/////////////

const skillsTools = document.querySelector('.skills_tools')
const sortBox = document.querySelector('.sortbox')
const filterBox = document.querySelector('.filterbox')
const reviewBox = document.querySelector('.reviewbox')
const noticeBox = document.querySelector('.noticebox')
const DomBox = document.querySelector('.Dombox')
const swiperBox = document.querySelector('.swiperbox')



gsap.from(sortBox, 0.3, {
    scrollTrigger: {
        trigger: skillsTools,
        start: 'bottom 30%',
    },
    y: 50,
    opacity: 0,

})

gsap.from(filterBox, 0.3, {
    scrollTrigger: {
        trigger: sortBox,
        start: 'bottom 30%',
    },
    y: 50,
    opacity: 0,

})
gsap.from(reviewBox, 0.3, {
    scrollTrigger: {
        trigger: filterBox,
        start: 'bottom 30%',
    },
    y: 50,
    opacity: 0,

})
gsap.from(noticeBox, 0.3, {
    scrollTrigger: {
        trigger: reviewBox,
        start: 'bottom 30%',
    },
    y: 50,
    opacity: 0,

})
gsap.from(DomBox, 0.3, {
    scrollTrigger: {
        trigger: noticeBox,
        start: 'bottom 30%',
    },
    y: 50,
    opacity: 0,

})
gsap.from(swiperBox, 0.3, {
    scrollTrigger: {
        trigger: DomBox,
        start: 'bottom 30%',
    },
    y: 50,
    opacity: 0,

})




const scrollRight = document.querySelector('.scroll_right')
const scrollLeft = document.querySelector('.scroll_left')

let scrollBottom = document.body.scrollHeight - 1000;
window.addEventListener('scroll', () => {

    if(window.scrollY >= scrollBottom){
        scrollRight.classList.add('hide1')
        scrollLeft.classList.add('hide2')
    }else{
        scrollRight.classList.remove('hide1')
        scrollLeft.classList.remove('hide2')
    }
   

})


const topBtn = document.querySelector('.top_btn')

window.addEventListener('scroll',()=>{
    if(scrollY>200){
        topBtn.classList.remove('on')
    }else{
        topBtn.classList.add('on')
    }
})




$(function() {
    $('.top_btn').click(function (e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: 0,
        }, 300)
    })

})