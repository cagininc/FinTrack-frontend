

import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./company";


interface SearchResponse {
    data: CompanySearch[];

}
export const searchCompanies = async (query: string) => {


    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${import.meta.env.VITE_API_KEY}`
        )
        return data;

    }




    catch (error) {
        if (axios.isAxiosError(error)) {

            console.log("error message:", error.message);
            return error.message;
        }
        else {
            console.log("unexpected error:", error);

            return "An unexpected error has occurred";
        }
    }

}

export const getCompanyProfile = async(query:string)=>{

    try {

        const data= axios.get<CompanyProfile[]>(

`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${import.meta.env.VITE_API_KEY}`

)
return data
        }

        
    catch (error:any) {
        console.log("error message from API:",error.message);
        
    }


}

export const getKeyMetrics = async(query:string)=>{

    try {

        const data= axios.get<CompanyKeyMetrics[]>(

`https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${import.meta.env.VITE_API_KEY}`

)
return data
        }

        
    catch (error:any) {
        console.log("error message from API:",error.message);
        
    }


}

//Income Statement
export const getIncomeStatement = async(query:string)=>{

    try {

        const data= axios.get<CompanyIncomeStatement[]>(

`https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${import.meta.env.VITE_API_KEY}`

)
return data
        }

        
    catch (error:any) {
        console.log("error message from API:",error.message);
        
    }


}

// Balance Sheet
export const getBalanceSheet = async(query:string)=>{

    try {

        const data= axios.get<CompanyBalanceSheet[]>(

`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${import.meta.env.VITE_API_KEY}`

)
return data
        }

        
    catch (error:any) {
        console.log("error message from API:",error.message);
        
    }


}

//Cash Flow

export const getCashFlowStatement = async(query:string)=>{

    try {

        const data= axios.get<CompanyCashFlow[]>(

`https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=40&apikey=${import.meta.env.VITE_API_KEY}`

)
return data
        }

        
    catch (error:any) {
        console.log("error message from API:",error.message);
        
    }


}

//10K finder  
export const getTenK = async(query:string)=>{

    try {

        const data= axios.get<CompanyTenK[]>(

`https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-k&page=0&apikey=${import.meta.env.VITE_API_KEY}`

)
return data
        }

        
    catch (error:any) {
        console.log("error message from API:",error.message);
        
    }


}