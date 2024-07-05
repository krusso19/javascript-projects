let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
function inHalf(n) {
    return n/2;
}
// and pass it to .map()
let halved = nums.map(inHalf);

console.log(halved);

console.log(nums);