json.set! post
  json.partial! "api/posts/post", post: @post
end

json.set! errors
  json.errors @post.errors
end
