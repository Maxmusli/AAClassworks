def two_sum?(arr, target_sum)

  a2 = arr.sort
  until a2.empty? 
    dif = target_sum - a2.shift
    return true if a2.bsearch { |el| el == dif } != nil 
  end
  false
end


p two_sum?([0, 1, 5, 7], 6)