(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--app-add-team></app-add-team-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-league/add-league.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-league/add-league.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div *ngIf=\"success!=null\">\n\t<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\" role=\"document\">\n  \t\t  <div class=\"modal-content\">\n  \t\t    <div class=\"modal-header\">\n\t\t\t\t\t<h5 class=\"modal-title\">League {{league.name}}</h5>\n  \t\t    </div>\n  \t\t    <div class=\"modal-body\">\n\t\t\t\t<p><span class=\"big\">✔️</span>Updated Successfully</p>\n  \t\t    </div>\n  \t\t  </div>\n  \t\t</div>\n\t</div>\n</div>\n\n<div class=\"d-flex container\">\n    <div flex>\n\t\t<img *ngIf=\"league.image_id !== null\" src=\"{{settings.url_base}}/image.php?id={{league.image_id}}\" />\n\t</div>\n\t<div class=\"flex-fill flex-grow-1\">\n\t\t<form class=\"create\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"team_name\">Name</label>\n    \t\t    <input name=\"name\" class=\"form-control\" id=\"team_name\" placeholder=\"League Name\" type=\"text\"  [(ngModel)]=\"league.name\" >\n    \t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"Country\">Country</label>\n    \t\t    <input name=\"name\" class=\"form-control\" id=\"country\" placeholder=\"Country\" type=\"text\"  [(ngModel)]=\"league.country\" >\n    \t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>Sport</label>\n\t\t        <select class=\"form-control\" name=\"sport_id\" [(ngModel)]=\"league.sport_id\">\n\t\t            <option value=\"\">Select one</option>\n\t\t            <option *ngFor=\"let sport of sports\" value=\"{{sport.id}}\">{{sport.name}}</option>\n\t\t        </select>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"alias\">Alias</label>\n    \t\t    <input name=\"name\" class=\"form-control\" id=\"alias\" placeholder=\"alias\" type=\"text\"  [(ngModel)]=\"league.alias\" >\n    \t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"team_image\">League Logo</label>\n\t\t\t\t<input type=\"file\" id=\"team_image\" class=\"form-control\" name=\"image\" (change)=\"onFileSelected($event)\">\n\t\t\t</div>\n\t\t\t<button (click)=\"saveLeague()\">Update</button>\n\t\t</form>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-sport/add-sport.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-sport/add-sport.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-tip\">\n\t\t<form>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t<input type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t\t<button (click)=\"onCreateSport()\">Submit</button>\n\t\t\t\t</div>\n\t\t</form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-team/add-team.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-team/add-team.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"container\">\n\t<div class=\"add-team\">\n\t    <form action=\"\" method=\"POST\" name=\"add-team\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"name\">Name</label> \n\t        \t\t<input  class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"team.name\" required>\n\t\t\t</div>\n\t\t\t<div>\n\t        <label id=\"sport_id\">Sport</label>\n\t        <select id=\"sport_id\" name=\"sport_id\" [(ngModel)]=\"team.sport_id\" class=\"form-control\" required>\n\t            <option *ngFor=\"let sport of sports\" [value]=\"sport.id\" >{{sport.name}}</option>\n\t        </select>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label>Logo</label>\n\t\t\t\t<input type=\"file\" (change)=\"onFileSelected($event)\" name=\"image\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t\t<label for=\"city\"> City </label>\n\t\t\t\t\t<input type=\"text\" name=\"city\" id=\"city\" [(ngModel)]=\"team.city\"  class=\"form-control\">\n\t\t\t</div>\n\t        \n\t\t\t<div>\n\t\t\t\t\t<label for=\"\">Alias</label>\n\t        \t\t<input type=\"text\" id=\"alias\" name=\"alias\" [(ngModel)]=\"team.alias\"  class=\"form-control\">\n\t\t\t</div>\n\t        \n\t\t\t<div>\n\t\t\t\t\t<label for=\"abb\">Abb</label>\n\t        \t\t<input type=\"abb\" id=\"abb\" name=\"Abb\"  [(ngModel)]=\"team.abb\"  class=\"form-control\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t\t<button type=\"button\" (click)=\"onSaveTeam()\">Save</button>\n\t\t\t</div>\n\t    </form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-tip/add-tip.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-tip/add-tip.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"add-tip container\">\n\t<form action=\"\" method=\"POST\" name=\"add-tip\" ><!-- [formGroup]=\"addTipFormGroup\" -->\n\t<div class=\"form-group\">\n\t\t<label>Sport</label>\n        <select class=\"form-control\" name=\"sport_id\" [(ngModel)]=\"tip.sport_id\"  (change)=\"onSportChange($event.target.value)\">\n            <option value=\"\">Select one</option>\n            <option *ngFor=\"let sport of sports\" value=\"{{sport.id}}\">{{sport.name}}</option>\n        </select>\n\t</div>\n\n\t<div *ngIf=\"tip.sport_id !== '' && leagues.length \" class=\"form-group\">\n\t\t<label>League</label>\n        <select class=\"form-control\" name=\"league_id\" [(ngModel)]=\"tip.league_id\"  (change)=\"onLeagueChange($event.target.value)\">\n\t\t<option *ngFor=\"let league of leagues\" value=\"{{league.id}}\">{{league.name}}</option>\n        </select>\n\t</div>\n\n\t<!-- div class=\"form-group\">\n\t\t<label>Image to Sell</label>\n\t\t<input class=\"form-control\" type=\"file\" (change)=\"onFileSelected($event)\" name=\"image\">\n\t</div -->\n\n    <div *ngIf=\"teams.length>0;then teams_selects else custom_teams\"></div>    \n\n\t<ng-template #teams_selects>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"form-group col\">\n\t\t\t\t<label>Left Team</label>\n        \t\t<select class=\"form-control\" name=\"left_team_id\" [(ngModel)]=\"tip.left_team_id\"  (change)=\"onLeftTeamChange($event.target.value)\">\n\t\t\t    \t<option *ngFor=\"let team of teams\" [value]=\"team.id\">{{team.name}} {{team.alias}}</option>\n        \t\t</select>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\tvs\n\t\t\t</div>\n\t\t\t<div class=\"form-group col\">\n\t\t\t\t<label>Right Team</label>\n        \t\t<select class=\"form-control\" name=\"left_team_id\" (change)=\"onRightTeamChange($event.target.value)\">\n        \t\t    <option value=\"\" selected>Select One</option>\n\t\t\t    \t<option *ngFor=\"let team of teams\" value=\"{{team.id}}\">{{team.name}} {{team.alias}}</option>\n        \t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</ng-template>\n\n\t<ng-template #custom_teams>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"form-group col\"> \n\t\t\t\t<label>Left team</label>\n\t\t\t\t<input class=\"form-control\"  type=\"text\" name=\"custom_left_team\"  [(ngModel)]=\"tip.custom_right_team\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group col\">\n\t\t\t\t<label>right team</label><input class=\"form-control\" type=\"text\" name=\"custom_right_team\"  [(ngModel)]=\"tip.custom_left_team\">\n\t\t\t</div>\n\t\t</div>\n\t</ng-template>\n\n\t<div class=\"form-group\">\n\t\t<label>Tip</label>\n\t\t<input class=\"form-control\" type=\"text\" name=\"custom_result\" [(ngModel)]=\"tip.custom_result\"> \n\t</div>\n\n\t<div class=\"form-group\">\n\t\t\t<label>Start Time</label>\n\t\t\t<input type=\"datetime-local\" class=\"form-control\" name=\"event_start\" (change)=\"onEventStartChange($event.target.value)\" > \n\t</div>\n\n\t<!--div class=\"form-group\">\n\t\t<label>Bet Type</label>\n\t\t<select name=\"bet_type\"  [(ngModel)]=\"tip.bet_type\" class=\"form-control\"  (change)=\"onBetTypeChange($event.target.value)\">\n\t\t\t<option *ngFor=\"let bet_type of bet_types\" value=\"{{bet_type.type}}\">{{bet_type.description}}</option>\n\t\t</select>\n\t</div-->\n\n\t<div class=\"form-group\">\n\t\t<label>Price</label>\n\t\t<select name=\"price\"  [(ngModel)]=\"tip.price\" class=\"form-control\">\n\t\t\t<option value=\"0.00\">FREE</option>\n\t\t\t<option value=\"2.00\">$2.00</option>\n\t\t\t<option value=\"5.00\">$5.00</option>\n\t\t\t<option value=\"10.00\">$10.00</option>\n\t\t</select>\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<label>Momio Decimal</label>\n\t\t<input type=\"number\" name=\"momio\"  [(ngModel)]=\"tip.odds\" class=\"form-control\" placeholder=\"Example: 2.4\">\n\n\t</div>\n\n\t<div>\n\t\t<label for=\"\">Bank Suggestion</label>\n\t\t<div class=\"input-group\">\n\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t<span class=\"input-group-text\">%</span>\n\t\t\t</div>\n\t\t\t<input type=\"number\" name=\"bank_suggestion\"  min=\"1\" max=\"99\" [(ngModel)]=\"tip.bank_suggestion\" class=\"form-control\" placeholder=\"Example: 3\">\n\t\t</div>\n\t</div>\n\n\t<div>\n\t\t<label>Betting Site</label>\n\t\t<select name=\"betting_site\" [(ngModel)]=\"tip.betting_site\" class=\"form-control\">\n\t\t\t<option>Caliente</option>\n\t\t\t<option>Bet365</option>\n\t\t\t<option>LBS</option>\n\t\t\t<option>Playdoit</option>\n\t\t\t<option>Other</option>\n\t\t</select>\n\t</div>\n\n\t<!--  *ngIf=\"this.bet_type_options == null\" -->\n\n\t<!-- div class=\"form-group\" [ngClass]=\"{'hiden':this.bet_type_options == null }\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>Result</label>\n\t\t\t<select class=\"form-control\" name=\"bet_result\" (change)=\"onBetResultChange($event.target.value)\" required>\n\t\t\t\t<option value=\"\">Select One</option>\n\t\t\t\t<option *ngFor=\"let opt of bet_type_options\" value=\"{{opt.value}}\">{{opt.description}}</option>\n\t\t\t</select>\n\t\t</div>\n\t</div -->\n\n\n\t<button type=\"button\" value=\"Guardar Datos\" (click)=\"onSaveTip()\">Save</button>\n    </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/buy-tip/buy-tip.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/buy-tip/buy-tip.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"nav\" *ngIf=\"is_loading\" class=\"spinner-border text-primary text-align\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n<div *ngIf=\"!is_loading && tip_info !== null\">\n\t\t<app-tip-details [tip_info]=\"tip_info\"></app-tip-details>\n</div>\n<div *ngIf=\"user !== null\" id=\"paypal_button_{{tip_id}}\"></div>\n<div *ngIf=\"user !== null && tip_info !==null && tip_info.tip.price == 0\" class=\"buy_button btn btn-primary text-center\" (click)=\"buyTip()\">BUY</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-league/edit-league.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-league/edit-league.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"nav\" *ngIf=\"is_loading\" class=\"spinner-border text-primary\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n\n<div *ngIf=\"success!=null\" class=\"container\">\n\t<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\" role=\"document\">\n  \t\t  <div class=\"modal-content\">\n  \t\t    <div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\">League {{league.name}}</h5>\n  \t\t    </div>\n  \t\t    <div class=\"modal-body\">\n\t\t\t\t<p><span class=\"big\">✔️</span>Updated Successfully</p>\n  \t\t    </div>\n  \t\t  </div>\n  \t\t</div>\n\t</div>\n</div>\n\n<div class=\"container mb-4\" *ngIf=\"league!==null\">\n\t<div class=\"d-flex\">\n\t    <div flex>\n\t\t\t<img *ngIf=\"league.image_id !== null\" src=\"{{settings.url_base}}/image.php?id={{league.image_id}}\" />\n\t\t</div>\n\t\t<div class=\"flex-fill flex-grow-1\">\n\t\t\t<form class=\"create\">\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<label for=\"team_name\">Name</label>\n\t    \t\t    <input name=\"name\" class=\"form-control\" id=\"team_name\" placeholder=\"League Name\" type=\"text\"  [(ngModel)]=\"league.name\" >\n\t    \t\t</div>\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<label for=\"alias\">Alias</label>\n\t    \t\t    <input name=\"name\" class=\"form-control\" id=\"alias\" placeholder=\"alias\" type=\"text\"  [(ngModel)]=\"league.alias\" >\n\t    \t\t</div>\n\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t<label for=\"team_image\">League Logo</label>\n\t\t\t\t\t<input type=\"file\" id=\"team_image\" class=\"form-control\" name=\"image\" (change)=\"onFileSelected($event)\">\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button (click)=\"updateLeague()\">Update</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container\">\n\t<ul *ngIf=\"teams.length\" class=\"list-group\">\n\t\t<li *ngFor=\"let team of teams\" class=\"list-group-item\">\n\t\t\t<a href=\"\" [routerLink]=\"['/edit-team/',team.id]\" class=\"team_logo\">\n\t\t\t\t\t<img *ngIf=\"team.image_id !== null\" src=\"{{settings.url_base}}/image.php?id={{team.image_id}}\" />\n\t\t\t\t\t{{team.name}}\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-leagues/edit-leagues.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-leagues/edit-leagues.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"nav\" *ngIf=\"is_loading\" class=\"spinner-border text-primary text-align\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n\n<div class=\"container\">\n    <h2>Edit Leagues</h2>\n\t<div class=\"formGroup\">\n\t\t<label>Sport</label>\n\t\t<select name=\"sport\" (change)=\"onSportChange($event.target.value)\" class=\"form-control\">\n\t\t\t<option *ngFor=\"let sport of sports\" value=\"{{sport.id}}\" [selected]=\"sport.id=='Soccer'\">{{sport.name}}</option>\n\t\t</select>\n\t</div>\n</div>\n\n<div class=\"container mt-4\" *ngIf=\"sports.length\">\n    <h3>Leagues</h3>\n\t<ul class=\"list-group\">\n\t\t<li *ngFor=\"let league of leagues\" class=\"list-group-item\">\n\t\t\t<a [routerLink]=\"['/edit-league',league.id]\" href=\"#\" >\n\t\t\t\t<img *ngIf=\"league.image_id !== null\" alt=\"{{league.name}} logo\" src=\"{{settings.url_base}}/image.php?id={{league.image_id}}\" width=\"30\" height=\"30\" alt=\"{{league.name}}\" />\n\t\t\t\t<i *ngIf=\"league.image_id == null\" class=\"icon ion-md-add-circle\"></i> {{league.name}}\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>\n\n<div *ngIf=\"leagues.length==0\" class=\"container\">\n\t<div class=\"alert alert-dark\" role=\"alert\" >No leagues found for {{sport_id}}</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-profile/edit-profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-profile/edit-profile.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"nav\" *ngIf=\"is_loading\" class=\"spinner-border text-primary text-align\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n\n<div *ngIf=\"!is_loading\" class=\"ml-3 mr-3\">\n\t<form action=\"\" method=\"POST\" name=\"add-tip\" ><!-- [formGroup]=\"addTipFormGroup\" -->\n\t\t<img *ngIf=\"user.image_id !== null\" src=\"{{settings.url_base}}/image.php?id={{user.image_id}}\" class=\"user image profile\">\n\n\t\t<div class=\"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"sport_id\" [(ngModel)]=\"user.name\" width=\"300\">\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label>Profile Image</label>\n\t\t\t<input class=\"form-control\" type=\"file\" (change)=\"onFileSelected($event)\" name=\"image\">\n\t\t</div>\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n\t</form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-sport/edit-sport.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-sport/edit-sport.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"nav\" *ngIf=\"is_loading\" class=\"spinner-border text-primary text-align\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n\n<div *ngIf=\"!is_loading\" class=\"ml-3 mr-3\">\n\t<form action=\"\" method=\"POST\" name=\"add-tip\" ><!-- [formGroup]=\"addTipFormGroup\" -->\n\t\t<img *ngIf=\"sport.image_id !== null\" src=\"{{settings.url_base}}/image.php?id={{sport.image_id}}\" class=\"user image profile\">\n\n\t\t<div class=\"form-group\">\n\t\t\t<label>Name</label>\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"sport_name\" [(ngModel)]=\"user.name\" width=\"300\">\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t<label>Profile Image</label>\n\t\t\t<input class=\"form-control\" type=\"file\" (change)=\"onFileSelected($event)\" name=\"image\">\n\t\t</div>\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n\t</form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-team/edit-team.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-team/edit-team.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div *ngIf=\"team==null\" class=\"spinner-border text-primary\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n\n<div *ngIf=\"success!=null\">\n\t<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\" role=\"document\">\n  \t\t  <div class=\"modal-content\">\n  \t\t    <div class=\"modal-header\">\n  \t\t      <h5 class=\"modal-title\">Modal title</h5>\n  \t\t    </div>\n  \t\t    <div class=\"modal-body\">\n\t\t\t\t<p><span class=\"big\">✔️</span>Success</p>\n  \t\t    </div>\n  \t\t  </div>\n  \t\t</div>\n\t</div>\n</div>\n\n\t\t<form action=\"\" method=\"POST\" name=\"add-team\">\n<div class=\"ml-3 mr-3\">\n<div *ngIf=\"team!=null\" class=\"d-flex\" >\n\t<div *ngIf=\"team.image_id !=null\" class=\"\">\n\t\t<img src=\"{{settings.url_base}}/image.php?id={{team.image_id}}\" >\n\t</div>\t\n\t<div class=\"flex-fill flex-grow-1 add-team\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Name</label> \n\t\t    \t<input  class=\"form-control\" type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"team.name\" required>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label>Logo</label>\n\t\t\t\t<input type=\"file\" (change)=\"onFileSelected($event)\" name=\"image\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label for=\"city\"> City </label>\n\t\t\t\t<input type=\"text\" name=\"city\" id=\"city\" [(ngModel)]=\"team.city\"  class=\"form-control\">\n\t\t\t</div>\n\t\t    \n\t\t\t<div>\n\t\t\t\t<label for=\"\">Alias</label>\n\t\t    \t<input type=\"text\" id=\"alias\" name=\"alias\" [(ngModel)]=\"team.alias\"  class=\"form-control\">\n\t\t\t</div>\n\t\t    \n\t\t\t<div>\n\t\t\t\t<label for=\"abb\">Abb</label>\n\t\t    \t<input type=\"abb\" id=\"abb\" name=\"Abb\"  [(ngModel)]=\"team.abb\"  class=\"form-control\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<button type=\"button\" (click)=\"onSaveTeam()\">Save</button>\n\t\t\t</div>\n\t</div>\n</div>\n</div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/index/index.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/index/index.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tipster-offers></app-tipster-offers>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 offset-md-2\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <form action=\"\">\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Title\" class=\"form-control\" autofocus>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" name=\"image URL\" [(ngModel)]=\"password\" placeholder=\"password\" class=\"form-control\">\n        </div>\n        <button class=\"btn btn-success btn-block\" (click)=\"doLogin()\">Login</button>\n      </form>\n    </div>\n    <p class=\"text-center\">dont have an account? <a href=\"/signup\">Sign up</a> </p>                                                                 \n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/logout/logout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/logout/logout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/my-tips/my-tips.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/my-tips/my-tips.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<app-tips-list [search]=\"my_tips_search\"></app-tips-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"site-header sticky-top dark\">\n  <div class=\"container d-flex flex-md-row justify-content-end text-right\">\n\t<a *ngIf=\"user==null\" class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">\n\t\t<i class=\"icon ion-md-person\"></i>\n\t</a>\n\n\t<a *ngIf=\"user!=null\" routerLink=\"/my-tips\" routerLinkActive=\"active\">\n\t\t<i class=\"icon ion-md-add\"></i>\n\t</a>\n\n    <a *ngIf=\"user!==null && user.type=='TIPSTER'\" routerLink=\"/add-tip\" routerLinkActive=\"active\">\n\t\t<i class=\"icon ion-md-add\"></i>\n\t</a>\n\n\t<a *ngIf=\"user!=null\" routerLink=\"/user-settings\" routerLinkActive=\"active\">\n\t\t<i class=\"icon ion-md-settings\"></i>\n\t</a>\n\n\t<a *ngIf=\"user!=null\" class=\"nav-link\" routerLink=\"/logout\" routerLinkActive=\"active\">\n\t   <i class=\"icon ion-md-exit\"></i>\n\t</a>\n  </div>\n</nav>\n\n<!-- a *ngIf=\"user!=null && user.type=='ADMIN'\" class=\"nav-link\" routerLink=\"/add-sport\" routerLinkActive=\"active\">Add sport</a -->\n<!-- a class=\"nav-item\" *ngIf=\"user!=null && user.type=='ADMIN'\" routerLink=\"/add-team\" routerLinkActive=\"active\">Add team</a -->\n\n<div *ngIf=\"sport_list.length\" class=\"d-flex sports\">\n\t<div class=\"align-self-center\">\n\t    <a href=\"/\" [routerLink]=\"['/home']\"><img src=\"{{settings.url_base}}/image.php?id=38\" class=\"main_logo\"></a>\n\t</div>\n\t<div class=\"flex-grow-1 align-self-center\">\n\t\t<ul class=\"nav\">\n\t\t  <li *ngFor=\"let sport of sport_list\" class=\"nav-item\">\n\t\t\t<a href=\"#\" class=\"nav-link active sport-link\" [routerLink]=\"['/sport', sport.id]\">\n\t\t\t\t<img *ngIf=\"sport.image_id!=null\" src=\"{{settings.url_base}}/image.php?id={{sport.image_id}}\" class=\"sport_logo\">\n\t\t\t\t<span class=\"desktop\">{{sport.name}}</span>\n\t\t\t</a>\n\t\t  </li>\n\t\t</ul>\n\t</div>\n</div>\n\n<ul class=\"nav\" *ngIf=\"league_list.length>0\">\n  <li *ngFor=\"let league of league_list\" class=\"nav-item\">\n\t<a href=\"#\" class=\"nav-link active\" [routerLink]=\"['/league', league.id]\">{{league.name}}</a>\n  </li>\n</ul>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/review-tip-list/review-tip-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/review-tip-list/review-tip-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div>\n\t<div class=\"filters\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>Date Search</label>\n\t\t\t<input type=\"date\" [disabled]=\"searchFilter=='PENDING'\"  [(ngModel)]=\"event_start\"  class=\"form-control\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Search Type</label>\n\t\t\t<select (change)=\"onChangeFilter($event.target.value)\" class=\"form-control\">\n\t\t\t\t<option value=\"PENDING\" selected>Pending For Review</option>\n\t\t\t\t<option value=\"EVENT_DATE\">Event Date</option>\n\t\t\t\t<!-- option value=\"REVIEW_DATE\">Review Date</option -->\n\t\t\t</select>\n\t\t</div>\n    </div>\n\n   <app-review-tip *ngFor=\"let tip_info of tips\" [tip_info]=\"tip_info\"></app-review-tip>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/review-tip/review-tip.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/review-tip/review-tip.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content\">\n\t<div class=\"col\">\n\t\t<div *ngIf=\"tip_info.league\">{{tip_info.league.name}}</div>\n\t\t<p>\n\t\t\t<span *ngIf=\"tip_info.tip.custom_left_team\">{{tip_info.tip.custom_left_team}}</span>\n\t\t\t<span *ngIf=\"tip_info.left_team!==null\">{{tip_info.left_team.name}}</span>\n    \t\tvs\n\t\t\t<span *ngIf=\"tip_info.left_team!==null\">{{tip_info.right_team.name}}</span> \n\t\t\t<span *ngIf=\"tip_info.tip.custom_left_team\">{{tip_info.tip.custom_right_team}}</span>\n\t\t</p>\n\t\t<p>{{tip_info.tip.start_event}}</p>\n\t</div>\n\t<div class=\"col\">\n\t\t<div>{{tip_info.tip.custom_result}}</div>\n\t</div>\n\t<div class=\"col\">\n\t\t<div class=\"btn-group\" role=\"group\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"onChangePredictionStatus('CORRECT')\" [disabled]=\"tip_info.tip.prediction_status == 'CORRECT'\">Correct</button>\n  \t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"onChangePredictionStatus('PENDING')\" [disabled]=\"tip_info.tip.prediction_status == 'PENDING'\">Pending</button>\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"onChangePredictionStatus('FAIL')\" [disabled]=\"tip_info.tip.prediction_status == 'FAIL'\">Fail</button>\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"onChangePredictionStatus('PUSH')\" [disabled]=\"tip_info.tip.prediction_status == 'PUSH'\">Push</button>\n\t\t</div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/review-tips/review-tips.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/review-tips/review-tips.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"col-md-4\">\n   <app-review-tip></app-review-tip>\n   <!-- app-tip-item *ngFor=\"let tip_info of tips\" [tip_info]=\"tip_info\"></app-tip-item -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search-league/search-league.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search-league/search-league.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search-league works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<h2 *ngIf=\"title!=null\">{{title}}</h2>\n\n<div class=\"nav\" *ngIf=\"is_loading\" class=\"spinner-border text-primary text-align\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n\n<div *ngIf=\"league_list.length>0\">\n\t<a *ngFor=\"let league of league_list\" href=\"/league/{{league.id}}\"  [routerLink]=\"['/league/', league.id]\">\n\t\t<img class=\"league_logo\" src=\"{{settings.url_base}}/image.php?id={{league.image_id}}\" [alt]=\"league.name\">\n\t</a>\n</div>\n\n<div class=\"item-table ml-3 mr-3 pt-3 pb-3\" *ngIf=\"tips.length d-flex\">\n\t<div  *ngFor=\"let tip_info of tips\" class=\"d-flex justify-content-between item-component\">\t\n\n\t\t<div class=\"user_content\">\n\t\t  <div class=\"user_logo big\">\n\t\t\t  <img *ngIf=\"tip_info.user.image_id !== null\" src=\"{{settings.url_base}}/image.php?id={{tip_info.user.image_id}}\"  alt=\"{{tip_info.user.name}} image\">\n\t\t\t  <img *ngIf=\"tip_info.user.image_id == null\" src=\"/assets/user.svg\" alt=\"{{tip_info.user.name}} image\">\n\t\t  </div>\n\t\t  <div class=\"user_name\"> {{tip_info.user.name}}</div>\n\t\t  <div class=\"user_stats\" *ngIf=\"tip_info.user_stats!=null\">{{tip_info.user_stats.correct_tips}} / {{tip_info.user_stats.total_reviewed_tips}}</div>\n\t\t  <div class=\"user_stats\" *ngIf=\"tip_info.user_stats==null\"><div class=\"badge badge-info\">New</div></div>\n\t\t</div>\n\n\t\t<div class=\"flex-fill middle-section\">\n\n  \t  \t  <div class=\"align-self-center d-flex team-info\">\n\t  \t  \t<div class=\"left-team flex-fill text-center\">\n\t  \t  \t\t<img *ngIf=\"tip_info.left_team != null && tip_info.left_team.image_id !=null && tip_info.right_team !=null && tip_info.right_team.image_id !=null \" src=\"{{settings.url_base}}/image.php?id={{tip_info.left_team.image_id}}\" class=\"logo left\">\n\t  \t  \t\t<br>\n  \t  \t  \t\t<span *ngIf=\"tip_info.tip.custom_left_team\" class=\"team_name\">{{tip_info.tip.custom_left_team}}</span>\n  \t  \t  \t\t<span *ngIf=\"tip_info.left_team!==null\" class=\"team_name\">{{tip_info.left_team.name}}</span>\n\t  \t  \t</div>\n\t  \t  \t<div class=\"flex-fill text-center\">vs</div>\n\t  \t   \t<div class=\"flex-fill right-team text-center\">\n\t  \t  \t\t<img *ngIf=\"tip_info.left_team != null && tip_info.left_team.image_id !=null && tip_info.right_team !=null && tip_info.right_team.image_id !=null \" src=\"{{settings.url_base}}/image.php?id={{tip_info.right_team.image_id}}\" class=\"logo right\">\n\t  \t  \t\t<br>\n\t  \t  \t\t<span *ngIf=\"tip_info.left_team!==null\" class=\"team_name\">{{tip_info.right_team.name}}</span> \n  \t  \t \t\t<span *ngIf=\"tip_info.tip.custom_left_team\" class=\"team_name\">{{tip_info.tip.custom_right_team}}</span>\n\t  \t  \t</div>\n  \t  \t  </div>\n\t  \t  <div class=\"date\">\n  \t  \t\t<span> {{tip_info.tip.event_start |date :'MMM/dd h:mm a'}}</span>\n\t  \t  \t<a *ngIf=\"tip_info.league !== null\" class=\"badge badge-info\" [routerLink]=\"['/league/',tip_info.league.id]\">\n  \t  \t  \t\t {{tip_info.league.name}}\n  \t  \t  \t</a>\n\t  \t  </div>\n  \t  \t</div>\n\t  <!--   -->\n  \t  <div class=\"justify-content-end align-self-center\">\n  \t  \t<div class=\"align-self-center buy\">\n\t\t\t\t<div><a [routerLink]=\"['/buy', tip_info.tip.id]\" class=\"car\"><img src=\"/assets/cart64.png\" alt=\"buy\"></a></div>\n\t\t\t\t<div *ngIf=\"tip_info.tip.price>0\" >{{tip_info.tip.price| currency}}</div>\n\t\t\t\t<div *ngIf=\"tip_info.tip.price==0\">FREE</div>\n  \t  \t</div>\n  \t  </div>\n  \t</div>\n</div>\n\n<div *ngIf=\"tips.length == 0 \">\n\t<div class=\"card\">\n\t  <div class=\"card-body\">\n\t    No Tips Found\n\t  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"create\">\n\t<div class=\"form-group input-group\">\n\t\t<div class=\"input-group-prepend\">\n\t\t    <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n\t\t </div>\n        <input name=\"name\" class=\"form-control\" placeholder=\"Full name\" type=\"text\"  [(ngModel)]=\"name\" >\n    </div> <!-- form-group// -->\n    <div class=\"form-group input-group\">\n    \t<div class=\"input-group-prepend\">\n\t\t    <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n\t\t </div>\n        <input name=\"email\" class=\"form-control\" placeholder=\"Email address\" type=\"email\" [(ngModel)]=\"email\" >\n    </div> <!-- form-group// -->\n    <div class=\"form-group input-group\">\n    \t<div class=\"input-group-prepend\">\n\t\t    <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n\t\t</div>\n        <input class=\"form-control\" placeholder=\"Create password\" name=\"password\" type=\"password\" [(ngModel)]=\"password\">\n    </div> <!-- form-group// -->\n    <div class=\"form-group input-group\">\n    \t<div class=\"input-group-prepend\">\n\t\t    <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n\t\t</div>\n        <input class=\"form-control\" name=\"password_confirmation\" placeholder=\"Repeat password\" type=\"password\" [(ngModel)]=\"password_confirmation\">\n    </div> <!-- form-group// -->                                      \n    <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\"  (click)=\"createAccount()\"> Create Account  </button>\n    </div> <!-- form-group// -->      \n    <p class=\"text-center\">Have an account? <a href=\"/login\">Log In</a> </p>                                                                 \n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tip-details/tip-details.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tip-details/tip-details.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"flex-fill middle-section\">\n  \t  <div class=\"align-self-center d-flex team-info\">\n\t  \t<div class=\"left-team flex-fill text-center\">\n\t  \t\t<img *ngIf=\"tip_info.left_team != null && tip_info.left_team.image_id !=null\" src=\"{{settings.url_base}}/image.php?id={{tip_info.left_team.image_id}}\" class=\"logo left\">\n\t  \t\t<img *ngIf=\"tip_info.left_team == null || tip_info.left_team.image_id ==null\" src=\"/assets/local.jpg\" class=\"logo left\">\n\t  \t\t<br>\n  \t  \t\t<span *ngIf=\"tip_info.tip.custom_left_team\" class=\"team_name\">{{tip_info.tip.custom_left_team}}</span>\n  \t  \t\t<span *ngIf=\"tip_info.left_team != null\" class=\"team_name\">{{tip_info.left_team.name}}</span>\n\t  \t</div>\n\t\t<div class=\"flex-fill text-center\">\n\t\t\t<div class=\"text-big\"> VS </div>\n\t\t\t<div class=\"text-small\">\n\t\t\t\t<div><b>Decimal Odds</b></div>\n\t\t\t\t<div>{{tip_info.tip.odds}}</div>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"tip_info.tip.betting_site\" class=\"text-small\">\n\t\t\t\t<div><b>Bank Suggestion</b></div>\n\t\t\t\t<div>{{tip_info.tip.bank_suggestion}}%</div>\n\t\t\t</div>\n\t\t</div>\n\t   \t<div class=\"flex-fill right-team text-center\">\n\t  \t\t<img *ngIf=\"tip_info.right_team !=null && tip_info.right_team.image_id !=null \" src=\"{{settings.url_base}}/image.php?id={{tip_info.right_team.image_id}}\" class=\"logo right\">\n\t  \t\t<img *ngIf=\"tip_info.right_team ==null || tip_info.right_team.image_id ==null \" src=\"/assets/guest.jpg\" class=\"logo right\">\n\t  \t\t<br>\n\t  \t\t<span *ngIf=\"tip_info.right_team != null\" class=\"team_name\">{{tip_info.right_team.name}}</span> \n  \t \t\t<span *ngIf=\"tip_info.tip.custom_right_team\" class=\"team_name\">{{tip_info.tip.custom_right_team}}</span>\n\t  \t</div>\n  \t  </div>\n\t  <div class=\"details container\">\n\t\t<div class=\"text-center result\" *ngIf=\"tip_info.bought\">{{tip_info.tip.custom_result}}</div>\n\t  \t<div class=\"date text-center\">\n\t\t\t<span> {{tip_info.tip.event_start |date :'MMM/dd h:mm a'}}</span>\n\t\t\t<span *ngIf=\"tip_info.league != null \"> {{tip_info.league.name}}</span>\n\t\t</div>\n\t  </div>\n\t  <div class=\"d-flex flex-row user-row container\">\n\t\t\t<div class=\"user_content\">\n\t\t\t  <div class=\"user_logo big\">\n\t\t\t\t  <img *ngIf=\"tip_info.user.image_id !== null\" src=\"{{settings.url_base}}/image.php?id={{tip_info.user.image_id}}\"  alt=\"{{tip_info.user.name}} image\">\n\t\t\t\t  <img *ngIf=\"tip_info.user.image_id == null\" src=\"/assets/user.svg\" alt=\"{{tip_info.user.name}} image\">\n\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class=\"user_name\"> {{tip_info.user.name}}</div>\n\t\t\t\t<div *ngIf=\"tip_info.user.total_reviewed_tips==0;else stats\">\n\t\t\t\t  <div class=\"badge badge-info\">New</div>\n\t\t\t\t</div>\n\t\t\t\t<ng-template #stats>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t{{tip_info.user.total_correct_tips}}/{{tip_info.user.total_reviewed_tips}}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div ngClass=\"{'fail': tip_info.user.bank_accumulated_total <= 0,'ok':tip_info.user.bank_accumulated_total>0}\">\n\t\t\t\t\t\t{{tip_info.user.bank_accumulated_total}} %\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t  </div>\n\n\t  <!-- \n\t\t   The security is working,\n\t\t   but for the owner of the tip this info is available.\n\t\t   To avoid confussion this is not displayed unless the viewer has already pay for the tip\n\t  -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tips-list/tips-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tips-list/tips-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"title!=null\">{{title}}</h2>\n\n<div class=\"nav\" *ngIf=\"is_loading\" class=\"spinner-border text-primary text-align\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n\n<div class=\"item-table ml-3 mr-3 pt-3 pb-3\" *ngIf=\"tips.length d-flex\">\n\t<div  *ngFor=\"let tip_info of tips\" class=\"d-flex justify-content-between item-component\">\t\n\n\t\t<div class=\"user_content\">\n\t\t  <div class=\"user_logo big\">\n\t\t\t  <img *ngIf=\"tip_info.user.image_id !== null\" src=\"{{settings.url_base}}/image.php?id={{tip_info.user.image_id}}\"  alt=\"{{tip_info.user.name}} image\">\n\t\t\t  <img *ngIf=\"tip_info.user.image_id == null\" src=\"/assets/user.svg\" alt=\"{{tip_info.user.name}} image\">\n\t\t  </div>\n\t\t  <div class=\"user_name\"> {{tip_info.user.name}}</div>\n\t\t  <div class=\"user_stats\" *ngIf=\"tip_info.user_stats!=null\">{{tip_info.user_stats.correct_tips}}/{{tip_info.user_stats.total_reviewed_tips}}</div>\n\t\t  <div class=\"user_stats\" *ngIf=\"tip_info.user_stats==null\"><div class=\"badge badge-info\">New</div></div>\n\t\t</div>\n\n\t\t<div class=\"flex-fill middle-section\">\n\n  \t  \t  <div class=\"align-self-center d-flex team-info\">\n\t  \t  \t<div class=\"left-team flex-fill text-center\">\n\t  \t  \t\t<img *ngIf=\"tip_info.left_team != null && tip_info.left_team.image_id !=null && tip_info.right_team !=null && tip_info.right_team.image_id !=null \" src=\"{{settings.url_base}}/image.php?id={{tip_info.left_team.image_id}}\" class=\"logo left\">\n\t  \t  \t\t<br>\n  \t  \t  \t\t<span *ngIf=\"tip_info.tip.custom_left_team\" class=\"team_name\">{{tip_info.tip.custom_left_team}}</span>\n  \t  \t  \t\t<span *ngIf=\"tip_info.left_team!==null\" class=\"team_name\">{{tip_info.left_team.name}}</span>\n\t  \t  \t</div>\n\t  \t  \t<div class=\"flex-fill text-center\">vs</div>\n\t  \t   \t<div class=\"flex-fill right-team text-center\">\n\t  \t  \t\t<img *ngIf=\"tip_info.left_team != null && tip_info.left_team.image_id !=null && tip_info.right_team !=null && tip_info.right_team.image_id !=null \" src=\"{{settings.url_base}}/image.php?id={{tip_info.right_team.image_id}}\" class=\"logo right\">\n\t  \t  \t\t<br>\n\t  \t  \t\t<span *ngIf=\"tip_info.left_team!==null\" class=\"team_name\">{{tip_info.right_team.name}}</span> \n  \t  \t \t\t<span *ngIf=\"tip_info.tip.custom_left_team\" class=\"team_name\">{{tip_info.tip.custom_right_team}}</span>\n\t  \t  \t</div>\n  \t  \t  </div>\n\t  \t  <div class=\"date\">\n  \t  \t\t<span> {{tip_info.tip.event_start |date :'MMM/dd h:mm a'}}</span>\n\t  \t  \t<a *ngIf=\"tip_info.league !== null\" class=\"badge badge-info\" [routerLink]=\"['/league/',tip_info.league.id]\">\n  \t  \t  \t\t {{tip_info.league.name}}\n  \t  \t  \t</a>\n\t  \t  </div>\n  \t  \t</div>\n\t  <!--   -->\n  \t  <div class=\"justify-content-end align-self-center\">\n  \t  \t<div class=\"align-self-center buy\">\n\t\t\t\t<div><a [routerLink]=\"['/buy', tip_info.tip.id]\" class=\"car\"><img src=\"/assets/cart64.png\" alt=\"buy\"></a></div>\n\t\t\t\t<div *ngIf=\"tip_info.tip.price>0\" >{{tip_info.tip.price| currency}}</div>\n\t\t\t\t<div *ngIf=\"tip_info.tip.price==0\">FREE</div>\n  \t  \t</div>\n  \t  </div>\n  \t</div>\n</div>\n\n<div *ngIf=\"tips.length == 0 \">\n\t<div class=\"card\">\n\t  <div class=\"card-body\">\n\t    No Tips Found\n\t  </div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/tipster-offers/tipster-offers.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/tipster-offers/tipster-offers.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 item-list\">\n\t\t<!--\n   <app-tip-item *ngFor=\"let tip_info of tip_infos\" [tip_info]=\"tip_info\"></app-tip-item>\n\t\t-->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/upgrade-pro/upgrade-pro.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/upgrade-pro/upgrade-pro.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div *ngIf=\"tip_id !== 0\" id=\"paypal_button_subscription\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-settings/user-settings.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-settings/user-settings.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"nav\" *ngIf=\"is_loading\" class=\"spinner-border text-primary text-align\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n\n<div *ngIf=\"user!==null && user.type == 'ADMIN'\" class=\"container\">\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\"><a routerLink=\"/add-league\" routerLinkActive=\"active\"><i class=\"icon ion-md-add-circle\"></i> Add League</a></li>\n\t\t <li class=\"list-group-item\"><a routerLink=\"/add-team\" routerLinkActive=\"active\"><i class=\"icon ion-md-add-circle\"></i> Add Team</a></li>\n\t\t <li class=\"list-group-item\"><a routerLink=\"/add-tip\" routerLinkActive=\"active\"><i class=\"icon ion-md-add-circle\"></i> Add Tip</a></li>\n\t\t <li class=\"list-group-item\"><a routerLink=\"/edit-leagues\" routerLinkActive=\"active\"><i class=\"icon ion-md-create\"></i> Edit League</a></li>\n\t\t <li class=\"list-group-item\"><a routerLink=\"/edit-sport\" routerLinkActive=\"active\"><i class=\"icon ion-md-create\"></i> Edit Sports</a></li>\n\t\t <li class=\"list-group-item\"><a routerLink=\"/edit-profile\" routerLinkActive=\"active\"><i class=\"icon ion-md-create\"></i> Edit Profile</a></li>\n\t\t <li class=\"list-group-item\"><a routerLink=\"/review-tips\" routerLinkActive=\"active\"> <i class=\"icon ion-md-checkmark-circle\"></i> Review Tips</a></li>\n\t\t <li class=\"list-group-item\"><a routerLink=\"/logout\" routerLinkActive=\"active\"> <i class=\"icon ion-md-exit\"></i> Logout</a></li>\n\t</ul>\n</div>\n\n<div *ngIf=\"user!==null && user.type == 'TIPSTER'\" class=\"container\">\n\t<ul class=\"list-group\">\n\t\t <li class=\"list-group-item\"><a routerLink=\"/add-tip\" routerLinkActive=\"active\"><i class=\"icon ion-md-add-circle\"></i> Add Tip</a></li>\n\t\t <li class=\"list-group-item\"><a routerLink=\"/edit-profile\" routerLinkActive=\"active\"><i class=\"icon ion-md-create\"></i> Edit Profile</a></li>\n\t\t <li class=\"list-group-item\"><a routerLink=\"/logout\" routerLinkActive=\"active\"> <i class=\"icon ion-md-exit\"></i> Logout</a></li>\n\t</ul>\n</div>\n\n<div *ngIf=\"user!==null && user.type == 'USER'\" class=\"container\">\n\t<ul class=\"list-group\">\n\t\t <li class=\"list-group-item\"><a routerLink=\"/edit-profile\" routerLinkActive=\"active\"><i class=\"icon ion-md-create\"></i> Edit Profile</a></li>\n\t\t <li class=\"list-group-item\"><a routerLink=\"/upgrade-pro\" routerLinkActive=\"active\"><i class=\"icon ion-md-checkmark-circle-outline\"></i> Become a Pro</a></li>\n\t\t <li class=\"list-group-item\"><a routerLink=\"/logout\" routerLinkActive=\"active\"> <i class=\"icon ion-md-exit\"></i> Logout</a></li>\n\t</ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/view-tip/view-tip.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/view-tip/view-tip.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div class=\"nav\" *ngIf=\"is_loading\" class=\"spinner-border text-primary text-align\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n\n<div *ngIf=\"tip_info==null && !is_loading\">\n\t\tError try again later\n</div>\n<div *ngIf=\"tip_info!==null\">\n\t<app-tip-details [tip_info]=\"tip_info\"></app-tip-details>\n\t<div *ngIf=\"tip_info.tip.media1_image_id!==null\">\n\t  <img src=\"{{settings.url_base}}/image.php?id={{tip_info.tip.media1_image_id}}\" width=\"300\">\n\t  <a  target=\"_BLANK\" href=\"{{settings.url_base}}/image.php?id={{tip_info.tip.media1_image_id}}&download=1\">Download</a>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_add_tip_add_tip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-tip/add-tip.component */ "./src/app/components/add-tip/add-tip.component.ts");
/* harmony import */ var _components_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-team/add-team.component */ "./src/app/components/add-team/add-team.component.ts");
/* harmony import */ var _components_add_sport_add_sport_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-sport/add-sport.component */ "./src/app/components/add-sport/add-sport.component.ts");
/* harmony import */ var _components_add_league_add_league_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-league/add-league.component */ "./src/app/components/add-league/add-league.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_review_tip_list_review_tip_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/review-tip-list/review-tip-list.component */ "./src/app/components/review-tip-list/review-tip-list.component.ts");
/* harmony import */ var _components_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-team/edit-team.component */ "./src/app/components/edit-team/edit-team.component.ts");
/* harmony import */ var _components_edit_league_edit_league_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit-league/edit-league.component */ "./src/app/components/edit-league/edit-league.component.ts");
/* harmony import */ var _components_edit_leagues_edit_leagues_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/edit-leagues/edit-leagues.component */ "./src/app/components/edit-leagues/edit-leagues.component.ts");
/* harmony import */ var _components_buy_tip_buy_tip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/buy-tip/buy-tip.component */ "./src/app/components/buy-tip/buy-tip.component.ts");
/* harmony import */ var _components_view_tip_view_tip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/view-tip/view-tip.component */ "./src/app/components/view-tip/view-tip.component.ts");
/* harmony import */ var _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user-settings/user-settings.component */ "./src/app/components/user-settings/user-settings.component.ts");
/* harmony import */ var _components_my_tips_my_tips_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/my-tips/my-tips.component */ "./src/app/components/my-tips/my-tips.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_upgrade_pro_upgrade_pro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/upgrade-pro/upgrade-pro.component */ "./src/app/components/upgrade-pro/upgrade-pro.component.ts");





















