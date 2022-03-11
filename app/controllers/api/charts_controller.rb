class Api::ChartsController < ApplicationController
  before_action :set_chart, only: [:show, :update, :destroy]
  
  def index 
    render json: Chart.all
  end

  def show 
    render json: @chart
  end 

  def create
    @chart = Chart.new(chart_params)
    if @chart.save
      render json: @chart
    else
      render json: { errors: @chart.errors },  status: :unprocessable_entity
    end
  end

  def update
    if @chart.update(chart_params)
      render json: @chart
    else
      render json: { errors: @chart.errors },  status: :unprocessable_entity
    end
  end

 
  def destroy
    @chart.destroy
    render json: { message: 'Chart delete'}
  end

  private 
    

    def chart_params
      params.require(:chart).permit(:name, :position, :award)
    end

    def set_chart
      @chart = Chart.find(params[:id])
    end
end
