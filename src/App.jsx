const App = () => { 

  return ( 

    <div className="currency-converter">

      <h2 clasName="converter-title">Currency Converter</h2>

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
          </div>
  
        </form>

    </div>
  )
}