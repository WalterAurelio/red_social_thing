import { createFileRoute } from '@tanstack/react-router';
import { getNoticias } from '../api/noticias';
import { noticia } from '../api/noticias'

export const Route = createFileRoute('/noticias')({
  component: Noticias,
  loader: async () => await getNoticias()
});

function Noticias() {
  const noticias: [noticia] = Route.useLoaderData();

  return (
    <div>
      {
        noticias.map(noticia => 
          <div key={noticia._id}>
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descripcion}</p>
          </div>
        )
      }
    </div>
  )
}