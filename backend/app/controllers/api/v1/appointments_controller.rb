class Api::V1::AppointmentsController < ApplicationController
	before_action :authenticate_user, :except => :index
	
	def index
	end
			
	def create
			appointment = Appointment.new
			appointment.user_id = params[:user_id]
			appointment.clinic_id = params[:clinic_id]
			appointment.specialist_id = params[:specialist_id]
			appointment.date_time = DateTime.parse(params[:date_time])
			appointment.end_time = DateTime.parse(params[:date_time]) + 1.hour
			appointment.session_details = params[:session_details]
			appointment.cancelled = false
			appointment.cancellation_reason = ""
			appointment.save!

			render json: appointment
	end

	def update
			appointment = Appointment.find(params[:id])
			appointment.cancelled = true
			render json: appointment
	end

end
