class Api::FriendshipsController < ApplicationController

  before_action :require_login

  def sendReq
    @friend = Friendship.new()
    @friend.requester = current_user
    @friend.receiver_id = params[:user_id]
    if @friend.save
      render :show
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def approveReq
    @friend = Friendship.includes(:requester, :receiver).where(requester_id: params[:user_id], receiver_id: current_user.id)[0]
    @friend.status = 1
    @friend.save!
    render :remove
  end

  def pending
    @friendship = current_user.pending_friendships(params[:id])
  end

  def rejectReq
  end

  def index
    @friends = current_user.friends
    render :index
  end

end
