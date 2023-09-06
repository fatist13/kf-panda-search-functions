// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    setCharacter("Po", "po", "Buddy, I am the Dragon Warrior.");
  } else if (name === "tigress" || name === "master tigress") {
    setCharacter("Master Tigress", "tigress", "That was pretty hardcore!");
  } else if (name === "mantis" || name === "master mantis") {
    setCharacter("Master Mantis", "mantis", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    setCharacter("Master Monkey", "monkey", "We should hang out.");
  } else {
   setCharacter("?????", "question-mark", "Character Not Found");
  }
}

function setCharacter(name, imgName, quote) {
  document.getElementById("character-name").innerHTML = name;
  document.getElementById("main-img").src = 'img/${imgName}.png';
  document.getElementById("quote").innerHTML = quote;
}