sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                console.log("hi hi");
            },


            onRegister: function () {
                var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                var fname = this.getView().byId("FirstName").getValue();
                var mname = this.getView().byId("MiddleName").getValue();
                var lname = this.getView().byId("LastName").getValue();
                var email = this.getView().byId("Email").getValue();
                var pword1 = this.getView().byId("Password").getValue();
                var pword2 = this.getView().byId("Confirm").getValue();
                //    var genderM = this.getView().byId("Male").getValue();
                //    var genderF = this.getView().byId("Female").getValue();
                var upperCaseLetters = /[A-Z]/g;

                if ((fname.length < 5) || (fname.length > 15)) {

                    console.log("firstName must be atleast be 5 characters long.\n");
                    return false;
                }
                 else if (!pword1.match(upperCaseLetters)){
                     console.log("Password must have atleast 1 upper Case!");
                     return false;
                 }
                 else if (pword1 != pword2) {
                    console.log("Passwords do not match.");
                    return false;
                }
                
                else if ((mname.length < 5) || (mname.length > 15)) {

                    console.log("MiddleName must be atleast be 5 characters long.\n");
                    return false;
                }
                else if ((lname.length < 5) || (lname.length > 15)) {

                    console.log("LastName must be atleast be 5 characters long.\n");
                    return false;
                }


                else if (email.match(mailformat)) {
                    // console.log("Valid email address!");
                    return true;
                }
                else if (!email.match(mailformat)) {
                    console.log("You have entered an invalid email address!");
                    return false;
                }
                


                console.log(fname);
                console.log(mname);
                console.log(lname);
                console.log(email);
                console.log(pword1);
                console.log(pword2);
                //    console.log(genderM);
                //    console.log(genderF);
            },


            GoToTarget_1: function () {
                // Now Get the Router Info
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                // Tell the Router to Navigate To Route_Tar_1
                oRouter.navTo("Route_Tar_1", {});
            }
        });
    });
