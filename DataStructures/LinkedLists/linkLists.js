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
    this.append = function(element){
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
        this.size++
      }
      this.insert = function(element, index){
        if(index < 0 || index > this.size){
          return
        }if(index === 0){
          this.prepend(element)
        }else{
          let node = new Node(element)
          let prev = this.head
          for(let i = 0; i < index - 1; i++){
            prev = prev.next
          }
          node.next = prev.next
          prev.next = node
          this.size++
        }
      }

      this.removeFrom = function(index){
        if(index < 0 || index > this.size){
          return null
        }
        let removedNode
        if(index === 0){
          removedNode = this.head
          this.head === this.head.next
        }else{
          let prev = this.head
          if(index > 0){
            for(let i = 0; i < index -1; i++){
              prev = prev.next
            }
            removedNode = prev.next;
            prev.next = removedNode.next
            
          }
        }
        this.size--
        return removedNode.element
      }

      this.removeValue = function(element){
        if(this.isEmpty()){
          return null
        }if(this.head.element === element){
          this.head = this.head.next
          this.size--
          return element
        }else{
          let prev = this.head
          while((prev.next) && (prev.next.element !== element)){
            prev = prev.next
          }
          if(prev.next){
            const removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            return element
          }
          return null
        }
      }
      this.search = function(element) {
        if(this.isEmpty()){
            return -1
        }
        let curr = this.head;
        let i = 0
        while(curr){
            if(curr.element === element){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
      }
      this.reverse = function(){
        let prev = null
        let curr = this.head
        while(curr){
          next = curr.next
          curr.next = prev
          prev = curr
          curr = next
        }
        this.head = prev
        return prev
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

