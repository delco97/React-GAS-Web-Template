import * as publicUiFunctions from './webapp';
import * as publicSheetFunctions from './functions';

// Expose public functions by attaching them to `global`
// This is always required for a GAS web app
global.doGet = publicUiFunctions.doGet;

// Register here your custom app script functions that you want ot expose to the client
global.sumOnServer = publicSheetFunctions.sumOnServer;