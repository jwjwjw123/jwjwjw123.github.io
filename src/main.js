function updateYear(){
    let date = new Date();
    let year = date.getFullYear();
    document.querySelector('#copyright').innerHTML = "Copyright &copy; " + year + " Sam Jing Wen";
}

window.addEventListener('DOMContentLoaded', () => {
    updateYear();
});