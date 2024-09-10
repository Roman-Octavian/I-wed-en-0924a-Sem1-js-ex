// Get the container element
const container = document.getElementById('number-list');

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  // Create a new div element for each number
  const div = document.createElement('div');
  div.innerText = i;

  // Check if the number is even or odd and apply the appropriate class
  i % 2 === 0 ? (div.className = 'even number') : (div.className = 'odd number');

  // Add an event listener to highlight the number when clicked
  div.addEventListener('click', (e) => {
    // Remove highlight from all numbers
    console.log(i);
    const nodes = [...document.querySelectorAll('div.number')];
    console.log(nodes);
    nodes.forEach((i) => {
      i.className = i.className.replace(' highlight', '');
    });
    // Add highlight to the clicked number
    e.target.className += ' highlight';
  });

  // Append the new div to the container
  container.appendChild(div);
}
