import { useParams } from 'react-router-dom';
import stuff from '../data/stuff';
import css from './StuffProduct.module.css';

function StuffProduct() {


    const { id } =  useParams();

    return(
        <div className={css.productItem}>
            <h3>{stuff[id-1].name}</h3>
            <p>{stuff[id-1].price}</p>
            <p>{stuff[id-1].description}</p>
            </div>
    )
}

export default StuffProduct