Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do

    resources :charts do
      resources :artists
    end

    resources :artists, except: [:index, :show, :update, :create, :destroy] do
      resources :songs
    end
  end
end
