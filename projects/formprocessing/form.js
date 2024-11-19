document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const first = document.getElementById('first').value.trim();
    const last = document.getElementById('last').value.trim();
    const password = document.getElementById('password').value.trim();
    const age = document.getElementById('age').value.trim();

    if(!first || !last){
        alert("First name and Last name required");
        return;
    }
    if(!age || age < 18){
        alert("You must be 18 or older to submit this form");
        return;
}
const formData = {
    first: first,
    last: last,
    password: password,
    age: age,
    state: document.getElementById('state').value

}
const xhr = new XMLHttpRequest();
xhr.open("POST", "submit.json", true);
xhr.setRequestHeader("Content-Type", "application/json.charset=UTF-8");
xhr.onreadystatechange = function (){
    if (xhr.readyState === 4 && xhr.status === 200){
        const response = JSON.parse(xhr.responseText)
        document.getElementById("message").innerHTML =  response.message;
        document.getElementById("myForm").innerHTML = "";
        alert('Form submitted successfully.');
    }else if(xhr.readyState === 4){
        alert('Error submitting form.');
    }
};
xhr.send(JSON.stringify(formData));

console.log(formData);

});