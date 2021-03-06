// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jsxplat';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jsxplat.centralus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .delete('/pools/xplatCreatedPool?api-version=2015-12-01.2.2&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3874aff8-0017-4aaa-bbe8-e1f120a28f47',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e78266e2-52a2-4059-b9fd-29e331621eea',
  dataserviceversion: '3.0',
  date: 'Tue, 22 Mar 2016 23:37:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .delete('/pools/xplatCreatedPool?api-version=2015-12-01.2.2&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '3874aff8-0017-4aaa-bbe8-e1f120a28f47',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e78266e2-52a2-4059-b9fd-29e331621eea',
  dataserviceversion: '3.0',
  date: 'Tue, 22 Mar 2016 23:37:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2015-12-01.2.2&timeout=30')
  .reply(404, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"PoolNotFound\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified pool does not exist.\\nRequestId:9845595d-4aa7-4192-aa9d-b62fe451a45e\\nTime:2016-03-22T23:37:13.7927529Z\"\r\n  }\r\n}", { 'content-length': '331',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9845595d-4aa7-4192-aa9d-b62fe451a45e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '017d85f0-6e0e-47ba-a211-adb6966395ff',
  dataserviceversion: '3.0',
  date: 'Tue, 22 Mar 2016 23:37:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2015-12-01.2.2&timeout=30')
  .reply(404, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"PoolNotFound\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified pool does not exist.\\nRequestId:9845595d-4aa7-4192-aa9d-b62fe451a45e\\nTime:2016-03-22T23:37:13.7927529Z\"\r\n  }\r\n}", { 'content-length': '331',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9845595d-4aa7-4192-aa9d-b62fe451a45e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '017d85f0-6e0e-47ba-a211-adb6966395ff',
  dataserviceversion: '3.0',
  date: 'Tue, 22 Mar 2016 23:37:13 GMT',
  connection: 'close' });
 return result; }]];