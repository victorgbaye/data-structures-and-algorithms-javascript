//Linked List data structure implementation

/*
Linked List data structure operations

*Insertion - Add an element to the begining, end or given index,
*Deletion- to remove an item given its value
*Search - to find element given its value
*isEmpty
*Size

*/

//Node class
var NodeClass = function(element){
    this.element = element
    this.next = null
}

var linkedList = function(){
    this.head = null
    this.size == 0

    this.isEmpty = function(){
        return this.size == 0
    }

    this.getSize = function(){
        return this.size

        this.prepend = function(element){
            const newNode = new NodeClass(element);
            if (this.isEmpty) {
                this.head = NodeClass
            } else {
                
            }
        }
    }

}


const sampleNode = new linkedList;
console.log(sampleNode.getSize)