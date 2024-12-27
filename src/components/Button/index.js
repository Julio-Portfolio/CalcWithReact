import {ButtonContainer} from './styles';

//Passamos propriedades para este botão
const Button = ({label,onClick})=>{
    return (
      <ButtonContainer onClick={onClick}>
      {label}
      </ButtonContainer>
    );
  }
  
export default Button;
  