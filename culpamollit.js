function ensureParentObject(parent) {
    if (typeof parent != 'object' || parent === null) {
        // If parent is not an object or is null, initialize it as an empty object
        parent = {};
    }
    
    // Now you can safely perform operations on parent
    parent.child = "This is a child property";
    
    return parent;
}

// Example usage
let parent = undefined;
parent = ensureParentObject(parent);
console.log(parent);  // Output: { child: "This is a child property" }

let anotherParent = { existingProp: "I exist" };
anotherParent = ensureParentObject(anotherParent);
console.log(anotherParent);  // Output: { existingProp: "I exist", child: "This is a child property" }
