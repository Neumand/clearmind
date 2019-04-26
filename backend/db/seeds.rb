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

    Professional.create({
        first_name: 'Jonathan',
        last_name: 'Baldwin',
        email: 'jbaldwin@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Cognitive-Behavioral Therapy',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    })

    Professional.create({
        first_name: 'Caroline',
        last_name: 'Beaudry',
        email: 'cbeaudry@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Interpersonal Therapy',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    })

    Professional.create({
        first_name: 'Molly',
        last_name: 'White',
        email: 'mwhite@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Interpersonal Therapy',
        image: 'https://randomuser.me/api/portraits/women/3.jpg'
    })

    Professional.create({
        first_name: 'Bryant',
        last_name: 'Neil',
        email: 'bneil@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Cognitive-Behavioral Therapy',
        image: 'https://randomuser.me/api/portraits/men/91.jpg'
    })

    Professional.create({
        first_name: 'Vanessa',
        last_name: 'Roberts',
        email: 'vroberts@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Family Therapy',
        image: 'https://randomuser.me/api/portraits/women/36.jpg'
    })

    Professional.create({
        first_name: 'Jeremie',
        last_name: 'Turcotte',
        email: 'jturcotte@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Psychodynamic Therapy',
        image: 'https://randomuser.me/api/portraits/men/62.jpg'
    })

    Professional.create({
        first_name: 'Sophie',
        last_name: 'Vaillancourt',
        email: 'svaillancourt@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Cognitive-Behavioral Therapy',
        image: 'https://randomuser.me/api/portraits/women/53.jpg'
    })

    Professional.create({
        first_name: 'Lucy',
        last_name: 'Chen',
        email: 'lchen@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Psychodynamic Therapy',
        image: 'https://randomuser.me/api/portraits/women/85.jpg'
    })

    Professional.create({
        first_name: 'Anthony',
        last_name: 'Collins',
        email: 'acollins@clearmind.ca',
        phone_number: Faker::Base.numerify('514-###-####'),
        expertise: 'Interpersonal Therapy',
        image: 'https://randomuser.me/api/portraits/men/30.jpg'
    })

puts "---------------"
puts "Creating clinics"
puts "---------------"

    Clinic.create({
        name: 'Mindwell',
        address: '7675 Avenue de Fougeray, Montreal, QC, H1K 3K3',
        phone_number: Faker::Base.numerify('514-###-####'),
        description: 'Affordable psychology clinic offered for all ages.'
    })

    Clinic.create({
        name: 'La Maison St. Pierre',
        address: '10 Pine Avenue West, Montreal, QC H2W 1P8',
        phone_number: Faker::Base.numerify('514-###-####'),
        description: 'Psychotherapy centre for individual, couple and family therapy.'
    })

puts 'Done!'
