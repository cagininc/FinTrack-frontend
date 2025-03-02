import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import SideBar from '../../Components/SideBar/SideBar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';

interface Props  {

  
}

const CompanyPage = (props: Props) => {


let {ticker}=useParams();

const [company,setCompany]= useState<CompanyProfile>()

useEffect(() => {
  const getProfileInit =async()=>{

const result=await getCompanyProfile(ticker!);
setCompany(result?.data[0]);

  }
getProfileInit();
  
}, [])


  return (
  <>
  
  {company?(

<div>
<div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

<SideBar/>


<CompanyDashboard ticker={ticker!}>
<Tile title="Company Name" subtitle={company.companyName}/> 
<Tile title="Price" subtitle={company.price.toString()}/> 
<Tile title="Sector" subtitle={company.sector}/> 
<Tile title="Dcf" subtitle={company.dcf.toString()}/> 

<p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4'>

{company.description}

</p>

</CompanyDashboard>
</div>
</div>


 ) : (   

  <Spinner isLoading/>


 )}
  
  </>
  );
};

export default CompanyPage