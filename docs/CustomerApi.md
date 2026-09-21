# UltraCartRestApiV2.CustomerApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomerStoreCredit**](CustomerApi.md#addCustomerStoreCredit) | **POST** /customer/customers/{customer_profile_oid}/store_credit | Adds store credit to a customer
[**adjustInternalCertificate**](CustomerApi.md#adjustInternalCertificate) | **POST** /customer/customers/{customer_profile_oid}/adjust_cashback_balance | Updates the cashback balance for a customer by updating the internal gift certificate used, creating the gift certificate if needed.
[**adjustLoyaltyPoints**](CustomerApi.md#adjustLoyaltyPoints) | **POST** /customer/customers/{customer_profile_oid}/adjust_loyalty_points | Adjusts the loyalty points for a customer by adding a record to the loyalty ledger.
[**deleteCustomer**](CustomerApi.md#deleteCustomer) | **DELETE** /customer/customers/{customer_profile_oid} | Delete a customer
[**deleteWishListItem**](CustomerApi.md#deleteWishListItem) | **DELETE** /customer/customers/{customer_profile_oid}/wishlist/{customer_wishlist_item_oid} | Delete a customer wishlist item
[**getCustomer**](CustomerApi.md#getCustomer) | **GET** /customer/customers/{customer_profile_oid} | Retrieve a customer
[**getCustomerByEmail**](CustomerApi.md#getCustomerByEmail) | **GET** /customer/customers/by_email/{email} | Retrieve a customer by Email
[**getCustomerEditorValues**](CustomerApi.md#getCustomerEditorValues) | **GET** /customer/editor_values | Retrieve values needed for a customer profile editor
[**getCustomerEmailLists**](CustomerApi.md#getCustomerEmailLists) | **GET** /customer/email_lists | Retrieve all email lists across all storefronts
[**getCustomerLoyalty**](CustomerApi.md#getCustomerLoyalty) | **GET** /customer/customers/{customer_profile_oid}/loyalty | Retrieve the loyalty points, ledger and redemptions for a customer
[**getCustomerStoreCredit**](CustomerApi.md#getCustomerStoreCredit) | **GET** /customer/customers/{customer_profile_oid}/store_credit | Retrieve the customer store credit accumulated through loyalty programs
[**getCustomerWishList**](CustomerApi.md#getCustomerWishList) | **GET** /customer/customers/{customer_profile_oid}/wishlist | Retrieve wishlist items for customer
[**getCustomerWishListItem**](CustomerApi.md#getCustomerWishListItem) | **GET** /customer/customers/{customer_profile_oid}/wishlist/{customer_wishlist_item_oid} | Retrieve wishlist item for customer
[**getCustomers**](CustomerApi.md#getCustomers) | **GET** /customer/customers | Retrieve customers
[**getCustomersByQuery**](CustomerApi.md#getCustomersByQuery) | **POST** /customer/customers/query | Retrieve customers by query
[**getCustomersForDataTables**](CustomerApi.md#getCustomersForDataTables) | **POST** /customer/customers/dataTables | Retrieve customers for DataTables plugin
[**getEmailVerificationToken**](CustomerApi.md#getEmailVerificationToken) | **POST** /customer/customers/email_verify/get_token | Create a token that can be used to verify a customer email address
[**getMagicLink**](CustomerApi.md#getMagicLink) | **PUT** /customer/customers/{customer_profile_oid}/magic_link/{storefront_host_name} | getMagicLink
[**getQuickBooksOnlineCustomers**](CustomerApi.md#getQuickBooksOnlineCustomers) | **GET** /customer/quickbooks_online/customers | Search the merchant&#39;s QuickBooks Online customers
[**insertCustomer**](CustomerApi.md#insertCustomer) | **POST** /customer/customers | Insert a customer
[**insertWishListItem**](CustomerApi.md#insertWishListItem) | **POST** /customer/customers/{customer_profile_oid}/wishlist | Insert a customer wishlist item
[**mergeCustomer**](CustomerApi.md#mergeCustomer) | **PUT** /customer/customers/{customer_profile_oid}/merge | Merge customer into this customer
[**searchCustomerProfileValues**](CustomerApi.md#searchCustomerProfileValues) | **POST** /customer/search | Searches for all matching values (using POST)
[**searchCustomers**](CustomerApi.md#searchCustomers) | **GET** /customer/customers/search | Search for customers
[**updateCustomer**](CustomerApi.md#updateCustomer) | **PUT** /customer/customers/{customer_profile_oid} | Update a customer
[**updateCustomerEmailLists**](CustomerApi.md#updateCustomerEmailLists) | **POST** /customer/customers/{customer_profile_oid}/email_lists | Update email list subscriptions for a customer
[**updateCustomerEmailSuppression**](CustomerApi.md#updateCustomerEmailSuppression) | **POST** /customer/customers/{customer_profile_oid}/email_suppression | Clear email suppression for a customer
[**updateWishListItem**](CustomerApi.md#updateWishListItem) | **PUT** /customer/customers/{customer_profile_oid}/wishlist/{customer_wishlist_item_oid} | Update a customer wishlist item
[**validateEmailVerificationToken**](CustomerApi.md#validateEmailVerificationToken) | **POST** /customer/customers/email_verify/validate_token | Validate a token that can be used to verify a customer email address



## addCustomerStoreCredit

> BaseResponse addCustomerStoreCredit(customer_profile_oid, store_credit_request)

Adds store credit to a customer

Adds store credit to a customer 


### Example

```javascript
import {customerApi} from '../api.js';

export class AddCustomerStoreCredit {
    /**
     * Adds store credit to a customer's account.
     *
     * This method requires a customer profile oid. This is a unique number used by UltraCart to identify a customer.
     * If you do not know a customer's oid, call getCustomerByEmail() to retrieve the customer and their oid.
     *
     * Possible Errors:
     * Missing store credit -> "store_credit_request.amount is missing and is required."
     * Zero or negative store credit -> "store_credit_request.amount must be a positive amount."
     */
    static async execute() {
        const email = "test@ultracart.com";

        // Retrieve customer by email
        const customerResponse = await new Promise((resolve, reject) => {
            customerApi.getCustomerByEmail(email, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        const customer = customerResponse.customer;

        if (!customer || !customer.customer_profile_oid) {
            throw new Error("Customer not found or missing customer profile OID");
        }

        const customerOid = customer.customer_profile_oid;

        const storeCreditRequest = {
            amount: 20.00,
            description: "Customer is super cool and I wanted to give them store credit.",
            expiration_days: 365, // or leave undefined for no expiration
            vesting_days: 45 // customer has to wait 45 days to use it.
        };

        const apiResponse = await new Promise((resolve, reject) => {
            customerApi.addCustomerStoreCredit(customerOid, storeCreditRequest, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        if (apiResponse.error) {
            console.error(apiResponse.error.developer_message);
            console.error(apiResponse.error.user_message);
            throw new Error("Failed to add store credit");
        }

        console.log(apiResponse.success);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid to credit. | 
 **store_credit_request** | [**CustomerStoreCreditAddRequest**](CustomerStoreCreditAddRequest.md)| Store credit to add | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## adjustInternalCertificate

> AdjustInternalCertificateResponse adjustInternalCertificate(customer_profile_oid, adjust_internal_certificate_request)

Updates the cashback balance for a customer by updating the internal gift certificate used, creating the gift certificate if needed.

Updates the cashback balance for a customer by updating the internal gift certificate used, creating the gift certificate if needed. 


### Example

```javascript
import {customerApi} from '../api.js';
import {DateTime} from 'luxon';

export class AdjustInternalCertificate {
    /**
     * Adjusts the cashback balance of a customer. This method's name is adjustInternalCertificate, which
     * is a poor choice of naming, but results from an underlying implementation of using an internal gift certificate
     * to track cashback balance. Sorry for the confusion.
     *
     * This method requires a customer profile oid. This is a unique number used by UltraCart to identify a customer.
     * If you do not know a customer's oid, call getCustomerByEmail() to retrieve the customer and their oid.
     *
     * Possible Errors:
     * Missing adjustment amount -> "adjust_internal_certificate_request.adjustment_amount is required and was missing"
     */
    static async execute() {
        const email = "test@ultracart.com";

        // Retrieve customer by email
        const customerResponse = await new Promise((resolve, reject) => {
            customerApi.getCustomerByEmail(email, function(error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        const customer = customerResponse.customer;

        if (!customer || !customer.customer_profile_oid) {
            throw new Error("Customer not found or missing customer profile OID");
        }

        const customerOid = customer.customer_profile_oid;

        const adjustRequest = {
            description: "Adjusting customer cashback balance because they called and complained about product.",
            expiration_days: 365, // expires in 365 days
            vesting_days: 45, // customer has to wait 45 days to use it.
            adjustment_amount: 59, // add 59 to their balance.
            order_id: "DEMO-12345", // or leave undefined. this ties the adjustment to a particular order.
            entry_dts: DateTime.now().setZone('America/New_York').toISO() // use current time in ISO format
        };

        const apiResponse = await new Promise((resolve, reject) => {
            customerApi.adjustInternalCertificate(customerOid,adjustRequest, function(error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        if (apiResponse.error) {
            console.error(apiResponse.error.developer_message);
            console.error(apiResponse.error.user_message);
            throw new Error("Failed to adjust internal certificate");
        }

        console.log(`Success: ${apiResponse.success}`);
        console.log(`Adjustment Amount: ${apiResponse.adjustment_amount}`);
        console.log(`Balance Amount: ${apiResponse.balance_amount}`);

        console.log(apiResponse);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer profile oid | 
 **adjust_internal_certificate_request** | [**AdjustInternalCertificateRequest**](AdjustInternalCertificateRequest.md)| adjustInternalCertificateRequest | 

### Return type

[**AdjustInternalCertificateResponse**](AdjustInternalCertificateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## adjustLoyaltyPoints

> AdjustLoyaltyPointsResponse adjustLoyaltyPoints(customer_profile_oid, adjust_loyalty_points_request)

Adjusts the loyalty points for a customer by adding a record to the loyalty ledger.

Adjusts the loyalty points for a customer by adding a record to the loyalty ledger.  The loyalty ledger is append only.  Records are never updated or deleted, so a correction is made by posting a second adjustment with the opposite sign. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer profile oid | 
 **adjust_loyalty_points_request** | [**AdjustLoyaltyPointsRequest**](AdjustLoyaltyPointsRequest.md)| adjustLoyaltyPointsRequest | 

### Return type

[**AdjustLoyaltyPointsResponse**](AdjustLoyaltyPointsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## deleteCustomer

> deleteCustomer(customer_profile_oid)

Delete a customer

Delete a customer on the UltraCart account. 


### Example

```javascript
import {CustomerFunctions} from './customerFunctions.js';

export class DeleteCustomer {
    static async execute() {
        try {
            const customerOid = await CustomerFunctions.insertSampleCustomer();
            await CustomerFunctions.deleteSampleCustomer(customerOid);
        } catch (ex) {
            console.error("An Exception occurred. Please review the following error:");
            console.error(ex); // <-- change_me: handle gracefully
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer_profile_oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteWishListItem

> deleteWishListItem(customer_profile_oid, customer_wishlist_item_oid)

Delete a customer wishlist item

Delete a customer wishlist item 


### Example

```javascript
import {customerApi} from '../api.js';
import {ItemFunctions} from '../item/itemFunctions.js';
import {CustomerFunctions} from './customerFunctions.js';

/**
 * The wishlist methods allow management of a customer's wishlist.
 * This includes:
 *     DeleteWishListItem
 *     GetCustomerWishList
 *     GetCustomerWishListItem
 *     InsertWishListItem
 *     UpdateWishListItem
 * These methods provide a standard CRUD interface.
 *
 * You'll need merchant_item_oids to insert wishlist items. If you don't know the oids,
 * call ItemApi.GetItemByMerchantItemId() to retrieve the item, then get item.MerchantItemOid
 *
 * Note: Priority of wishlist item, 3 being low priority and 5 is high priority.
 */
export class DeleteWishListItem {
    static async execute() {
        try {
            // create a few items first.
            const firstItemOid = await ItemFunctions.insertSampleItemAndGetOid();
            const secondItemOid = await ItemFunctions.insertSampleItemAndGetOid();

            // create a customer
            const customerOid = await CustomerFunctions.insertSampleCustomer();

            // TODO: If you don't know the customer oid, use GetCustomerByEmail() to retrieve the customer.

            // add some wish list items.
            const firstWishItem = {
                customer_profile_oid: customerOid,
                merchant_item_oid: firstItemOid,
                comments: "I really want this for my birthday",
                priority: 3 // Priority of wishlist item, 3 being low priority and 5 is high priority.
            };
            const firstCreatedWishItem = await new Promise((resolve, reject) => {
                customerApi.insertWishListItem(customerOid, firstWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const secondWishItem = {
                customer_profile_oid: customerOid,
                merchant_item_oid: secondItemOid,
                comments: "Christmas Idea!",
                priority: 5 // Priority of wishlist item, 3 being low priority and 5 is high priority.
            };
            const secondCreatedWishItem = await new Promise((resolve, reject) => {
                customerApi.insertWishListItem(customerOid, secondWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            if (firstCreatedWishItem === undefined || firstCreatedWishItem.customer_profile_oid === undefined) {
                console.error("first wish list item is undefined.  update failed.");
                return;
            }

            if (secondCreatedWishItem === undefined || secondCreatedWishItem.customer_profile_oid === undefined) {
                console.error("second wish list item is undefined.  update failed.");
                return;
            }

            // retrieve one wishlist item again
            const firstCreatedWishItemCopyResponse = await new Promise((resolve, reject) => {
                customerApi.getCustomerWishListItem(customerOid, firstCreatedWishItem.customer_wishlist_item_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const firstCreatedWishItemCopy = firstCreatedWishItemCopyResponse.wishlist_item;

            // retrieve all wishlist items
            const allWishListItems = await new Promise((resolve, reject) => {
                customerApi.getCustomerWishList(customerOid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // update an item.
            const updatedSecondWishItem = await new Promise((resolve, reject) => {
                customerApi.updateWishListItem(customerOid, secondCreatedWishItem.customer_wishlist_item_oid, secondCreatedWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // delete a wish list item
            await new Promise((resolve, reject) => {
                customerApi.deleteWishListItem(customerOid, firstCreatedWishItem.customer_wishlist_item_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Clean up
            await CustomerFunctions.deleteSampleCustomer(customerOid);
            await ItemFunctions.deleteSampleItemByOid(firstItemOid);
            await ItemFunctions.deleteSampleItemByOid(secondItemOid);
        } catch (ex) {
            console.error("An Exception occurred. Please review the following error:");
            console.error(ex); // <-- change_me: handle gracefully
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid for this wishlist. | 
 **customer_wishlist_item_oid** | **Number**| The wishlist oid for this wishlist item to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomer

> CustomerResponse getCustomer(customer_profile_oid, opts)

Retrieve a customer

Retrieves a single customer using the specified customer profile oid. 


### Example

```javascript
import { customerApi } from '../api.js';
import { CustomerFunctions } from './customerFunctions.js';

export class GetCustomer {
    /**
     * Of the two GetCustomer methods, you'll probably always use GetCustomerByEmail instead of this one.
     * Most customer logic revolves around the email, not the customer oid. The latter is only meaningful as a primary
     * key in the UltraCart databases. But here is an example of using GetCustomer().
     */
    static async execute() {
        try {
            const email = CustomerFunctions.createRandomEmail();
            const customerOid = await CustomerFunctions.insertSampleCustomer(email);

            // the expand variable is set to return just the address fields.
            // see CustomerFunctions for a list of expansions, or consult the source: https://www.ultracart.com/api/
            const apiResponse = await new Promise((resolve, reject) => {
                customerApi.getCustomer(customerOid,{_expand: 'billing,shipping'}, function(error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const customer = apiResponse.customer; // assuming this succeeded

            console.log(customer);

            await CustomerFunctions.deleteSampleCustomer(customerOid);
        } catch (ex) {
            console.error("An Exception occurred. Please review the following error:");
            console.error(ex); // <-- change_me: handle gracefully
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerByEmail

> CustomerResponse getCustomerByEmail(email, opts)

Retrieve a customer by Email

Retrieves a single customer using the specified customer email address. 


### Example

```javascript
import {customerApi} from '../api.js';
import {CustomerFunctions} from './customerFunctions.js';

export class GetCustomerByEmail {
    /**
     * Of the two GetCustomer methods, you'll probably always use this one over GetCustomer.
     * Most customer logic revolves around the email, not the customer oid. The latter is only meaningful as a primary
     * key in the UltraCart databases. But our sample functions return back the oid, so we'll ignore that and just
     * use the email that we create.
     */
    static async execute() {
        try {
            const email = CustomerFunctions.createRandomEmail();
            const customerOid = await CustomerFunctions.insertSampleCustomer(email);

            // the expand variable is set to return just the address fields.
            // see CustomerFunctions for a list of expansions, or consult the source: https://www.ultracart.com/api/
            const apiResponse = await new Promise((resolve, reject) => {
                customerApi.getCustomerByEmail(email, {_expand: 'billing,shipping'}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const customer = apiResponse.customer; // assuming this succeeded

            console.log(customer);

            await CustomerFunctions.deleteSampleCustomer(customerOid);
        } catch (ex) {
            console.error("An Exception occurred. Please review the following error:");
            console.error(ex); // <-- change_me: handle gracefully
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| The email address of the customer to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerEditorValues

> CustomerEditorValues getCustomerEditorValues()

Retrieve values needed for a customer profile editor

Retrieve values needed for a customer profile editor. 


### Example

```javascript
// This is an internal method used by our Customer management screen.  It returns back all the static data needed
// for our dropdown lists, such as lists of state and countries.  You can call it if you like, but the data won't be
// of much use.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**CustomerEditorValues**](CustomerEditorValues.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerEmailLists

> EmailListsResponse getCustomerEmailLists()

Retrieve all email lists across all storefronts

Retrieve all email lists across all storefronts 


### Example

```javascript
// This is an internal method used by our Email workflow engines.  It returns back all the email lists a customer
// is currently subscribed to.  It's geared towards our UI needs, so the data returned may appear cryptic.
//  We're not including a sample for it because we don't envision it being valuable to a merchant.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**EmailListsResponse**](EmailListsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerLoyalty

> CustomerLoyaltyResponse getCustomerLoyalty(customer_profile_oid)

Retrieve the loyalty points, ledger and redemptions for a customer

Retrieve the loyalty points, ledger and redemptions for a customer.  This is a convenience method that returns the same information as expanding loyalty on the customer object, without having to retrieve the entire customer. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid to retrieve. | 

### Return type

[**CustomerLoyaltyResponse**](CustomerLoyaltyResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerStoreCredit

> CustomerStoreCreditResponse getCustomerStoreCredit(customer_profile_oid)

Retrieve the customer store credit accumulated through loyalty programs

Retrieve the customer store credit accumulated through loyalty programs 


### Example

```javascript
import {customerApi} from '../api.js';
import {CustomerFunctions} from './customerFunctions.js';

export class GetCustomerStoreCredit {
    /*
        getCustomerStoreCredit returns back the store credit for a customer, which includes:
        total - lifetime credit
        available - currently available store credit
        vesting - amount of store credit vesting
        expiring - amount of store credit expiring within 30 days
        pastLedgers - transaction history
        futureLedgers - future transactions including expiring entries
     */
    static async execute() {
        try {
            // create a customer
            const customerOid = await CustomerFunctions.insertSampleCustomer();

            // add some store credit.
            const firstAddRequest = {
                description: "First credit add",
                vesting_days: 10,
                expiration_days: 20, // that's not a lot of time!
                amount: 20
            };
            await new Promise((resolve, reject) => {
                customerApi.addCustomerStoreCredit(customerOid, firstAddRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // add more store credit.
            const secondAddRequest = {
                description: "Second credit add",
                vesting_days: 0, // immediately available.
                expiration_days: 90,
                amount: 40
            };
            await new Promise((resolve, reject) => {
                customerApi.addCustomerStoreCredit(customerOid, secondAddRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const apiResponse = await new Promise((resolve, reject) => {
                customerApi.getCustomerStoreCredit(customerOid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const storeCredit = apiResponse.customer_store_credit;

            console.log(storeCredit); // <-- There's a lot of information inside this object.

            // clean up this sample.
            await CustomerFunctions.deleteSampleCustomer(customerOid);
        } catch (e) {
            console.log("An Exception occurred. Please review the following error:");
            console.log(e); // <-- change_me: handle gracefully
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid to retrieve. | 

### Return type

[**CustomerStoreCreditResponse**](CustomerStoreCreditResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerWishList

> CustomerWishListItemsResponse getCustomerWishList(customer_profile_oid)

Retrieve wishlist items for customer

Retrieve wishlist items for customer. 


### Example

```javascript
import {customerApi} from '../api.js';
import {ItemFunctions} from '../item/itemFunctions.js';
import {CustomerFunctions} from './customerFunctions.js';

/**
 * The wishlist methods allow management of a customer's wishlist.
 * This includes:
 *     DeleteWishListItem
 *     GetCustomerWishList
 *     GetCustomerWishListItem
 *     InsertWishListItem
 *     UpdateWishListItem
 * These methods provide a standard CRUD interface.
 *
 * You'll need merchant_item_oids to insert wishlist items. If you don't know the oids,
 * call ItemApi.GetItemByMerchantItemId() to retrieve the item, then get item.MerchantItemOid
 *
 * Note: Priority of wishlist item, 3 being low priority and 5 is high priority.
 */
export class GetCustomerWishList  {
    static async execute() {
        try {
            // create a few items first.
            const firstItemOid = await ItemFunctions.insertSampleItemAndGetOid();
            const secondItemOid = await ItemFunctions.insertSampleItemAndGetOid();

            // create a customer
            const customerOid = await CustomerFunctions.insertSampleCustomer();

            // TODO: If you don't know the customer oid, use GetCustomerByEmail() to retrieve the customer.

            // add some wish list items.
            const firstWishItem = {
                customer_profile_oid: customerOid,
                merchant_item_oid: firstItemOid,
                comments: "I really want this for my birthday",
                priority: 3 // Priority of wishlist item, 3 being low priority and 5 is high priority.
            };
            const firstCreatedWishItem = await new Promise((resolve, reject) => {
                customerApi.insertWishListItem(customerOid, firstWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const secondWishItem = {
                customer_profile_oid: customerOid,
                merchant_item_oid: secondItemOid,
                comments: "Christmas Idea!",
                priority: 5 // Priority of wishlist item, 3 being low priority and 5 is high priority.
            };
            const secondCreatedWishItem = await new Promise((resolve, reject) => {
                customerApi.insertWishListItem(customerOid, secondWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            if (firstCreatedWishItem === undefined || firstCreatedWishItem.customer_profile_oid === undefined) {
                console.error("first wish list item is undefined.  update failed.");
                return;
            }

            if (secondCreatedWishItem === undefined || secondCreatedWishItem.customer_profile_oid === undefined) {
                console.error("second wish list item is undefined.  update failed.");
                return;
            }

            // retrieve one wishlist item again
            const firstCreatedWishItemCopyResponse = await new Promise((resolve, reject) => {
                customerApi.getCustomerWishListItem(customerOid, firstCreatedWishItem.customer_wishlist_item_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const firstCreatedWishItemCopy = firstCreatedWishItemCopyResponse.wishlist_item;

            // retrieve all wishlist items
            const allWishListItems = await new Promise((resolve, reject) => {
                customerApi.getCustomerWishList(customerOid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // update an item.
            const updatedSecondWishItem = await new Promise((resolve, reject) => {
                customerApi.updateWishListItem(customerOid, secondCreatedWishItem.customer_wishlist_item_oid, secondCreatedWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // delete a wish list item
            await new Promise((resolve, reject) => {
                customerApi.deleteWishListItem(customerOid, firstCreatedWishItem.customer_wishlist_item_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Clean up
            await CustomerFunctions.deleteSampleCustomer(customerOid);
            await ItemFunctions.deleteSampleItemByOid(firstItemOid);
            await ItemFunctions.deleteSampleItemByOid(secondItemOid);
        } catch (ex) {
            console.error("An Exception occurred. Please review the following error:");
            console.error(ex); // <-- change_me: handle gracefully
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid for this wishlist. | 

### Return type

[**CustomerWishListItemsResponse**](CustomerWishListItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomerWishListItem

> CustomerWishListItemResponse getCustomerWishListItem(customer_profile_oid, customer_wishlist_item_oid)

Retrieve wishlist item for customer

Retrieve wishlist item for customer. 


### Example

```javascript
import {customerApi} from '../api.js';
import {ItemFunctions} from '../item/itemFunctions.js';
import {CustomerFunctions} from './customerFunctions.js';

/**
 * The wishlist methods allow management of a customer's wishlist.
 * This includes:
 *     DeleteWishListItem
 *     GetCustomerWishList
 *     GetCustomerWishListItem
 *     InsertWishListItem
 *     UpdateWishListItem
 * These methods provide a standard CRUD interface.
 *
 * You'll need merchant_item_oids to insert wishlist items. If you don't know the oids,
 * call ItemApi.GetItemByMerchantItemId() to retrieve the item, then get item.MerchantItemOid
 *
 * Note: Priority of wishlist item, 3 being low priority and 5 is high priority.
 */
export class GetCustomerWishListItem {
    static async execute() {
        try {
            // create a few items first.
            const firstItemOid = await ItemFunctions.insertSampleItemAndGetOid();
            const secondItemOid = await ItemFunctions.insertSampleItemAndGetOid();

            // create a customer
            const customerOid = await CustomerFunctions.insertSampleCustomer();

            // TODO: If you don't know the customer oid, use GetCustomerByEmail() to retrieve the customer.

            // add some wish list items.
            const firstWishItem = {
                customer_profile_oid: customerOid,
                merchant_item_oid: firstItemOid,
                comments: "I really want this for my birthday",
                priority: 3 // Priority of wishlist item, 3 being low priority and 5 is high priority.
            };
            const firstCreatedWishItem = await new Promise((resolve, reject) => {
                customerApi.insertWishListItem(customerOid, firstWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const secondWishItem = {
                customer_profile_oid: customerOid,
                merchant_item_oid: secondItemOid,
                comments: "Christmas Idea!",
                priority: 5 // Priority of wishlist item, 3 being low priority and 5 is high priority.
            };
            const secondCreatedWishItem = await new Promise((resolve, reject) => {
                customerApi.insertWishListItem(customerOid, secondWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            if (firstCreatedWishItem === undefined || firstCreatedWishItem.customer_profile_oid === undefined) {
                console.error("first wish list item is undefined.  update failed.");
                return;
            }

            if (secondCreatedWishItem === undefined || secondCreatedWishItem.customer_profile_oid === undefined) {
                console.error("second wish list item is undefined.  update failed.");
                return;
            }

            // retrieve one wishlist item again
            const firstCreatedWishItemCopyResponse = await new Promise((resolve, reject) => {
                customerApi.getCustomerWishListItem(customerOid, firstCreatedWishItem.customer_wishlist_item_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const firstCreatedWishItemCopy = firstCreatedWishItemCopyResponse.wishlist_item;

            // retrieve all wishlist items
            const allWishListItems = await new Promise((resolve, reject) => {
                customerApi.getCustomerWishList(customerOid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // update an item.
            const updatedSecondWishItem = await new Promise((resolve, reject) => {
                customerApi.updateWishListItem(customerOid, secondCreatedWishItem.customer_wishlist_item_oid, secondCreatedWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // delete a wish list item
            await new Promise((resolve, reject) => {
                customerApi.deleteWishListItem(customerOid, firstCreatedWishItem.customer_wishlist_item_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Clean up
            await CustomerFunctions.deleteSampleCustomer(customerOid);
            await ItemFunctions.deleteSampleItemByOid(firstItemOid);
            await ItemFunctions.deleteSampleItemByOid(secondItemOid);
        } catch (ex) {
            console.error("An Exception occurred. Please review the following error:");
            console.error(ex); // <-- change_me: handle gracefully
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid for this wishlist. | 
 **customer_wishlist_item_oid** | **Number**| The wishlist oid for this wishlist item. | 

### Return type

[**CustomerWishListItemResponse**](CustomerWishListItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomers

> CustomersResponse getCustomers(opts)

Retrieve customers

Retrieves customers from the account.  If no parameters are specified, all customers will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
import {customerApi} from '../api.js';

export class GetCustomers {
    /**
     * This example illustrates how to retrieve customers. It uses the pagination logic necessary to query all customers.
     * This method was the first GetCustomers and has parameters for all the search terms. It's an ogre. Using
     * GetCustomersByQuery is much easier to use.
     */
    static async getCustomerChunk(offset, limit) {
        // The real devil in the GetCustomers calls is the expansion, making sure you return everything you need without
        // returning everything since these objects are extremely large. The customer object can be truly large with
        // all the order history. These are the possible expansion values.
        /*
            attachments     billing     cards           cc_emails       loyalty     orders_summary          pricing_tiers
            privacy         properties  quotes_summary  reviewer        shipping    software_entitlements   tags
            tax_codes
         */
        const expand = "shipping,billing"; // just the address fields. contact us if you're unsure

        // TODO: Seriously, use GetCustomersByQuery -- it's so much better than this old method.
        const params = {
            email: undefined,
            qbClass: undefined,
            quickbooksCode: undefined,
            lastModifiedDtsStart: undefined,
            lastModifiedDtsEnd: undefined,
            signupDtsStart: undefined,
            signupDtsEnd: undefined,
            billingFirstName: undefined,
            billingLastName: undefined,
            billingCompany: undefined,
            billingCity: undefined,
            billingState: undefined,
            billingPostalCode: undefined,
            billingCountryCode: undefined,
            billingDayPhone: undefined,
            billingEveningPhone: undefined,
            shippingFirstName: undefined,
            shippingLastName: undefined,
            shippingCompany: undefined,
            shippingCity: undefined,
            shippingState: undefined,
            shippingPostalCode: undefined,
            shippingCountryCode: undefined,
            shippingDayPhone: undefined,
            shippingEveningPhone: undefined,
            pricingTierOid: undefined,
            pricingTierName: undefined,
            _limit: limit,
            _offset: offset,
            _since: undefined,
            _sort: undefined,
            _expand: expand
        };

        const apiResponse = await new Promise((resolve, reject) => {
            customerApi.getCustomers(params, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        if (apiResponse.customers) {
            return apiResponse.customers;
        }
        return [];
    }

    static async execute() {
        try {
            const customers = [];

            let iteration = 1;
            let offset = 0;
            const limit = 200;
            let moreRecordsToFetch = true;

            while (moreRecordsToFetch) {
                console.log(`Executing iteration ${iteration}`);

                const chunkOfCustomers = await GetCustomers.getCustomerChunk(offset, limit);
                customers.push(...chunkOfCustomers);
                offset = offset + limit;
                moreRecordsToFetch = chunkOfCustomers.length === limit;
                iteration++;
            }

            // This will be verbose...
            console.log(customers);
        } catch (ex) {
            console.error(`Exception occurred: ${ex.message}`);
            console.error(ex);
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email | [optional] 
 **qb_class** | **String**| Quickbooks class | [optional] 
 **quickbooks_code** | **String**| Quickbooks code | [optional] 
 **last_modified_dts_start** | **String**| Last modified date start | [optional] 
 **last_modified_dts_end** | **String**| Last modified date end | [optional] 
 **signup_dts_start** | **String**| Signup date start | [optional] 
 **signup_dts_end** | **String**| Signup date end | [optional] 
 **billing_first_name** | **String**| Billing first name | [optional] 
 **billing_last_name** | **String**| Billing last name | [optional] 
 **billing_company** | **String**| Billing company | [optional] 
 **billing_city** | **String**| Billing city | [optional] 
 **billing_state** | **String**| Billing state | [optional] 
 **billing_postal_code** | **String**| Billing postal code | [optional] 
 **billing_country_code** | **String**| Billing country code | [optional] 
 **billing_day_phone** | **String**| Billing day phone | [optional] 
 **billing_evening_phone** | **String**| Billing evening phone | [optional] 
 **shipping_first_name** | **String**| Shipping first name | [optional] 
 **shipping_last_name** | **String**| Shipping last name | [optional] 
 **shipping_company** | **String**| Shipping company | [optional] 
 **shipping_city** | **String**| Shipping city | [optional] 
 **shipping_state** | **String**| Shipping state | [optional] 
 **shipping_postal_code** | **String**| Shipping postal code | [optional] 
 **shipping_country_code** | **String**| Shipping country code | [optional] 
 **shipping_day_phone** | **String**| Shipping day phone | [optional] 
 **shipping_evening_phone** | **String**| Shipping evening phone | [optional] 
 **pricing_tier_oid** | **Number**| Pricing tier oid | [optional] 
 **pricing_tier_name** | **String**| Pricing tier name | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch customers that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomersResponse**](CustomersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomersByQuery

> CustomersResponse getCustomersByQuery(customer_query, opts)

Retrieve customers by query

Retrieves customers from the account.  If no parameters are specified, all customers will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
import { customerApi } from '../api.js';

export class GetCustomersByQuery {
    /*
     * This example illustrates how to retrieve customers. It uses the pagination logic necessary to query all customers.
     */
    static async execute() {
        // pulling all records could take a long time.
        const customers = [];

        let iteration = 1;
        let offset = 0;
        const limit = 200;
        let moreRecordsToFetch = true;

        try {
            while (moreRecordsToFetch) {
                console.log("executing iteration " + iteration);

                const chunkOfCustomers = await GetCustomersByQuery.getCustomerChunk(offset, limit);
                customers.push(...chunkOfCustomers);
                offset = offset + limit;
                moreRecordsToFetch = chunkOfCustomers.length === limit;
                iteration++;
            }
        } catch (e) {
            console.log("Exception occurred on iteration " + iteration);
            console.log(e);
            process.exit(1);
        }

        // this will be verbose...
        for (const customer of customers) {
            console.log(customer);
        }
    }

    /**
     * Retrieves a chunk of customers based on specified parameters
     * @param offset Starting position for retrieval
     * @param limit Maximum number of records to retrieve
     * @returns Array of customers
     */
    static async getCustomerChunk(offset, limit) {
        // The real devil in the getCustomers calls is the expansion, making sure you return everything you need without
        // returning everything since these objects are extremely large. The customer object can be truly large with
        // all the order history. These are the possible expansion values.
        /*
            attachments     billing     cards           cc_emails       loyalty     orders_summary          pricing_tiers
            privacy         properties  quotes_summary  reviewer        shipping    software_entitlements   tags
            tax_codes
        */
        const expand = "shipping,billing"; // just the address fields. contact us if you're unsure

        // TODO: This is just showing all the possibilities. In reality, you'll just assign the filters you need.
        const query = {
            //email: undefined,
            //qbClass: undefined,
            //quickbooksCode: undefined,
            //lastModifiedDtsStart: undefined,
            //lastModifiedDtsEnd: undefined,
            //signupDtsStart: undefined,
            //signupDtsEnd: undefined,
            //billingFirstName: undefined,
            //billingLastName: undefined,
            //billingCompany: undefined,
            //billingCity: undefined,
            //billingState: undefined,
            //billingPostalCode: undefined,
            //billingCountryCode: undefined,
            //billingDayPhone: undefined,
            //billingEveningPhone: undefined,
            //shippingFirstName: undefined,
            //shippingLastName: undefined,
            //shippingCompany: undefined,
            //shippingCity: undefined,
            //shippingState: undefined,
            //shippingPostalCode: undefined,
            //shippingCountryCode: undefined,
            //shippingDayPhone: undefined,
            //shippingEveningPhone: undefined,
            //pricingTierOid: undefined,
            //pricingTierName: undefined
        };

        const opts = {
            _offset: offset,
            _limit: limit,
            _since: undefined,
            _sort: "email",
            _expand: expand
        };

        const apiResponse = await new Promise((resolve, reject) => {
            customerApi.getCustomersByQuery(query, opts, function(error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        if (apiResponse.customers) {
            return apiResponse.customers;
        }
        return [];
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_query** | [**CustomerQuery**](CustomerQuery.md)| Customer query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch customers that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomersResponse**](CustomersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCustomersForDataTables

> DataTablesServerSideResponse getCustomersForDataTables(opts)

Retrieve customers for DataTables plugin

Retrieves customers from the account.  If no searches are specified, all customers will be returned. 


### Example

```javascript
// This is an internal method used by our Customer management screen.  It won't be of much use to you, so we're
// not including a sample.  getCustomer, getCustomerByEmail, getCustomers and getCustomersByQuery are more useful
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**DataTablesServerSideResponse**](DataTablesServerSideResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailVerificationToken

> EmailVerifyTokenResponse getEmailVerificationToken(token_request)

Create a token that can be used to verify a customer email address

Create a token that can be used to verify a customer email address.  The implementation of how a customer interacts with this token is left to the merchant. 


### Example

```javascript
import {customerApi} from '../api.js';

export class GetEmailVerificationToken {
    /*
        GetEmailVerificationToken and ValidateEmailVerificationToken are tandem functions that allow a merchant to verify
        a customer's email address. GetEmailVerificationToken returns back a token that the merchant can use however
        they wish to present to a customer. Usually this will be emailed to the customer within instructions to enter
        it back into a website. Once the customer enters the token back into a site (along with their email),
        ValidateEmailVerificationToken will validate the token.

        Notice that GetEmailVerificationToken requires both the email and password.
     */
    static async execute() {
        const email = "test@ultracart.com";
        const password = "squirrel";

        const tokenRequest = {
            email: email,
            password: password
        };

        const tokenResponse = await new Promise((resolve, reject) => {
            customerApi.getEmailVerificationToken(tokenRequest, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        const token = tokenResponse.token;

        // TODO - email the token to the customer, have them enter it back into another page...
        // TODO - verify the token with the following call

        const verifyRequest = {
            token: token
        };
        const verifyResponse = await new Promise((resolve, reject) => {
            customerApi.validateEmailVerificationToken(verifyRequest, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        console.log("Was the correct token provided? " + verifyResponse.success);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_request** | [**EmailVerifyTokenRequest**](EmailVerifyTokenRequest.md)| Token request | 

### Return type

[**EmailVerifyTokenResponse**](EmailVerifyTokenResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMagicLink

> CustomerMagicLinkResponse getMagicLink(customer_profile_oid, storefront_host_name)

getMagicLink

Retrieves a magic link to allow a merchant to login as a customer.  This method is a PUT call intentionally. 


### Example

```javascript
import {customerApi} from '../api.js';
import {CustomerFunctions} from './customerFunctions.js';

export class GetMagicLink {
    /**
     * getMagicLink returns back a url whereby a merchant can log into their website as the customer.
     * This may be useful to "see what the customer is seeing" and is the only method to do so since
     * the customer's passwords are encrypted.  Note: A merchant may also do this using the UltraCart
     * backend site within the Customer Management section.
     */
    static async execute() {
        try {
            // create a customer
            const customerOid = await CustomerFunctions.insertSampleCustomer();
            const storefront = "www.website.com";  // required.  many merchants have dozens of storefronts. which one?

            const apiResponse = await new Promise((resolve, reject) => {
                customerApi.getMagicLink(customerOid, storefront, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const url = apiResponse.url || "error_failed_to_get_magic_link";

            // Note: In a web context, you'd typically use window.location or a framework-specific routing method
            document.write(`<html><body><script>window.location.href = "${encodeURIComponent(url)}";</script></body></html>`);

            // clean up this sample. - don't do this or the above magic link won't work.  But you'll want to clean up this
            // sample customer manually using the backend.
            // await CustomerFunctions.deleteSampleCustomer(customerOid);
        } catch (e) {
            console.error("An ApiException occurred. Please review the following error:");
            console.error(e); // handle gracefully
            throw e; // or handle as appropriate in your application
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer_profile_oid of the customer. | 
 **storefront_host_name** | **String**| The storefront to log into. | 

### Return type

[**CustomerMagicLinkResponse**](CustomerMagicLinkResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getQuickBooksOnlineCustomers

> QuickBooksOnlineCustomersResponse getQuickBooksOnlineCustomers(opts)

Search the merchant&#39;s QuickBooks Online customers

Typeahead search of the merchant&#39;s QuickBooks Online customers by display name.  Used by the customer profile editor to link a profile 1:1 to a QuickBooks Online customer.  Returns up to 100 matches.  If QuickBooks Online is not connected the list will be empty. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Search query matched against the QuickBooks Online customer display name | [optional] 

### Return type

[**QuickBooksOnlineCustomersResponse**](QuickBooksOnlineCustomersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertCustomer

> CustomerResponse insertCustomer(customer, opts)

Insert a customer

Insert a customer on the UltraCart account. 


### Example

```javascript
import { CustomerFunctions } from './customerFunctions.js';

export class InsertCustomer {
    static async execute() {
        const customerOid = await CustomerFunctions.insertSampleCustomer();
        await CustomerFunctions.deleteSampleCustomer(customerOid);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [**Customer**](Customer.md)| Customer to insert | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertWishListItem

> CustomerWishListItem insertWishListItem(customer_profile_oid, wishlist_item)

Insert a customer wishlist item

Insert a customer wishlist item 


### Example

```javascript
import {customerApi} from '../api.js';
import {ItemFunctions} from '../item/itemFunctions.js';
import {CustomerFunctions} from './customerFunctions.js';

/**
 * The wishlist methods allow management of a customer's wishlist.
 * This includes:
 *     DeleteWishListItem
 *     GetCustomerWishList
 *     GetCustomerWishListItem
 *     InsertWishListItem
 *     UpdateWishListItem
 * These methods provide a standard CRUD interface.
 *
 * You'll need merchant_item_oids to insert wishlist items. If you don't know the oids,
 * call ItemApi.GetItemByMerchantItemId() to retrieve the item, then get item.MerchantItemOid
 *
 * Note: Priority of wishlist item, 3 being low priority and 5 is high priority.
 */
export class InsertWishListItem {
    static async execute() {
        try {
            // create a few items first.
            const firstItemOid = await ItemFunctions.insertSampleItemAndGetOid();
            const secondItemOid = await ItemFunctions.insertSampleItemAndGetOid();

            // create a customer
            const customerOid = await CustomerFunctions.insertSampleCustomer();

            // TODO: If you don't know the customer oid, use GetCustomerByEmail() to retrieve the customer.

            // add some wish list items.
            const firstWishItem = {
                customer_profile_oid: customerOid,
                merchant_item_oid: firstItemOid,
                comments: "I really want this for my birthday",
                priority: 3 // Priority of wishlist item, 3 being low priority and 5 is high priority.
            };
            const firstCreatedWishItem = await new Promise((resolve, reject) => {
                customerApi.insertWishListItem(customerOid, firstWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const secondWishItem = {
                customer_profile_oid: customerOid,
                merchant_item_oid: secondItemOid,
                comments: "Christmas Idea!",
                priority: 5 // Priority of wishlist item, 3 being low priority and 5 is high priority.
            };
            const secondCreatedWishItem = await new Promise((resolve, reject) => {
                customerApi.insertWishListItem(customerOid, secondWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            if (firstCreatedWishItem === undefined || firstCreatedWishItem.customer_profile_oid === undefined) {
                console.error("first wish list item is undefined.  update failed.");
                return;
            }

            if (secondCreatedWishItem === undefined || secondCreatedWishItem.customer_profile_oid === undefined) {
                console.error("second wish list item is undefined.  update failed.");
                return;
            }

            // retrieve one wishlist item again
            const firstCreatedWishItemCopyResponse = await new Promise((resolve, reject) => {
                customerApi.getCustomerWishListItem(customerOid, firstCreatedWishItem.customer_wishlist_item_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const firstCreatedWishItemCopy = firstCreatedWishItemCopyResponse.wishlist_item;

            // retrieve all wishlist items
            const allWishListItems = await new Promise((resolve, reject) => {
                customerApi.getCustomerWishList(customerOid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // update an item.
            const updatedSecondWishItem = await new Promise((resolve, reject) => {
                customerApi.updateWishListItem(customerOid, secondCreatedWishItem.customer_wishlist_item_oid, secondCreatedWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // delete a wish list item
            await new Promise((resolve, reject) => {
                customerApi.deleteWishListItem(customerOid, firstCreatedWishItem.customer_wishlist_item_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Clean up
            await CustomerFunctions.deleteSampleCustomer(customerOid);
            await ItemFunctions.deleteSampleItemByOid(firstItemOid);
            await ItemFunctions.deleteSampleItemByOid(secondItemOid);
        } catch (ex) {
            console.error("An Exception occurred. Please review the following error:");
            console.error(ex); // <-- change_me: handle gracefully
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid for this wishlist. | 
 **wishlist_item** | [**CustomerWishListItem**](CustomerWishListItem.md)| Wishlist item to insert | 

### Return type

[**CustomerWishListItem**](CustomerWishListItem.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## mergeCustomer

> mergeCustomer(customer_profile_oid, customer, opts)

Merge customer into this customer

Merge customer into this customer. 


### Example

```javascript
import {customerApi} from '../api.js';
import {CustomerFunctions} from './customerFunctions.js';

export class MergeCustomer {
    /**
     * The merge function was requested by UltraCart merchants that sell software and manage activation keys.  Frequently,
     * customers would purchase their software using one email address, and then accidentally re-subscribe using a
     * different email address (for example, they purchased subsequent years using PayPal which was tied to their spouse's
     * email).  However it happened, the customer now how software licenses spread across multiple emails and therefore
     * multiple customer profiles.
     *
     * merge combine the customer profiles, merging order history and software entitlements.  Still, it may be used to
     * combine any two customer profiles for any reason.
     *
     * Success returns back a status code 204 (No Content)
     */
    static async execute() {
        try {
            // first customer
            const firstCustomerOid = await CustomerFunctions.insertSampleCustomer();

            const secondEmail = CustomerFunctions.createRandomEmail();
            const secondCustomerOid = await CustomerFunctions.insertSampleCustomer(secondEmail);

            const mergeRequest = {
                // Supply either the email or the customer oid.  Only need one.
                email: secondEmail,
                // customerProfileOid: customerOid, // Commented out as in original code
            };

            await new Promise((resolve, reject) => {
                customerApi.mergeCustomer(firstCustomerOid, mergeRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // clean up this sample.
            await CustomerFunctions.deleteSampleCustomer(firstCustomerOid);
            // Notice: No need to delete the second sample.  The merge call deletes it.
        } catch (e) {
            console.error("An ApiException occurred. Please review the following error:");
            console.error(e); // <-- change_me: handle gracefully
            throw e;
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer_profile_oid to update. | 
 **customer** | [**CustomerMergeRequest**](CustomerMergeRequest.md)| Customer to merge into this profile. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## searchCustomerProfileValues

> LookupResponse searchCustomerProfileValues(lookup_request)

Searches for all matching values (using POST)


### Example

```javascript
// This is an internal method used by our Customer management screen.  It only searches customer tags and is geared
// towards our UI needs, so it's inflexible.  We're not including a sample for it because we don't envision it
// being valuable to a merchant.
// getCustomersByQuery is the merchant's search method.  It is completely full-featured and easy to use.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lookup_request** | [**LookupRequest**](LookupRequest.md)| LookupRequest | 

### Return type

[**LookupResponse**](LookupResponse.md)

### Authorization

[ultraCartBrowserApiKey](../README.md#ultraCartBrowserApiKey), [ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchCustomers

> CustomersResponse searchCustomers(opts)

Search for customers

Retrieves customers from the account by matching the search value against most customer fields.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination.  This search also goes against the cache so updates should not be performed with these result objects.  Always re-query the individual customer profile if you are going to make updates. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_string** | **String**| Search | [optional] 
 **signup_dts_start** | **String**| Signup date start | [optional] 
 **signup_dts_end** | **String**| Signup date end | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch customers that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the customers.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomersResponse**](CustomersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCustomer

> CustomerResponse updateCustomer(customer_profile_oid, customer, opts)

Update a customer

Update a customer on the UltraCart account. 


### Example

```javascript
import {customerApi} from '../api.js';
import {CustomerFunctions} from './customerFunctions.js';

export class UpdateCustomer {
    /**
     * Executes a customer update workflow
     * Inserts a sample customer, updates their billing address,
     * and then deletes the sample customer
     */
    static async Execute() {
        try {
            // Insert a sample customer and get their OID
            const customerOid = await CustomerFunctions.insertSampleCustomer();

            // just want address fields. see https://www.ultracart.com/api/#resource_customer.html for all expansion values
            const expand = "billing,shipping";

            // Retrieve the customer
            const customerResponse = await new Promise((resolve, reject) => {
                customerApi.getCustomer(customerOid, {_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const customer = customerResponse.customer;

            if (customer === undefined) {
                console.error("getCustomer returned undefined, cannot update.");
                process.exit(1);
            }

            // TODO: do some edits to the customer. Here we will change some billing fields.
            if (customer.billing && customer.billing.length > 0) {
                customer.billing[0].address2 = "Apartment 101";
            }

            // notice expand is passed to update as well since it returns back an updated customer object.
            // we use the same expansion, so we get back the same fields and can do comparisons.
            const apiResponse = await new Promise((resolve, reject) => {
                customerApi.updateCustomer(customerOid, customer, {_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // verify the update
            console.log(apiResponse.customer);

            // Delete the sample customer
            await CustomerFunctions.deleteSampleCustomer(customerOid);
        } catch (e) {
            console.error("An unexpected error occurred:", e);
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer_profile_oid to update. | 
 **customer** | [**Customer**](Customer.md)| Customer to update | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**CustomerResponse**](CustomerResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateCustomerEmailLists

> CustomerEmailListChanges updateCustomerEmailLists(customer_profile_oid, list_changes)

Update email list subscriptions for a customer

Update email list subscriptions for a customer 


### Example

```javascript
// This is an internal method used by our Email workflow engines.  It allows for updating the email lists a customer
// is currently subscribed to.  It's geared towards our UI needs, so its usage may appear cryptic.
//  We're not including a sample for it because we don't envision it being valuable to a merchant.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer profile oid | 
 **list_changes** | [**CustomerEmailListChanges**](CustomerEmailListChanges.md)| List changes | 

### Return type

[**CustomerEmailListChanges**](CustomerEmailListChanges.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateCustomerEmailSuppression

> CustomerEmailSuppressionResponse updateCustomerEmailSuppression(customer_profile_oid, suppression_changes)

Clear email suppression for a customer

Clears global unsubscribe, spam complaint and/or bounce suppression for a customer.  This method is clear-only and cannot set a suppression flag.  Clearing a suppression removes the send gate but does not subscribe the customer to any email list -- list membership survives a global unsubscribe untouched, so the customer&#39;s original lists become deliverable again with no further action.  Returns 200 with a warning if the flags were cleared but an upstream ESP suppression removal failed; the profile was still modified in that case. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer profile oid | 
 **suppression_changes** | [**CustomerEmailSuppressionRequest**](CustomerEmailSuppressionRequest.md)| Suppression changes | 

### Return type

[**CustomerEmailSuppressionResponse**](CustomerEmailSuppressionResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateWishListItem

> CustomerWishListItem updateWishListItem(customer_profile_oid, customer_wishlist_item_oid, wishlist_item)

Update a customer wishlist item

Update a customer wishlist item 


### Example

```javascript
import {customerApi} from '../api.js';
import {ItemFunctions} from '../item/itemFunctions.js';
import {CustomerFunctions} from './customerFunctions.js';

/**
 * The wishlist methods allow management of a customer's wishlist.
 * This includes:
 *     DeleteWishListItem
 *     GetCustomerWishList
 *     GetCustomerWishListItem
 *     InsertWishListItem
 *     UpdateWishListItem
 * These methods provide a standard CRUD interface.
 *
 * You'll need merchant_item_oids to insert wishlist items. If you don't know the oids,
 * call ItemApi.GetItemByMerchantItemId() to retrieve the item, then get item.MerchantItemOid
 *
 * Note: Priority of wishlist item, 3 being low priority and 5 is high priority.
 */
export class UpdateWishListItem {
    static async execute() {
        try {
            // create a few items first.
            const firstItemOid = await ItemFunctions.insertSampleItemAndGetOid();
            const secondItemOid = await ItemFunctions.insertSampleItemAndGetOid();

            // create a customer
            const customerOid = await CustomerFunctions.insertSampleCustomer();

            // TODO: If you don't know the customer oid, use GetCustomerByEmail() to retrieve the customer.

            // add some wish list items.
            const firstWishItem = {
                customer_profile_oid: customerOid,
                merchant_item_oid: firstItemOid,
                comments: "I really want this for my birthday",
                priority: 3 // Priority of wishlist item, 3 being low priority and 5 is high priority.
            };
            const firstCreatedWishItem = await new Promise((resolve, reject) => {
                customerApi.insertWishListItem(customerOid, firstWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const secondWishItem = {
                customer_profile_oid: customerOid,
                merchant_item_oid: secondItemOid,
                comments: "Christmas Idea!",
                priority: 5 // Priority of wishlist item, 3 being low priority and 5 is high priority.
            };
            const secondCreatedWishItem = await new Promise((resolve, reject) => {
                customerApi.insertWishListItem(customerOid, secondWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            if (firstCreatedWishItem === undefined || firstCreatedWishItem.customer_profile_oid === undefined) {
                console.error("first wish list item is undefined.  update failed.");
                return;
            }

            if (secondCreatedWishItem === undefined || secondCreatedWishItem.customer_profile_oid === undefined) {
                console.error("second wish list item is undefined.  update failed.");
                return;
            }

            // retrieve one wishlist item again
            const firstCreatedWishItemCopyResponse = await new Promise((resolve, reject) => {
                customerApi.getCustomerWishListItem(customerOid, firstCreatedWishItem.customer_wishlist_item_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const firstCreatedWishItemCopy = firstCreatedWishItemCopyResponse.wishlist_item;

            // retrieve all wishlist items
            const allWishListItems = await new Promise((resolve, reject) => {
                customerApi.getCustomerWishList(customerOid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // update an item.
            const updatedSecondWishItem = await new Promise((resolve, reject) => {
                customerApi.updateWishListItem(customerOid, secondCreatedWishItem.customer_wishlist_item_oid, secondCreatedWishItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // delete a wish list item
            await new Promise((resolve, reject) => {
                customerApi.deleteWishListItem(customerOid, firstCreatedWishItem.customer_wishlist_item_oid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Clean up
            await CustomerFunctions.deleteSampleCustomer(customerOid);
            await ItemFunctions.deleteSampleItemByOid(firstItemOid);
            await ItemFunctions.deleteSampleItemByOid(secondItemOid);
        } catch (ex) {
            console.error("An Exception occurred. Please review the following error:");
            console.error(ex); // <-- change_me: handle gracefully
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_profile_oid** | **Number**| The customer oid for this wishlist. | 
 **customer_wishlist_item_oid** | **Number**| The wishlist oid for this wishlist item. | 
 **wishlist_item** | [**CustomerWishListItem**](CustomerWishListItem.md)| Wishlist item to update | 

### Return type

[**CustomerWishListItem**](CustomerWishListItem.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## validateEmailVerificationToken

> EmailVerifyTokenValidateResponse validateEmailVerificationToken(validation_request)

Validate a token that can be used to verify a customer email address

Validate a token that can be used to verify a customer email address.  The implementation of how a customer interacts with this token is left to the merchant. 


### Example

```javascript
import {customerApi} from '../api.js';

export class ValidateEmailVerificationToken {
    /**
     * GetEmailVerificationToken and ValidateEmailVerificationToken are tandem functions that allow a merchant to verify
     * a customer's email address. GetEmailVerificationToken returns back a token that the merchant can use however
     * they wish to present to a customer. Usually this will be emailed to the customer within instructions to enter
     * it back into a website.  Once the customer enters the token back into a site (along with their email),
     * ValidateEmailVerificationToken will validate the token.
     *
     * Notice that GetEmailVerificationToken requires both the email and password.
     */
    static async Execute() {
        const email = "test@ultracart.com";
        const password = "squirrel";

        try {
            // Create token request
            const tokenRequest = {
                email: email,
                password: password
            };

            // Get email verification token
            const tokenResponse = await new Promise((resolve, reject) => {
                customerApi.getEmailVerificationToken(tokenRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const token = tokenResponse.token;

            if (token == undefined) {
                console.error("Token not found.");
                return;
            }

            // TODO - email the token to the customer, have them enter it back into another page...
            // TODO - verify the token with the following call

            // Create verify request
            const verifyRequest = {
                token: token
            };

            // Validate email verification token
            const verifyResponse = await new Promise((resolve, reject) => {
                customerApi.validateEmailVerificationToken(verifyRequest, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            console.log("Was the correct token provided? " + verifyResponse.success);
        } catch (error) {
            console.error("An error occurred during email verification:", error);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validation_request** | [**EmailVerifyTokenValidateRequest**](EmailVerifyTokenValidateRequest.md)| Token validation request | 

### Return type

[**EmailVerifyTokenValidateResponse**](EmailVerifyTokenValidateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

