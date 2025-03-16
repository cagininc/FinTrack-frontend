import React, { useEffect, useState } from 'react'
import { CompanyBalanceSheet, CompanyKeyMetrics } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getKeyMetrics } from '../../api';
import { config } from 'dotenv';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';
import { formatLargeMonetaryNumber, formatRatio } from '../../Helpers/NumberFormatting';
import StockComment from '../StockComment/StockComment';

interface Props { }


const tableConfig = [
    {
      label: <div className="font-bold">Market Cap</div>,
      render: (company: CompanyKeyMetrics) =>
        formatLargeMonetaryNumber(company.marketCapTTM),
    },
    {
      label: "Current Ratio",
      render: (company: CompanyKeyMetrics) =>
        formatRatio(company.currentRatioTTM),
    },
    {
      label: "Return On Equity",
      render: (company: CompanyKeyMetrics) =>
        formatRatio(company.roeTTM),
    },
    {
      label: "Cash Per Share",
      render: (company: CompanyKeyMetrics) =>
        formatLargeMonetaryNumber(company.cashPerShareTTM),
    },
    {
      label: "PE Ratio",
      render: (company: CompanyKeyMetrics) =>
        formatRatio(company.peRatioTTM),
    },
    {
      label: "Price to Sales Ratio",
      render: (company: CompanyKeyMetrics) =>
        formatRatio(company.priceToSalesRatioTTM),
    },
    {
      label: "Price to Book Ratio",
      render: (company: CompanyKeyMetrics) =>
        formatRatio(company.ptbRatioTTM),
    },
    {
      label: "Enterprise Value",
      render: (company: CompanyKeyMetrics) =>
        formatLargeMonetaryNumber(company.enterpriseValueTTM),
    },
  ];
const CompanyProfile = (props: Props) => {

    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
    useEffect(() => {
        const getCompanyKeyMetrics = async () => {
            const value = await getKeyMetrics(ticker);
            console.log("getKeyMetrics value:",value)
            setCompanyData(value?.data[0])
        }
        getCompanyKeyMetrics()
    }, [])

    return (

        <>

            {companyData ? (
                <>

                    <RatioList data={companyData} config={tableConfig} />
                    
                    <StockComment stockSymbol={ticker}/>
                     </>


            ) :
                (


                    <Spinner isLoading/>

                )}
        </>
    )
};
export default CompanyProfile