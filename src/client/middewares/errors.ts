import { ErrorHandler, Injectable } from '@angular/core';

/**
 * variable
 */
declare let swal: any;

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    /**
     * Error handler. Send stacktrace only during development
     * @private
     */
    handleError(ex) {
        console.log(ex);
    }

}
