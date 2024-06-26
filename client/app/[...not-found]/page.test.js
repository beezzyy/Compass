import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from './page';
import { useAuth } from '../contexts/AuthContext';

jest.mock("../contexts/AuthContext", () => {
    return {
        useAuth: jest.fn()
    };

})

it("All elements of 404 page displayed to logged in user", async () => {
    useAuth.mockImplementation(() => {
        return {
            user: { uid: "asdadKSMD#35KD01" }
        }
       
    })
    render(<NotFound/>);
    const errorText = await screen.findByText("Error 404 - Page Not Found");
    const loginButton = screen.queryByText("Back to Login");
    const redirectButton = await screen.findByText("Back to Home");
    expect(errorText).toBeInTheDocument();
    expect(loginButton).not.toBeInTheDocument();
    expect(redirectButton).toBeInTheDocument();
})

it("All elements of 404 page displayed to a user not logged in", async () => {
    useAuth.mockImplementation(() => {
        return {
            user: null,
        }
        
    })
    render(<NotFound/>);
    const errorText = await screen.findByText("Error 404 - Page Not Found");
    const loginButton = await screen.findByText("Back to Login");
    const redirectButton = screen.queryByText("Back to Home...");
    expect(errorText).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(redirectButton).not.toBeInTheDocument();
})

