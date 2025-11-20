// Production-safe logging utility
class Logger {
  static log(message, ...args) {
    if (import.meta.env.DEV) {
      console.log(message, ...args);
    }
  }

  static warn(message, ...args) {
    if (import.meta.env.DEV) {
      console.warn(message, ...args);
    }
    // In production, you might want to send warnings to an analytics service
  }

  static error(message, ...args) {
    // Always log errors, even in production
    console.error(message, ...args);
    
    // In production, send to error tracking service
    if (import.meta.env.PROD) {
      // Example: Send to Sentry, LogRocket, etc.
      // errorReportingService.captureException(new Error(message));
    }
  }

  static info(message, ...args) {
    if (import.meta.env.DEV) {
      console.info(message, ...args);
    }
  }
}

export default Logger;