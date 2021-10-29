function insert(num) {
    document.querySelector('.value').value += num
}
function clean() {
    document.querySelector('.value').value = ''
}
function result() {
    let result = document.querySelector('.value').value;
    if(result) {
        document.querySelector('.value').value = eval(result)
    }
}