import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import DisplayResults from './components/DisplayResults'
const API_URL = '/api/lab-results'

const App = () => {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')
  const filteredResults = results.filter(result => {
    if (!query) {
      return true
    }

    return result.patientId.includes(query)

  })
  const handleQueryChange = (event) => setQuery(event.target.value)
  useEffect(() => {
    axios
      .get(API_URL)
      .then(response => {
        setResults(response.data)
      })
  }, [])

  return (
    <>
      <h1>Laboratoriesvar</h1>
      <SearchBar placeholderText='Sök på patient-id' query={query} handleQueryChange={handleQueryChange} />
      <DisplayResults results={filteredResults} />
    </>
  )

}
export default App
