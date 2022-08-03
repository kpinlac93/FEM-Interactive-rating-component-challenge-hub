const submit = document.querySelector(".submit");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const buttons = document.querySelectorAll(".btn");
const score = document.querySelector(".score");
let selected_score = 3;

submit.addEventListener("click", onSubmit);
buttons.forEach( btn => {
    btn.addEventListener("click", RatingButton);
})




function onSubmit(){
    card1.classList.add("hide");
    score.textContent = selected_score;
    card2.classList.remove("hide");
}

function RatingButton(event) {
    buttons.forEach(btn => {
        btn.classList.remove("select");
    })
    if (event.target.classList.contains("btn")){
        event.target.classList.add("select");
    } else {
        event.target.parentElement.classList.add("select")
    }

    selected_score = event.target.textContent;
    // console.log(selected_score);
}

// console.log(buttons);