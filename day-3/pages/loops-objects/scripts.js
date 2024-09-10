// Create an array of book objects, with title and author (where both are strings). Create 5 objects
// in the array.
const UGLY_ARRAY = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    title: '1984',
    author: 'George Orwell',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
  },
];

// Create an HTML page with a <ul>.
const ul = document.getElementById('ul');

// Write javascript that loops over the array of book objects and create a new <li> for each book
// object and add the title and author to the <li> and insert it into the <ul>.
function populateList() {
  UGLY_ARRAY.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = `Title: ${book.title}\nAuthor:${book.author}`;
    ul.appendChild(li);
  });
}

// Verify that it works with any number of objects by removing 2 of the 5 objects from the array and
// run it again.
const button = document.getElementById('remove');
button.addEventListener('click', () => {
  UGLY_ARRAY.splice(3);
  ul.replaceChildren();
  populateList();
});

populateList();
