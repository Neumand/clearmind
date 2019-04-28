class Api::V1::AppointmentsController < ApplicationController
    def index
        appointments = Appointment.all
        render json: appointments
    end

    def create
        appointment = Appointment.new
        appointment.user_id = params[:user_id]
        appointment.clinic_id = params[:clinic_id]
        appointment.specialist_id = params[:specialist_id]
        appointment.date = params[:date]
        appointment.start_time = params[:start_time]
        appointment.end_time = params[:end_time]
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
