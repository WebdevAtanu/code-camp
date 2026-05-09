def twoSum(nums, target):

    seen = {} # hash table to store nums and their indices in the array nums 

    # loop through nums array and check if the difference between the target and the current num is in the hash table
    for i, num in enumerate(nums):

        diff = target - num # calculate the difference between the target and the current num

        # if the difference is in the hash table, return the indices of the two numbers
        if diff in seen:
            return [seen[diff], i]

        seen[num] = i # add the current num and its index to the hash table


nums = [2, 7, 11, 15]
target = 18

print(twoSum(nums, target))