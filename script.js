var tabs = document.getElementsByClassName("tab")
var buttons = document.getElementsByTagName("button")
buttons[0].classList.add("selected")

function showTab(event, name){

    for(var button of buttons){ 
        button.classList.remove("selected")
    }

    event.currentTarget.classList.add("selected")

for(var tab of tabs){ 
    tab.style.display = "none"
}
    document.getElementById(name).style.display = "block"
}