import StyledButtonAccounting from "../../assets/styles/ButtonAccountingStyles"
import WrapperButtonAccounting from "./WrapperButtonAccountingStyles"
import { createAccounting } from "../../assets/api/FetchCreateAccountings"
import { useDispatch } from "react-redux"
import { asyncAddSumCreator } from "../../store/sumReducer"
import { asyncAddAccountingCreator } from "../../store/AccountingsReducer"

const ButtonAccounting = () => {
    const dispatch = useDispatch();

    const onAddClickButton = async () => {
        const where = (document.getElementById('where-accounting') as HTMLInputElement).value;
        const date = new Date();
        const howMuch = +(document.getElementById('how-much-accounting') as HTMLInputElement).value;
    
        try {
            const response = await createAccounting({where, date, howMuch});
            if(response.status === 200) {
                dispatch(asyncAddAccountingCreator(response.data));
                dispatch(asyncAddSumCreator(howMuch));
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <WrapperButtonAccounting>
            <StyledButtonAccounting onClick={onAddClickButton} data-testid="addButton">Добавить</StyledButtonAccounting>
        </WrapperButtonAccounting>
    )
}

export default ButtonAccounting;
