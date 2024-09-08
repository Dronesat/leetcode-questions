//Brute force method
//Time complexity O(n)
var twoSum_bruteforce = function(nums, target) {
    let seen = [];
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (diff in seen){
            return [seen[diff],i];
        } else {
            seen[nums[i]] = i;
        }
    } 
};
//console.log(twoSum_bruteforce([2,7,11,15],9));

//Nested Loop method
//Time complexity O(n^2)
var twoSum_nestedloop = function(nums, target){
    for (let i = 0; i < nums.length; i++){
        for (let n = i + 1; n < nums.length; n++){
            if (nums[i] + nums[n] == target){
                return [i,n]
            }
        }
    }
}
console.log(twoSum_nestedloop([2,11,7,15],9));