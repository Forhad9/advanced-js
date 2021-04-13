const nums = [33, 23, 3, 5, 6, 8, 9, 28];
const part = nums.slice(2, 5);
console.log(part);

const removed = nums.splice(2, 5, 38, 48); //splice mane 2 holo index number suru hobe 5 mean 2 index thake 5 ta element remove korbe. 38,48 mean can add in the array;
console.log(removed);
console.log(nums);

const together = nums.join(",");//duita quatation er majhe ja likhbo setai asbe number gular majhe.
console.log(together);