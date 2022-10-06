document.addEventListener('keydown', (event) => {
    event.preventDefault();
    const button = document.querySelector(`#${event.key}`);
    keyDown(button);
    setTimeout(function(){
        keyUp(button);
    }, 1000);
})

function keyDown(button){
    button.classList.add('pressed');
}

function keyUp(button){
    button.classList.remove('pressed');
}
