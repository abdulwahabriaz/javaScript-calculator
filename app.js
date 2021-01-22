function cal(num){
    var input = document.getElementById("cal_input")
    input.value += num
}

function result(){
    var input = document.getElementById("cal_input")
    input.value = eval(input.value)
}

function cleraAll(){
    var input = document.getElementById("cal_input")
    input.value = ""
}

function square(){
    var input = document.getElementById("cal_input")
    input.value = (input.value*input.value)
}

function devide(){
    var input = document.getElementById("cal_input")
    input.value = 1 / input.value
}