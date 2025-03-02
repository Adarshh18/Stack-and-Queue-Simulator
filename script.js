let stack = [];
let queue = [];
const maxSize = 5;

function updateDisplay(id, structure) {
    const container = document.getElementById(id);
    container.innerHTML = '';
    structure.forEach(item => {
        let div = document.createElement("div");
        div.className = "element";
        div.textContent = item;
        container.appendChild(div);
    });
}

function pushStack() {
    let value = document.getElementById("element").value;
    if (!value) {
        alert("Please enter a value.");
        return;
    }
    if (stack.length >= maxSize) {
        alert("Stack Overflow!");
        return;
    }
    stack.push(value);
    updateDisplay("stack", stack);
}

function popStack() {
    if (stack.length === 0) {
        alert("Stack Underflow!");
        return;
    }
    stack.pop();
    updateDisplay("stack", stack);
}

function enqueue() {
    let value = document.getElementById("element").value;
    if (!value) {
        alert("Please enter a value.");
        return;
    }
    if (queue.length >= maxSize) {
        alert("Queue Overflow!");
        return;
    }
    queue.push(value);
    updateDisplay("queue", queue);
}

function dequeue() {
    if (queue.length === 0) {
        alert("Queue Underflow!");
        return;
    }
    queue.shift();
    updateDisplay("queue", queue);
}