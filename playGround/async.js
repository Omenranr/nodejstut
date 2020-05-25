//arrow functions :
const arrowFunction = (param1, param2, param3) => {

}

//synchronous function
const hellowWorld = (text) => {
    console.log(text)
}

hellowWorld("hello world")
//asynchronous functions
const asyncHelloWorld = (toDo) => {
    setTimeout(() => {
        //call the callback function
        toDo("Today is monday")
    }, 2000)
}

asyncHelloWorld(
    //what to do
    (text123) => {
        console.log(text123)
        console.log("test 2")
    }
)

