function binarySearchIndex(arr, n, compareFn) {
  if (arr.length === 0)
    return 0;

  const mid = Math.floor((arr.length - 1) / 2);

  if (compareFn(n, arr[mid]) > 0) return mid + 1 + binarySearchIndex(arr.slice(mid + 1, arr.length), n);
  else return binarySearchIndex(arr.slice(0, mid), n);
}

function binarySearchBoolean(arr, n) {
  if (arr.length === 0)
    return false;
  
  const mid = Math.floor((arr.length - 1) / 2);

  if (n === arr[mid]) return true;
  else if (n > arr[mid]) return binarySearchBoolean(arr.slice(mid + 1, arr.length), n);
  else return binarySearchBoolean(arr.slice(0, mid), n);
}


function insertSorted(arr, n, compareFn) {
  const index = binarySearchIndex(arr, n, compareFn);
  arr.splice(index, 1, n);
}

const arr = [];
const elements = [1, 4, 6, 3, 6, 4, 1, 4, 7, 4, 2, 9, 0, 1, 4, 6, 7];

elements.forEach(elem => insertSorted(arr, elem, (a, b) => a - b))
console.log(arr);