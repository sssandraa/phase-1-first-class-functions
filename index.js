function receivesAFunction (cb){
return cb()
}

function cb(){
console.log("hey")
}

function returnsANamedFunction() {
    return function hello(){
        console.log("hello")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("butterfly")
    }
}