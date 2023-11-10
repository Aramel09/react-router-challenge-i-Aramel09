import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import data from "../../db.json";
import App from "../app";
import { groupContactsByLetterUsingLastNames } from "../utils";

const contacts = [
  { name: "John Smith" },
  { name: "Alice Johnson" },
  { name: "Bob Anderson" },
];

test("Contacts are grouped by first letter of last name in alphabetical order", () => {
  const result = groupContactsByLetterUsingLastNames(contacts);

  // Extract the keys (first letters of last names) and check if they are in alphabetical order
  const keys = Object.keys(result);
  const sortedKeys = [...keys].sort();

  expect(keys).toEqual(sortedKeys); // Ensure that the keys are in alphabetical order
});

it("displays the contacts after removing the loading component", async () => {
    render(<App />);

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));
    const contacts = await screen.findAllByRole("listitem");
    expect(contacts).toHaveLength(data.users.length);

});

test("Click on users profile", async () => {
  const user = userEvent.setup();

  const expectedNameHeading = data.users[0].name
  const profilesTel = data.users[0].tel;

  render(<App />);


  // await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));
  const firstProfile = await screen.findByText(data.users[0].name);
  await user.click(firstProfile);
  // await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

  // await screen.findByText(profilesTel);

  expect(screen.getByText(expectedNameHeading)).toBeInTheDocument();
  expect(screen.getByText(profilesTel)).toBeInTheDocument()

});

test("Click back button", async () => {
  const user = userEvent.setup();

  render(<App />)
  const firstProfile = await screen.findByText(data.users[0].name);
  await user.click(firstProfile);
expect(screen.getByText(data.users[0].email)).toBeInTheDocument()

const backButton = await screen.getByText("Back")
await user.click(backButton)

    const contacts = await screen.findAllByRole("listitem");
    expect(contacts).toHaveLength(data.users.length);
    


})
