var first_name = prompt("What is your first name?")
var last_name = prompt("What is your last name?")
var age = prompt("How old are you?")
var height = prompt("How tall are you (cm)?")
var pet = prompt("What's your pet's name?")

if (first_name.charAt(0) == last_name.charAt(0) && age > 20 && age < 30 && height >= 170 && pet.charAt(pet.length - 1) == "y") {
  console.log("Welcome, comrade!")
}