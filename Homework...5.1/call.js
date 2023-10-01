function myCall(obj, ...arg) {
    obj.fn = this
    obj.fn(obj,...arg)
    delete obj.fn
}
function f(obj,num) {
    console.log(this)
    return obj.c + num
}

let obj = {
    c : 1
}

Function.prototype.myCall = myCall

console.log(f.myCall(obj,2))

console.log(obj)


