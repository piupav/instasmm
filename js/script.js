/* Работоспособность кнопки "Далее" и радио-индикаторов */
if (location.href.includes('full')) {
    document.querySelector('.toast').parentElement.removeChild(document.querySelector('.toast'));
}
  
window.addEventListener('load', event => {
    const onboarding = document.querySelector('.onboarding');
    const bookmarks = document.querySelectorAll("form input[type=\"radio\"]");
    const btnNext = document.querySelector("a.btn-next");
    btnNext.addEventListener("click", (e) => {
        const pageNumber = parseInt(getComputedStyle(onboarding).getPropertyValue('--page-number')) + 1;
        if (pageNumber < 7) {
            onboarding.style.setProperty('--page-number', pageNumber);
            bookmarks[pageNumber-1].checked = true;
        } else {
            onboarding.style.setProperty('--page-number', 1);
            bookmarks[0].checked = true;
        }
    });
});



const startPage = document.querySelector('.start-page');
startPage.onclick = function() {
    startPage.classList.add("start-page-off");
}


/* Открытие окна с доп.информацией при клике по экрану */
const slide = document.querySelectorAll('.slide');
const moreInfo = document.querySelectorAll('.more-info');
const btnClose = document.querySelector("a.button-close");
const h1Active = document.querySelectorAll(".h1-off");

for (let el = 0; el <= 4; el++) {
    slide[el].onclick = function() {
        moreInfo[el].classList.toggle("active");
        slide[el].classList.toggle("active");
        h1Active[el].classList.toggle("h1-active");
        btnClose.classList.toggle("button-close-active");
        

        btnClose.onclick = function() {
            moreInfo[el].classList.remove("active");
            slide[el].classList.remove("active");
            h1Active[el].classList.remove("h1-active");
            btnClose.classList.remove("button-close-active");
        }
    }
}

