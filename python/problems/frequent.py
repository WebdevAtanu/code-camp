def FindFrequent(nums):
    freq = {} # empty dictionary 
    for num in nums: # loop through the nums array
        freq[num] = freq.get(num, 0) + 1 # get the frequency of each number and add 1 to it 
    return max(freq, key=freq.get)

nums = [4, 2, 3, 4, 5, 1, 2, 3, 4, 5, 4, 2, 3, 4, 5]
print("The most frequent number is: ",FindFrequent(nums))