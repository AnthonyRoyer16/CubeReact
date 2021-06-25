import moment from "moment";
import "moment/locale/fr";

const getFormattedDate = (timestamp: number) =>
  moment(timestamp * 1000).format("MMMM YYYY");

const getFormattedDateFromNow = (date: number) => {
  const dateToCheck = moment.unix(date).format("MM/DD/YYYY");
  const today = moment().startOf("day");
  return moment(dateToCheck).from(today);
};

const getFormattedDateUnSub = (date: number) => {
  const hours = moment.unix(date).diff(moment(), "hours");
  const minutes = moment.unix(date).diff(moment(), "minutes");
  return hours > 0 ? `${hours} heures` : `${minutes} minutes`;
};

const isCancelablesDatePassed = (date: number) => {
  const dateToCheck = moment.unix(date).format("MM/DD/YYYY");
  const today = moment().startOf("day");
  const equal = moment(dateToCheck).isSame(today);
  return equal;
};

const isUpper = (timestamp: number) => timestamp > moment().unix();

export {
  getFormattedDate,
  getFormattedDateFromNow,
  isUpper,
  isCancelablesDatePassed,
  getFormattedDateUnSub,
};
