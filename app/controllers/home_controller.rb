class HomeController < ApplicationController

	def index
		@haunts = Haunt.all
		@haunt = current_user.haunts.build
		
	# 	# render json: @haunts
	# 	respond_to do |f|
	# 		f.html { render :index, :layout => false }
	# 		f.json { render json: @haunts }	

	# 	end
	end


end