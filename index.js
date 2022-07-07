let loading = document.querySelector("#animation");

window.addEventListener('load', function () {
    loading.parentElement.removeChild(loading)

})
function mainPage(){
    let main = document.querySelector("#main");
    main.style.display = "block"
}
document.onload = mainPage();

let nav = document.getElementById("display-nav-bar");
let displayNavBar = document.querySelector("#open-menu");
let closeNavBar = document.querySelector("#exit");

function openMenu(){
    document.getElementById('display-nav-bar').style.marginLeft = "0%"
}
function closemenu(){
    document.getElementById('display-nav-bar').style.marginLeft = '-50%';
}
displayNavBar.addEventListener('click', () => openMenu());
closeNavBar.addEventListener('click', () => closemenu());


function toggle(a){
    
    if(a.checkbox.checked==true){
        nav.style.background ="linear-gradient(to left, #181818, #b3b3b3)";
        document.documentElement.classList.add('transition');
        document.body.style.background ="#3e424b";
    }
    else if(a.checkbox.checked==false){
        //let mainPage = document.querySelector("#quote-body");
        nav.style.background ="linear-gradient(to left, #fe8dc6, #fed1c7)";
        //mainPage.style.background = "background: linear-gradient(to left,#d0b5ff,  #1eae98)";
        document.documentElement.classList.add('transition');
        document.body.style.background ="#fff";
    }
  };

let displaySearchBar = document.querySelector("#search-img");
console.log(displaySearchBar);

function openSearch(){
    let exitSearch = document.querySelector("#remove-searh-bar");
    console.log(exitSearch);
    let displaySearch = document.querySelector(".search-bar");
    console.log(displaySearch);
    displaySearch.style.display ="block";
    exitSearch.style.display ="block"

}
displaySearchBar.addEventListener('click', () => openSearch()); 

let  removeSearchBar = document.querySelector("#remove-searh-bar");

function removeSearch(){
    let undisplaySearch = document.querySelector(".search-bar");
    console.log(undisplaySearch);
    undisplaySearch.style.display ="none";
    let undisplayExit = document.querySelector("#remove-searh-bar"); 
    undisplayExit.style.display ="none"
}
removeSearchBar.addEventListener('click', () => removeSearch());
