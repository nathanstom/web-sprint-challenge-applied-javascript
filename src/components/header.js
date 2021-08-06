  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const Header = (title, date, temp) => {
  const header = document.createElement('div');
  const spanDate = document.createElement('span');
  const spanTemp = document.createElement('span');
  const h1 = document.createElement('h1');


  //Classes
  header.className = 'header';
  spanTemp.className = 'temp';
  spanDate.className = 'date';


  //Content
  h1.textContent = title;
  spanDate.textContent = date;
  spanTemp.textContent = temp;


  //Appends
  header.appendChild(spanDate);
  header.appendChild(h1);
  header.appendChild(spanTemp);


  return header;
}

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headerAppender = (selector) => {
  const thingy = document.querySelector(selector);
  thingy.appendChild(Header('Lambda Times', 'AUGUST 6th, 2021', '76°'))
}

export { Header, headerAppender }
