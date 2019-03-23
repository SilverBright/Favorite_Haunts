class HomeController < ApplicationController

	def index
		@haunts = Haunt.all
		@haunt = current_user.haunts.build
		
		# render json: @haunt
		respond_to do |f|
			f.html { render :index }
			f.json { render json: @haunt }	

		end
	end

	def new
		@haunt = current_user.haunts.build
	end

	def show
		# @haunts = current_user.haunts.build
		# @haunt = Haunt.find(params[:id])
		# respond_to do |f|
		# 	f.html { render :show }
		# 	f.json { render json: @haunt }	
		# end
			end

	def create
		# @haunts = current_user.haunts.build(haunt_params.merge(user_id: current_user.id))
		@haunt = current_user.haunts.build(haunt_params.merge(user_id: current_user.id))
		if @haunt.save
			# render 'home/index', :layout => false
			# render 'home/show', :layout => false
			# render 'haunts'
			# redirect_to @haunt
			# redirect_to "haunt/show"
			# flash[:notice] = "Success!!"
		# 	redirect_to haunt_path(@haunt)
		# respond_to do |f|
		# 	f.html { redirect_to haunts_path }
		# 	f.json { render json: @haunt }	
		# 	f.js {render layout: false}
		# 	end
		# else
			# render "haunts/show"
		end
	end

private


	def user_permissions
		@haunt = Haunt.find(params[:id])
		if @haunt && @haunt.user == current_user
		else
			flash[:notice] = "Foolish mortal. You can only edit or delete your own entries!"
			redirect_to haunts_path
		end
	end

	def haunt_params
		params.require(:haunt).permit(:name, :city, :state, :description)
	end



	
end