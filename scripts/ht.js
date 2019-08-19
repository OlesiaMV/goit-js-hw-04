const obj1 = {
    name: "vasia"
}

const obj2 = {
    name: "grisha"
}


let fz = function() {
    console.log('hello ' + this.name);
    
}

fz.call(obj1);