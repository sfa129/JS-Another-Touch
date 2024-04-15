               //LeetCode Problem 01
// const nums = [2,7,11,15,25];

// let target = 18;

// function twoSum(nums, target){

//     const numIndices = new Map();

//     for(let i = 0; i < nums.length; i++){
//         const num = nums[i];

//         const complement = target - num;

//         if(numIndices.has(complement)){
//             return [numIndices.get(complement), i]
//         }
//         numIndices.set(num, i)
//     }
//     return[]
// }
// console.log(twoSum(nums, target))

//LeetCode Problem 02
// function hasCycle(head) {
//     if (!head || !head.next) {
//         return false; // No cycle if the linked list is empty or has only one node
//     }
    
//     let slow = head; // Slow pointer (tortoise)
//     let fast = head; // Fast pointer (hare)
    
//     // Iterate until fast reaches the end of the list
//     while (fast && fast.next) {
//         slow = slow.next; // Move slow pointer one step
//         fast = fast.next.next; // Move fast pointer two steps
        
//         // If slow and fast meet, there's a cycle
//         if (slow === fast) {
//             return true;
//         }
//     }
    
//     // If fast reaches the end of the list, there's no cycle
//     return false;
// }


// LeetCode Problem 03
// const nums = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6];

// function removeDuplicates(nums){
//     if(nums.length === 0) return 0;

//     let slow = 0;

//     for(let fast = 1; fast < nums.length; fast++){
//         if(nums[fast] !== nums[slow]){
            
//             slow++
//             nums[slow] = nums[fast];
//         }
//     }
//     return slow + 1;
// }

// console.log(removeDuplicates(nums))

//LeetCode Problem 04
// let nums = [1, 6, 3, 4, 5, 6, 6, 8];
// let val =  6

// function removeElement(nums, val) {
//     let k = 0; // Initialize count of elements not equal to val

//     // Iterate through the array
//     for (let i = 0; i < nums.length; i++) {
//         // If current element is not equal to val
//         if (nums[i] !== val) {
//             // Move the current element to the position indicated by k
//             nums[k] = nums[i];
//             // Increment k to indicate the count of elements not equal to val
//             k++;
//         }
//     }

//     return k; // Return the count of elements not equal to val
// }

// const result = removeElement(nums, val);
// console.log(result)
// console.log(nums.slice(0, result))

//LeetCode Problem 05
// let digits = [1, 2, 3];

// function plusOne(digits) {
//     let n = digits.length;
//     let carry = 1;
    
//     for (let i = n - 1; i >= 0; i--) { // Start from the least significant digit
//         let total = digits[i] + carry;      //total = 3;
//         digits[i] = total % 10;             //3
//         carry = Math.floor(total / 10);     //0
        
//         if (carry === 0) { // If there's no more carry, we can stop
//             break;
//         }
//     }
    
//     if (carry === 1) { // If there's still a carry after iterating through all digits
//         digits.unshift(1);
//     }
    
//     return digits;
// }


// let result = plusOne(digits);
// console.log(result); // Output: [1, 2, 4]

//Self
// let digits = [1,2,3,4]
// const digitsSpread = ...digits

// console.log(digitsSpread)
// // function plusOne(digits){
    

// }

//LeetCode Problem 6
// var subsetsWithDup = function(nums) {
//     nums.sort((a, b) => a - b);
//     const result = [];
    
//     const backtrack = (start, path) => {
//         result.push([...path]);
        
//         for (let i = start; i < nums.length; i++) {
//             if (i > start && nums[i] === nums[i - 1]) continue;
//             path.push(nums[i]);
//             backtrack(i + 1, path);
//             path.pop();
//         }
//     };
    
//     backtrack(0, []);
//     return result;
// };

// Example usage:
// const nums = [1, 2, 2];
// console.log(subsetsWithDup(nums));

//LeetCode Problem 7
function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const currentWater = minHeight * width;
        maxWater = Math.max(maxWater, currentWater);

        // Move the pointer with the smaller height towards the other pointer
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// Example usage:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // Output should be 49


//next example

