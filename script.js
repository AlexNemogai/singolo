//---------------------HEADER------------------------
const MENU_HEADER = document.getElementById("menuHeader");
MENU_HEADER.addEventListener('click', (event) => {
    MENU_HEADER.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    });

//---------------------PHONES-----------------------------
const VERTICAL_IPHONE = document.getElementById('verticalIPhone');
let verticalIphoneCount = 0;
VERTICAL_IPHONE.addEventListener('click', (event) => {
    if(verticalIphoneCount == 0){
        VERTICAL_IPHONE.style.background = 'url("assets/verticalIphoneOff.png") no-repeat';
        verticalIphoneCount = 1;
    }else{
        VERTICAL_IPHONE.style.background = 'url("assets/iPhone-Vertical.png") no-repeat';
        verticalIphoneCount = 0;
    }
});

const HORIZONTAL_IPHONE = document.getElementById('horizontalIphone');
let horizontalIphoneCount = 0;
HORIZONTAL_IPHONE.addEventListener('click',(event) => {
    if(horizontalIphoneCount == 0){
        HORIZONTAL_IPHONE.style.background = 'url("assets/horizontalIphoneOff.png") no-repeat';
        horizontalIphoneCount = 1;
    }else{
        HORIZONTAL_IPHONE.style.background = 'url("assets/iPhonee-horizontal.png") no-repeat';
        horizontalIphoneCount = 0;
    }
})

//-----------------------------PORTFOLIO--------------------------
PORTFOLIO_PICTURE = document.getElementById('pictures');
let arrayPictures = [];
for(let i = 1; i < 13; i++){
    arrayPictures.push("url('assets/pic" + i + ".png')");
}
const MENU_PORTFOLIO = document.getElementById('portfolioBtn');
MENU_PORTFOLIO.addEventListener('click', (event) => {
    MENU_PORTFOLIO.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    //MENU_PORTFOLIO.querySelectorAll('div').forEach(el => el.classList.remove('active'));
    let img = arrayPictures.shift();
    arrayPictures.push(img);
    PORTFOLIO_PICTURE.querySelectorAll('div').forEach((item,index) =>{
        item.style.background = arrayPictures[index];
    })
    event.preventDefault();
});

PORTFOLIO_PICTURE.addEventListener('click',(event) => {
    PORTFOLIO_PICTURE.querySelectorAll('div').forEach(el => el.classList.remove('border-frame'));
    event.target.classList.add('border-frame');
})

document.addEventListener('scroll', onScroll);
function onScroll(event){

    if(window.scrollY > 95){
        document.querySelector('header').classList.add('small');
    }

    //--------------------SCROLL------------------------------
    const SECTIONS = document.querySelectorAll('section');
    const CUR_POS = window.scrollY;
    if(CUR_POS < 695){
        MENU_HEADER.querySelectorAll('a')[0].style.color = "#f06c64";
    }else{
        MENU_HEADER.querySelectorAll('a')[0].style.color = "white";
    }

    SECTIONS.forEach((el) => {
        if(el.offsetTop <= CUR_POS && (el.offsetTop + el.offsetHeight) > CUR_POS){
            MENU_HEADER.querySelectorAll('a').forEach((a) => {
                a.classList.remove('active');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                }
            })
        }
    })
};