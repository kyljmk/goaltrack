import React from "react";
import { IDatePickerProps } from "../Types";

function DatePicker({ dateString, setDateString }: IDatePickerProps) {
  const today: Date = new Date();
  const minusTwo = new Date(today);
  minusTwo.setDate(minusTwo.getDate() - 2);
  const dayMinusTwo = minusTwo.toISOString().split("T")[0];

  const minusOne = new Date(today);
  minusOne.setDate(minusOne.getDate() - 1);
  const dayMinusOne = minusOne.toISOString().split("T")[0];

  const currentDay = today.toISOString().split("T")[0];

  const plusOne = new Date(today);
  plusOne.setDate(plusOne.getDate() + 1);
  const dayPlusOne = plusOne.toISOString().split("T")[0];

  const plusTwo = new Date(today);
  plusTwo.setDate(plusTwo.getDate() + 2);
  const dayPlusTwo = plusTwo.toISOString().split("T")[0];

  const plusThree = new Date(today);
  plusThree.setDate(plusThree.getDate() + 3);
  const dayPlusThree = plusThree.toISOString().split("T")[0];

  const plusFour = new Date(today);
  plusFour.setDate(plusFour.getDate() + 4);
  const dayPlusFour = plusFour.toISOString().split("T")[0];

  const day = new Date().getDay();

  const dayFormatter = (dayNumber: number) => {
    if (dayNumber === -2 || dayNumber === 5) {
      return "Fri";
    }
    if (dayNumber === -1 || dayNumber === 6) {
      return "Sat";
    }
    if (dayNumber === 0 || dayNumber === 7) {
      return "Sun";
    }
    if (dayNumber === 1 || dayNumber === 8) {
      return "Mon";
    }
    if (dayNumber === 2 || dayNumber === 9) {
      return "Tue";
    }
    if (dayNumber === 3 || dayNumber === 10) {
      return "Wed";
    }
    return "Thur";
  };
  const dateFormatter = (dateString: string) => {
    return `${dateString.slice(8, 10)}.${dateString.slice(5, 7)}`;
  };

  return (
    <div className="datePickerContainer">
      <div className="datePicker">
        <div
          className={
            dateString === dayMinusTwo
              ? "datePicker-dates-selected"
              : "datePicker-dates"
          }
          onClick={() => setDateString(dayMinusTwo)}
        >
          <div>{dayFormatter(day - 2)}</div>
          <div>{dateFormatter(dayMinusTwo)}</div>
        </div>
        <div
          className={
            dateString === dayMinusOne
              ? "datePicker-dates-selected"
              : "datePicker-dates"
          }
          onClick={() => setDateString(dayMinusOne)}
        >
          <div>{dayFormatter(day - 1)}</div>
          <div>{dateFormatter(dayMinusOne)}</div>
        </div>
        <div
          className={
            dateString === currentDay
              ? "datePicker-dates-selected"
              : "datePicker-dates"
          }
          onClick={() => setDateString(currentDay)}
        >
          <div>Today</div>
          <div>{dateFormatter(currentDay)}</div>
        </div>
        <div
          className={
            dateString === dayPlusOne
              ? "datePicker-dates-selected"
              : "datePicker-dates"
          }
          onClick={() => setDateString(dayPlusOne)}
        >
          <div>{dayFormatter(day + 1)}</div>
          <div>{dateFormatter(dayPlusOne)}</div>
        </div>
        <div
          className={
            dateString === dayPlusTwo
              ? "datePicker-dates-selected"
              : "datePicker-dates"
          }
          onClick={() => setDateString(dayPlusTwo)}
        >
          <div>{dayFormatter(day + 2)}</div>
          <div>{dateFormatter(dayPlusTwo)}</div>
        </div>
        <div
          className={
            dateString === dayPlusThree
              ? "datePicker-dates-selected"
              : "datePicker-dates"
          }
          onClick={() => setDateString(dayPlusThree)}
        >
          <div>{dayFormatter(day + 3)}</div>
          <div>{dateFormatter(dayPlusThree)}</div>
        </div>
        <div
          className={
            dateString === dayPlusFour
              ? "datePicker-dates-selected"
              : "datePicker-dates"
          }
          onClick={() => setDateString(dayPlusFour)}
        >
          <div>{dayFormatter(day + 4)}</div>
          <div>{dateFormatter(dayPlusFour)}</div>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
