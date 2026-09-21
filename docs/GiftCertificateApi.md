# UltraCartRestApiV2.GiftCertificateApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGiftCertificateLedgerEntry**](GiftCertificateApi.md#addGiftCertificateLedgerEntry) | **POST** /gift_certificate/gift_certificates/{gift_certificate_oid}/ledger_entry | Add a gift certificate ledger entry
[**createGiftCertificate**](GiftCertificateApi.md#createGiftCertificate) | **POST** /gift_certificate/gift_certificates | Create a gift certificate
[**deleteGiftCertificate**](GiftCertificateApi.md#deleteGiftCertificate) | **DELETE** /gift_certificate/gift_certificates/{gift_certificate_oid} | Delete a gift certificate
[**getGiftCertificateByCode**](GiftCertificateApi.md#getGiftCertificateByCode) | **POST** /gift_certificate/gift_certificates/by_code/{code} | Retrieve gift certificate by code
[**getGiftCertificateByOid**](GiftCertificateApi.md#getGiftCertificateByOid) | **POST** /gift_certificate/gift_certificates/{gift_certificate_oid} | Retrieve gift certificate by oid
[**getGiftCertificatesByEmail**](GiftCertificateApi.md#getGiftCertificatesByEmail) | **POST** /gift_certificate/gift_certificates/by_email/{email} | Retrieve gift certificate by email
[**getGiftCertificatesByQuery**](GiftCertificateApi.md#getGiftCertificatesByQuery) | **POST** /gift_certificate/gift_certificates/query | Retrieve gift certificates by query
[**updateGiftCertificate**](GiftCertificateApi.md#updateGiftCertificate) | **PUT** /gift_certificate/gift_certificates/{gift_certificate_oid} | Update a gift certificate



## addGiftCertificateLedgerEntry

> GiftCertificateResponse addGiftCertificateLedgerEntry(gift_certificate_oid, gift_certificate_ledger_entry)

Add a gift certificate ledger entry

Adds a ledger entry for this gift certificate. 


### Example

```javascript
var ucApi = require('ultra_cart_rest_api_v2');
const { apiClient } = require('../api.js');
var luxon = require('luxon');

var giftCertificateApi = new ucApi.GiftCertificateApi(apiClient);

let giftCertificateOid = 676813;
let ledgerEntry = new ucApi.GiftCertificateLedgerEntry();

ledgerEntry.amount = -65.35;  // this is the change amount in the gift certificate.  this is not a balance.  it will be subtracted from it.
ledgerEntry.description = "Customer bought something over the counter using this gift certificate.";
ledgerEntry.entry_dts = luxon.DateTime.now().setZone('America/New_York').toISO();
ledgerEntry.gift_certificate_ledger_oid = 0;  // the system will assign an oid.  do not assign one here.
ledgerEntry.gift_certificate_oid = giftCertificateOid  // this is an existing gift certificate oid.  I created it using createGiftCertificate.ts
ledgerEntry.reference_order_id = 'BLAH-12345'; // if this ledger entry is related to an order, add it here, else use null.


// add ledger entry does not take an expansion variable.  it will return the entire object by default.
giftCertificateApi.addGiftCertificateLedgerEntry(giftCertificateOid, ledgerEntry, 
    function(error, data, response){
        let giftCertificate = data.gift_certificate;    
        console.log('giftCertificate', giftCertificate);
    });
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gift_certificate_oid** | **Number**|  | 
 **gift_certificate_ledger_entry** | [**GiftCertificateLedgerEntry**](GiftCertificateLedgerEntry.md)| Gift certificate ledger entry | 

### Return type

[**GiftCertificateResponse**](GiftCertificateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createGiftCertificate

> GiftCertificateResponse createGiftCertificate(gift_certificate_create_request)

Create a gift certificate

Creates a gift certificate for this merchant account. 


### Example

```javascript
import {DateTime} from 'luxon';
import {giftCertificateApi} from '../api.js';

export class CreateGiftCertificate {
    static async execute() {
        const giftCertificate = await CreateGiftCertificate.createGiftCertificateCall();
        console.log("Gift Certificate:", giftCertificate);
    }

    static async createGiftCertificateCall() {

        const giftCertificateCreateRequest = {
            amount: 200.00,
            initial_ledger_description: "Created via TypeScript SDK",
            merchant_note: "Internal comment here",
            email: "support@ultracart.com",
            expiration_dts: DateTime.now()
                .setZone('America/New_York')
                .plus({months: 3})
                .toISO()
        };

        const request = {
            giftCertificateCreateRequest: giftCertificateCreateRequest
        };

        // create does not take an expansion variable.  it will return the entire object by default.
        const gcResponse = await new Promise((resolve, reject) => {
            giftCertificateApi.createGiftCertificate(request, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        return gcResponse.gift_certificate;
    }
}

export default CreateGiftCertificate;
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gift_certificate_create_request** | [**GiftCertificateCreateRequest**](GiftCertificateCreateRequest.md)| Gift certificate create request | 

### Return type

[**GiftCertificateResponse**](GiftCertificateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteGiftCertificate

> deleteGiftCertificate(gift_certificate_oid)

Delete a gift certificate

Deletes a gift certificate for this merchant account. 


### Example

```javascript
import { giftCertificateApi } from '../api.js';

export class DeleteGiftCertificate {
    static async execute() {
        const giftCertificate = await this.deleteGiftCertificateCall();
        console.debug(giftCertificate, "Gift Certificate");
    }

    static async deleteGiftCertificateCall() {
        const api = giftCertificateApi;

        const giftCertificateOid = 676713;

        // Wrap the delete call in a Promise
        await new Promise((resolve, reject) => {
            api.deleteGiftCertificate(giftCertificateOid, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });


        // if I re-query the gift certificate after deleting, I will still get an object back, but the
        // deleted flag on the object will be true.
        // by_oid does not take an expansion variable.  it will return the entire object by default.
        const gcResponse = await new Promise((resolve, reject) => {
            api.getGiftCertificateByOid(giftCertificateOid, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });

        return gcResponse.gift_certificate;
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gift_certificate_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGiftCertificateByCode

> GiftCertificateResponse getGiftCertificateByCode(code)

Retrieve gift certificate by code

Retrieves a gift certificate from the account based on the code (the value the customer enters at checkout time). 


### Example

```javascript
import { giftCertificateApi } from '../api.js';

// ReSharper disable once ClassNeverInstantiated.Global
export class GetGiftCertificateByCode {
    static async execute() {
        const giftCertificate = await this.getGiftCertificateByCodeCall();
        console.log(giftCertificate, "Gift Certificate");
    }

    // ReSharper disable once MemberCanBePrivate.Global
    static async getGiftCertificateByCodeCall() {
        const api = giftCertificateApi;
        
        const code = "X8PV761V2Z";

        // by_code does not take an expansion variable.  it will return the entire object by default.
        const gcResponse = await new Promise((resolve, reject) => {
            api.getGiftCertificateByCode(code, function(error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });

        return gcResponse.gift_certificate;
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | 

### Return type

[**GiftCertificateResponse**](GiftCertificateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGiftCertificateByOid

> GiftCertificateResponse getGiftCertificateByOid(gift_certificate_oid)

Retrieve gift certificate by oid

Retrieves a gift certificate from the account based on the internal primary key. 


### Example

```javascript
import { giftCertificateApi } from '../api.js';

// ReSharper disable once ClassNeverInstantiated.Global
export class GetGiftCertificateByOid {
    static async execute() {
        const giftCertificate = await this.getGiftCertificateByOidCall();
        console.log(giftCertificate, "Gift Certificate");
    }

    // ReSharper disable once MemberCanBePrivate.Global
    static async getGiftCertificateByOidCall() {
        const api = giftCertificateApi;
        
        const giftCertificateOid = 676713;

        // by_oid does not take an expansion variable.  it will return the entire object by default.
        const gcResponse = await new Promise((resolve, reject) => {
            api.getGiftCertificateByOid(giftCertificateOid, function(error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });

        return gcResponse.gift_certificate;
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gift_certificate_oid** | **Number**|  | 

### Return type

[**GiftCertificateResponse**](GiftCertificateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGiftCertificatesByEmail

> GiftCertificatesResponse getGiftCertificatesByEmail(email)

Retrieve gift certificate by email

Retrieves all gift certificates from the account based on customer email. 


### Example

```javascript
import { giftCertificateApi } from '../api.js';

// ReSharper disable once ClassNeverInstantiated.Global
export class GetGiftCertificatesByEmail {
    static async execute() {
        const giftCertificates = await this.getGiftCertificatesByEmailCall();
        if(giftCertificates !== undefined) {
            for (const gc of giftCertificates) {
                console.log(gc);
            }
        }
    }

    // ReSharper disable once MemberCanBePrivate.Global
    static async getGiftCertificatesByEmailCall() {
        const api = giftCertificateApi;
        
        const email = "support@ultracart.com";

        // by_email does not take an expansion variable.  it will return the entire object by default.
        const gcResponse = await new Promise((resolve, reject) => {
            api.getGiftCertificatesByEmail(email, function(error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });

        return gcResponse.gift_certificates;
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 

### Return type

[**GiftCertificatesResponse**](GiftCertificatesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGiftCertificatesByQuery

> GiftCertificatesResponse getGiftCertificatesByQuery(gift_certificate_query, opts)

Retrieve gift certificates by query

Retrieves gift certificates from the account.  If no parameters are specified, all gift certificates will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
import { giftCertificateApi } from '../api.js';

// ReSharper disable once ClassNeverInstantiated.Global
export class GetGiftCertificatesByQuery {
    static async execute() {
        const giftCertificates = await this.getGiftCertificateByQueryCall();
        if(giftCertificates !== undefined) {
            for (const giftCertificate of giftCertificates) {
                // Assuming Utility is available in your TS environment
                console.log(giftCertificate);
            }
        }
    }

    static async getGiftCertificateChunk(api, offset, limit) {
        const expansion = "ledger";

        // leaving query empty, so no filtering, and I should get all records returned.
        const query = {};

        const gcResponse = await new Promise((resolve, reject) => {
            api.getGiftCertificatesByQuery(
                query, {_limit: limit, _offset: offset, _expand: expansion},
                function(error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                }
            );
        });

        if (gcResponse !== undefined && gcResponse.success === true && gcResponse.gift_certificates !== null) {
            return gcResponse.gift_certificates;
        }

        return [];
    }

    // ReSharper disable once MemberCanBePrivate.Global
    static async getGiftCertificateByQueryCall() {
        const api = giftCertificateApi;

        const giftCertificates = [];

        let iteration = 1;
        let offset = 0;
        const limit = 200;
        let moreRecordsToFetch = true;

        while (moreRecordsToFetch) {
            console.log(`executing iteration ${iteration}`);
            const chunkOfCertificates = await this.getGiftCertificateChunk(api, offset, limit);
            if(chunkOfCertificates !== undefined && chunkOfCertificates !== null) {
                giftCertificates.push(...chunkOfCertificates);
                offset += limit;
                moreRecordsToFetch = chunkOfCertificates.length === limit;
                iteration++;
            } else {
                moreRecordsToFetch = false;
            }
        }

        return giftCertificates;
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gift_certificate_query** | [**GiftCertificateQuery**](GiftCertificateQuery.md)| Gift certificates query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch customers that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**GiftCertificatesResponse**](GiftCertificatesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateGiftCertificate

> GiftCertificateResponse updateGiftCertificate(gift_certificate_oid, gift_certificate)

Update a gift certificate

Update a gift certificate for this merchant account. 


### Example

```javascript
import { giftCertificateApi } from '../api.js';

// ReSharper disable once ClassNeverInstantiated.Global
export class UpdateGiftCertificate {
    static async execute() {
        const giftCertificate = await this.updateGiftCertificateCall();
        console.log(giftCertificate);
    }

    // ReSharper disable once MemberCanBePrivate.Global
    static async updateGiftCertificateCall() {
        const api = giftCertificateApi;
        
        const giftCertificateOid = 676713;
        
        const gcResponse = await new Promise((resolve, reject) => {
            api.getGiftCertificateByOid({giftCertificateOid: giftCertificateOid}, function(error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });

        if(gcResponse.gift_certificate !== undefined) {
            const giftCertificate = gcResponse.gift_certificate;
            giftCertificate.email = "perry@ultracart.com";

            // update does not take an expansion variable.  it will return the entire object by default.
            const updatedResponse = await new Promise((resolve, reject) => {
                api.updateGiftCertificate(
                    giftCertificateOid, giftCertificate,
                    function(error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    }
                );
            });

            return updatedResponse.gift_certificate;
        }
        // handle this condition somehow.
        return undefined;
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gift_certificate_oid** | **Number**|  | 
 **gift_certificate** | [**GiftCertificate**](GiftCertificate.md)| Gift certificate | 

### Return type

[**GiftCertificateResponse**](GiftCertificateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

