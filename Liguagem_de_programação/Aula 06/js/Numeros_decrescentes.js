function decrescer() {
    var num = document.getElementById("inNum").value
    var out = document.getElementById("out")
    var res = "Os números entre " + num + " e 1 são: "

    for (let i = (num - 1); i > 1; i--) {
        res += i + ", "
    }
    out.textContent = res
}

var bt = document.getElementById("bt")
bt.addEventListener("click", decrescer)