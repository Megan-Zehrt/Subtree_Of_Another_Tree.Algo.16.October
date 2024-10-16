// 572. Subtree of Another tree



// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.







/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    // Helper function to check if two trees are identical
    function isSameTree(s, t) {
        if (!s && !t) return true; // Both nodes are null
        if (!s || !t) return false; // One node is null, the other is not
        if (s.val !== t.val) return false; // Values don't match
        
        // Recursively check both left and right subtrees
        return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
    }
    
    if (!root) return false; // If the main tree is null, return false
    
    // If the current trees are the same, return true
    if (isSameTree(root, subRoot)) return true;
    
    // Otherwise, check the left and right subtrees recursively
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};