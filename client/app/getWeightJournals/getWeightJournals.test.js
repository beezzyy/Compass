import {render, screen,act} from '@testing-library/react';
import '@testing-library/jest-dom';
import GetWeightJournals from './page';
import {getWeightJournals} from '../http/weightJournalAPI';
import userEvent from '@testing-library/user-event';

import { useRouter } from "next/router";
import { useUser } from '../contexts/UserContext';

beforeEach(async () => {
    await act(async () => {
        render(<GetWeightJournals/>);
      });
})

const mockRouter= jest.fn();
jest.mock("next/navigation", () => ({
    useRouter: () => {
        return {
            push: mockRouter
        }
    }
}));

const userData = {
    uid: '1',
}

jest.mock("../contexts/UserContext", () => {
    return {
      useUser: () =>{
        return {
            userInfo: {
                uid: '1',
            }
        }
      }
    };
  });


jest.mock('../http/weightJournalAPI', () => {
    return {
        getWeightJournals: () => {
            return {
                
                    success: "SUCCESS",
                    data: [
                        {
                            uid: '1',
                            date: '2014-01-01',
                            time: '08:36',
                            weight: '75.5',
                            height: 1.65,
                            unit:'kg',
                            Notes : 'I am feeling good today'
                    }
                ]
            }
        }
    }
});
   
    test("Get Weight Journals list is displayed correctly", async () => {
        await  getWeightJournals();
        render (<GetWeightJournals/>);
        const date = await screen.findByText('2014-01-01 08:36 AM');
        // const weight = await screen.findByText('75.5');
        // const height = await screen.findByText('Your height');

        expect(date).toBeInTheDocument();
        // expect(weight).toBeInTheDocument();
        // expect(height).toBeInTheDocument();
    })

   

    