const routes = [
    {
        path: 'user-settings',
        component: _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_17__["UserSettingsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'edit-profile',
        component: _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_19__["EditProfileComponent"],
        pathMatch: 'full'
    },
    {
        path: 'add-tip',
        component: _components_add_tip_add_tip_component__WEBPACK_IMPORTED_MODULE_3__["AddTipComponent"],
        pathMatch: 'full'
    },
    {
        path: 'upgrade-pro',
        component: _components_upgrade_pro_upgrade_pro_component__WEBPACK_IMPORTED_MODULE_20__["UpgradeProComponent"],
        pathMatch: 'full'
    },
    {
        path: 'buy/:tip_id',
        component: _components_buy_tip_buy_tip_component__WEBPACK_IMPORTED_MODULE_15__["BuyTipComponent"],
        pathMatch: 'full'
    },
    {
        path: 'view-tip/:tip_id',
        component: _components_view_tip_view_tip_component__WEBPACK_IMPORTED_MODULE_16__["ViewTipComponent"],
        pathMatch: 'full'
    },
    {
        path: 'add-league',
        component: _components_add_league_add_league_component__WEBPACK_IMPORTED_MODULE_6__["AddLeagueComponent"],
        pathMatch: 'full'
    },
    {
        path: 'edit-team/:team_id',
        component: _components_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_12__["EditTeamComponent"],
        pathMatch: 'full'
    },
    {
        path: 'edit-leagues',
        component: _components_edit_leagues_edit_leagues_component__WEBPACK_IMPORTED_MODULE_14__["EditLeaguesComponent"],
        pathMatch: 'full'
    },
    {
        path: 'edit-league/:league_id',
        component: _components_edit_league_edit_league_component__WEBPACK_IMPORTED_MODULE_13__["EditLeagueComponent"],
        pathMatch: 'full'
    },
    {
        path: 'user/:user_id',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        pathMatch: 'full'
    },
    {
        path: 'league/:league_id',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        pathMatch: 'full'
    },
    {
        path: 'sport/:sport_id',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        pathMatch: 'full'
    },
    {
        path: 'add-team',
        component: _components_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_4__["AddTeamComponent"],
        pathMatch: 'full'
    },
    {
        path: 'add-sport',
        component: _components_add_sport_add_sport_component__WEBPACK_IMPORTED_MODULE_5__["AddSportComponent"],
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        pathMatch: 'full'
    },
    {
        path: 'login-redirect/:tip_id',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        pathMatch: 'full'
    },
    {
        path: 'logout',
        component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"],
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        pathMatch: 'full'
    },
    {
        path: '',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        pathMatch: 'full'
    },
    {
        path: 'my-tips',
        component: _components_my_tips_my_tips_component__WEBPACK_IMPORTED_MODULE_18__["MyTipsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'review-tips',
        component: _components_review_tip_list_review_tip_list_component__WEBPACK_IMPORTED_MODULE_11__["ReviewTipListComponent"],
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.big\n{\n\tfont-size: 40px;\t\t\n}\n\n\n.tip-flex\n{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-content: center;\n    align-items: stretch;\n}\n\n\n.tip-flex>div\n{\n    order: 0;\n    flex: 0 1 auto;\n    align-self: stretch;\n}\n\n\n.tip-flex-grow\n{\n   order: 0;\n    flex: 1 1 auto;\n    align-self: auto;\t\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztDQUVDLGVBQWU7QUFDaEI7OztBQUdBOztJQUlJLGFBQWE7SUFHYixtQkFBbUI7SUFHbkIsaUJBQWlCO0lBR2pCLHVCQUF1QjtJQUd2QixxQkFBcUI7SUFHckIsb0JBQW9CO0FBQ3hCOzs7QUFFQTs7SUFJSSxRQUFRO0lBR1IsY0FBYztJQUdkLG1CQUFtQjtBQUN2Qjs7O0FBRUE7O0dBSUksUUFBUTtJQUdSLGNBQWM7SUFHZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJpZ1xue1xuXHRmb250LXNpemU6IDQwcHg7XHRcdFxufVxuXG5cbi50aXAtZmxleFxue1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gICAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4udGlwLWZsZXg+ZGl2XG57XG5cdFx0ICAgLXdlYmtpdC1vcmRlcjogMDtcbiAgICAtbXMtZmxleC1vcmRlcjogMDtcbiAgICBvcmRlcjogMDtcbiAgICAtd2Via2l0LWZsZXg6IDAgMSBhdXRvO1xuICAgIC1tcy1mbGV4OiAwIDEgYXV0bztcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICAtd2Via2l0LWFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RyZXRjaDtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuXG4udGlwLWZsZXgtZ3Jvd1xue1xuICAgLXdlYmtpdC1vcmRlcjogMDtcbiAgICAtbXMtZmxleC1vcmRlcjogMDtcbiAgICBvcmRlcjogMDtcbiAgICAtd2Via2l0LWZsZXg6IDEgMSBhdXRvO1xuICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAtd2Via2l0LWFsaWduLXNlbGY6IGF1dG87XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1x0XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'tip-client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_league_add_league_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-league/add-league.component */ "./src/app/components/add-league/add-league.component.ts");
/* harmony import */ var _components_add_tip_add_tip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-tip/add-tip.component */ "./src/app/components/add-tip/add-tip.component.ts");
/* harmony import */ var _components_add_sport_add_sport_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-sport/add-sport.component */ "./src/app/components/add-sport/add-sport.component.ts");
/* harmony import */ var _components_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-team/add-team.component */ "./src/app/components/add-team/add-team.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_review_tips_review_tips_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/review-tips/review-tips.component */ "./src/app/components/review-tips/review-tips.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_tips_list_tips_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tips-list/tips-list.component */ "./src/app/components/tips-list/tips-list.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _components_tipster_offers_tipster_offers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tipster-offers/tipster-offers.component */ "./src/app/components/tipster-offers/tipster-offers.component.ts");
/* harmony import */ var _components_review_tip_list_review_tip_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/review-tip-list/review-tip-list.component */ "./src/app/components/review-tip-list/review-tip-list.component.ts");
/* harmony import */ var _components_review_tip_review_tip_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/review-tip/review-tip.component */ "./src/app/components/review-tip/review-tip.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_buy_tip_buy_tip_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/buy-tip/buy-tip.component */ "./src/app/components/buy-tip/buy-tip.component.ts");
/* harmony import */ var _components_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/edit-team/edit-team.component */ "./src/app/components/edit-team/edit-team.component.ts");
/* harmony import */ var _components_edit_league_edit_league_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/edit-league/edit-league.component */ "./src/app/components/edit-league/edit-league.component.ts");
/* harmony import */ var _components_view_tip_view_tip_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/view-tip/view-tip.component */ "./src/app/components/view-tip/view-tip.component.ts");
/* harmony import */ var _components_edit_leagues_edit_leagues_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/edit-leagues/edit-leagues.component */ "./src/app/components/edit-leagues/edit-leagues.component.ts");
/* harmony import */ var _components_search_league_search_league_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/search-league/search-league.component */ "./src/app/components/search-league/search-league.component.ts");
/* harmony import */ var _components_my_tips_my_tips_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/my-tips/my-tips.component */ "./src/app/components/my-tips/my-tips.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/user-settings/user-settings.component */ "./src/app/components/user-settings/user-settings.component.ts");
/* harmony import */ var _components_upgrade_pro_upgrade_pro_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/upgrade-pro/upgrade-pro.component */ "./src/app/components/upgrade-pro/upgrade-pro.component.ts");
/* harmony import */ var _components_tip_details_tip_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/tip-details/tip-details.component */ "./src/app/components/tip-details/tip-details.component.ts");
/* harmony import */ var _components_edit_sport_edit_sport_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/edit-sport/edit-sport.component */ "./src/app/components/edit-sport/edit-sport.component.ts");










