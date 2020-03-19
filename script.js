const name = document.getElementById('name');
const my_input = document.getElementById('my_input');
const submit_btn = document.getElementById('submit_btn');
const form_container = document.getElementById('form_container');
const hi = document.getElementById('hi');

const btnClicked = () => {
    // console.log(my_input.value)
    name.innerHTML = my_input.value;
    // my_input.value = "";
    form_container.style.visibility = "hidden"
}

const helloAlert = (event) => {
    alert("Hello, my name is "+my_input.value+".")
}

submit_btn.addEventListener('click', btnClicked)
hi.addEventListener('click', helloAlert)