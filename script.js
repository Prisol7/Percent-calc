function percentage_1() {
    let temp = 0;
    // Method returns the element of percent id
    const percent = document.getElementById("percent").value;
      
    // Method returns the element of num id
    const num = document.getElementById("num").value;
    temp = (num / 100) * percent;

    document.getElementById("value1")
        .value = num - temp
}