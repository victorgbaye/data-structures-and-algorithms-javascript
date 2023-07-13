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
    this.insert = function(value){
        let newNode = new Node(value)
        if(this.isEmpty){
            return this.root = newNode
        }else{
            return this.insertNode(this.root, newNode)
        }
    }

    this.insertNode = function(root, Node){
        if(Node.value < root){
            if(root.left === null){
               root.left = Node
            }else{
                this.insertNode(root.left, Node)
            }

        }else{
            if (root.right === null) {
                root.right = Node
            }else{
                this.insertNode(root.right, Node)
            }
        }
    }
}