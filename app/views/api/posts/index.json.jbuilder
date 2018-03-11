
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

  @comments.map(&:author).each do |author|
    json.set! author.id do
      json.partial! '/api/users/user', user: author
    end
  end
end

json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end
  end
end
