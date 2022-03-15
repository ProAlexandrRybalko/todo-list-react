import { useState, FC } from "react";
import StyledDate from "../../assets/styles/DateStyles";
import StyledImage from "../../assets/styles/ImagePicturesEditStyles";
import InputAccounting from "../../assets/styles/InputStyles";
import NumberName from "../../assets/styles/NumberNameStyles";
import PicturesEdit from "../../assets/styles/PicturesEdirStyles";
import StyledAccountingBlock from "../../assets/styles/AccountingStyles";
import { AccTypeId, AccTypeSet } from "./AccountingsType";
import cross from '../../assets/images/cross-removebg-preview.png';
import check from '../../assets/images/greenCheckTransparent.png';
import pencil from "../../assets/images/pencil-red-eraser-removebg-preview.png";
import OutputInfo from "../../assets/styles/OutputInfoStyles";
import { deleteAccounting } from "../../assets/api/FetchDeleteAccounting";
import { changeAccounting } from "../../assets/api/FetchChangeAccounting";
import { useDispatch } from "react-redux";
import { asyncAddSumCreator, asyncSubSumCreator } from "../../store/sumReducer";
import { asyncChangeAccountingCreator, asyncSubAccountingCreator } from "../../store/AccountingsReducer";

const getRightDate = (date: Date):string => {
    const parsedDate = new Date(date);
    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1; //months from 1-12
    const year = parsedDate.getFullYear();

    return `${day}.${month}.${year}`;
}

const Accounting: FC<AccTypeSet> = (props) => {
    const dispatch = useDispatch();
    const {where, date, howMuch, index, _id} = props;
    const [hider, setHider] = useState<boolean>(true);
    const [inputWhere, setInputWhere] = useState<string>(where);
    const [inputHowMuch, setInputHowMuch] = useState<number>(howMuch);

    const onDeleteAccounting = async () => {
        try {
            const response = await deleteAccounting(_id);
            if(response.status === 204) {
                dispatch(asyncSubAccountingCreator(index));
            }
        } catch (error) {
            console.log(error);
        }
        dispatch(asyncSubSumCreator(howMuch));
    }

    const onChangeAccounting = async () => {
        try {
            const response = await changeAccounting(_id, inputWhere, inputHowMuch);
            if(response.status === 200) {
                const obj: AccTypeId = {
                    _id, 
                    where: inputWhere, 
                    date, 
                    howMuch: inputHowMuch
                }
                dispatch(asyncChangeAccountingCreator({index, obj}));
            }
        } catch (error) {
            console.log(error);
        }
        dispatch(asyncAddSumCreator(inputHowMuch - howMuch));
        setHider(!hider); 
    }

    return (
        <StyledAccountingBlock data-testid="accounting">
            <NumberName>
                
                {
                    hider 
                    ?   <OutputInfo>{ `${index + 1}) ${where}` }</OutputInfo>
                    :   <InputAccounting type={'text'} defaultValue={ where } onChange={(e) => setInputWhere(e.target.value)}/>
                }
            </NumberName>
            <StyledDate>
                <OutputInfo>{ getRightDate(date) }</OutputInfo>
            </StyledDate>
            <div>
                {
                    hider 
                    ?   <OutputInfo>{ howMuch }</OutputInfo>
                    :   <InputAccounting type={'text'} width={"80px"} defaultValue={ howMuch } onChange={(e) => setInputHowMuch(+e.target.value)}/>
                }
            </div>
            <PicturesEdit>
                {   
                    hider
                    ?   <StyledImage onClick={onDeleteAccounting} src={cross} alt="cross"/>
                    :   <StyledImage onClick={onChangeAccounting} src={check} alt="check"/>
                }
                <StyledImage onClick={() => setHider(!hider)} src={pencil} alt="pencil"/>
            </PicturesEdit>
        </StyledAccountingBlock>
    )
}

export default Accounting;
