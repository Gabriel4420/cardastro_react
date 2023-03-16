import { PointButtonProps } from '../../types/Props';
import './styles.css';



export const PointButton = ({ onClick }: PointButtonProps) => {
    return (
        <div className="pointButton" onClick={onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}