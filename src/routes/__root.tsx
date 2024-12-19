import * as React from 'react'
import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { AuthContext } from '../hooks/useAuth';
import SearchBar from '../components/SearchBar';

type RouterContext = {
  authentication: AuthContext
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

const activeProps = {
  style: {
    fontWeight: 'bold'
  }
};

function RootComponent() {
  return (
    <React.Fragment>
      <h1>Red Social Thing</h1>
      <SearchBar />
      <nav>
        <ul>
          <li>
            <Link to='/' activeProps={activeProps}>Inicio</Link>
          </li>
          <li>
            <Link to='/profile' activeProps={activeProps}>
              {({ isActive }) => <>Perfil {isActive && 'Activo'}</>}
            </Link>
          </li>
          <li>
            <Link to='/noticias' activeProps={activeProps}>
              Noticias
            </Link>
          </li>
          <li>
            <Link to='/login' activeProps={activeProps}>
              Login
            </Link>
          </li>
          <li>
            <Link to='/dashboard' activeProps={activeProps}>
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </React.Fragment>
  )
}
