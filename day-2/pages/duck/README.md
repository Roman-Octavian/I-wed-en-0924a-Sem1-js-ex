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