//import { ReactiveFormsModule } from '@angular/forms';
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_add_league_add_league_component__WEBPACK_IMPORTED_MODULE_5__["AddLeagueComponent"],
            _components_add_tip_add_tip_component__WEBPACK_IMPORTED_MODULE_6__["AddTipComponent"],
            _components_add_sport_add_sport_component__WEBPACK_IMPORTED_MODULE_7__["AddSportComponent"],
            _components_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_8__["AddTeamComponent"],
            _components_review_tips_review_tips_component__WEBPACK_IMPORTED_MODULE_11__["ReviewTipsComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
            _components_index_index_component__WEBPACK_IMPORTED_MODULE_14__["IndexComponent"],
            _components_tips_list_tips_list_component__WEBPACK_IMPORTED_MODULE_15__["TipsListComponent"],
            _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
            _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"],
            _components_tipster_offers_tipster_offers_component__WEBPACK_IMPORTED_MODULE_18__["TipsterOffersComponent"],
            _components_review_tip_list_review_tip_list_component__WEBPACK_IMPORTED_MODULE_19__["ReviewTipListComponent"],
            _components_review_tip_review_tip_component__WEBPACK_IMPORTED_MODULE_20__["ReviewTipComponent"],
            _components_search_search_component__WEBPACK_IMPORTED_MODULE_21__["SearchComponent"],
            _components_buy_tip_buy_tip_component__WEBPACK_IMPORTED_MODULE_22__["BuyTipComponent"],
            _components_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_23__["EditTeamComponent"],
            _components_edit_league_edit_league_component__WEBPACK_IMPORTED_MODULE_24__["EditLeagueComponent"],
            _components_view_tip_view_tip_component__WEBPACK_IMPORTED_MODULE_25__["ViewTipComponent"],
            _components_edit_leagues_edit_leagues_component__WEBPACK_IMPORTED_MODULE_26__["EditLeaguesComponent"],
            _components_search_league_search_league_component__WEBPACK_IMPORTED_MODULE_27__["SearchLeagueComponent"],
            _components_my_tips_my_tips_component__WEBPACK_IMPORTED_MODULE_28__["MyTipsComponent"],
            _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_29__["EditProfileComponent"],
            _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_30__["UserSettingsComponent"],
            _components_upgrade_pro_upgrade_pro_component__WEBPACK_IMPORTED_MODULE_31__["UpgradeProComponent"],
            _components_tip_details_tip_details_component__WEBPACK_IMPORTED_MODULE_32__["TipDetailsComponent"],
            _components_edit_sport_edit_sport_component__WEBPACK_IMPORTED_MODULE_33__["EditSportComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/add-league/add-league.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-league/add-league.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWxlYWd1ZS9hZGQtbGVhZ3VlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-league/add-league.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-league/add-league.component.ts ***!
  \***************************************************************/
/*! exports provided: AddLeagueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLeagueComponent", function() { return AddLeagueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");




let AddLeagueComponent = class AddLeagueComponent {
    constructor(restService) {
        this.restService = restService;
        this.league = {
            name: '',
            sport_id: '',
            alias: '',
            image_id: null
        };
        this.settings = _models_tips__WEBPACK_IMPORTED_MODULE_3__["site_settings"];
        this.sports = [];
        this.selectedFile = null;
    }
    ngOnInit() {
        this.restService.getSports().subscribe((sports) => {
            this.sports = sports;
        });
    }
    saveLeague() {
        this.restService.addLeague(this.league).subscribe((league) => {
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.onUpload();
    }
    onUpload() {
        this.restService.uploadImage(this.selectedFile, false).subscribe(image => {
            this.league.image_id = image.id;
        });
    }
};
AddLeagueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-league',
        template: __webpack_require__(/*! raw-loader!./add-league.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-league/add-league.component.html"),
        styles: [__webpack_require__(/*! ./add-league.component.css */ "./src/app/components/add-league/add-league.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"]])
], AddLeagueComponent);



