require 'sinatra'
require 'rubygems'
require 'heroku'

get '/' do
  @title = "CoffeeScript in Sinatra"
  erb :index
end

__END__



  		 
    