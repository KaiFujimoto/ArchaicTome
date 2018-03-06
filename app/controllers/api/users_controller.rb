class Api::UsersController < ApplicationController
  def index
    @user = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password, :birth_date, :gender)
  end
end