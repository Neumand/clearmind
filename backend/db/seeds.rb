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
        phone_number: '514-605-2555',
        description: 'Affordable psychology clinic offered for all ages.',
        latitude: '45.611626',
        longitude: '-73.5554274'
    })

    Clinic.create({
        name: 'La Maison St. Pierre',
        address: '10 Pine Avenue West, Montreal, QC H2W 1P8',
        phone_number: '514-473-2099',
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
puts "Creating articles"
puts "---------------"

    Article.create({
        title: 'My name is Wil Wheaton. I Live With Chronic Depression and Generalized Anxiety. I Am Not Ashamed.',
        description: 'Wil Wheaton shares his battle with and triumph over mental ilness',
        thumbnail: 'https://cdn-images-1.medium.com/max/1000/1*4eoDVHG9Bs23Xl_2Qt1Leg.jpeg',
        url: 'https://medium.com/@wilw/my-name-is-wil-wheaton-i-live-with-chronic-depression-and-generalized-anxiety-i-am-not-ashamed-8f693f9c0af1',
        category: 'Stories'
    })

    Article.create({
        title: 'The Role of Friends and Family',
        description: 'How you can help a love one dealing with mental illness',
        thumbnail: 'https://image.freepik.com/free-vector/big-happy-family-with-flat-design_23-2147834657.jpg',
        url: 'https://amiquebec.org/the-role-of-friends-and-family/',
        category: 'Support'
    })

    Article.create({
        title: 'Supporting a Friend or Family Member with a Mental Illness',
        description: 'Like any other health problem, someone with a mental illness needs extra love and support. You may not be able to see the illness, but it doesn’t mean that you’re powerless to help.',
        thumbnail: 'https://image.freepik.com/free-vector/helping-hand-support-background-flat-style_23-2147796082.jpg',
        url: 'https://www.heretohelp.bc.ca/factsheet/supporting-a-friend-or-family-member-with-a-mental-illness',
        category: 'Support'
    })

    Article.create({
        title: 'Mental Illnesses',
        description: 'Description of the various types of mental illness',
        thumbnail: 'https://image.freepik.com/free-vector/people-connecting-jigsaw-pieces-head-together_53876-64617.jpg',
        url: 'https://amiquebec.org/mental-illnesses/',
        category: 'Information'
    })

puts "---------------"
puts "Creating appointments"
puts "---------------"

    Appointment.create({
        user_id:1, 
        specialist_id:1, 
        clinic_id:1, 
        date_time: "2019-04-23 10:00:00", 
        end_time: "2019-04-23 11:00:00", 
        session_details: "", 
        cancelled: false, 
        cancellation_reason: ""})

    Appointment.create({
        user_id:1, 
        specialist_id:1, 
        clinic_id:1, 
        date_time: "2019-04-30 10:00:00", 
        end_time: "2019-04-30 11:00:00", 
        session_details: "", 
        cancelled: true, 
        cancellation_reason: "I am sick."})

    Appointment.create({
        user_id:1, 
        specialist_id:5, 
        clinic_id:2, 
        date_time: "2019-05-17 11:00:00", 
        end_time: "2019-05-17 12:00:00", 
        session_details: "", 
        cancelled: false, 
        cancellation_reason: ""})


    Appointment.create({
        user_id:1, 
        specialist_id:5, 
        clinic_id:2, 
        date_time: "2019-05-24 10:00:00", 
        end_time: "2019-05-24 11:00:00", 
        session_details: "", 
        cancelled: false, 
        cancellation_reason: ""})
    


puts 'Done!'
