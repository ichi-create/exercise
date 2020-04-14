Rails.application.routes.draw do
  get "/" => "home#top"
  get "/easy" => "home#easy"
  get "/nomal" => "home#nomal"
  get "/difficult" => "home#difficult"
  get "/answer" => "home#answer"
  get "/result" => "home#result"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'application#hello'
end
