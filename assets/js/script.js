let currentCharacter;

let btnGryffindor = document.getElementById("btn-gryffindor");
let btnHufflepuff = document.getElementById("btn-hufflepuff");
let btnRavenclaw = document.getElementById("btn-ravenclaw");
let btnSlytherin = document.getElementById("btn-slytherin");

document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

function startGame() {
    newQuestion();
}
function newQuestion() {
    if (characters.length === 0) {
        alert(`Great job! You have sorted all the students!`)
    }
    let randomIndex = Math.floor(Math.random() * characters.length);
    currentCharacter = characters[randomIndex];
    document.getElementById("character").textContent = currentCharacter.name;

    sortedCharacters.push(characters.splice(randomIndex, 1)[0]);
}
function checkAnswer(house) {
    if (currentCharacter.house === house) {
        addPoint();
    }
    addAnsweredQuestion();
    newQuestion();
}
btnGryffindor.addEventListener("click", function() {
    checkAnswer("gryffindor");
});
btnHufflepuff.addEventListener("click", function() {
    checkAnswer("hufflepuff");
});
btnRavenclaw.addEventListener("click", function() {
    checkAnswer("ravenclaw");
});
btnSlytherin.addEventListener("click", function() {
    checkAnswer("slytherin");
});
// Function to increment the score for correct answers
function addPoint() {
    let correctAnswers = parseInt(document.getElementById("correct-answer").innerText);
    document.getElementById("correct-answer").innerText = ++correctAnswers;
}
// Function to increment the total number of questions answered
function addAnsweredQuestion() {
    let questionsAnswered = parseInt(document.getElementById("questions-answered").innerText);
    document.getElementById("questions-answered").innerText = ++questionsAnswered
}
// An array of characters
let characters = [
    // Easy
    {
      name: "Harry Potter",
      house: "gryffindor",
      difficulty: "easy",
    },
    {
      name: "Hermione Granger",
      house: "gryffindor",
      difficulty: "easy",
    },
    {
      name: "Ronald Weasley",
      house: "gryffindor",
      difficulty: "easy",
    },
    {
      name: "Neville Longbottom",
      house: "gryffindor",
      difficulty: "easy",
    },
    {
      name: "Percy Weasley",
      house: "gryffindor",
      difficulty: "easy",
    },
    {
      name: "Fred Weasley",
      house: "gryffindor",
      difficulty: "easy",
    },
    {
      name: "George Weasley",
      house: "gryffindor",
      difficulty: "easy",
    },
    {
      name: "Ginny Weasley",
      house: "gryffindor",
      difficulty: "easy",
    },
    {
      name: "Cedric Diggory",
      house: "hufflepuff",
      difficulty: "easy",
    },
    {
      name: "Tom Riddle",
      house: "slytherin",
      difficulty: "easy",
    },
    {
      name: "Severus Snape",
      house: "slytherin",
      difficulty: "easy",
    },
    {
      name: "Vincent Crabbe",
      house: "slytherin",
      difficulty: "easy",
    },
    {
      name: "Gregory Goyle",
      house: "slytherin",
      difficulty: "easy",
    },
    {
      name: "Draco Malfoy",
      house: "slytherin",
      difficulty: "easy",
    },
    //Medium
    {
      name: "Seamus Finnigan",
  
      house: "gryffindor",
  
      difficulty: "medium",
    },
  
    {
      name: "Dean Thomas",
  
      house: "gryffindor",
  
      difficulty: "medium",
    },
  
    {
      name: "Lavender Brown",
  
      house: "gryffindor",
  
      difficulty: "medium",
    },
  
    {
      name: "Oliver Wood",
  
      house: "gryffindor",
  
      difficulty: "medium",
    },
    {
      name: "Lee Jordan",
      house: "gryffindor",
      difficulty: "medium",
    },
    {
      name: "Katie Bell",
      house: "gryffindor",
      difficulty: "medium",
    },
    {
      name: "Parvati Patil",
      house: "gryffindor",
      difficulty: "medium",
    },
    {
      name: "Colin Creevey",
      house: "gryffindor",
      difficulty: "medium",
    },
    {
      name: "Justin Finch-Fletchley",
      house: "hufflepuff",
      difficulty: "medium",
    },
    {
      name: "Cho Chang",
      house: "ravenclaw",
      difficulty: "medium",
    },
    {
      name: "Luna Lovegood",
      house: "ravenclaw",
      difficulty: "medium",
    },
    {
      name: "Bellatrix Lestrange",
      house: "slytherin",
      difficulty: "medium",
    },
    {
      name: "Narcissa Malfoy",
      house: "slytherin",
      difficulty: "medium",
    },
    {
      name: "Lucius Malfoy",
      house: "slytherin",
      difficulty: "medium",
    },
    {
      name: "Marcus Flint",
      house: "slytherin",
      difficulty: "medium",
    },
    //Hard
    {
      name: "Sirius Black",
      house: "gryffindor",
      difficulty: "hard",
    },
    {
      name: "Lily Evans",
      house: "gryffindor",
      difficulty: "hard",
    },
    {
      name: "Remus Lupin",
      house: "gryffindor",
      difficulty: "hard",
    },
    {
      name: "Peter Pettigrew",
      house: "gryffindor",
      difficulty: "hard",
    },
    {
      name: "James Potter",
      house: "gryffindor",
      difficulty: "hard",
    },
    {
      name: "Bill Weasley",
      house: "gryffindor",
      difficulty: "hard",
    },
    {
      name: "Charlie Weasley",
      house: "gryffindor",
      difficulty: "hard",
    },
  
    {
      name: "Angelina Johnson",
      house: "gryffindor",
      difficulty: "hard",
    },
  
    {
      name: "Alicia Spinnet",
      house: "gryffindor",
      difficulty: "hard",
    },
  
    {
      name: "Cormac McClaggen",
      house: "gryffindor",
      difficulty: "hard",
    },
  
    {
      name: "Romilda Vane",
      house: "gryffindor",
      difficulty: "hard",
    },
    {
      name: "Dennis Creevey",
      house: "gryffindor",
      difficulty: "hard",
    },
    {
      name: "Newt Scamander",
      house: "hufflepuff",
      difficulty: "hard",
    },
    {
      name: "Nymphadora Tonks",
      house: "hufflepuff",
      difficulty: "hard",
    },
  
    {
      name: "Ernie Macmillan",
      house: "hufflepuff",
      difficulty: "hard",
    },
    {
      name: "Hannah Abbott",
      house: "hufflepuff",
      difficulty: "hard",
    },
  
    {
      name: "Susan Bones",
      house: "hufflepuff",
      difficulty: "hard",
    },
    {
      name: "Zacharias Smith",
      house: "hufflepuff",
      difficulty: "hard",
    },
  
    {
      name: "Marietta Edgecombe",
      house: "ravenclaw",
      difficulty: "hard",
    },
    {
      name: "Terry Boot",
      house: "ravenclaw",
      difficulty: "hard",
    },
    {
      name: "Michael Corner",
      house: "ravenclaw",
      difficulty: "hard",
    },
    {
      name: "Padma Patil",
      house: "ravenclaw",
      difficulty: "hard",
    },
  
    {
      name: "Millicent Bulstrode",
      house: "slytherin",
      difficulty: "hard",
    },
  
    {
      name: "Pansy Parkinson",
      house: "slytherin",
      difficulty: "hard",
    },
    {
      name: "Blaise Zabini",
      house: "slytherin",
      difficulty: "hard",
    },
  ];
  let sortedCharacters = [];