import React from 'react';

import {
    ErrorImageContainer,
    ErrorImageOverlay,
    ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrors: false,
        };
    }
    static getDerivedStateFromError(error) {
        return { hasErrors: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrors) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/FOeYt4E.png" />
                    <ErrorImageText>Sorry, this page not found!</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
