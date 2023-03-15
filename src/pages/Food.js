import { Route, Routes, Link } from 'react-router-dom';

function FoodPage() {

    return(
        <div>
            <h2>FOODS:</h2>
            <Link to='/food/1'>Hot Dogs</Link>
            <br /> 
            <Link to='/food/2'>Pizza</Link> 
            <br /> 
            <Link to='/food/3'>Milk</Link> 
        </div>
    )
}

export default FoodPage