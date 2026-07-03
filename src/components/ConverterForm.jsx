import React from 'react'

const ConverterForm = () => { 

    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");

    return ( 

        <form className="converter-form">

          <div className="form-group">

            <label className="form-label">Enter Amount</label>
            <input type="number" className="form-input" required />

          </div>

          <div className="form-group form-currency-group">

            <div className="form-section">

              <label className="form-label">From</label>


                <CurrencySelect 

                    selectedCurrency={fromCurrency}
                    handleCurrency={e => setFromCurrency(e.target.value)}
              
                />

              <img src="" alt="Flag" />

                <select className="currency-dropdown">

                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>

                </select>

              
            </div>


            <div className="swap-icon">

              <img src="/swap.png"></img>

            </div>


            <div className="form-section">

              <label className="form-label">To</label>


                <CurrencySelect 
              
                    selectedCurrency={toCurrency}
                    handleCurrency={ e => set}
                />

              <img src="https://flagsapi.com/US/flat/64.png" alt="Flag" />
              

                <select className="currency-dropdown">

                  <option value="USD" selected>USD</option>
                  <option value="INR">INR</option>
                  <option value="NPR">NPR</option>

                </select>

              
            </div>

          </div>


            <button type="submit" className="submit-button">Exchange</button>

            <p className='exchange-rate-result'>1 USD = 150 NPR</p>

  
        </form>

    )
}

export default ConverterForm