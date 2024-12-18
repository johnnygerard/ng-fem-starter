import { ErrorHandler } from "@angular/core";

/**
 * Handle uncaught client-side errors.
 */
export class GlobalErrorHandler implements ErrorHandler {
  handleError(e: unknown): void {
    console.error(e);
    alert("An unknown error has occurred. Please try again later.");
  }
}
