# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    h = {}
    nums.each_with_index do |e, i|
        puts e, i , h
        if h[target-e]
            return [h[target-e] + 1, i + 1]
        else
            h[e] = i
        end
    end
end

two_sum([3,2,4], 6)
