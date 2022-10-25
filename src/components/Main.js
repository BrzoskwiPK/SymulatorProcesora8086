import '../styles/Main.css';
import Register from "./Register";
import {useState} from "react";
import RegisterChoice from "./RegisterChoice";

const Main = () => {
    const [registerAxValue, setRegisterAXValue] = useState("");
    const [registerBxValue, setRegisterBXValue] = useState("");
    const [registerCxValue, setRegisterCXValue] = useState("");
    const [registerDxValue, setRegisterDXValue] = useState("");

    const selectedRegistersOptions = ["AX", "BX", "CX", "DX"];

    const [selectedFirstRegister, setSelectedFirstRegister] = useState(selectedRegistersOptions[0]);
    const [selectedFinalRegister, setSelectedFinalRegister] = useState(selectedRegistersOptions[0]);

    const myFunctions = {
        "AX": setRegisterAXValue,
        "BX": setRegisterBXValue,
        "CX": setRegisterCXValue,
        "DX": setRegisterDXValue,
    }

    const myValues = {
        "AX": registerAxValue,
        "BX": registerBxValue,
        "CX": registerCxValue,
        "DX": registerDxValue
    }

    const handleRegistersGenerator = () => {
        setRegisterAXValue(generateRandomString);
        setRegisterBXValue(generateRandomString);
        setRegisterCXValue(generateRandomString);
        setRegisterDXValue(generateRandomString);
    }

    const generateRandomString = () => {
        let registerSize = 4, i, generatedString = "";
        const numbersTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

        for (i = 0; i < registerSize; i++) {
            generatedString += numbersTable[Math.floor(Math.random() * numbersTable.length)];
        }

        return generatedString;
    }

    const handleMov = () => {
        if (selectedFirstRegister === selectedFinalRegister) alert ("Wybrałeś dwa te same rejestry!");

        myFunctions[selectedFinalRegister](myValues[selectedFirstRegister]);
    }

    const handleXchg = () => {
        if (selectedFirstRegister === selectedFinalRegister) alert ("Wybrałeś dwa te same rejestry!");

        myFunctions[selectedFirstRegister](myValues[selectedFinalRegister]);
        myFunctions[selectedFinalRegister](myValues[selectedFirstRegister]);
    }

    return <main className="main">
        <div className="registers">
            <Register registerName="AX" registerValue={registerAxValue} setRegisterValue={setRegisterAXValue}/>
            <Register registerName="BX" registerValue={registerBxValue} setRegisterValue={setRegisterBXValue}/>
            <Register registerName="CX" registerValue={registerCxValue} setRegisterValue={setRegisterCXValue}/>
            <Register registerName="DX" registerValue={registerDxValue} setRegisterValue={setRegisterDXValue}/>
        </div>
        <button className="registersGenerator" onClick={handleRegistersGenerator}>Wylosuj liczby w formacie szesnastkowym</button>
        <div className="registersChoice">
            <RegisterChoice fieldName="Rejestr początkowy" setSelectedRegister={setSelectedFirstRegister}
                            selectedRegister={selectedFirstRegister}
                            selectedRegisterOptions={selectedRegistersOptions} />
            <RegisterChoice fieldName="Rejestr końcowy" setSelectedRegister={setSelectedFinalRegister}
                            selectedRegister={selectedFinalRegister}
                            selectedRegisterOptions={selectedRegistersOptions} />
        </div>
        <div className="actionButtons">
            <button className="registersMov" onClick={handleMov}>MOV</button>
            <button className="registersXchg" onClick={handleXchg}>XCHG</button>
        </div>
    </main>
}

export default Main