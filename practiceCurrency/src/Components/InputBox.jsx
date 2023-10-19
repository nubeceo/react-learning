import React, { useId } from 'react'


function InputBox({
    label,
    selectCurrency="usd",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    currencyDisabled=false,
    amountDisabled=false,
    


}) {

    const amountInputId = useId();

    return (

        <div className='bg-white border w-full flex rounded-lg  p-3'>
            <div className='w-1/2  '>

                <label
                    htmlFor={amountInputId}
                    className='text-black/40 mb-2 inline-block'
                >{label}
                </label>

                <input
                    type="number"
                    className='bg-transparent text-black outline-none py-1.5 w-full'
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisabled}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />

            </div>

            {/* -------------------------- */}

            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='font-mono text-black/50 mb-2 w-full'>Currency Type</p>

                <select
                    className='bg-gray-200 outline-none cursor-pointer px-1 py-1 rounded-lg'
                    value={selectCurrency}
                    disabled={currencyDisabled}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange((e.target.value))}
                >
                    {
                        currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>

    )

}

export default InputBox;