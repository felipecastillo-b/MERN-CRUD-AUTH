import { createContext, useContext, useState } from "react";
import { registerRequest } from '../api/auth';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

// eslint-disable-next-line
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true);
        } catch (error) {
//            console.log(error.reponse)
            setErrors(error.response.data)
        }
    };

    return (
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

//Children is missing in props validation
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};