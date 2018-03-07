/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
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
    instance = new UltraCartRestApiV2.CheckoutApi();
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

  describe('CheckoutApi', function() {
    describe('cityState', function() {
      it('should call cityState successfully', function(done) {
        //uncomment below and update the code to test cityState
        //instance.cityState(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('finalizeOrder', function() {
      it('should call finalizeOrder successfully', function(done) {
        //uncomment below and update the code to test finalizeOrder
        //instance.finalizeOrder(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCart', function() {
      it('should call getCart successfully', function(done) {
        //uncomment below and update the code to test getCart
        //instance.getCart(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartByCartId', function() {
      it('should call getCartByCartId successfully', function(done) {
        //uncomment below and update the code to test getCartByCartId
        //instance.getCartByCartId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartByReturnCode', function() {
      it('should call getCartByReturnCode successfully', function(done) {
        //uncomment below and update the code to test getCartByReturnCode
        //instance.getCartByReturnCode(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handoffCart', function() {
      it('should call handoffCart successfully', function(done) {
        //uncomment below and update the code to test handoffCart
        //instance.handoffCart(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('login', function() {
      it('should call login successfully', function(done) {
        //uncomment below and update the code to test login
        //instance.login(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logout', function() {
      it('should call logout successfully', function(done) {
        //uncomment below and update the code to test logout
        //instance.logout(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('register', function() {
      it('should call register successfully', function(done) {
        //uncomment below and update the code to test register
        //instance.register(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('relatedItemsForCart', function() {
      it('should call relatedItemsForCart successfully', function(done) {
        //uncomment below and update the code to test relatedItemsForCart
        //instance.relatedItemsForCart(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('relatedItemsForItem', function() {
      it('should call relatedItemsForItem successfully', function(done) {
        //uncomment below and update the code to test relatedItemsForItem
        //instance.relatedItemsForItem(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setupBrowserKey', function() {
      it('should call setupBrowserKey successfully', function(done) {
        //uncomment below and update the code to test setupBrowserKey
        //instance.setupBrowserKey(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCart', function() {
      it('should call updateCart successfully', function(done) {
        //uncomment below and update the code to test updateCart
        //instance.updateCart(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateCart', function() {
      it('should call validateCart successfully', function(done) {
        //uncomment below and update the code to test validateCart
        //instance.validateCart(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
