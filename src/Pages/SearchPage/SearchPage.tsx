import React, { SyntheticEvent, useState } from 'react'
import Navbar from '../../Components/NavBar/NavBar'
import Hero from '../../Components/Hero/Hero'
import Search from '../../Components/Search/Search'
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio'
import CardList from '../../Components/CardList/CardList'
import { searchCompanies } from '../../api'
import { CompanySearch } from '../../company'

interface Props  {}






const SearchPage = (props: Props) => {

    const [search, setSearch] = useState<string>("");

    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
      setSearch(e.target.value);
      console.log(e.target.value);
  
  
    };
    const onPortfolioCreate = (e: any) => {
      e.preventDefault();
      const exists = portfolioValues.find((value) => value === e.target[0].value)
      if (exists) return;
      const updatedPortfolio = [...portfolioValues, e.target[0].value];
  
      setPortfolioValues(updatedPortfolio);
  
  
  
    };
    //DELETE
    const onPortfolioDelete = (e: any) => {
  
  
      e.preventDefault();
      const removed = portfolioValues.filter((value) => {
  
        return value !== e.target[0].value;
  
  
  
      })
      setPortfolioValues(removed);
  
  
  
    }
  
  
  
    const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      const result = await searchCompanies(search);
  
      if (typeof result === "string") {
  
        setServerError(result);
      } else if (Array.isArray(result.data)) {
  
        setSearchResult(result.data);
      }
      console.log(searchResult);
    };
  

  return (
    <div >
  
    <Hero/>
    <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />

    {serverError && <h1>{serverError}</h1>}

    <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
    <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
  </div>

  )
}

export default SearchPage