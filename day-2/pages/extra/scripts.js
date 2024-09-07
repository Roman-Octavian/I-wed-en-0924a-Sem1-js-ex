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

function listener(item) {
  const preexistingItems = [];

  if (ul.children != null && ul.children.length > 0) {
    console.log(ul.children);
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
}

if (select != null) {
  SELECT_ITEMS.forEach((item) => {
    const newItem = document.createElement('option');
    newItem.value = item;
    newItem.textContent = item;
    newItem.addEventListener('click', (e) => {
      listener(e.target.value);
    });
    select.appendChild(newItem);
  });
}
