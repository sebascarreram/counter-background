const DateNow = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[time.getMonth()].slice(0, 3);
  const day = time.getDate();
  const year = time.getFullYear();

  return `${month} ${day}, ${year}`;
};

export default DateNow 
