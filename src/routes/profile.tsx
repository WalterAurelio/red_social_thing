import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: () => <div>Perfil '/profile'</div>
})