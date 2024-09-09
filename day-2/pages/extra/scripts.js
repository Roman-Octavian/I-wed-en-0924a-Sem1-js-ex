const SELECT_ITEMS = [
  'apple',
  'giraffe',
  'umbrella',
  'ocean',
  'pencil',
  'mountain',
  'cactus',
  'vortex',
  'whisper',
  'sunflower',
];

const select = document.getElementById('select');
const ul = document.getElementById('ul');

SELECT_ITEMS.forEach((item) => {
  const newItem = document.createElement('option');
  newItem.value = item;
  newItem.textContent = item;
  select.appendChild(newItem);
});

select.addEventListener('change', (event) => {
  console.log(event.target.value);
  const item = event.target.value;
  const preexistingItems = [];

  if (ul.children != null && ul.children.length > 0) {
    for (const child of ul.children) {
      preexistingItems.push(child.textContent);
    }
  }

  if (preexistingItems.includes(item)) {
    ul.removeChild(document.getElementById(item));
  } else {
    const newItem = document.createElement('li');
    newItem.id = item;
    newItem.textContent = item;
    ul.appendChild(newItem);
  }

  /* Set value to nothing because select HTML tag does not have any native cross-browser events for
  an option that has already been selected and only Firefox supports events directly on options */
  select.value = undefined;
});

// Default to nothing to allow events selection of first item
select.value = undefined;
