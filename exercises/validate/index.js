// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    // recursion to pass through  the information 
    // recursion to pass through  the information 
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }
    //  Validate funtion calls will be the one that will do the recursive funtion calls 
    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }
    
    if (node.right && !vaildate(node.right, node.data, max)) {
        return false;
    }

    return true;
}

module.exports = validate;
