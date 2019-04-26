class Api::V1::ClinicsController < ApplicationController

  def index
    clinics = Clinic.all
    render json: clinics
  end
  
end
