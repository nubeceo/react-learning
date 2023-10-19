import { useState } from 'react'
import { InputBox } from './Components'
import CurrencyInfo from './Hooks/CurrencyInfo'
function App() {


  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")
  const [convertAmount, setConvertedAmount] = useState(0)

  // own hook

  const currencyinformation = CurrencyInfo(fromCurrency);

  const options = Object.keys(currencyinformation);

  

  // swaping function

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(convertAmount)
    setConvertedAmount(amount)
  }

  // calculation

  const convert =()=>{
    setConvertedAmount(amount * currencyinformation[toCurrency] )
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center 
    items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >

      <div className='w-full flex justify-center'>
        <div className='w-full max-w-md border mx-auto rounded-lg p-5 backdrop-blur-sm bg-white/30 '>

          <form onClick={(e) => {
            e.preventDefault()
          }}>

            {/* first input box code */}
            <div className="  w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                selectCurrency={fromCurrency}
                onAmountChange={(amount) => setAmount(amount)}
              />

            </div>

            {/* button code */}

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* second input box code */}

            <div className="w-full mb-1">
              <InputBox
                label="TO"
                amount={convertAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                selectCurrency={toCurrency}
                amountDisabled
              />
            </div>


          </form>

          <button
            className=' w-full rounded-lg p-2 mt-3 bg-blue-700 text-white font-mono text-lg '

            onClick={convert}
          >
            Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
          </button>

        </div>
      </div>

    </div>
  )
}

export default App
