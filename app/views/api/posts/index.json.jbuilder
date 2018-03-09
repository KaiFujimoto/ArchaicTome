
json.posts do
  @post.each do |post|
    json.set! post.id do
      json.partial! "api/posts/post", post: post
    end
  end
end

json.users do
  @post.map(&:author).each do |author|
    json.set! author.id do
      json.partial! '/api/users/user', user: author
    end
  end

  @post.map(&:receiver).each do |receiver|
    json.set! receiver.id do
      json.partial! '/api/users/user', user: receiver
    end
  end
end
