"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/ErrorResponse"));

var _TaxCity = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxCity"));

var _TaxCountry = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxCountry"));

var _TaxCounty = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxCounty"));

var _TaxPostalCode = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxPostalCode"));

var _TaxProviderActivateResult = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxProviderActivateResult"));

var _TaxProviderAvalara = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxProviderAvalara"));

var _TaxProviderAvalaraCompaniesResult = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult"));

var _TaxProviderSelf = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxProviderSelf"));

var _TaxProviderSelfCountriesResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse"));

var _TaxProviderSelfRegionsResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxProviderSelfRegionsResponse"));

var _TaxProviderSovos = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxProviderSovos"));

var _TaxProviderTaxJar = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxProviderTaxJar"));

var _TaxProviderTestResult = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxProviderTestResult"));

var _TaxProviderUltraCart = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxProviderUltraCart"));

var _TaxProvidersResponse = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxProvidersResponse"));

var _TaxState = _interopRequireDefault(require("../com.ultracart.admin.v2.models/TaxState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Tax service.
* @module com.ultracart.admin.v2/TaxApi
* @version 4.0.51-RC
*/
var TaxApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TaxApi. 
  * @alias module:com.ultracart.admin.v2/TaxApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TaxApi(apiClient) {
    _classCallCheck(this, TaxApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteTaxProviderSelfCity operation.
   * @callback module:com.ultracart.admin.v2/TaxApi~deleteTaxProviderSelfCityCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Deletes a Self tax provider city
   * Deletes a Self tax provider city. 
   * @param {String} city The city being deleted.
   * @param {module:com.ultracart.admin.v2.models/TaxCity} tax_city tax city to be deleted
   * @param {module:com.ultracart.admin.v2/TaxApi~deleteTaxProviderSelfCityCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(TaxApi, [{
    key: "deleteTaxProviderSelfCity",
    value: function deleteTaxProviderSelfCity(city, tax_city, callback) {
      var postBody = tax_city; // verify the required parameter 'city' is set

      if (city === undefined || city === null) {
        throw new Error("Missing the required parameter 'city' when calling deleteTaxProviderSelfCity");
      } // verify the required parameter 'tax_city' is set


      if (tax_city === undefined || tax_city === null) {
        throw new Error("Missing the required parameter 'tax_city' when calling deleteTaxProviderSelfCity");
      }

      var pathParams = {
        'city': city
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/tax/providers/self/city/{city}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteTaxProviderSelfCountry operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~deleteTaxProviderSelfCountryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a Self tax provider country
     * Deletes a Self tax provider country. 
     * @param {String} countryCode The country code being deleted.
     * @param {module:com.ultracart.admin.v2.models/TaxCountry} tax_country tax country to be deleted
     * @param {module:com.ultracart.admin.v2/TaxApi~deleteTaxProviderSelfCountryCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteTaxProviderSelfCountry",
    value: function deleteTaxProviderSelfCountry(countryCode, tax_country, callback) {
      var postBody = tax_country; // verify the required parameter 'countryCode' is set

      if (countryCode === undefined || countryCode === null) {
        throw new Error("Missing the required parameter 'countryCode' when calling deleteTaxProviderSelfCountry");
      } // verify the required parameter 'tax_country' is set


      if (tax_country === undefined || tax_country === null) {
        throw new Error("Missing the required parameter 'tax_country' when calling deleteTaxProviderSelfCountry");
      }

      var pathParams = {
        'countryCode': countryCode
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/tax/providers/self/country/{countryCode}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteTaxProviderSelfCounty operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~deleteTaxProviderSelfCountyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a Self tax provider county
     * Deletes a Self tax provider county. 
     * @param {String} county The county being deleted.
     * @param {module:com.ultracart.admin.v2.models/TaxCounty} tax_county tax county to be deleted
     * @param {module:com.ultracart.admin.v2/TaxApi~deleteTaxProviderSelfCountyCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteTaxProviderSelfCounty",
    value: function deleteTaxProviderSelfCounty(county, tax_county, callback) {
      var postBody = tax_county; // verify the required parameter 'county' is set

      if (county === undefined || county === null) {
        throw new Error("Missing the required parameter 'county' when calling deleteTaxProviderSelfCounty");
      } // verify the required parameter 'tax_county' is set


      if (tax_county === undefined || tax_county === null) {
        throw new Error("Missing the required parameter 'tax_county' when calling deleteTaxProviderSelfCounty");
      }

      var pathParams = {
        'county': county
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/tax/providers/self/county/{county}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteTaxProviderSelfPostalCode operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~deleteTaxProviderSelfPostalCodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a Self tax provider postalCode
     * Deletes a Self tax provider postalCode. 
     * @param {String} postal_code The postal code being deleted.
     * @param {module:com.ultracart.admin.v2.models/TaxPostalCode} tax_postal_code tax postal code to be deleted
     * @param {module:com.ultracart.admin.v2/TaxApi~deleteTaxProviderSelfPostalCodeCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteTaxProviderSelfPostalCode",
    value: function deleteTaxProviderSelfPostalCode(postal_code, tax_postal_code, callback) {
      var postBody = tax_postal_code; // verify the required parameter 'postal_code' is set

      if (postal_code === undefined || postal_code === null) {
        throw new Error("Missing the required parameter 'postal_code' when calling deleteTaxProviderSelfPostalCode");
      } // verify the required parameter 'tax_postal_code' is set


      if (tax_postal_code === undefined || tax_postal_code === null) {
        throw new Error("Missing the required parameter 'tax_postal_code' when calling deleteTaxProviderSelfPostalCode");
      }

      var pathParams = {
        'postal_code': postal_code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/tax/providers/self/postalCode/{postal_code}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteTaxProviderSelfState operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~deleteTaxProviderSelfStateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a Self tax provider state
     * Deletes a Self tax provider state. 
     * @param {String} stateCode The state code being deleted.
     * @param {module:com.ultracart.admin.v2.models/TaxState} tax_state tax state to be deleted
     * @param {module:com.ultracart.admin.v2/TaxApi~deleteTaxProviderSelfStateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteTaxProviderSelfState",
    value: function deleteTaxProviderSelfState(stateCode, tax_state, callback) {
      var postBody = tax_state; // verify the required parameter 'stateCode' is set

      if (stateCode === undefined || stateCode === null) {
        throw new Error("Missing the required parameter 'stateCode' when calling deleteTaxProviderSelfState");
      } // verify the required parameter 'tax_state' is set


      if (tax_state === undefined || tax_state === null) {
        throw new Error("Missing the required parameter 'tax_state' when calling deleteTaxProviderSelfState");
      }

      var pathParams = {
        'stateCode': stateCode
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/tax/providers/self/state/{stateCode}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviderAvalara operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProviderAvalaraCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalara} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the Avalara tax provider
     * Retrieves the Avalara tax provider. 
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProviderAvalaraCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderAvalara}
     */

  }, {
    key: "getTaxProviderAvalara",
    value: function getTaxProviderAvalara(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProviderAvalara["default"];
      return this.apiClient.callApi('/tax/providers/avalara', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviderAvalaraCompanies operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProviderAvalaraCompaniesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns Avalara Tax companies configured by the merchant
     * Returns Avalara Tax companies configured by the merchant 
     * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalara} tax_provider_avalara TaxProviderAvalara object
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProviderAvalaraCompaniesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderAvalaraCompaniesResult}
     */

  }, {
    key: "getTaxProviderAvalaraCompanies",
    value: function getTaxProviderAvalaraCompanies(tax_provider_avalara, callback) {
      var postBody = tax_provider_avalara; // verify the required parameter 'tax_provider_avalara' is set

      if (tax_provider_avalara === undefined || tax_provider_avalara === null) {
        throw new Error("Missing the required parameter 'tax_provider_avalara' when calling getTaxProviderAvalaraCompanies");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaxProviderAvalaraCompaniesResult["default"];
      return this.apiClient.callApi('/tax/providers/avalara/companies', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviderAvalaraTest operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProviderAvalaraTestCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderTestResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attempts to connect to Avalara and returns back the response
     * Attempts to connect to Avalara and returns back the response. 
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProviderAvalaraTestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderTestResult}
     */

  }, {
    key: "getTaxProviderAvalaraTest",
    value: function getTaxProviderAvalaraTest(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProviderTestResult["default"];
      return this.apiClient.callApi('/tax/providers/avalara/test', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviderSelf operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProviderSelfCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSelf} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the Self tax provider
     * Retrieves the Self tax provider. 
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProviderSelfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderSelf}
     */

  }, {
    key: "getTaxProviderSelf",
    value: function getTaxProviderSelf(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProviderSelf["default"];
      return this.apiClient.callApi('/tax/providers/self', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviderSelfCountries operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProviderSelfCountriesCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the Self tax provider countries
     * Retrieves the Self tax provider countries. 
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProviderSelfCountriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderSelfCountriesResponse}
     */

  }, {
    key: "getTaxProviderSelfCountries",
    value: function getTaxProviderSelfCountries(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProviderSelfCountriesResponse["default"];
      return this.apiClient.callApi('/tax/providers/self/countries', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviderSelfRegionsByCountryCode operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProviderSelfRegionsByCountryCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSelfRegionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the Self tax provider regions for a given country code
     * Retrieves the Self tax provider regions for a given country code. 
     * @param {String} countryCode The country code regions desired.
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProviderSelfRegionsByCountryCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderSelfRegionsResponse}
     */

  }, {
    key: "getTaxProviderSelfRegionsByCountryCode",
    value: function getTaxProviderSelfRegionsByCountryCode(countryCode, callback) {
      var postBody = null; // verify the required parameter 'countryCode' is set

      if (countryCode === undefined || countryCode === null) {
        throw new Error("Missing the required parameter 'countryCode' when calling getTaxProviderSelfRegionsByCountryCode");
      }

      var pathParams = {
        'countryCode': countryCode
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProviderSelfRegionsResponse["default"];
      return this.apiClient.callApi('/tax/providers/self/regions/{countryCode}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviderSovos operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProviderSovosCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSovos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the Sovos tax provider
     * Retrieves the Sovos tax provider. 
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProviderSovosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderSovos}
     */

  }, {
    key: "getTaxProviderSovos",
    value: function getTaxProviderSovos(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProviderSovos["default"];
      return this.apiClient.callApi('/tax/providers/sovos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviderSovosTest operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProviderSovosTestCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderTestResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attempts to connect to Sovos and returns back the response
     * Attempts to connect to Sovos and returns back the response. 
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProviderSovosTestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderTestResult}
     */

  }, {
    key: "getTaxProviderSovosTest",
    value: function getTaxProviderSovosTest(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProviderTestResult["default"];
      return this.apiClient.callApi('/tax/providers/sovos/test', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviderTaxJar operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProviderTaxJarCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderTaxJar} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the TaxJar tax provider
     * Retrieves the TaxJar tax provider. 
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProviderTaxJarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderTaxJar}
     */

  }, {
    key: "getTaxProviderTaxJar",
    value: function getTaxProviderTaxJar(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProviderTaxJar["default"];
      return this.apiClient.callApi('/tax/providers/taxjar', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviderTaxJarTest operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProviderTaxJarTestCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderTestResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attempts to connect to TaxJar and returns back the response
     * Attempts to connect to TaxJar and returns back the response. 
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProviderTaxJarTestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderTestResult}
     */

  }, {
    key: "getTaxProviderTaxJarTest",
    value: function getTaxProviderTaxJarTest(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProviderTestResult["default"];
      return this.apiClient.callApi('/tax/providers/taxjar/test', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviderUltraCart operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProviderUltraCartCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the UltraCart tax provider
     * Retrieves the UltraCart tax provider. 
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProviderUltraCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderUltraCart}
     */

  }, {
    key: "getTaxProviderUltraCart",
    value: function getTaxProviderUltraCart(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProviderUltraCart["default"];
      return this.apiClient.callApi('/tax/providers/ultracart', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getTaxProviders operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~getTaxProvidersCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProvidersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve tax methods
     * Retrieves tax methods for this account. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts._limit The maximum number of records to return on this one API call. (Max 200) (default to 100)
     * @param {Number} opts._offset Pagination of the record set.  Offset is a zero based index. (default to 0)
     * @param {String} opts._expand The object expansion to perform on the result.  See documentation for examples
     * @param {module:com.ultracart.admin.v2/TaxApi~getTaxProvidersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProvidersResponse}
     */

  }, {
    key: "getTaxProviders",
    value: function getTaxProviders(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        '_limit': opts['_limit'],
        '_offset': opts['_offset'],
        '_expand': opts['_expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProvidersResponse["default"];
      return this.apiClient.callApi('/tax/providers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the setActiveTaxProvider operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~setActiveTaxProviderCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderActivateResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Toggle a tax provider to active
     * Toggle a tax provider to active. 
     * @param {String} providerName The tax provider to set active.
     * @param {module:com.ultracart.admin.v2/TaxApi~setActiveTaxProviderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderActivateResult}
     */

  }, {
    key: "setActiveTaxProvider",
    value: function setActiveTaxProvider(providerName, callback) {
      var postBody = null; // verify the required parameter 'providerName' is set

      if (providerName === undefined || providerName === null) {
        throw new Error("Missing the required parameter 'providerName' when calling setActiveTaxProvider");
      }

      var pathParams = {
        'providerName': providerName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaxProviderActivateResult["default"];
      return this.apiClient.callApi('/tax/providers/setActive/{providerName}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTaxProviderAvalara operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~updateTaxProviderAvalaraCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalara} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the Avalara tax provider
     * Update the Avalara tax provider. 
     * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalara} tax_provider_avalara TaxProviderAvalara object
     * @param {module:com.ultracart.admin.v2/TaxApi~updateTaxProviderAvalaraCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderAvalara}
     */

  }, {
    key: "updateTaxProviderAvalara",
    value: function updateTaxProviderAvalara(tax_provider_avalara, callback) {
      var postBody = tax_provider_avalara; // verify the required parameter 'tax_provider_avalara' is set

      if (tax_provider_avalara === undefined || tax_provider_avalara === null) {
        throw new Error("Missing the required parameter 'tax_provider_avalara' when calling updateTaxProviderAvalara");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaxProviderAvalara["default"];
      return this.apiClient.callApi('/tax/providers/avalara', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTaxProviderSelf operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSelf} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the Self tax provider
     * Update the Self tax provider. 
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSelf} tax_provider_self TaxProviderSelf object
     * @param {module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderSelf}
     */

  }, {
    key: "updateTaxProviderSelf",
    value: function updateTaxProviderSelf(tax_provider_self, callback) {
      var postBody = tax_provider_self; // verify the required parameter 'tax_provider_self' is set

      if (tax_provider_self === undefined || tax_provider_self === null) {
        throw new Error("Missing the required parameter 'tax_provider_self' when calling updateTaxProviderSelf");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaxProviderSelf["default"];
      return this.apiClient.callApi('/tax/providers/self', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTaxProviderSelfCity operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfCityCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxCity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a Self tax provider city
     * Updates a Self tax provider city. 
     * @param {String} city The city being updated.
     * @param {module:com.ultracart.admin.v2.models/TaxCity} tax_city tax city to be updated
     * @param {module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfCityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxCity}
     */

  }, {
    key: "updateTaxProviderSelfCity",
    value: function updateTaxProviderSelfCity(city, tax_city, callback) {
      var postBody = tax_city; // verify the required parameter 'city' is set

      if (city === undefined || city === null) {
        throw new Error("Missing the required parameter 'city' when calling updateTaxProviderSelfCity");
      } // verify the required parameter 'tax_city' is set


      if (tax_city === undefined || tax_city === null) {
        throw new Error("Missing the required parameter 'tax_city' when calling updateTaxProviderSelfCity");
      }

      var pathParams = {
        'city': city
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaxCity["default"];
      return this.apiClient.callApi('/tax/providers/self/city/{city}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTaxProviderSelfCountry operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfCountryCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxCountry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a Self tax provider country
     * Updates a Self tax provider country. 
     * @param {String} countryCode The country code being updated.
     * @param {module:com.ultracart.admin.v2.models/TaxCountry} tax_country tax country to be updated
     * @param {module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfCountryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxCountry}
     */

  }, {
    key: "updateTaxProviderSelfCountry",
    value: function updateTaxProviderSelfCountry(countryCode, tax_country, callback) {
      var postBody = tax_country; // verify the required parameter 'countryCode' is set

      if (countryCode === undefined || countryCode === null) {
        throw new Error("Missing the required parameter 'countryCode' when calling updateTaxProviderSelfCountry");
      } // verify the required parameter 'tax_country' is set


      if (tax_country === undefined || tax_country === null) {
        throw new Error("Missing the required parameter 'tax_country' when calling updateTaxProviderSelfCountry");
      }

      var pathParams = {
        'countryCode': countryCode
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaxCountry["default"];
      return this.apiClient.callApi('/tax/providers/self/country/{countryCode}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTaxProviderSelfCounty operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfCountyCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxCounty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a Self tax provider county
     * Updates a Self tax provider county. 
     * @param {String} county The county being updated.
     * @param {module:com.ultracart.admin.v2.models/TaxCounty} tax_county tax county to be updated
     * @param {module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfCountyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxCounty}
     */

  }, {
    key: "updateTaxProviderSelfCounty",
    value: function updateTaxProviderSelfCounty(county, tax_county, callback) {
      var postBody = tax_county; // verify the required parameter 'county' is set

      if (county === undefined || county === null) {
        throw new Error("Missing the required parameter 'county' when calling updateTaxProviderSelfCounty");
      } // verify the required parameter 'tax_county' is set


      if (tax_county === undefined || tax_county === null) {
        throw new Error("Missing the required parameter 'tax_county' when calling updateTaxProviderSelfCounty");
      }

      var pathParams = {
        'county': county
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaxCounty["default"];
      return this.apiClient.callApi('/tax/providers/self/county/{county}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTaxProviderSelfPostalCode operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfPostalCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxPostalCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a Self tax provider postalCode
     * Updates a Self tax provider postalCode. 
     * @param {String} postal_code The postal code being updated.
     * @param {module:com.ultracart.admin.v2.models/TaxPostalCode} tax_postal_code tax postal code to be updated
     * @param {module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfPostalCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxPostalCode}
     */

  }, {
    key: "updateTaxProviderSelfPostalCode",
    value: function updateTaxProviderSelfPostalCode(postal_code, tax_postal_code, callback) {
      var postBody = tax_postal_code; // verify the required parameter 'postal_code' is set

      if (postal_code === undefined || postal_code === null) {
        throw new Error("Missing the required parameter 'postal_code' when calling updateTaxProviderSelfPostalCode");
      } // verify the required parameter 'tax_postal_code' is set


      if (tax_postal_code === undefined || tax_postal_code === null) {
        throw new Error("Missing the required parameter 'tax_postal_code' when calling updateTaxProviderSelfPostalCode");
      }

      var pathParams = {
        'postal_code': postal_code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaxPostalCode["default"];
      return this.apiClient.callApi('/tax/providers/self/postalCode/{postal_code}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTaxProviderSelfState operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfStateCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a Self tax provider state
     * Updates a Self tax provider state. 
     * @param {String} stateCode The state code being updated.
     * @param {module:com.ultracart.admin.v2.models/TaxState} tax_state tax state to be updated
     * @param {module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSelfStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxState}
     */

  }, {
    key: "updateTaxProviderSelfState",
    value: function updateTaxProviderSelfState(stateCode, tax_state, callback) {
      var postBody = tax_state; // verify the required parameter 'stateCode' is set

      if (stateCode === undefined || stateCode === null) {
        throw new Error("Missing the required parameter 'stateCode' when calling updateTaxProviderSelfState");
      } // verify the required parameter 'tax_state' is set


      if (tax_state === undefined || tax_state === null) {
        throw new Error("Missing the required parameter 'tax_state' when calling updateTaxProviderSelfState");
      }

      var pathParams = {
        'stateCode': stateCode
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaxState["default"];
      return this.apiClient.callApi('/tax/providers/self/state/{stateCode}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTaxProviderSovos operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSovosCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSovos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the Sovos tax provider
     * Update the Sovos tax provider. 
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSovos} tax_provider_sovos TaxProviderSovos object
     * @param {module:com.ultracart.admin.v2/TaxApi~updateTaxProviderSovosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderSovos}
     */

  }, {
    key: "updateTaxProviderSovos",
    value: function updateTaxProviderSovos(tax_provider_sovos, callback) {
      var postBody = tax_provider_sovos; // verify the required parameter 'tax_provider_sovos' is set

      if (tax_provider_sovos === undefined || tax_provider_sovos === null) {
        throw new Error("Missing the required parameter 'tax_provider_sovos' when calling updateTaxProviderSovos");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaxProviderSovos["default"];
      return this.apiClient.callApi('/tax/providers/sovos', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTaxProviderTaxJar operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~updateTaxProviderTaxJarCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderTaxJar} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the TaxJar tax provider
     * Update the TaxJar tax provider. 
     * @param {module:com.ultracart.admin.v2.models/TaxProviderTaxJar} tax_provider_taxJar TaxProviderTaxJar object
     * @param {module:com.ultracart.admin.v2/TaxApi~updateTaxProviderTaxJarCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderTaxJar}
     */

  }, {
    key: "updateTaxProviderTaxJar",
    value: function updateTaxProviderTaxJar(tax_provider_taxJar, callback) {
      var postBody = tax_provider_taxJar; // verify the required parameter 'tax_provider_taxJar' is set

      if (tax_provider_taxJar === undefined || tax_provider_taxJar === null) {
        throw new Error("Missing the required parameter 'tax_provider_taxJar' when calling updateTaxProviderTaxJar");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaxProviderTaxJar["default"];
      return this.apiClient.callApi('/tax/providers/taxjar', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateTaxProviderUltraCart operation.
     * @callback module:com.ultracart.admin.v2/TaxApi~updateTaxProviderUltraCartCallback
     * @param {String} error Error message, if any.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the UltraCart tax provider
     * Update the UltraCart tax provider. 
     * @param {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} tax_provider_ultracart TaxProviderUltraCart object
     * @param {module:com.ultracart.admin.v2/TaxApi~updateTaxProviderUltraCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:com.ultracart.admin.v2.models/TaxProviderUltraCart}
     */

  }, {
    key: "updateTaxProviderUltraCart",
    value: function updateTaxProviderUltraCart(tax_provider_ultracart, callback) {
      var postBody = tax_provider_ultracart; // verify the required parameter 'tax_provider_ultracart' is set

      if (tax_provider_ultracart === undefined || tax_provider_ultracart === null) {
        throw new Error("Missing the required parameter 'tax_provider_ultracart' when calling updateTaxProviderUltraCart");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ultraCartOauth', 'ultraCartSimpleApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TaxProviderUltraCart["default"];
      return this.apiClient.callApi('/tax/providers/ultracart', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TaxApi;
}();

exports["default"] = TaxApi;