import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useLocation } from '@tanstack/react-router';

function SearchBar() {
  const [localQuery, setLocalQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.search.query) setLocalQuery(location.search.query);

    return () => {
      setLocalQuery('');
    }
  }, [location.search.query, setLocalQuery]);

  return (
    <div>
      <input 
        type="text"
        placeholder="Buscar"
        value={ localQuery || '' }
        onChange={(e) => setLocalQuery(e.target.value)}
      />
      <Link
        to='/search'
        search={{
          query: localQuery
        }}
      >
        Confirmar
      </Link>
    </div>
  )
}
export default SearchBar