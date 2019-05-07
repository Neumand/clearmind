# **Clearmind**

### Live Demo - [Heroku](clearmind-demo.herokuapp.com)

You can login to  demo app using `username:test@example.com` and `password:testing` or you can create an account. 

### Contributors
* [David Neuman](https://github.com/Neumand)
* [Duruhan Unsal](https://github.com/reshux/)

## **Overview**

Clearmind was developed as a final project for Lighthouse Labs' Demo Day for the March 2019 cohort. The app aims to facilitate access to mental health specialists for those seeking professional help.

### Features include:

* Booking a session with an available specialist - previously booked slots are made unavailable
* Receiving a confirmation text message via the Twilio SMS API
* Viewing or cancelling appointments from 'Your Appointments' page
* Viewing the available clinics and their location via the Google Maps API
* Browsing available articles featured on the resources page, and filtering by category
* Interacting with the Dialogflow-powered chatbot
* Full user authentication using JSON Web Tokens (JWT)

## Final Product

### Main Functionality Demo
![Clearmind Demo](https://i.imgur.com/CJ2jiMh.gif)


### Chatbot Demo
![Chatbot Demo](https://i.imgur.com/HAPzxOR.gif)

## Tech Stack

**Front-End**: ReactJS

**Back-End**: Ruby on Rails

**Database**: Postgresql

**APIs**: Dialogflow, Google Maps JS, Twilio

### Future Goals

* Ability to modify / reschedule sessions
* Specialist dashboard
* Dialogflow booking integration

### Setup

1. In the /backend folder, run `bundle install`
2. If you would like to receive an SMS confirmation from Twilio, you will need to create a free account
  * Once you have obtained your Account SID and Authentication Token, create a `.env` file in the /backend folder
  * In that file, enter the following:

    `TWILIO_ACCOUNT_SID=your_account_sid_here`
    
    `TWILIO_AUTH_TOKEN=your_auth_token_here`

3. In the /client folder, run `npm install`
4. Start the back-end server using `rails s -p 3001`
5. Start the front-end server using `npm start`
6. Visit `localhost:3000`
7. Enjoy!




