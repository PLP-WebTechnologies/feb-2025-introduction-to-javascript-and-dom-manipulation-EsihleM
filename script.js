function changeText() {
  const text = document.getElementById('info-text');
  text.textContent = "The text has been updated dynamically!";
}

function toggleStyle() {
  const title = document.getElementById('main-title');
  title.style.color = title.style.color === 'blue' ? 'black' : 'blue';
  title.style.fontSize = title.style.fontSize === '2em' ? '3em' : '2em';
}

function addOrRemove() {
  const area = document.getElementById('dynamic-area');
  const existing = document.getElementById('new-element');

  if (existing) {
    area.removeChild(existing);
  } else {
    const newDiv = document.createElement('div');
    newDiv.id = 'new-element';
    newDiv.textContent = 'I was added dynamically!';
    newDiv.style.padding = '10px';
    newDiv.style.backgroundColor = '#f0f0f0';
    newDiv.style.border = '1px solid #ccc';
    area.appendChild(newDiv);
  }
}

