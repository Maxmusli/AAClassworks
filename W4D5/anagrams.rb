def first_anagram?(s1, s2)
  arr = s1.split("").permutation.to_a
  arr.include?(s2.split(""))
end

#O(n!)
# p first_anagram?("gizmo", "sally")
require 'byebug'
def second_anagram?(s1, s2)
  arr = s2.split
  s1.each_char.with_index do |char, i|
    return false if !arr.include?(char)
    arr.delete_at(arr.index(char))
  end
  # debugger
  arr.empty?
end

#O(n^2)

def third_anagram?(s1, s2)
  helper(s1) == helper(s2)
end

def helper(str)

  alpha = ("a".."z").to_a
  sorted = false
  until sorted
    sorted = true
    (0...str.length - 1).each do |i|
      if alpha.index(str[i]) > alpha.index(str[i+1])
        str[i], str[i+1] = str[i+1], str[i]
        sorted = false
      end
    end
  end
  return str
end

#O(n^2)

def four_anagram?(s1, s2)

  s1.split("").inject( hash1 = Hash.new(0)) { |hash1, el| hash1[el] += 1; hash1 }
  s2.split("").inject( hash2 = Hash.new(0)) { |hash2, el| hash2[el] += 1; hash2 }

  hash1 == hash2
end

#O(n)

p four_anagram?("gizmo", "sally") 
p four_anagram?("elvis", "lives") 