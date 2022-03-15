import { useEffect } from "react";
import { MainWrapper } from "../../assets/styles/ToDoStyles"
import Header from "../../assets/styles/HeaderStyles";
import Content from "../../assets/styles/ContentStyles";
import Managing from "../../assets/styles/ManagingStyles";
import InputAccounting from "../../assets/styles/InputStyles";
import InputInfoAccounting from "../../assets/styles/InputInfoStyles";
import Sum from "../../assets/styles/SumStyles";
import ButtonAccounting from "../buttonAccounting/ButtonAccounting";
import ViewAccounting from "../../assets/styles/ViewAccountingStyles";
import Accounting from "../Accounting/Accounting";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store";
import { asyncSetAccountingsCreator } from "../../store/AccountingsReducer";
import { asyncSetSumCreator } from "../../store/sumReducer";

const ToDoList = () => {

    const dispatch = useDispatch();
    const accountings = useTypedSelector(state => state.accountingsReducer.accountings);
    const sum = useTypedSelector(state => state.sumReducer.sum);
    
    useEffect(() => {
        dispatch(asyncSetAccountingsCreator());
        dispatch(asyncSetSumCreator());
    }, []);

    return (
        <MainWrapper data-testid="todoList">
            <Header>
                <p>Учёт моих расходов</p>
            </Header>
            <Content>
                <Managing>
                    <InputInfoAccounting>
                        <label htmlFor="where-accounting">Куда было потрачено</label>
                        <InputAccounting id="where-accounting" type={"text"}/>
                    </InputInfoAccounting>
                    <InputInfoAccounting>
                        <label htmlFor="how-much-accounting">Сколько было потрачено</label>
                        <InputAccounting id="how-much-accounting" type={"number"} width={"180px"}/>
                    </InputInfoAccounting>
                    <ButtonAccounting/>
                </Managing>
                <Sum>{ `Итого: ${sum} р.` }</Sum>
                <ViewAccounting id="view-accounting">
                    {
                        accountings.map((val, index) => 
                            {
                                return <Accounting 
                                            key={val._id}
                                            _id={val._id}
                                            where={val.where}
                                            date={val.date}
                                            howMuch={val.howMuch}
                                            index={index}
                                        />
                            }
                        )
                    }
                </ViewAccounting>
            </Content>
        </MainWrapper>
    )
}

export default ToDoList;