require 'faker'

puts "---------------"
puts "Creating users"
puts "---------------"

    User.create({
        first_name: "Test",
        last_name: "McTestington",
        email: "test@example.com",
        gender: "Male",
        date_of_birth: "1990-11-01",
        phone_number: "514-111-1111",
        password: "testing",
        password_confirmation: "testing"
    })

puts "---------------"
puts "Creating a schedule"
puts "---------------"

    Schedule.create({
        from: '09:00:00',
        to: '17:00:00'
    })

puts "---------------"
puts "Creating clinics"
puts "---------------"

    Clinic.create({
        name: 'Mindwell',
        address: '7675 Avenue de Fougeray, Montreal, QC, H1K 3K3',
        phone_number: Faker::Base.numerify('514-###-####'),
        description: 'Affordable psychology clinic offered for all ages.',
        latitude: '45.611626',
        longitude: '-73.5554274'
    })

    Clinic.create({
        name: 'La Maison St. Pierre',
        address: '10 Pine Avenue West, Montreal, QC H2W 1P8',
        phone_number: Faker::Base.numerify('514-###-####'),
        description: 'Psychotherapy centre for individual, couple and family therapy.',
        latitude: '45.5053204',
        longitude: '-73.5811828'
    })

puts "---------------"
puts "Creating specialists"
puts "---------------"

    Specialist.create({
        first_name: 'Jonathan',
        last_name: 'Baldwin',
        email: 'jbaldwin@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Cognitive-Behavioral Therapy',
        image: 'https://randomuser.me/api/portraits/men/78.jpg',
        clinic_id: 1,
        schedule_id: 1
    })

    Specialist.create({
        first_name: 'Caroline',
        last_name: 'Beaudry',
        email: 'cbeaudry@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Interpersonal Therapy',
        image: 'https://randomuser.me/api/portraits/women/76.jpg',
        clinic_id: 1,
        schedule_id: 1
    })

    Specialist.create({
        first_name: 'Molly',
        last_name: 'White',
        email: 'mwhite@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Interpersonal Therapy',
        image: 'https://randomuser.me/api/portraits/women/3.jpg',
        clinic_id: 1,
        schedule_id: 1
    })

    Specialist.create({
        first_name: 'Bryant',
        last_name: 'Neil',
        email: 'bneil@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Cognitive-Behavioral Therapy',
        image: 'https://randomuser.me/api/portraits/men/91.jpg',
        clinic_id: 1,
        schedule_id: 1
    })

    Specialist.create({
        first_name: 'Vanessa',
        last_name: 'Roberts',
        email: 'vroberts@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Family Therapy',
        image: 'https://randomuser.me/api/portraits/women/36.jpg',
        clinic_id: 2,
        schedule_id: 1
    })

    Specialist.create({
        first_name: 'Jeremie',
        last_name: 'Turcotte',
        email: 'jturcotte@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Psychodynamic Therapy',
        image: 'https://randomuser.me/api/portraits/men/62.jpg',
        clinic_id: 2,
        schedule_id: 1
    })

    Specialist.create({
        first_name: 'Sophie',
        last_name: 'Vaillancourt',
        email: 'svaillancourt@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Cognitive-Behavioral Therapy',
        image: 'https://randomuser.me/api/portraits/women/53.jpg',
        clinic_id: 2,
        schedule_id: 1
    })

    Specialist.create({
        first_name: 'Lucy',
        last_name: 'Chen',
        email: 'lchen@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Psychodynamic Therapy',
        image: 'https://randomuser.me/api/portraits/women/85.jpg',
        clinic_id: 2,
        schedule_id: 1
    })

    Specialist.create({
        first_name: 'Anthony',
        last_name: 'Collins',
        email: 'acollins@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Interpersonal Therapy',
        image: 'https://randomuser.me/api/portraits/men/30.jpg',
        clinic_id: 2,
        schedule_id: 1
    })

puts "---------------"
puts "Creating specialists"
puts "---------------"


puts 'Done!'
