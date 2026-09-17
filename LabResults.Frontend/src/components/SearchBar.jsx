const SearchBar = ({ query, handleQueryChange, placeholderText }) => {
  return (
    <input
      placeholder={placeholderText}
      value={query}
      onChange={handleQueryChange}
    />)
}
export default SearchBar;