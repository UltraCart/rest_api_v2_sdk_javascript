# UltraCartRestApiV2.AutoOrderApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attemptAutoOrderRebill**](AutoOrderApi.md#attemptAutoOrderRebill) | **POST** /auto_order/auto_orders/{auto_order_oid}/rebill | Attempt a failed rebill on an auto order
[**cancelAutoOrderItemByReferenceOrderId**](AutoOrderApi.md#cancelAutoOrderItemByReferenceOrderId) | **POST** /auto_order/auto_orders/reference_order_id/{reference_order_id}/items/original/{original_item_id}/cancel | Cancel a single item on an auto order
[**consolidateAutoOrders**](AutoOrderApi.md#consolidateAutoOrders) | **PUT** /auto_order/auto_orders/{auto_order_oid}/consolidate | Consolidates multiple auto orders
[**establishAutoOrderByReferenceOrderId**](AutoOrderApi.md#establishAutoOrderByReferenceOrderId) | **POST** /auto_order/auto_orders/reference_order_id/{reference_order_id} | Establish an auto order by referencing a regular order id
[**getAutoOrder**](AutoOrderApi.md#getAutoOrder) | **GET** /auto_order/auto_orders/{auto_order_oid} | Retrieve an auto order by oid
[**getAutoOrderByCode**](AutoOrderApi.md#getAutoOrderByCode) | **GET** /auto_order/auto_orders/code/{auto_order_code} | Retrieve an auto order by code
[**getAutoOrderByReferenceOrderId**](AutoOrderApi.md#getAutoOrderByReferenceOrderId) | **GET** /auto_order/auto_orders/reference_order_id/{reference_order_id} | Retrieve an auto order by order id
[**getAutoOrderCancelReasons**](AutoOrderApi.md#getAutoOrderCancelReasons) | **GET** /auto_order/auto_orders/cancel_reasons | Retrieve auto order cancel reasons.
[**getAutoOrderEmails**](AutoOrderApi.md#getAutoOrderEmails) | **GET** /auto_order/auto_orders/{auto_order_oid}/emails | Retrieve email delivery information for this auto order.
[**getAutoOrders**](AutoOrderApi.md#getAutoOrders) | **GET** /auto_order/auto_orders | Retrieve auto orders
[**getAutoOrdersBatch**](AutoOrderApi.md#getAutoOrdersBatch) | **POST** /auto_order/auto_orders/batch | Retrieve auto order batch
[**getAutoOrdersByQuery**](AutoOrderApi.md#getAutoOrdersByQuery) | **POST** /auto_order/auto_orders/query | Retrieve auto orders by query
[**pauseAutoOrder**](AutoOrderApi.md#pauseAutoOrder) | **PUT** /auto_order/auto_orders/{auto_order_oid}/pause | Pause auto order
[**updateAutoOrder**](AutoOrderApi.md#updateAutoOrder) | **PUT** /auto_order/auto_orders/{auto_order_oid} | Update an auto order
[**updateAutoOrderItemAddOns**](AutoOrderApi.md#updateAutoOrderItemAddOns) | **PUT** /auto_order/auto_orders/{auto_order_oid}/items/{auto_order_item_oid}/add_ons | Update an auto order item add ons
[**updateAutoOrderItemProperties**](AutoOrderApi.md#updateAutoOrderItemProperties) | **PUT** /auto_order/auto_orders/{auto_order_oid}/items/{auto_order_item_oid}/properties | Update an auto order item properties
[**updateAutoOrderPayment**](AutoOrderApi.md#updateAutoOrderPayment) | **PUT** /auto_order/auto_orders/{auto_order_oid}/payment | Update the payment information on an auto order
[**updateAutoOrderProperties**](AutoOrderApi.md#updateAutoOrderProperties) | **PUT** /auto_order/auto_orders/{auto_order_oid}/properties | Update an auto order properties
[**updateAutoOrdersBatch**](AutoOrderApi.md#updateAutoOrdersBatch) | **PUT** /auto_order/auto_orders/batch | Update multiple auto orders



## attemptAutoOrderRebill

> AutoOrderRebillResponse attemptAutoOrderRebill(auto_order_oid, opts)

Attempt a failed rebill on an auto order

Attempts to rebill an auto order using the payment information already on the original order.  The attempt is refused if the auto order is scheduled to charge within the next five minutes, or if it was already billed within the last 24 hours, both of which guard against double charging.  Runs synchronously and may take some time while the gateway is contacted.  A declined card is reported in the response body rather than as an API error. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to rebill. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderRebillResponse**](AutoOrderRebillResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cancelAutoOrderItemByReferenceOrderId

> AutoOrderResponse cancelAutoOrderItemByReferenceOrderId(reference_order_id, original_item_id, opts)

Cancel a single item on an auto order

Cancels a single item on an auto order identified by the original order id and the item&#39;s original_item_id.  The request body may specify mode&#x3D;end (soft cancel by setting no_order_after_dts to the current time, preserving the row for reporting; this is the default when the body is omitted) or mode&#x3D;remove (hard delete).  Returns the updated auto order based upon expansion. 


### Example

```javascript
import { autoOrderApi } from '../api.js';

/**
 * Cancel a single item on an auto order, identified by the reference (original) order id
 * that placed the auto order and the original item id on that order. This is useful when
 * you know the original UltraCart order id rather than the auto_order_oid.
 */
export async function execute() {
  const referenceOrderId = "DEMO-12345678"; // the UltraCart order id that placed the auto order
  const originalItemId   = "ITEM001";       // the merchant item id on that original order
  const opts = {
    '_expand': 'items' // see https://www.ultracart.com/api/#resource_auto_order.html for list
  };

  const response = await new Promise((resolve, reject) => {
    autoOrderApi.cancelAutoOrderItemByReferenceOrderId(referenceOrderId, originalItemId, opts, function (error, data, response) {
      if (error) {
        reject(error);
      } else {
        resolve(data, response);
      }
    });
  });

  const autoOrder = response.auto_order;
  console.log(autoOrder);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_order_id** | **String**| The reference order id (original_order_id) of the auto order. | 
 **original_item_id** | **String**| The original_item_id (SKU) of the item to cancel. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **auto_order_item_cancel_request** | [**AutoOrderItemCancelRequest**](AutoOrderItemCancelRequest.md)| Cancel request.  Body is optional; omit for default mode&#x3D;end. | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## consolidateAutoOrders

> AutoOrderResponse consolidateAutoOrders(auto_order_oid, auto_order_consolidate, opts)

Consolidates multiple auto orders

Consolidates mutliple auto orders on the UltraCart account. 


### Example

```javascript
import {autoOrderApi} from "../api.js";

/**
 * Consolidate Auto Orders
 *
 * An auto order with no items, the original_order is used for shipping, billing, and payment information.
 * Once you have your empty auto order, add items to it and call updateAutoOrder.
 */
export async function consolidateAutoOrders() {
    console.log(`--- ${consolidateAutoOrders.name} ---`);

    try {

        // Expand parameter to include additional details
        const expand = 'items,items.future_schedules,original_order,rebill_orders';
        // See https://www.ultracart.com/api/#resource_auto_order.html for full list of expand options

        // Target auto order OID (replace with actual value)
        const targetAutoOrderOid = 123456789;

        // Consolidate request object
        const consolidateRequest = {
            source_auto_order_oids: [23456789, 3456789] // Auto order OIDs to consolidate into the target
        };

        // Perform the consolidation
        const apiResponse = await new Promise((resolve, reject) => {
            autoOrderApi.consolidateAutoOrders(targetAutoOrderOid, consolidateRequest, {_expand: expand}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        // Extracted consolidated auto order
        const consolidatedAutoOrder = apiResponse.auto_order;

        // TODO: Verify the consolidated order has all items and history from source orders
        console.log(consolidatedAutoOrder);
    } catch (error) {
        // Error handling
        console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        console.error(error instanceof Error ? error.stack : error);
    }
}

// Optional: If you want to call the function
// consolidateAutoOrders().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to consolidate into. | 
 **auto_order_consolidate** | [**AutoOrderConsolidate**](AutoOrderConsolidate.md)| Auto orders to consolidate | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## establishAutoOrderByReferenceOrderId

> AutoOrderResponse establishAutoOrderByReferenceOrderId(reference_order_id, opts)

Establish an auto order by referencing a regular order id

Establish an auto order by referencing a regular order id.  The result will be an auto order without any items.  You should add the items and perform an update call.  Orders must be less than 60 days old and use a credit card payment. 


### Example

```javascript
import {autoOrderApi} from "../api.js";

/**
 * This method takes a normal order id and creates an empty auto order from it.  While this might seem useless having
 * an auto order with no items, the original_order is used for shipping, billing, and payment information.
 * Once you have your empty auto order, add items to it and call updateAutoOrder.
 */
export async function establishAutoOrderByReferenceOrderId() {
    console.log(`--- ${establishAutoOrderByReferenceOrderId.name} ---`);

    try {
        // Expand parameter to include additional details
        const expand = 'items,items.future_schedules,original_order,rebill_orders';
        // see https://www.ultracart.com/api/#resource_auto_order.html for list

        const originalOrderId = 'DEMO-123457';
        const apiResponse = await new Promise((resolve, reject) => {
            autoOrderApi.establishAutoOrderByReferenceOrderId(originalOrderId, {_expand: expand}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        const emptyAutoOrderOrUndefined = apiResponse.auto_order;
        if (emptyAutoOrderOrUndefined !== undefined) {
            let emptyAutoOrder = emptyAutoOrderOrUndefined;
            const autoOrderOid = emptyAutoOrder.auto_order_oid || 0;

            // Create items for the auto order
            const items = [];
            const item = {
                original_item_id: 'ITEM_ABC', // This item should be configured with auto order features
                original_quantity: 1,
                arbitrary_unit_cost: 59.99,
                // Valid Frequencies:
                // "Weekly", "Biweekly", "Every...", "Every 10 Days", "Every 4 Weeks", "Every 6 Weeks", "Every 8 Weeks",
                // "Every 24 Days", "Every 28 Days", "Monthly", "Every 45 Days", "Every 2 Months", "Every 3 Months",
                // "Every 4 Months", "Every 5 Months", "Every 6 Months", "Yearly"
                frequency: 'Monthly'
            };
            items.push(item);
            emptyAutoOrder.items = items;

            const validateOriginalOrder = 'No';
            const updateResponse = await new Promise((resolve, reject) => {
                autoOrderApi.updateAutoOrder(
                    autoOrderOid,
                    emptyAutoOrder, {validate_original_order: validateOriginalOrder, _expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            //     autoOrderOid: number;
            // autoOrder: AutoOrder;
            // validateOriginalOrder?: string;
            // expand?: string;

            const updatedAutoOrder = updateResponse.auto_order;
            console.log(updatedAutoOrder);

        }
    } catch (error) {
        // Error handling
        console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        console.error(error instanceof Error ? error.stack : error);
    }
}

// Optional: If you want to call the function
// establishAutoOrderByReferenceOrderId().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_order_id** | **String**| The order id to attach this auto order to | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrder

> AutoOrderResponse getAutoOrder(auto_order_oid, opts)

Retrieve an auto order by oid

Retrieves a single auto order using the specified auto order oid. 


### Example

```javascript
import { autoOrderApi } from "../api.js";

/**
 * Retrieves an auto_order given the auto_order_oid.
 */
export async function getAutoOrder() {
  console.log(`--- ${getAutoOrder.name} ---`);

  try {
    // Expand parameter to include additional details
    const expand = 'items,items.future_schedules,original_order,rebill_orders';
    // See https://www.ultracart.com/api/#resource_auto_order.html for list

    // If you don't know the oid, use getAutoOrdersByQuery for retrieving auto orders
    const autoOrderOid = 123456789;

    const apiResponse = await new Promise((resolve, reject) => {
      autoOrderApi.getAutoOrder(autoOrderOid, {_expand: expand}, function (error, data, response) {
        if (error) {
          reject(error);
        } else {
          resolve(data, response);
        }
      });
    });
    const autoOrder = apiResponse.auto_order;

    console.log(autoOrder);
  } catch (error) {
    // Error handling
    console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(error instanceof Error ? error.stack : error);
  }
}

// Optional: If you want to call the function
// getAutoOrder().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrderByCode

> AutoOrderResponse getAutoOrderByCode(auto_order_code, opts)

Retrieve an auto order by code

Retrieves a single auto order using the specified reference (original) order id. 


### Example

```javascript
import {autoOrderApi} from "../api.js";

/**
 * This example illustrates how to query an auto order when you know the 'code'. Each AutoOrder has a unique
 * identifier used by UltraCart called an OID (Object Identifier). AutoOrders also have a unique code which
 * is (arguably) an easy way for customers to discuss a specific auto order with a merchant.
 * The codes look like this: "RT2A9CBSX9"
 *
 * It is doubtful that an UltraCart merchant will ever make use of this method.
 *
 * IMPORTANT: The following is a comprehensive list of possible expansion values for auto orders.
 * This list is taken from www.ultracart.com/api/ and may become stale.
 * Please review the master website when in doubt.
 *
 * Expansion values include (but are not limited to):
 * - items
 * - items.future_schedules
 * - items.sample_schedule
 * - original_order
 * - original_order.affiliate
 * - original_order.affiliate.ledger
 * ... (full list of expansions)
 * - rebill_orders.taxes
 */
export async function getAutoOrderByCode() {
    console.log(`--- ${getAutoOrderByCode.name} ---`);

    try {
        // Contact UltraCart if you're unsure what expansions you need
        const expand = 'items,items.future_schedules,original_order,rebill_orders';

        const code = 'RT2A9CBSX9';
        const apiResponse = await new Promise((resolve, reject) => {
            autoOrderApi.getAutoOrderByCode(code, {_expand: expand}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        const autoOrder = apiResponse.auto_order;

        // This will be verbose...
        console.log(autoOrder);
    } catch (error) {
        // Error handling
        console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        console.error(error instanceof Error ? error.stack : error);
    }
}

// Optional: If you want to call the function
// getAutoOrderByCode().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_code** | **String**| The auto order oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrderByReferenceOrderId

> AutoOrderResponse getAutoOrderByReferenceOrderId(reference_order_id, opts)

Retrieve an auto order by order id

Retrieves a single auto order using the specified reference (original) order id. 


### Example

```javascript
import {autoOrderApi} from "../api.js";

/**
 * This example illustrates how to query an auto order when you know the original order id.
 * These are the possible expansion values for auto orders. This list is taken from www.ultracart.com/api/
 * and may become stale. Please review the master website when in doubt.
 *
 * Expansion values include (but are not limited to):
 * - items
 * - items.future_schedules
 * - items.sample_schedule
 * - original_order
 * - original_order.affiliate
 * - original_order.affiliate.ledger
 * ... (full list of expansions)
 * - rebill_orders.taxes
 */
export async function getAutoOrderByReferenceOrderId() {
    console.log(`--- ${getAutoOrderByReferenceOrderId.name} ---`);

    try {
        // Contact UltraCart if you're unsure what expansions you need
        const expand = 'items,items.future_schedules,original_order,rebill_orders';

        const originalOrderId = 'DEMO-12345678';
        const apiResponse = await new Promise((resolve, reject) => {
            autoOrderApi.getAutoOrderByReferenceOrderId(originalOrderId, {_expand: expand}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        const autoOrder = apiResponse.auto_order;

        // This will be verbose...
        console.log(autoOrder);
    } catch (error) {
        // Error handling
        console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        console.error(error instanceof Error ? error.stack : error);
    }
}

// Optional: If you want to call the function
// getAutoOrderByReferenceOrderId().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_order_id** | **String**| The auto order oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrderCancelReasons

> AutoOrderCancelReasonsResponse getAutoOrderCancelReasons()

Retrieve auto order cancel reasons.

Retrieves auto order cancel reasons. 


### Example

```javascript
import { autoOrderApi } from "../api.js";

/**
 * Retrieves the list of cancel reasons that can be presented to customers when
 * cancelling an auto order (e.g., in MyAccount). Each reason includes the reason
 * text, an optional MyAccount alternate description, and whether the reason is
 * visible in MyAccount.
 */
export async function getAutoOrderCancelReasons() {
  console.log(`--- ${getAutoOrderCancelReasons.name} ---`);

  try {
    const apiResponse = await new Promise((resolve, reject) => {
      autoOrderApi.getAutoOrderCancelReasons(function (error, data, response) {
        if (error) {
          reject(error);
        } else {
          resolve(data, response);
        }
      });
    });

    const cancelReasons = apiResponse.cancel_reasons || [];
    cancelReasons.forEach((cancelReason) => {
      console.log(cancelReason);
    });
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(error instanceof Error ? error.stack : error);
  }
}

// Optional: If you want to call the function
// getAutoOrderCancelReasons().catch(console.error);
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**AutoOrderCancelReasonsResponse**](AutoOrderCancelReasonsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrderEmails

> AutoOrderEmailsResponse getAutoOrderEmails(auto_order_oid)

Retrieve email delivery information for this auto order.

Retrieves email delivery records associated with the specified auto order. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to retrieve email delivery information for. | 

### Return type

[**AutoOrderEmailsResponse**](AutoOrderEmailsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrders

> AutoOrdersResponse getAutoOrders(opts)

Retrieve auto orders

Retrieves auto orders from the account.  If no parameters are specified, all auto orders will be returned.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
import {autoOrderApi} from "../api.js";

/**
 * getAutoOrders provides a query service on AutoOrders (aka subscriptions or recurring orders) within the UltraCart
 * system. It was the first query provided and the most cumbersome to use.  Please use getAutoOrdersByQuery for an
 * easier query method.  If you have multiple auto_order_oids and need the corresponding objects, consider
 * getAutoOrdersBatch() to reduce call count.
 */
export class GetAutoOrders {
    /**
     * Executes the auto orders retrieval process
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            const autoOrders = [];

            let iteration = 1;
            let offset = 0;
            const limit = 200;
            let moreRecordsToFetch = true;

            while (moreRecordsToFetch) {
                console.log(`executing iteration ${iteration}`);
                const chunkOfAutoOrders = await this.getAutoOrderChunk(offset, limit);
                autoOrders.push(...chunkOfAutoOrders);
                offset = offset + limit;
                moreRecordsToFetch = chunkOfAutoOrders.length === limit;
                iteration++;
            }

            // Display the auto orders
            for (const autoOrder of autoOrders) {
                console.log(autoOrder);
            }

            console.log(`Total auto orders retrieved: ${autoOrders.length}`);
        } catch (ex) {
            console.error(`Error: ${ex instanceof Error ? ex.message : String(ex)}`);
            console.error(ex instanceof Error ? ex.stack : 'No stack trace available');
        }
    }

    /**
     * Returns a chunk of auto orders based on query parameters
     * @param offset Pagination offset
     * @param limit Maximum number of records to return
     * @returns List of matching auto orders
     */
    static async getAutoOrderChunk(offset, limit) {
        const expand = "items,original_order,rebill_orders";
        /*
        Possible Order Expansions:

        add_ons                             items.sample_schedule	        original_order.buysafe	        original_order.payment.transaction
        items	                            original_order	                original_order.channel_partner	original_order.quote
        items.future_schedules	            original_order.affiliate	    original_order.checkout	        original_order.salesforce
        original_order.affiliate.ledger	    original_order.coupon	        original_order.shipping
        original_order.auto_order	        original_order.customer_profile	original_order.summary
        original_order.billing	            original_order.digital_order	original_order.taxes
        rebill_orders	                    original_order.edi	            rebill_orders.affiliate
        rebill_orders.affiliate.ledger	    original_order.fraud_score	    rebill_orders.auto_order
        rebill_orders.billing	            original_order.gift	            rebill_orders.buysafe
        rebill_orders.channel_partner	    original_order.gift_certificate	rebill_orders.checkout
        rebill_orders.coupon	            original_order.internal	        rebill_orders.customer_profile
        rebill_orders.digital_order	        original_order.item	            rebill_orders.edi
        rebill_orders.fraud_score	        original_order.linked_shipment	rebill_orders.gift
        rebill_orders.gift_certificate      original_order.marketing	    rebill_orders.internal
        rebill_orders.item	                original_order.payment	        rebill_orders.linked_shipment
        rebill_orders.marketing	            rebill_orders.payment	        rebill_orders.quote
        rebill_orders.payment.transaction	rebill_orders.salesforce	    rebill_orders.shipping
        rebill_orders.summary	            rebill_orders.taxes
        */

        const queryParams = {
            autoOrderCode: undefined,
            originalOrderId: undefined,
            firstName: undefined,
            lastName: undefined,
            company: undefined,
            city: undefined,
            state: undefined,
            postalCode: undefined,
            countryCode: undefined,
            phone: undefined,
            email: "test@ultracart.com", // for this example, we are only filtering on email address
            originalOrderDateBegin: undefined,
            originalOrderDateEnd: undefined,
            nextShipmentDateBegin: undefined,
            nextShipmentDateEnd: undefined,
            cardType: undefined,
            itemId: undefined,
            status: undefined,
            _limit: limit,
            _offset: offset,
            _since: undefined,
            _sort: undefined,
            _expand: expand
        };

        const apiResponse = await new Promise((resolve, reject) => {
            autoOrderApi.getAutoOrders(queryParams, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        return apiResponse.auto_orders ?? [];
    }
}

// Define an object for the query parameters to make the code more structured
// Note: In JavaScript, we don't need a separate interface definition
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_code** | **String**| Auto order code | [optional] 
 **original_order_id** | **String**| Original order id | [optional] 
 **first_name** | **String**| First name | [optional] 
 **last_name** | **String**| Last name | [optional] 
 **company** | **String**| Company | [optional] 
 **city** | **String**| City | [optional] 
 **state** | **String**| State | [optional] 
 **postal_code** | **String**| Postal code | [optional] 
 **country_code** | **String**| Country code (ISO-3166 two letter) | [optional] 
 **phone** | **String**| Phone | [optional] 
 **email** | **String**| Email | [optional] 
 **original_order_date_begin** | **String**| Original order date begin | [optional] 
 **original_order_date_end** | **String**| Original order date end | [optional] 
 **next_shipment_date_begin** | **String**| Next shipment date begin | [optional] 
 **next_shipment_date_end** | **String**| Next shipment date end | [optional] 
 **card_type** | **String**| Card type | [optional] 
 **item_id** | **String**| Item ID | [optional] 
 **status** | **String**| Status | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Max 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch auto orders that have been created/modified since this date/time. | [optional] 
 **_sort** | **String**| The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrdersResponse**](AutoOrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoOrdersBatch

> AutoOrdersResponse getAutoOrdersBatch(auto_order_batch, opts)

Retrieve auto order batch

Retrieves a group of auto orders from the account based on an array of auto order oids.  If more than 200 auto order ids are specified, the API call will fail with a bad request error. 


### Example

```javascript
import {autoOrderApi} from "../api.js";

/**
 * This example illustrates how to retrieve auto orders when you have a list of auto_order_oid.
 * These are the possible expansion values for auto orders.  This list is taken from www.ultracart.com/api/
 * and may become stale. Please review the master website when in doubt.
 *
 * Possible expansion values include:
 * - items
 * - items.future_schedules
 * - items.sample_schedule
 * - original_order
 * - original_order.affiliate
 * ... (full list of expansions from original comment)
 */
export class GetAutoOrdersBatch {
    /**
     * Executes batch retrieval of auto orders
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // Define expansion fields
            const expand =
                "items,items.future_schedules,original_order,rebill_orders"; // contact us if you're unsure what you need

            // Define auto order OIDs (numbers)
            const autoOrderOids = [123456, 234567, 345678, 456789];

            // Create batch request
            const batchRequest = {
                auto_order_oids: autoOrderOids
            };

            // Retrieve auto orders
            const apiResponse = await new Promise((resolve, reject) => {
                autoOrderApi.getAutoOrdersBatch(batchRequest, {_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const autoOrders = apiResponse.auto_orders ?? [];

            // Display auto orders
            for (const autoOrder of autoOrders) {
                console.log(autoOrder);
            }

            console.log(`Retrieved ${autoOrders.length} auto orders`);
        } catch (ex) {
            console.error(`Error: ${ex instanceof Error ? ex.message : String(ex)}`);
            console.error(ex instanceof Error ? ex.stack : 'No stack trace available');
        }
    }
}

// Optionally, if you need to call this
// GetAutoOrdersBatch.execute().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_batch** | [**AutoOrderQueryBatch**](AutoOrderQueryBatch.md)| Auto order batch | 
 **_expand** | **String**| The object expansion to perform on the result. | [optional] 

### Return type

[**AutoOrdersResponse**](AutoOrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAutoOrdersByQuery

> AutoOrdersResponse getAutoOrdersByQuery(auto_order_query, opts)

Retrieve auto orders by query

Retrieves a group of auto orders from the account based on a query object.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
import {DateTime} from 'luxon';
import {autoOrderApi} from '../api.js';

/**
 * This example illustrates how to retrieve auto orders and handle pagination.
 *
 * These are the possible expansion values for auto orders. This list is taken from www.ultracart.com/api/
 * and may become stale. Please review the master website when in doubt.
 * Expansion options include:
 *            items
 *             items.future_schedules
 *             items.sample_schedule
 *             original_order
 *             original_order.affiliate
 *             original_order.affiliate.ledger
 *             original_order.auto_order
 *             original_order.billing
 *             original_order.buysafe
 *             original_order.channel_partner
 *             original_order.checkout
 *             original_order.coupon
 *             original_order.customer_profile
 *             original_order.digital_order
 *             original_order.edi
 *             original_order.fraud_score
 *             original_order.gift
 *             original_order.gift_certificate
 *             original_order.internal
 *             original_order.item
 *             original_order.linked_shipment
 *             original_order.marketing
 *             original_order.payment
 *             original_order.payment.transaction
 *             original_order.quote
 *             original_order.salesforce
 *             original_order.shipping
 *             original_order.summary
 *             original_order.taxes
 *             rebill_orders
 *             rebill_orders.affiliate
 *             rebill_orders.affiliate.ledger
 *             rebill_orders.auto_order
 *             rebill_orders.billing
 *             rebill_orders.buysafe
 *             rebill_orders.channel_partner
 *             rebill_orders.checkout
 *             rebill_orders.coupon
 *             rebill_orders.customer_profile
 *             rebill_orders.digital_order
 *             rebill_orders.edi
 *             rebill_orders.fraud_score
 *             rebill_orders.gift
 *             rebill_orders.gift_certificate
 *             rebill_orders.internal
 *             rebill_orders.item
 *             rebill_orders.linked_shipment
 *             rebill_orders.marketing
 *             rebill_orders.payment
 *             rebill_orders.payment.transaction
 *             rebill_orders.quote
 *             rebill_orders.salesforce
 *             rebill_orders.shipping
 *             rebill_orders.summary
 *             rebill_orders.taxes
 */
export class GetAutoOrdersByQuery {
    /**
     * Executes the auto order retrieval process
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            const autoOrders = [];

            let iteration = 1;
            let offset = 0;
            const limit = 200;
            let moreRecordsToFetch = true;

            while (moreRecordsToFetch) {
                console.log(`executing iteration ${iteration}`);

                const chunkOfOrders = await this.getAutoOrderChunk(offset, limit);
                autoOrders.push(...chunkOfOrders);
                offset = offset + limit;
                moreRecordsToFetch = chunkOfOrders.length === limit;
                iteration++;
            }

            // Display auto orders
            for (const autoOrder of autoOrders) {
                console.log(autoOrder);
            }

            console.log(`Retrieved ${autoOrders.length} auto orders`);
        } catch (ex) {
            console.error('ApiException occurred on iteration');
            console.error(ex);
            process.exit(1);
        }
    }

    /**
     * Returns a chunk of auto orders based on query parameters
     * @param offset Pagination offset
     * @param limit Maximum number of records to return
     * @returns List of matching auto orders
     */
    static async getAutoOrderChunk(offset, limit) {
        // Expansions for retrieving additional data
        const expand =
            "items,items.future_schedules,original_order,rebill_orders"; // contact us if you're unsure what you need

        /*
         * Supported sorting fields:
         * auto_order_code
         * order_id
         * shipping.company
         * shipping.first_name
         * shipping.last_name
         * shipping.city
         * shipping.state_region
         * shipping.postal_code
         * shipping.country_code
         * billing.phone
         * billing.email
         * billing.cc_email
         * billing.company
         * billing.first_name
         * billing.last_name
         * billing.city
         * billing.state
         * billing.postal_code
         * billing.country_code
         * creation_dts
         * payment.payment_dts
         * checkout.screen_branding_theme_code
         * next_shipment_dts
         */
        const sort = "next_shipment_dts";

        const query = {
            email: "support@ultracart.com"
        };

        const apiResponse = await new Promise((resolve, reject) => {
            autoOrderApi.getAutoOrdersByQuery(
                query, {
                    _limit: limit,
                    _offset: offset,
                    _sort: sort,
                    _expand: expand
                }, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
        });

        return apiResponse.auto_orders ?? [];
    }
}

// Example of how to call the method
// GetAutoOrdersByQuery.execute().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_query** | [**AutoOrderQuery**](AutoOrderQuery.md)| Auto order query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the auto orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result. | [optional] 

### Return type

[**AutoOrdersResponse**](AutoOrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## pauseAutoOrder

> AutoOrderResponse pauseAutoOrder(auto_order_oid, auto_order, opts)

Pause auto order

Completely pause an auto order 


### Example

```javascript
import { autoOrderApi } from '../api.js';

/**
 * This is a convenience method created for an UltraCart merchant to pause a large number of auto orders
 * due to an inventory shortage. This is not new functionality and can be accomplished with the normal updateAutoOrder
 * call. It does the following logic to an auto order:
 * for each item in the auto order:
 *    if the item is not paused, pause it, setPause(true)
 * save the changes by calling updateAutoOrder()
 *
 * Some warnings if you choose to use this method.
 * There are no convenience methods to unpause auto orders.
 * There are no convenience methods to query which auto orders are paused.
 * We do not recommend pausing auto orders and the merchant is on their own to manage auto order state if they
 * choose to begin pausing orders. Keep good track of what you're doing.
 */
export async function execute() {
  // see https://www.ultracart.com/api/#resource_auto_order.html for list
  const expand = "items";

  // get an auto order and update it. There are many ways to retrieve an auto order.
  const autoOrderOid = 123456789;

  const getResponse = await new Promise((resolve, reject) => {
    autoOrderApi.getAutoOrder(autoOrderOid, function (error, data, response) {
      if (error) {
        reject(error);
      } else {
        resolve(data, response);
      }
    });
  });

  const autoOrder = getResponse.auto_order;

  const pauseResponse = await new Promise((resolve, reject) => {
    autoOrderApi.pauseAutoOrder(autoOrderOid, autoOrder, function (error, data, response) {
      if (error) {
        reject(error);
      } else {
        resolve(data, response);
      }
    });
  });

  const pausedAutoOrder = pauseResponse.auto_order;
  console.log(pausedAutoOrder);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to pause. | 
 **auto_order** | [**AutoOrder**](AutoOrder.md)| Auto order to pause | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateAutoOrder

> AutoOrderResponse updateAutoOrder(auto_order_oid, auto_order, opts)

Update an auto order

Update an auto order on the UltraCart account.  To cancel an auto order, set enabled to false and supply either cancel_reason or canceled_by_user, which records the change as a cancellation and fires the auto order cancel notifications.  Setting enabled to false without either field records a disable. 


### Example

```javascript
import {autoOrderApi} from '../api.js';

export class UpdateAutoOrder {
    /*
     *
     * This method allows for updating an auto order.
     * Warning: Take great care editing auto orders.  They are complex.
     * Sometimes you must change the original_order to affect the auto_order.  If you have questions about what fields
     * to update to achieve your desired change, contact UltraCart support.  Better to ask and get it right than to
     * make a bad assumption and corrupt a thousand auto orders.  UltraCart support is ready to assist.
     *
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // Create auto order API instance using API key
            const expand = "items,items.future_schedules,original_order,rebill_orders"; // see https://www.ultracart.com/api/#resource_auto_order.html for list
            const autoOrderOid = 123456789; // get an auto order and update it. There are many ways to retrieve an auto order.
            const apiResponse = await new Promise((resolve, reject) => {
                autoOrderApi.getAutoOrder(autoOrderOid, {_expand: expand}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });
            const autoOrderOrUndefined = apiResponse.auto_order;
            const validateOriginalOrder = "No";

            if (autoOrderOrUndefined !== undefined) {
                const autoOrder = autoOrderOrUndefined;

                // for this example, the customer supplied the wrong postal code when ordering. So to change the postal code for
                // all subsequent auto orders, we change the original order.
                if (autoOrder?.original_order && autoOrder.original_order.billing) {
                    autoOrder.original_order.billing.postal_code = "44233";
                }

                const updateResponse = await new Promise((resolve, reject) => {
                    autoOrderApi.updateAutoOrder(
                        autoOrderOid,
                        autoOrder, {
                            validate_original_order: validateOriginalOrder,
                            _expand: expand
                        }, function (error, data, response) {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(data, response);
                            }
                        });
                });

                const updatedAutoOrder = updateResponse.auto_order;
                console.log(updatedAutoOrder);
            }
        } catch (ex) {
            console.error(`Error: ${ex instanceof Error ? ex.message : 'Unknown error'}`);
            console.error(ex instanceof Error ? ex.stack : ex);
        }
    }
}

// Example of how to call the method
UpdateAutoOrder.execute().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to update. | 
 **auto_order** | [**AutoOrder**](AutoOrder.md)| Auto order to update | 
 **validate_original_order** | **String**| Validate original order before updating | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateAutoOrderItemAddOns

> AutoOrderResponse updateAutoOrderItemAddOns(auto_order_oid, auto_order_item_oid, auto_order_add_ons_update_request, opts)

Update an auto order item add ons

Update an auto order item add ons.  Returns the auto order based upon expansion 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to update. | 
 **auto_order_item_oid** | **Number**| The auto order item oid to update. | 
 **auto_order_add_ons_update_request** | [**AutoOrderAddonItemsUpdateRequest**](AutoOrderAddonItemsUpdateRequest.md)| Auto order add ons update request | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateAutoOrderItemProperties

> AutoOrderResponse updateAutoOrderItemProperties(auto_order_oid, auto_order_item_oid, auto_order_properties_update_request, opts)

Update an auto order item properties

Update an auto order item properties.  Returns the auto order based upon expansion 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to update. | 
 **auto_order_item_oid** | **Number**| The auto order item oid to update. | 
 **auto_order_properties_update_request** | [**AutoOrderPropertiesUpdateRequest**](AutoOrderPropertiesUpdateRequest.md)| Auto order property update request | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateAutoOrderPayment

> AutoOrderRebillResponse updateAutoOrderPayment(auto_order_oid, auto_order_payment_update_request, opts)

Update the payment information on an auto order

Updates the credit card on the original order behind an auto order, along with any rebills sitting in accounts receivable, and reactivates the auto order.  Card data is accepted as hosted field tokens only. raw card numbers and card verification numbers are rejected.  Set attempt_rebill to true to also attempt the rebill immediately, which runs synchronously and may take some time while the gateway is contacted.  A declined card is reported in the response body rather than as an API error. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to update payment information on. | 
 **auto_order_payment_update_request** | [**AutoOrderPaymentUpdateRequest**](AutoOrderPaymentUpdateRequest.md)| Payment information to place on the auto order | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderRebillResponse**](AutoOrderRebillResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateAutoOrderProperties

> AutoOrderResponse updateAutoOrderProperties(auto_order_oid, auto_order_properties_update_request, opts)

Update an auto order properties

Update an auto order properties.  Returns the auto order based upon expansion 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_order_oid** | **Number**| The auto order oid to update. | 
 **auto_order_properties_update_request** | [**AutoOrderPropertiesUpdateRequest**](AutoOrderPropertiesUpdateRequest.md)| Auto order property update request | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AutoOrderResponse**](AutoOrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateAutoOrdersBatch

> AutoOrdersResponse updateAutoOrdersBatch(auto_orders_request, opts)

Update multiple auto orders

Update multiple auto orders on the UltraCart account.  To cancel an auto order, set enabled to false and supply either cancel_reason or canceled_by_user, which records the change as a cancellation and fires the auto order cancel notifications.  Setting enabled to false without either field records a disable. 


### Example

```javascript
import { autoOrderApi } from '../api.js';

export class UpdateAutoOrdersBatch {
    /*
     *
     * This method allows for updating multiple auto orders.
     * Warning: Take great care editing auto orders.  They are complex.
     * Sometimes you must change the original_order to affect the auto_order.  If you have questions about what fields
     * to update to achieve your desired change, contact UltraCart support.  Better to ask and get it right than to
     * make a bad assumption and corrupt a thousand auto orders.  UltraCart support is ready to assist.
     *
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // Create auto order API instance using API key

            // The _async parameter is what it seems.  True if async.
            // The max records allowed depends on the async flag.  Synch max is 20, Asynch max is 100.

            const async = true; // if true, success returns back a 204 No Content. False returns back the updated orders.
            const expand = undefined; // since we're async, nothing is returned, so we don't care about expansions.
            // If you are doing a synchronous operation, then set your expand appropriately. set getAutoOrders()
            // sample for expansion samples.
            const placeholders = false; // mostly used for UI, not needed for a pure scripting operation.

            const autoOrders = []; // TODO: This should be a list of auto orders that have been updated. See any getAutoOrders method for retrieval.
            const autoOrdersRequest = {
                autoOrders
            };

            const apiResponse = await new Promise((resolve, reject) => {
                autoOrderApi.updateAutoOrdersBatch(
                    autoOrdersRequest, {_expand: expand, _placeholders: placeholders, _async: async },
                    function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data, response);
                        }
                    }
                );
            });

            if (apiResponse) {
                // something went wrong if we have a response.
                console.log(apiResponse);
            }
        } catch (ex) {
            console.error(`Error: ${ex instanceof Error ? ex.message : 'Unknown error'}`);
            console.error(ex instanceof Error ? ex.stack : ex);
        }
    }
}

// Example of how to call the method
// UpdateAutoOrdersBatch.execute().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auto_orders_request** | [**AutoOrdersRequest**](AutoOrdersRequest.md)| Auto orders to update (synchronous maximum 20 / asynchronous maximum 100) | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 
 **_async** | **Boolean**| True if the operation should be run async.  No result returned | [optional] 

### Return type

[**AutoOrdersResponse**](AutoOrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

