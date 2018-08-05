"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentType;
(function (ComponentType) {
    ComponentType["MIDDLEWARE"] = "middleware";
    ComponentType["DATABASE"] = "database";
    ComponentType["SERVICE"] = "service";
    ComponentType["GROUP"] = "group";
    ComponentType["JOB"] = "job";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudC9Db21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxJQUFZLGFBTVg7QUFORCxXQUFZLGFBQWE7SUFDdkIsMENBQXlCLENBQUE7SUFDekIsc0NBQXFCLENBQUE7SUFDckIsb0NBQW1CLENBQUE7SUFDbkIsZ0NBQWUsQ0FBQTtJQUNmLDRCQUFXLENBQUE7QUFDYixDQUFDLEVBTlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFNeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2xvZ2dlcic7XG5pbXBvcnQgQmFzZVNlcnZlciBmcm9tICcuLi9CYXNlU2VydmVyJztcblxuZXhwb3J0IGVudW0gQ29tcG9uZW50VHlwZSB7XG4gIE1JRERMRVdBUkUgPSAnbWlkZGxld2FyZScsXG4gIERBVEFCQVNFID0gJ2RhdGFiYXNlJyxcbiAgU0VSVklDRSA9ICdzZXJ2aWNlJyxcbiAgR1JPVVAgPSAnZ3JvdXAnLFxuICBKT0IgPSAnam9iJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRPcHRpb25zIHtcbiAgbmFtZT86IHN0cmluZztcbiAgbG9nZ2VyPzogTG9nZ2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudERlc2NyaXB0aW9uIHtcbiAgbmFtZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudCB7XG4gIHR5cGU6IENvbXBvbmVudFR5cGU7XG4gIG9wdGlvbnM6IENvbXBvbmVudE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIERlc2NyaWJlcyBjdXJyZW50IGNvbXBvbmVudC5cbiAgICovXG4gIGRlc2NyaWJlKCk6IENvbXBvbmVudERlc2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgbW91bnQgcm91dGluZXMuXG4gICAqL1xuICBvbk1vdW50KHNlcnZlcjogQmFzZVNlcnZlcik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcHJlIGluaXN0aWFsaXphdGlvbiByb3V0aW5lcy5cbiAgICovXG4gIG9uSW5pdChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgdW5tb3VudCByb3V0aW5lcy5cbiAgICovXG4gIG9uVW5tb3VudChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiB2b2lkO1xufVxuIl19