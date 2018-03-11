class Api::PostsController < ApplicationController
  before_action :require_login

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    @post.receiver_id = current_user.id
    if @post.save
      render :show
    else
      render json: {errors: @post.errors.full_messages}, status: 422
    end
  end

  def index
    # @post = []
    # Post.all.each do |post|
    #   if post.author_id == current_user.id || post.receiver_id == current_user.id
    #     @post << post
    #   end
    # end
    #
    # @post
    @post = Post.where(author_id: current_user.id) + Post.where(receiver_id: current_user.id)
    @comments = []
    Post.all.each do |post|
      @comments.concat(post.comments)
    end
    @comments
    render :index

  end

  def show
    @post = current_user.authored_posts.find(params[:id])
    @comments = @post.comments
    render :show
  end

  def update
    @post = current_user.authored_posts.find(params[:id])
    if @post.update(post_params)
      @post.updated_at = Time.new
      render :update
    else
      render json: {errors: @post.errors.full_messages}, status: 422
    end
  end

  def destroy
    @post = current_user.authored_posts.find(params[:id])
    @post.destroy!
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:body, :receiver_id)
    # note to self, you would need to in your form question if the post is on the person's own wall or if it's on another person's wall and if it is, you need to grab that other user's id.
  end

end
