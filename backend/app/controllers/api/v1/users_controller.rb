class Api::V1::UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
    user.password = params[:password]
    user.password_confirmation = params[:password_confirmation]
    user.save!
    if user.save
      current_user = User.find_by_email(params[:email])
      auth_token = Knock::AuthToken.new 
      render json: {
        jwt: auth_token.token,
        user: {id: current_user.id, first_name: current_user.first_name}
      }, status: :created
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :password,
      :password_confirmation,
      :email,
      :gender,
      :date_of_birth,
      :phone_number
    )
  end

end
