// Simple JS to interact with the page
const greetBtn = document.getElementById("greetBtn");
const greetMessage = document.getElementById("greetMessage");

greetBtn.addEventListener("click", () => {
  const hours = new Date().getHours();
  let greeting = "Hello!";
  if (hours < 12) greeting = "Good morning!";
  else if (hours < 18) greeting = "Good afternoon!";
  else greeting = "Good evening!";

  greetMessage.textContent = greeting + " Welcome to Vercel deployment!";
});
