function binarySearchIndex(arr, n) {
  if (arr.length === 0)
    return 0;

  const mid = Math.floor((arr.length - 1) / 2);

  if (n > arr[mid]) return mid + 1 + binarySearchIndex(arr.slice(mid + 1, arr.length), n);
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

