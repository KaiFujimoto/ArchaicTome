Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:create, :show, :destroy, :update]
    resources :friendships, only: [:index] do
      member do
        post :sendReq
        post :approveReq
        post :rejectReq
        get :pending
      end
    end
  end
end
