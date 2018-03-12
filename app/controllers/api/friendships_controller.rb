class Api::FriendshipsController < ApplicationController

  before_action :require_login

  def sendReq #new
    @friendship = Friendship.new()
    @friendship.user_id = current_user.id
    @friendship.friend_id = params[:user_id]
    if @friendship.save
      render :show
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def approveReq #create
    @friendship = Friendship.includes(:requester, :receiver).where(requester_id: params[:user_id], receiver_id: current_user.id)[0]
    @friendship.status = 'APPROVED'
    @friendship.save!
    render :show
  end

  def pending #show
    @friendship = current_user.sent_requests(params[:id])
  end

  def rejectReq #destroy
    @friendship = current_user.sent_requests(params[:id])
    @friendship.destroy!
    render :show
  end

  def index
    @friends = current_user.current_friends
    render :index
  end

end
