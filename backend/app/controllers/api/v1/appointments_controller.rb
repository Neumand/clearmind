class Api::V1::AppointmentsController < ApplicationController
	def index
		appointments = Appointment.all
		appointment_info = []
		
		appointments.each do |apt|
			object = {}
			object['specialist'] = apt.specialist_id
			object['date_time'] = apt.date_time
			object['cancelled'] = apt.cancelled
			appointment_info << object
		end
			
			render json: appointment_info
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
