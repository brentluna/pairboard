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

/*
 Write a JavaScript function to check if a binary tree is balanced. A tree is balanced
 if, at every node, the depth of subtree on the left hand side is equal to the depth of
 the subtree on the right (plus or minus one).
 */

function isBalanced(node) {
  return isBalancedNode(node).balanced;
}
function isBalancedNode(node) {
  if (!node) {
    return {balanced: true, depth: -1};
  }

  let left = isBalancedNode(node.left);
  let right = isBalancedNode(node.right);
  if (left.balanced && right.balanced && Math.abs(left.depth - right.depth) <= 1) {
    return {balanced: true, depth: Math.max(left.depth, right.depth) + 1};
  } else {
    return {isBalanced: false, depth: 0}
  }
} 


/*
 Given a binary tree, write a function to check whether it's a binary search tree or not
 */

function isBST(root, min = null, max = null) {
  if (!root) {
    return true;
  }

  if ((min && min  > root.value) || (max && max < root.value)) {
    return false;
  }
  let left = root.left
  let right = root.right;

  return isBST(left, min, root.value) && isBST(right, root.value, max);
  
}

/*
 Find the lowest common ancestor of two nodes in a binary search tree. Write the
 function in JS. Assume I give you both the root and the two nodes.
*/

function lowestCommonAncestor(root, node1, node2) {
  let currNode = root;
  let max = Math.max(node1.val, node2.val);
  let min = Math.min(node1.val, node2.val);

  while (currNode) {
    if (currNode === node1 || currNode === node2) {
      return currNode;
    } else if (currNode.val >= min && currNode.val <= max) {
      return currNode;
    } else if (currNode > max) {
      currNode = currNode.left;
    } else {
      currNode = currNode.right;
    }
  }

  return null;
}
