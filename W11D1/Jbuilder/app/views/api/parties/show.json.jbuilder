json.guests do 
  @party.guests.each do |guest|
    json.extract! guest, :name
    json.gifts do 
      guest.gifts
    end
  end
end