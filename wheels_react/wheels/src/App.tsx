import { Layout } from "./componentes/layout"
import { LayoutAdmin } from "./componentesAdmin/layoutAdmin"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Velocidad } from "./componentesAdmin/add/velocidad"
import { Goma } from "./componentesAdmin/add/goma"
import { Diametro } from "./componentesAdmin/add/diametro"
import { Size } from "./componentesAdmin/add/size"
import { Diseno } from "./componentesAdmin/add/diseno"
import { Marca } from "./componentesAdmin/add/marca"
import { Categoria } from "./componentesAdmin/add/categoria"
import { Filter } from "./componentes/filter/filter"
import { Slide } from "./componentes/body/slide"
import { Catalogo } from "./componentes/catalogo/catalogo"
import { Find } from "./componentes/filter/find"
import { Productos } from "./componentes/filter/productos"
import { Preview } from "./componentes/preview/preview"



export default function App() {
  const router = createBrowserRouter([
    
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '',
          element: <Slide/>
        },
        {
          path: '/wheels',
          element: <Catalogo/>
        },
        {
          path: '/vehiculo',
          element: <Filter/>
        },
        {
          path: '/filtros',
          element: <Find/>
        },
        {
          path: '/productos',
          element: <Productos />
        },
        {
          path: '/detalles',
          element: <Preview />
        }
      ]
    },
    {
      path: '/admin',
      element: <LayoutAdmin/>,
      children: [
        {
          path: "velocidad",
          element: <Velocidad/>
        },
        {
          path: "diametro",
          element: <Diametro/>
        },
        {
          path: "categoria",
          element: <Categoria/>
        },
        {
          path: "diseno",
          element: <Diseno/>
        },
        {
          path: "size",
          element: <Size/>
        },
        {
          path: "marca",
          element: <Marca/>
        },
        {
          path: "goma",
          element: <Goma/>
        },

        {
          path: "portada",
          element: <Layout/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
   )
}


