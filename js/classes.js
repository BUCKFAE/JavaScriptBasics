class MyFancyClass {
    constructor () {
        console.log("A new (fancy!) class has been created")
        this.height = 3
    }

    getHeight() {
        console.log("Function getHeight() was called!")
        return this.height
    }

    setHeight(newHeight) {
        console.log("Function setHeight() was called!")
        this.height = newHeight
    }
}

function classDemo() {
    let fancyClass1 = new MyFancyClass()
    
    // Calling functions
    let height = fancyClass1.getHeight()
    console.log("Initial height: " + height)

    fancyClass1.setHeight(4)
    console.log("New height: " + fancyClass1.getHeight())

}