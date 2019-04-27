class Clinic < ApplicationRecord
  has_many :appointments
  has_many :specialists
end