/***/ }),

/***/ "./src/app/components/add-sport/add-sport.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/add-sport/add-sport.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXNwb3J0L2FkZC1zcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/add-sport/add-sport.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-sport/add-sport.component.ts ***!
  \*************************************************************/
/*! exports provided: AddSportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSportComponent", function() { return AddSportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");



let AddSportComponent = class AddSportComponent {
    constructor(restService) {
        this.restService = restService;
        this.name = '';
    }
    ngOnInit() {
    }
    onCreateSport() {
        this.restService.addSport({ name: this.name }).subscribe(sport => {
            console.log("Created a new sport");
        });
    }
};
AddSportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-sport',
        template: __webpack_require__(/*! raw-loader!./add-sport.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-sport/add-sport.component.html"),
        styles: [__webpack_require__(/*! ./add-sport.component.css */ "./src/app/components/add-sport/add-sport.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"]])
], AddSportComponent);



/***/ }),

/***/ "./src/app/components/add-team/add-team.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-team/add-team.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRlYW0vYWRkLXRlYW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-team/add-team.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-team/add-team.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeamComponent", function() { return AddTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");



let AddTeamComponent = class AddTeamComponent {
    constructor(restService) {
        this.restService = restService;
        this.classes = 'add-team';
        this.image = null;
        this.team = {
            sport_id: '',
            name: '',
            city: '',
            alias: '',
            abb: ''
        };
        this.selectedFile = null;
        //this.teamForm = new FormGroup({
        //		sport_id: new FormControl(null)
        //});
        //this.teamForm.controls['sport_id'].setValue('',{onlySelf: true});
    }
    ngOnInit() {
        this.restService.getSports().subscribe(sports => {
            sports.unshift({ id: "", name: "Select One" });
            this.sports = sports;
        });
    }
    onSaveTeam() {
        this.restService.addTeam(this.team).subscribe(team => {
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.onUpload();
    }
    onUpload() {
        this.restService.uploadImage(this.selectedFile, false).subscribe(image => {
            this.image = image;
            this.team.image_id = image.id;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddTeamComponent.prototype, "classes", void 0);
AddTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-team',
        template: __webpack_require__(/*! raw-loader!./add-team.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-team/add-team.component.html"),
        styles: [__webpack_require__(/*! ./add-team.component.css */ "./src/app/components/add-team/add-team.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"]])
], AddTeamComponent);



/***/ }),

