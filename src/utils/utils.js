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


// Function to get quotes for a stock
const getQuotes = async ( symbol, setQuotes, setLoading) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/quotes/${symbol}`)
        console.log(data.payload[symbol])
        // Updating state
        setLoading(false)
        setQuotes(data.payload[symbol])

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