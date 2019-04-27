class Specialist < ApplicationRecord
  has_many :appointments
  belongs_to :schedule
  belongs_to :clinic
end
