// Creating an object that has keys and values that store the story bits
const storybit = {
    1: ["big", "tiny", "purple", "loud", "silly", "happy", "sad", "angry", "sleepy", "hungry"],
    2: ["cat", "dog", "robot", "wizard", "pizza", "banana", "pirate", "ninja", "alien", "zombie"],
    3: ["danced", "jumped", "sang", "whispered", "exploded", "flew", "ate", "slept", "ran", "cried"]
};

// Creating variables required for functionality
const getWordButtons = document.querySelectorAll('.getword');
const resetButton = document.getElementById('resetButton');
const storyText = document.getElementById('storyText');

// Adding event listeners to the buttons
getWordButtons.forEach(button => {
    button.addEventListener('click', function() { //when the button is clicked the custom function will run
        //gets ahold of the data-section attribute , i.e either 1,2 or 3
        const section = this.getAttribute('data-section');
        const wordList = storybit[section]; //gets the array of words from the object
        //randomly selects a word from the array and displys it 
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        document.getElementById(`word${section}`).textContent = randomWord;
        ShowStory();
    });
});

//Function to update the story text 
function ShowStory() {
    //creaating word1, word2 and word3 variables to store the text 
    const word1 = document.getElementById('word1').textContent;
    const word2 = document.getElementById('word2').textContent;
    const word3 = document.getElementById('word3').textContent;
    // checking if all 3 words have been selcted.
    if (word1 !== '____' && word2 !== '____' && word3 !== '____') {
        //If so then the story gets displayed., once all 3 words have been selected

        storyText.textContent = `The ${word1} ${word2} ${word3}`;
    }
}

//The story gets displayed however it stays the same , creating a reset button funciton to reset the story
//when the reset button is clicked 
resetButton.addEventListener('click', function() { //whenever the reset button is clicked 
    
    document.querySelectorAll('.wordshow').forEach(display => {
        display.textContent = '____';
    });
    storyText.textContent = '';
});

