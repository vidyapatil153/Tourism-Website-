let searchBtn = document.querySelector("#search-icon");
let searchBar = document.querySelector(".search-bar-container");
let searchBarGo = document.querySelector(".search-bar-containerGo");
let Homebtn = document.querySelector("#home");
let Aboutbtn = document.querySelector("#about");

// document.querySelector('.search-bar-container').style.display = 'none'

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener("click", () =>{
    searchBar.classList.toggle("searchBarGo");
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});

Homebtn.addEventListener("click" , ()=>{
    Homebtn.window.open("index.html");
})
// Aboutbtn.addEventListener("click" , ()=>{
//     window.open("about.html");
// })