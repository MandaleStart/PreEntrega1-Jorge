import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
    return (
      <form className="d-flex col-md-4">
        <input disabled id="search-input" className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
        <button disabled id="search-button" className="btn btn-outline-success" type="submit">
        <SearchIcon />
        </button>
      </form>
    );
  };
  
  export default SearchBar;