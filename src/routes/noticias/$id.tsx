import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/noticias/$id')({
  component: Noticias
});

function Noticias() {
  const { id } = Route.useParams();
  
  return (
    <div>Viendo noticia: {id}</div>
  )
}