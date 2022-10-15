// Libraries Imports
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

export { getStocks }