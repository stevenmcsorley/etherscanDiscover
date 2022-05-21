import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import PriceBlock from "./PriceBlock";

const props = {
  price: "10000",
  timestamp: "99999",
};

const getCmp = (propObj: typeof props) => {
  const { price, timestamp } = propObj;

  return <PriceBlock price={price} timestamp={timestamp} />;
};
describe("Price Block", () => {
  it("containes price and timestamp text", () => {
    const { getByText } = render(getCmp(props));

    expect(getByText("10000")).toBeVisible();
    expect(getByText("99999")).toBeVisible();
  });
});
