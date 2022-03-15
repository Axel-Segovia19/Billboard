class Api::ArtistsController < ApplicationController
  before_action :set_chart 
  before_action :set_artist, only: [:show, :update, :destroy]

  def index
    render json: @chart.artists
  end

  def show
    render json: @artist
  end

  def create
    @artist = @chart.artists.new(artist_params)
    if @artist.save
      render json: @artist
    else
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @artist.update(artist_params)
      render json: @artist
    else
      render json: { errors: @artist.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @artist.destroy
    render json: { message: 'Artist Deleted'}
  end

  private 
    def set_chart
      @chart = Chart.find(params[:chart_id])
    end

    def set_artist
      @artist = @chart.artists.find(params[:id])
    end

    def artist_params
      params.require(:artist).permit(:name, :upcoming, :genre)
    end
end