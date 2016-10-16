"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, args) {
        if (!args) {
            return items;
        }
        else {
            // filter the result by name
            var result = items.filter(function (item) { return item.ename.indexOf(args) !== -1; });
            // if no result found return all
            if (result.length == 0) {
                result = items;
            }
            return result;
        }
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: "searchPipe"
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0QsZUFFaEQsQ0FBQyxDQUY4RDtBQU8vRDtJQUFBO0lBY0EsQ0FBQztJQWJHLDhCQUFTLEdBQVQsVUFBVSxLQUFZLEVBQUUsSUFBVztRQUMvQixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLDRCQUE0QjtZQUM1QixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztZQUNuRSxnQ0FBZ0M7WUFDaEMsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLENBQUM7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBbEJMO1FBQUMsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFHLFlBQVk7U0FDdEIsQ0FBQztRQUVELGlCQUFVLEVBQUU7O2tCQUFBO0lBZWIsaUJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLGtCQUFVLGFBY3RCLENBQUEiLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5AUGlwZSh7XG4gICAgbmFtZSA6IFwic2VhcmNoUGlwZVwiXG59KVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybShpdGVtczogYW55W10sIGFyZ3M6IGFueVtdKTogYW55IHtcbiAgICAgICAgaWYoIWFyZ3MpeyAvLyBpZiBubyB0ZXh0IGVudGVyZWRcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBmaWx0ZXIgdGhlIHJlc3VsdCBieSBuYW1lXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5lbmFtZS5pbmRleE9mKGFyZ3MpICE9PSAtMSk7XG4gICAgICAgICAgICAvLyBpZiBubyByZXN1bHQgZm91bmQgcmV0dXJuIGFsbFxuICAgICAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ==
