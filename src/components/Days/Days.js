import "./Days.scss";

const CalculateDate = () => {
  const currentDate = new Date();
  const myDate = new Date();
  myDate.setFullYear(2022, 11, 13);

  let timeLeft = myDate - currentDate;
  timeLeft = timeLeft / 1000;

  let seconds = Math.floor(timeLeft % 60);
  timeLeft = timeLeft / 60;

  let minutes = Math.floor(timeLeft % 60);
  timeLeft = timeLeft / 60;

  let hours = Math.floor(timeLeft % 24);
  let days = Math.floor(timeLeft / 24);

  console.log(days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds");

  return (
    <div className="days">
      <span className="text text-1">Until</span>
      <span className="text text-2"> my</span>
      <span className="text text-3"> holiday:</span>
      <span className="text text-4"> {days}</span>
      <span className="text text-5"> days</span>
      <span className="text text-6"> left!</span>
    </div>
  );
};

export default CalculateDate;
