const MENU_HEADER = document.getElementById("menuHeader");
MENU_HEADER.addEventListener('click', (event) => {
    MENU_HEADER.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    });

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

let arrayPictures = [];
for(let i = 1; i < 13; i++){
    arrayPictures.push("url('assets/pic" + i + ".png')");
}
const MENU_PORTFOLIO = getElementById('portfolioBtn');
MENU_PORTFOLIO.addEventListener('click', (event) => {
    MENU_PORTFOLIO.querySelectorAll('div').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    event.preventDefault();
    });