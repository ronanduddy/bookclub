100.times do |index|
  book = {
    title: Faker::Book.title,
    description: "#{Faker::Book.author} wrote this #{Faker::Book.genre}. It was published by #{Faker::Book.publisher}",
    read: Faker::Boolean.boolean
  }

  Book.create!(book)

  puts "Created #{book}"
end
