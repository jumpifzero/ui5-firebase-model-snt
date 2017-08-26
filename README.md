# ui5-firebase-model-snt
UI5 demo app Manage Products modified to consume the UI5 Firebase Model


## Converting this app to use a firebase model

 1. Get the postInstal from [https://github.com/jumpifzero/ui5-firebase-model-samples](https://github.com/jumpifzero/ui5-firebase-model-samples)
    `wget https://raw.githubusercontent.com/jumpifzero/ui5-firebase-model-samples/master/postInstall.js`
 2. If you don't have a `package.json` file at the root, do `npm init` 
 3. Do `npm install --save bower`
 4. Do `npm install --save ui5-firebase-model`
 5. Do `npm install --save fs-extra`
 6. Create a Firebase datase
 7. Initialize a FirebaseModel in the `Component.js`
 8. Add this dependency to Component.js `"openui5/community/model/firebase/FirebaseModel"`
 9. Add this in the html boostrap code: `"openui5.community.model.firebase": "../thirdparty/openui5/community/model/firebase/"`
