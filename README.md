# TicTacToe

This is a simple version of playing tic tac toe in your browser.
The main design style of this project was making it using factories and modules 
while using as little of the global namespace as possible.
I found using the factory functions to control all of the player information to 
work for what I needed. The game logic, controls, and board itself
were made using the module pattern. Getting everything to interact with each 
other was a little challenging at times. Mostly because I wanted some of 
my functions to be immediatly invoked so I had to find a way to limit what 
can and can not be iife inside each module.