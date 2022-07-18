// const toggleswitch = document.querySelector('.theme-switch input[type="checkbox"]');
// const currentTheme = localStorage.getItem('theme');
// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
//     if (currentTheme == 'dark') {
//         toggleswitch.checked = true;
//     }
// }

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//     }
// }
// toggleswitch.addEventListener('change', switchTheme, false);

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector("#checkbox");



//check if dark mode is enabled
//if it's enable, turn it off
//if it's disable, turn it on

const enableDarkMode = () => {
    //1. add the classdarkmode to the body
    document.body.classList.add('darkmode');
    //2. update darkMode in the localStorage  
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    //1. add the classdarkmode to the body
    document.body.classList.remove('darkmode');
    //2. update darkMode in the localStorage  
    localStorage.setItem('darkMode', 'null');
};

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        // console.log(darkMode);
    } else {
        disableDarkMode();
        // console.log(darkMode);
    }
});