document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("theme").addEventListener("click", changeTheme);

let count = 0;

function changeTheme() {
  document.body.classList.toggle("dark");
}

function increment() {
  count++;
  display();
}

function decrement() {
  count--;
  display();
}

function reset() {
  count = 0;
  display();
}

function display() {
  document.getElementById("counter").innerText = count;
}
