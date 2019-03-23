class HomeController < ApplicationController

	def index
		@haunts = Haunt.all
		@haunt = current_user.haunts.build
		respond_to do |f|
			f.html { render :index }
			f.json { render json: @haunt }	
		end
	end
end
