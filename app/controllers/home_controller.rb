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

	def create
		# @haunts = current_user.haunts.build(haunt_params.merge(user_id: current_user.id))
		@haunt = current_user.haunts.build(haunt_params.merge(user_id: current_user.id))
		if @haunt.save
			
			# redirect_to 'home/index'
			# render 'haunts'
			# redirect_to @haunt
			# redirect_to "haunt/show"
			# flash[:notice] = "Success!!"
		# 	redirect_to haunt_path(@haunt)
		respond_to do |f|
			f.html { redirect_to haunts_path }
			f.json { render json: @haunts }	
			end
		# else
			# render "haunts/show"
		# end
	end

	end
end