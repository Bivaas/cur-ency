const App = () => { 

  return ( 

    <div className="currency-converter">

      <h2 className="converter-title">Currency Converter</h2>

        <form className="converter-form">

          <div className="form-group">

            <label className="form-label">Enter Amount</label>
            <input type="number" className="form-input" required />

          </div>

          <div className="form-group">

            <div className="form-section">

              <label className="form-label">From</label>

              <div className="currency-select">

              <img src="" alt="Flag" />

                <select className="currency-dropdown">

                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>

                </select>

              </div>
            </div>


            <div className="swap-icon">

              <img src="/swap.png"></img>

            </div>


            <div className="form-section">

              <label className="form-label">From</label>

              <div className="currency-select">

              <img src="" alt="Flag" />

                <select className="currency-dropdown">

                  <option value="NPR"></option>
                  <option value="INR"></option>
                  <option value="SGD"></option>

                </select>

              </div>
            </div>


            <button type="submit" className="submit-button">Exchange</button>

            <p className='exchange-rate-result'>1 USD = 150 NPR</p>


          </div>
  
        </form>

    </div>
  )
}



export default App