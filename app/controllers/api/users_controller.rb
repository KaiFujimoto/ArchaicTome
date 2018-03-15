class Api::UsersController < ApplicationController
  def index
    if params[:query].present?
      @users = User.search(params[:query])
      render :search
    else
      @user = User.all
      render :index
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render :show
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end
  #
  # def search
  #   
  #
  # end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :birth_date, :gender)
  end
end
