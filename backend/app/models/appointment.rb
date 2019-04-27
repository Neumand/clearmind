class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :specialist
  belongs_to :clinic
end
