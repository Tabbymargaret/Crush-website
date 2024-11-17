const response = document.getElementById('response');

const showMessage = () => {

    const gif = document.querySelector('gif');
    const image = document.createElement('img');
    // image.src = 'https://media0.giphy.com/media/26xBRiIYbyjCzYMAU/200w.webp?cid=ecf05e47k8hhwjgmp7chx0sieo7g6ut29d3rarusdjl1iicy&ep=v1_gifs_related&rid=200w.webp&ct=g';
    // image.style.width = '20px';
    // image.style.height = '20px';
    // image.style.objectFit = 'cover';
    // gif.appendChild(image);

    response.innerText = "Yay! I love you pookieeee😍";
    response.style.display = 'block';

};

const noButton = document.getElementById('no');

noButton.addEventListener('mouseover', () => {
    response.style.display = 'none';
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
