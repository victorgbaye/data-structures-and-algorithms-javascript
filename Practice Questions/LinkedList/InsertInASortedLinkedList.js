// inserting a node into a sorted linked list

let Node = function(value){
    this.value = value;
    this.next = null
  }
  
  let linkedList = function(){
    this.head = null
    this.size = 0
    
    this.isEmpty = function(){
      return this.size === 0
    }
    this.insert = function(value){
      let node = new Node(value)
      if(this.isEmpty()){
        this.head = node
      }else if(node.value <= this.head.value){
          node.next = this.head
          this.head = node
      }else{
        let curr = this.head
        while(curr.next && curr.next.value < node.value){
        curr = curr.next
      }
        node.next = curr.next
        curr.next = node
    }
    this.size++
  
    }
     this.print = function(){
      if(this.isEmpty()){
        console.log("this an empty list")
      }else{
        let listValue = ``
        let curr = this.head
        while(curr){
          listValue += `${curr.value} `
          curr = curr.next
        }
        console.log(listValue)
      }
    }
  }
  
  
  
  let sample = new linkedList()
  
  sample.insert(5)
  sample.insert(7)
  sample.insert(3)
  sample.insert(4)
  sample.insert(9)
  sample.insert(2)
  sample.print()
  