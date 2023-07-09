const showProject = () => {
    const buttons = document.querySelectorAll('.more-details');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const parentElement = button.parentElement;
            if (button.textContent === 'Show project') {
                parentElement.style.height = 'fit-content';
                parentElement.querySelector('iframe').style.opacity = "1";
                button.textContent = 'Show less'
            } else {
                parentElement.style.height = '200px';
                button.textContent = 'Show project'
                parentElement.querySelector('iframe').style.opacity = "0";
            }
        })
    })
}

export default showProject;