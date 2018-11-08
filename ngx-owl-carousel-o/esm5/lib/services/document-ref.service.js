/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { InjectionToken, PLATFORM_ID, } from '@angular/core';
/**
 * Create a new injection token for injecting the Document into a component.
 * @type {?}
 */
export var DOCUMENT = new InjectionToken('DocumentToken');
/**
 * Define abstract class for obtaining reference to the global Document object.
 * @abstract
 */
var /**
 * Define abstract class for obtaining reference to the global Document object.
 * @abstract
 */
DocumentRef = /** @class */ (function () {
    function DocumentRef() {
    }
    Object.defineProperty(DocumentRef.prototype, "nativeDocument", {
        get: /**
         * @return {?}
         */
        function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return DocumentRef;
}());
/**
 * Define abstract class for obtaining reference to the global Document object.
 * @abstract
 */
export { DocumentRef };
/**
 * Define class that implements the abstract class and returns the native Document object.
 */
var /**
 * Define class that implements the abstract class and returns the native Document object.
 */
BrowserDocumentRef = /** @class */ (function (_super) {
    tslib_1.__extends(BrowserDocumentRef, _super);
    function BrowserDocumentRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserDocumentRef.prototype, "nativeDocument", {
        /**
         * @returns Document object
         */
        get: /**
         * @return {?} Document object
         */
        function () {
            return document;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserDocumentRef;
}(DocumentRef));
/**
 * Define class that implements the abstract class and returns the native Document object.
 */
export { BrowserDocumentRef };
/**
 * Create an factory function that returns the native Document object.
 * @param {?} browserDocumentRef Native Document object
 * @param {?} platformId id of platform
 * @return {?} type of platform of empty object
 */
export function documentFactory(browserDocumentRef, platformId) {
    if (isPlatformBrowser(platformId)) {
        return browserDocumentRef.nativeDocument;
    }
    return new Object();
}
/**
 * Create a injectable provider for the DocumentRef token that uses the BrowserDocumentRef class.
 * @type {?}
 */
export var browserDocumentProvider = {
    provide: DocumentRef,
    useClass: BrowserDocumentRef
};
/**
 * Create an injectable provider that uses the DocumentFactory function for returning the native Document object.
 * @type {?}
 */
export var documentProvider = {
    provide: DOCUMENT,
    useFactory: documentFactory,
    deps: [DocumentRef, PLATFORM_ID]
};
/**
 * Create an array of providers.
 * @type {?}
 */
export var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtcmVmLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3dsLWNhcm91c2VsLW8vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZG9jdW1lbnQtcmVmLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBR0wsY0FBYyxFQUNkLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFLdkIsTUFBTSxLQUFPLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBVyxlQUFlLENBQUM7Ozs7O0FBSXJFOzs7OztJQUFBO0lBSUEsQ0FBQztJQUhDLHNCQUFJLHVDQUFjOzs7O1FBQWxCO1lBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7O0FBS0Q7Ozs7SUFBd0MsOENBQVc7SUFDakQ7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFLRCxzQkFBSSw4Q0FBYztRQUhsQjs7V0FFRzs7OztRQUNIO1lBQ0UsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFDSCx5QkFBQztBQUFELENBQUMsQUFYRCxDQUF3QyxXQUFXLEdBV2xEOzs7Ozs7Ozs7OztBQVFELE1BQU0sVUFBVSxlQUFlLENBQzdCLGtCQUFzQyxFQUN0QyxVQUFrQjtJQUVsQixJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2pDLE9BQU8sa0JBQWtCLENBQUMsY0FBYyxDQUFDO0tBQzFDO0lBQ0QsT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLENBQUM7Ozs7O0FBS0QsTUFBTSxLQUFPLHVCQUF1QixHQUFrQjtJQUNwRCxPQUFPLEVBQUUsV0FBVztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0NBQzdCOzs7OztBQUtELE1BQU0sS0FBTyxnQkFBZ0IsR0FBb0I7SUFDL0MsT0FBTyxFQUFFLFFBQVE7SUFDakIsVUFBVSxFQUFFLGVBQWU7SUFDM0IsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQztDQUNqQzs7Ozs7QUFLRCxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDbGFzc1Byb3ZpZGVyLFxyXG4gIEZhY3RvcnlQcm92aWRlcixcclxuICBJbmplY3Rpb25Ub2tlbixcclxuICBQTEFURk9STV9JRCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgaW5qZWN0aW9uIHRva2VuIGZvciBpbmplY3RpbmcgdGhlIERvY3VtZW50IGludG8gYSBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRE9DVU1FTlQgPSBuZXcgSW5qZWN0aW9uVG9rZW48RG9jdW1lbnQ+KCdEb2N1bWVudFRva2VuJyk7XHJcbi8qKlxyXG4gKiBEZWZpbmUgYWJzdHJhY3QgY2xhc3MgZm9yIG9idGFpbmluZyByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBEb2N1bWVudCBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9jdW1lbnRSZWYge1xyXG4gIGdldCBuYXRpdmVEb2N1bWVudCgpOiBEb2N1bWVudCB8IE9iamVjdCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmUgY2xhc3MgdGhhdCBpbXBsZW1lbnRzIHRoZSBhYnN0cmFjdCBjbGFzcyBhbmQgcmV0dXJucyB0aGUgbmF0aXZlIERvY3VtZW50IG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VyRG9jdW1lbnRSZWYgZXh0ZW5kcyBEb2N1bWVudFJlZiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMgRG9jdW1lbnQgb2JqZWN0XHJcbiAgICovXHJcbiAgZ2V0IG5hdGl2ZURvY3VtZW50KCk6IERvY3VtZW50IHwgT2JqZWN0IHtcclxuICAgIHJldHVybiBkb2N1bWVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5hdGl2ZSBEb2N1bWVudCBvYmplY3QuXHJcbiAqIEBwYXJhbSBicm93c2VyRG9jdW1lbnRSZWYgTmF0aXZlIERvY3VtZW50IG9iamVjdFxyXG4gKiBAcGFyYW0gcGxhdGZvcm1JZCBpZCBvZiBwbGF0Zm9ybVxyXG4gKiBAcmV0dXJucyB0eXBlIG9mIHBsYXRmb3JtIG9mIGVtcHR5IG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRvY3VtZW50RmFjdG9yeShcclxuICBicm93c2VyRG9jdW1lbnRSZWY6IEJyb3dzZXJEb2N1bWVudFJlZixcclxuICBwbGF0Zm9ybUlkOiBPYmplY3RcclxuKTogRG9jdW1lbnQgfCBPYmplY3Qge1xyXG4gIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXJEb2N1bWVudFJlZi5uYXRpdmVEb2N1bWVudDtcclxuICB9XHJcbiAgcmV0dXJuIG5ldyBPYmplY3QoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIGluamVjdGFibGUgcHJvdmlkZXIgZm9yIHRoZSBEb2N1bWVudFJlZiB0b2tlbiB0aGF0IHVzZXMgdGhlIEJyb3dzZXJEb2N1bWVudFJlZiBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBicm93c2VyRG9jdW1lbnRQcm92aWRlcjogQ2xhc3NQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBEb2N1bWVudFJlZixcclxuICB1c2VDbGFzczogQnJvd3NlckRvY3VtZW50UmVmXHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGFuIGluamVjdGFibGUgcHJvdmlkZXIgdGhhdCB1c2VzIHRoZSBEb2N1bWVudEZhY3RvcnkgZnVuY3Rpb24gZm9yIHJldHVybmluZyB0aGUgbmF0aXZlIERvY3VtZW50IG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudFByb3ZpZGVyOiBGYWN0b3J5UHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogRE9DVU1FTlQsXHJcbiAgdXNlRmFjdG9yeTogZG9jdW1lbnRGYWN0b3J5LFxyXG4gIGRlcHM6IFtEb2N1bWVudFJlZiwgUExBVEZPUk1fSURdXHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGFuIGFycmF5IG9mIHByb3ZpZGVycy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBET0NVTUVOVF9QUk9WSURFUlMgPSBbYnJvd3NlckRvY3VtZW50UHJvdmlkZXIsIGRvY3VtZW50UHJvdmlkZXJdO1xyXG4iXX0=