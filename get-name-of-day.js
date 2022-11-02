/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
function result() {
  date = new Date();
  date.setDate(date.getDate() - 4);
  const dayName = date.toLocaleString("en-us", {
    weekday: "long",
  });

  return dayName;
}

console.log(result());
