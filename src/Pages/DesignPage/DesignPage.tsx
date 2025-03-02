import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { CompanyKeyMetrics } from '../../company'
import { testIncomeStatementData } from '../../Components/Table/TestData'
import IncomeStatement from '../../Components/IncomeStatement/IncomeStatement'

interface Props  {
}

const tableConfig = [
    {
      label: "Market Cap",
      render: (company: any) => company.marketCapTTM,
      subtitle:"Total value of all a company'shares stock"
    },
]

const DesignPage = (props: Props) => {
  return (
<>     
    
    <h1>FinTrack design page </h1>


<RatioList data={testIncomeStatementData} config={tableConfig}/>
<Table data={testIncomeStatementData} config={ tableConfig}/>
 </>
  )
}

export default DesignPage