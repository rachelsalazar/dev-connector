// OLD WAY OF WRITING FUNCTION
// function isEmpty(value) {
// }

// New way of writing function in ES7, using arrows
const isEmpty = value => 
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);

export default isEmpty;