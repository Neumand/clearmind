Rails.application.routes.draw do
  post '/user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      resources :specialists
      resources :clinics
      resources :appointments
      resources :articles
    end
  end

end
  