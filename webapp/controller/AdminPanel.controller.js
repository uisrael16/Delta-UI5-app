sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/InputBase",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/SimpleType",
    "sap/ui/model/ValidateException",
    "sap/ui/core/Core",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, FilterOperator, Filter, JSONModel, SimpleType, ValidateException, Core, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("project1.controller.AdminPanel", {

            onInit: function () {


                var oEmpData = {
                    "emp": []
                }

                var oModel = new sap.ui.model.json.JSONModel(oEmpData);
                this.getView().setModel(oModel);

            },

            onReject: function () {
                window.open('mailto:test@example.com?subject=subject&body=body');
            },

            onObjectItemPress: function (oEvent) {
                var oItem = oEvent.getSource();
                var oCtx = oItem.getBindingContext();
                var path = oCtx.getPath();
                this.getView().byId("projectlistid").bindElement(path);
            },

            onNameChange: function (oEvent) {
                var oInput = oEvent.getSource();
                this._validateInput(oInput);
            },

            onFilterInvoices: function (oEvent) {

                // build filter array
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    aFilter.push(new Filter("FirstName", FilterOperator.Contains, sQuery));
                }

                // filter binding
                var oList = this.byId("emplist");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            },

            onSave: function () {
                const addVendor = () => {
                    var VendorID = this.getView().byId("VendorID").getValue();
                    var order_date = this.getView().byId("order_date").getValue()
                    var FirstName = this.getView().byId("FirstName").getValue();
                    var province = this.getView().byId("province").getValue();
                    var town = this.getView().byId("town").getValue();
                    var telephone = this.getView().byId("telephone").getValue();
                    var address = this.getView().byId("address").getValue();
                    var Email = this.getView().byId("Email").getValue();
                    var productID = this.getView().byId("productID").getValue();
                    var productName = this.getView().byId("productName").getValue();
                    var quantity = this.getView().byId("quantity").getValue();
                    // collect input controls
                    var oView = this.getView(),
                        aInputs = [
                            oView.byId("VendorID"),
                            oView.byId("order_date"),
                            oView.byId("FirstName"),
                            oView.byId("province"),
                            oView.byId("town"),
                            oView.byId("address"),
                            oView.byId("telephone"),
                            oView.byId("Email"),
                            oView.byId("productID"),
                            oView.byId("productName"),
                            oView.byId("quantity"),

                        ],
                        bValidationError = false;

                    // Check that inputs are not empty.
                    // Validation does not happen during data binding as this is only triggered by user actions.
                    aInputs.forEach(function (oInput) {
                        bValidationError = this._validateInput(oInput) || bValidationError;
                    }, this);

                    if (!bValidationError) {
                        MessageToast.show("The input is validated. Your form has been submitted.");

                        var oModel = this.getView().getModel();

                        //get data array
                        var aData = oModel.getProperty("/emp");
                        // this.aData = products;
                        //push object to array
                        aData.push({ VendorID: VendorID, order_date: order_date, FirstName: FirstName, province: province, Email: Email, town: town, telephone: telephone, address: address, productID: productID, productName: productName, quantity: quantity });
                        //store updated array back into model
                        oModel.setProperty("/emp", aData);
                        console.log("Model /emp value: ", oModel.getProperty("/emp"))
                        console.log("it works!")
                        window.open('mailto:test@example.com?subject=subject&body=body');
                        // window.open('mailto:'+emailTo+'?cc='+emailCC+'&subject='+emailSub+'&body='+emailBody, '_self');

                    } else {
                        MessageToast.show("A validation error has occurred. Complete your input first.");
                        return false;
                    }

                }

                document.addEventListener('DOMContentLoaded', () => {
                    document.getElementById('btn').addEventListener('click', addVendor);
                    document.querySelector('page').reset();
                });
                addVendor()

            },

            onLogout: function () {
                this.getOwnerComponent().getTargets().display("Target_2");
                console.log("logged out!!");
            },

            _validateInput: function (oInput) {
                var sValueState = "None";
                var bValidationError = false;
                var oBinding = oInput.getBinding("value");

                try {
                    oBinding.getType().validateValue(oInput.getValue());
                } catch (oException) {
                    sValueState = "Error";
                    bValidationError = true;
                }

                oInput.setValueState(sValueState);

                return bValidationError;
            },

            onNameChange: function (oEvent) {
                var oInput = oEvent.getSource();
                this._validateInput(oInput);
            },


            /**
             * Custom model type for validating an E-Mail address
             * @class
             * @extends sap.ui.model.SimpleType
             */
            customEMailType: SimpleType.extend("Email", {
                formatValue: function (oValue) {
                    return oValue;
                },

                parseValue: function (oValue) {
                    //parsing step takes place before validating step, value could be altered here
                    return oValue;
                },

                validateValue: function (oValue) {
                    // The following Regex is only used for demonstration purposes and does not cover all variations of email addresses.
                    // It's always better to validate an address by simply sending an e-mail to it.
                    var rexMail = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
                    if (!oValue.match(rexMail)) {
                        throw new ValidateException("'" + oValue + "' is not a valid e-mail address");
                    }
                },

                GoToTarget_1: function () {
                    // Now Get the Router Info
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    // Tell the Router to Navigate To Route_Tar_1
                    oRouter.navTo("View1", {});
                },
            }),
        })
    })