let string = "";
let memory = 0;
const buttons = document.querySelectorAll('.button');
const input = document.querySelector('.calculator-input');
const memoryIndicator = document.getElementById('memoryIndicator');
const mPlusButton = document.getElementById('mPlus');
const mMinusButton = document.getElementById('mMinus');

// Update memory indicator
function updateMemoryIndicator() {
  memoryIndicator.textContent = memory !== 0 ? 'M' : '';
}

// Handle button clicks
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;
    
    if (buttonText === '=') {
      try {
        
        string = string.replace(/%/g, '/100');
        string = eval(string).toString();
        input.value = string;
      } catch (error) {
        input.value = "Error";
        string = "";
      }
    } 
    else if (buttonText === 'C') {
      string = "";
      input.value = string;
    }
    else if (buttonText === 'M+') {
      try {
        const currentValue = eval(string.replace(/%/g, '/100')) || 0;
        memory += currentValue;
        updateMemoryIndicator();
      } catch {
        
      }
    }
    else if (buttonText === 'M-') {
      try {
        const currentValue = eval(string.replace(/%/g, '/100')) || 0;
        memory -= currentValue;
        updateMemoryIndicator();
      } catch {
        
      }
    }
    else if (buttonText === '%') {
      
      string += buttonText;
      input.value = string;
    }
    else {
      string += buttonText;
      input.value = string;
    }
  });
});

// Initialize memory indicator
updateMemoryIndicator();

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  
  if (/[0-9]|\.|\+|\-|\*|\//.test(key)) {
    string += key;
    input.value = string;
  } 
  else if (key === 'Enter') {
    try {
      string = eval(string).toString();
      input.value = string;
    } catch {
      input.value = "Error";
      string = "";
    }
  } 
  else if (key === 'Escape' || key === 'c' || key === 'C') {
    string = "";
    input.value = string;
  }
  else if (key === '%') {
    string += key;
    input.value = string;
  }
});
