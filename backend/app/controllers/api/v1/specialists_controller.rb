class Api::V1::SpecialistsController < ApplicationController

  def index
    specialists = Specialist.all
    specialist_details = []

    specialists.each do |specialist| 
      object = {}
      object["specialist"] = specialist
      object["clinic"] = specialist.clinic
      object["schedule"] = specialist.schedule
      object["apt"] = specialist.appointment
      specialist_details << object
    end

    render json: specialist_details
  end

end
