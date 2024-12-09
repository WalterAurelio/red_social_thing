import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
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
          {/* <li>
            <Link to='/noticias/$id' activeProps={activeProps}>
              {({ isActive }) => <>{ isActive ? 'Noticias Activo' : 'Noticias' }</>}
            </Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </React.Fragment>
  )
}
