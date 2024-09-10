const localStorageItems = localStorage.getItem('messages');

let messages = [];

if (localStorageItems != null) {
  messages = JSON.parse(localStorageItems);
}

function storeMessageInLocalStorage() {
  const message = document.getElementById('textarea').value;

  if (message == null) return;

  messages.push(message);

  localStorage.setItem('messages', JSON.stringify(messages));

  populateMessageList(message);
}

function populateMessageList(message = null) {
  if (message != null) {
    const newItem = document.createElement('p');
    newItem.textContent = message;

    document.getElementById('messages').appendChild(newItem);
    return;
  }

  messages.forEach((message) => {
    const newItem = document.createElement('p');
    newItem.textContent = message;

    document.getElementById('messages').appendChild(newItem);
  });
}

document.getElementById('submit').addEventListener('click', storeMessageInLocalStorage);

document.getElementById('logo').addEventListener('mouseenter', () => {
  alert('Mr. Duck is going to murder you in your sleep');
});

populateMessageList();
