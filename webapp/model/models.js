sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
    "openui5/community/model/firebase/FirebaseModel"
], function(JSONModel, Device, FirebaseModel) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createCommentsModel: function() {
			return new JSONModel({ productComments : [] });
		},

        createFirebaseModel: function () {
            var config = {
                apiKey: "AIzaSyDwzmJRS2NNjL7QUe4VxS7FEwKdyAL7ZRk",
                authDomain: "bf-ui5-firebase-show-n-tell.firebaseapp.com",
                databaseURL: "https://bf-ui5-firebase-show-n-tell.firebaseio.com",
                projectId: "bf-ui5-firebase-show-n-tell",
                storageBucket: "",
                messagingSenderId: "842385210289"
            };
            
            var oModel = new FirebaseModel(null, config);
            
            oModel.getFirebasePromise().then(function(firebase){
                firebase.auth().signInAnonymously().catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // TODO: Do something. Panic is acceptable
                });
            });
            
            return oModel;
        }

	};

});
