class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user, :only => :show

  def index
    users = User.all
    render json: users
  end

  def show
    user_appointments = User.find(params[:id]).appointments
    prepArray = []

    user_appointments.each do |appointment| 
      appointment_obj = {}
      appointment_obj["details"] = appointment
      appointment_obj["specialist"] = "#{Specialist.find(appointment.specialist_id).first_name} #{Specialist.find(appointment.specialist_id).last_name}"
      appointment_obj["clinic"] = Clinic.find(appointment.clinic_id).name
      prepArray << appointment_obj
    end

    render json: prepArray
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
