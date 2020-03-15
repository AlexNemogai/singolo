const MENU_HEADER = document.getElementById("menuHeader");
MENU_HEADER.addEventListener('click', (event) => {
    MENU_HEADER.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    });
let arrayPictures = [];
for(let i = 1; i < 13; i++){
    arrayPictures.push("url('assets/pic" + i + ".png')");
}