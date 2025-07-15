if (localStorage.getItem('portfolio_language') == null){
    localStorage.setItem('portfolio_language', 'rus');
} else if (localStorage.getItem(('portfolio_language') == "eng")){

}

const goodnow = document.querySelector(".goodjs > p")
const onHomePage = document.querySelector(".homepage")
const onSkillsPage = document.querySelector(".skills")
const onProjectsPage = document.querySelector(".projects")
const onContactsPage = document.querySelector(".contacts")
const onAboutMePage = document.querySelector(".aboutme")

let now = new Date()
let additionalinf_on = false

if (now.getHours() >= 6 && now.getHours() <= 12){
    goodnow.textContent = 'Доброе утро';
    goodnow.style.color = 'var(--goodmorning)';
} else if (now.getHours() >= 13 && now.getHours() <= 17){
    goodnow.textContent = 'Добрый день';
    goodnow.style.color = 'var(--goodday)';
} else if (now.getHours() >= 18 && now.getHours() <= 22){
    goodnow.textContent = 'Добрый вечер';
    goodnow.style.color = 'var(--goodevening)';
} else if (now.getHours() >= 23 || now.getHours() <= 5){
    goodnow.textContent = 'Доброй ночи';
    goodnow.style.color = 'var(--goodnight)';
}

onHomePage.addEventListener('click', () => {
    location.href = './index.html'
})

onSkillsPage.addEventListener('click', () => {
    location.href = './skills.html'
})

onProjectsPage.addEventListener('click', () => {
    location.href = './projects.html'
})

onContactsPage.addEventListener('click', () => {
    location.href = './contacts.html'
})

onAboutMePage.addEventListener('click', () => {
    location.href = './about_me.html'
})