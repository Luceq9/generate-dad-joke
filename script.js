const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    });
}
