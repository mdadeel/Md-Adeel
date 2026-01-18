import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Critical System Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background dark:bg-dark-background flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 mb-4">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="w-8 h-8 text-red-500"
              >
                <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-display-lg text-primary tracking-tight">System Exception</h1>
            <p className="text-body-md text-secondary leading-relaxed">
              A critical error occurred while rendering the interface. The system has been halted to prevent further instability.
            </p>
            <div className="pt-4 space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full px-6 py-3 bg-primary text-background font-mono text-xs uppercase tracking-widest font-bold hover:opacity-80 transition-opacity"
              >
                Attempt Reboot (Reload)
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="w-full px-6 py-3 border border-border text-primary font-mono text-xs uppercase tracking-widest font-bold hover:text-secondary transition-colors"
              >
                Try Recovery
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function SectionErrorBoundary({ children }) {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
}

export default ErrorBoundary;
