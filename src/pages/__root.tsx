import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: RootComponent,
    head: () => ({
    title: "Início - SyntaxWear",
    meta: [{ property: "og:title", content: "Início - SyntaxWear" }],
  }),
})

function RootComponent() {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )    
}
