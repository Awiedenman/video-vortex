const cleanDate = () => {
  const date = new Date();
  var options = { hour: "numeric", minute: "2-digit", weekday: "short", year: "numeric", month: "short", day: "numeric"};
  const lastUpdated = date.toLocaleString('en-US', options);
  const splitDate = lastUpdated.split(',');
  return splitDate[3] + ' ' + splitDate[1] + ' ' + splitDate[2]
}

console.log(cleanDate());