// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"instanceId\": \"0\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-0-e51a6fe129844631bb496b28a729c698\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage14148.blob.core.windows.net/xplatteststoragecnt12801/test-os-0-e51a6fe129844631bb496b28a729c698.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-0\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test\",\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test1\",\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0\",\r\n  \"name\": \"xplattestvmss5_0\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2740',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '925a95b4-a45d-42eb-bb67-e5a90f8e62c3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'daf14cf7-8ce5-4824-9743-5fea300e7c6f',
  'x-ms-routing-request-id': 'WESTUS:20160322T052255Z:daf14cf7-8ce5-4824-9743-5fea300e7c6f',
  date: 'Tue, 22 Mar 2016 05:22:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0?api-version=2016-03-30')
  .reply(200, "{\r\n  \"instanceId\": \"0\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-0-e51a6fe129844631bb496b28a729c698\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage14148.blob.core.windows.net/xplatteststoragecnt12801/test-os-0-e51a6fe129844631bb496b28a729c698.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-0\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test\",\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_0/extensions/test1\",\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/0\",\r\n  \"name\": \"xplattestvmss5_0\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2740',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '925a95b4-a45d-42eb-bb67-e5a90f8e62c3',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'daf14cf7-8ce5-4824-9743-5fea300e7c6f',
  'x-ms-routing-request-id': 'WESTUS:20160322T052255Z:daf14cf7-8ce5-4824-9743-5fea300e7c6f',
  date: 'Tue, 22 Mar 2016 05:22:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/1?api-version=2016-03-30')
  .reply(200, "{\r\n  \"instanceId\": \"1\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-1-05379cc660d74d829a669e8a3297ac77\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage25703.blob.core.windows.net/xplatteststoragecnt21666/test-os-1-05379cc660d74d829a669e8a3297ac77.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test\",\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test1\",\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1\",\r\n  \"name\": \"xplattestvmss5_1\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2740',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'b0047730-4daa-40fa-a48b-9d1231e3d8dc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'd1af5a47-1dd9-456f-97df-9dd4e7997fab',
  'x-ms-routing-request-id': 'WESTUS:20160322T052256Z:d1af5a47-1dd9-456f-97df-9dd4e7997fab',
  date: 'Tue, 22 Mar 2016 05:22:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/1?api-version=2016-03-30')
  .reply(200, "{\r\n  \"instanceId\": \"1\",\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"latestModelApplied\": true,\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServer\",\r\n        \"offer\": \"WindowsServer\",\r\n        \"sku\": \"2012-R2-Datacenter\",\r\n        \"version\": \"4.0.20160229\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"test-os-1-05379cc660d74d829a669e8a3297ac77\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage25703.blob.core.windows.net/xplatteststoragecnt21666/test-os-1-05379cc660d74d829a669e8a3297ac77.vhd\"\r\n        },\r\n        \"caching\": \"None\"\r\n      }\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"test-1\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1/networkInterfaces/test\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test\",\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachines/xplattestvmss5_1/extensions/test1\",\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualMachines/1\",\r\n  \"name\": \"xplattestvmss5_1\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets/virtualMachines\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2740',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'b0047730-4daa-40fa-a48b-9d1231e3d8dc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'd1af5a47-1dd9-456f-97df-9dd4e7997fab',
  'x-ms-routing-request-id': 'WESTUS:20160322T052256Z:d1af5a47-1dd9-456f-97df-9dd4e7997fab',
  date: 'Tue, 22 Mar 2016 05:22:56 GMT',
  connection: 'close' });
 return result; }]];