const cleanDate = () => {
  const date = new Date();
  const options = { hour: "numeric", minute: "2-digit", weekday: "short", year: "numeric", month: "short", day: "numeric"};
  const lastUpdated = date.toLocaleString('en-US', options);
  const splitDate = lastUpdated.split(',');
  const cleanDate =  splitDate[3] + ' ' + splitDate[1] + ' ' + splitDate[2]
  const dateShownOnPage = document.querySelector(".last-updated");
  dateShownOnPage.innerText = 'LAST UPDATED: ' + cleanDate;
}

cleanDate();