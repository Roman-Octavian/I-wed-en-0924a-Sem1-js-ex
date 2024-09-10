# Exercise: Mr. Duck

- We’re going to build our own Rubber Duck website: Mr.Duck
- The website should have:
  - A header with, preferably, a rubber duck in a suite as logo.
  - A text input of some sort, allowing you to explain your problem to Mr. Duck
  - A button sending the message to Mr. Duck

## Extras: LocalStorage (supplementary)

- We want the site to save all our messages, so it remembers our messages whenever we reload.
- Procedure:
  - Whenever the user types a message, add the message to an array
  - Save that array to LocalStorage.
  - Whenever the site loads (add an event listener for “load”), the site retrieves the array from
    LocalStorage.
  - And fills the DOM, with the retrieved messages.

## Repetition exercise

- Today Mr.Duck is going to answer us!
- But in a polite manner.

- So first we need to tell him our name.
  - Add an event listener on the window for load.
  - Prompt the user for their name.
  - Make Mr. Duck say hello to us, when the page loads.

## Date: Exercise

- Lets add a timestamp to our messages on Mr. Duck.
- Adding title to an html element, will give us a hover with the desired text.
  - Format of that Date: “DD/MM/YYYY, hh:mm”

# Extra Exercises

- Save the users name to localStorage (in users page)
  - On Load, read the users name from localStorage
- Add a delay to Mr. Ducks puns, to improve his timing.
