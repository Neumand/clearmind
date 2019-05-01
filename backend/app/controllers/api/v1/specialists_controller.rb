class Api::V1::SpecialistsController < ApplicationController
  before_action :authenticate_user!, :except => :index

  def index
    specialists = Specialist.all
    specialist_details = []

    specialists.each do |specialist|
      apts = specialist.appointments.select([:id, :specialist_id, :date_time, :cancelled]).each do |apt|
        {
          "apt_id": apt.id,
          "specialist": apt.specialist_id,
          "date_time": apt.date_time,
          "cancelled": apt.cancelled
        }
      end

      object = {}
      object["specialist"] = specialist
      object["clinic"] = specialist.clinic
      object["schedule"] = specialist.schedule
      object["apts"] = apts
      specialist_details << object
    end

    render json: specialist_details
  end

end
