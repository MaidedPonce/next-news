### Explanation
Utilicé SSR (Server-Side Rendering) tanto para la página principal como para las rutas dinámicas, ya que es crucial para un blog tener un buen SEO.

Para la paginación, utilicé TanStack Query (React Query) y configuré el tiempo para refrescar los datos, evitando hacer demasiadas solicitudes a la API.

En este proyecto, no utilizo ninguna librería para la gestión del estado global, ya que el estado no se necesita en múltiples partes de la aplicación. En su lugar, heredo el estado a través de props, manteniendo así la simplicidad y eficiencia del código.

Para integrar Google Analytics 4 (GA4) y Google Tag Manager (GTM) en mi proyecto, utilicé la librería @next/third-parties. Configuré page_location y page_title, y activé la etiqueta de Google con la opción "Initialization - All Pages". Esto asegura que se registren las visitas a todas las páginas y se recopilen datos importantes sobre la ubicación (URL) y el título de cada página.

Añadí como característica un buscador de artículos, permitiendo a los usuarios encontrar contenido específico de manera rápida.

Finalmente, integré Framer Motion para aplicar un efecto parallax tanto en la página principal como en las rutas dinámicas, mejorando la experiencia del usuario con desplazamientos un poco más atractivos.

### Estructura
- app: Este directorio contiene todas las rutas de la aplicación.
- components: Aquí se encuentra los componentes utilizados al rededor de nuestra app.
- config: Aquí se encuentran las URLs de nuestras APIs configuradas con axios.
- helpers: Aquí puedes encontrar y crear funciones que nos ayudarán en varias partes del código.
- services: Aquí se deben añadir todas las solicitudes necesarias.

### Instalación

`git clone https://github.com/MaidedPonce/next-news.git`

`npm i
`

`npm run dev
`
