// Assume this is our normParams object with nested objects and arrays
let normParams = {
    selectionPredicates: {
        category1: ['predicateA', 'predicateB'],
        category2: ['predicateC']
    }
};

// The param we want to work with
let param = 'category1';

// The predicate we want to add
let pred = 'predicateD';

// Adding the predicate to the appropriate array
normParams.selectionPredicates[param].push(pred);

console.log(normParams.selectionPredicates);
// Output: 
// {
//     category1: ['predicateA', 'predicateB', 'predicateD'],
//     category2: ['predicateC']
// }
