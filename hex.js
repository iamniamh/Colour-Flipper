const hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]

const btn = document.getElementById("btn");
const color = document.getElementById("color-code");
const copyBtn = document.getElementById("copy-btn");


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};

btn.addEventListener("click", function () {
    
    let hexColor = "#";

    for (let i = 0; i<6; i++){
        hexColor = hexColor + hex[getRandomNumber()];
    }
    

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
});

copyBtn.addEventListener("click", function(){
    let copyText = color.innerText;

   // Copy the text inside the text field
      navigator.clipboard.writeText(copyText);

});