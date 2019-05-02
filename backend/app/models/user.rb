class User < ApplicationRecord
  has_many :appointments

  has_secure_password
  validates :email, :first_name, :last_name, :gender, :date_of_birth, :phone_number, presence: true
  validates :email, uniqueness: true
  
end
