(function() {
  jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

  jQuery.sap.require("sap.ui.core.routing.Router");

  jQuery.sap.declare("com.mitsuruog.openui5.odata.Router");

  com.mitsuruog.openui5.odata.Router = {
    constructor: function() {
      sap.ui.core.routing.Router.apply(this, arguments);
      return this._routeMatchedHandler = new sap.m.routing.RouteMatchedHandler(this);
    },

    /*
     * to extend the router with a nav to method that
     * does not write hashes but load the views properly
     */
    navToWithoutHash: function(currentView, viewName, viewType, isMasterPage, data) {
      var app, view;
      if (viewType == null) {
        viewType = "JS";
      }
      if (isMasterPage == null) {
        isMasterPage = false;
      }
      app = this._findAppConteiner(currentView);
      view = this.getView(viewName, viewType);
      app.addPage(view, isMasterPage);
      return app.toDetail(view.getId(), "show", data);
    },

    /*
     * navigates back if there was a previos navigation,
     * if not, navigation back to home/welcome screen
     */
    navBack: function(route, data) {
      var history, previosHash;
      history = sap.ui.core.routing.History.getInstance();
      previosHash = history.getPreviousHash();
      if (previosHash === void 0) {
        return window.history.go(-1);
      } else {
        return this.navTo(route, data, true);
      }
    },
    backWithoutHash: function(currentView, isMaster) {
      var app, backMethod;
      backMethod = isMaster ? "backMaster" : "backDetail";
      app = this._findAppConteiner(currentView);
      return app[cackMethod]();
    },
    destroy: function() {
      sap.ui.core.routing.Router.prototype.destroy.apply(this, arguments);
      return this._routeMatchedHandler.destroy();
    },
    _findAppConteiner: function(control) {
      var conteinerName;
      conteinerName = "appConteiner";
      if (control instanceof sap.ui.core.mvc.View && control.byId(conteinerName)) {
        return control.byId(conteinerName);
      } else {
        if (control.getParent()) {
          return this._findAppConteiner(control.getParent(), conteinerName);
        } else {
          return null;
        }
      }
    }
  };

}).call(this);
