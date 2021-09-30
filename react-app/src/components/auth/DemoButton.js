import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './demo.css'


const DemoButton = () => {
    const dispatch = useDispatch();
    useSelector(state => state.session.user)

    let credential = 'demo@email.com'
    let password = 'password'
    let demoLogin = (e) => { 
        e.preventDefault()
        return dispatch(sessionActions.login(credential, password)) }

    return (
            <span onClick={demoLogin} id="demoButton">DEMO</span>
    )
}

export default DemoButton;
