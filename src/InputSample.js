import React, { useState } from 'react';

function InputSample() {
    const [eom_inputs, setEomInputs] = useState({
        name: '',
        nickname: ''
    });

    const {name,nickname} = eom_inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setEomInputs({
            ...eom_inputs,
            [name]: value
        })
    };

    const onReset = () => {
        setEomInputs({
            name: '',
            nickname: '',
        })
    };

    return (
        <div>
            <input name="name" placeholder="Name" onChange={onChange} value={name} />
            <input name="nickname" placeholder="NickName" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;