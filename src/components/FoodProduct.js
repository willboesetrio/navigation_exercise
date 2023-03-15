import { useParams } from 'react-router-dom';
import foods from '../data/foods';
import css from './FoodProduct.module.css';

function FoodProduct() {


    const { id } =  useParams();

    return(
        <div className={css.foodItem}>
            <h3>{foods[id-1].name}</h3>
            <p>{foods[id-1].price}</p>
            <p>{foods[id-1].description}</p>
        </div>
    )
}

export default FoodProduct