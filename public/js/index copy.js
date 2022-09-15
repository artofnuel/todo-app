const button = document.getElementById("toggle");
const input = document.getElementById("inputField");
const theList = document.getElementById("theList");

const toggleDark = () => {
    let darkMode = document.getElementById("todo");
    darkMode.classList.toggle("dark");
}

const inputLength = function() {
    return input.value.length;
}

const addList = function(event) {
    if (inputLength() > 0 && event.code == "Enter") {
        createList();
    }
}

const createList = function() {
    theList.innerHTML += `
        <!-- List 1 -->
            <div class="eachlist flex flex-col justify-between w-11/12 mx-auto rounded-t-lg bg-white md:w-1/2 dark:bg-dVeryDesatBlue">
                <div class="flex justify-between items-center p-3 py-4 text-md text-veryDarkGreyBlue dark:text-dLightGreyBlue">
                    <div class="flex items-center">
                        <button class="todo-toggle mr-3 border-2 w-6 h-6 rounded-full flex justify-center items-center hover:bg-gradient-to-r from-grade1 to-grade2 md:w-8 md:h-8 dark:border-dVeryDarkGreyBlue2">
                            <img src="images/icon-check.svg" alt="" class="w-1/2">
                        </button>
                    ${input.value}
                    </div>
                    <button class="delList w-6 h-6 rounded-full flex justify-center items-center md:w-8 md:h-8 dark:border-dVeryDarkGreyBlue2">
                        <img src="images/icon-cross.svg" alt="" class="w-1/2">
                    </button>
                </div>
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


