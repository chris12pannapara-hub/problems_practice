function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left || right;
}
// Example usage:
// Assuming a binary tree structure is defined elsewhere
// Simple logic to demonstrate LCA function
// Build example tree:
//       3
//      / \
//     5   1
//    / \
//   6   2