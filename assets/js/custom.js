
function openLinkedin(){
    window.open("https://www.linkedin.com/in/dnyaneshwar2023/","_blank")
}

function openCV(){
    window.open("https://drive.google.com/file/d/1rtlrOVe4_v66_Qhb3Z_k2MnoUfqzqfgv/view?usp=sharing","_blank")
}

function openArticle(){
    window.open("https://www.geeksforgeeks.org/queries-to-replace-every-array-element-by-its-xor-with-a-given-value-with-updates/","_blank")
}

function submitForm(){
    alert('Submitted')
}

var form = document.getElementById("contact");

form.addEventListener('submit', handleForm);

function handleForm(event) {
    alert('Submitted') 
    event.preventDefault(); 
} 
