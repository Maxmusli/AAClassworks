# def my_min(list)
#   list.each do |i|
#     return i if list.all? { |j| i <= j }
#   end
# end
    # list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]

# p my_min(list)

# def my_better_min(list)
#   hash = Hash.new(0)
#   list.each_with_index { |ele, i| hash[ele] = i }
#   hash.sort_by { |k, v| k }[0][0]
# end

# p my_better_min(list)


# def largest_contiguous_subsum(list)

#   arr = []
#   (0...list.length).each do |i|
#     (i...list.length).each do |j|
#       arr << list[i..j]
#     end
#   end

#   largest = arr[0].sum 
#   arr.each do |sub|
#     largest = sub.sum if sub.sum > largest
#   end
#   largest

# end

# list = [5, 3, -7]



require 'byebug'
def better_largest_contiguous_subsum(list)
  lcs = list.first
  cs = 0
  list.length.times do |i|
    cs += list[i]
    lcs = cs if cs > lcs
    cs = 0 if cs < 0
  end

  lcs
end

p better_largest_contiguous_subsum([-5, -3, -7])