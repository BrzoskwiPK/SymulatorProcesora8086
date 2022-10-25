import '../styles/Register.css';

const Register = ({registerName, registerValue, setRegisterValue}) => {

    const handleInputChange = e => {
        e.preventDefault();
        setRegisterValue(e.target.value);
    }

    return <div className="register">
        <p className="register__name">{registerName}:</p>
        <input className="register__value" value={registerValue} onChange={handleInputChange} maxLength={4} />
    </div>
}

export default Register;