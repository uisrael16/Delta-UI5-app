sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/m/ColumnListItem"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */

    function (Controller, MessageBox, _InputBase) {
        "use strict";

        return Controller.extend("project1.controller.View1", {

            onSave: function (response) {

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
                            "quantity": "55x",
                            "expiry date": "01/08/2021"
                        }, {
                            "productID": "#55254",
                            "productName": "Beetroot Grated",
                            "quantity": "20x",
                            "expiry date": "01/08/2021"
                        }, {
                            "productID": "#42187",
                            "productName": "Gherkins Dill",
                            "quantity": "15x",
                            "expiry date": "01/08/2021"
                        }, {
                            "productID": "#65532",
                            "productName": "Cucumbers",
                            "quantity": "35x",
                            "expiry date": "01/08/2021"
                        }, {
                            "productID": "#42187",
                            "productName": "Koo Beetroot Slices",
                            "quantity": "55x",
                            "expiry date": "01/08/2021"
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
                            "quantity": "90kg",
                            "expiry date": "01/08/2021"
                        }, {
                            "productID": "#24242",
                            "productName": "Fresh Pork",
                            "quantity": "150kg",
                            "expiry date": "01/08/2021"
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
                            "quantity": "12x",
                            "expiry date": "01/08/2021"
                        }, {
                            "productID": "#43556",
                            "productName": "milk",
                            "quantity": "10x",
                            "expiry date": "01/08/2021"
                        }, {
                            "productID": "#76736",
                            "productName": "yogurt",
                            "quantity": "20x",
                            "expiry date": "01/08/2021"
                        }, {
                            "productID": "#34636",
                            "productName": "butter",
                            "quantity": "25x",
                            "expiry date": "01/08/2021"
                        }, {
                            "productID": "#52446",
                            "productName": "Chocolate",
                            "quantity": "15x",
                            "expiry date": "01/08/2021"
                        }, {
                            "productID": "#23672",
                            "productName": "Fat Free Milk ",
                            "quantity": "10x",
                            "expiry date": "01/08/2021"
                        }
                        ]
                    }]
                };

                var FirstName = this.getView().byId("FirstName").getValue();
                var MiddleName = this.getView().byId("MiddleName").getValue();
                var LastName = this.getView().byId("LastName").getValue();
                var Email = this.getView().byId("Email").getValue();
                var Password = this.getView().byId("Password").getValue();
                var Confirm = this.getView().byId("Confirm").getValue();
                var Supplier = this.getView().byId("Supplier").getValue();
                var Item = this.getView().byId("Item").getValue();
                var Date = this.getView().byId("Date").getValue();
                var Quantity = this.getView().byId("Quantity").getValue();
                
                oModel.createEntry("emp",{FirstName:"unathi",MiddleName:"Food",Email:"Food Desc"});
                // var length = 9;
                for (var i = 0; i < response.oEmpData; i++) {

                    sap.ui.getCore().getModel().getProperty("/modelData/oEmpData").push.apply(response.oEmpData[i])
                //  console.table(oEmpData[i]);
                    

                }
                //  console.table(oEmpData[i]);


            },

            onRegister: function () {

                var upperCaseLetters = /[A-Z]/g;

                sap.ui.getCore().attachValidationError(function (oEvent) {
                    oEvent.getParameter("element").setValueState(sap.ui.core.ValueState.Error);
                });
                sap.ui.getCore().attachValidationSuccess(function (oEvent) {
                    oEvent.getParameter("element").setValueState(sap.ui.core.ValueState.None);
                });

                //show number of objects stored
                console.log(window.localStorage.length)

                //   console.log(window.localStorage.getItem("age"))

                const onInit = () => {

                    this._initialiseForm();

                }

                let users = [];
                const addUser = (ev) => {


                    let user = {
                        id: Date.now(),
                        FirstName: this.getView().byId("FirstName").getValue(),
                        MiddleName: this.getView().byId("MiddleName").getValue(),
                        LastName: this.getView().byId("LastName").getValue(),
                        Email: this.getView().byId("Email").getValue(),
                        Password: this.getView().byId("Password").getValue(),
                        Confirm: this.getView().byId("Confirm").getValue(),
                        Supplier: this.getView().byId("Supplier").getValue(),
                        Item: this.getView().byId("Item").getValue(),
                        Date: this.getView().byId("Date").getValue(),
                        Quantity: this.getView().byId("Quantity").getValue(),

                    }


                    // const element = array[index];
                    users.push(user);


                    var aAllControlsWithFieldGroupId = sap.ui.getCore().byFieldGroupId("Form");              //all where fieldGroupId is not empty



                    //for display purposes only
                    console.log('added', { users });



                    //saving to localStorage
                    localStorage.setItem('MyUserList', JSON.stringify(users, '\t', 2));
                    //get items from local storage
                    let techStack = localStorage.getItem('MyUserList');
                    console.log(techStack);
                    var JSONModel = sap.ui.require("sap/ui/model/json/JSONModel");
                    //  JSON sample data
                    var data = {
                        firstName: "John",
                        lastName: "Doe",
                        // birthday: {day:01,month:05,year:1982},
                        address: [{ city: "Heidelberg" }],
                        enabled: true
                    };
                    // create JSON model instance
                    var oModel = new sap.ui.model.json.JSONModel();
                    // set the data for the model
                    oModel.setData(data);
                    // set the model to the core
                    sap.ui.getCore().setModel(oModel);
                    console.log(oModel);


                    // var fs = sap.ui.require('fs');
                    // var fs = sap.ui.require('writeFile');

                    // fs.writeFile('filename.json', jsonString, err => {
                    //     if (err) {
                    //         console.log('Error writing file', err)
                    //     } else {
                    //         console.log('Successfully wrote file')
                    //     }
                    // });


                    // console.log(users);





                }
                document.addEventListener('DOMContentLoaded', () => {
                    document.getElementById('btn').addEventListener('click', addUser);
                    document.querySelector('page').reset();


                });



                addUser();


                // window.location.reload()
                // this.oLabelInput.setValue("");


                // this.getOwnerComponent().getTargets().display("Target_2");
                // console.info("A new Vendor has been Registerd in the System please check your Emails to verify this account");



                sendEmail();



                function sendEmail() {
                    Email.send({
                        Host: "smtp.mailtrap.io",
                        Username: "9a76d0a78b2399",
                        Password: "dd10ff8e823aba",
                        Port: 25,
                        To: 'vajew13838@slowimo.com',
                        From: "0c85b07c02-4e3511@inbox.mailtrap.io",
                        Subject: "Test email",
                        Body: "<html><h2>Delta Foods South Africa</h2><strong> <b>Congratulations!!!</b> you have just registered yourself as one of our Vendors.<br/>A follow up email will be sent to you shortly for status approval,<br/> your account has been successfully created </strong><br></br><em>Thank you for subscribing!</em></html>"
                    }).then(
                        message => alert(message)
                    );
                }


            },

            handleUserInput: function (oEvent) {
                var sUserInput = oEvent.getParameter("value");
                var oInputControl = oEvent.getSource();
                if (sUserInput) {
                    oInputControl.setValueState(sap.ui.core.ValueState.Success);
                    console.log("Success");

                    return true;


                }
                else {
                    oInputControl.setValueState(sap.ui.core.ValueState.Error);
                    console.log("Error");
                    MessageBox.error("One of your fields is not filled out effectively \n, please check which one is it");
                    return false;

                }

            },



            GoToTarget_1: function () {
                // Now Get the Router Info
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                // Tell the Router to Navigate To Route_Tar_1
                oRouter.navTo("Route_Tar_1", {});
            }
        });
    });
