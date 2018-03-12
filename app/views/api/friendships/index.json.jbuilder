@friendship.each do |friendship|
  json.set! friendship.id do
    json.partial! "api/friendships/friendship", friendship: friendship
  end
end
