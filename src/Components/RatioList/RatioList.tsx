import React from 'react'
import { TestDataCompany } from '../Table/TestData'

interface Props  {

     data:any;
     config:any

}



const RatioList = ({config,data}: Props) => {
console.log("Ratio list congig:",config);
console.log("Ratio list data:",data);
console.log("ratio list data type:", typeof data, JSON.stringify(data, null, 2));

    const renderedRows=config.map((row:any ,index:number)=>{
        const renderedValue=row.render(data);
        console.log(`Row ${index} rendered value:`, renderedValue);

        return( 
            <li className="py-6 sm:py-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {row.label}
            </p>
            <p className="text-sm text-gray-500 truncate">
              <a
                href="/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="17727a767e7b57607e7973646372653974787a"
              >
                {row.subTitle && row.subTitle}
              </a>
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900">
            {row.render(data)}
          </div>
        </div>
      </li>
        )



    })
  return (
    <div className='bg-white shadow rounded-lg ml-4 mt-4 mb-4  p-4 sm:p-6 h-full'>
        <ul className='divide-y divided-gray-200'>

            {renderedRows}
        </ul>


    </div>
  )
}

export default RatioList