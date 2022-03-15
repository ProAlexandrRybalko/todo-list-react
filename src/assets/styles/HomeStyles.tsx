import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        font-size: 20px;
        font-style: italic;
        color: forestgreen;
        margin: 10px 0;
    }
`

export const ToDoLink = styled(Link)`
    text-decoration: none;
    color: brown;
`