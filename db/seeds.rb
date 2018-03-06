# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

luffy = User.create!(email: 'luffy@strawhats.com', first_name: 'MonkeyD', last_name: 'Luffy', password:'starwars', birth_date: Faker::Date.between(30.years.ago, Date.today), gender: 'M')
luffy.update(profile_picture_url: File.open("#{Rails.root}/app/assets/images/Monkey_D_Luffy.jpg"))

nami = User.create!(email: 'nami@strawhats.com', first_name: 'CatBurglar', last_name: 'Nami', password:'starwars', birth_date: Faker::Date.between(30.years.ago, Date.today), gender: 'F')
nami.update(profile_picture_url: File.open("#{Rails.root}/app/assets/images/Nami.jpg"))

usopp = User.create!(email: 'usopp@strawhats.com', first_name: 'Sogeking', last_name: 'Usopp', password:'starwars', birth_date: Faker::Date.between(30.years.ago, Date.today), gender: 'M')
usopp.update(profile_picture_url: File.open("#{Rails.root}/app/assets/images/Usopp.jpg"))

sanji = User.create!(email: 'sanji@strawhats.com', first_name: 'Vinsmoke', last_name: 'Sanji', password:'starwars', birth_date: Faker::Date.between(30.years.ago, Date.today), gender: 'M')
sanji.update(profile_picture_url: File.open("#{Rails.root}/app/assets/images/Sanji.jpg"))

zoro = User.create!(email: 'zoro@strawhats.com', first_name: 'Roronoa', last_name: 'Zoro', password:'starwars', birth_date: Faker::Date.between(30.years.ago, Date.today), gender: 'M')
zoro.update(profile_picture_url: File.open("#{Rails.root}/app/assets/images/Zoro.jpg"))

chopper = User.create!(email: 'chopper@strawhats.com', first_name: 'TonyTony', last_name: 'Chopper', password:'starwars', birth_date: Faker::Date.between(20.years.ago, Date.today), gender: 'M')
chopper.update(profile_picture_url: File.open("#{Rails.root}/app/assets/images/Chopper.jpg"))

franky = User.create!(email: 'franky@strawhats.com', first_name: 'IronMan', last_name: 'Franky', password:'starwars', birth_date: Faker::Date.between(40.years.ago, Date.today), gender: 'M')
franky.update(profile_picture_url: File.open("#{Rails.root}/app/assets/images/Franky.jpg"))

robin = User.create!(email: 'robin@strawhats.com', first_name: 'Nico', last_name: 'Robin', password:'starwars', birth_date: Faker::Date.between(40.years.ago, Date.today), gender: 'F')
robin.update(profile_picture_url: File.open("#{Rails.root}/app/assets/images/Robin.jpg"))

brook = User.create!(email: 'brook@strawhats.com', first_name: 'SoulKing', last_name: 'Brook', password:'starwars', birth_date: Faker::Date.between(50.years.ago, Date.today), gender: 'M')
brook.update(profile_picture_url: File.open("#{Rails.root}/app/assets/images/Brook.jpg"), gender: 'M')
