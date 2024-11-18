let input_1 = document.querySelector("#task_1 > input");

let taskOneClick = () => {
    if (input_1.value != "") {
        alert(input_1.value);
        input_1.value = "";
    }
}

let img = document.querySelector("#task_2 > img");
let checker = true;

let taskTwoClick = () => {
    if (checker) {
        img.src = 'images/angel.png';
        checker = false;
    } else {
        img.src = 'images/devil.png';
        checker = true;
    }
}

let button_3 = document.querySelector("#task_3 > button");

let taskThreeClick = () => {
    button_3.textContent = parseInt(button_3.textContent) + 1;
}

let input_4 = document.querySelector("#task_4 input");

let taskFourClick = (num) => {
    switch (num) {
        case 0:
            input_4.value = input_4.value + 0;
            break;
        case 1:
            input_4.value = input_4.value + 1;
            break;
        case 2:
            input_4.value = input_4.value + 2;
            break;
        case 3:
            input_4.value = input_4.value + 3;
            break;
        case 4:
            input_4.value = input_4.value + 4;
            break;  
        case 5:
            input_4.value = input_4.value + 5;
            break;
        case 6:
            input_4.value = input_4.value + 6;
            break;
        case 7:
            input_4.value = input_4.value + 7;
            break;
        case 8:
            input_4.value = input_4.value + 8;
            break;
        case 9:
            input_4.value = input_4.value + 9;
            break;
        case 10:
            input_4.value = input_4.value.slice(0, -1);
            input_4.focus();
            input_4.setSelectionRange(input_4.value.length, input_4.value.length);
            break;
        case 11:
            input_4.value = "";
            break;  
        case 12:
            input_4.value = input_4.value + '+';
            break;
        case 13:
            input_4.value = input_4.value + '-';
            break;      
        case 14:
            input_4.value = input_4.value + '*';
            break;
        case 15:
            input_4.value = input_4.value + '/';
            break;
    }
}