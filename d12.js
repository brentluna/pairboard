/*
Given a node in a Binary Search Tree, find the node with the next largest value.
Assume you don't have the root of the tree, just a single node from it.
*/

function nextLargest(node) {

  if (node.right) {
    return leftMostNode(node.right);
  } 
  let currNode = node;
  while (true) {
    let parentNode = currNode.parent;

    if (!parentNode) {
      return null;
    } else if (parentNode.left === currNode) {
      return currNode; 
    } else {
      currNode = parentNode;
    }
  }
} 

function leftMostNode(node) {
  let currNode = node;
  while (true) {
   if (!currNode.left){
     return currNode;
   } else {
     currNode = currNode.left;
   }
  }
}
