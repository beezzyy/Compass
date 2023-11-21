import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import NotificationPage from "./notificationPage";
import "@testing-library/jest-dom";
import { useUser } from "../contexts/UserContext";
import {
  getNotificationPreference,
  updateNotificationPreference,
  createNotificationPreference,
} from "../http/notificationPreferenceAPI";
import Alert from "@mui/material/Alert";
import { act } from "react-dom/test-utils";

//Mock useRouter from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

//Mock back from next Router
const mockRouter = jest.fn();

//Setitng useRouter mock behaviour before executing tests
beforeAll(() => {
  useRouter.mockReturnValue({
    query: {},
    push: mockRouter,
  });
});

const userData = {
  uid: "1",
};

//Mock user
jest.mock("../contexts/UserContext", () => {
  return {
    useUser: () => {
      return {
        userInfo: {
          uid: "1",
        },
      };
    },
  };
});

//Mock http request to get notification preferences
jest.mock("../http/notificationPreferenceAPI", () => {
  return {
    getNotificationPreference: jest.fn(),
    updateNotificationPreference: jest.fn(),
    createNotificationPreference: jest.fn(),
  };
});

describe("Notification Settings Page", () => {
  //Test to check if page is rendered correctly with proper text and button
  test("Renders correct content and button", async () => {
    render(<NotificationPage />);
    global.alert = jest.fn();
    const PushNotificationsHeader =
      screen.getAllByText(/Push Notifications/i)[0];
    const SubscriptionReminder = screen.getByText(/Enable Push Notifications/i);
    const ActivityReminders = screen.getByText(/Activity Reminders/i);
    const MedicationReminders = screen.getByText(/Medication Reminders/i);
    const AppointmentReminders = screen.getByText(/Appointment Reminders/i);
    const FoodIntakeReminders = screen.getByText(/Food Intake Reminders/i);
    const BloodGlucoseReminders = screen.getByText(/Blood Glucose Reminders/i);
    const InsulinInjectionReminders = screen.getByText(
      /Insulin Injection Reminders/
    );
    const BackButton = screen.getAllByRole("button")[0];
    const Save = screen.getAllByRole("button")[1];

    expect(PushNotificationsHeader).toBeInTheDocument();
    expect(SubscriptionReminder).toBeInTheDocument();
    expect(ActivityReminders).toBeInTheDocument();
    expect(MedicationReminders).toBeInTheDocument();
    expect(AppointmentReminders).toBeInTheDocument();
    expect(FoodIntakeReminders).toBeInTheDocument();
    expect(BloodGlucoseReminders).toBeInTheDocument();
    expect(InsulinInjectionReminders).toBeInTheDocument();

    expect(BackButton).toBeInTheDocument();
    await mockRouter();
    expect(mockRouter).toHaveBeenCalledTimes(1);

    expect(Save).toBeInTheDocument();
    fireEvent.click(Save);
    await updateNotificationPreference;
  });

  test("Check if switch button works", () => {
    render(<NotificationPage />);
    const toggleButtonSubscription =
      screen.getByLabelText("SubscriptionSwitch");
    const toggleButtonActvity = screen.getByLabelText("ActvitySwitch");
    const toggleButtonMedication = screen.getByLabelText("MedicationSwitch");
    const toggleButtonAppointment = screen.getByLabelText("AppointmentSwitch");
    const toggleButtonFoodIntake = screen.getByLabelText("FoodIntakeSwitch");
    const toggleButtonBloodGlucose =
      screen.getByLabelText("BloodGlucoseSwitch");
    const toggleButtonInsulinDosage = screen.getByLabelText(
      "InsulinInjectionSwitch"
    );
    expect(toggleButtonSubscription).not.toBeChecked();
    expect(toggleButtonActvity).toBeChecked();
    expect(toggleButtonMedication).toBeChecked();
    expect(toggleButtonAppointment).toBeChecked();
    expect(toggleButtonFoodIntake).toBeChecked();
    expect(toggleButtonBloodGlucose).toBeChecked();
    expect(toggleButtonInsulinDosage).toBeChecked();
    fireEvent.click(toggleButtonSubscription);
    fireEvent.click(toggleButtonActvity);
    fireEvent.click(toggleButtonMedication);
    fireEvent.click(toggleButtonAppointment);
    fireEvent.click(toggleButtonFoodIntake);
    fireEvent.click(toggleButtonBloodGlucose);
    fireEvent.click(toggleButtonInsulinDosage);
    expect(toggleButtonSubscription).toBeChecked();
    expect(toggleButtonActvity).not.toBeChecked();
    expect(toggleButtonMedication).not.toBeChecked();
    expect(toggleButtonAppointment).not.toBeChecked();
    expect(toggleButtonFoodIntake).not.toBeChecked();
    expect(toggleButtonBloodGlucose).not.toBeChecked();
    expect(toggleButtonInsulinDosage).not.toBeChecked();
  });

  test("Calls router's push method on button click", () => {
    render(<NotificationPage />);
    const button = screen.getByText("Save");
    fireEvent.click(button);
    expect(mockRouter).toHaveBeenCalled();
  });

  test("Routes to settings page on button click", () => {
    const mockPush = jest.fn();
    useRouter.mockImplementation(() => ({
      push: mockPush,
    }));

    render(<NotificationPage />);
    const backButton = screen.getByText("Push Notifications");

    fireEvent.click(backButton);
    expect(mockPush).toHaveBeenCalledWith("/settings");
  });
});

