require 'faker'

puts "---------------"
puts "Creating users"
puts "---------------"

30.times do
    User.create({
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        gender: Faker::Gender.binary_type,
        date_of_birth: Faker::Date.birthday(15, 80),
        phone_number: Faker::Base.numerify('514-###-####')
    })
end
puts "---------------"
puts "Creating therapists"
puts "---------------"

9.times do
    Professional.create({
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        phone_number: Faker::Base.numerify('514-###-####')
    })
end

puts "---------------"
