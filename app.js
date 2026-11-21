const colors = ["#7baaf7","#41b375","#f7cb4d","#e67c73", "#c21ddb", "#0d0a46", "#9b0433","#a95a9c","#a3b0b9",
"#422a46"];


const btn = document.getElementById("btn");
const color = document.getElementById("color-code");
const copyBtn = document.getElementById("copy-btn");


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});

copyBtn.addEventListener("click", function(){
    let copyText = color.innerText;

   // Copy the text inside the text field
      navigator.clipboard.writeText(copyText);

});