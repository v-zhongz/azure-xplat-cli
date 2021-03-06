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
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage14148.blob.core.windows.net/xplatteststoragecnt12801\",\r\n            \"https://xplatteststorage25703.blob.core.windows.net/xplatteststoragecnt21666\",\r\n            \"https://xplatteststorage32724.blob.core.windows.net/xplatteststoragecnt32769\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Network/virtualNetworks/xplattestvnet1417/subnets/xplattestsubnet7931\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2532',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '34fe6804-78bf-426c-8989-80040f22b706',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '638f5027-1e50-40fc-84d9-c7daa229265b',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T052109Z:638f5027-1e50-40fc-84d9-c7daa229265b',
  date: 'Tue, 22 Mar 2016 05:21:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage14148.blob.core.windows.net/xplatteststoragecnt12801\",\r\n            \"https://xplatteststorage25703.blob.core.windows.net/xplatteststoragecnt21666\",\r\n            \"https://xplatteststorage32724.blob.core.windows.net/xplatteststoragecnt32769\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Network/virtualNetworks/xplattestvnet1417/subnets/xplattestsubnet7931\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2532',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '34fe6804-78bf-426c-8989-80040f22b706',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '638f5027-1e50-40fc-84d9-c7daa229265b',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T052109Z:638f5027-1e50-40fc-84d9-c7daa229265b',
  date: 'Tue, 22 Mar 2016 05:21:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage14148.blob.core.windows.net/xplatteststoragecnt12801\",\r\n            \"https://xplatteststorage25703.blob.core.windows.net/xplatteststoragecnt21666\",\r\n            \"https://xplatteststorage32724.blob.core.windows.net/xplatteststoragecnt32769\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Network/virtualNetworks/xplattestvnet1417/subnets/xplattestsubnet7931\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2532',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '70346dfa-0e5d-4e98-bfd7-28df77a98ed8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '55b4210b-d58a-42fd-9c86-84f80e1dda30',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T052110Z:55b4210b-d58a-42fd-9c86-84f80e1dda30',
  date: 'Tue, 22 Mar 2016 05:21:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_A1\",\r\n    \"tier\": \"Standard\",\r\n    \"capacity\": 10\r\n  },\r\n  \"properties\": {\r\n    \"upgradePolicy\": {\r\n      \"mode\": \"Manual\"\r\n    },\r\n    \"virtualMachineProfile\": {\r\n      \"osProfile\": {\r\n        \"computerNamePrefix\": \"test\",\r\n        \"adminUsername\": \"azureuser\",\r\n        \"windowsConfiguration\": {\r\n          \"provisionVMAgent\": true,\r\n          \"enableAutomaticUpdates\": true\r\n        },\r\n        \"secrets\": []\r\n      },\r\n      \"storageProfile\": {\r\n        \"osDisk\": {\r\n          \"vhdContainers\": [\r\n            \"https://xplatteststorage14148.blob.core.windows.net/xplatteststoragecnt12801\",\r\n            \"https://xplatteststorage25703.blob.core.windows.net/xplatteststoragecnt21666\",\r\n            \"https://xplatteststorage32724.blob.core.windows.net/xplatteststoragecnt32769\"\r\n          ],\r\n          \"name\": \"test\",\r\n          \"createOption\": \"FromImage\",\r\n          \"caching\": \"None\"\r\n        },\r\n        \"imageReference\": {\r\n          \"publisher\": \"MicrosoftWindowsServer\",\r\n          \"offer\": \"WindowsServer\",\r\n          \"sku\": \"2012-R2-Datacenter\",\r\n          \"version\": \"latest\"\r\n        }\r\n      },\r\n      \"networkProfile\": {\"networkInterfaceConfigurations\":[{\"name\":\"test\",\"properties\":{\"primary\":true,\"ipConfigurations\":[{\"name\":\"test\",\"properties\":{\"subnet\":{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Network/virtualNetworks/xplattestvnet1417/subnets/xplattestsubnet7931\"}}}]}}]},\r\n      \"extensionProfile\": {\r\n        \"extensions\": [\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"VMAccessAgent\",\r\n              \"typeHandlerVersion\": \"2.0\",\r\n              \"autoUpgradeMinorVersion\": true,\r\n              \"settings\": {}\r\n            },\r\n            \"name\": \"test\"\r\n          },\r\n          {\r\n            \"properties\": {\r\n              \"publisher\": \"Microsoft.Compute\",\r\n              \"type\": \"BGInfo\",\r\n              \"typeHandlerVersion\": \"2.1\",\r\n              \"autoUpgradeMinorVersion\": true\r\n            },\r\n            \"name\": \"test1\"\r\n          }\r\n        ]\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"overprovision\": false\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate9498/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5\",\r\n  \"name\": \"xplattestvmss5\",\r\n  \"type\": \"Microsoft.Compute/virtualMachineScaleSets\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2532',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '70346dfa-0e5d-4e98-bfd7-28df77a98ed8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '55b4210b-d58a-42fd-9c86-84f80e1dda30',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T052110Z:55b4210b-d58a-42fd-9c86-84f80e1dda30',
  date: 'Tue, 22 Mar 2016 05:21:09 GMT',
  connection: 'close' });
 return result; }]];