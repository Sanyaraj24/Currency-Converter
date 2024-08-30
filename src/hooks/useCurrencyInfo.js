import {useEffect,useState} from "react"

//i want the hook when someone loads/when someone uses it,then api should be called,useEffect.
function useCurencyInfo(currency){
  //this hook will return some data
  
  const [data,setData]=useState({})
    //jo currency me pass karengay wahi key value hogi.

    //whenever there is change in currency i want to make changes in api key,so it is one dependency.
    useEffect(()=>{
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )//.then(()=>{})
      .then((res)=>res.json())
      .then((res)=>setData(res[currency]))  //to hold data(coming from api)we have const data..
      console.log(data);

    },[currency])
    //dependency array--is chez me kuch bhi chamge ayega then api will be called again.
    console.log(data);
    return data  
} 
export default useCurencyInfo;
