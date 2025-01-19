import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Login";
import Register from "../Page/Register";
import App from "../App";
import Profile from "../Page/Profile";
import RequiredRoute from "../Components/RequiredRoute";
import AdminRoute from "../Components/AdminRoute";
import Dashboard from "../Dashboard/Dashbaord";
import UserInformation from "../Dashboard/UserInformation";
import UserFullInformation from "../Dashboard/UserFullInformation";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />
        },
        {
            path: '/profile',
            element: <RequiredRoute><Profile /></RequiredRoute>
        },
        {
            path: '/dashboard',
            element: <AdminRoute><Dashboard /></AdminRoute>,
            children: [
                {
                    path: 'user-information',
                    element: <UserInformation />
                },
                {
                    path: 'user-information/:id',
                    element: <UserFullInformation />
                }
            ]
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }
    ]
);

export default router;
