# class Api::FriendshipsController < ApplicationController
#
#   before_action :require_login
#
#   def create
#     @friendship = Friendship.new(friend_params)
#     if @friendship.save
#       render :show
#     else
#       render json: {errors: @friendship.errors.full_messages}, status: 422
#     end
#   end
#
#   def show
#     @friendship = current_user.pending_friendships(params[:id])
#   end
#
#   def destroy
#   end
#
#   def index
#   end
#
#   private
#
#   def friend_params
#     params.require(:friend).permit(:requester, :receiver, :status)
#   end
# end
