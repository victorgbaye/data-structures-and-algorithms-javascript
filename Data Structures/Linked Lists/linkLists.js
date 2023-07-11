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

    }
    this.prepend = function(element){
        const newNode = new NodeClass(element);
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode.element
        }
    }
    this.append = function(){
        let node = new NodeClass(element);
        if(this.isEmpty()){
          this.head = node
        }else{
          let prev = this.head;
          while(prev.next){
            prev = prev.next
          }
          prev.next = node
        }
      }

    this.print = function(){
        if (this.isEmpty()) {
            console.log('This is an empty list');
            
        }else{
            let curr = this.head
            let listVale = ''
            while(curr){
                listVale += `${curr.element}`
                curr = curr.next
            }
            console.log(listVale);
        }
    }
    // this.find = function(element){
    //     const headNode =new NodeClass("head");
    //      while (element !== headNode) {
    //         headNode = headNode.next 
    //      }
    // }

}


const sampleNode = new linkedList;
console.log(sampleNode.getSize)