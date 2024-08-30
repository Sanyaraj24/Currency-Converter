import React,{useId} from 'react'

//useID====for generating unique IDs that can be passed to accessibility attributes
//const id=useId()
function InputBox({
    //label---from/to is passed
    label,
    amount,
    onAmountChange,  //amount change ho rha toh state bhi change krni padegi
    onCurrencyChange,
    currencyOptions=[],  //empty array
    selectCurrency="usd",   //by default usd is selected
    amountDisable=false,   //user amount dena chahte h ya nahi
    currencyDisable=false,
    
    className = "",
}) {
    const amountInputId=useId()
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                   {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}  //input field me value to hogi hi
                    //when amount changes
                    //event se call onAmountChange
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    //this can crash when nothing is passed..so use &&(agar ye available h tohhhhh...we will use onAmountChange)

                    /*JS usually takes event in string format so wrap the event call in number..*/


                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

               {/****slection field***/}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    //to ask ye field enable hai ya disabledd
                
                >
                {/*map()-----map() method of array instances creates a new array with results of calling a provided function on every element in calling array */} 

               {currencyOptions.map((currency)=>(
                   <option key={currency} value={currency}>
                    {/*on applying loop in jsx,remember to PASS A KEY */}
                    {currency}
                   </option>
     
               ))}

                       
                </select>
            </div>
        </div>
    );
}

export default InputBox;
