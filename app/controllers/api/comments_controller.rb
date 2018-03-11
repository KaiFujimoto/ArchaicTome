class Api::CommentsController < ApplicationController

  before_action :require_login

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: {errors: @comment.errors.full_messages}, status: 422
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: {errors: @comment.errors.full_messages}, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.author_id == current_user.id
      @comment.destroy!
      render :show
    else
      render json: ["you can't delete a comment that is not yours"]
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

end
