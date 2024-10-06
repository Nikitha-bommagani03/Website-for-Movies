import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-title">404</h1>
                <h2 className="error-subtitle">Page Not Found</h2>
                <p className="error-description">
                    Oops! It seems the page you are looking for doesn’t exist or has been moved.
                </p>
                <button onClick={()=>navigate("/")} className="home-button">
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
