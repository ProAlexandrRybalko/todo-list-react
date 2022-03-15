import { HomeWrapper, ToDoLink } from "../../assets/styles/HomeStyles";

export default function Home () {
    return (
        <HomeWrapper>
            <h1>Welcome ToDoList!</h1>
            <ToDoLink to="/todolist">Begin</ToDoLink>
        </HomeWrapper>
    )
}