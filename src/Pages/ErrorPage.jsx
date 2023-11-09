
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container'>
            <img src="https://i.ibb.co/wpTTFSN/404-Dino-Style.gif" className='mx-auto' alt="" />
            <NavLink className={'flex justify-center'} to={'/'}>
                <button className='btn btn-primary'>Go Home</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;