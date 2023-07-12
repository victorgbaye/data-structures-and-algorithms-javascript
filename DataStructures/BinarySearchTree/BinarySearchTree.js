var Node = function(value){
    this.value = value
    this.left = nnull
    this.right = null
}

let BinaryTree = function(){
    this.root = null

    this.isEmpty = function(){
        return this.root === null
    }
}