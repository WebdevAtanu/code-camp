def twoSum(nums, target):

    seen = {}  # hash table to store nums and their indices in the array nums

    # loop through nums array and check if the difference between the target and the current num is in the hash table
    for i, num in enumerate(nums):

        # calculate the difference between the target and the current num
        diff = target - num

        # if the difference is in the hash table, return the indices of the two numbers
        if diff in seen:
            return [seen[diff], i]

        seen[num] = i  # add the current num and its index to the hash table


# loop through nums array and check if the difference between the target and the current num is in the hash table
def twoSumLoop(nums, target):
    for i in range(len(nums)):  # loop through the nums array
        # loop through the nums array starting from the next index of i to avoid checking the same pair of numbers again
        for j in range(i + 1, len(nums)):
            # check if the sum of the two numbers is equal to the target
            if nums[i] + nums[j] == target:
                # if the sum of the two numbers is equal to the target, return the indices of the two numbers
                return [
                    i,
                    j,
                ]


nums = [2, 7, 11, 15]
target = 18

print(twoSum(nums, target))  # [0, 1]
print(twoSumLoop(nums, target))  # [0, 1]
