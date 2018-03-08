class Api::PostsController < ApplicationController
  before_action :require_login

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    @post.receiver_id = current_user.id
    if @post.save
      render json: @post
    else
      render json: {errors: @post.errors.full_messages}, status: 422
    end
  end

  def index
    @post = []
    Post.all.map do |post|
      if current_user.id == post.receiver_id || current_user.id == post.author_id
        @post << post
      end
    end
    @post
  end

  def show
    @post = Post.find(params[:id])
  end

  def update
    @post = current_user.authored_posts.find(params[:id])
    if @post.update(post_params)
      render json: @post
    else
      render json: {errors: @post.errors.full_messages}, status: 422
    end
  end

  def destroy
    @post = current_user.authored_posts.find(params[:id])
    @post.destroy!
    redirect_to "/api/posts/index"
  end

  private

  def post_params
    params.require(:post).permit(:body, :receiver_id)
    # note to self, you would need to in your form question if the post is on the person's own wall or if it's on another person's wall and if it is, you need to grab that other user's id.
  end

end
