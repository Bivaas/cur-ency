import React from 'react'

const ConverterForm = () => { 

    const [amount, setAmount] = useState(100);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // swap values with swap btn
    const handleSwapCurrencies = () => {

        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);

    }

    // fetch exchange rate with API and update 
    const getExchangeRate = () => {

        const API_KEY
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

        setIsLoading(true);

        try { 

            const response = await fetch(API_URL);
            if (!response.ok) throw Error("Hmm...something isn't right !");

            const data = await response.json();
            const rate = (data.conversion_rate * amount).toFixed(3);
            setResult('${amount} ${fromCurrency} = ${rate} ${toCurrency}');

        } catch (error) {

            console.log(error);
        } finally { 

            setIsLoading(false);
        }
    }

    // submit values (form submission eventhandler)
    const handleFormSubmit = (e) => {

        e.preventDefault();
        getExchangeRate();

    }

    useEffect(() => getExchangeRate, []);


    return ( 

        <form className="converter-form" onSubmit={handleFormSubmit} >

          <div className="form-group">

            <label className="form-label">Enter Amount</label>
            <input type="number" className="form-input" value={amount} onChange={e=> setAmount(e.target.value)} required />

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


            <div className="swap-icon" onClick={handleSwapCurrencies}>

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


            <button type="submit" className={`${isLoading ? "Loading" : ""} submit-button`}>Exchange</button>


            {/* / final output (conversion result) and load */}
            <p className='exchange-rate-result'>
                {isLoading ? "Getting you result.." : result}
            </p>

  
        </form>

    )
}

export default ConverterForm