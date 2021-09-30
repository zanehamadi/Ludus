import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';


const DemoButton = () => {
    const dispatch = useDispatch();
    useSelector(state => state.session.user)

    let credential = 'demo@email.com'
    let password = 'password'
    let demoLogin = (e) => { 
        e.preventDefault()
        return dispatch(sessionActions.login(credential, password)) }

    return (
            <Link onClick={demoLogin}>DEMO</Link >
    )
}

export default DemoButton;
