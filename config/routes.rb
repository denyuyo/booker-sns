Rails.application.routes.draw do
  get 'rooms/index'
  get 'rooms/show'
  get 'book_comments/create'
  get 'book_comments/destroy'
  devise_for :users
  root to: "homes#top"
  get "/home/about"=>"homes#about"
  get '/search', to: 'searchs#search'

  resources :users, only: [:index,:show,:edit,:update] do
    get "daily_posts" => "users#daily_posts"
    resource :relationships, only: [:create, :destroy]
    get :followings, on: :member
    get :followers, on: :member
  end
  resources :books, only: [:index,:show,:edit,:create,:destroy,:update]do
    resource :favorites, only: [:create, :destroy]
    resources :book_comments, only: [:create, :destroy]
  end
  resources :messages, :only => [:create]
  resources :rooms, :only => [:create, :show, :index]
  
  # ゲストユーザーとしてログイン
  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#guest_sign_in'
  end
end
