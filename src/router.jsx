import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/movies',
                element: <Movies/>
            },
            {
                path: '/movies/:movieId',
                element: <MovieDetails />,
                children: [
                {
                    path: '/movies/:movieId/cast',
                    element: <Cast/>
                },
                {
                    path: '/movies/:movieId/reviews',
                    element: <Reviews/>
                }
                  
]
            }
        ]
    }
])