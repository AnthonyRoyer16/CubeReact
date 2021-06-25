import moment from "moment";
import { getFormattedDate } from "./index";
import { getFormattedDateFromNow } from "./index";
import { getFormattedDateUnSub } from "./index";
import { isCancelablesDatePassed } from "./index";
import { isUpper } from "./index";

describe("getFormattedDate", () => {
  it("should gives us the date in string", () => {
    expect(getFormattedDate(1612880915)).toBe("février 2021");
  });
});

describe("getFormattedDateFromNow", () => {
  it("should give us the getFormattedDateFromNow return dans 2 ans", () => {
    expect(
      getFormattedDateFromNow(
        moment(new Date().getTime()).add(2, "years").unix()
      )
    ).toBe("dans 2 ans");
  });
  it("should give us the getFormattedDateFromNow return il y a 2 ans", () => {
    expect(
      getFormattedDateFromNow(
        moment(new Date().getTime()).subtract(2, "years").unix()
      )
    ).toBe("il y a 2 ans");
  });
});

describe("getFormattedDateUnSub", () => {
  it("should give us the getFormattedDateUnSub return 23 heures", () => {
    expect(
      getFormattedDateUnSub(moment(new Date().getTime()).add(1, "days").unix())
    ).toBe("23 heures");
  });
});

describe("isCancelablesDatePassed", () => {
  it("should give us the isCancelablesDatePassed return false", () => {
    expect(isCancelablesDatePassed(moment().startOf("day").unix())).toBe(true);
  });
  it("should give us the isCancelablesDatePassed return true", () => {
    expect(
      isCancelablesDatePassed(
        moment(new Date().getTime()).add(2, "days").unix()
      )
    ).toBe(false);
  });
});

describe("isUpper", () => {
  it("should give us the isUpper true", () => {
    expect(isUpper(moment(new Date().getTime()).add(1, "days").unix())).toBe(
      true
    );
  });
  it("should give us the isUpper false", () => {
    expect(
      isUpper(moment(new Date().getTime()).subtract(1, "days").unix())
    ).toBe(false);
  });
  it("should give us the isUpper true", () => {
    expect(isUpper(new Date().getTime())).toBe(true);
  });
});
