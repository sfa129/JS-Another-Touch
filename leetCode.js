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
function hasCycle(head) {
    if (!head || !head.next) {
        return false; // No cycle if the linked list is empty or has only one node
    }
    
    let slow = head; // Slow pointer (tortoise)
    let fast = head; // Fast pointer (hare)
    
    // Iterate until fast reaches the end of the list
    while (fast && fast.next) {
        slow = slow.next; // Move slow pointer one step
        fast = fast.next.next; // Move fast pointer two steps
        
        // If slow and fast meet, there's a cycle
        if (slow === fast) {
            return true;
        }
    }
    
    // If fast reaches the end of the list, there's no cycle
    return false;
}

