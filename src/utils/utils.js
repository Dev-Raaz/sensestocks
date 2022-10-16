// Libraries imports
import axios from "axios"

// User defined imports
import { BASE_URL } from "../config"
import { csv2json } from "csvjson-csv2json"

// Function to get stocks from the sensibull api
const getStocks = async ( setStocks, setLoading ) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/instruments`)
        // console.log(csv2json(data, { parseNumber: true }))
        
        // Updating the states
        setStocks(csv2json(data))
        setLoading(false)
    } catch(err) {
        console.log('Error occured while getting stock data . . .')
        console.log(err)
    }
}


// Function to get quotes for a stock
const getQuotes = async ( symbol, setQuotes, setLoading ) => {
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

export { getStocks, getQuotes }