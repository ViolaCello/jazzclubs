Rails.application.routes.draw do
  resources :reviews, only: [:create, :update]
  resources :clubs, only:  [:index, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

 # get '/test', to: 'application#test'

end