/***/ "./src/app/components/add-tip/add-tip.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/add-tip/add-tip.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRpcC9hZGQtdGlwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-tip/add-tip.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/add-tip/add-tip.component.ts ***!
  \*********************************************************/
/*! exports provided: AddTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTipComponent", function() { return AddTipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddTipComponent = class AddTipComponent {
    constructor(tipService, router) {
        this.tipService = tipService;
        this.router = router;
        this.classes = 'add-tip';
        //addTipForm: FormGroup;
        this.leagues = [];
        this.league_teams = [];
        this.sports = [];
        this.currentSport = null;
        this.teams = [];
        this.image_result = null;
        this.image_promo = null;
        this.bet_types = [
            { type: 'LEFT_DRAW_RIGHT', description: 'LEFT,DRAW or RIGHT' },
            { type: 'LEFT_SCORE', description: 'Left Scores' },
            { type: 'RIGHT_SCORE', description: 'Right Scores' },
            { type: 'YES_NO', description: 'YES OR NO' },
            { type: 'CUSTOM', description: 'Custom' }
        ];
        this.bet_type_options = [];
        this.results_types = {
            LEFT_DRAW_RIGHT: [
                { value: "LEFT", description: "Left Wins" },
                { value: "DRAW", description: "Draw" },
                { value: "RIGHT", description: "Right Wins" }
            ],
            LEFT_SCORE: null,
            RIGHT_SCORE: null,
            YES_NO: [
                { value: "YES", description: "Yes" },
                { value: "NO", description: "No" }
            ],
            CUSTOM: null
        };
        this.tip = {
            user_id: 0,
            sport_id: '',
            league_id: 0,
            analysis_info: '',
            bet_type: 'CUSTOM',
            left_team_id: 0,
            right_team_id: 0,
            custom_left_team: '',
            custom_right_team: '',
            prediction_status: 'PENDING',
            media1_image_id: null,
            media2_image_id: null,
            price: 0,
            fullfilled: 0,
            result: 'CUSTOM',
            custom_result: '',
            event_start: new Date()
        };
        this.selectedFile = null;
        //this.addTipFormGroup= new FormGroup({
        //result: new FormControl('')
        //}); 
    }
    ngOnInit() {
        let user = this.tipService.getCurrentUser();
        if (user == null) {
            this.router.navigate(['/']);
            console.log("IS NULL");
        }
        else {
            this.tipService.getSports().subscribe(sports => this.sports = sports);
        }
    }
    onSportChange(sport_id) {
        if (sport_id == '') {
            this.leagues = [];
            this.teams = [];
            this.tip.league_id = 0;
            this.tip.left_team_id = 0;
            this.tip.right_team_id = 0;
            this.tip.result = 'CUSTOM';
        }
        else {
            this.tipService.getLeagues(sport_id).subscribe(leagues => {
                this.leagues = leagues;
                if (this.leagues.length == 0) {
                    this.teams = [];
                    this.tip.left_team_id = 0;
                    this.tip.right_team_id = 0;
                    this.tip.result = 'CUSTOM';
                }
            });
        }
    }
    onLeagueChange(league_id) {
        this.tipService.getTeams(league_id).subscribe(teams => {
            teams.unshift({
                id: 0,
                sport_id: '',
                name: 'Select One'
            });
            this.teams = teams;
            this.tip.result = 'CUSTOM';
        });
    }
    onLeftTeamChange(left_team_id) {
        this.tip.left_team_id = left_team_id;
    }
    onRightTeamChange(right_team_id) {
        this.tip.right_team_id = right_team_id;
    }
    onSaveTip() {
        this.tipService.saveTip(this.tip).subscribe(tip => {
            console.log("Saved tip");
            console.log("TIp", tip);
            this.router.navigate(['/view-tip', tip.id]);
        });
    }
    onBetTypeChange(bet_type) {
        console.log(bet_type);
        this.bet_type_options = this.results_types[bet_type];
        console.log(this.bet_type_options);
    }
    onBetResultChange(result) {
        console.log("Result is now", result);
        this.tip.result = result;
        console.log("tip is now", this.tip);
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.onUpload();
    }
    onEventStartChange(value) {
        let d = new Date(value);
        console.log("Date set", d);
        this.tip.event_start = d;
    }
    onUpload() {
        this.tipService.uploadImage(this.selectedFile, true).subscribe(image => {
            this.tip.media1_image_id = image.id;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddTipComponent.prototype, "classes", void 0);
AddTipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-tip',
        template: __webpack_require__(/*! raw-loader!./add-tip.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-tip/add-tip.component.html"),
        styles: [__webpack_require__(/*! ./add-tip.component.css */ "./src/app/components/add-tip/add-tip.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AddTipComponent);



/***/ }),

/***/ "./src/app/components/buy-tip/buy-tip.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/buy-tip/buy-tip.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.buy_button\n{\n\tmargin: 0 auto;\n\twidth: 80%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXktdGlwL2J1eS10aXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0NBRUMsY0FBYztDQUNkLFVBQVU7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5LXRpcC9idXktdGlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5idXlfYnV0dG9uXG57XG5cdG1hcmdpbjogMCBhdXRvO1xuXHR3aWR0aDogODAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/buy-tip/buy-tip.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/buy-tip/buy-tip.component.ts ***!
  \*********************************************************/
/*! exports provided: BuyTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyTipComponent", function() { return BuyTipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");







//#endregion
let BuyTipComponent = class BuyTipComponent {
    constructor(restService, router, route) {
        this.restService = restService;
        this.router = router;
        this.route = route;
        this.is_loading = true;
        this.tip_info = null;
        this.tip_id = 0;
        this.error = null;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(paramMap => {
            console.log("FOOO");
            this.tip_id = paramMap.get('tip_id') != null ? parseInt(paramMap.get('tip_id')) : 0;
            return this.restService.getUser('me').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(user => {
            if (user == null) {
                this.router.navigate(['/login-redirect', this.tip_id]);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(null);
            }
            console.log("GETTING tip info");
            return this.restService.getTipInfo(this.tip_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
                console.log("erro on getTipInfo", error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(null);
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(tip_infos => {
            console.log("FIltering tip_info", tip_infos);
            return tip_infos !== null;
        }))
            .subscribe(tip_infos => {
            console.log("ON SUBSCRIBER", tip_infos);
            this.is_loading = false;
            this.tip_info = tip_infos[0];
            let date = null;
            let zero = (z) => {
                if (z < 0)
                    return '0' + z;
                return '' + z;
            };
            let date_str = '';
            let tipDate = new Date(this.tip_info.tip.event_start);
            let currentDate = new Date();
            if ('bought' in this.tip_info && this.tip_info.bought == 1) {
                console.log("Tip is bought");
                this.router.navigate(['/view-tip/', this.tip_info.tip.id]);
            }
            else if (this.tip_info.tip.price == 0) {
                console.log("Price is 0 do nothing");
            }
            else if (tipDate > currentDate) {
                renderPaypalButton2(_models_tips__WEBPACK_IMPORTED_MODULE_6__["site_settings"].url_base, this.tip_info.tip);
            }
            console.log("Is loading false");
        }, error => {
            console.log("error catched on the subscriber", error);
        });
    }
    buyTip() {
        this.restService.buyFreeTip(this.tip_id).subscribe((tip) => {
            this.router.navigate(['/view-tip/', this.tip_id]);
        });
    }
};
BuyTipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buy-tip',
        template: __webpack_require__(/*! raw-loader!./buy-tip.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/buy-tip/buy-tip.component.html"),
        styles: [__webpack_require__(/*! ./buy-tip.component.css */ "./src/app/components/buy-tip/buy-tip.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], BuyTipComponent);



/***/ }),

/***/ "./src/app/components/edit-league/edit-league.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/edit-league/edit-league.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nimg\n{\n    width: 60px;\n\tmax-width: 320px;\n\tpadding-right: 10px;\n}\n\n.team_logo\n{\n\twidth: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LWxlYWd1ZS9lZGl0LWxlYWd1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSSxXQUFXO0NBQ2QsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTs7Q0FFQyxXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtbGVhZ3VlL2VkaXQtbGVhZ3VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltZ1xue1xuICAgIHdpZHRoOiA2MHB4O1xuXHRtYXgtd2lkdGg6IDMyMHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4udGVhbV9sb2dvXG57XG5cdHdpZHRoOiAzMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/edit-league/edit-league.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-league/edit-league.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditLeagueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLeagueComponent", function() { return EditLeagueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");






let EditLeagueComponent = class EditLeagueComponent {
    constructor(restService, router, route) {
        this.restService = restService;
        this.router = router;
        this.route = route;
        this.league = null;
        this.is_loading = true;
        this.teams = [];
        this.success = null;
        this.settings = _models_tips__WEBPACK_IMPORTED_MODULE_5__["site_settings"];
        this.selectedFile = null;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((params) => {
            console.log(params);
            let league_id = parseInt(params.get('league_id'));
            this.restService.getTeams(league_id).subscribe((teams) => {
                this.teams = teams;
            });
            return this.restService.getLeague(league_id);
        })).subscribe(league => {
            this.league = league;
            this.is_loading = false;
            console.log("Is loading false");
        });
    }
    updateLeague() {
        this.restService.updateLeague(this.league).subscribe((league) => {
            this.success = "league data updated";
            setTimeout(() => {
                this.league = league;
                this.success = null;
            }, 1500);
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.onUpload();
    }
    onUpload() {
        this.restService.uploadImage(this.selectedFile, false).subscribe(image => {
            this.league.image_id = image.id;
        });
    }
};
EditLeagueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-league',
        template: __webpack_require__(/*! raw-loader!./edit-league.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-league/edit-league.component.html"),
        styles: [__webpack_require__(/*! ./edit-league.component.css */ "./src/app/components/edit-league/edit-league.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], EditLeagueComponent);



/***/ }),

/***/ "./src/app/components/edit-leagues/edit-leagues.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-leagues/edit-leagues.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1sZWFndWVzL2VkaXQtbGVhZ3Vlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-leagues/edit-leagues.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-leagues/edit-leagues.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditLeaguesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLeaguesComponent", function() { return EditLeaguesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");





let EditLeaguesComponent = class EditLeaguesComponent {
    constructor(restService, router, route) {
        this.restService = restService;
        this.router = router;
        this.route = route;
        this.sport_id = 'Soccer';
        this.leagues = [];
        this.sports = [];
        this.is_loading = true;
        this.settings = _models_tips__WEBPACK_IMPORTED_MODULE_4__["site_settings"];
    }
    ngOnInit() {
        this.onSportChange(this.sport_id);
        this.restService.getSports().subscribe((sports) => {
            this.sports = sports;
        });
    }
    onSportChange(sport_id) {
        this.is_loading = true;
        this.sport_id = sport_id;
        this.restService.getLeagues(sport_id).subscribe((leagues) => {
            this.leagues = leagues;
            this.is_loading = false;
        });
    }
};
EditLeaguesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-leagues',
        template: __webpack_require__(/*! raw-loader!./edit-leagues.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-leagues/edit-leagues.component.html"),
        styles: [__webpack_require__(/*! ./edit-leagues.component.css */ "./src/app/components/edit-leagues/edit-leagues.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], EditLeaguesComponent);



/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.profile\n{\n   width:  200px;\n   height: 200px;\n   margin: 0 auto 30px auto;\n   display: block;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUcsYUFBYTtHQUNiLGFBQWE7R0FDYix3QkFBd0I7R0FDeEIsY0FBYztBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLnByb2ZpbGVcbntcbiAgIHdpZHRoOiAgMjAwcHg7XG4gICBoZWlnaHQ6IDIwMHB4O1xuICAgbWFyZ2luOiAwIGF1dG8gMzBweCBhdXRvO1xuICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");




let EditProfileComponent = class EditProfileComponent {
    constructor(restService) {
        this.restService = restService;
        this.is_loading = true;
        this.selectedFile = null;
        this.user = null;
        this.settings = _models_tips__WEBPACK_IMPORTED_MODULE_3__["site_settings"];
    }
    ngOnInit() {
        this.restService.getUser('me').subscribe((user) => {
            this.user = user;
            this.is_loading = false;
        });
    }
    save() {
        this.restService.updateUser(this.user).subscribe((user) => {
            this.user = user;
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.onUpload();
    }
    onUpload() {
        this.restService.uploadImage(this.selectedFile, false).subscribe(image => {
            this.user.image_id = image.id;
        });
    }
};
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-profile/edit-profile.component.html"),
        styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/components/edit-profile/edit-profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"]])
], EditProfileComponent);



/***/ }),

/***/ "./src/app/components/edit-sport/edit-sport.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/edit-sport/edit-sport.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1zcG9ydC9lZGl0LXNwb3J0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-sport/edit-sport.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-sport/edit-sport.component.ts ***!
  \***************************************************************/
/*! exports provided: EditSportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSportComponent", function() { return EditSportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");







let EditSportComponent = class EditSportComponent {
    constructor(restService, router, route, location) {
        this.restService = restService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.sport = null;
        this.is_loading = true;
        this.settings = _models_tips__WEBPACK_IMPORTED_MODULE_6__["site_settings"];
        this.selectedFile = null;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((params) => {
            let sport_id = parseInt(params.get('sport_id'));
            return this.restService.getSport(sport_id);
        }))
            .subscribe((sport) => {
            this.sport = sport;
            this.is_loading = false;
        });
    }
    save() {
        this.restService.updateSport(this.sport).subscribe((sport) => {
            setTimeout(() => {
                this.location.back();
            }, 1500);
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.onUpload();
    }
    onUpload() {
        this.restService.uploadImage(this.selectedFile, false).subscribe(image => {
            this.sport.image_id = image.id;
        });
    }
};
EditSportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-sport',
        template: __webpack_require__(/*! raw-loader!./edit-sport.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-sport/edit-sport.component.html"),
        styles: [__webpack_require__(/*! ./edit-sport.component.css */ "./src/app/components/edit-sport/edit-sport.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_4__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], EditSportComponent);



/***/ }),

