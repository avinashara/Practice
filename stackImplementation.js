let array = [];
let push = (ele) => array.push(ele);
let pop = () => array.pop();
let isStackEmpty = !array.length;

let stack = {
    pushToStack: push,
    popFromStack: pop,
    checkForEmpty: isStackEmpty
}

export default stack;
