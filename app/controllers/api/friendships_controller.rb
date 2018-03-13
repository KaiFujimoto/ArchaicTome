class Api::FriendshipsController < ApplicationController

  before_action :require_login

  def send_req #new
    @friendship = Friendship.new()
    @friendship.user_id = current_user.id
    @friendship.friend_id = params[:user_id]
    if @friendship.save
      render :show
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def approve_req #create
    @friendship = current_user.pending_requests.find_by(friend_id: params[:id])
    @friendship.status = 'APPROVED'
    @friendship.save!
    render :show
  end

  def pending #index 2
    @friendship = current_user.all_pending_requests
    render :index
  end

  def reject_req #destroy
    @friendship = current_user.pending_friendships.find_by(user_id: params[:id])
    @friendship.destroy!
    render :show
  end

  def index
    user = User.find(params[:user_id])
    @friends = user.current_friends
    render :index
  end

end
