import { Route, Routes, Link } from 'react-router-dom';

function StuffPage() {

    return(
        <div>
            <h2>STUFF:</h2>
            <Link to='/stuff/1'>Phone Charger</Link>
            <br /> 
            <Link to='/stuff/2'>Box Fan</Link> 
            <br /> 
            <Link to='/stuff/3'>Universal Remote</Link> 
        </div>
    )
}

export default StuffPage