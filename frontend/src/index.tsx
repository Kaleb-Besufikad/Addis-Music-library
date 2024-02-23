import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from "react-redux";

import store from "./store";
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageNotFound from "./components/pageNotFound";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <PageNotFound/>

    },
    {
        path:'/:page',
        element:<App/>
    }
]);


root.render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router}/>

        </React.StrictMode>
    </Provider>
);
