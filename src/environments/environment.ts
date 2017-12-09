// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // Copy this from your Firebase account
  
  firebase: {
    apiKey: "AIzaSyAo7tKS0sTX0nexYEcYJ6MM-S00psan7cQ",
    authDomain: "expensetrack-c6f01.firebaseapp.com",
    databaseURL: "https://expensetrack-c6f01.firebaseio.com",
    projectId: "expensetrack-c6f01",
    storageBucket: "",
    messagingSenderId: "951009540028"
  }
};
