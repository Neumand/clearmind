class Api::V1::UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show(email)
    current_user = User.find_by(email: email)
    render json: current_user
  end

end
