import '../styles/RegisterChoice.css';

const RegisterChoice = ({fieldName, setSelectedRegister, selectedRegister, selectedRegisterOptions}) => {

    const handleChange = e => {
        setSelectedRegister(e.target.value);
    }

    return <div className="registerChoice">
        <span className="registerChoice__paragraph">{fieldName}</span>
        <select value={selectedRegister} onChange={handleChange}>
            {selectedRegisterOptions.map(option => <option key={Math.random()}>{option}</option>)}
        </select>
    </div>
}

export default RegisterChoice;