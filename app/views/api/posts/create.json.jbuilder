json.set! post
  json.partial! "api/posts/post", post: @post
end


json.errors @post.errors.full_messages
