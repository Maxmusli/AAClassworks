# json.array! @guests do |guest| 
#   json.partial! 'guest', guest: guest
# end

json.array! @guests, partial: 'guest', as: :guest
# json.array! @guests, :name, :favorite_color, :age

# @guests.each do |guest| 
#   json.partial! 'guest', guest: guest
# end

# json.guests do
#   @guests.each do |guest|
#     json.partial! 'guest', guest: guest
#   end
# end

