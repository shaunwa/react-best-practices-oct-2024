import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    Link,
} from 'react-router-dom';
import Page1 from './Page1';
import './App.css'

function fetchFake(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, 3000);
    });
}

const routeDefinitions = [{
    path: '/',
    ErrorBoundary() {
        return <h1>Something went wrong!</h1>
    },
    element: <>
        <div>
            <Link to="/page-1">Page 1</Link>
            <Link to="/page-2" onMouseEnter={() => import('./Page2')}>Page 2</Link>
            <Link to="/page-3" onMouseEnter={() => import('./Page3')}>Page 3</Link>
        </div> 
        <Outlet />
        <p>Footer goes here...</p>
    </>,
    children: [{
        path: '/page-1',
        async loader() {
            const [page1data, section1data, subsection1data] = await Promise.all([
                fetchFake({ name: 'Shaun' }),
                fetchFake({ hairColor: 'brown' }),
                fetchFake({ age: 123 }),
            ]);
            return [page1data, section1data, subsection1data];
        },
        element: <Page1 />
    }, {
        path: '/page-2',
        async lazy() {
            const page2 = await import('./Page2');
            return { Component: page2.default };
        }
    }, {
        path: '/page-3',
        async lazy() {
            const page3 = await import('./Page3');
            return { Component: page3.default };
        }
    }],
}]




const router = createBrowserRouter(routeDefinitions);

function App3() {
    return (
        <>

        <RouterProvider router={router} />
        </>
    );
}

export default App3