/***/ "./src/app/components/edit-team/edit-team.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/edit-team/edit-team.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img\n{\n    width: 60px;\n\tmax-width: 320px;\n\tpadding-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXRlYW0vZWRpdC10ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztDQUNkLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtdGVhbS9lZGl0LXRlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ1xue1xuICAgIHdpZHRoOiA2MHB4O1xuXHRtYXgtd2lkdGg6IDMyMHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/edit-team/edit-team.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-team/edit-team.component.ts ***!
  \*************************************************************/
/*! exports provided: EditTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamComponent", function() { return EditTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");







let EditTeamComponent = class EditTeamComponent {
    constructor(restService, router, route, location) {
        this.restService = restService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.team = null;
        this.is_loading = true;
        this.settings = _models_tips__WEBPACK_IMPORTED_MODULE_6__["site_settings"];
        this.selectedFile = null;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((params) => {
            console.log(params);
            let team_id = params.get('team_id') != null ? parseInt(params.get('team_id')) : null;
            return this.restService.getTeam(team_id);
        })).subscribe(team => {
            this.is_loading = false;
            this.team = team;
        });
    }
    onSaveTeam() {
        this.restService.updateTeam(this.team).subscribe((team) => {
            setTimeout(() => {
                this.location.back();
            }, 1500);
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.onUpload();
    }
    onUpload() {
        this.restService.uploadImage(this.selectedFile, false).subscribe(image => {
            this.team.image_id = image.id;
        });
    }
};
EditTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-team',
        template: __webpack_require__(/*! raw-loader!./edit-team.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-team/edit-team.component.html"),
        styles: [__webpack_require__(/*! ./edit-team.component.css */ "./src/app/components/edit-team/edit-team.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_4__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], EditTeamComponent);



/***/ }),

/***/ "./src/app/components/index/index.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/index/index.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/components/index/index.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IndexComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(restService, router, activeRoute) {
        this.restService = restService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.email = '';
        this.password = '';
        this.tip_id = null;
    }
    ngOnInit() {
        this.activeRoute.paramMap.subscribe(paramMap => {
            console.log(paramMap);
            if (paramMap.get('tip_id')) {
                this.tip_id = paramMap.get('tip_id');
            }
            this.restService.getUser('me').subscribe(user => {
                this.doNavigate();
            });
        });
    }
    doNavigate() {
        if (this.tip_id === null) {
            this.router.navigate(['/my-tips']);
        }
        else {
            this.router.navigate(['/buy', this.tip_id]);
        }
    }
    doLogin() {
        this.restService.doLogin(this.email, this.password).subscribe(user => {
            this.doNavigate();
            console.log("Login SUccess");
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/logout/logout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/logout/logout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LogoutComponent = class LogoutComponent {
    constructor(restService, router) {
        this.restService = restService;
        this.router = router;
    }
    ngOnInit() {
        this.restService.logout().subscribe((result) => {
            this.router.navigate(['/']);
        });
    }
};
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/logout/logout.component.html"),
        styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/logout/logout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LogoutComponent);



/***/ }),

/***/ "./src/app/components/my-tips/my-tips.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/my-tips/my-tips.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktdGlwcy9teS10aXBzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/my-tips/my-tips.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/my-tips/my-tips.component.ts ***!
  \*********************************************************/
/*! exports provided: MyTipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTipsComponent", function() { return MyTipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyTipsComponent = class MyTipsComponent {
    constructor() {
        this.my_tips_search = {
            title: 'My Tips',
            authorized: true
        };
    }
    ngOnInit() {
    }
};
MyTipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-tips',
        template: __webpack_require__(/*! raw-loader!./my-tips.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/my-tips/my-tips.component.html"),
        styles: [__webpack_require__(/*! ./my-tips.component.css */ "./src/app/components/my-tips/my-tips.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyTipsComponent);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark\n{\n\tbackground-color: #212121;\n\tcolor: white;\n\theight: 50px;\n\tpadding: 0;\n}\n\n.dark a\n{\n  color: white;\n  font-size: 25px;\n  line-height: 50px;\n}\n\n.sports\n{\n   margin: 20px;\n}\n\n.dark a\n{\n\tpadding: 0 15px;\n}\n\n.main_logo\n{\n\twidth: 60px;\n}\n\n.nav-link\n{\n\tpadding: 5px;\n}\n\n.sport_logo\n{\n   width: 40px;\t\n}\n\n.sport-link\n{\n   color: gray;\n   font-weight: bolder;\n}\n\n.desktop\n{\n   display: none;\n}\n\n@media (min-width:750px )\n{\n\t.desktop\n\t{\n\t\tdisplay: initial;\n\t}\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFlBQVk7Q0FDWixVQUFVO0FBQ1g7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7O0dBRUcsWUFBWTtBQUNmOztBQUNBOztDQUVDLGVBQWU7QUFDaEI7O0FBRUE7O0NBRUMsV0FBVztBQUNaOztBQUNBOztDQUVDLFlBQVk7QUFDYjs7QUFDQTs7R0FFRyxXQUFXO0FBQ2Q7O0FBQ0E7O0dBRUcsV0FBVztHQUNYLG1CQUFtQjtBQUN0Qjs7QUFDQTs7R0FFRyxhQUFhO0FBQ2hCOztBQUVBOztDQUVDOztFQUVDLGdCQUFnQjtDQUNqQjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXJrXG57XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG5cdGNvbG9yOiB3aGl0ZTtcblx0aGVpZ2h0OiA1MHB4O1xuXHRwYWRkaW5nOiAwO1xufVxuXG4uZGFyayBhXG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cblxuLnNwb3J0c1xue1xuICAgbWFyZ2luOiAyMHB4O1xufVxuLmRhcmsgYVxue1xuXHRwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5tYWluX2xvZ29cbntcblx0d2lkdGg6IDYwcHg7XG59XG4ubmF2LWxpbmtcbntcblx0cGFkZGluZzogNXB4O1xufVxuLnNwb3J0X2xvZ29cbntcbiAgIHdpZHRoOiA0MHB4O1x0XG59XG4uc3BvcnQtbGlua1xue1xuICAgY29sb3I6IGdyYXk7XG4gICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmRlc2t0b3BcbntcbiAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjc1MHB4IClcbntcblx0LmRlc2t0b3Bcblx0e1xuXHRcdGRpc3BsYXk6IGluaXRpYWw7XG5cdH1cbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");





let NavigationComponent = class NavigationComponent {
    constructor(restService, router, route) {
        this.restService = restService;
        this.router = router;
        this.route = route;
        this.sport_list = [];
        this.league_list = [];
        this.user = null;
        this.settings = _models_tips__WEBPACK_IMPORTED_MODULE_4__["site_settings"];
        this.sport_id = null;
        this.team_id = null;
        this.league_id = null;
        this.team_name = null;
        this.user_id = null;
        this.user = null;
    }
    ngOnInit() {
        console.log("NAVIGATION AGAIN");
        this.restService.getUser('me').subscribe((user) => {
            console.log("GETTING USER");
            this.user = user;
        });
        this.restService.getSports().subscribe(sports => this.sport_list = sports);
        this.route.params.subscribe(parameters => {
            console.log(parameters);
        });
        //console.log( params );
        //this.user_id = 	params.get('user_id')!=null ? parseInt(params.get('user_id') ):null;
        //this.sport_id = params.get('sport_id');
        //this.team_id = params.get('team_id')!=null ? parseInt(params.get('team_id') ):null;
        //this.league_id = params.get('league_id')!==null ? parseInt(params.get('league_id')):null;
        //this.team_name = params.get('team_name');
        //			}
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], NavigationComponent);



/***/ }),

/***/ "./src/app/components/review-tip-list/review-tip-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/review-tip-list/review-tip-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.filters\n{\n\tbackground: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\n    margin: 16px 16px;\n\tpadding: 20px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXctdGlwLWxpc3QvcmV2aWV3LXRpcC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztDQUVDLG1CQUFtQjtJQUNoQixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtDQUNwQixhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jldmlldy10aXAtbGlzdC9yZXZpZXctdGlwLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZpbHRlcnNcbntcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbWFyZ2luOiAxNnB4IDE2cHg7XG5cdHBhZGRpbmc6IDIwcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/review-tip-list/review-tip-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/review-tip-list/review-tip-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReviewTipListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewTipListComponent", function() { return ReviewTipListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");



let ReviewTipListComponent = class ReviewTipListComponent {
    constructor(tipService) {
        this.tipService = tipService;
        this.tips = [];
        this.dateFilter = '';
        this.event_start = '';
    }
    ngOnInit() {
        this.tipService.getTipsInfoPending().subscribe(tip_infos => this.tips = tip_infos);
    }
    onChangeFilter(value) {
        this.dateFilter = value;
        let date = null;
        let zero = (z) => {
            if (z < 0)
                return '0' + z;
            return '' + z;
        };
        let date_str = '';
        if (value !== 'PENDING') {
            date = new Date(this.event_start + ' 00:00:00');
            console.log(date);
            date_str = date.getUTCFullYear() +
                '-' + zero(date.getUTCMonth() + 1) +
                '-' + zero(date.getUTCDate()) +
                ' ' + zero(date.getUTCHours()) +
                ':' + zero(date.getUTCMinutes()) +
                ':' + zero(date.getUTCSeconds());
        }
        switch (value) {
            case 'PENDING':
                this.tipService.getTipsInfoPending().subscribe(tip_infos => this.tips = tip_infos);
                break;
            case 'EVENT_DATE':
                this.tipService.getTipsInfoByEventDate(date_str).subscribe(tip_infos => this.tips = tip_infos);
                break;
            //case 'REVIEW_DATE': this.tipService.getTipsInfoByReviewDate(date_str).subscribe(tip_infos=>this.tips = tip_infos );	break;
        }
    }
};
ReviewTipListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-tip-list',
        template: __webpack_require__(/*! raw-loader!./review-tip-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/review-tip-list/review-tip-list.component.html"),
        styles: [__webpack_require__(/*! ./review-tip-list.component.css */ "./src/app/components/review-tip-list/review-tip-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"]])
], ReviewTipListComponent);



/***/ }),

/***/ "./src/app/components/review-tip/review-tip.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/review-tip/review-tip.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.row\n{\n\tbackground: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\n    margin: 16px 16px;\n}\n\n.row\n{\n\tpadding: 20px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXctdGlwL3Jldmlldy10aXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0NBRUMsbUJBQW1CO0lBQ2hCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsaUJBQWlCO0FBQ3JCOztBQUVBOztDQUVDLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jldmlldy10aXAvcmV2aWV3LXRpcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucm93XG57XG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1hcmdpbjogMTZweCAxNnB4O1xufVxuXG4ucm93XG57XG5cdHBhZGRpbmc6IDIwcHggMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/review-tip/review-tip.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/review-tip/review-tip.component.ts ***!
  \***************************************************************/
/*! exports provided: ReviewTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewTipComponent", function() { return ReviewTipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");



let ReviewTipComponent = class ReviewTipComponent {
    constructor(restService) {
        this.restService = restService;
    }
    ngOnInit() {
    }
    onChangePredictionStatus(value) {
        this.restService.updateTip({ id: this.tip_info.tip.id, prediction_status: value }).subscribe(result => {
            this.tip_info.tip.prediction_status = value;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ReviewTipComponent.prototype, "tip_info", void 0);
ReviewTipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-tip',
        template: __webpack_require__(/*! raw-loader!./review-tip.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/review-tip/review-tip.component.html"),
        styles: [__webpack_require__(/*! ./review-tip.component.css */ "./src/app/components/review-tip/review-tip.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"]])
], ReviewTipComponent);



/***/ }),

/***/ "./src/app/components/review-tips/review-tips.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/review-tips/review-tips.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3LXRpcHMvcmV2aWV3LXRpcHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/review-tips/review-tips.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/review-tips/review-tips.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReviewTipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewTipsComponent", function() { return ReviewTipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReviewTipsComponent = class ReviewTipsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReviewTipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-tips',
        template: __webpack_require__(/*! raw-loader!./review-tips.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/review-tips/review-tips.component.html"),
        styles: [__webpack_require__(/*! ./review-tips.component.css */ "./src/app/components/review-tips/review-tips.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ReviewTipsComponent);



/***/ }),

/***/ "./src/app/components/search-league/search-league.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/search-league/search-league.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWxlYWd1ZS9zZWFyY2gtbGVhZ3VlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/search-league/search-league.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/search-league/search-league.component.ts ***!
  \*********************************************************************/
