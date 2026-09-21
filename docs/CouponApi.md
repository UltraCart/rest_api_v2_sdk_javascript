# UltraCartRestApiV2.CouponApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCoupon**](CouponApi.md#deleteCoupon) | **DELETE** /coupon/coupons/{coupon_oid} | Delete a coupon
[**deleteCouponsByCode**](CouponApi.md#deleteCouponsByCode) | **DELETE** /coupon/coupons/by_code | Deletes multiple coupons
[**deleteCouponsByOid**](CouponApi.md#deleteCouponsByOid) | **DELETE** /coupon/coupons/by_oid | Deletes multiple coupons
[**doesCouponCodeExist**](CouponApi.md#doesCouponCodeExist) | **GET** /coupon/coupons/merchant_code/{merchant_code}/exists | Determines if a coupon merchant code already exists
[**generateCouponCodes**](CouponApi.md#generateCouponCodes) | **POST** /coupon/coupons/{coupon_oid}/generate_codes | Generates one time codes for a coupon
[**generateOneTimeCodesByMerchantCode**](CouponApi.md#generateOneTimeCodesByMerchantCode) | **POST** /coupon/coupons/merchant_code/{merchant_code}/generate_codes | Generates one time codes by merchant code
[**getAutoApply**](CouponApi.md#getAutoApply) | **GET** /coupon/auto_apply | Retrieve auto apply rules and conditions
[**getCoupon**](CouponApi.md#getCoupon) | **GET** /coupon/coupons/{coupon_oid} | Retrieve a coupon
[**getCouponByMerchantCode**](CouponApi.md#getCouponByMerchantCode) | **GET** /coupon/coupons/merchant_code/{merchant_code} | Retrieve a coupon by merchant code
[**getCoupons**](CouponApi.md#getCoupons) | **GET** /coupon/coupons | Retrieve coupons
[**getCouponsByQuery**](CouponApi.md#getCouponsByQuery) | **POST** /coupon/coupons/query | Retrieve coupons by query
[**getEditorValues**](CouponApi.md#getEditorValues) | **GET** /coupon/editor_values | Retrieve values needed for a coupon editor
[**insertCoupon**](CouponApi.md#insertCoupon) | **POST** /coupon/coupons | Insert a coupon
[**insertCoupons**](CouponApi.md#insertCoupons) | **POST** /coupon/coupons/batch | Insert multiple coupons
[**searchItems**](CouponApi.md#searchItems) | **GET** /coupon/searchItems | Searches for items to display within a coupon editor and assign to coupons
[**updateAutoApply**](CouponApi.md#updateAutoApply) | **POST** /coupon/auto_apply | Update auto apply rules and conditions
[**updateCoupon**](CouponApi.md#updateCoupon) | **PUT** /coupon/coupons/{coupon_oid} | Update a coupon
[**updateCoupons**](CouponApi.md#updateCoupons) | **PUT** /coupon/coupons/batch | Update multiple coupons
[**uploadCouponCodes**](CouponApi.md#uploadCouponCodes) | **POST** /coupon/coupons/{coupon_oid}/upload_codes | Upload one-time codes for a coupon



## deleteCoupon

> deleteCoupon(coupon_oid)

Delete a coupon

Delete a coupon on the UltraCart account. 


### Example

```javascript
import {couponApi} from '../api.js';

export class DeleteCoupon {
    /**
     * Deletes a specific coupon using the UltraCart API
     */
    static async execute() {
        console.log("--- DeleteCoupon ---");

        const expand = undefined; // coupons do not have expansions.

        const coupon = {
            merchant_code: this.generateGuid().substring(0, 8),
            description: "Test coupon for sdk_sample.coupon.DeleteCoupon",
            amount_off_subtotal: {currency_code: "USD", discount_amount: 0.01}
        }; // one penny discount.

        const couponResponse = await new Promise((resolve, reject) => {
            couponApi.insertCoupon(coupon, {_expand: expand}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        const createdCoupon = couponResponse.coupon;

        console.log("Created the following temporary coupon:");
        console.log(`Coupon OID: ${createdCoupon.coupon_oid}`);
        console.log(`Coupon Type: ${createdCoupon.coupon_type}`);
        console.log(`Coupon Description: ${createdCoupon.description}`);

        const couponOid = createdCoupon.coupon_oid;

        // Delete the coupon
        await new Promise((resolve, reject) => {
            couponApi.deleteCoupon(couponOid, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        console.log(`Successfully deleted coupon with ID: ${couponOid}`);
    }

    // Helper method to generate a GUID-like string since TypeScript doesn't have Guid.NewGuid()
    static generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).replace(/-/g, '');
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_oid** | **Number**| The coupon_oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteCouponsByCode

> deleteCouponsByCode(coupon_delete_request)

Deletes multiple coupons

Delete coupons on the UltraCart account. 


### Example

```javascript
import {couponApi} from '../api.js';

export class DeleteCouponByCode {
    /**
     * Deletes a specific coupon using the UltraCart API
     */
    static async execute() {
        console.log("--- DeleteCouponByCode ---");

        const expand = undefined; // coupons do not have expansions.

        const merchant_code = this.generateGuid().substring(0, 8);

        const coupon = {
            merchant_code: merchant_code,
            description: "Test coupon for sdk_sample.coupon.DeleteCoupon",
            amount_off_subtotal: {currency_code: "USD", discount_amount: 0.01}
        }; // one penny discount.

        const couponResponse = await new Promise((resolve, reject) => {
            couponApi.insertCoupon(coupon, {_expand: expand}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        const createdCoupon = couponResponse.coupon;

        console.log("Created the following temporary coupon:");
        console.log(`Coupon OID: ${createdCoupon.coupon_oid}`);
        console.log(`Coupon Type: ${createdCoupon.coupon_type}`);
        console.log(`Coupon Description: ${createdCoupon.description}`);

        await new Promise((resolve, reject) => {
            couponApi.deleteCouponsByCode({coupon_codes: [merchant_code]}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        console.log(`Successfully deleted coupon with merchant_code: ${merchant_code}`);
    }

    // Helper method to generate a GUID-like string since TypeScript doesn't have Guid.NewGuid()
    static generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).replace(/-/g, '');
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_delete_request** | [**CouponDeletesRequest**](CouponDeletesRequest.md)| Coupon oids to delete | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCouponsByOid

> deleteCouponsByOid(coupon_delete_request)

Deletes multiple coupons

Delete coupons on the UltraCart account. 


### Example

```javascript
import {couponApi} from '../api.js';

export class DeleteCouponByOid {
    /**
     * Deletes a specific coupon using the UltraCart API
     */
    static async execute() {
        console.log("--- DeleteCouponByOid ---");

        const expand = undefined; // coupons do not have expansions.

        const merchant_code = this.generateGuid().substring(0, 8);

        const coupon = {
            merchant_code: merchant_code,
            description: "Test coupon for sdk_sample.coupon.DeleteCoupon",
            amount_off_subtotal: {currency_code: "USD", discount_amount: 0.01}
        }; // one penny discount.

        const couponResponse = await new Promise((resolve, reject) => {
            couponApi.insertCoupon(coupon, {_expand: expand}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        const createdCoupon = couponResponse.coupon;

        console.log("Created the following temporary coupon:");
        console.log(`Coupon OID: ${createdCoupon.coupon_oid}`);
        console.log(`Coupon Type: ${createdCoupon.coupon_type}`);
        console.log(`Coupon Description: ${createdCoupon.description}`);

        const couponOid = createdCoupon.coupon_oid;
        await new Promise((resolve, reject) => {
            couponApi.deleteCouponsByOid({coupon_oids: [couponOid]}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        console.log(`Successfully deleted coupon with ID: ${couponOid}`);
    }

    // Helper method to generate a GUID-like string since TypeScript doesn't have Guid.NewGuid()
    static generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).replace(/-/g, '');
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_delete_request** | [**CouponDeletesRequest**](CouponDeletesRequest.md)| Coupon oids to delete | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## doesCouponCodeExist

> CouponExistsResponse doesCouponCodeExist(merchant_code)

Determines if a coupon merchant code already exists

Determines if a coupon merchant code already exists. 


### Example

```javascript
import { couponApi } from '../api.js';

export class DoesCouponCodeExist {
    static async execute() {
        console.log("--- DoesCouponCodeExist ---");

        try {
            const api = couponApi;

            const merchantCode = this.generateGuid().substring(0, 8);

            const couponExistsResponse = await new Promise((resolve, reject) => {
                api.doesCouponCodeExist(merchantCode, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // The response should be false.
            if (couponExistsResponse._exists) {
                throw new Error("CouponApi.doesCouponCodeExist should have returned false since we are checking for a fake coupon.");
            }

            // Now create the coupon and ensure it exists.
            const coupon = {
                merchant_code: merchantCode,
                description: "Test coupon for DoesCouponCodeExist",
                amount_off_subtotal: { currency_code: "USD", discount_amount: 0.01 }
            }; // one penny discount.

            const couponResponse = await new Promise((resolve, reject) => {
                api.insertCoupon(coupon, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const createdCoupon = couponResponse.coupon;

            console.log("Created the following temporary coupon:");
            console.log(`Coupon OID: ${createdCoupon.merchant_code}`);
            console.log(`Coupon Type: ${createdCoupon.coupon_type}`);
            console.log(`Coupon Description: ${createdCoupon.description}`);

            const secondExistsResponse = await new Promise((resolve, reject) => {
                api.doesCouponCodeExist(merchantCode, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            if (!secondExistsResponse._exists) {
                throw new Error(
                    "CouponApi.doesCouponCodeExist should have returned true after creating the coupon."
                );
            }

            // Delete the coupon
            await new Promise((resolve, reject) => {
                api.deleteCoupon(createdCoupon.coupon_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

        } catch (ex) {
            console.log(`Error: ${ex.message}`);
            console.log(ex.stack);
        }
    }

    // Helper method to generate a GUID-like string since TypeScript doesn't have Guid.NewGuid()
    static generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).replace(/-/g, '');
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_code** | **String**| The coupon merchant code to examine. | 

### Return type

[**CouponExistsResponse**](CouponExistsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateCouponCodes

> CouponCodesResponse generateCouponCodes(coupon_oid, coupon_codes_request)

Generates one time codes for a coupon

Generate one time codes for a coupon 


### Example

```javascript
import { couponApi } from '../api.js';
import { DateTime } from 'luxon';

export class GenerateCouponCodes {
    static async execute() {
        console.log("--- GenerateCouponCodes ---");

        try {

            const merchantCode = this.generateGuid().substring(0, 8);

            // Now create the coupon and ensure it exists.
            const coupon = {
                merchant_code: merchantCode,
                description: "Test coupon for GetCoupon",
                amount_off_subtotal: { currency_code: "USD", discount_amount: 0.01 }
            }; // one penny discount.

            const couponResponse = await new Promise((resolve, reject) => {
                couponApi.insertCoupon(coupon, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const createdCoupon = couponResponse.coupon;

            const codesRequest = {
                quantity: 5, // give me 5 codes.
                expiration_dts: DateTime.utc().plus({ days: 90 }).toISO() // do you want the codes to expire?
                // expirationSeconds: null // also an option for short-lived coupons
            };

            const apiResponse = await new Promise((resolve, reject) => {
                couponApi.generateCouponCodes(createdCoupon.coupon_oid, codesRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const couponCodes = apiResponse.coupon_codes;

            // Display generated coupon codes
            console.log(`Generated ${couponCodes.length} coupon codes:`);
            for (const code of couponCodes) {
                console.log(code);
            }

            // Delete the coupon
            await new Promise((resolve, reject) => {
                couponApi.deleteCoupon(createdCoupon.coupon_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

        } catch (ex) {
            console.log(`Error: ${ex.message}`);
            console.log(ex.stack);
        }
    }

    // Helper method to generate a GUID-like string since TypeScript doesn't have Guid.NewGuid()
    static generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).replace(/-/g, '');
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_oid** | **Number**| The coupon oid to generate codes. | 
 **coupon_codes_request** | [**CouponCodesRequest**](CouponCodesRequest.md)| Coupon code generation parameters | 

### Return type

[**CouponCodesResponse**](CouponCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## generateOneTimeCodesByMerchantCode

> CouponCodesResponse generateOneTimeCodesByMerchantCode(merchant_code, coupon_codes_request)

Generates one time codes by merchant code

Generate one time codes by merchant code 


### Example

```javascript
import { couponApi } from '../api.js';
import { DateTime } from 'luxon';

export class GenerateOneTimeCodesByMerchantCode {
    static async execute() {
        console.log("--- GenerateOneTimeCodesByMerchantCode ---");

        try {

            const merchantCode = this.generateGuid().substring(0, 8);

            // Now create the coupon and ensure it exists.
            const coupon = {
                merchant_code: merchantCode,
                description: "Test coupon for GetCoupon",
                amount_off_subtotal: { currencyCode: "USD", discountAmount: 0.01 }
            }; // one penny discount.

            const couponResponse = await new Promise((resolve, reject) => {
                couponApi.insertCoupon(coupon, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const createdCoupon = couponResponse.coupon;

            console.log("Created the following temporary coupon:");
            console.log(`Coupon Code: ${createdCoupon.merchant_code}`);
            console.log(`Coupon Type: ${createdCoupon.coupon_type}`);
            console.log(`Coupon Description: ${createdCoupon.description}`);

            const codesRequest = {
                quantity: 5, // give me 5 codes.
                expiration_dts: DateTime.utc().plus({ days: 90 }).toISO() // do you want the codes to expire?
                // expirationSeconds: null // also an option for short-lived coupons
            };

            const apiResponse = await new Promise((resolve, reject) => {
                couponApi.generateOneTimeCodesByMerchantCode(merchantCode, codesRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const couponCodes = apiResponse.coupon_codes;

            // Display generated coupon codes
            console.log(`Generated ${couponCodes.length} one-time coupon codes for merchant code '${merchantCode}':`);
            for (const code of couponCodes) {
                console.log(code);
            }

            // Delete the coupon
            await new Promise((resolve, reject) => {
                couponApi.deleteCoupon(createdCoupon.coupon_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

        } catch (ex) {
            console.log(`Error: ${ex.message}`);
            console.log(ex.stack);
        }
    }

    // Helper method to generate a GUID-like string since TypeScript doesn't have Guid.NewGuid()
    static generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).replace(/-/g, '');
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_code** | **String**| The merchant code to generate one time codes. | 
 **coupon_codes_request** | [**CouponCodesRequest**](CouponCodesRequest.md)| Coupon code generation parameters | 

### Return type

[**CouponCodesResponse**](CouponCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## getAutoApply

> CouponAutoApplyConditions getAutoApply()

Retrieve auto apply rules and conditions

Retrieve auto apply rules and conditions 


### Example

```javascript
import { couponApi } from '../api.js';

export class GetAutoApply {
    /*
      getAutoApply returns back the items and subtotals that trigger "auto coupons", i.e. coupons that are automatically
      added to a shopping cart.  The manual configuration of auto coupons is at the bottom of the main coupons screen.
      See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1376525/Coupons#Coupons-Navigation
    */
    static async execute() {
        console.log("--- GetAutoApply ---");

        try {

            // Get auto apply coupons information
            const apiResponse = await new Promise((resolve, reject) => {
                couponApi.getAutoApply(function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Display subtotal levels
            console.log("These are the subtotal levels:");
            for (const subtotalLevel of apiResponse.subtotal_levels || []) {
                console.log(subtotalLevel);
            }

            // Display item triggers
            console.log("These are the item triggers:");
            for (const requiredItem of apiResponse.required_items || []) {
                console.log(requiredItem);
            }
        } catch (ex) {
            console.log(`Error: ${ex.message}`);
            console.log(ex.stack);
        }
    }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**CouponAutoApplyConditions**](CouponAutoApplyConditions.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCoupon

> CouponResponse getCoupon(coupon_oid, opts)

Retrieve a coupon

Retrieves a single coupon using the specified coupon profile oid. 


### Example

```javascript
import { couponApi } from '../api.js';

export class GetCoupon {
    static async execute() {
        console.log("--- GetCoupon ---");

        try {

            const merchantCode = this.generateGuid().substring(0, 8);

            // Now create the coupon and ensure it exists.
            const coupon = {
                merchant_code: merchantCode,
                description: "Test coupon for GetCoupon",
                amount_off_subtotal: { currency_code: "USD", discount_amount: 0.01 }
            }; // one penny discount.

            const couponResponse = await new Promise((resolve, reject) => {
                couponApi.insertCoupon(coupon, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const createdCoupon = couponResponse.coupon;

            console.log("Created the following temporary coupon:");
            console.log(`Coupon OID: ${createdCoupon.coupon_oid}`);
            console.log(`Coupon Type: ${createdCoupon.coupon_type}`);
            console.log(`Coupon Description: ${createdCoupon.description}`);

            const retrievedResponse = await new Promise((resolve, reject) => {
                couponApi.getCoupon(createdCoupon.coupon_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const copyOfCoupon = retrievedResponse.coupon;
            console.log("GetCoupon returned the following coupon:");
            console.log(`Coupon OID: ${copyOfCoupon.coupon_oid}`);
            console.log(`Coupon Type: ${copyOfCoupon.coupon_type}`);
            console.log(`Coupon Description: ${copyOfCoupon.description}`);

            // Delete the coupon
            await new Promise((resolve, reject) => {
                couponApi.deleteCoupon(createdCoupon.coupon_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

        } catch (ex) {
            console.log(`Error: ${ex.message}`);
            console.log(ex.stack);
        }
    }

    // Helper method to generate a GUID-like string since TypeScript doesn't have Guid.NewGuid()
    static generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).replace(/-/g, '');
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_oid** | **Number**| The coupon oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCouponByMerchantCode

> CouponResponse getCouponByMerchantCode(merchant_code, opts)

Retrieve a coupon by merchant code

Retrieves a single coupon using the specified merchant code. 


### Example

```javascript
import { couponApi } from '../api.js';

export class GetCouponByMerchantCode {
    static async execute() {
        console.log("--- GetCouponByMerchantCode ---");

        try {

            const merchantCode = this.generateGuid().substring(0, 8);

            // Now create the coupon and ensure it exists.
            const coupon = {
                merchant_code: merchantCode,
                description: "Test coupon for GetCoupon",
                amount_off_subtotal: { currency_code: "USD", discount_amount: 0.01 }
            }; // one penny discount.

            const couponResponse = await new Promise((resolve, reject) => {
                couponApi.insertCoupon(coupon, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const createdCoupon = couponResponse.coupon;

            console.log("Created the following temporary coupon:");
            console.log(`Coupon OID: ${createdCoupon.coupon_oid}`);
            console.log(`Coupon Type: ${createdCoupon.coupon_type}`);
            console.log(`Coupon Description: ${createdCoupon.description}`);

            const retrievedResponse = await new Promise((resolve, reject) => {
                couponApi.getCouponByMerchantCode(merchantCode, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const copyOfCoupon = retrievedResponse.coupon;
            console.log("GetCoupon returned the following coupon:");
            console.log(`Coupon OID: ${copyOfCoupon.coupon_oid}`);
            console.log(`Coupon Type: ${copyOfCoupon.coupon_type}`);
            console.log(`Coupon Description: ${copyOfCoupon.description}`);

            // Delete the coupon
            await new Promise((resolve, reject) => {
                couponApi.deleteCoupon(createdCoupon.coupon_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

        } catch (ex) {
            console.log(`Error: ${ex.message}`);
            console.log(ex.stack);
        }
    }

    // Helper method to generate a GUID-like string since TypeScript doesn't have Guid.NewGuid()
    static generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).replace(/-/g, '');
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_code** | **String**| The coupon merchant code to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCoupons

> CouponsResponse getCoupons(opts)

Retrieve coupons

Retrieves coupons for this account.  If no parameters are specified, all coupons will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
import { DateTime } from 'luxon';
import { couponApi } from '../api.js'; // Added .js extension

/**
 * Retrieves and processes coupons from UltraCart
 */
export class GetCoupons {
    /**
     * Executes the coupon retrieval process
     * @returns Promise resolving to an array of retrieved coupons
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            const coupons = [];

            let iteration = 1;
            let offset = 0;
            const limit = 200;
            let needMoreRecords = true;

            while (needMoreRecords) {
                console.log(`executing iteration #${iteration++}`);
                const blockOfCoupons = await this.getCouponsChunk({ limit, offset });

                if(blockOfCoupons !== undefined && blockOfCoupons !== null) {
                    blockOfCoupons.forEach(coupon => {
                        coupons.push(coupon);
                    });

                    offset += limit;
                    needMoreRecords = blockOfCoupons.length === limit;
                } else {
                    needMoreRecords = false;
                }

                // Optional: rate limiting
                // await new Promise(resolve => setTimeout(resolve, 1000));
            }

            // Display the coupons
            coupons.forEach(coupon => {
                console.log(coupon);
            });

            console.log(`Total coupons retrieved: ${coupons.length}`);

            return coupons;
        }
        catch (ex) {
            const error = ex;
            console.error(`Error: ${error.message}`);
            console.error(error.stack);
            throw ex; // Re-throw to allow caller to handle the error
        }
    }

    /**
     * Returns a block of coupons
     * @param params - Coupon retrieval parameters
     * @returns Promise resolving to a list of Coupon objects
     */
    static async getCouponsChunk(params = {}) {
        // Default parameters
        const defaultParams = {
            merchantCode: undefined,
            description: undefined,
            couponType: undefined,
            startDateBegin: undefined,
            startDateEnd: undefined,
            expirationDateBegin: undefined,
            expirationDateEnd: undefined,
            affiliateOid: undefined,
            excludeExpired: false,
            _limit: 200,
            _offset: 0,
            _sort: undefined,
            _expand: undefined
        };

        // Merge default params with provided params
        const mergedParams = { ...defaultParams, ...params };

        const getResponse = await new Promise((resolve, reject) => {
            couponApi.getCoupons(mergedParams, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        if (getResponse.success && getResponse.success) {
            return getResponse.coupons;
        }

        return [];
    }
}

// Example of how to call the method
// async function example() {
//     try {
//         // Retrieve all coupons
//         const coupons = await GetCoupons.execute();

//         // Retrieve coupons with specific parameters
//         const specificCoupons = await GetCoupons.getCouponsChunk({
//             merchantCode: 'MERCHANT123',
//             excludeExpired: true,
//             limit: 100
//         });
//     } catch (error) {
//         console.error('Failed to retrieve coupons', error);
//     }
// }
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_code** | **String**| Merchant code | [optional] 
 **description** | **String**| Description | [optional] 
 **coupon_type** | **String**| Coupon type | [optional] 
 **start_date_begin** | **String**| Start date begin | [optional] 
 **start_date_end** | **String**| Start date end | [optional] 
 **expiration_date_begin** | **String**| Expiration date begin | [optional] 
 **expiration_date_end** | **String**| Expiration date end | [optional] 
 **affiliate_oid** | **Number**| Affiliate oid | [optional] 
 **exclude_expired** | **Boolean**| Exclude expired | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponsResponse**](CouponsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCouponsByQuery

> CouponsResponse getCouponsByQuery(coupon_query, opts)

Retrieve coupons by query

Retrieves coupons from the account.  If no parameters are specified, all coupons will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
// Import API and UltraCart types
import { couponApi } from '../api.js';
import { DateTime } from 'luxon';

// Namespace-like structure using a class (TypeScript doesn't have namespaces like C#, but this mimics it)
export class GetCouponsByQuery {
  /*
   * Retrieves coupons by query. Can filter on specific coupons or return back all coupons. Supports pagination.
   * A note about the coupon type below. Those are string literals representing coupons. This method is used in UltraCart's
   * backend, and it uses a dropdown box for that value showing friendly descriptions of them.
   *
   * It's not anticipated a merchant would need to query by coupon type, but in the event you do, here's the list of constants:
   * "BOGO limit L"
   * "Free shipping method Y"
   * "Free shipping method Y with purchase of items Z"
   * "Free shipping method Y with subtotal Z"
   * "Free shipping on item Z"
   * "Free X with purchase of Y dollars limit L"
   * "Free X with purchase of Y dollars limit L and shipping Z"
   * "Free X with purchase of Y limit L"
   * "Free X with purchase of Y limit L and free shipping"
   * "I Free X with every J purchase of Y limit L"
   * "I Free X with every J purchase of Y mix and match group limit L"
   * "Item X for Y with purchase of Z limit L"
   * "multiple X $ off item Z limit L"
   * "No discount"
   * "Tiered Dollar Off Subtotal"
   * "Tiered % off items Z limit L"
   * "Tiered $ off item Z limit L"
   * "Tiered Percent off shipping methods Y with subtotal Z"
   * "Tiered Percent Off Subtotal"
   * "X dollars off shipping method Y with purchase of items Z"
   * "X dollars off subtotal with purchase Y items"
   * "X $ for item Z limit L"
   * "X more loyalty cashback"
   * "X more loyalty points"
   * "X % off item Z and free shipping"
   * "X $ off item Z limit L"
   * "X % off item Z limit L"
   * "X % off msrp item Z limit L"
   * "X % off retail item Z limit L"
   * "X $ off shipping method Y"
   * "X % off shipping method Y"
   * "X $ off subtotal"
   * "X % off subtotal"
   * "X $ off subtotal and shipping"
   * "X % off subtotal free shipping method Y"
   * "X % off subtotal limit L"
   * "X off subtotal with purchase block of L item Y"
   * "X % off subtotal with purchase of item Y"
   * "X % off subtotal with purchase of Y"
   * "X $ off subtotal with Y $ purchase"
   * "X $ off subtotal with Y $ purchase and free shipping"
   * "X % off Y with purchase Z limit L"
   * "X % off Y with T purchase Z limit L"
   * "X percent more loyalty points"
   * "X $ shipping method Y with subtotal Z"
   * "X ? subtotal"
   */
  static async execute() {
    console.log(`--- GetCouponsByQuery ---`);

    try {
      const coupons = [];

      let iteration = 1;
      let offset = 0;
      const limit = 200;
      let moreRecordsToFetch = true;

      while (moreRecordsToFetch) {
        console.log(`executing iteration ${iteration}`);
        const chunkOfCoupons = await this.getCouponChunk(offset, limit);
        coupons.push(...chunkOfCoupons);
        offset += limit;
        moreRecordsToFetch = chunkOfCoupons.length === limit;
        iteration++;
      }

      // Display the coupons
      for (const coupon of coupons) {
        console.log(coupon);
      }

      console.log(`Total coupons retrieved: ${coupons.length}`);
    } catch (ex) {
      console.log(`Error: ${ex.message}`);
      console.log(ex.stack);
    }
  }

  /**
   * Returns a chunk of coupons based on query parameters
   * @param offset Pagination offset
   * @param limit Maximum number of records to return
   * @returns List of matching coupons
   */
  static async getCouponChunk(offset, limit) {
    // Create coupon API instance (assuming API key is handled in '../api')
    const apiInstance = couponApi;

    const query = {
      merchant_code: "10OFF", // supports partial matching
      description: "Saturday", // supports partial matching
      // couponType: null, // see the note at the top of this sample
      // startDtsBegin: DateTime.now().setZone('America/New_York').minus({ days: 2000 }).toISO(), // 2,000 days ago
      // startDtsEnd: DateTime.now().setZone('America/New_York').toISO(),
      // expirationDtsBegin: null,
      // expirationDtsEnd: null,
      // affiliateOid: 0, // this requires an affiliate_oid. If you need help finding an affiliate's oid, contact support
      exclude_expired: true,
    };

    const expand = undefined; // coupons do not have expansions
    const sort = "merchant_code"; // Possible sorts: "coupon_type", "merchant_code", "description", "start_dts", "expiration_dts", "quickbooks_code"

    // UltraCart API call with parameters as an anonymous interface
    const opts = {
      _limit: limit,
      _offset: offset,
      _sort: sort,
      _expand: expand,
    };

    const apiResponse = await new Promise((resolve, reject) => {
      apiInstance.getCouponsByQuery(query, opts, function (error, data, response) {
        if (error) {
          reject(error);
        } else {
          resolve(data, response);
        }
      });
    });

    if (apiResponse.coupons) {
      return apiResponse.coupons;
    }
    return [];
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_query** | [**CouponQuery**](CouponQuery.md)| Coupon query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the coupons.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponsResponse**](CouponsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEditorValues

> CouponEditorValues getEditorValues()

Retrieve values needed for a coupon editor

Retrieve values needed for a coupon editor 


### Example

```javascript
// This is an internal method used by our Coupon management screen.  It returns back all the static data needed
// for our dropdown lists, such as coupon constants.  You can call it if you like, but the data won't be
// of much use.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**CouponEditorValues**](CouponEditorValues.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertCoupon

> CouponResponse insertCoupon(coupon, opts)

Insert a coupon

Insert a coupon on the UltraCart account. 


### Example

```javascript
// Import API and UltraCart types
import { couponApi } from '../api.js';

// Namespace-like structure using a class
export class InsertCoupon {
  static async execute() {
    console.log(`--- InsertCoupon ---`);
    try {
      // Create a new coupon
      const coupon = {
        merchant_code: "InsertCouponSample",
        description: "One penny off subtotal",
        // Each coupon must have a 'type' defined by creating a child object directly beneath the main Coupon object.
        // This is complex and there are a LOT of coupon types. See the backend (secure.ultracart.com) coupon screens
        // to get an idea of what functionality each coupon possesses. If you're not sure, contact UltraCart support.
        amount_off_subtotal: {
          discount_amount: 0.01, // Decimal becomes number in TypeScript
        },
      };

      // Here are the different coupon types, but beware that new coupons are added frequently.
      // CouponAmountOffItems
      // CouponAmountOffShipping
      // CouponAmountOffShippingWithItemsPurchase
      // CouponAmountOffSubtotal
      // CouponAmountOffSubtotalAndShipping
      // CouponAmountOffSubtotalFreeShippingWithPurchase
      // CouponAmountOffSubtotalWithBlockPurchase
      // CouponAmountOffSubtotalWithItemsPurchase
      // CouponAmountOffSubtotalWithPurchase
      // CouponAmountShippingWithSubtotal
      // CouponDiscountItems
      // CouponDiscountItemWithItemPurchase
      // CouponFreeItemAndShippingWithSubtotal
      // CouponFreeItemsWithItemPurchase
      // CouponFreeItemsWithMixMatchPurchase
      // CouponFreeItemWithItemPurchase
      // CouponFreeItemWithItemPurchaseAndFreeShipping
      // CouponFreeItemWithSubtotal
      // CouponFreeShipping
      // CouponFreeShippingSpecificItems
      // CouponFreeShippingWithItemsPurchase
      // CouponFreeShippingWithSubtotal
      // CouponMoreLoyaltyCashback
      // CouponMoreLoyaltyPoints
      // CouponMultipleAmountsOffItems
      // CouponNoDiscount
      // CouponPercentMoreLoyaltyCashback
      // CouponPercentMoreLoyaltyPoints
      // CouponPercentOffItems
      // CouponPercentOffItemsAndFreeShipping
      // CouponPercentOffItemsWithItemsPurchase
      // CouponPercentOffItemWithItemsQuantityPurchase
      // CouponPercentOffMsrpItems
      // CouponPercentOffRetailPriceItems
      // CouponPercentOffShipping
      // CouponPercentOffSubtotal
      // CouponPercentOffSubtotalAndFreeShipping
      // CouponPercentOffSubtotalLimit
      // CouponPercentOffSubtotalWithItemsPurchase
      // CouponPercentOffSubtotalWithSubtotal
      // CouponTieredAmountOffItems
      // CouponTieredAmountOffSubtotal
      // CouponTieredPercentOffItems
      // CouponTieredPercentOffShipping
      // CouponTieredPercentOffSubtotal
      // CouponTieredPercentOffSubtotalBasedOnMSRP
      // CouponTierItemDiscount
      // CouponTierPercent
      // CouponTierQuantityAmount
      // CouponTierQuantityPercent

      const expand = undefined; // coupons do not have expansions

      const apiResponse = await new Promise((resolve, reject) => {
        couponApi.insertCoupon(coupon, {_expand: expand}, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });

      const createdCoupon = apiResponse.coupon;
      console.log("Created the following temporary coupon:");
      console.log(`Coupon OID: ${createdCoupon?.coupon_oid}`);
      console.log(`Coupon Type: ${createdCoupon?.coupon_type}`);
      console.log(`Coupon Description: ${createdCoupon?.description}`);

      console.log("Deleting newly created coupon to clean up.");
      if (createdCoupon?.coupon_oid) {

        await new Promise((resolve, reject) => {
          couponApi.deleteCoupon(createdCoupon.coupon_oid, function (error, data, response) {
            if (error) {
              reject(error);
            } else {
              resolve(data, response);
            }
          });
        });
      }
    } catch (ex) {
      console.log(`Error: ${ex.message}`);
      console.log(ex.stack);
    }
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon** | [**Coupon**](Coupon.md)| Coupon to insert | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertCoupons

> CouponsResponse insertCoupons(coupons_request, opts)

Insert multiple coupons

Insert multiple coupon on the UltraCart account. 


### Example

```javascript
// Import API and UltraCart types
import { couponApi } from '../api.js';

// Namespace-like structure using a class
export class InsertCoupons {
  static async execute() {
    console.log(`--- InsertCoupons ---`);
    try {
      // Create coupon objects
      const coupon1 = {
        merchant_code: "PennyOff",
        description: "Test Coupon for InsertCoupons sample",
        amount_off_subtotal: {
          discount_amount: 0.01, // Decimal becomes number in TypeScript
        }, // See InsertCoupon for examples of types
      };

      const coupon2 = {
        merchant_code: "TwoPenniesOff",
        description: "Test Coupon for InsertCoupons sample",
        amount_off_subtotal: {
          discount_amount: 0.02, // Decimal becomes number in TypeScript
        }, // See InsertCoupon for examples of types
      };

      // Create CouponsRequest object
      const couponsRequest = {
        coupons: [coupon1, coupon2],
      };

      const apiResponse = await new Promise((resolve, reject) => {
        couponApi.insertCoupons(couponsRequest, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });

      console.log(apiResponse);

      // Clean up: delete newly created coupons
      if (apiResponse.coupons) {
        for (const coupon of apiResponse.coupons) {
          console.log(`Deleting newly created coupon (Coupon OID ${coupon.coupon_oid}) to clean up.`);
          if (coupon.coupon_oid) {
            await new Promise((resolve, reject) => {
              couponApi.deleteCoupon(coupon.coupon_oid, function (error, data, response) {
                if (error) {
                  reject(error);
                } else {
                  resolve(data, response);
                }
              });
            });
          }
        }
      }
    } catch (ex) {
      console.log(`Error: ${ex.message}`);
      console.log(ex.stack);
    }
  }
}

// Example usage (optional, remove if not needed)
// InsertCoupons.execute().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupons_request** | [**CouponsRequest**](CouponsRequest.md)| Coupons to insert (maximum 50) | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**CouponsResponse**](CouponsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## searchItems

> CouponItemSearchResultsResponse searchItems(opts)

Searches for items to display within a coupon editor and assign to coupons

Searches for items to display within a coupon editor and assign to coupons 


### Example

```javascript
// This is an internal method used by our Coupon management screen.  It searches merchant items to display in
// some of the coupon editor dropdowns.  See ItemApi.getItemsByQuery if you need to search items.  This method
// is inflexible and geared toward our UI.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **s** | **String**|  | [optional] 
 **m** | **Number**|  | [optional] 

### Return type

[**CouponItemSearchResultsResponse**](CouponItemSearchResultsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAutoApply

> updateAutoApply(conditions)

Update auto apply rules and conditions

Update auto apply rules and conditions 


### Example

```javascript
// Import API and UltraCart types
import { couponApi } from '../api.js';

// Namespace-like structure using a class
export class UpdateAutoApply {
  /*
   * updateAutoApply updates the items and subtotals conditions that trigger "auto coupons", i.e. coupons that are automatically
   * added to a shopping cart. The manual configuration of auto coupons is at the bottom of the main coupons screen.
   * See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1376525/Coupons#Coupons-Navigation
   *
   * // Success is 200 (There is no content. Yes, this should return a 204, but it returns a 200 with no content)
   */
  static async execute() {
    console.log(`--- UpdateAutoApply ---`);

    try {
      // Create auto apply conditions
      const autoApply = {};

      // Create item condition
      const itemCondition = {
        required_item_id: "ITEM_ABC",
        coupon_code: "10OFF",
      };
      const itemConditions = [itemCondition];

      // Create subtotal condition
      const subtotalCondition = {
        minimum_subtotal: 50, // must spend fifty dollars
        coupon_code: "5OFF", // Corrected from item condition in original code
      };
      const subtotalConditions = [subtotalCondition];

      // Set conditions to auto apply object
      autoApply.required_items = itemConditions;
      autoApply.subtotal_levels = subtotalConditions;

      // Update auto apply conditions
      const response = await new Promise((resolve, reject) => {
        couponApi.updateAutoApply(autoApply, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });

      console.log("Auto apply conditions updated successfully");
    } catch (ex) {
      console.log(`Error: ${ex.message}`);
      console.log(ex.stack);
    }
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conditions** | [**CouponAutoApplyConditions**](CouponAutoApplyConditions.md)| Conditions | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCoupon

> CouponResponse updateCoupon(coupon_oid, coupon, opts)

Update a coupon

Update a coupon on the UltraCart account. 


### Example

```javascript
// Import API and UltraCart types
import { couponApi } from '../api.js';
import { DateTime } from 'luxon';

// Namespace-like structure using a class
export class UpdateCoupon {
  static async execute() {
    console.log(`--- UpdateCoupon ---`);

    try {
      // Generate a random 8-character merchant code (replacing GUID)
      const merchantCode = Math.random().toString(36).substring(2, 10);

      // Create the coupon and ensure it exists
      const coupon = {
        merchant_code: merchantCode,
        description: "Test coupon for GetCoupon",
        amount_off_subtotal: {
          currency: "USD",
          discountAmount: 0.01, // one penny discount, decimal becomes number
        },
      };

      // Insert the coupon
      const couponResponse = await new Promise((resolve, reject) => {
        couponApi.insertCoupon(coupon, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });
      const createdCoupon = couponResponse.coupon;

      if (!createdCoupon?.coupon_oid) {
        throw new Error("Failed to create coupon; no OID returned");
      }

      // Update the coupon. This can be difficult given the complexity of coupons. See InsertCoupon sample for details.
      const updatedCouponData = {
        ...createdCoupon,
        expiration_dts: DateTime.now()
          .setZone('America/New_York')
          .plus({ days: 90 })
          .toISO(), // 90 days from now in ISO8601 format
      };

      // Update the coupon
      const updatedResponse = await new Promise((resolve, reject) => {
        couponApi.updateCoupon(createdCoupon.coupon_oid, updatedCouponData, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });
      const updatedCoupon = updatedResponse.coupon;

      // Display the updated coupon
      console.log(updatedCoupon);
    } catch (ex) {
      console.log(`Error: ${ex.message}`);
      console.log(ex.stack);
    }
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_oid** | **Number**| The coupon_oid to update. | 
 **coupon** | [**Coupon**](Coupon.md)| Coupon to update | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CouponResponse**](CouponResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateCoupons

> CouponsResponse updateCoupons(coupons_request, opts)

Update multiple coupons

Update multiple coupon on the UltraCart account. 


### Example

```javascript
// Import API and UltraCart types
import { couponApi } from '../api.js';
import { DateTime } from 'luxon';

// Namespace-like structure using a class
export class UpdateCoupons {
  static async execute() {
    console.log(`--- UpdateCoupons ---`);

    try {
      // Generate a random 8-character merchant code (replacing GUID)
      const merchantCode = Math.random().toString(36).substring(2, 10);

      // Create the coupon and ensure it exists
      const coupon = {
        merchant_code: merchantCode,
        description: "Test coupon for GetCoupon",
        amount_off_subtotal: {
          currency: "USD",
          discount_amount: 0.01, // one penny discount, decimal becomes number
        },
      };

      // Insert the coupon
      const couponResponse = await new Promise((resolve, reject) => {
        couponApi.insertCoupon(coupon, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });
      const createdCoupon = couponResponse.coupon;

      if (!createdCoupon?.coupon_oid) {
        throw new Error("Failed to create coupon; no OID returned");
      }

      // Update the coupon. This can be difficult given the complexity of coupons. See InsertCoupon sample for details.
      const updatedCouponData = {
        ...createdCoupon,
        expiration_dts: DateTime.now()
          .setZone('America/New_York')
          .plus({ days: 90 })
          .toISO(), // 90 days from now in ISO8601 format
      };

      // This example only has one coupon. But it's a trivial matter to add more coupons
      const couponsRequest = {
        coupons: [updatedCouponData],
      };

      // Update the coupons
      const updatedResponse = await new Promise((resolve, reject) => {
        couponApi.updateCoupons(couponsRequest, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });
      const updatedCoupons = updatedResponse.coupons ?? [];

      // Display the updated coupons
      for (const updatedCoupon of updatedCoupons) {
        console.log(updatedCoupon);
      }

      // Delete the coupon
      await new Promise((resolve, reject) => {
        couponApi.deleteCoupon(createdCoupon.coupon_oid, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });
    } catch (ex) {
      console.log(`Error: ${ex.message}`);
      console.log(ex.stack);
    }
  }
}

// Example usage (optional, remove if not needed)
// UpdateCoupons.execute().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupons_request** | [**CouponsRequest**](CouponsRequest.md)| Coupons to update (synchronous maximum 50 / asynchronous maximum 100) | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 
 **_async** | **Boolean**| True if the operation should be run async.  No result returned | [optional] 

### Return type

[**CouponsResponse**](CouponsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## uploadCouponCodes

> UploadCouponCodesResponse uploadCouponCodes(coupon_oid, upload_coupon_codes_request)

Upload one-time codes for a coupon

Upload one-time codes for a coupon 


### Example

```javascript
// Import API and UltraCart types
import { couponApi } from '../api.js';

// Namespace-like structure using a class
export class UploadCouponCodes {
  /*
   * uploadCouponCodes allows a merchant to upload one-time use codes and associate them with a merchant code (i.e. a coupon).
   * UltraCart has methods for generating one-time codes, and they work well, but this method exists when the merchant generates
   * them themselves. This frequently occurs when a merchant sends out a mailer with unique coupon codes on the mailer. The
   * merchant can then upload those codes with this method.
   */
  static async execute() {
    console.log(`--- UploadCouponCodes ---`);

    try {
      // Generate a random 8-character merchant code (replacing GUID)
      const merchantCode = Math.random().toString(36).substring(2, 10);

      // Create the coupon and ensure it exists
      const coupon = {
        merchant_code: merchantCode,
        description: "Test coupon for GetCoupon",
        amount_off_subtotal: {
          currency: "USD",
          discount_amount: 0.01, // one penny discount, decimal becomes number
        },
      };

      // Insert the coupon
      const couponResponse = await new Promise((resolve, reject) => {
        couponApi.insertCoupon(coupon, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });
      const createdCoupon = couponResponse.coupon;

      if (!createdCoupon?.coupon_oid) {
        throw new Error("Failed to create coupon; no OID returned");
      }

      // Create request for uploading coupon codes
      const codesRequest = {
        coupon_codes: ["code1", "code2", "code3"],
      };

      // Upload the coupon codes
      const apiResponse = await new Promise((resolve, reject) => {
        couponApi.uploadCouponCodes(createdCoupon.coupon_oid, codesRequest, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });

      // Display results
      console.log("Uploaded codes:");
      for (const code of apiResponse.uploaded_codes ?? []) {
        console.log(code);
      }

      console.log("Duplicated codes:");
      for (const code of apiResponse.duplicate_codes ?? []) {
        console.log(code);
      }

      console.log("Rejected codes:");
      for (const code of apiResponse.rejected_codes ?? []) {
        console.log(code);
      }

        // Delete the coupon
        await new Promise((resolve, reject) => {
          couponApi.deleteCoupon(createdCoupon.coupon_oid, function (error, data, response) {
            if (error) {
              reject(error);
            } else {
              resolve(data, response);
            }
          });
        });
      } catch (ex) {
        console.log(`Error: ${ex.message}`);
        console.log(ex.stack);
      }
    }
  }

  // Example usage (optional, remove if not needed)
  // UploadCouponCodes.execute().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_oid** | **Number**| The coupon oid to associate with the provided one-time codes. | 
 **upload_coupon_codes_request** | [**UploadCouponCodesRequest**](UploadCouponCodesRequest.md)| One-time coupon codes | 

### Return type

[**UploadCouponCodesResponse**](UploadCouponCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

