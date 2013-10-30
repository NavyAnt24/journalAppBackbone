JournalApp::Application.routes.draw do
  resources :posts, :only => [:create, :index]

  root :to => "static_pages#root"
end