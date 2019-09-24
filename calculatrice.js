
var result = document.createElement("fieldset");
document.body.appendChild(result);

var divi = document.createElement("div");
result.appendChild(divi);

var btnlist = ["1", "2", "3", "+", "4", "5", "6", "*", "7", "8", "9", "/", "0", ".", "=", "-"]

for (i = 0; i < btnlist.length; i++){
    var btn = document.createElement("button");
    btn.innerHTML = btnlist[i];
    result.appendChild(btn);
    btn.addEventListener("click", function() {
        var c = this.innerHTML 
        
        if (c == '='){
            divi.innerHTML = eval(divi.innerHTML)
        } 
        else {
            
            divi.innerHTML = divi.innerHTML + c
        }
        
        var point = "."
        if ( point >= 1) {
            divi.innerHTML = divi.innerHTML + "Error"
        }
    })
}

var reset = document.createElement("button");
var nodetxt = document.createTextNode("RESET");
reset.appendChild(nodetxt)
result.appendChild(reset);
reset.setAttribute("class", "reset")

reset.addEventListener("click", function() {
    divi.innerHTML = ""
})

