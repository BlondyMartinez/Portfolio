const TEXT = `Welcome, Fellow Adventurer!\r\n 
            Are you ready to dive into a portfolio experience, or are you looking for a more straightforward journey?\r\n
            Choose your quest wisely!`

document.addEventListener('DOMContentLoaded', function() {
    showText(document.getElementById("bubble-text"), TEXT, 0, 60);
});

function showText(bubbleText, text, index, interval) {
    if (index < text.length) {
        bubbleText.textContent += text[index]; 
        index++; 

        setTimeout(function() {
            showText(bubbleText, text, index, interval); 
        }, interval);
    }
}