class Api::UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
  
    if @user.save
      login!(@user) 
      render :show
    else
      # Tell the user that something went wrong. Let them try again.
      # flash.now[:errors] = @user.errors.full_messages
      render json: @user.errors.full_messages, status: 301
    end
  end

  def show
    
    @user = User.find_by(id: params[:id])
    
    if @user
      render :show
    else
      
      render json: {message: "User not found"}, status: 404
    end
  end

  def index
    @users = User.all
    render :index
  end

  # def edit
  #   @user = User.find(params[:id])
  #   render :edit
  # end

  # def update
  #   @user = User.find(params[:id])
  #   if @user.update(user_params)
  #     redirect_to user_url(@user)
  #   else
  #     render json: @user.errors.full_messages, status: 422
  #   end
  # end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      render json: {message: "User #{@user.id}destroyed"}
    else
      render plain: "You can't destroy what's not there."
    end
  end

  private

  def user_params
    # params.require(:user).permit(:username, :email)
    # Add password
 
    params.require(:user).permit(:username, :password)
  end
end
