let count = 0;

const countElement = document.getElementById("count");

function updateCount() {
    countElement.innerHTML = `<h3>Count = ${count}</h3>`;
}

function increment() {
    count++;
    updateCount();
}

function decrement() {
    count--;
    updateCount();
}

function reset() {
    count = 0;
    updateCount();
}

updateCount();