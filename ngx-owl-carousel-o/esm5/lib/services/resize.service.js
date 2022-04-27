import * as tslib_1 from "tslib";
import { EventManager } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
var ResizeService = /** @class */ (function () {
    function ResizeService(eventManager) {
        this.eventManager = eventManager;
        this.resizeSubject = new Subject();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
        this.eventManager.addGlobalEventListener('window', 'onload', this.onLoaded.bind(this));
    }
    Object.defineProperty(ResizeService.prototype, "onResize$", {
        /**
         * Makes resizeSubject become Observable
         * @returns Observable of resizeSubject
         */
        get: function () {
            return this.resizeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handler of 'resize' event. Passes data throw resizeSubject
     * @param event Event Object of 'resize' event
     */
    ResizeService.prototype.onResize = function (event) {
        this.resizeSubject.next(event.target);
    };
    /**
     * Handler of 'onload' event. Defines the width of window
     * @param event Event Object of 'onload' event
     */
    ResizeService.prototype.onLoaded = function (event) {
        this.windowWidth = event.target;
    };
    ResizeService.ctorParameters = function () { return [
        { type: EventManager }
    ]; };
    ResizeService = tslib_1.__decorate([
        Injectable()
    ], ResizeService);
    return ResizeService;
}());
export { ResizeService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3dsLWNhcm91c2VsLW8vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcmVzaXplLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFtQkUsdUJBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUN0QyxRQUFRLEVBQ1IsUUFBUSxFQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUN6QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FDdEMsUUFBUSxFQUNSLFFBQVEsRUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDekIsQ0FBQztJQUNKLENBQUM7SUFyQkQsc0JBQUksb0NBQVM7UUFKYjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQXFCRDs7O09BR0c7SUFDSyxnQ0FBUSxHQUFoQixVQUFpQixLQUFjO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFTLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssZ0NBQVEsR0FBaEIsVUFBaUIsS0FBYztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQzs7Z0JBNUJpQyxZQUFZOztJQW5CbkMsYUFBYTtRQUR6QixVQUFVLEVBQUU7T0FDQSxhQUFhLENBZ0R6QjtJQUFELG9CQUFDO0NBQUEsQUFoREQsSUFnREM7U0FoRFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzaXplU2VydmljZSB7XG4gIC8qKlxuICAgKiBXaWR0aCBvZiB3aW5kb3dcbiAgICovXG4gIHB1YmxpYyB3aW5kb3dXaWR0aDogYW55O1xuXG4gIC8qKlxuICAgKiBNYWtlcyByZXNpemVTdWJqZWN0IGJlY29tZSBPYnNlcnZhYmxlXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGUgb2YgcmVzaXplU3ViamVjdFxuICAgKi9cbiAgZ2V0IG9uUmVzaXplJCgpOiBPYnNlcnZhYmxlPFdpbmRvdz4ge1xuICAgIHJldHVybiB0aGlzLnJlc2l6ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3ViamVjdCBvZiAncmVzaXplJyBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSByZXNpemVTdWJqZWN0OiBTdWJqZWN0PFdpbmRvdz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlcikge1xuICAgIHRoaXMucmVzaXplU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgdGhpcy5ldmVudE1hbmFnZXIuYWRkR2xvYmFsRXZlbnRMaXN0ZW5lcihcbiAgICAgICd3aW5kb3cnLFxuICAgICAgJ3Jlc2l6ZScsXG4gICAgICB0aGlzLm9uUmVzaXplLmJpbmQodGhpcylcbiAgICApO1xuICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmFkZEdsb2JhbEV2ZW50TGlzdGVuZXIoXG4gICAgICAnd2luZG93JyxcbiAgICAgICdvbmxvYWQnLFxuICAgICAgdGhpcy5vbkxvYWRlZC5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIG9mICdyZXNpemUnIGV2ZW50LiBQYXNzZXMgZGF0YSB0aHJvdyByZXNpemVTdWJqZWN0XG4gICAqIEBwYXJhbSBldmVudCBFdmVudCBPYmplY3Qgb2YgJ3Jlc2l6ZScgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25SZXNpemUoZXZlbnQ6IFVJRXZlbnQpIHtcbiAgICB0aGlzLnJlc2l6ZVN1YmplY3QubmV4dCg8V2luZG93PmV2ZW50LnRhcmdldCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlciBvZiAnb25sb2FkJyBldmVudC4gRGVmaW5lcyB0aGUgd2lkdGggb2Ygd2luZG93XG4gICAqIEBwYXJhbSBldmVudCBFdmVudCBPYmplY3Qgb2YgJ29ubG9hZCcgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25Mb2FkZWQoZXZlbnQ6IFVJRXZlbnQpIHtcbiAgICB0aGlzLndpbmRvd1dpZHRoID0gPFdpbmRvdz5ldmVudC50YXJnZXQ7XG4gIH1cbn1cbiJdfQ==