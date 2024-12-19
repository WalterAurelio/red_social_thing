import { createFileRoute } from '@tanstack/react-router'
import { getNoticiaById } from '../../api/noticias'

export const Route = createFileRoute('/noticias/$id')({
  component: Noticia,
  loader: async ({ params }) => await getNoticiaById(params.id)
});

function Noticia() {
  const noticia = Route.useLoaderData();
  
  return (
    <div>
      <h3>{noticia.titulo}</h3>
      <p>{noticia.descripcion}</p>
    </div>
  )
}