import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Critical System Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0f0c] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 mb-4">
              <span className="material-symbols-outlined text-4xl text-red-500">error</span>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">System Exception</h1>
            <p className="text-[#9eb7a8] font-mono text-sm leading-relaxed">
              A critical error occurred while rendering the interface. The system has been halted to prevent further instability.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Attempt Reboot (Reload)
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
