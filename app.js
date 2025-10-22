let changIcon = document.getElementById("changIcon")
let menuList = document.getElementById("menuList")
let selectField = document.getElementById("selectField")

// Icon Handling
changIcon.addEventListener("click" , () => {
    
    let icon = changIcon.children[1]

    if (icon.classList.contains("fa-angle-down")) {

        menuList.classList.remove("hidden" , "hide-menu")
        menuList.classList.add("show-menu");
        menuList.style.display = "block";

        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-up");

    }
    else {

        menuList.classList.remove("show-menu");
        menuList.classList.add("hidden" , "hide-menu")

        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");

    }

})

// Handling

for (let li of menuList.children) {

    li.addEventListener("click" , () => {

        let selectTxt = li.children[1].textContent.trim()
        changIcon.querySelector("p").textContent = selectTxt

        menuList.classList.add("hidden" , "hide-menu")
        changIcon.children[1].classList.replace("fa-angle-up", "fa-angle-down");

    })

}