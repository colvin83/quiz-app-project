
function checkAnswer() {
   
    const options = document.getElementsByName('answer');
    let selectedValue; 

    
    for (let i = 0; i < options.length; i++) {
        
        if (options[i].checked) {
            
            selectedValue = options[i].value;
            
            break;
        }
    }

    
    const feedbackDiv = document.getElementById('feedback');

    
    if (!selectedValue) { 
        feedbackDiv.textContent = "Please select an option!";
        feedbackDiv.style.color = "red"; 
    } else if (selectedValue === 'c') { 
        feedbackDiv.textContent = "Correct Answer! ";
        feedbackDiv.style.color = "green"; 
    } else { 
        feedbackDiv.textContent = "Wrong answer. Try again.";
        feedbackDiv.style.color = "red"; 
    }
}