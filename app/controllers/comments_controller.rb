class CommentsController < ApplicationController

	def create
		@haunt = Haunt.find(params[:haunt_id])
		@comment = current_user.comments.create(content: comment_params["content"], haunt_id: @haunt.id)
		if	@comment.save  
			flash[:notice] = "Success!!"
			redirect_to haunt_comment_path(@haunt, @comment)
		else
			render :new
		end
  	end

	def index
		@haunt = Haunt.find(params[:haunt_id])
	end

	def new
		@haunt = Haunt.find(params[:haunt_id])
		@comment = @haunt.comments.build
	end

  	def show
  		@haunt = Haunt.find(params[:haunt_id])
  		@comment = Comment.find(params[:id])
  	end

  	def edit 
  		@haunt = Haunt.find(params[:haunt_id])
		@comment = Comment.find(params[:id])
		if @comment && @comment.user == current_user

		else
			flash[:notice] = "Foolish mortal. You can only edit your own entries!"
			redirect_to haunt_comment_path
		end
	end

	def update
		@haunt = Haunt.find(params[:haunt_id])
		@comment = Comment.find(params[:id])
		 if @comment && @comment.user == current_user 
			@comment.update(comment_params) 
			flash[:notice] = "Success!"
			redirect_to haunt_comment_path
		end
	end

	 def destroy
	 	@haunt = Haunt.find(params[:haunt_id])
	 	@comment = Comment.find(params[:id])
	 	if @comment && @comment.user == current_user
    		@comment.destroy
    		flash[:notice] = "Success!"
    		redirect_to haunt_comments_path
    	else
    		flash[:notice] = "Foolish mortal. You can only delete your own entries!"
    		redirect_to haunt_comment_path
    	end
  	end


	private

	def comment_params
		params.require(:comment).permit(:content)
	end

end