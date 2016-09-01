/**
 * UltraCart Rest API V2
 * This is the next generation UltraCart REST API...
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UltraCartRestApiV2);
  }
}(this, function(expect, UltraCartRestApiV2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UltraCartRestApiV2.WebhookApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WebhookApi', function() {
    describe('webhookWebhooksGet', function() {
      it('should call webhookWebhooksGet successfully', function(done) {
        //uncomment below and update the code to test webhookWebhooksGet
        //instance.webhookWebhooksGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookWebhooksPost', function() {
      it('should call webhookWebhooksPost successfully', function(done) {
        //uncomment below and update the code to test webhookWebhooksPost
        //instance.webhookWebhooksPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookWebhooksWebhookOidDelete', function() {
      it('should call webhookWebhooksWebhookOidDelete successfully', function(done) {
        //uncomment below and update the code to test webhookWebhooksWebhookOidDelete
        //instance.webhookWebhooksWebhookOidDelete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookWebhooksWebhookOidLogsGet', function() {
      it('should call webhookWebhooksWebhookOidLogsGet successfully', function(done) {
        //uncomment below and update the code to test webhookWebhooksWebhookOidLogsGet
        //instance.webhookWebhooksWebhookOidLogsGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookWebhooksWebhookOidLogsRequestIdGet', function() {
      it('should call webhookWebhooksWebhookOidLogsRequestIdGet successfully', function(done) {
        //uncomment below and update the code to test webhookWebhooksWebhookOidLogsRequestIdGet
        //instance.webhookWebhooksWebhookOidLogsRequestIdGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookWebhooksWebhookOidPut', function() {
      it('should call webhookWebhooksWebhookOidPut successfully', function(done) {
        //uncomment below and update the code to test webhookWebhooksWebhookOidPut
        //instance.webhookWebhooksWebhookOidPut(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookWebhooksWebhookOidReflowEventNamePost', function() {
      it('should call webhookWebhooksWebhookOidReflowEventNamePost successfully', function(done) {
        //uncomment below and update the code to test webhookWebhooksWebhookOidReflowEventNamePost
        //instance.webhookWebhooksWebhookOidReflowEventNamePost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookWebhooksWebhookOidSamplesGet', function() {
      it('should call webhookWebhooksWebhookOidSamplesGet successfully', function(done) {
        //uncomment below and update the code to test webhookWebhooksWebhookOidSamplesGet
        //instance.webhookWebhooksWebhookOidSamplesGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('webhookWebhooksWebhookOidValidatePost', function() {
      it('should call webhookWebhooksWebhookOidValidatePost successfully', function(done) {
        //uncomment below and update the code to test webhookWebhooksWebhookOidValidatePost
        //instance.webhookWebhooksWebhookOidValidatePost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));