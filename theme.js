const changeTheme = () => {
    const theme = document.getElementById('theme');
    const button = document.querySelector('.theme-button');
    const icon = document.querySelector('.theme-icon')
    console.log(theme.attributes.href.textContent)

    button.addEventListener('click', () => {
        if (button.textContent === "Light") {
                button.textContent = "Dark";
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                theme.attributes.href.value = "./styles/light.css"
        }   else {
                button.textContent = "Light";
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                theme.attributes.href.value = "./styles/dark.css"
                console.log(theme.attributes.href.textContent)
        } 

    })
    console.log()
}

export default changeTheme;