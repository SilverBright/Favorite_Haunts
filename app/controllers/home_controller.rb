class HomeController < ApplicationController

def index
		@haunts = Haunt.all
	end

end