/*! exports provided: SearchLeagueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLeagueComponent", function() { return SearchLeagueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchLeagueComponent = class SearchLeagueComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchLeagueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-league',
        template: __webpack_require__(/*! raw-loader!./search-league.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search-league/search-league.component.html"),
        styles: [__webpack_require__(/*! ./search-league.component.css */ "./src/app/components/search-league/search-league.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchLeagueComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-team\n{\n    text-align: right;\t\n}\n\n.left_team\n,right_team\n{\n\twidth: 100px;\n}\n\n.league_logo\n{\n    width: 60px;\n\tpadding: 10px;\n}\n\n.item-table\n{\n    background: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\n    margin-bottom: 16px;\n}\n\n.item-component\n{\n\tpadding: 10px;\n\tfont-weight: 10px;\n}\n\n.item-component:not(:first-child)\n{\n\tborder-top: 1px solid #f3f3f3;\n}\n\n.buy\n{\n    width: 40px;\n}\n\n.team_name\n{\n   font-size: 12px;\t\n}\n\n.buy img\n{\n   width: 30px;\n}\n\n.search_links\n{\n   padding-bottom: 15px;\t\n}\n\n.date span\n{\n    font-size: 12px;\t\n}\n\n.league\n{\n}\n\nimg.logo\n{  \n\twidth: 45px;\n}\n\nimg.logo.left\n{\n\t\n}\n\nimg.logo.right\n{\n\n}\n\n.user_name\n{\n    font-size: 12px;\t\n\tfont-color: #999;\n\ttext-align: center;\n}\n\n.user_content>div\n{\n\tmargin: 0 auto;\t\n}\n\n.user_content\n{\n\twidth: 60px;\n}\n\n.user_logo\n{\n\tcolor: white;\n\twidth: 50px;\n\theight: 50px;\n\tbackground-color: #000000;\n\tborder-radius: 25px;\n}\n\n.user_logo>img\n{\n\twidth: 100%;\n}\n\n.user_stats \n{\n\ttext-align: center;\n}\n\n.tip-row\n{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-content: center;\n    align-items: stretch;\n}\n\n.tip-row>div\n{\n\torder: 0;\n\tflex: 1 1 auto;\n\talign-self: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBOzs7Q0FHQyxZQUFZO0FBQ2I7O0FBRUE7O0lBRUksV0FBVztDQUNkLGFBQWE7QUFDZDs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxtQkFBbUI7QUFDdkI7O0FBQ0E7O0NBRUMsYUFBYTtDQUNiLGlCQUFpQjtBQUNsQjs7QUFFQTs7Q0FFQyw2QkFBNkI7QUFDOUI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztHQUVHLGVBQWU7QUFDbEI7O0FBQ0E7O0dBRUcsV0FBVztBQUNkOztBQUNBOztHQUVHLG9CQUFvQjtBQUN2Qjs7QUFDQTs7SUFFSSxlQUFlO0FBQ25COztBQUNBOztBQUVBOztBQUVBOztDQUVDLFdBQVc7QUFDWjs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUNBOztJQUVJLGVBQWU7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxjQUFjO0FBQ2Y7O0FBQ0E7O0NBRUMsV0FBVztBQUNaOztBQUNBOztDQUVDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixtQkFBbUI7QUFDcEI7O0FBQ0E7O0NBRUMsV0FBVztBQUNaOztBQUNBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFHQTs7SUFJSSxhQUFhO0lBR2IsbUJBQW1CO0lBR25CLGlCQUFpQjtJQUdqQix1QkFBdUI7SUFHdkIscUJBQXFCO0lBR3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7Q0FJQyxRQUFRO0NBR1IsY0FBYztDQUdkLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0LXRlYW1cbntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcdFxufVxuXG4ubGVmdF90ZWFtXG4scmlnaHRfdGVhbVxue1xuXHR3aWR0aDogMTAwcHg7XG59XG5cbi5sZWFndWVfbG9nb1xue1xuICAgIHdpZHRoOiA2MHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuXG4uaXRlbS10YWJsZVxue1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uaXRlbS1jb21wb25lbnRcbntcblx0cGFkZGluZzogMTBweDtcblx0Zm9udC13ZWlnaHQ6IDEwcHg7XG59XG5cbi5pdGVtLWNvbXBvbmVudDpub3QoOmZpcnN0LWNoaWxkKVxue1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2YzZjNmMztcbn1cblxuLmJ1eVxue1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4udGVhbV9uYW1lXG57XG4gICBmb250LXNpemU6IDEycHg7XHRcbn1cbi5idXkgaW1nXG57XG4gICB3aWR0aDogMzBweDtcbn1cbi5zZWFyY2hfbGlua3NcbntcbiAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1x0XG59XG4uZGF0ZSBzcGFuXG57XG4gICAgZm9udC1zaXplOiAxMnB4O1x0XG59XG4ubGVhZ3VlXG57XG59XG5cbmltZy5sb2dvXG57ICBcblx0d2lkdGg6IDQ1cHg7XG59XG5cbmltZy5sb2dvLmxlZnRcbntcblx0XG59XG5cbmltZy5sb2dvLnJpZ2h0XG57XG5cbn1cbi51c2VyX25hbWVcbntcbiAgICBmb250LXNpemU6IDEycHg7XHRcblx0Zm9udC1jb2xvcjogIzk5OTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlcl9jb250ZW50PmRpdlxue1xuXHRtYXJnaW46IDAgYXV0bztcdFxufVxuLnVzZXJfY29udGVudFxue1xuXHR3aWR0aDogNjBweDtcbn1cbi51c2VyX2xvZ29cbntcblx0Y29sb3I6IHdoaXRlO1xuXHR3aWR0aDogNTBweDtcblx0aGVpZ2h0OiA1MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLnVzZXJfbG9nbz5pbWdcbntcblx0d2lkdGg6IDEwMCU7XG59XG4udXNlcl9zdGF0cyBcbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi50aXAtcm93XG57XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi50aXAtcm93PmRpdlxue1xuXHQtd2Via2l0LW9yZGVyOiAwO1xuXHQtbXMtZmxleC1vcmRlcjogMDtcblx0b3JkZXI6IDA7XG5cdC13ZWJraXQtZmxleDogMSAxIGF1dG87XG5cdC1tcy1mbGV4OiAxIDEgYXV0bztcblx0ZmxleDogMSAxIGF1dG87XG5cdC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcblx0LW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0bztcblx0YWxpZ24tc2VsZjogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");






let SearchComponent = class SearchComponent {
    constructor(restService, router, route) {
        this.restService = restService;
        this.router = router;
        this.route = route;
        this.settings = _models_tips__WEBPACK_IMPORTED_MODULE_5__["site_settings"];
        this.title = '';
        this.is_loading = true;
        this.tips = [];
        this.league_list = [];
        this.sport_list = [];
        this.user_id = null;
        this.sport_id = null;
        this.team_id = null;
        this.league_id = null;
        this.team_name = null;
    }
    ngOnInit() {
        console.log('Loading Again');
        this.restService.getSports().subscribe(sports => this.sport_list = sports);
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((params) => {
            this.user_id = params.get('user_id') != null ? parseInt(params.get('user_id')) : null;
            this.sport_id = params.get('sport_id');
            this.team_id = params.get('team_id') != null ? parseInt(params.get('team_id')) : null;
            this.league_id = params.get('league_id') !== null ? parseInt(params.get('league_id')) : null;
            this.team_name = params.get('team_name');
            if (this.sport_id) {
                this.restService.getLeagues(this.sport_id).subscribe((leagues) => {
                    this.league_list = leagues.filter((i, index) => index < 4);
                });
            }
            return this.restService.search(this.user_id, this.sport_id, this.team_id, this.league_id, this.team_name, this.restService.getCurrentDateString(), false);
        })).subscribe(tip_infos => {
            this.tips = tip_infos;
            this.is_loading = false;
            console.log(this.tips);
            console.log("Is loading false");
        });
    }
    onChangeSport(sport_id) {
        this.is_loading = true;
        this.sport_id = sport_id;
        this.restService.getLeagues(sport_id).subscribe(leagues => this.league_list = leagues.filter((l, i) => i < 4));
        this.league_id = null;
        this.restService.search(this.user_id, this.sport_id, this.team_id, this.league_id, this.team_name, this.restService.getCurrentDateString(), false).subscribe(tip_infos => {
            this.tips = tip_infos;
            this.is_loading = false;
            console.log("tips has now", this.tips);
            console.log("Is loading false");
            console.log(this.tips);
        });
    }
    onChangeLeague(league_id) {
        this.league_id = league_id;
        this.is_loading = true;
        this.restService.search(this.user_id, this.sport_id, this.team_id, this.league_id, this.team_name, this.restService.getCurrentDateString(), false).subscribe(tip_infos => {
            this.tips = tip_infos;
            this.is_loading = false;
            console.log("tips has now", this.tips);
            console.log("Is loading false");
        });
    }
};
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");




let SignupComponent = class SignupComponent {
    constructor(tipService, router) {
        this.tipService = tipService;
        this.router = router;
        this.classes = 'create';
        this.name = '';
        this.email = '';
        this.password = '';
        this.password_confirmation = '';
    }
    ngOnInit() {
    }
    createAccount() {
        this.tipService.createAccount({ name: this.name, email: this.email, password: this.password, password_confirmation: this.password_confirmation, type: 'TIPSTER' }).subscribe(user => {
            this.router.navigate(['/my-tips']);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SignupComponent.prototype, "classes", void 0);
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_3__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/components/tip-details/tip-details.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/tip-details/tip-details.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo.left\n,.logo.right\n{\n\twidth: 110px;\n}\n\n\n.prediction_status\n{\n    font-size: 40px;\n    color: goldenrod;\n\ttext-align: center;\n\tmargin-top: 30px;\n\tmargin-bottom: 30px;\n}\n\n\n.text-small\n{\n\tfont-size: 9px;\n}\n\n\n.text-big\n{\n\tfont-size: 30px;\n\tfont-weight: bold;\n}\n\n\n.user_logo img\n{\n\twidth: 50px;\n\theight: 50px;\n}\n\n\n.result\n{\n\tfont-weight: bold;\n\tfont-size: 20px;\n}\n\n\n.details\n{\n\tmargin: 20px auto;\n}\n\n\n.user-row\n{\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXAtZGV0YWlscy90aXAtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Q0FHQyxZQUFZO0FBQ2I7OztBQUdBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7OztBQUVBOztDQUVDLGNBQWM7QUFDZjs7O0FBRUE7O0NBRUMsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7O0FBRUE7O0NBRUMsV0FBVztDQUNYLFlBQVk7QUFDYjs7O0FBRUE7O0NBRUMsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7OztBQUVBOztDQUVDLGlCQUFpQjtBQUNsQjs7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpcC1kZXRhaWxzL3RpcC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby5sZWZ0XG4sLmxvZ28ucmlnaHRcbntcblx0d2lkdGg6IDExMHB4O1xufVxuXG5cbi5wcmVkaWN0aW9uX3N0YXR1c1xue1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogZ29sZGVucm9kO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdG1hcmdpbi10b3A6IDMwcHg7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50ZXh0LXNtYWxsXG57XG5cdGZvbnQtc2l6ZTogOXB4O1xufVxuXG4udGV4dC1iaWdcbntcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnVzZXJfbG9nbyBpbWdcbntcblx0d2lkdGg6IDUwcHg7XG5cdGhlaWdodDogNTBweDtcbn1cblxuLnJlc3VsdFxue1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4uZGV0YWlsc1xue1xuXHRtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLnVzZXItcm93XG57XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/tip-details/tip-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/tip-details/tip-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: TipDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipDetailsComponent", function() { return TipDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");



let TipDetailsComponent = class TipDetailsComponent {
    constructor() {
        this.settings = _models_tips__WEBPACK_IMPORTED_MODULE_2__["site_settings"];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TipDetailsComponent.prototype, "tip_info", void 0);
TipDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tip-details',
        template: __webpack_require__(/*! raw-loader!./tip-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tip-details/tip-details.component.html"),
        styles: [__webpack_require__(/*! ./tip-details.component.css */ "./src/app/components/tip-details/tip-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TipDetailsComponent);



/***/ }),

/***/ "./src/app/components/tips-list/tips-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/tips-list/tips-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-team\n{\n    text-align: right;\t\n}\n\n.left_team\n,right_team\n{\n\twidth: 100px;\n}\n\n.league_logo\n{\n    width: 60px;\n\tpadding: 10px;\n}\n\n.item-table\n{\n    background: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\n    margin-bottom: 16px;\n}\n\n.item-component\n{\n\tpadding: 10px;\n\tfont-weight: 10px;\n}\n\n.item-component:not(:first-child)\n{\n\tborder-top: 1px solid #f3f3f3;\n}\n\n.buy\n{\n    width: 40px;\n}\n\n.team_name\n{\n   font-size: 12px;\t\n}\n\n.buy img\n{\n   width: 30px;\n}\n\n.search_links\n{\n   padding-bottom: 15px;\t\n}\n\n.date span\n{\n    font-size: 12px;\t\n}\n\n.league\n{\n}\n\nimg.logo\n{  \n\twidth: 45px;\n}\n\nimg.logo.left\n{\n\t\n}\n\nimg.logo.right\n{\n\n}\n\n.user_name\n{\n    font-size: 12px;\t\n\tfont-color: #999;\n\ttext-align: center;\n}\n\n.user_content>div\n{\n\tmargin: 0 auto;\t\n}\n\n.user_content\n{\n\twidth: 60px;\n}\n\n.user_logo\n{\n\tcolor: white;\n\twidth: 50px;\n\theight: 50px;\n\tbackground-color: #000000;\n\tborder-radius: 25px;\n}\n\n.user_logo>img\n{\n\twidth: 100%;\n}\n\n.user_stats \n{\n\ttext-align: center;\n}\n\n.tip-row\n{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-content: center;\n    align-items: stretch;\n}\n\n.tip-row>div\n{\n\torder: 0;\n\tflex: 1 1 auto;\n\talign-self: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXBzLWxpc3QvdGlwcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBOzs7Q0FHQyxZQUFZO0FBQ2I7O0FBRUE7O0lBRUksV0FBVztDQUNkLGFBQWE7QUFDZDs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxtQkFBbUI7QUFDdkI7O0FBQ0E7O0NBRUMsYUFBYTtDQUNiLGlCQUFpQjtBQUNsQjs7QUFFQTs7Q0FFQyw2QkFBNkI7QUFDOUI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztHQUVHLGVBQWU7QUFDbEI7O0FBQ0E7O0dBRUcsV0FBVztBQUNkOztBQUNBOztHQUVHLG9CQUFvQjtBQUN2Qjs7QUFDQTs7SUFFSSxlQUFlO0FBQ25COztBQUNBOztBQUVBOztBQUVBOztDQUVDLFdBQVc7QUFDWjs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUNBOztJQUVJLGVBQWU7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxjQUFjO0FBQ2Y7O0FBQ0E7O0NBRUMsV0FBVztBQUNaOztBQUNBOztDQUVDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixtQkFBbUI7QUFDcEI7O0FBQ0E7O0NBRUMsV0FBVztBQUNaOztBQUNBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFHQTs7SUFJSSxhQUFhO0lBR2IsbUJBQW1CO0lBR25CLGlCQUFpQjtJQUdqQix1QkFBdUI7SUFHdkIscUJBQXFCO0lBR3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7Q0FJQyxRQUFRO0NBR1IsY0FBYztDQUdkLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlwcy1saXN0L3RpcHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0LXRlYW1cbntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcdFxufVxuXG4ubGVmdF90ZWFtXG4scmlnaHRfdGVhbVxue1xuXHR3aWR0aDogMTAwcHg7XG59XG5cbi5sZWFndWVfbG9nb1xue1xuICAgIHdpZHRoOiA2MHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuXG4uaXRlbS10YWJsZVxue1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uaXRlbS1jb21wb25lbnRcbntcblx0cGFkZGluZzogMTBweDtcblx0Zm9udC13ZWlnaHQ6IDEwcHg7XG59XG5cbi5pdGVtLWNvbXBvbmVudDpub3QoOmZpcnN0LWNoaWxkKVxue1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2YzZjNmMztcbn1cblxuLmJ1eVxue1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4udGVhbV9uYW1lXG57XG4gICBmb250LXNpemU6IDEycHg7XHRcbn1cbi5idXkgaW1nXG57XG4gICB3aWR0aDogMzBweDtcbn1cbi5zZWFyY2hfbGlua3NcbntcbiAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1x0XG59XG4uZGF0ZSBzcGFuXG57XG4gICAgZm9udC1zaXplOiAxMnB4O1x0XG59XG4ubGVhZ3VlXG57XG59XG5cbmltZy5sb2dvXG57ICBcblx0d2lkdGg6IDQ1cHg7XG59XG5cbmltZy5sb2dvLmxlZnRcbntcblx0XG59XG5cbmltZy5sb2dvLnJpZ2h0XG57XG5cbn1cbi51c2VyX25hbWVcbntcbiAgICBmb250LXNpemU6IDEycHg7XHRcblx0Zm9udC1jb2xvcjogIzk5OTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlcl9jb250ZW50PmRpdlxue1xuXHRtYXJnaW46IDAgYXV0bztcdFxufVxuLnVzZXJfY29udGVudFxue1xuXHR3aWR0aDogNjBweDtcbn1cbi51c2VyX2xvZ29cbntcblx0Y29sb3I6IHdoaXRlO1xuXHR3aWR0aDogNTBweDtcblx0aGVpZ2h0OiA1MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLnVzZXJfbG9nbz5pbWdcbntcblx0d2lkdGg6IDEwMCU7XG59XG4udXNlcl9zdGF0cyBcbntcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi50aXAtcm93XG57XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi50aXAtcm93PmRpdlxue1xuXHQtd2Via2l0LW9yZGVyOiAwO1xuXHQtbXMtZmxleC1vcmRlcjogMDtcblx0b3JkZXI6IDA7XG5cdC13ZWJraXQtZmxleDogMSAxIGF1dG87XG5cdC1tcy1mbGV4OiAxIDEgYXV0bztcblx0ZmxleDogMSAxIGF1dG87XG5cdC13ZWJraXQtYWxpZ24tc2VsZjogYXV0bztcblx0LW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0bztcblx0YWxpZ24tc2VsZjogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/tips-list/tips-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tips-list/tips-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TipsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsListComponent", function() { return TipsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");




let TipsListComponent = class TipsListComponent {
    constructor(restService) {
        this.restService = restService;
        this.is_loading = true;
        this.tips = [];
        this.settings = _models_tips__WEBPACK_IMPORTED_MODULE_3__["site_settings"];
        this.title = '';
    }
    set search(search) {
        this.title = search.title ? search.title : '';
        this.restService.makeSearch(search).subscribe((tips_info) => {
            this.is_loading = false;
            this.tips = tips_info;
        });
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], TipsListComponent.prototype, "search", null);
TipsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tips-list',
        template: __webpack_require__(/*! raw-loader!./tips-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tips-list/tips-list.component.html"),
        styles: [__webpack_require__(/*! ./tips-list.component.css */ "./src/app/components/tips-list/tips-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"]])
], TipsListComponent);



