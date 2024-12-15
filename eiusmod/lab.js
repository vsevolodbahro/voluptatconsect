// Assuming SourceNode is defined or imported somewhere in your code
class SourceNode {
    constructor(data) {
        this.data = data;
    }
}

// Example usage:
let from = {
    data: "Some source data here"
};

// Creating a new SourceNode instance
let fromSource = new SourceNode(from.data);

console.log(fromSource);  // This will log the SourceNode object with "Some source data here"
