class Api::V1::Registered::PostsController < Api::V1::ApiController

  def index
    posts = posts.registered.order(updated_at: :desc)
    render json: posts
  end

  def show
    post = posts.registered.find(params[:id])
    render json: post
  end

end
