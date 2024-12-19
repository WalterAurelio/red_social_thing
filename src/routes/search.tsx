import { createFileRoute } from '@tanstack/react-router';
import * as v from 'valibot';
// import SearchBar from '../components/SearchBar';

const Busqueda = v.object({
  query: v.optional(v.string()),
});

type Busqueda = v.InferOutput<typeof Busqueda>;

export const Route = createFileRoute('/search')({
  component: RouteComponent,
  validateSearch: search => v.parse(Busqueda, search),
});

function RouteComponent() {
  const { query } = Route.useSearch();

  return (
    <div>
      <h1>Search</h1>
      {/* <SearchBar /> */}
      <pre>{JSON.stringify({ query })}</pre>
    </div>
  );
}
