import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './private.router';
import Login from '../pages/login.page';
import Users from '../pages/users.page';
import UserDetail from '../pages/user-detail.page';
import NotFound from '../pages/not-found.page';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoute><Users /></PrivateRoute>} />
                <Route path="/user/:id" element={<PrivateRoute><UserDetail /></PrivateRoute>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
