class User < ApplicationRecord
  has_many :appointments

  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :first_name, :last_name, :gender, :date_of_birth, :phone_number, presence:true
  
end
