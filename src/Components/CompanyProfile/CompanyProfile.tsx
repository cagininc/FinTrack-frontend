import React, { useEffect, useState } from 'react'
import { CompanyBalanceSheet, CompanyKeyMetrics } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getKeyMetrics } from '../../api';
import { config } from 'dotenv';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';

interface Props { }

const tableConfig = [
    {
        label: "Market Cap",
        render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    },
    {
        label: "Current Ratio",
        render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
    },
    {
        label: "Return On Equity",
        render: (company: CompanyKeyMetrics) => company.roeTTM,
    },
    {
        label: "Cash Per Share",
        render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
    },
    {
        label: "Current Ratio",
        render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
    },
    {
        label: "Return On Equity",
        render: (company: CompanyKeyMetrics) => company.roeTTM,
    },
];


const CompanyProfile = (props: Props) => {

    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
    useEffect(() => {
        const getCompanyKeyMetrics = async () => {
            const value = await getKeyMetrics(ticker);
            setCompanyData(value?.data[0])
        }
        getCompanyKeyMetrics()
    }, [])

    return (

        <>

            {companyData ? (
                <>

                    <RatioList data={companyData} config={tableConfig} /> </>
            ) :
                (


                    <Spinner isLoading/>

                )}
        </>
    )
};
export default CompanyProfile