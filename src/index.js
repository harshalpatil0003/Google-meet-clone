
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/view/App';
import{
    RouterProvider,
    createBrowserRouter
}
from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>

    },
    
    {
        path:"*",
        element:<h1>404 Not Found</h1>
    }
])
root.render(
    <>
    <RouterProvider router={router} />
      
     

    </>
);