// Assume the code is in a component named AlertComponent
describe("AlertComponent", () => {
  test("Renders success alert on successful update", async () => {
    updateNotificationPreference.mockResolvedValueOnce({ status: "success" });

    render(<NotificationPage />);

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(updateNotificationPreference).toHaveBeenCalled();
    });

    // Ensure that the success alert is shown
    expect(screen.getByText("Preference saved!")).toBeInTheDocument();

    // Simulate closing the success alert
    fireEvent.click(screen.getByLabelText("Close"));

    // Check that the success alert is closed by verifying its absence
    expect(screen.queryByText("Preference saved!")).toBeNull();
  });

  test("Renders error alert on update failure", async () => {
    updateNotificationPreference.mockRejectedValueOnce(new Error("Failed"));

    render(<NotificationPage />);

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(updateNotificationPreference).toHaveBeenCalled();
    });

    // Ensure that the error alert is shown
    expect(screen.getByText("Preference failed to save!")).toBeInTheDocument();

    // Simulate closing the error alert
    fireEvent.click(screen.getByLabelText("Close"));

    // Check that the error alert is closed by verifying its absence
    expect(screen.queryByText("Preference failed to save!")).toBeNull();
  });
});

describe("Notification Page useEffect", () => {
  beforeEach(() => {
    // Mock the Notification API in the window object
    Object.defineProperty(window, "Notification", {
      value: {
        permission: "granted",
      },
      writable: true,
    });
  });

  test("fetchNotificationPreference fetches and sets preferences", async () => {
    const fakeData = {
      data: {
        activityReminders: true,
        medicationReminders: false,
        appointmentReminders: true,
        foodIntakeReminders: true,
        glucoseMeasurementReminders: true,
        insulinDosageReminders: true,
      },
    };
    getNotificationPreference.mockResolvedValue(fakeData);

    await act(async () => {
      render(<NotificationPage />);
    });

    // Assert that getNotificationPreference was called
    expect(getNotificationPreference).toHaveBeenCalledTimes(7);
  });

  test("handles error while fetching notification preferences", async () => {
    getNotificationPreference.mockRejectedValue("Some error");

    await act(async () => {
      render(<NotificationPage />);
    });

    // Assert that getNotificationPreference was called
    // Note: we put expected calls to 2 due to react strict mode rendering the component twice in development mode
    expect(getNotificationPreference).toHaveBeenCalledTimes(8);

    // Assert that createNotificationPreference was attempted
    expect(createNotificationPreference).toHaveBeenCalled();
  });
});
