sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.V_Target_1", {
            GoToTarget_1: function () {
                // Now Get the Router Info
                console.log("Logout");
                
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                // Tell the Router to Navigate To Route_Tar_1
                oRouter.navTo("Route_Tar_1", {});
            }
           
        });
    });
