class Api::V1::AppointmentsController < ApplicationController
	before_action :authenticate_user
	
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
			twilio_message(appointment)
	end

	def update
			appointment = Appointment.find(params[:id])
			appointment.cancelled = true
			appointment.cancellation_reason = params[:reason]
			appointment.save!
			render json: appointment
	end

	private

	def twilio_message(appointment)
		user_name = appointment.user.first_name
		specialist = appointment.specialist
		clinic = appointment.clinic
		client = Twilio::REST::Client.new ENV["TWILIO_ACCOUNT_SID"], ENV["TWILIO_AUTH_TOKEN"]
		client.messages.create({
			from: ENV["TWILIO_TRIAL_NUMBER"],
			to: ENV["TWILIO_RECEIVING_NUMBER"],
			body: "
			Dear #{user_name},\nYour upcoming Clearmind session has been confirmed!\nSpecialist: #{specialist.first_name} #{specialist.last_name}\nDate: #{appointment.date_time}\nClinic: #{clinic.name}: #{clinic.address}\nSee you then!
			"
		})
	end

end
