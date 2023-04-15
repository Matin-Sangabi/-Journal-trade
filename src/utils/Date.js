const monthNames = [
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

export const MonthDate = monthNames[new Date().getMonth()];
const options = { weekday: "short", day: "numeric" };
const CalculateWeek = (now) => {
  let day = now.getDay();
  const firstDay = now.getDate() - day + (day === 0 ? -6 : 1);
  new Date(now.setDate(firstDay)).toUTCString();
  const weekDate = [];

  for (let i = 0; i <= 6; i++) {
    let lastDate = firstDay + i;
    let dates = new Date(now.setDate(lastDate)).toLocaleDateString(
      "en",
      options
    );
    const currentDate = dates.split(" ");
    weekDate.push({
      day: currentDate[0],
      weekday: currentDate[1],
      today:
        new Date().toLocaleDateString("en", options) === dates ? true : false,
    });
  }
  return weekDate;
};

export default CalculateWeek;
