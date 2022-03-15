import { fireEvent, render, screen } from "@testing-library/react"
import axios from "axios";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { getAllAccountings } from "../assets/api/FetchAllAccountings";
import ToDoList from "../components/ToDoList/ToDoList";
import { store } from "../store";

jest.mock('axios');

describe('getData', () => {
    let response;

    beforeEach(() => {
        response = {
            data: {
                accountings: [
                    {
                        "_id": 0,
                        "where": '',
                        'date': '',
                        'howMuch': ''
                    },
                ],
                sum: 1000,
            }
        }
    })

    test("AddButtonEvent", async () => {
        axios.get.mockReturnValue(response);
        render(
            <MemoryRouter>
                <Provider store={ store }>
                    <ToDoList/>
                </Provider>
            </MemoryRouter>
        );
        const accountings = await screen.findAllByTestId('accounting');
        const todoList = screen.getByTestId('todoList');

        expect(todoList).toMatchSnapshot('toDoList');
        expect(accountings.length).toEqual(1);
        expect(axios.get).toBeCalledTimes(1);
    });
})

