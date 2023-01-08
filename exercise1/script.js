console.log("*****Exercise 1 : Animation With The Alphabet*****")

let chooseElement;

const move = function(element) {
    let elements = document.querySelectorAll('.box')

    elements.forEach(element => {
        element.addEventListener("mousedown", () => {
            element.style.position = "absolute"
            chooseElement = element

            document.onmousemove = (e) => {
                let x = e.pageX
                let y = e.pageY

                chooseElement.style.left = x + "px"
                chooseElement.style.top = y + "px"
            }
        })
    })

    document.onmouseup = function (e) {
        chooseElement = null
    }
}