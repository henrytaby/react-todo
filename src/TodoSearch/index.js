
import './TodoSearch.css';


function TodoSearch({ searchvalue, setSearchValue }) {
  
  //console.log('Los usuario buscan todo de '+ searchvalue)
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchvalue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        //console.log(event.target.value);
        }
      }
    />
  );
}

export { TodoSearch };