sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("project1.controller.AdminPanel", {

            onInit: function () {
                var oEmpData = {
                    "emp": []
                }

                var oModel = new sap.ui.model.json.JSONModel(oEmpData);
                this.getView().setModel(oModel);

            },
            onObjectItemPress: function (oEvent) {
                var oItem = oEvent.getSource();
                var oCtx = oItem.getBindingContext();
                var path = oCtx.getPath();
                this.getView().byId("projectlistid").bindElement(path);
            },
            onSave: function () {

                var VendorID = this.getView().byId("VendorID").getValue();
                var order_date = this.getView().byId("order_date").getValue()
                var FirstName = this.getView().byId("FirstName").getValue();
                var province = this.getView().byId("province").getValue();
                var town = this.getView().byId("town").getValue();
                var telephone = this.getView().byId("telephone").getValue();
                var address = this.getView().byId("address").getValue();
                var productID = this.getView().byId("productID").getValue();
                var productName = this.getView().byId("productName").getValue();
                var quantity = this.getView().byId("quantity").getValue();

                var oModel = this.getView().getModel();

                //get data array
                var aData = oModel.getProperty("/emp");
                // this.aData = products;
                //push object to array
                aData.push({ VendorID: VendorID, order_date: order_date, FirstName: FirstName, province: province, town: town, telephone: telephone, address: address, productID: productID, productName: productName, quantity: quantity });
                //store updated array back into model
                oModel.setProperty("/emp", aData);

                console.log("Model /emp value: ", oModel.getProperty("/emp"))



            },

            GoToTarget_1: function () {
                // Now Get the Router Info
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                // Tell the Router to Navigate To Route_Tar_1
                oRouter.navTo("AdminPanel", {});
            },

        });
    });
