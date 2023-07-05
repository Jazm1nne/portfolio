const scrollToAbout = () => {
    const button = document.querySelector('.call-to-action');
    const section = document.querySelector('#contact');
    button.addEventListener('click', () => {
        section.scrollIntoView({behavior: "smooth"})
    })
}

export default scrollToAbout;