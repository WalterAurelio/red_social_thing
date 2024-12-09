import { createFileRoute } from '@tanstack/react-router'
import { getNoticiaById } from '../../api/noticias'

export const Route = createFileRoute('/noticias/$id')({
  component: Noticias,
  loader: async ({ params }) => await getNoticiaById(params.id)
});

function Noticias() {
  const { id } = Route.useParams();
  const noticia = Route.useLoaderData();
  
  return (
    <div>
      <div>Viendo noticia: {id}</div>
      <h3>{noticia.titulo}</h3>
      <p>{noticia.descripcion}</p>
    </div>
  )
}