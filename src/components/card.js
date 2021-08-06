import axios from "axios";
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //



const Card = (article) => {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorPic = document.createElement('img');
  const name = document.createElement('span');


  //Classes
  card.className = 'card';
  headline.className = 'headline';
  author.className = 'author';
  imgContainer.className = 'img-container';


  //Content
  authorPic.src = article.authorPhoto;
  headline.textContent = article.headline;
  name.textContent = article.authorName;


  //Appends
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorPic);
  author.appendChild(name);


  //Event
  card.addEventListener('click', () => {
    console.log(headline.textContent)
  })
  return card
}

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

const cardAppender = (selector) => {
  const obt = document.querySelector(selector);
  axios.get('http://localhost:5000/api/articles')
  .then(res => {
    console.log(res.data.articles);
    res.data.articles.bootstrap.forEach(item => obt.appendChild(Card(item)));
    res.data.articles.javascript.forEach(item => obt.appendChild(Card(item)));
    res.data.articles.jquery.forEach(item => obt.appendChild(Card(item)));
    res.data.articles.node.forEach(item => obt.appendChild(Card(item)));
    res.data.articles.technology.forEach(item => obt.appendChild(Card(item)));
  })
}

export { Card, cardAppender }
