# UltraCartRestApiV2.TaxApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTaxProviderSelfCity**](TaxApi.md#deleteTaxProviderSelfCity) | **DELETE** /tax/providers/self/city/{city} | Deletes a Self tax provider city
[**deleteTaxProviderSelfCountry**](TaxApi.md#deleteTaxProviderSelfCountry) | **DELETE** /tax/providers/self/country/{countryCode} | Deletes a Self tax provider country
[**deleteTaxProviderSelfCounty**](TaxApi.md#deleteTaxProviderSelfCounty) | **DELETE** /tax/providers/self/county/{county} | Deletes a Self tax provider county
[**deleteTaxProviderSelfPostalCode**](TaxApi.md#deleteTaxProviderSelfPostalCode) | **DELETE** /tax/providers/self/postalCode/{postal_code} | Deletes a Self tax provider postalCode
[**deleteTaxProviderSelfState**](TaxApi.md#deleteTaxProviderSelfState) | **DELETE** /tax/providers/self/state/{stateCode} | Deletes a Self tax provider state
[**getTaxProviderAvalara**](TaxApi.md#getTaxProviderAvalara) | **GET** /tax/providers/avalara | Retrieve the Avalara tax provider
[**getTaxProviderAvalaraCompanies**](TaxApi.md#getTaxProviderAvalaraCompanies) | **POST** /tax/providers/avalara/companies | Returns Avalara Tax companies configured by the merchant
[**getTaxProviderAvalaraTest**](TaxApi.md#getTaxProviderAvalaraTest) | **GET** /tax/providers/avalara/test | Attempts to connect to Avalara and returns back the response
[**getTaxProviderSelf**](TaxApi.md#getTaxProviderSelf) | **GET** /tax/providers/self | Retrieve the Self tax provider
[**getTaxProviderSelfCountries**](TaxApi.md#getTaxProviderSelfCountries) | **GET** /tax/providers/self/countries | Retrieve the Self tax provider countries
[**getTaxProviderSelfRegionsByCountryCode**](TaxApi.md#getTaxProviderSelfRegionsByCountryCode) | **GET** /tax/providers/self/regions/{countryCode} | Retrieve the Self tax provider regions for a given country code
[**getTaxProviderSovos**](TaxApi.md#getTaxProviderSovos) | **GET** /tax/providers/sovos | Retrieve the Sovos tax provider
[**getTaxProviderSovosTest**](TaxApi.md#getTaxProviderSovosTest) | **GET** /tax/providers/sovos/test | Attempts to connect to Sovos and returns back the response
[**getTaxProviderTaxJar**](TaxApi.md#getTaxProviderTaxJar) | **GET** /tax/providers/taxjar | Retrieve the TaxJar tax provider
[**getTaxProviderTaxJarTest**](TaxApi.md#getTaxProviderTaxJarTest) | **GET** /tax/providers/taxjar/test | Attempts to connect to TaxJar and returns back the response
[**getTaxProviderUltraCart**](TaxApi.md#getTaxProviderUltraCart) | **GET** /tax/providers/ultracart | Retrieve the UltraCart tax provider
[**getTaxProviders**](TaxApi.md#getTaxProviders) | **GET** /tax/providers | Retrieve tax methods
[**setActiveTaxProvider**](TaxApi.md#setActiveTaxProvider) | **POST** /tax/providers/setActive/{providerName} | Toggle a tax provider to active
[**updateTaxProviderAvalara**](TaxApi.md#updateTaxProviderAvalara) | **POST** /tax/providers/avalara | Update the Avalara tax provider
[**updateTaxProviderSelf**](TaxApi.md#updateTaxProviderSelf) | **POST** /tax/providers/self | Update the Self tax provider
[**updateTaxProviderSelfCity**](TaxApi.md#updateTaxProviderSelfCity) | **POST** /tax/providers/self/city/{city} | Updates a Self tax provider city
[**updateTaxProviderSelfCountry**](TaxApi.md#updateTaxProviderSelfCountry) | **POST** /tax/providers/self/country/{countryCode} | Updates a Self tax provider country
[**updateTaxProviderSelfCounty**](TaxApi.md#updateTaxProviderSelfCounty) | **POST** /tax/providers/self/county/{county} | Updates a Self tax provider county
[**updateTaxProviderSelfPostalCode**](TaxApi.md#updateTaxProviderSelfPostalCode) | **POST** /tax/providers/self/postalCode/{postal_code} | Updates a Self tax provider postalCode
[**updateTaxProviderSelfState**](TaxApi.md#updateTaxProviderSelfState) | **POST** /tax/providers/self/state/{stateCode} | Updates a Self tax provider state
[**updateTaxProviderSovos**](TaxApi.md#updateTaxProviderSovos) | **POST** /tax/providers/sovos | Update the Sovos tax provider
[**updateTaxProviderTaxJar**](TaxApi.md#updateTaxProviderTaxJar) | **POST** /tax/providers/taxjar | Update the TaxJar tax provider
[**updateTaxProviderUltraCart**](TaxApi.md#updateTaxProviderUltraCart) | **POST** /tax/providers/ultracart | Update the UltraCart tax provider



## deleteTaxProviderSelfCity

> deleteTaxProviderSelfCity(city, tax_city)

Deletes a Self tax provider city

Deletes a Self tax provider city. 


### Example

<!-- UC_START_EXAMPLE deleteTaxProviderSelfCity -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let city = "city_example"; // String | The city being deleted.
let tax_city = new UltraCartRestApiV2.TaxCity(); // TaxCity | tax city to be deleted
apiInstance.deleteTaxProviderSelfCity(city, tax_city, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteTaxProviderSelfCity -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **String**| The city being deleted. | 
 **tax_city** | [**TaxCity**](TaxCity.md)| tax city to be deleted | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTaxProviderSelfCountry

> deleteTaxProviderSelfCountry(countryCode, tax_country)

Deletes a Self tax provider country

Deletes a Self tax provider country. 


### Example

<!-- UC_START_EXAMPLE deleteTaxProviderSelfCountry -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let countryCode = "countryCode_example"; // String | The country code being deleted.
let tax_country = new UltraCartRestApiV2.TaxCountry(); // TaxCountry | tax country to be deleted
apiInstance.deleteTaxProviderSelfCountry(countryCode, tax_country, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteTaxProviderSelfCountry -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | **String**| The country code being deleted. | 
 **tax_country** | [**TaxCountry**](TaxCountry.md)| tax country to be deleted | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTaxProviderSelfCounty

> deleteTaxProviderSelfCounty(county, tax_county)

Deletes a Self tax provider county

Deletes a Self tax provider county. 


### Example

<!-- UC_START_EXAMPLE deleteTaxProviderSelfCounty -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let county = "county_example"; // String | The county being deleted.
let tax_county = new UltraCartRestApiV2.TaxCounty(); // TaxCounty | tax county to be deleted
apiInstance.deleteTaxProviderSelfCounty(county, tax_county, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteTaxProviderSelfCounty -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **county** | **String**| The county being deleted. | 
 **tax_county** | [**TaxCounty**](TaxCounty.md)| tax county to be deleted | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTaxProviderSelfPostalCode

> deleteTaxProviderSelfPostalCode(postal_code, tax_postal_code)

Deletes a Self tax provider postalCode

Deletes a Self tax provider postalCode. 


### Example

<!-- UC_START_EXAMPLE deleteTaxProviderSelfPostalCode -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let postal_code = "postal_code_example"; // String | The postal code being deleted.
let tax_postal_code = new UltraCartRestApiV2.TaxPostalCode(); // TaxPostalCode | tax postal code to be deleted
apiInstance.deleteTaxProviderSelfPostalCode(postal_code, tax_postal_code, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteTaxProviderSelfPostalCode -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postal_code** | **String**| The postal code being deleted. | 
 **tax_postal_code** | [**TaxPostalCode**](TaxPostalCode.md)| tax postal code to be deleted | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTaxProviderSelfState

> deleteTaxProviderSelfState(stateCode, tax_state)

Deletes a Self tax provider state

Deletes a Self tax provider state. 


### Example

<!-- UC_START_EXAMPLE deleteTaxProviderSelfState -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let stateCode = "stateCode_example"; // String | The state code being deleted.
let tax_state = new UltraCartRestApiV2.TaxState(); // TaxState | tax state to be deleted
apiInstance.deleteTaxProviderSelfState(stateCode, tax_state, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

<!-- UC_END_EXAMPLE deleteTaxProviderSelfState -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stateCode** | **String**| The state code being deleted. | 
 **tax_state** | [**TaxState**](TaxState.md)| tax state to be deleted | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTaxProviderAvalara

> TaxProviderAvalara getTaxProviderAvalara()

Retrieve the Avalara tax provider

Retrieves the Avalara tax provider. 


### Example

<!-- UC_START_EXAMPLE getTaxProviderAvalara -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getTaxProviderAvalara((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviderAvalara -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**TaxProviderAvalara**](TaxProviderAvalara.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxProviderAvalaraCompanies

> TaxProviderAvalaraCompaniesResult getTaxProviderAvalaraCompanies(tax_provider_avalara)

Returns Avalara Tax companies configured by the merchant

Returns Avalara Tax companies configured by the merchant 


### Example

<!-- UC_START_EXAMPLE getTaxProviderAvalaraCompanies -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let tax_provider_avalara = new UltraCartRestApiV2.TaxProviderAvalara(); // TaxProviderAvalara | TaxProviderAvalara object
apiInstance.getTaxProviderAvalaraCompanies(tax_provider_avalara, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviderAvalaraCompanies -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tax_provider_avalara** | [**TaxProviderAvalara**](TaxProviderAvalara.md)| TaxProviderAvalara object | 

### Return type

[**TaxProviderAvalaraCompaniesResult**](TaxProviderAvalaraCompaniesResult.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTaxProviderAvalaraTest

> TaxProviderTestResult getTaxProviderAvalaraTest()

Attempts to connect to Avalara and returns back the response

Attempts to connect to Avalara and returns back the response. 


### Example

<!-- UC_START_EXAMPLE getTaxProviderAvalaraTest -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getTaxProviderAvalaraTest((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviderAvalaraTest -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**TaxProviderTestResult**](TaxProviderTestResult.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxProviderSelf

> TaxProviderSelf getTaxProviderSelf()

Retrieve the Self tax provider

Retrieves the Self tax provider. 


### Example

<!-- UC_START_EXAMPLE getTaxProviderSelf -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getTaxProviderSelf((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviderSelf -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**TaxProviderSelf**](TaxProviderSelf.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxProviderSelfCountries

> TaxProviderSelfCountriesResponse getTaxProviderSelfCountries()

Retrieve the Self tax provider countries

Retrieves the Self tax provider countries. 


### Example

<!-- UC_START_EXAMPLE getTaxProviderSelfCountries -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getTaxProviderSelfCountries((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviderSelfCountries -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**TaxProviderSelfCountriesResponse**](TaxProviderSelfCountriesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxProviderSelfRegionsByCountryCode

> TaxProviderSelfRegionsResponse getTaxProviderSelfRegionsByCountryCode(countryCode)

Retrieve the Self tax provider regions for a given country code

Retrieves the Self tax provider regions for a given country code. 


### Example

<!-- UC_START_EXAMPLE getTaxProviderSelfRegionsByCountryCode -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let countryCode = "countryCode_example"; // String | The country code regions desired.
apiInstance.getTaxProviderSelfRegionsByCountryCode(countryCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviderSelfRegionsByCountryCode -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | **String**| The country code regions desired. | 

### Return type

[**TaxProviderSelfRegionsResponse**](TaxProviderSelfRegionsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxProviderSovos

> TaxProviderSovos getTaxProviderSovos()

Retrieve the Sovos tax provider

Retrieves the Sovos tax provider. 


### Example

<!-- UC_START_EXAMPLE getTaxProviderSovos -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getTaxProviderSovos((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviderSovos -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**TaxProviderSovos**](TaxProviderSovos.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxProviderSovosTest

> TaxProviderTestResult getTaxProviderSovosTest()

Attempts to connect to Sovos and returns back the response

Attempts to connect to Sovos and returns back the response. 


### Example

<!-- UC_START_EXAMPLE getTaxProviderSovosTest -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getTaxProviderSovosTest((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviderSovosTest -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**TaxProviderTestResult**](TaxProviderTestResult.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxProviderTaxJar

> TaxProviderTaxJar getTaxProviderTaxJar()

Retrieve the TaxJar tax provider

Retrieves the TaxJar tax provider. 


### Example

<!-- UC_START_EXAMPLE getTaxProviderTaxJar -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getTaxProviderTaxJar((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviderTaxJar -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**TaxProviderTaxJar**](TaxProviderTaxJar.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxProviderTaxJarTest

> TaxProviderTestResult getTaxProviderTaxJarTest()

Attempts to connect to TaxJar and returns back the response

Attempts to connect to TaxJar and returns back the response. 


### Example

<!-- UC_START_EXAMPLE getTaxProviderTaxJarTest -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getTaxProviderTaxJarTest((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviderTaxJarTest -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**TaxProviderTestResult**](TaxProviderTestResult.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxProviderUltraCart

> TaxProviderUltraCart getTaxProviderUltraCart()

Retrieve the UltraCart tax provider

Retrieves the UltraCart tax provider. 


### Example

<!-- UC_START_EXAMPLE getTaxProviderUltraCart -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

apiInstance.getTaxProviderUltraCart((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviderUltraCart -->

### Parameters

This endpoint does not need any parameter.

### Return type

[**TaxProviderUltraCart**](TaxProviderUltraCart.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaxProviders

> TaxProvidersResponse getTaxProviders(opts)

Retrieve tax methods

Retrieves tax methods for this account. 


### Example

<!-- UC_START_EXAMPLE getTaxProviders -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Max 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  See documentation for examples
};
apiInstance.getTaxProviders(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE getTaxProviders -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**TaxProvidersResponse**](TaxProvidersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setActiveTaxProvider

> TaxProviderActivateResult setActiveTaxProvider(providerName)

Toggle a tax provider to active

Toggle a tax provider to active. 


### Example

<!-- UC_START_EXAMPLE setActiveTaxProvider -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let providerName = "providerName_example"; // String | The tax provider to set active.
apiInstance.setActiveTaxProvider(providerName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE setActiveTaxProvider -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerName** | **String**| The tax provider to set active. | 

### Return type

[**TaxProviderActivateResult**](TaxProviderActivateResult.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTaxProviderAvalara

> TaxProviderAvalara updateTaxProviderAvalara(tax_provider_avalara)

Update the Avalara tax provider

Update the Avalara tax provider. 


### Example

<!-- UC_START_EXAMPLE updateTaxProviderAvalara -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let tax_provider_avalara = new UltraCartRestApiV2.TaxProviderAvalara(); // TaxProviderAvalara | TaxProviderAvalara object
apiInstance.updateTaxProviderAvalara(tax_provider_avalara, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTaxProviderAvalara -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tax_provider_avalara** | [**TaxProviderAvalara**](TaxProviderAvalara.md)| TaxProviderAvalara object | 

### Return type

[**TaxProviderAvalara**](TaxProviderAvalara.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTaxProviderSelf

> TaxProviderSelf updateTaxProviderSelf(tax_provider_self)

Update the Self tax provider

Update the Self tax provider. 


### Example

<!-- UC_START_EXAMPLE updateTaxProviderSelf -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let tax_provider_self = new UltraCartRestApiV2.TaxProviderSelf(); // TaxProviderSelf | TaxProviderSelf object
apiInstance.updateTaxProviderSelf(tax_provider_self, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTaxProviderSelf -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tax_provider_self** | [**TaxProviderSelf**](TaxProviderSelf.md)| TaxProviderSelf object | 

### Return type

[**TaxProviderSelf**](TaxProviderSelf.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTaxProviderSelfCity

> TaxCity updateTaxProviderSelfCity(city, tax_city)

Updates a Self tax provider city

Updates a Self tax provider city. 


### Example

<!-- UC_START_EXAMPLE updateTaxProviderSelfCity -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let city = "city_example"; // String | The city being updated.
let tax_city = new UltraCartRestApiV2.TaxCity(); // TaxCity | tax city to be updated
apiInstance.updateTaxProviderSelfCity(city, tax_city, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTaxProviderSelfCity -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **String**| The city being updated. | 
 **tax_city** | [**TaxCity**](TaxCity.md)| tax city to be updated | 

### Return type

[**TaxCity**](TaxCity.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTaxProviderSelfCountry

> TaxCountry updateTaxProviderSelfCountry(countryCode, tax_country)

Updates a Self tax provider country

Updates a Self tax provider country. 


### Example

<!-- UC_START_EXAMPLE updateTaxProviderSelfCountry -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let countryCode = "countryCode_example"; // String | The country code being updated.
let tax_country = new UltraCartRestApiV2.TaxCountry(); // TaxCountry | tax country to be updated
apiInstance.updateTaxProviderSelfCountry(countryCode, tax_country, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTaxProviderSelfCountry -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | **String**| The country code being updated. | 
 **tax_country** | [**TaxCountry**](TaxCountry.md)| tax country to be updated | 

### Return type

[**TaxCountry**](TaxCountry.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTaxProviderSelfCounty

> TaxCounty updateTaxProviderSelfCounty(county, tax_county)

Updates a Self tax provider county

Updates a Self tax provider county. 


### Example

<!-- UC_START_EXAMPLE updateTaxProviderSelfCounty -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let county = "county_example"; // String | The county being updated.
let tax_county = new UltraCartRestApiV2.TaxCounty(); // TaxCounty | tax county to be updated
apiInstance.updateTaxProviderSelfCounty(county, tax_county, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTaxProviderSelfCounty -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **county** | **String**| The county being updated. | 
 **tax_county** | [**TaxCounty**](TaxCounty.md)| tax county to be updated | 

### Return type

[**TaxCounty**](TaxCounty.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTaxProviderSelfPostalCode

> TaxPostalCode updateTaxProviderSelfPostalCode(postal_code, tax_postal_code)

Updates a Self tax provider postalCode

Updates a Self tax provider postalCode. 


### Example

<!-- UC_START_EXAMPLE updateTaxProviderSelfPostalCode -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let postal_code = "postal_code_example"; // String | The postal code being updated.
let tax_postal_code = new UltraCartRestApiV2.TaxPostalCode(); // TaxPostalCode | tax postal code to be updated
apiInstance.updateTaxProviderSelfPostalCode(postal_code, tax_postal_code, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTaxProviderSelfPostalCode -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postal_code** | **String**| The postal code being updated. | 
 **tax_postal_code** | [**TaxPostalCode**](TaxPostalCode.md)| tax postal code to be updated | 

### Return type

[**TaxPostalCode**](TaxPostalCode.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTaxProviderSelfState

> TaxState updateTaxProviderSelfState(stateCode, tax_state)

Updates a Self tax provider state

Updates a Self tax provider state. 


### Example

<!-- UC_START_EXAMPLE updateTaxProviderSelfState -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let stateCode = "stateCode_example"; // String | The state code being updated.
let tax_state = new UltraCartRestApiV2.TaxState(); // TaxState | tax state to be updated
apiInstance.updateTaxProviderSelfState(stateCode, tax_state, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTaxProviderSelfState -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stateCode** | **String**| The state code being updated. | 
 **tax_state** | [**TaxState**](TaxState.md)| tax state to be updated | 

### Return type

[**TaxState**](TaxState.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTaxProviderSovos

> TaxProviderSovos updateTaxProviderSovos(tax_provider_sovos)

Update the Sovos tax provider

Update the Sovos tax provider. 


### Example

<!-- UC_START_EXAMPLE updateTaxProviderSovos -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let tax_provider_sovos = new UltraCartRestApiV2.TaxProviderSovos(); // TaxProviderSovos | TaxProviderSovos object
apiInstance.updateTaxProviderSovos(tax_provider_sovos, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTaxProviderSovos -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tax_provider_sovos** | [**TaxProviderSovos**](TaxProviderSovos.md)| TaxProviderSovos object | 

### Return type

[**TaxProviderSovos**](TaxProviderSovos.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTaxProviderTaxJar

> TaxProviderTaxJar updateTaxProviderTaxJar(tax_provider_taxJar)

Update the TaxJar tax provider

Update the TaxJar tax provider. 


### Example

<!-- UC_START_EXAMPLE updateTaxProviderTaxJar -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let tax_provider_taxJar = new UltraCartRestApiV2.TaxProviderTaxJar(); // TaxProviderTaxJar | TaxProviderTaxJar object
apiInstance.updateTaxProviderTaxJar(tax_provider_taxJar, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTaxProviderTaxJar -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tax_provider_taxJar** | [**TaxProviderTaxJar**](TaxProviderTaxJar.md)| TaxProviderTaxJar object | 

### Return type

[**TaxProviderTaxJar**](TaxProviderTaxJar.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTaxProviderUltraCart

> TaxProviderUltraCart updateTaxProviderUltraCart(tax_provider_ultracart)

Update the UltraCart tax provider

Update the UltraCart tax provider. 


### Example

<!-- UC_START_EXAMPLE updateTaxProviderUltraCart -->

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js'); // https://github.com/UltraCart/sdk_samples/blob/master/javascript/api.js
let apiInstance = new ucApi.TaxApi(apiClient);

// This example is based on our samples_sdk project, but still contains auto-generated content from our sdk generators.
// As such, this might not be the best way to use this object.
// Please see https://github.com/UltraCart/sdk_samples for working examples.

let tax_provider_ultracart = new UltraCartRestApiV2.TaxProviderUltraCart(); // TaxProviderUltraCart | TaxProviderUltraCart object
apiInstance.updateTaxProviderUltraCart(tax_provider_ultracart, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

<!-- UC_END_EXAMPLE updateTaxProviderUltraCart -->

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tax_provider_ultracart** | [**TaxProviderUltraCart**](TaxProviderUltraCart.md)| TaxProviderUltraCart object | 

### Return type

[**TaxProviderUltraCart**](TaxProviderUltraCart.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

