/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener ('deviceready', onDeviceReady, false);

function onDeviceReady () {
  // Cordova is now initialized. Have fun!

  console.log ('Running cordova-' + cordova.platformId + '@' + cordova.version);
  document.getElementById ('deviceready').classList.add ('ready');

  /* var ref = cordova.InAppBrowser.open (
    'https://www.fidelidade.es/ES/seguros/Paginas/condiciones-uso.aspx'
  ); */

  var ref = cordova.InAppBrowser.open (
    'https://fidelidadep10-dev.outsystemsenterprise.com/Autenticacao/Login.aspx?client_id=lLFEZAY1YqMFJTl&redirect_uri=https://fidelidadep10-dev.outsystemsenterprise.com/MLT_Multicare_MUI/OAuthCallback&response_type=code&state=67610aaa-7b8f-40cb-a89a-108dba5ecf59&device_id=4e709d55902c40bc'
  );

  ref.addEventListener ('exit', exitCallback);

  function exitCallback (res) {
    if (res.redirect_uri != '') {
      ref.close ();
    }
  }
}
