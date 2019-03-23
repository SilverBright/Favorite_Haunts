class HauntsController < ApplicationController
	# create before action method for flash messages
	before_action :user_permissions, only: [:edit, :update, :destroy]

	def index
		@haunts = Haunt.all
		# @haunt = current_user.haunts.build
		
		# render json: @haunts
		respond_to do |f|
			f.html { render :index }
			f.json { render json: @haunts }	

		end
	end

	def california
		@haunts = Haunt.california
		render :index
	end

	def new
		@haunt = current_user.haunts.build
	end

	def show
		@haunt = Haunt.find(params[:id])
	end

	def create
		# @haunts = current_user.haunts.build(haunt_params.merge(user_id: current_user.id))
		@haunt = current_user.haunts.build(haunt_params.merge(user_id: current_user.id))
		if @haunt.save

		end
	end

	def edit 
		respond_to do |f|
			f.html { render :edit }
			f.json { render json: @haunt }	
		end
	end

	def update
		@haunt.update(haunt_params)
		redirect_to haunts_path
	end

	def destroy
    	@haunt.destroy
    	redirect_to haunts_path
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
