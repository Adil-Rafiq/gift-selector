const button = document.querySelector('#submit');
const displayBox = document.querySelector('.display-box');


//event
button.addEventListener('click', myFunction);

function myFunction() {
    const foodSelect = document.getElementById('food').value;
    const transportSelect = document.getElementById('transport').value;
    const checkboxSelect = document.getElementById('baloons');

    var checkboxSelectValue;
    if (checkboxSelect.checked) {
        checkboxSelectValue = checkboxSelect.value;
    }
    else {
        checkboxSelectValue = '0';
    }


    //calculated
    var result = Number(foodSelect) + Number(transportSelect) + Number(checkboxSelectValue); 
    result =  result.toString();

    displayBox.innerHTML = '';
    // displayBox.innerHTML = `<p>Total gift cost:<br>$${result}</p>`;
    displayBox.innerHTML = `<p>Total gift cost:<div>$${result}</div></p>`;
}




// console.log(typeof result1);
//foodSelect.value
//foodSelect.selectedOptions