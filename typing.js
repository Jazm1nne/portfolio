export const typeWriter = () => {
    const typewriter = document.querySelector('h1');
    const text = `Hello, how are you doing?`;
    const textLength = text.length;
    const cadence = 150;
    let index = 0;
    let intervalId; // Variable to hold the interval ID
  
    intervalId = setInterval(() => {
      if (index < textLength) {
        typewriter.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(intervalId); // Stop the interval when typing is complete
      }
    }, cadence);
  };
  
