// Libraries imports
import axios from "axios"

// User defined imports
import { BASE_URL } from "../config"
import { csv2json } from "csvjson-csv2json"

// Function to get stocks from the sensibull api
const getStocks = async ( setStocks, setViewStocks, setLoading ) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/instruments`)
        // console.log(csv2json(data, { parseNumber: true }))
        
        // Updating the states
        setStocks(csv2json(data))
        setViewStocks(csv2json(data))
        setLoading(false)
    } catch(err) {
        console.log('Error occured while getting stock data . . .')
        console.log(err)
    }
}

const reFresh = (quotes) => {
    const tempQuotes = quotes
    tempQuotes.sort((a, b) => {
      return new Date(b.time) - new Date(a.time)
    })

    const d1 = new Date(tempQuotes[tempQuotes.length - 1].time).getTime()
    const d2 = new Date(tempQuotes[tempQuotes.length - 1].valid_till).getTime()
    
    console.log(d2-d1)

    setTimeout(()=> {
      console.log("Fetching again")
      window.location.reload()
    }, 
    d2 - d1)
}

// Function to get quotes for a stock
const getQuotes = async ( symbol, setQuotes, setLoading) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/quotes/${symbol}`)
        console.log(data.payload[symbol])
        // Updating state
        setLoading(false)
        setQuotes(data.payload[symbol])
        reFresh(data.payload[symbol])

    } catch (err) {
        console.log(`Error occured while trying to get quotes for ${symbol}`)
        console.log(err)
    }
}

const setTimer = (dateString1, dateString2, setSeconds) => {
    
    let d1 = new Date(dateString1).getTime()
    let d2 = new Date(dateString2).getTime()
    let time = d2 - d1

    const interval = setInterval(() => {
        time = time - 1000
        const f = Math.floor

        // Setting seconds
        setSeconds(f((time / 1000 )))
    }, 1000)

    setTimeout(()=> {
        clearInterval(interval)
    }, d2 - d1)
}


export { getStocks, getQuotes, setTimer }