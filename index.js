const cleanDate = () => {
  const date = new Date();
  const options = { hour: "numeric", minute: "2-digit", weekday: "short", year: "numeric", month: "short", day: "numeric"};
  const lastUpdated = date.toLocaleString('en-US', options);
  const splitDate = lastUpdated.split(',');
  const cleanDate =  splitDate[3] + ' ' + splitDate[1] + ' ' + splitDate[2]
  const dateShownOnPage = document.querySelector(".last-updated");
  dateShownOnPage.innerText = 'LAST UPDATED: ' + cleanDate;
}

const toggleFilterMenu = (event) => {
  document.querySelector('.menu-tree').classList.toggle('hide-menu')
}

const closeFilterMenu = (event) => {
  document.querySelector('.menu-tree').classList.remove('hide-menu')
}

cleanDate();

document.querySelector('.menu-icon').addEventListener('click', toggleFilterMenu);
document.querySelector('.search-bar').addEventListener('click', closeFilterMenu);
document.querySelector('#menu-close-container').addEventListener('click', closeFilterMenu);
document.querySelector('main').addEventListener('click', closeFilterMenu);


      

