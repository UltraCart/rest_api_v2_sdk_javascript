# UltraCartRestApiV2.ItemApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAllGatedCodes**](ItemApi.md#deleteAllGatedCodes) | **DELETE** /item/items/{merchant_item_oid}/gated_codes | Delete all gated access codes for an item
[**deleteDigitalItem**](ItemApi.md#deleteDigitalItem) | **DELETE** /item/digital_library/{digital_item_oid} | Delete a digital item, which is a file within the digital library, not an actual merchant item
[**deleteGatedCode**](ItemApi.md#deleteGatedCode) | **DELETE** /item/items/{merchant_item_oid}/gated_codes/{merchant_item_gated_code_oid} | Delete a gated access code by OID
[**deleteItem**](ItemApi.md#deleteItem) | **DELETE** /item/items/{merchant_item_oid} | Delete an item
[**deleteReview**](ItemApi.md#deleteReview) | **DELETE** /item/items/{merchant_item_oid}/reviews/{review_oid} | Delete a review
[**generateGatedCodes**](ItemApi.md#generateGatedCodes) | **POST** /item/items/{merchant_item_oid}/gated_codes/generate | Generate a batch of gated access codes
[**getDigitalItem**](ItemApi.md#getDigitalItem) | **GET** /item/digital_library/{digital_item_oid} | Retrieve a digital item from the digital library, which are digital files that may be attached to normal items
[**getDigitalItems**](ItemApi.md#getDigitalItems) | **GET** /item/digital_library | Retrieve digital items from the digital library which are digital files that may be attached to normal items
[**getDigitalItemsByExternalId**](ItemApi.md#getDigitalItemsByExternalId) | **GET** /item/digital_library/by_external/{external_id} | Retrieves digital items from the digital library (which are digital files that may be attached to normal items) that having a matching external id
[**getGatedCodes**](ItemApi.md#getGatedCodes) | **GET** /item/items/{merchant_item_oid}/gated_codes | Get gated access codes for an item
[**getInventorySnapshot**](ItemApi.md#getInventorySnapshot) | **GET** /item/items/inventory_snapshot | Retrieve a list of item inventories.  This method may be called once every 15 minutes.  More than that will result in a 429 response.
[**getItem**](ItemApi.md#getItem) | **GET** /item/items/{merchant_item_oid} | Retrieve an item
[**getItemByMerchantItemId**](ItemApi.md#getItemByMerchantItemId) | **GET** /item/items/merchant_item_id/{merchant_item_id} | Retrieve an item by item id
[**getItems**](ItemApi.md#getItems) | **GET** /item/items | Retrieve items
[**getPricingTiers**](ItemApi.md#getPricingTiers) | **GET** /item/pricing_tiers | Retrieve pricing tiers
[**getReview**](ItemApi.md#getReview) | **GET** /item/items/{merchant_item_oid}/reviews/{review_oid} | Get a review
[**getReviews**](ItemApi.md#getReviews) | **GET** /item/items/{merchant_item_oid}/reviews | Get reviews for an item
[**getUnassociatedDigitalItems**](ItemApi.md#getUnassociatedDigitalItems) | **GET** /item/digital_library/unassociated | Retrieve digital items from the digital library (which are digital files that may be attached to normal items) not yet associated with actual items
[**insertDigitalItem**](ItemApi.md#insertDigitalItem) | **POST** /item/digital_library | Create a file within the digital library
[**insertGatedCode**](ItemApi.md#insertGatedCode) | **POST** /item/items/{merchant_item_oid}/gated_codes | Add a single gated access code to an item
[**insertItem**](ItemApi.md#insertItem) | **POST** /item/items | Create an item
[**insertReview**](ItemApi.md#insertReview) | **POST** /item/items/{merchant_item_oid}/reviews | Insert a review
[**insertUpdateItemContentAttribute**](ItemApi.md#insertUpdateItemContentAttribute) | **POST** /item/items/{merchant_item_oid}/content/attributes | Upsert an item content attribute
[**replaceGatedCodes**](ItemApi.md#replaceGatedCodes) | **PUT** /item/items/{merchant_item_oid}/gated_codes | Replace the full list of gated access codes for an item
[**updateDigitalItem**](ItemApi.md#updateDigitalItem) | **PUT** /item/digital_library/{digital_item_oid} | Updates a file within the digital library
[**updateItem**](ItemApi.md#updateItem) | **PUT** /item/items/{merchant_item_oid} | Update an item
[**updateItems**](ItemApi.md#updateItems) | **PUT** /item/items/batch | Update multiple items
[**updateReview**](ItemApi.md#updateReview) | **PUT** /item/items/{merchant_item_oid}/reviews/{review_oid} | Update a review
[**uploadTemporaryMultimedia**](ItemApi.md#uploadTemporaryMultimedia) | **POST** /item/temp_multimedia | Upload an image to the temporary multimedia.



## deleteAllGatedCodes

> BaseResponse deleteAllGatedCodes(merchant_item_oid)

Delete all gated access codes for an item

Removes every gated access code currently configured for the item. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid. | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDigitalItem

> deleteDigitalItem(digital_item_oid)

Delete a digital item, which is a file within the digital library, not an actual merchant item

Delete a digital item on the UltraCart account. 


### Example

```javascript
import {ItemFunctions} from './itemFunctions.js';

export class DeleteDigitalItem {
    static async execute() {
        try {
            const digitalItemOid = await ItemFunctions.insertSampleDigitalItem();
            await ItemFunctions.deleteSampleDigitalItem(digitalItemOid);
        } catch (e) {
            console.log("An Exception occurred. Please review the following error:");
            console.log(e); // <-- change_me: handle gracefully
            throw e; // Equivalent to Environment.Exit(1), but better for async context
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **digital_item_oid** | **Number**| The digital item oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteGatedCode

> BaseResponse deleteGatedCode(merchant_item_oid, merchant_item_gated_code_oid)

Delete a gated access code by OID

Delete a specific gated access code by its OID. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid. | 
 **merchant_item_gated_code_oid** | **Number**| The gated code oid. | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteItem

> deleteItem(merchant_item_oid)

Delete an item

Delete an item on the UltraCart account. 


### Example

```javascript
import {ItemFunctions} from './itemFunctions.js'; // Assuming ItemFunctions is in a separate file

export class DeleteItem {
    static async execute() {
        try {
            const itemOid = await ItemFunctions.insertSampleItemAndGetOid();
            await ItemFunctions.deleteSampleItemByOid(itemOid);
        } catch (e) {
            console.log("An Exception occurred. Please review the following error:");
            console.log(e); // <-- change_me: handle gracefully
            throw e; // Equivalent to Environment.Exit(1), but better for async context
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteReview

> deleteReview(review_oid, merchant_item_oid)

Delete a review

Delete an item review. 


### Example

```javascript
import {itemApi} from '../api.js';

export class DeleteReview {
    /*
        Deletes a specific user review for an item. This would most likely be used by a merchant who has cached all
        reviews on a separate site and then wishes to remove a particular review.

        The merchant_item_oid is a unique identifier used by UltraCart. If you do not know your item's oid, call
        ItemApi.GetItemByMerchantItemId() to retrieve the item, and then it's oid item.MerchantItemOid

        The review_oid is a unique identifier used by UltraCart. If you do not know a review's oid, call
        ItemApi.GetReviews() to get all reviews where you can then grab the oid from an item.

        Success returns back a status code of 204 (No Content)
     */
    static async execute() {
        const merchantItemOid = 123456;
        const reviewOid = 987654;
        const gcResponse = await new Promise((resolve, reject) => {
            itemApi.deleteReview(reviewOid, merchantItemOid, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **review_oid** | **Number**| The review oid to delete. | 
 **merchant_item_oid** | **Number**| The item oid the review is associated with. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateGatedCodes

> ItemGatedCodesResponse generateGatedCodes(merchant_item_oid, generate_request)

Generate a batch of gated access codes

Returns randomly generated codes using a profanity-safe charset (vowel-free, 0/1 removed). Codes are NOT persisted; submit them via PUT or POST to commit. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid. | 
 **generate_request** | [**ItemGenerateGatedCodesRequest**](ItemGenerateGatedCodesRequest.md)| Generate request. | 

### Return type

[**ItemGatedCodesResponse**](ItemGatedCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## getDigitalItem

> ItemDigitalItemResponse getDigitalItem(digital_item_oid)

Retrieve a digital item from the digital library, which are digital files that may be attached to normal items

Retrieves a digital item (file information) from the account.  Be aware that these are not normal items that can be added to a shopping cart. Rather, they are digital files that may be associated with normal items. 


### Example

```javascript
import { itemApi } from '../api.js';
import { ItemFunctions } from './itemFunctions.js'; // Assuming ItemFunctions is in a separate file

export class GetDigitalItem {
    static async execute() {
        try {
            /*
             * Please Note!
             * Digital Items are not normal items you sell on your site. They are digital files that you may add to
             * a library and then attach to a normal item as an accessory or the main item itself.
             * See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1376485/Digital+Items
             */

            const digitalItemOid = await ItemFunctions.insertSampleDigitalItem(); // create an item so I can get an item
            const apiResponse = await new Promise((resolve, reject) => {
                itemApi.getDigitalItem(digitalItemOid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const digitalItem = apiResponse.digital_item; // assuming this succeeded

            console.log("The following item was retrieved via GetDigitalItem():");
            console.log(digitalItem);

            await ItemFunctions.deleteSampleDigitalItem(digitalItemOid);
        } catch (e) {
            console.log("An Exception occurred. Please review the following error:");
            console.log(e); // <-- change_me: handle gracefully
            throw e; // Equivalent to Environment.Exit(1), but better for async context
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **digital_item_oid** | **Number**| The digital item oid to retrieve. | 

### Return type

[**ItemDigitalItemResponse**](ItemDigitalItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDigitalItems

> ItemDigitalItemsResponse getDigitalItems(opts)

Retrieve digital items from the digital library which are digital files that may be attached to normal items

Retrieves a group of digital items (file information) from the account.  If no parameters are specified, all digital items will be returned.  Be aware that these are not normal items that can be added to a shopping cart. Rather, they are digital files that may be associated with normal items.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
import {itemApi} from '../api.js';
import {ItemFunctions} from './itemFunctions.js'; // Assuming ItemFunctions is in a separate file

export class GetDigitalItems {
    static async execute() {
        try {
            /*
             * Please Note!
             * Digital Items are not normal items you sell on your site. They are digital files that you may add to
             * a library and then attach to a normal item as an accessory or the main item itself.
             * See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1376485/Digital+Items
             */

            const digitalItemOid = await ItemFunctions.insertSampleDigitalItem(); // create an item so I can get an item

            const limit = 100;
            const offset = 0;
            const since = undefined; // digital items do not use since. leave as undefined.
            const sort = undefined; // if undefined, use default of original_filename
            const expand = undefined; // digital items have no expansion. leave as undefined. this value is ignored
            const placeholders = undefined; // digital items have no placeholders. leave as undefined.

            const request = {
                _limit: limit,
                _offset: offset,
                _since: since,
                _sort: sort,
                _expand: expand,
                _placeholders: placeholders
            };
            const apiResponse = await new Promise((resolve, reject) => {
                itemApi.getDigitalItems(request, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const digitalItems = apiResponse.digital_items; // assuming this succeeded

            if (digitalItems === undefined) {
                console.error("Could not find digital items from the list");
            } else {
                console.log("The following items were retrieved via GetDigitalItems():");
                for (const digitalItem of digitalItems) {
                    console.log(digitalItem);
                }
            }
        } catch (e) {
            console.log("An Exception occurred. Please review the following error:");
            console.log(e); // <-- change_me: handle gracefully
            throw e; // Equivalent to Environment.Exit(1), but better for async context
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Default 100, Max 2000) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch items that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**ItemDigitalItemsResponse**](ItemDigitalItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDigitalItemsByExternalId

> ItemDigitalItemsResponse getDigitalItemsByExternalId(external_id)

Retrieves digital items from the digital library (which are digital files that may be attached to normal items) that having a matching external id

Retrieves digital items from the digital library (which are digital files that may be attached to normal items) that having a matching external id.  Be aware that these are not normal items that can be added to a shopping cart. Rather, they are digital files that may be associated with normal items. 


### Example

```javascript
import {itemApi} from '../api.js';
import {ItemFunctions} from './itemFunctions.js';

export class GetDigitalItemsByExternalId {
    /**
     * Please Note!
     * Digital Items are not normal items you sell on your site. They are digital files that you may add to
     * a library and then attach to a normal item as an accessory or the main item itself.
     * See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1376485/Digital+Items
     */
    static async execute() {
        try {
            // Generate a random external ID (replacing Guid.NewGuid())
            const externalId = crypto.randomUUID();
            console.log(`My external id is ${externalId}`);

            // Insert sample digital item
            const digitalItemOid = await ItemFunctions.insertSampleDigitalItem(externalId);

            // Retrieve digital items by external ID
            const apiResponse = await new Promise((resolve, reject) => {
                itemApi.getDigitalItemsByExternalId(externalId, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const digitalItems = apiResponse.digital_items || []; // Use OR operator instead of nullish coalescing

            console.log("The following item was retrieved via GetDigitalItem():");
            console.log(digitalItems);

            // Delete the sample digital item
            await ItemFunctions.deleteSampleDigitalItem(digitalItemOid);
        } catch (error) {
            console.error("An Exception occurred. Please review the following error:");
            console.error(error);
            process.exit(1);
        }
    }
}

// Optional: If you want to execute the method
// GetDigitalItemsByExternalId.execute().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **String**| The external id to match against. | 

### Return type

[**ItemDigitalItemsResponse**](ItemDigitalItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGatedCodes

> ItemGatedCodesResponse getGatedCodes(merchant_item_oid)

Get gated access codes for an item

Retrieve all unredeemed gated access codes configured for an item. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid. | 

### Return type

[**ItemGatedCodesResponse**](ItemGatedCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInventorySnapshot

> ItemInventorySnapshotResponse getInventorySnapshot()

Retrieve a list of item inventories.  This method may be called once every 15 minutes.  More than that will result in a 429 response.

Retrieve a list of item inventories.  This method may be called once every 15 minutes.  More than that will result in a 429 response. 


### Example

```javascript
import {itemApi} from '../api.js';

export class GetInventorySnapshot {
    /**
     * Retrieve a list of item inventories.
     * Note: This method may be called once every 15 minutes.
     * More frequent calls will result in a 429 response.
     */
    static async execute() {
        try {
            // Retrieve inventory snapshot
            const snapshotResponse = await new Promise((resolve, reject) => {
                itemApi.getInventorySnapshot(function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Iterate and log each inventory item
            snapshotResponse.inventories?.forEach((inventory) => {
                console.log(JSON.stringify(inventory, null, 2));
            });
        } catch (error) {
            console.error("An Exception occurred. Please review the following error:");
            console.error(error);
            process.exit(1);
        }
    }
}

// Optional: If you want to execute the method
// GetInventorySnapshot.execute().catch(console.error);
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ItemInventorySnapshotResponse**](ItemInventorySnapshotResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItem

> ItemResponse getItem(merchant_item_oid, opts)

Retrieve an item

Retrieves a single item using the specified item oid. 


### Example

```javascript
import {itemApi} from '../api.js';
import {customerApi} from '../api.js';
import {ItemFunctions} from './itemFunctions.js'; // Assuming ItemFunctions is in a separate file

export class GetItem {
    /// <summary>
    /// Execute the item retrieval example
    /// </summary>
    static async execute() {
        try {
            const itemOid = await ItemFunctions.insertSampleItemAndGetOid();

            // Yes, I'm creating an item, getting that item in order to get the item id, then getting the item yet again
            // using a different method. All to illustrate GetItemByMerchantItemId
            const itemId = (await new Promise((resolve, reject) => {
                itemApi.getItem(itemOid, {}, function (error, data, response) {
                    if (error) reject(error);
                    else resolve(data, response);
                });
            })).item?.merchant_item_id;

            if (itemId === undefined) {
                console.error("itemId should not be undefined.  Something went wrong with sample item creation most likely.");
                return;
            }

            // the expand variable is undefined in the following call. we just need the base object this time.
            const apiResponse = await new Promise((resolve, reject) => {
                itemApi.getItemByMerchantItemId(itemId, {}, function (error, data, response) {
                    if (error) reject(error);
                    else resolve(data, response);
                });
            });
            const item = apiResponse.item; // assuming this succeeded

            const merchantItemOid = item?.merchant_item_oid || 0;
            if (merchantItemOid === 0) {
                console.error("getItemByMerchantItemId failed.");
                return;
            }

            // This is the actual call for this script.
            // The real devil in the getItem calls is the expansion, making sure you return everything you need without
            // returning everything since these objects are extremely large.
            // These are the possible expansion values.
            /*
                accounting
                amember
                auto_order
                auto_order.steps
                ccbill
                channel_partner_mappings
                chargeback
                checkout
                content
                content.assignments
                content.attributes
                content.multimedia
                content.multimedia.thumbnails
                digital_delivery
                ebay
                email_notifications
                enrollment123
                gift_certificate
                google_product_search
                kit_definition
                identifiers
                instant_payment_notifications
                internal
                options
                payment_processing
                physical
                pricing
                pricing.tiers
                realtime_pricing
                related
                reporting
                restriction
                reviews
                reviews.individual_reviews
                salesforce
                shipping
                shipping.cases
                shipping.destination_markups
                shipping.destination_restrictions
                shipping.distribution_centers
                shipping.methods
                shipping.package_requirements
                tax
                third_party_email_marketing
                variations
                wishlist_member
            */
            // const expand = "kit_definition,options,shipping,tax,variations"; // just some random ones. contact us if you're unsure
            const expand = "reviews,reviews.individual_reviews";  // changed the random above to reviews to illustrate accessing product reviews.
            const apiResponse2 = await new Promise((resolve, reject) => {
                itemApi.getItem(merchantItemOid, {}, function (error, data, response) {
                    if (error) reject(error);
                    else resolve(data, response);
                });
            });
            const itemWithReviews = apiResponse2.item;

            const itemReviews = itemWithReviews?.reviews;
            const individualReviews = itemReviews?.individual_reviews;

            if (individualReviews !== undefined) {
                // do whatever you wish with the reviews. iterate them, print them, etc.
                // if you need the reviewer information
                for (const individualReview of individualReviews) {
                    // if you need reviewer profile questions, such as "How often do you use this product?", access the
                    // rating names and scores. these are configurable by merchant, so we do not know what your questions may be.
                    // See Home -> Configuration -> Items -> Reviews -> Settings
                    // Or this URL: https://secure.ultracart.com/merchant/item/review/reviewSettingsLoad.do
                    const ratingName1 = individualReview.rating_name1; // <-- this will not be the full question, but a key string.
                    const ratingScore1 = individualReview.rating_score1;

                    // if you need the review information, access that via their customer object. Be careful. This can result
                    // in a LOT of API calls and exhaust your limit. You may wish to add 'Sleep' calls to your loop and cache
                    // these results daily or weekly.
                    if (individualReview.customer_profile_oid !== undefined) {
                        const customerResponse = await new Promise((resolve, reject) => {
                            customerApi.getCustomer(individualReview.customer_profile_oid, {_expand: "reviewer"}, function (error, data, response) {
                                if (error) reject(error);
                                else resolve(data, response);
                            });
                        });
                        const customer = customerResponse.customer;
                        const reviewer = customer?.reviewer;
                    }
                }
            }

            console.log("The following item was retrieved via getItem():");
            console.log(itemWithReviews);

            await ItemFunctions.deleteSampleItemByOid(itemOid);
        } catch (e) {
            console.log("An ApiException occurred. Please review the following error:");
            console.log(e); // <-- change_me: handle gracefully
            throw e; // Equivalent to Environment.Exit(1), but better suited for async context
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**ItemResponse**](ItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItemByMerchantItemId

> ItemResponse getItemByMerchantItemId(merchant_item_id, opts)

Retrieve an item by item id

Retrieves a single item using the specified item id. 


### Example

```javascript
import {itemApi} from '../api.js';
import {ItemFunctions} from './itemFunctions.js';

export class GetItemByMerchantItemId {
    /**
     * Execute the item retrieval example
     *
     * Of the two getItem methods, you'll probably always use getItemByMerchantItemId instead of this one.
     * Most item work is done with the item id, not the item oid. The latter is only meaningful as a primary
     * key in the UltraCart databases. But here is an example of using getItem(). We take the long route here
     * of retrieving the item using getItemByMerchantItemId to obtain the oid rather than hard-coding it. We do this
     * because these samples are used in our quality control system and run repeatedly.
     */
    static async execute() {
        try {
            // Insert a sample item
            const itemId = await ItemFunctions.insertSampleItem();

            // Possible expansion values:
            /*
                accounting
                amember
                auto_order
                auto_order.steps
                ccbill
                channel_partner_mappings
                chargeback
                checkout
                content
                content.assignments
                content.attributes
                content.multimedia
                content.multimedia.thumbnails
                digital_delivery
                ebay
                email_notifications
                enrollment123
                gift_certificate
                google_product_search
                kit_definition
                identifiers
                instant_payment_notifications
                internal
                options
                payment_processing
                physical
                pricing
                pricing.tiers
                realtime_pricing
                related
                reporting
                restriction
                reviews
                salesforce
                shipping
                shipping.cases
                shipping.destination_markups
                shipping.destination_restrictions
                shipping.distribution_centers
                shipping.methods
                shipping.package_requirements
                tax
                third_party_email_marketing
                variations
                wishlist_member
            */
            const expand = "kit_definition,options,shipping,tax,variations"; // just some random ones. contact us if you're unsure

            // Retrieve item by merchant item ID
            const apiResponse = await new Promise((resolve, reject) => {
                itemApi.getItemByMerchantItemId(itemId, {_expand: expand}, function (error, data, response) {
                    if (error) reject(error);
                    else resolve(data, response);
                });
            });
            const item = apiResponse.item;

            console.log("The following item was retrieved via getItemByMerchantItemId():");
            console.log(item ? item.toString() : undefined); // Handle toString() in JS

            // Delete the sample item
            await ItemFunctions.deleteSampleItem(itemId);
        } catch (error) {
            console.error("An ApiException occurred. Please review the following error:");
            console.error(error);
            process.exit(1);
        }
    }
}

// Optional: If you want to execute the method
// GetItemByMerchantItemId.execute().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_id** | **String**| The item id to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**ItemResponse**](ItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getItems

> ItemsResponse getItems(opts)

Retrieve items

Retrieves a group of items from the account.  If no parameters are specified, all items will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
import {itemApi} from '../api.js';

export class GetItems {
    /// <summary>
    /// Execute the item retrieval example
    /// </summary>
    static async execute() {
        /*
         * This example illustrates how to retrieve items. When dealing with items, please note that categories are
         * essentially folders to organize and store items. They are only used for that purpose and play no role in
         * the checkout process or in the storefront display of items. So you may organize your items as best serves
         * you. We're often asked why was use the word 'category' instead of 'folder'. We started down the road of
         * item management 27 years ago with the word 'category', and it's too much trouble to change. So items are
         * managed by categories, not folders. But they are folders. :)
         * The call takes two possible parameters:
         * 1) parentCategoryId: This is a number which uniquely identifies a category in our system. Not easy to determine.
         * 2) parentCategoryPath: This is the folder path you wish to retrieve, starting with a forward slash "/"
         * If you provide neither of these values, all items are returned.
         */

        const items = [];

        let iteration = 1;
        let offset = 0;
        const limit = 200;
        let moreRecordsToFetch = true;

        try {
            while (moreRecordsToFetch) {
                console.log(`executing iteration ${iteration}`);

                const chunkOfItems = await this.getItemChunk(offset, limit);
                items.push(...chunkOfItems);
                offset += limit;
                moreRecordsToFetch = chunkOfItems.length === limit;
                iteration++;
            }
        } catch (e) {
            console.log(`ApiException occurred on iteration ${iteration}`);
            console.log(e);
            throw e; // Equivalent to Environment.Exit(1), but better for async context
        }

        // this will be verbose...
        for (const item of items) {
            console.log(item);
        }
    }

    /// <summary>
    /// Get a chunk of items from the API
    /// </summary>
    /// <param name="offset">Starting offset for retrieval</param>
    /// <param name="limit">Maximum number of records to retrieve</param>
    /// <returns>List of retrieved items</returns>
    static async getItemChunk(offset, limit) {
        // The real devil in the getItem calls is the expansion, making sure you return everything you need without
        // returning everything since these objects are extremely large.
        // These are the possible expansion values.
        /*
        accounting                      amember                     auto_order                      auto_order.steps
        ccbill                          channel_partner_mappings    chargeback                      checkout
        content                         content.assignments         content.attributes              content.multimedia
        content.multimedia.thumbnails   digital_delivery            ebay                            email_notifications
        enrollment123                   gift_certificate            google_product_search           kit_definition
        identifiers                     instant_payment_notifications   internal                    options
        payment_processing              physical                    pricing                         pricing.tiers
        realtime_pricing                related                     reporting                       restriction
        reviews                         salesforce                  shipping                        shipping.cases
        tax                             third_party_email_marketing variations                      wishlist_member
        shipping.destination_markups
        shipping.destination_restrictions
        shipping.distribution_centers
        shipping.methods
        shipping.package_requirements
        */
        const expand = "kit_definition,options,shipping,tax,variations"; // just some random ones. contact us if you're unsure

        const parentCategoryId = undefined;
        const parentCategoryPath = undefined;
        const since = undefined;
        const sort = undefined;

        const request = {
            parentCategoryId: parentCategoryId,
            parentCategoryPath: parentCategoryPath,
            _limit: limit,
            _offset: offset,
            _since: since,
            _sort: sort,
            _expand: expand,
            _placeholders: false
        };
        const apiResponse = await new Promise((resolve, reject) => {
            itemApi.getItems(request, function (error, data, response) {
                if (error) reject(error);
                else resolve(data, response);
            });
        });

        return apiResponse.items || [];
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_category_id** | **Number**| The parent category object id to retrieve items for.  Unspecified means all items on the account.  0 &#x3D; root | [optional] 
 **parent_category_path** | **String**| The parent category path to retrieve items for.  Unspecified means all items on the account.  / &#x3D; root | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Default 100, Max 2000) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch items that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**ItemsResponse**](ItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPricingTiers

> PricingTiersResponse getPricingTiers(opts)

Retrieve pricing tiers

Retrieves the pricing tiers 


### Example

```javascript
import {itemApi} from '../api.js';

/**
 * Execute method containing all business logic
 */
export async function execute() {
    try {
        /*
         * Possible expansion values for PricingTier object:
         * approval_notification
         * signup_notification
         */
        const expand = "approval_notification,signup_notification";
        const apiResponse = await new Promise((resolve, reject) => {
            itemApi.getPricingTiers({_expand: expand}, function (error, data, response) {
                if (error) reject(error);
                else resolve(data, response);
            });
        });

        // Display pricing tiers
        apiResponse.pricingTiers?.forEach((pricingTier) => {
            console.log(pricingTier);
        });
    } catch (error) {
        console.error("Exception occurred.");
        console.error(error);
        process.exit(1);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**PricingTiersResponse**](PricingTiersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReview

> ItemReviewResponse getReview(review_oid, merchant_item_oid)

Get a review

Retrieve an item review. 


### Example

```javascript
import { itemApi } from '../api.js';

/**
 * Execute method containing all business logic
 */
export async function execute() {
    /*
     * Retrieves a specific user review for an item. This would most likely be used by a merchant who has cached all
     * reviews on a separate site and then wishes to update a particular review. It's always best to "get" the object,
     * make changes to it, then call the update instead of trying to recreate the object from scratch.
     *
     * The merchant_item_oid is a unique identifier used by UltraCart. If you do not know your item's oid, call
     * ItemApi.GetItemByMerchantItemId() to retrieve the item, and then it's oid item.MerchantItemOid
     *
     * The review_oid is a unique identifier used by UltraCart. If you do not know a review's oid, call
     * ItemApi.GetReviews() to get all reviews where you can then grab the oid from an item.
     */

    const merchantItemOid = 123456;
    const reviewOid = 987654;

    try {
        const apiResponse = await new Promise((resolve, reject) => {
            itemApi.getReview(reviewOid, merchantItemOid, function (error, data, response) {
                if (error) reject(error);
                else resolve(data, response);
            });
        });

        if (apiResponse.error) {
            console.error(apiResponse.error.developer_message);
            console.error(apiResponse.error.user_message);
            process.exit(1);
        }

        const review = apiResponse.review;

        console.log(review ? review.toString() : undefined); // Handle toString() in JS
    } catch (error) {
        console.error("An error occurred while fetching the review:", error);
        process.exit(1);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **review_oid** | **Number**| The review oid to retrieve. | 
 **merchant_item_oid** | **Number**| The item oid the review is associated with. | 

### Return type

[**ItemReviewResponse**](ItemReviewResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReviews

> ItemReviewsResponse getReviews(merchant_item_oid)

Get reviews for an item

Retrieve item reviews. 


### Example

```javascript
import { itemApi } from '../api.js';

/**
 * Execute method containing all business logic
 */
export async function execute() {
    /*
     * Retrieves all user reviews for an item.
     *
     * The merchant_item_oid is a unique identifier used by UltraCart. If you do not know your item's oid, call
     * ItemApi.GetItemByMerchantItemId() to retrieve the item, and then it's oid item.MerchantItemOid
     */

    const merchantItemOid = 123456;

    try {
        const apiResponse = await new Promise((resolve, reject) => {
            itemApi.getReviews(merchantItemOid, function (error, data, response) {
                if (error) reject(error);
                else resolve(data, response);
            });
        });

        if (apiResponse.error) {
            console.error(apiResponse.error.developer_message);
            console.error(apiResponse.error.user_message);
            process.exit(1);
        }

        const reviews = apiResponse.reviews || [];

        reviews.forEach((review) => {
            console.log(review ? review.toString() : undefined); // Handle toString() in JS
        });
    } catch (error) {
        console.error("An error occurred while fetching reviews:", error);
        process.exit(1);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid the review is associated with. | 

### Return type

[**ItemReviewsResponse**](ItemReviewsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnassociatedDigitalItems

> ItemDigitalItemsResponse getUnassociatedDigitalItems(opts)

Retrieve digital items from the digital library (which are digital files that may be attached to normal items) not yet associated with actual items

Retrieves a group of digital items (file information) from the account that are not yet associated with any actual items.  If no parameters are specified, all digital items will be returned.  Be aware that these are not normal items that can be added to a shopping cart. Rather, they are digital files that may be associated with normal items.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
import { itemApi } from '../api.js';
import { ItemFunctions } from './itemFunctions.js';

/**
 * Execute method containing all business logic
 */
export async function execute() {
    try {
        /*
         * Please Note!
         * Digital Items are not normal items you sell on your site. They are digital files that you may add to
         * a library and then attach to a normal item as an accessory or the main item itself.
         * See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1376485/Digital+Items
         *
         * Retrieves a group of digital items (file information) from the account that are not yet associated with any
         * actual items. If no parameters are specified, all digital items will be returned. Be aware that these are
         * not normal items that can be added to a shopping cart. Rather, they are digital files that may be associated
         * with normal items. You will need to make multiple API calls in order to retrieve the entire result set since
         * this API performs result set pagination.
         *
         * Default sort order: original_filename
         * Possible sort orders: original_filename, description, file_size
         */

        const digitalItemOid = await ItemFunctions.insertSampleDigitalItem(); // create an item that will be unassociated.

        const limit = 100;
        const offset = 0;
        const since = undefined; // digital items do not use since. leave as undefined.
        const sort = undefined; // if undefined, use default of original_filename
        const expand = undefined; // digital items have no expansion. leave as undefined. this value is ignored
        const placeholders = undefined; // digital items have no placeholders. leave as undefined.

        const request = {
            _limit: limit,
            _offset: offset,
            _since: since,
            _sort: sort,
            _expand: expand,
            _placeholders: placeholders
        };
        const apiResponse = await new Promise((resolve, reject) => {
            itemApi.getUnassociatedDigitalItems(request, function (error, data, response) {
                if (error) reject(error);
                else resolve(data, response);
            });
        });

        const digitalItems = apiResponse.digital_items || [];

        console.log("The following items were retrieved via getUnassociatedDigitalItems():");
        digitalItems.forEach((digitalItem) => {
            console.log(digitalItem ? digitalItem.toString() : undefined); // Handle toString() in JS
        });
    } catch (error) {
        console.error("An Exception occurred. Please review the following error:");
        console.error(error); // <-- change_me: handle gracefully
        process.exit(1);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Default 100, Max 2000) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch items that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the items.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**ItemDigitalItemsResponse**](ItemDigitalItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertDigitalItem

> ItemDigitalItemResponse insertDigitalItem(digital_item)

Create a file within the digital library

Create a file within the digital library.  This does not create an item, but makes this digital file available and selectable as part (or all) of an item. 


### Example

```javascript
import { ItemFunctions } from './itemFunctions.js';

/**
 * Execute method containing all business logic
 */
export async function execute() {
    try {
        const digitalItemOid = await ItemFunctions.insertSampleDigitalItem();
        await ItemFunctions.deleteSampleDigitalItem(digitalItemOid);
    } catch (error) {
        console.error("An Exception occurred. Please review the following error:");
        console.error(error); // <-- change_me: handle gracefully
        process.exit(1);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **digital_item** | [**ItemDigitalItem**](ItemDigitalItem.md)| Digital item to create | 

### Return type

[**ItemDigitalItemResponse**](ItemDigitalItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertGatedCode

> ItemGatedCodeResponse insertGatedCode(merchant_item_oid, gated_code)

Add a single gated access code to an item

Insert a single gated access code; the server assigns the OID and created_dts. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid. | 
 **gated_code** | [**ItemGatedCode**](ItemGatedCode.md)| Gated code to insert. | 

### Return type

[**ItemGatedCodeResponse**](ItemGatedCodeResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertItem

> ItemResponse insertItem(item, opts)

Create an item

Create a new item on the UltraCart account. 


### Example

```javascript
import { ItemFunctions } from './itemFunctions.js';

/**
 * Execute method containing all business logic
 */
export async function execute() {
    try {
        const itemId = await ItemFunctions.insertSampleItem();
        await ItemFunctions.deleteSampleItem(itemId);
    } catch (error) {
        console.error("An Exception occurred. Please review the following error:");
        console.error(error); // handle gracefully
        process.exit(1);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item** | [**Item**](Item.md)| Item to create | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**ItemResponse**](ItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertReview

> ItemReviewResponse insertReview(merchant_item_oid, review)

Insert a review

Insert a item review. 


### Example

```javascript
import {itemApi} from '../api.js';
import {ItemFunctions} from './itemFunctions.js';

/**
 * Sample code for inserting a product review
 */
export async function execute() {
    try {
        // To insert a review, you'll need an item's OID (Object Identifier) first. So for this example, we create
        // a sample item first, then retrieve it by item id to fetch the item oid.

        const itemId = await ItemFunctions.insertSampleItem();

        const expand = "reviews"; // expand string is 'reviews' because we'll need to update the sample item's review template below.
        // list of expansions for item object: https://www.ultracart.com/api/#resource_item.html

        const itemResponse = await new Promise((resolve, reject) => {
            itemApi.getItemByMerchantItemId(itemId, {_expand: expand}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        const item = itemResponse.item;

        if (!item) {
            throw new Error("Unable to retrieve item");
        }

        const itemOid = item.merchant_item_oid || 0; // TODO: In a real script, add logic for undefined.

        // The target item must have a review template associated before you may attach a review.
        // You may create a review template here:
        // https://secure.ultracart.com/merchant/item/review/reviewTemplateListLoad.do
        // We're using a review template from our development system and it will not work for you.
        // Once you have a review template, update your item either via our gui or the rest api.
        // GUI: secure.ultracart.com -> Home -> Items -> <your item> -> Edit -> Review tab
        // Since we're using a sample item we just created above (line 17), we'll update via the rest api.
        // The rest api requires the review template oid, which is found on the template screen (url on line 25 above)

        const reviewTemplateOid = 402;
        const reviews = {review_template_oid: reviewTemplateOid};
        item.reviews = reviews;

        const updatedItemResponse = await new Promise((resolve, reject) => {
            itemApi.updateItem(
                itemOid,
                item,
                {_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
        });

        const updatedItemMaybe = updatedItemResponse.item;

        // You will need to know what your product review looks like.
        const review = {
            title: "Best Product Ever!",
            review: "I loved this product. I bought it for my wife and she was so happy she cried. blah blah blah",
            reviewed_nickname: "Bob420",
            featured: true, // featured? sure. why not? this is a great review.
            rating_name1: "Durability",
            rating_name2: "Price",
            rating_name3: "Performance",
            rating_name4: "Appearance",
            rating_score1: 4.5,
            rating_score2: 3.5,
            rating_score3: 2.5,
            rating_score4: 1.5,
            overall: 5.0, // hooray!
            reviewer_location: "Southside Chicago",
            status: "Approved"
        };

        // insert the review and update our local variable to see how the review looks now.
        const insertedReviewResponse = await new Promise((resolve, reject) => {
            itemApi.insertReview(itemOid, review, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        const insertedReview = insertedReviewResponse.review;

        console.log("This is my review object:");
        console.log(insertedReview?.toString());

        // This will clean up the sample item, but you may wish to review the item in the backend or on your website first.
        // await ItemFunctions.deleteSampleItem(itemId);
    } catch (error) {
        console.error("An Exception occurred. Please review the following error:");
        console.error(error); // handle gracefully
        process.exit(1);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid the review is associated with. | 
 **review** | [**ItemReview**](ItemReview.md)| Review to insert | 

### Return type

[**ItemReviewResponse**](ItemReviewResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertUpdateItemContentAttribute

> insertUpdateItemContentAttribute(merchant_item_oid, item_attribute)

Upsert an item content attribute

Update an item content attribute, creating it new if it does not yet exist. 


### Example

```javascript
import { itemApi } from '../api.js';

export class InsertUpdateItemContentAttribute {
    /**
     * While UltraCart provides a means for updating item content, it is StoreFront specific. This method allows for
     * item-wide update of content, such as SEO fields. The content attribute has three fields:
     * 1) name
     * 2) value
     * 3) type: boolean,color,definitionlist,html,integer,mailinglist,multiline,rgba,simplelist,string,videolist
     *
     * The SEO content has the following names:
     * Item Meta Title = "storefrontSEOTitle"
     * Item Meta Description = "storefrontSEODescription"
     * Item Meta Keywords = "storefrontSEOKeywords"
     *
     * The merchant_item_oid is a unique identifier used by UltraCart. If you do not know your item's oid, call
     * ItemApi.GetItemByMerchantItemId() to retrieve the item, and then it's oid item.MerchantItemOid
     *
     * Success will return back a status code of 204 (No Content)
     */
    static async execute() {
        const merchantItemOid = 12345;

        const attribute = {
            name: "storefrontSEOKeywords",
            value: "dog,cat,fish",
            type: "string"
        };

        await new Promise((resolve, reject) => {
            itemApi.insertUpdateItemContentAttribute(merchantItemOid, attribute, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid to modify. | 
 **item_attribute** | [**ItemContentAttribute**](ItemContentAttribute.md)| Item content attribute to upsert | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## replaceGatedCodes

> ItemGatedCodesResponse replaceGatedCodes(merchant_item_oid, gated_codes_request)

Replace the full list of gated access codes for an item

Existing codes not present in the request body are deleted. New codes are inserted. Unchanged codes preserve their OID and created_dts. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid. | 
 **gated_codes_request** | [**ItemGatedCodesRequest**](ItemGatedCodesRequest.md)| Codes to replace the existing list with. | 

### Return type

[**ItemGatedCodesResponse**](ItemGatedCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateDigitalItem

> ItemDigitalItemResponse updateDigitalItem(digital_item_oid, digital_item)

Updates a file within the digital library

Updates a file within the digital library.  This does not update an item, but updates a digital file available and selectable as part (or all) of an item. 


### Example

```javascript
import {itemApi} from '../api.js';
import {ItemFunctions} from './itemFunctions.js';

export class UpdateDigitalItem {
    /**
     * Updates a digital item by:
     * 1. Inserting a sample digital item
     * 2. Retrieving the item
     * 3. Modifying its description and click-wrap agreement
     * 4. Updating the item
     * 5. Deleting the sample digital item
     */
    static async execute() {
        try {
            // Insert a sample digital item and get its OID
            const digitalItemOid = await ItemFunctions.insertSampleDigitalItem();

            // Retrieve the digital item
            const apiResponse = await new Promise((resolve, reject) => {
                itemApi.getDigitalItem(digitalItemOid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            const digitalItem = apiResponse.digital_item;

            // Ensure the digital item exists before updating
            if (!digitalItem) {
                throw new Error('Digital item not found');
            }

            // Update the digital item details
            digitalItem.description = "I have updated the description to this sentence.";
            digitalItem.click_wrap_agreement = "You hereby agree that the earth is round.  No debate.";

            // Update the digital item
            await new Promise((resolve, reject) => {
                itemApi.updateDigitalItem(digitalItemOid, digitalItem, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            // Delete the sample digital item
            await ItemFunctions.deleteSampleDigitalItem(digitalItemOid);
        } catch (error) {
            console.error("An error occurred while updating the digital item:", error);
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **digital_item_oid** | **Number**| The digital item oid to update. | 
 **digital_item** | [**ItemDigitalItem**](ItemDigitalItem.md)| Digital item to update | 

### Return type

[**ItemDigitalItemResponse**](ItemDigitalItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateItem

> ItemResponse updateItem(merchant_item_oid, item, opts)

Update an item

Update a new item on the UltraCart account. 


### Example

```javascript
import {itemApi} from '../api.js';
import {ItemFunctions} from './itemFunctions.js';

export class UpdateItem {
    /**
     * Updates an item by:
     * 1. Inserting a sample item
     * 2. Retrieving the item with pricing expansion
     * 3. Updating the item's cost
     * 4. Verifying the price update
     * 5. Deleting the sample item
     *
     * See https://www.ultracart.com/api/#resource_item.html for possible expansion values
     */
    static async execute() {
        try {
            // Insert a sample item and get its merchant item ID
            const itemId = await ItemFunctions.insertSampleItem();

            // Define expansion parameter
            const expand = "pricing";

            // Retrieve the item by merchant item ID
            const apiResponse = await new Promise((resolve, reject) => {
                itemApi.getItemByMerchantItemId(itemId,
                    {_expand: expand}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
            });
            const item = apiResponse.item;

            if (item === undefined || item.merchant_item_oid === undefined) {
                console.error("Unable to retrieve item for update");
                return;
            }
            // Ensure the item exists
            if (!item || !item.pricing) {
                throw new Error('Item or pricing information not found');
            }

            // Store the original price
            const originalPrice = item.pricing.cost ?? 0;

            // Update the item's pricing
            const itemPricing = item.pricing;
            itemPricing.cost = 12.99;

            // Update the item
            const updatedApiResponse = await new Promise((resolve, reject) => {
                itemApi.updateItem(
                    item.merchant_item_oid,
                    item,
                    {_expand: expand}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
            });
            const updatedItem = updatedApiResponse.item;

            // Verify the price update
            if (!updatedItem?.pricing) {
                throw new Error('Updated item or pricing information not found');
            }

            console.log(`Original Price: ${originalPrice}`);
            console.log(`Updated Price: ${updatedItem.pricing.cost}`);

            // Delete the sample item
            await ItemFunctions.deleteSampleItem(itemId);
        } catch (error) {
            console.error("An error occurred while updating the item:", error);
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_item_oid** | **Number**| The item oid to update. | 
 **item** | [**Item**](Item.md)| Item to update | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**ItemResponse**](ItemResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateItems

> ItemsResponse updateItems(items_request, opts)

Update multiple items

Update multiple item on the UltraCart account. 


### Example

```javascript
import {itemApi} from '../api.js';
import {ItemFunctions} from './itemFunctions.js';

export class UpdateItems {
    /**
     * Updates multiple items by:
     * 1. Inserting two sample items
     * 2. Retrieving both items with pricing expansion
     * 3. Updating the prices of both items
     * 4. Performing a bulk update
     * 5. Deleting the sample items
     *
     * See https://www.ultracart.com/api/#resource_item.html for possible expansion values
     */
    static async execute() {
        try {
            // Insert two sample items
            const itemId1 = await ItemFunctions.insertSampleItem();
            const itemId2 = await ItemFunctions.insertSampleItem();

            // Define expansion parameter
            const expand = "pricing";

            // Retrieve the first item
            const apiResponse1 = await new Promise((resolve, reject) => {
                itemApi.getItemByMerchantItemId(itemId1,
                    {_expand: expand}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
            });
            const item1 = apiResponse1.item;

            // Retrieve the second item
            const apiResponse2 = await new Promise((resolve, reject) => {
                itemApi.getItemByMerchantItemId(
                    itemId2,
                    {_expand: expand}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
            });
            const item2 = apiResponse2.item;

            // Ensure both items exist and have pricing
            if (!item1 || !item1.pricing || !item2 || !item2.pricing) {
                throw new Error('One or more items or their pricing information not found');
            }

            // Update the prices of the items
            item1.pricing.cost = 12.99;
            item2.pricing.cost = 14.99;

            // Prepare items for bulk update
            const updateItemsRequest = {
                items: [item1, item2]
            };

            // Perform bulk update
            const updateItemsResponse = await new Promise((resolve, reject) => {
                itemApi.updateItems(updateItemsRequest,
                    {_expand: expand, async: false}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
            });

            // Delete the sample items
            await ItemFunctions.deleteSampleItem(itemId1);
            await ItemFunctions.deleteSampleItem(itemId2);
        } catch (error) {
            console.error("An error occurred while updating items:", error);
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **items_request** | [**ItemsRequest**](ItemsRequest.md)| Items to update (synchronous maximum 20 / asynchronous maximum 100) | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 
 **_async** | **Boolean**| True if the operation should be run async.  No result returned | [optional] 

### Return type

[**ItemsResponse**](ItemsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateReview

> ItemReviewResponse updateReview(review_oid, merchant_item_oid, review)

Update a review

Update an item review. 


### Example

```javascript
import { itemApi } from '../api.js';

export class UpdateReview {
    /**
     * Updates an existing item review with new details
     *
     * Note: To update a review, you'll need:
     * 1. The merchant item's OID (Object Identifier)
     * 2. The specific review's OID you wish to update
     *
     * If you don't know the item's OID, call GetItemByMerchantItemId() to retrieve it
     */
    static async execute() {
        try {
            // Merchant item OID and review OID to update
            const merchantItemOid = 99998888; // Replace with your actual merchant item OID
            const reviewOid = 123456; // Replace with the specific review OID to update

            // Retrieve the existing review
            const reviewResponse = await new Promise((resolve, reject) => {
                itemApi.getReview(merchantItemOid, reviewOid, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            const review = reviewResponse.review;

            // Ensure the review exists before updating
            if (!review) {
                throw new Error('Review not found');
            }

            // Update review details
            review.title = "Best Product Ever!";
            review.review = "I loved this product. I bought it for my wife and she was so happy she cried. blah blah blah";
            review.reviewed_nickname = "Bob420";
            review.featured = true;

            // Update rating details
            review.rating_name1 = "Durability";
            review.rating_name2 = "Price";
            review.rating_name3 = "Performance";
            review.rating_name4 = "Appearance";
            review.rating_score1 = 4.5;
            review.rating_score2 = 3.5;
            review.rating_score3 = 2.5;
            review.rating_score4 = 1.5;
            review.overall = 5.0;

            // Additional review metadata
            review.reviewer_location = "Southside Chicago";
            review.status = "Approved";

            // Update the review and retrieve the updated version
            const updatedReviewResponse = await new Promise((resolve, reject) => {
                itemApi.updateReview(
                    reviewOid,
                    merchantItemOid,
                    review
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            const updatedReview = updatedReviewResponse.review;

            // Log the updated review details
            console.log("Updated Review Object:");
            console.log(JSON.stringify(updatedReview, null, 2));
        } catch (error) {
            console.error("An error occurred while updating the review:", error);
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **review_oid** | **Number**| The review oid to update. | 
 **merchant_item_oid** | **Number**| The item oid the review is associated with. | 
 **review** | [**ItemReview**](ItemReview.md)| Review to update | 

### Return type

[**ItemReviewResponse**](ItemReviewResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## uploadTemporaryMultimedia

> TempMultimediaResponse uploadTemporaryMultimedia(file)

Upload an image to the temporary multimedia.

Uploads an image and returns back meta information about the image as well as the identifier needed for the item update. 


### Example

```javascript
// This method is used internally by UltraCart.
// We don't envision a scenario where a merchant would ever need to call this.
// As such, we're not providing a sample for it.  If you can think of a use for this
// method, contact us, and we'll help you work through it.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| File to upload | 

### Return type

[**TempMultimediaResponse**](TempMultimediaResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

