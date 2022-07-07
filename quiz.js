const quizform = document.querySelector(".quiz-form");
const btn = document.querySelector(".submit_button");
const marks = document.querySelector("#marks-quiz");

const answers = ["Sahara","Russia","Nepal","Peaty soil","Mumbai","Jaipur","Anaemia","Rajasthan","Ganga"];

let checkAns = () => {
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizform);
    for (let value of formResult.values()) {
        if (value === answers[index]) {
            score += 1;
        }       
        index += 1;
    }
    marks.innerText = `Your Score is: ${score}`;
};
btn.addEventListener("click",checkAns,false);