import React from 'react'
import { useState } from 'react'


const Search:React.FC = () => {

const [search, setSearch] = useState<string>("")

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{ 

    setSearch(e.target.value);
    console.log(e.target.value);

    
};

  return (
    <div>
<input value={search} onChange={handleChange} />
</div>
  )
}

export default Search