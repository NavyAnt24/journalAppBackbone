class PostsController < ApplicationController

  def create
    @post = Post.new(params[:post])

    if @post.save
      render :json => @post
    else
      render :json => @post.errors.full_messages, :status => 422
    end
  end

  def index
    @post = Post.all
    render :json => @posts
  end

end
