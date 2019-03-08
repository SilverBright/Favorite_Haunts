class HauntsController < ApplicationController
	# create before action method for flash messages
	before_action :user_permissions, only: [:edit, :update, :destroy]

	def index
		@haunts = Haunt.all
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
		# render json: @haunt, status: 200
		respond_to do |f|
			f.html { render :show }
			f.json { render json: @haunt }	
		end
	end

	def create

		####### DEVISE SOLUTION FOR USER & CURRENT USER #############
		@haunt = current_user.haunts.build(haunt_params.merge(user_id: current_user.id))
		if @haunt.save
			flash[:notice] = "Success!!"
			redirect_to haunt_path(@haunt)
		else
			render :new
		end
	end

	def edit 
		# @haunt = Haunt.find(params[:id])
		#  if @haunt && @haunt.user == current_user
			
		#  else
  #   		flash[:notice] = "Foolish mortal. You can only edit your own entries!"
  #   		redirect_to haunts_path
  #   	 end
	end

	def update
		# @haunt = Haunt.find(params[:id])
		 # if @haunt && @haunt.user == current_user
			@haunt.update(haunt_params)
			# flash[:notice] = "Success!"
			redirect_to haunts_path
		# else
			# flash[:notice] = "Foolish mortal. You can only edit your own entries!"
			# redirect_to haunts_path
		# end
	end

	def destroy
	 	# @haunt = Haunt.find(params[:id])
	 	# if @haunt && @haunt.user == current_user
    		@haunt.destroy
    		# flash[:notice] = "Success!"
    		redirect_to haunts_path
    	# else
    		# flash[:notice] = "Foolish mortal. You can only delete your own entries!"
    		# redirect_to haunts_path
    	# end
  	end


	private

	# create a method for flash messages to use in the before_action method
	def user_permissions
		@haunt = Haunt.find(params[:id])
		if @haunt && @haunt.user == current_user
			# flash[:notice] = "Success!"
		else
			flash[:notice] = "Foolish mortal. You can only edit or delete your own entries!"
			redirect_to haunts_path
		end
	end

	def haunt_params
		params.require(:haunt).permit(:name, :city, :state, :description)
	end

end
