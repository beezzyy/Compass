import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import Settings from "../settings/page";
import "@testing-library/jest-dom";

//Mock useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

//Setitng useRouter mock before executing tests
beforeAll(() => {
  useRouter.mockReturnValue({ query: {} });
});

describe("Settings Page", () => {
  //Test to check if page is rendered correctly with proper text and button
  test("Renders correct content and button", () => {
    render(<Settings></Settings>);
    const SettingsHeader = screen.getByText(/Settings/i);
    const YourAccountHeader = screen.getByText(/Your account/i);
    const YourProfile = screen.getByText(/Your Profile/i);
    const ChangeYourPassword = screen.getByText(/Change your password/i);
    const HowToUse = screen.getByText(/How you use Compass/i);
    const PushNotifications = screen.getByText(/Push notifications/i);
    const AboutCompass = screen.getByText(/About Compass/i);
    const LogoutButton = screen.getByRole("button");

    expect(SettingsHeader).toBeInTheDocument();
    expect(YourAccountHeader).toBeInTheDocument();
    expect(YourProfile).toBeInTheDocument();
    expect(ChangeYourPassword).toBeInTheDocument();
    expect(HowToUse).toBeInTheDocument();
    expect(PushNotifications).toBeInTheDocument();
    expect(AboutCompass).toBeInTheDocument();

    expect(LogoutButton).toBeInTheDocument();
    userEvent.click(LogoutButton);
  });
});
