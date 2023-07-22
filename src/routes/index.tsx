import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./data.routes"

const PathRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element: Element }) => (
          <Route path={path} element={Element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default PathRoutes
