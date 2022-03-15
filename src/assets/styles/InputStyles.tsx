import styled from 'styled-components';


const InputAccounting = styled.input`
    border: 1px solid #797979;
    border-radius: 5px;
    outline: none;
    margin-right: 20px;
    margin-top: 5px;
    padding-left: 20px;
    width: ${props => props.width || '280px'};
    height: 40px;
`

export default InputAccounting;