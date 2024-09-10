const localStorageItems = localStorage.getItem('messages');

let messages = [];

if (localStorageItems != null) {
  messages = JSON.parse(localStorageItems);
}

function storeMessageInLocalStorage() {
  const message = { text: document.getElementById('textarea').value, ts: new Date() };

  if (message.text == null) return;

  messages.push(message);

  localStorage.setItem('messages', JSON.stringify(messages));

  populateMessageList(message);
}

function formatDate(message) {
  return new Date(message.ts)
    .toLocaleString('da-DK', { timeStyle: 'short', dateStyle: 'short' })
    .replace('.', '/')
    .replace('.', '/')
    .replace('.', ':');
}

function populateMessageList(message = null) {
  if (message != null) {
    const newItem = document.createElement('p');
    newItem.textContent = `[${formatDate(message)}] ${message.text}`;
    newItem.title = formatDate(message);

    document.getElementById('messages').appendChild(newItem);
    return;
  }

  messages.forEach((message) => {
    const newItem = document.createElement('p');
    newItem.textContent = `[${formatDate(message)}] ${message.text}`;
    newItem.title = formatDate(message);

    document.getElementById('messages').appendChild(newItem);
  });
}

document.getElementById('submit').addEventListener('click', storeMessageInLocalStorage);

document.getElementById('logo').addEventListener('mouseenter', () => {
  alert('Mr. Duck is going to murder you in your sleep');
});

populateMessageList();

window.addEventListener('load', () => {
  const localStorageName = localStorage.getItem('name');
  let name;
  if (localStorageName == null) {
    name = prompt('What is your name?');
  } else {
    name = localStorageName;
  }
  alert(`Mr. Duck says: Hello ${name}!`);
});

document.getElementById('answer').addEventListener('click', async () => {
  const jokeRequest = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
  const joke = await jokeRequest.json();

  setTimeout(() => {
    if (joke.error) {
      alert('Mr. Duck says: No joke for you!');
    } else {
      alert(`Mr. Duck says:\n${joke.joke}`);
    }
  }, 1);
});
