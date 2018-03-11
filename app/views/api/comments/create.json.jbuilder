json.set! comment
  json.partial! "api/comments/comment", comment: @comment
end

json.errors @comment.errors.full_messages
