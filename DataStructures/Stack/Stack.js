//Stack data structure implementation

/*
Stack data structure operations


*Push: Adding an element to a stack
*Peek: Checking list length
*Finding an element in a stack
*Pop: Removing an element from a stack
*Clear: Clearing a stack

*/

let StackClass = function(){
    this.datastore = []
    this.size = 0

    this.isEmpty = function(){
        return this.size = 0
    }

    this.push = function (value) {
        this.datastore.push(value)
        this.size++
        
    }
    this.pop = function () {
        this.datastore.pop()
        this.size--
    }

    this.peek = function (value){
        return this.datastore[this.datastore.length-1]
    }

    this.clear = function(){
        delete this.datastore
        this.datastore = []
        this.size = 0
    }

}