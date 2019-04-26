class Api::V1::ProfessionalsController < ApplicationController

  def index
    professionals = Professional.all
    render json: professionals
  end

end
