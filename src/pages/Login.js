import { Route, Routes, Link } from 'react-router-dom';
function LoginPage() {

    return(
        <div>
            <br />
            <br />
            <label>User Name: </label><input type='text'></input>
            <br />
            <label>Password: </label><input type='password'></input>
            <br />
            <Link to='/food'>Login</ Link>
        </div>
    )
}

export default LoginPage