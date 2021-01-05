class BooksController < ApplicationController
  def index
    @books = {title: 'beeblebrox'}
  end
end
