window.addEventListener('keydown', (event) => {
    event.preventDefault();
    document.querySelector(`#${event.key}`).classList.add('pressed');
    setTimeout(function(){
        document.querySelector(`#${event.key}`).classList.remove('pressed');
    }, 1000);
})
