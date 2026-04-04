import { Component, ReactNode } from "react";
import "./error-boundary.scss";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <i className="fas fa-exclamation-triangle error-icon" />
            <h1>Something went wrong</h1>
            <p className="error-message">
              An unexpected error occurred. Please try again.
            </p>
            <button onClick={this.handleRetry} className="retry-button">
              <i className="fas fa-redo" /> Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}