function findIndex(arr, n) {
  if (arr.length === 1)
    return (n > arr[0]) ? 1 : 0;

  const mid = Math.floor((arr.length - 1) / 2);

  if (n > arr[mid])
    return mid + 1 + findIndex(arr.slice(mid + 1, arr.length + 1), n);
  
  return findIndex(arr.slice(0, mid + 1), n);
}

const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
arr.sort((a, b) => a - b);
// const arr = [1, 2, 2, 3, 6, 7, 7, 8, 9, 9]

console.log(`Array: [${arr}].`);

const n = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
// const n = [8,5,2,1,9,3,6,4,0,3]

n.forEach(v => {
  const i = findIndex(arr, v);
  console.log(`Index of ${v} in array: ${i}.`)
})