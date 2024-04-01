let character = document.getElementById('character');
let btnGryffindor = document.getElementById('btn-gryffindor');
let btnHufflepuff = document.getElementById('btn-hufflepuff');
let btnRavenclaw = document.getElementById('btn-ravenclaw');
let btnSlytherin = document.getElementById('btn-slytherin');
let house = this.getAttribute('data-type');
let newCharacter = document.getElementById('character').value = ${characters};

function newQuestion() {
    newCharacter = arr[randomIndex];

}

btnGryffindor.addEventListener('click', function(){
    if (characters === "gryffindor") {
        addPoint();
        addAnsweredQuestion();
        newQuestion();
    } else {
        addAnsweredQuestion();
        newQuestion();
    }
    
});
btnHufflepuff.addEventListener('click', function(){
    if (characters === "hufflepuff") {
        addPoint();
        addAnsweredQuestion();
        newQuestion();
    } else {
        addAnsweredQuestion();
        newQuestion();
    }
});
btnRavenclaw.addEventListener('click', function(){
    if (characters === "ravenclaw") {
        addPoint();
        addAnsweredQuestion();
        newQuestion();
    } else {
        addAnsweredQuestion();
        newQuestion();
    }
});
btnSlytherin.addEventListener('click', function(){
    if (characters === "slytherin") {
        addPoint();
        addAnsweredQuestion();
        newQuestion();
    } else {
        addAnsweredQuestion();
        newQuestion();
    }
});
// Array of objects with the names
let characters = [
    // Easy
    {
        name : "Harry Potter",
        house : "gryffindor",
        difficulty : "easy",
    },
    {
        name : "Hermione Granger",
        house : "gryffindor",
        difficulty : "easy",
    },
    {
        name : "Ronald Weasley",
        house : "gryffindor",
        difficulty : "easy",
    },
    {
        name : "Neville Longbottom",
        house : "gryffindor",
        difficulty : "easy",
    },
    {
        name : "Percy Weasley",
        house : "gryffindor",
        difficulty : "easy",
    },
    {
        name : "Fred Weasley",
        house : "gryffindor",
        difficulty : "easy",
    },
    {
        name : "George Weasley",
        house : "gryffindor",
        difficulty : "easy",
    },
    {
        name : "Ginny Weasley",
        house : "gryffindor",
        difficulty : "easy",
    },
    {
        name : "Cedric Diggory",
        house : "hufflepuff",
        difficulty : "easy",
    },
    {
        name : "Tom Riddle",
        house : "slytherin",
        difficulty : "easy",
    },
    {
        name : "Severus Snape",
        house : "slytherin",
        difficulty : "easy",
    },
    {
        name : "Vincent Crabbe",
        house : "slytherin",
        difficulty : "easy",
    },
    {
        name : "Gregory Goyle",
        house : "slytherin",
        difficulty : "easy",
    },
    {
        name : "Draco Malfoy",
        house : "slytherin",
        difficulty : "easy",
    },
   //Medium
   { 

    name : "Seamus Finnigan", 

    house : "gryffindor", 

    difficulty : "medium", 

}, 

{ 

    name : "Dean Thomas", 

    house : "gryffindor", 

    difficulty : "medium", 

}, 

{ 

    name : "Lavender Brown", 

    house : "gryffindor", 

    difficulty : "medium", 

}, 

{ 

    name : "Oliver Wood", 

    house : "gryffindor", 

    difficulty : "medium", 

}, 
{
    name : "Lee Jordan",
    house : "gryffindor",
    difficulty : "medium",
},
{
    name : "Katie Bell",
    house : "gryffindor",
    difficulty : "medium",
},
{
    name : "Parvati Patil",
    house : "gryffindor",
    difficulty : "medium",
},
{
    name : "Colin Creevey",
    house : "gryffindor",
    difficulty : "medium",
},
{
    name : "Justin Finch-Fletchley",
    house : "hufflepuff",
    difficulty : "medium",
},
{
    name : "Cho Chang",
    house : "ravenclaw",
    difficulty : "medium",
},
{
    name : "Luna Lovegood",
    house : "ravenclaw",
    difficulty : "medium",
},
{
    name : "Bellatrix Lestrange",
    house : "slytherin",
    difficulty : "medium",
},
{
    name : "Narcissa Malfoy",
    house : "slytherin",
    difficulty : "medium",
},
{
    name : "Lucius Malfoy",
    house : "slytherin",
    difficulty : "medium",
},
{
    name : "Marcus Flint",
    house : "slytherin",
    difficulty : "medium",
},
//Hard
    {
        name : "Sirius Black",
        house : "gryffindor",
        difficulty : "hard",
    },
    {
        name : "Lily Evans",
        house : "gryffindor",
        difficulty : "hard",
    },
    {
        name : "Remus Lupin",
        house : "gryffindor",
        difficulty : "hard",
    },
    {
        name : "Peter Pettigrew",
        house : "gryffindor",
        difficulty : "hard",
    },
    {
        name : "James Potter",
        house : "gryffindor",
        difficulty : "hard",
    },
    {
        name : "Bill Weasley",
        house : "gryffindor",
        difficulty : "hard",
    },
    {
        name : "Charlie Weasley",
        house : "gryffindor",
        difficulty : "hard",
    },
   
   
    {
        name : "Angelina Johnson",
        house : "gryffindor",
        difficulty : "hard",
    },
   
    {
        name : "Alicia Spinnet",
        house : "gryffindor",
        difficulty : "hard",
    },
   
   
    {
        name : "Cormac McClaggen",
        house : "gryffindor",
        difficulty : "hard",
    },
    
    
    {
        name : "Romilda Vane",
        house : "gryffindor",
        difficulty : "hard",
    },
    {
        name : "Dennis Creevey",
        house : "gryffindor",
        difficulty : "hard",
    },
    {
        name : "Newt Scamander",
        house : "hufflepuff",
        difficulty : "hard",
    },
    {
        name : "Nymphadora Tonks",
        house : "hufflepuff",
        difficulty : "hard",
    },
   
    {
        name : "Ernie Macmillan",
        house : "hufflepuff",
        difficulty : "hard",
    },
    {
        name : "Hannah Abbott",
        house : "hufflepuff",
        difficulty : "hard",
    },
   
    {
        name : "Susan Bones",
        house : "hufflepuff",
        difficulty : "hard",
    },
    {
        name : "Zacharias Smith",
        house : "hufflepuff",
        difficulty : "hard",
    },

   
    {
        name : "Marietta Edgecombe",
        house : "ravenclaw",
        difficulty : "hard",
    },
    {
        name : "Terry Boot",
        house : "ravenclaw",
        difficulty : "hard",
    },
    {
        name : "Michael Corner",
        house : "ravenclaw",
        difficulty : "hard",
    },
    {
        name : "Padma Patil",
        house : "ravenclaw",
        difficulty : "hard",
    },
    
    
    
    {
        name : "Millicent Bulstrode",
        house : "slytherin",
        difficulty : "hard",
    },
   
    {
        name : "Pansy Parkinson",
        house : "slytherin",
        difficulty : "hard",
    },
    {
        name : "Blaise Zabini",
        house : "slytherin",
        difficulty : "hard",
    },
]
// A function that keeps score of all the correct answers
function addPoint() {
    let correctAnswers = parseInt(document.getElementById('correct-answer').innerText);
    document.getElementById('correct-answer').innerText = ++correctAnswers; 
}
// A function that keeps score of the amount of questions answered
function addAnsweredQuestion() {
    let questionsAnswered = parseInt(document.getElementById('questions-answered').innerText);
    document.getElementById('questions-answered').innerText = ++questionsAnswered;
}
// A function that checks if the answer is correct

// What happends if the answer is correct?

//How many questions have I answered?

