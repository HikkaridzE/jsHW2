inputInt(5, 15);
function inputInt(a,b) {
  let n = setInterval(() => {
    console.log(a++);
    if (a > b) clearInterval(n);
  }, 1000)
}