/***/ }),

/***/ "./src/app/components/tipster-offers/tipster-offers.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/tipster-offers/tipster-offers.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-list\n{\n    background: #ffffff;\n    border-radius: 10px;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);\n    margin-bottom: 16px;\n}\n\napp-tip-item>div\n{\n\tborder-top: 1px solid #e6e4e4;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXBzdGVyLW9mZmVycy90aXBzdGVyLW9mZmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLG1CQUFtQjtBQUN2Qjs7QUFFQTs7Q0FFQyw2QkFBNkI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpcHN0ZXItb2ZmZXJzL3RpcHN0ZXItb2ZmZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1saXN0XG57XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuYXBwLXRpcC1pdGVtPmRpdlxue1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTRlNDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/tipster-offers/tipster-offers.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/tipster-offers/tipster-offers.component.ts ***!
  \***********************************************************************/
/*! exports provided: TipsterOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsterOffersComponent", function() { return TipsterOffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");




let TipsterOffersComponent = class TipsterOffersComponent {
    constructor(restService, router) {
        this.restService = restService;
        this.router = router;
        this.tip_infos = [];
    }
    ngOnInit() {
        this.restService.makeSearch({ event_start: this.restService.getCurrentDateString(), authorized: false }).subscribe(tip_infos => this.tip_infos = tip_infos);
    }
};
TipsterOffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tipster-offers',
        template: __webpack_require__(/*! raw-loader!./tipster-offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/tipster-offers/tipster-offers.component.html"),
        styles: [__webpack_require__(/*! ./tipster-offers.component.css */ "./src/app/components/tipster-offers/tipster-offers.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_3__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TipsterOffersComponent);



/***/ }),

/***/ "./src/app/components/upgrade-pro/upgrade-pro.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/upgrade-pro/upgrade-pro.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBncmFkZS1wcm8vdXBncmFkZS1wcm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/upgrade-pro/upgrade-pro.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/upgrade-pro/upgrade-pro.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpgradeProComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeProComponent", function() { return UpgradeProComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");




//#endregion
let UpgradeProComponent = class UpgradeProComponent {
    constructor(restService) {
        this.restService = restService;
        this.user = null;
        this.is_loading = true;
    }
    ngOnInit() {
        this.restService.getUser('me').subscribe(user => {
            this.user = user;
            renderPaypalButtonSubscription(_models_tips__WEBPACK_IMPORTED_MODULE_2__["site_settings"].url_base, user);
            this.is_loading = false;
        });
    }
};
UpgradeProComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upgrade-pro',
        template: __webpack_require__(/*! raw-loader!./upgrade-pro.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/upgrade-pro/upgrade-pro.component.html"),
        styles: [__webpack_require__(/*! ./upgrade-pro.component.css */ "./src/app/components/upgrade-pro/upgrade-pro.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_3__["TipRestService"]])
], UpgradeProComponent);



/***/ }),

/***/ "./src/app/components/user-settings/user-settings.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/user-settings/user-settings.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a,\na:visited,\na:active,\na:hover\n{\n\tcolor: #666;\n\tfont-weight: bolder;\n\tdisplay: block;\n\tcursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXNldHRpbmdzL3VzZXItc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXNldHRpbmdzL3VzZXItc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEsXG5hOnZpc2l0ZWQsXG5hOmFjdGl2ZSxcbmE6aG92ZXJcbntcblx0Y29sb3I6ICM2NjY7XG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user-settings/user-settings.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-settings/user-settings.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function() { return UserSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserSettingsComponent = class UserSettingsComponent {
    constructor(restService, router) {
        this.restService = restService;
        this.router = router;
        this.user = null;
        this.is_loading = true;
    }
    ngOnInit() {
        this.restService.getUser('me').subscribe(user => {
            this.is_loading = false;
            this.user = user;
        }, error => {
            this.router.navigate(['/']);
        });
    }
};
UserSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-settings',
        template: __webpack_require__(/*! raw-loader!./user-settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-settings/user-settings.component.html"),
        styles: [__webpack_require__(/*! ./user-settings.component.css */ "./src/app/components/user-settings/user-settings.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], UserSettingsComponent);



/***/ }),

/***/ "./src/app/components/view-tip/view-tip.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/view-tip/view-tip.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy10aXAvdmlldy10aXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/view-tip/view-tip.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/view-tip/view-tip.component.ts ***!
  \***********************************************************/
/*! exports provided: ViewTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTipComponent", function() { return ViewTipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tip-rest.service */ "./src/app/services/tip-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/tips */ "./src/app/models/tips.ts");






let ViewTipComponent = class ViewTipComponent {
    constructor(restService, router, route) {
        this.restService = restService;
        this.router = router;
        this.route = route;
        this.settings = _models_tips__WEBPACK_IMPORTED_MODULE_5__["site_settings"];
        this.tip_info = null;
        this.is_loading = true;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((params) => {
            console.log(params);
            let tip_id = params.get('tip_id') != null ? parseInt(params.get('tip_id')) : null;
            return this.restService.getTipInfo(tip_id);
        })).subscribe((tip_infos) => {
            if (tip_infos.length == 0) {
                return;
            }
            this.is_loading = false;
            this.tip_info = tip_infos[0];
        });
    }
};
ViewTipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-tip',
        template: __webpack_require__(/*! raw-loader!./view-tip.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/view-tip/view-tip.component.html"),
        styles: [__webpack_require__(/*! ./view-tip.component.css */ "./src/app/components/view-tip/view-tip.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tip_rest_service__WEBPACK_IMPORTED_MODULE_2__["TipRestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ViewTipComponent);



/***/ }),

/***/ "./src/app/models/tips.ts":
/*!********************************!*\
  !*** ./src/app/models/tips.ts ***!
  \********************************/
/*! exports provided: site_settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "site_settings", function() { return site_settings; });
let site_settings = {
    //url_base : 'http://192.168.43.136'
    //url_base : 'http://127.0.0.1'
    url_base: 'http://thepickzone.com/api'
};


/***/ }),

/***/ "./src/app/services/tip-rest.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/tip-rest.service.ts ***!
  \**********************************************/
/*! exports provided: TipRestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipRestService", function() { return TipRestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_tips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/tips */ "./src/app/models/tips.ts");




let TipRestService = class TipRestService {
    constructor(http) {
        this.http = http;
        this.urlBase = _models_tips__WEBPACK_IMPORTED_MODULE_3__["site_settings"].url_base;
        this.user = null;
        if (window.location.hostname == 'thepickzone.com')
            this.urlBase = '/api';
    }
    addSport(sport) {
        return this.http.post(`${this.urlBase}/sport.php`, sport, { withCredentials: true });
    }
    buyFreeTip(tip_id) {
        return this.http.post(`${this.urlBase}/buy.php`, { tip_id: tip_id }, { withCredentials: true });
    }
    getSports() {
        return this.http.get(`${this.urlBase}/sport.php`);
    }
    getSport(sport_id) {
        return this.http.get(`${this.urlBase}/sport.php?id=${sport_id}`);
    }
    buy_tip(tip_id) {
        return this.http.get(`${this.urlBase}/buy.php?tip_id=${tip_id}`, { withCredentials: true });
    }
    getCurrentUser() {
        return this.user;
    }
    getUser(user_id) {
        let result = this.http.get(`${this.urlBase}/user.php?id=${user_id}`, { withCredentials: true });
        result.subscribe(user => {
            if (user_id == 'me') {
                console.log("INIT USER");
                this.user = user;
            }
        });
        return result;
    }
    getLeagues(sport_id) {
        return this.http.get(`${this.urlBase}/league.php?sport_id=${sport_id}`);
    }
    getLeague(id) {
        return this.http.get(`${this.urlBase}/league.php?id=${id}`);
    }
    addLeague(league) {
        return this.http.post(`${this.urlBase}/league.php`, league, { withCredentials: true });
    }
    addTeam(team) {
        return this.http.post(`${this.urlBase}/team.php`, team, { withCredentials: true });
    }
    getTeam(id) {
        return this.http.get(`${this.urlBase}/team.php?id=${id}`);
    }
    getTeams(league_id) {
        return this.http.get(`${this.urlBase}/team.php?league_id=${league_id}`, { withCredentials: true });
    }
    updateLeague(league) {
        return this.http.put(`${this.urlBase}/league.php?id=${league.id}`, league, { withCredentials: true });
    }
    updateTeam(team) {
        return this.http.put(`${this.urlBase}/team.php?id=${team.id}`, team, { withCredentials: true });
    }
    updateTip(tip) {
        return this.http.put(`${this.urlBase}/tip.php?id=${tip.id}`, tip, { withCredentials: true });
    }
    updateSport(sport) {
        return this.http.put(`${this.urlBase}/sport.php?id=${sport.id}`, sport, { withCredentials: true });
    }
    saveTip(tip) {
        if (tip.left_team_id == 0)
            delete tip.left_team_id;
        if (tip.right_team_id == 0)
            delete tip.right_team_id;
        return this.http.post(`${this.urlBase}/tip.php`, tip, { withCredentials: true });
    }
    doLogin(email, password) {
        let result = this.http.post(`${this.urlBase}/login.php`, { email, password }, { withCredentials: true });
        result.subscribe(user => {
            this.user = user;
        });
        return result;
    }
    logout() {
        console.log("Login out");
        let result = this.http.get(`${this.urlBase}/logout.php`, { withCredentials: true });
        result.subscribe(result => {
            this.user = null;
        });
        return result;
    }
    updateUser(user) {
        return this.http.put(`${this.urlBase}/user.php`, user, { withCredentials: true });
    }
    makeSearch(search) {
        console.log("SEARCH OBJECT IS", search);
        let cp_search = {};
        for (let z in search) {
            if (search[z] != null)
                cp_search[z] = search[z];
        }
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if ('user_id' in cp_search)
            params = params.append('user_id', '' + cp_search.user_id);
        if ('sport_id' in cp_search)
            params = params.append('sport_id', '' + cp_search.sport_id);
        if ('team_id' in cp_search)
            params = params.append('team_id', '' + cp_search.team_id);
        if ('league_id' in cp_search)
            params = params.append('league_id', '' + cp_search.league_id);
        if ('event_start' in cp_search)
            params = params.append('event_start', '' + cp_search.event_start);
        let authorized = 'authorized' in search ? search.authorized : false;
        return this.http.get(`${this.urlBase}/tip_info.php`, { params: params, withCredentials: authorized });
        //return this.search(search.user_id, search.sport_id, search.team_id, search.league_id, search.team_name,search.event_start, search.authorized );
    }
    search(user_id, sport_id, team_id, league_id, team_name, start, authorized) {
        console.log("START IS ", start);
        return this.makeSearch({
            user_id: user_id,
            sport_id: sport_id,
            league_id: league_id,
            team_id: team_id,
            event_start: start,
            authorized: authorized
        });
    }
    getTipInfo(tip_id) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('tip_id', tip_id);
        return this.http.get(`${this.urlBase}/tip_info.php`, { params: params, withCredentials: true });
    }
    getTipsInfoByIds(tip_ids) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('tip_id', tip_ids.join(','));
        return this.http.get(`${this.urlBase}/tip_info.php`, { params: params, withCredentials: true });
    }
    getCurrentDateString() {
        let zero = (z) => {
            if (z < 10)
                return '0' + z;
            return '' + z;
        };
        let date = new Date();
        return date.getUTCFullYear() +
            '-' + zero(date.getUTCMonth() + 1) +
            '-' + zero(date.getUTCDate()) +
            ' ' + zero(date.getUTCHours()) +
            ':' + zero(date.getUTCMinutes()) +
            ':' + zero(date.getUTCSeconds());
    }
    getTipInfoNexts() {
        return this.getTipsInfoByEventDate(this.getCurrentDateString());
    }
    getTipsInfoByEventDate(date) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('event_start', date);
        return this.http.get(`${this.urlBase}/tip_info.php`, { params: params, withCredentials: true });
    }
    getTipsInfoPending() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('prediction_status', 'PENDING');
        return this.http.get(`${this.urlBase}/tip_info.php`, { params: params, withCredentials: true });
    }
    getTipsInfo() {
        return this.http.get(`${this.urlBase}/tip_info.php`, { withCredentials: true });
    }
    createAccount(user) {
        return this.http.post(`${this.urlBase}/user.php`, user, { withCredentials: true });
    }
    uploadImage(file, is_private) {
        let fd = new FormData();
        fd.append('image', file, file.name);
        fd.append('is_private', is_private ? '1' : '0');
        return this.http.post(`${this.urlBase}/image.php`, fd, { withCredentials: true });
    }
};
TipRestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TipRestService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nextor/Projects/tip-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map