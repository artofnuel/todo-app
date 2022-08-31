const button = document.getElementById("toggle");
const input = document.getElementById("inputField");
const ul = document.querySelector("ul");

const toggleDark = () => {
    let darkMode = document.getElementById("todo");
    darkMode.classList.toggle("dark");
}

const inputLength = () => {
    return input.value.length;
}

const addList = (event) => {
    if (inputLength() > 0 && event.code == "Enter") {
        createList();
    }
}

const createList = function() {
    ul.innerHTML += `
        <div class="eachlist">
            <li class="flex justify-between items-center p-3 py-4 text-md text-veryDarkGreyBlue dark:text-dLightGreyBlue">
                <div class="flex items-center">
                    <button class="todo-toggle mr-3 border-2 w-6 h-6 rounded-full flex justify-center items-center hover:bg-gradient-to-r from-grade1 to-grade2 md:w-8 md:h-8 dark:border-dVeryDarkGreyBlue2">
                        <img src="images/icon-check.svg" alt="" class="w-1/2">
                    </button>
                    ${input.value}
                </div>
                <button id="todoo" class="todo-toggle w-6 h-6 rounded-full flex justify-center items-center md:w-8 md:h-8 dark:border-dVeryDarkGreyBlue2">
                    <img src="images/icon-cross.svg" alt="" class="w-1/2">
                </button>
            </li>
            <hr class="border-veryLightGreyBlue dark:border-dDarkGreyBlue">
        </div>
    `;
}

input.addEventListener("keypress", addList);

var del = document.querySelectorAll('.delList');
for(var i=0; i<del.length; i++){
    del[i].onclick = function() {
        this.parentNode.remove();
    }
}


