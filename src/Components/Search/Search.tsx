import React, { SyntheticEvent } from 'react'



interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }: Props) => {

  // const [search, setSearch] = useState<string>("")

  // const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{ 

  //     setSearch(e.target.value);
  //     console.log(e.target.value);


  // };
  // const onClick=(e:SyntheticEvent )=>{

  // console.log(e);
  // };

  return (
    // <div>
    //   <input value={search} onChange={handleChange} />
    //   <button onClick={(e) => onClick(e)} />
    // </div>


    <>
    <form onSubmit={onSearchSubmit}>
    <input value={search} onChange={handleSearchChange}/> 
      </form>
    </>
  )
}

export default Search