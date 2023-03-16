import './styles.css';
import emptyCarImage from '../../assets/empty_car.png';

export const BlankList = () => {
    return (
        <div className="blankList">
            <img src={emptyCarImage} alt="carro vazio" />
            <h3>Sua lista está vazia.</h3>
            <p>Cadastre novos carros já!</p>
        </div>
    )
}