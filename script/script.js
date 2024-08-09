document.addEventListener('DOMContentLoaded', () => {
    const radioBorder = document.querySelectorAll('.radio-border');

    for (let i = 0; i < radioBorder.length; i++) {
        radioBorder[i].addEventListener('click', (e) => {
            e.preventDefault()
            radioBorder[i].classList.add('active');
        });
    }


    const btn = document.querySelectorAll(".btn-open")
    const model = document.querySelector(".model")
    const close = document.querySelector(".btn-close")
    const book = document.querySelector(".btn--book")
    for (let i = 0; i < btn.length; i++) {

        btn[i].addEventListener("click", function (e) {
            e.preventDefault();
            model.classList.add("show")
        })

    }
    close.addEventListener("click", function (e) {
        e.preventDefault()
        model.classList.remove("show")
    })
    
    window.addEventListener("click", function (e) {
        if (e.target === model) {
            model.classList.remove("show");
        }
    })
    book.addEventListener("click",function(e){
        e.preventDefault();
        model.classList.remove("show");
    })

});


