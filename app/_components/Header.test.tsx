import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./header";

describe("Running tests for Header", () => {
  it("should render", async () => {
    render(<Header navItems={[]} logo="hello world" />);
    expect(screen.queryAllByText("hello world")).toHaveLength(2);
  });

  it("should open drawer on click", async () => {
    render(
      <Header navItems={[{ display: "test", route: "/" }]} logo="hello world" />
    );
    fireEvent.click(screen.getByTestId("header-hamburger-icon"));
    expect(screen.getByText("test")).toBeVisible();
  });
});
