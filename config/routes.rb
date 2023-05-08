Rails.application.routes.draw do
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
end
