const display = document.querySelector(".display");
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.id == "c") {
            display.textContent = null
        } 
        else if (btn.id == "ce") {
            display.textContent = display.textContent.slice(0, -1)
        } 
        else if (btn.id == "=") {
            display.textContent = eval(display.textContent)
        }
        else {
            display.textContent += btn.id
        }
    })
})