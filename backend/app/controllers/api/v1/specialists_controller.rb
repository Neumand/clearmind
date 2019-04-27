class Api::V1::SpecialistsController < ApplicationController

  def index
    specialists = Specialist.all

    render json: specialists
  end

end
