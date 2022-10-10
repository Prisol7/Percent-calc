function percentage_1() {
    let temp = 0;
    const percent = document.getElementById("percent").value; 
    const num = document.getElementById("num").value;
    temp = (num / 100) * percent;
    document.getElementById("value1")
        .value = num - temp
}