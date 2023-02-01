class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    } 

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newnode = new Node(value)
        if (this.isEmpty()) {
            this.root = newnode
        }
        else {
            this.insertNode(this.root, newnode)
        }
    }

    insertNode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left == null) {
                root.left = newnode
            }
            else {
                this.insertNode(root.left, newnode)
            }
        }
        else {
            if (root.right == null) {
                root.right = newnode
            } else {
                this.insertNode(root.right, newnode)
            }
        }
    }


    search(root, value) {
        if (!root) {
            return false
        }
        else {
            if (root.value === value) {
                return true
            }
            else if (value < root.value) {
                return this.search(root.left, value)
            }
            else {
                return this.search(root.right, value)
            }
        }
    }


    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }


    postorder(root) {
        if (root) {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
        }
    }


    Inorder(root) {
        if (root) {
            this.Inorder(root.left)
            console.log(root.value)
            this.Inorder(root.right)
        }
    }



    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.min(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }


}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 15))
console.log(bst.search(bst.root, 3))
console.log(bst.search(bst.root, 7))
console.log(bst.search(bst.root, 12))
// console.log('');
// bst.Inorder((bst.root))
// console.log('');
// bst.preOrder((bst.root))
// console.log('');
// bst.postorder((bst.root))
// console.log('');
// bst.levelOrder()
// console.log('');
// console.log(bst.min(bst.root));
// console.log('');
// console.log(bst.max(bst.root));

// bst.delete(3)
bst.levelOrder()
