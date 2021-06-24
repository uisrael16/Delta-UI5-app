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
                "emp": [{
                    "VendorID": "111111",
                    "FirstName": "Tiger Brands",
                    // "exp": "12",
                    "order date": "04-07-2021",
                    "province": "Gauteng",
                    "town": "Sandton, 2146",
                    "address": "3010 William Nicol Drive",
                    "telephone": "0 11 840 4000",
                    "products": [{
                        "productID": "#12665",
                        "productName": "Sweet & Sour Gherkins",
                        "quantity": "55x"
                    }, {
                        "productID": "#55254",
                        "productName": "Beetroot Grated",
                        "quantity": "20x"
                    }, {
                        "productID": "#42187",
                        "productName": "Gherkins Dill",
                        "quantity": "15x"
                    }, {
                        "productID": "#65532",
                        "productName": "Cucumbers",
                        "quantity": "35x"
                    }, {
                        "productID": "#42187",
                        "productName": "Koo Beetroot Slices",
                        "quantity": "55x"
                    }]
                }, {
                    "VendorID": "222222",
                    "FirstName": "Tems Fresh Meat(Pty) Ltd",
                    // "exp": "3",
                    "order date": "24-07-2021",
                    "province": "Gauteng",
                    "town": "Johannesburg South, 2197",
                    "telephone": " 011 610 7300",
                    "address": "avenue City Deep",
                    "products": [{
                        "productID": "#33554",
                        "productName": "Fresh Beef",
                        "quantity": "90kg"
                    }, {
                        "productID": "#24242",
                        "productName": "Fresh Pork",
                        "quantity": "150kg"
                    }]
                }, {
                    "VendorID": "333333",
                    "FirstName": "Clover",
                    // "exp": "5",
                    "order date": "30-07-2021",
                    "province": "Gauteng",
                    "town": "Roodepoort",
                    "telephone": " 010 417 0068",
                    "address": "Gateview House A3",
                    "products": [{
                        "productID": "#87746",
                        "productName": "Cheese",
                        "quantity": "12x"
                    }, {
                        "productID": "#43556",
                        "productName": "milk",
                        "quantity": "10x"
                    }, {
                        "productID": "#76736",
                        "productName": "yogurt",
                        "quantity": "20x"
                    }, {
                        "productID": "#34636",
                        "productName": "butter",
                        "quantity": "25x"
                    }, {
                        "productID": "#52446",
                        "productName": "Chocolate",
                        "quantity": "15x"
                    }, {
                        "productID": "#23672",
                        "productName": "Fat Free Milk ",
                        "quantity": "10x"
                    }
                ]
                }]
            };
             var oModel = new sap.ui.model.json.JSONModel(oEmpData);
            this.getView().setModel(oModel);

           
             
        },
        onObjectItemPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oCtx = oItem.getBindingContext(); 
            var path = oCtx.getPath();
            this.getView().byId("projectlistid").bindElement(path);
        },
         onSave: function(){

             var VendorID = this.getView().byId("VendorID").getValue();
             var order_date = this.getView().byId("order_date").getValue()
             var FirstName = this.getView().byId("FirstName").getValue();
             var province = this.getView().byId("province").getValue();
             var town = this.getView().byId("town").getValue();
             var telephone = this.getView().byId("telephone").getValue();
             var address = this.getView().byId("address").getValue();
             var productID= this.getView().byId("productID").getValue();
             var productName = this.getView().byId("productName").getValue();
             var quantity = this.getView().byId("quantity").getValue();
            

                
                    // selectedVal = this.getView().byId("VendorID").getValue(); //better use databinding here!
                    // textAreaVal = this.getView().byId("FirstName").getValue(); //better use databinding here!

                    var oModel = this.getView().getModel();
                  
                    //get data array
                    var aData = oModel.getProperty("/oEmpData");
                    //push object to array
                    aData.push({VendorID: VendorID , order_date: order_date, FirstName: FirstName, province: province, town: town, telephone: telephone, address: address, productID: productID, productName: productName, quantity: quantity });
                    //store updated array back into model
                    oModel.setProperty("/oEmpData", aData);

                    console.log("Model /oEmpData value: ", oModel.getProperty("/oEmpData"))
                
               
            // var oJSONModel = new sap.ui.model.json.JSONModel();
           
            //  oEmpData.push("emp",{FirstName:"unathi",MiddleName:"Food",province:"Food Desc"});

            },

            GoToTarget_1: function () {
                // Now Get the Router Info
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                // Tell the Router to Navigate To Route_Tar_1
                oRouter.navTo("AdminPanel", {});
            },


        });
    });