json.parties do 
  json.array! @parties, :name, :location
    @parties.each do |party|
      json.guests do
        party.guests
      end
    end
end

# json.array! @parites, :name, :location