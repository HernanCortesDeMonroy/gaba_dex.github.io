import '../styles/CurrencyField.css'
import React, { useState } from "react";
import TokenSelectModal from './TokenSelectModal';

const CurrencyField =(props) => {
    const [showSelectModal, setShowSelectModal] = useState(undefined);
    const [token, setToken] = useState(undefined);

    const getPrice = (value) => {
        props.getSwapPrice(value)
    }
    
    return (
        <div className="row currencyInput">
            <div className="col-md-6 numberContainer"> 
                {props.loading ? (
                    <div className="spinnerContainer">
                        <props.spinner />
                    </div>
                ) : (
                    <input className="currencyInputField"
                    placeholder="0.0"
                    value={props.value}
                    onChange={e => (props.field === 'input' ? getPrice(e.target.value) : null)}
                    minLength = "1"
                    maxLength = "10"
                    />
                )}
            </div>
            <div className="col-md-6 tokenContainer">
                    <button className="tokenSelectModalButton" onClick={() => setShowSelectModal(true)}>
                        {props.tokenName}
                    </button>
                        {showSelectModal && (
                        <TokenSelectModal 
                            onClose={() => setShowSelectModal(false)}
                            setToken = {setToken}
                        />
                        )}
                <div className="balanceContainer">
                    <span className="balanceAmount">Balance: {props.balance?.toFixed(3)}</span>
                </div>
            </div>
        </div>
    )
}

export default CurrencyField;