class CardsController < ApplicationController
  def index
    cards = Card.all
    render json: cards
  end

  def show
    card = Card.find(params[:id])
    render json: card
  end

  def card_params(params)
    params.require(:card).permit(:id)
  end
end
