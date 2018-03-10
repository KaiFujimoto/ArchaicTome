Rails.application.routes.draw do

  namespace :api do
    get 'friendships/create'
  end

  namespace :api do
    get 'friendships/show'
  end

  namespace :api do
    get 'friendships/destroy'
  end

  namespace :api do
    get 'friendships/index'
  end

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
  end
end
