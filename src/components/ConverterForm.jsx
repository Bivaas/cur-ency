import React, { useState, useEffect } from 'react'
import CurrencySelect from './CurrencySelect'

const ConverterForm = () => { 

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("NPR");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // for insight / AI summary 
    const [insight, setInsight] = useState("");
    const [insightLoading, setInsightLoading] = useState(false);

    // swap values with swap btn
    const handleSwapCurrencies = () => {

        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);

    }

    // fetch exchange rate with API and update 
    const getExchangeRate = async () => {

        const API_URL = `/api/rate?from=${fromCurrency}&to=${toCurrency}`;

        setIsLoading(true);

        try { 

            const response = await fetch(API_URL);
            if (!response.ok) throw Error("Hmm...something isn't right !");

            const data = await response.json();
            const rate = (data.conversion_rate * amount).toFixed(3);
            setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);

        } catch (error) {

            console.log(error);
        } finally { 

            setIsLoading(false);
        }
    }

    // handler for getting AI summary of economic bg
    const getInsight = async () => { 

        setInsightLoading(true);

        try { 

            const response = await fetch (`/api/insight?currency=${toCurrency}`);
            if (!response.ok) throw Error ("Hmm..background could not be loaded !")

            const data = await response.json();
            setInsight(data.insight);

        } catch (error) { 

            console.log(error);

        } finally { 

            setInsightLoading(false);
            
        }
    
    }

    // submit values (form submission eventhandler)
    const handleFormSubmit = (e) => {

        e.preventDefault();
        getExchangeRate();

    }

    useEffect(() => { getExchangeRate() }, []);


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

              
            </div>


            <div className="swap-icon" onClick={handleSwapCurrencies}>

              <img src="/swap.png"></img>

            </div>


            <div className="form-section">

              <label className="form-label">To</label>


                <CurrencySelect 
              
                    selectedCurrency={toCurrency}
                    handleCurrency={ e => setToCurrency(e.target.value)}
                />

              
            </div>

          </div>


            <button type="submit" className={`${isLoading ? "Loading" : ""} submit-button`}>Exchange</button>


            {/* / final output (conversion result) and load */}
            <p className='exchange-rate-result'>
                {isLoading ? "Getting you result.." : result}
            </p>

            <button type="button" className="insight-button" onClick={getInsight}>

                {insightLoading ? "Loading background..." : "Historical Background"}
            </button>

            {insight && <p className="insight-result"> {insight} </p>}

  
        </form>

    )
}

export default ConverterForm