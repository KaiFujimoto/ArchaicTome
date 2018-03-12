Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update] do
      post '/send_request', to: 'friendships#send_req'
      patch '/approve_request', to: 'friendships#approve_req'
      delete '/reject_request', to: 'friendships#reject_req'
      get '/friends', to: 'friendships#index'
      get '/pending_friends', to: 'friendship#pending'
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:create, :show, :destroy, :update]
  end
end
