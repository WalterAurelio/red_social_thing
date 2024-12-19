import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { useAuth } from './hooks/useAuth';

const router = createRouter({ 
  routeTree, 
  context: { authentication: undefined! },
  defaultNotFoundComponent: () => <div>Página no encontrada...</div>
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  const auth = useAuth();

  return (
    <RouterProvider router={router} context={{ authentication: auth }} />
  )
}

export default App;