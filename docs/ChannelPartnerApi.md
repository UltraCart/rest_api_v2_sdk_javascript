# UltraCartRestApiV2.ChannelPartnerApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrderByChannelPartnerOrderId**](ChannelPartnerApi.md#cancelOrderByChannelPartnerOrderId) | **DELETE** /channel_partner/cancel/by_channel_partner_order_id/{order_id} | Cancel channel partner order by channel partner order id
[**cancelOrderByUltraCartOrderId**](ChannelPartnerApi.md#cancelOrderByUltraCartOrderId) | **DELETE** /channel_partner/cancel/by_ultracart_order_id/{order_id} | Cancel channel partner order by UltraCart order id
[**deleteChannelPartnerShipToPreference**](ChannelPartnerApi.md#deleteChannelPartnerShipToPreference) | **DELETE** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid} | Delete a ship to preference record for the channel partner.
[**estimateShippingForChannelPartnerOrder**](ChannelPartnerApi.md#estimateShippingForChannelPartnerOrder) | **POST** /channel_partner/estimate_shipping | Estimate shipping for channel partner order
[**estimateTaxForChannelPartnerOrder**](ChannelPartnerApi.md#estimateTaxForChannelPartnerOrder) | **POST** /channel_partner/estimate_tax | Estimate tax for channel partner order
[**getChannelPartnerOrder**](ChannelPartnerApi.md#getChannelPartnerOrder) | **GET** /channel_partner/orders/{order_id} | Retrieve a channel partner order
[**getChannelPartnerOrderByChannelPartnerOrderId**](ChannelPartnerApi.md#getChannelPartnerOrderByChannelPartnerOrderId) | **GET** /channel_partner/orders/by_channel_partner_order_id/{order_id} | Retrieve a channel partner order by the channel partner order id
[**getChannelPartnerReasonCodes**](ChannelPartnerApi.md#getChannelPartnerReasonCodes) | **GET** /channel_partner/channel_partners/{channel_partner_oid}/reason_codes | Retrieve reject and refund reason codes.
[**getChannelPartnerShipToPreference**](ChannelPartnerApi.md#getChannelPartnerShipToPreference) | **GET** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid} | Retrieve the ship to preference associated with the channel partner and the specific id.
[**getChannelPartnerShipToPreferences**](ChannelPartnerApi.md#getChannelPartnerShipToPreferences) | **GET** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences | Retrieve the ship to preferences associated with the channel partner.
[**getChannelPartners**](ChannelPartnerApi.md#getChannelPartners) | **GET** /channel_partner/channel_partners | Retrieve the channel partners configured on the account.
[**importChannelPartnerOrder**](ChannelPartnerApi.md#importChannelPartnerOrder) | **POST** /channel_partner/import | Insert channel partner order
[**insertChannelPartnerShipToPreference**](ChannelPartnerApi.md#insertChannelPartnerShipToPreference) | **POST** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences | Insert a ship to preference record for the channel partner.
[**refundChannelPartnerOrder**](ChannelPartnerApi.md#refundChannelPartnerOrder) | **PUT** /channel_partner/orders/{order_id}/refund | Refund a channel partner order
[**updateChannelPartnerShipToPreference**](ChannelPartnerApi.md#updateChannelPartnerShipToPreference) | **PUT** /channel_partner/channel_partners/{channel_partner_oid}/ship_to_preferences/{channel_partner_ship_to_preference_oid} | Update a ship to preference record for the channel partner.



## cancelOrderByChannelPartnerOrderId

> ChannelPartnerCancelResponse cancelOrderByChannelPartnerOrderId(order_id)

Cancel channel partner order by channel partner order id

Cancel channel partner order by channel partner order id 


### Example

```javascript
import { channelPartnerApi } from '../api.js';

export class CancelOrderByChannelPartnerOrderId {
    /*
    cancelOrderByChannelPartnerOrderId takes a channel partner order id, which is the external order id, and attempts
    to 'cancel' the order.  UltraCart doesn't have a cancel order state, so this needs some explanation of what happens.

    Here is the logic of the cancel process:
    If the Order stage is [this] then do [that]:
        'Completed Order'       -> Error: "Order has already been completed."
        'Rejected'              -> Error: "Order has already been rejected."
        'Accounts Receivable'   -> Success: order is rejected.
        'Preordered'            -> Success: order is rejected.
        'Quote Sent'            -> Success: order is rejected.
        'Quote Requested'       -> Success: order is rejected.

    The remaining stages are Fraud Review and Shipping Department.  Orders in these stages have already completed payment.
    From this point, complex logic determines if the order has already shipped, or is queued to ship in a way that cannot be canceled.
    Here is the logic for those stages, but the gist of it all is this:  If you receive any of the errors below, the order has progressed past a point where it can be canceled.
    SHIPPING LOGIC:
    Iterate through each item and consider its shipping status:
        Item has already been transmitted to fulfillment center (contains a transmitted dts) -> Error: "The order has already had an item that has been transmitted to the distribution center."
        Does item DC (distribution center) have a transmission mechanism configured?
            YES -> Does the transmission have schedules? If NO -> Error: "The distribution center does not have any schedules so it would be an immediate transmission."
            NO -> Error: "Can't tell if we can cancel because the DC doesn't have a transport configured."

    If the above logic completes without errors, the following conditions must be met:
    Order has DC activity records.  If NO -> Error: "There is no activity in the DC queue when there should be."
    There must be at least 5 minutes before the next DC transmission. If NO -> Error: "Activity record is not at least 5 minutes away so we need to bail."

    At this point, the order will be canceled with the following activity:
    1) Distribution Center activity is cleared
    2) The order is refunded.  If the order is less than 24 hours old, a void is attempted instead.

    Other Possible Errors:
    System errors -> "Internal error.  Please contact UltraCart Support."
    Order does not exist -> "Invalid order ID specified."
    During refunding, original transaction could not be found -> "Unable to find original transaction on the order."
    During refunding, original transaction was found, but transaction id could not be found -> "Unable to locate original transaction reference number."
    During refunding, PayPal was used but no longer configured -> "PayPal is no longer configured on your account to refund against."
    Gateway does not support refunds -> [GatewayName] does not support refunds at this time.
    */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // Channel partner order ID to cancel
            const channelPartnerOrderId = "BLAH-BLAH-123";

            // Attempt to cancel the order using a Promise wrapper
            const cancelResult = await new Promise((resolve, reject) => {
                channelPartnerApi.cancelOrderByChannelPartnerOrderId(
                    channelPartnerOrderId,
                    function (error, data) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    }
                );
            });

            // Check if cancellation was not successful
            if (!cancelResult.success) {
                cancelResult.cancel_errors?.forEach((error) => {
                    console.log(error);
                });
            }
        } catch (ex) {
            console.error(ex);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The channel partner order id to delete. | 

### Return type

[**ChannelPartnerCancelResponse**](ChannelPartnerCancelResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cancelOrderByUltraCartOrderId

> ChannelPartnerCancelResponse cancelOrderByUltraCartOrderId(order_id)

Cancel channel partner order by UltraCart order id

Cancel channel partner order by UltraCart order id 


### Example

```javascript
import { channelPartnerApi } from '../api.js';

/**
 * cancelOrderByUltraCartOrderId takes an UltraCart order id and attempts to 'cancel' the order.
 * UltraCart doesn't have a cancel order state, so this needs some explanation of what happens.
 *
 * Here is the logic of the cancel process:
 * If the Order stage is [this] then do [that]:
 *     'Completed Order'       -> Error: "Order has already been completed."
 *     'Rejected'              -> Error: "Order has already been rejected."
 *     'Accounts Receivable'   -> Success: order is rejected.
 *     'Preordered'            -> Success: order is rejected.
 *     'Quote Sent'            -> Success: order is rejected.
 *     'Quote Requested'       -> Success: order is rejected.
 *
 * The remaining stages are Fraud Review and Shipping Department.  Orders in these stages have already completed payment.
 * From this point, complex logic determines if the order has already shipped, or is queued to ship in a way that cannot be canceled.
 * Here is the logic for those stages, but the gist of it all is this:  If you receive any of the errors below, the order has progressed past a point where it can be canceled.
 * SHIPPING LOGIC:
 * Iterate through each item and consider its shipping status:
 *     Item has already been transmitted to fulfillment center (contains a transmitted dts) -> Error: "The order has already had an item that has been transmitted to the distribution center."
 *     Does item DC (distribution center) have a transmission mechanism configured?
 *         YES -> Does the transmission have schedules? If NO -> Error: "The distribution center does not have any schedules so it would be an immediate transmission."
 *         NO -> Error: "Can't tell if we can cancel because the DC doesn't have a transport configured."
 *
 * If the above logic completes without errors, the following conditions must be met:
 * Order has DC activity records.  If NO -> Error: "There is no activity in the DC queue when there should be."
 * There must be at least 5 minutes before the next DC transmission. If NO -> Error: "Activity record is not at least 5 minutes away so we need to bail."
 *
 * At this point, the order will be canceled with the following activity:
 * 1) Distribution Center activity is cleared
 * 2) The order is refunded.  If the order is less than 24 hours old, a void is attempted instead.
 *
 * Other Possible Errors:
 * System errors -> "Internal error.  Please contact UltraCart Support."
 * Order does not exist -> "Invalid order ID specified."
 * During refunding, original transaction could not be found -> "Unable to find original transaction on the order."
 * During refunding, original transaction was found, but transaction id could not be found -> "Unable to locate original transaction reference number."
 * During refunding, PayPal was used but no longer configured -> "PayPal is no longer configured on your account to refund against."
 * Gateway does not support refunds -> [GatewayName] does not support refunds at this time.
 */
export class CancelOrderByUltraCartOrderId {
    /**
     * Execute method to cancel an order by its UltraCart order ID
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // UltraCart order ID to cancel
            const ultracartOrderId = "DEMO-12345678980";

            // Attempt to cancel the order using a Promise wrapper
            const cancelResult = await new Promise((resolve, reject) => {
                channelPartnerApi.cancelOrderByUltraCartOrderId(
                    ultracartOrderId,
                    function (error, data) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    }
                );
            });

            // Check if cancellation was unsuccessful
            if (!cancelResult.success) {
                cancelResult.cancel_errors?.forEach(error => {
                    console.log(error);
                });
            }
        } catch (ex) {
            // Log any exceptions that occur during the process
            console.error(ex);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The UltraCart order id to delete. | 

### Return type

[**ChannelPartnerCancelResponse**](ChannelPartnerCancelResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteChannelPartnerShipToPreference

> deleteChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid)

Delete a ship to preference record for the channel partner.

Delete a ship to preference record for the channel partner. 


### Example

```javascript
import {channelPartnerApi} from '../api.js';

/**
 * Deletes a ChannelPartnerShiptoPreference. These preferences are used by EDI channel partners to automatically
 * apply return policies and add additional free items to EDI orders based on the EDI code that is present.
 *
 * Success will return a status code 204 (No content)
 *
 * Possible Errors:
 * Attempting to interact with a channel partner other than the one tied to your API Key:
 *    "Invalid channel_partner_oid specified.  Your REST API key may only interact with channel_partner_oid: 12345"
 * Supply a bad preference oid: "Invalid channel_partner_ship_to_preference_oid specified."
 */
export class DeleteChannelPartnerShipToPreference {
    /**
     * Execute method to delete a channel partner ship to preference
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // Channel partner ship to preference OID to delete (usually obtained from getChannelPartnerShipToPreferences())
            const channelPartnerShiptoPreferenceOid = 67890;
            const channelPartnerOid = 12345;

            // Delete the channel partner ship to preference using a Promise wrapper
            await new Promise((resolve, reject) => {
                channelPartnerApi.deleteChannelPartnerShipToPreference(
                    channelPartnerOid, channelPartnerShipToPreferenceOid,
                    function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data, response);
                        }
                    }
                );
            });

            console.log("Channel partner ship to preference deleted successfully");
        } catch (ex) {
            // Log the error details
            if (ex instanceof Error) {
                console.error(`Error: ${ex.message}`);
                console.error(ex.stack);
            } else {
                console.error("An unknown error occurred");
            }
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_oid** | **Number**|  | 
 **channel_partner_ship_to_preference_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## estimateShippingForChannelPartnerOrder

> ChannelPartnerEstimateShippingResponse estimateShippingForChannelPartnerOrder(channel_partner_order)

Estimate shipping for channel partner order

Estimate shipping for order from a channel partner. 


### Example

```javascript
import { channelPartnerApi } from '../api.js';

/**
 * This is a helper function for call centers to calculate the shipping cost on an order. In a typical flow, the call center
 * will collect all the shipping information and items being purchased into a ChannelPartnerOrder object.
 * They will then call this method, passing in the order object. The response will contain the shipping estimates
 * that the call center can present to the customer. Once the customer selects a particular estimate,
 * they can then plug that cost into their call center application and complete the order.
 *
 * Possible Errors:
 * Using an API key that is not tied to a channel partner: "This API Key does not have permission to interact with channel partner orders. Please review your Channel Partner configuration."
 * Order has invalid channel partner code: "Invalid channel partner code"
 * Order has no items: "null order.items passed." or "order.items array contains a null entry."
 * Order has no channel partner order id: "order.channelPartnerOrderId must be specified."
 * Order channel partner order id is a duplicate: "order.channelPartnerOrderId [XYZ] already used."
 * Channel Partner is inactive: "partner is inactive."
 */
export class EstimateShippingForChannelPartnerOrder {
    /**
     * Execute method to estimate shipping for a channel partner order
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // Prepare the channel partner order
            const order = {
                channel_partner_order_id: "widget-1245-abc-1",
                coupons: ["10OFF"],
                // Uncomment and modify as needed
                // deliveryDate: DateTime.now().plus({ days: 14 }).toISO(),
                items: [
                    {
                        // Commented out properties preserved from original code
                        // arbitraryUnitCost: 9.99,
                        // autoOrderLastRebillDts: DateTime.now().minus({ days: 30 }).toISO(),
                        // autoOrderSchedule: "Weekly",
                        merchant_item_id: "shirt",
                        options: [
                            {
                                name: "Size",
                                value: "Small"
                            },
                            {
                                name: "Color",
                                value: "Orange"
                            }
                        ],
                        quantity: 1,
                        upsell: false,
                    }
                ],
                // Uncomment and modify as needed
                // shipOnDate: DateTime.now().plus({ days: 7 }).toISO(),
                ship_to_residential: true,
                shipto_address1: "55 Main Street",
                shipto_address2: "Suite 202",
                shipto_city: "Duluth",
                shipto_company: "Widgets Inc",
                shipto_country_code: "US",
                shipto_day_phone: "6785552323",
                shipto_evening_phone: "7703334444",
                shipto_first_name: "Sally",
                shipto_last_name: "McGonkyDee",
                shipto_postal_code: "30097",
                shipto_state_region: "GA",
                shipto_title: "Director"
            };

            // Estimate shipping for the order using a Promise wrapper
            const apiResponse = await new Promise((resolve, reject) => {
                channelPartnerApi.estimateShippingForChannelPartnerOrder(
                    order,
                    function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data, response);
                        }
                    }
                );
            });

            const estimates = apiResponse.estimates;

            // TODO: Apply one estimate shipping method (name) and cost to your channel partner order.

            if (estimates !== undefined) {
                // Display shipping estimates
                estimates.forEach(estimate => {
                    console.log(estimate);
                });

                console.log(`Retrieved ${estimates.length} shipping estimates`);
            }
        } catch (ex) {
            // Log the error details
            if (ex instanceof Error) {
                console.error(`Error: ${ex.message}`);
                console.error(ex.stack);
            } else {
                console.error("An unknown error occurred");
            }
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_order** | [**ChannelPartnerOrder**](ChannelPartnerOrder.md)| Order needing shipping estimate | 

### Return type

[**ChannelPartnerEstimateShippingResponse**](ChannelPartnerEstimateShippingResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## estimateTaxForChannelPartnerOrder

> ChannelPartnerEstimateTaxResponse estimateTaxForChannelPartnerOrder(channel_partner_order)

Estimate tax for channel partner order

Estimate tax for order from a channel partner. 


### Example

```javascript
import { channelPartnerApi } from '../api.js';

/**
 * This is a helper function for call centers to calculate the shipping cost on an order.  In a typical flow, the call center
 * will collect all the shipping information and items being purchased into a ChannelPartnerOrder object.
 * They will then call this method, passing in the order object.  The response will contain the shipping estimates
 * that the call center can present to the customer.  Once the customer selects a particulate estimate,
 * they can then plug that cost into their call center application and complete the order.
 *
 * Possible Errors:
 * Using an API key that is not tied to a channel partner: "This API Key does not have permission to interact with channel partner orders.  Please review your Channel Partner configuration."
 * Order has invalid channel partner code: "Invalid channel partner code"
 * Order has no items: "null order.items passed." or "order.items array contains a null entry."
 * Order has no channel partner order id: "order.channelPartnerOrderId must be specified."
 * Order channel partner order id is a duplicate:  "order.channelPartnerOrderId [XYZ] already used."
 * Channel Partner is inactive: "partner is inactive."
 */
export class EstimateTaxForChannelPartnerOrder {
    /**
     * Execute method to estimate shipping for a channel partner order
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // Prepare the channel partner order
            const order = {
                channel_partner_order_id: "widget-1245-abc-1",
                coupons: ["10OFF"],
                // Uncomment and modify as needed
                // deliveryDate: DateTime.now().plus({ days: 14 }).toISO(),
                items: [
                    {
                        // Commented out properties preserved from original code
                        // arbitraryUnitCost: 9.99,
                        // autoOrderLastRebillDts: DateTime.now().minus({ days: 30 }).toISO(),
                        // autoOrderSchedule: "Weekly",
                        merchant_item_id: "shirt",
                        options: [
                            {
                                name: "Size",
                                value: "Small"
                            },
                            {
                                name: "Color",
                                value: "Orange"
                            }
                        ],
                        quantity: 1,
                        upsell: false,
                    }
                ],
                // Uncomment and modify as needed
                // shipOnDate: DateTime.now().plus({ days: 7 }).toISO(),
                ship_to_residential: true,
                shipto_address1: "55 Main Street",
                shipto_address2: "Suite 202",
                shipto_city: "Duluth",
                shipto_company: "Widgets Inc",
                shipto_country_code: "US",
                shipto_day_phone: "6785552323",
                shipto_evening_phone: "7703334444",
                shipto_first_name: "Sally",
                shipto_last_name: "McGonkyDee",
                shipto_postal_code: "30097",
                shipto_state_region: "GA",
                shipto_title: "Director"
            };

            // Estimate shipping for the order
            const apiResponse = await new Promise((resolve, reject) => {
                channelPartnerApi.estimateTaxForChannelPartnerOrder(
                    order,
                    function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    }
                );
            });

            const tax = apiResponse.arbitrary_tax;
            console.log(`Retrieved tax of ${tax}`);

        } catch (ex) {
            // Log details of the error
            if (ex instanceof Error) {
                console.error(`Error: ${ex.message}`);
                console.error(ex.stack);
            } else {
                console.error("An unknown error occurred");
            }
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_order** | [**ChannelPartnerOrder**](ChannelPartnerOrder.md)| Order needing tax estimate | 

### Return type

[**ChannelPartnerEstimateTaxResponse**](ChannelPartnerEstimateTaxResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## getChannelPartnerOrder

> OrderResponse getChannelPartnerOrder(order_id, opts)

Retrieve a channel partner order

Retrieves a single order using the specified order id.  Only orders belonging to this channel partner may be retrieved. 


### Example

```javascript
import {channelPartnerApi} from '../api.js';

/**
 * ChannelPartnerApi.getChannelPartnerOrder() retrieves a single order for a given order_id.  It is identical to the
 * OrderApi.getOrder() call, but allows for a restricted permission set.  The channel partner api assumes
 * a tie to a Channel Partner and only allows retrieval of orders created by that Channel Partner.
 *
 * Possible Order Expansions:
 * - affiliate           - affiliate.ledger                    - auto_order
 * - billing             - channel_partner                     - checkout
 * - coupon              - customer_profile                    - digital_order
 * - edi                 - fraud_score                         - gift
 * - gift_certificate    - internal                            - item
 * - linked_shipment     - marketing                           - payment
 * - payment.transaction - quote                               - salesforce
 * - shipping            - shipping.tracking_number_details    - summary
 * - taxes
 */
export class GetChannelPartnerOrder {
    /**
     * Execute method to retrieve a channel partner order
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // The expansion variable instructs UltraCart how much information to return.
            // The order object is large and while it's easily manageable for a single order,
            // when querying thousands of orders, is useful to reduce payload size.
            // A channel partner will almost always query an order for the purpose of turning
            // around and submitting it to a refund call.
            const expand = "item,summary,shipping";

            // This order MUST be an order associated with this channel partner or you will receive a 400 Bad Request.
            const orderId = "DEMO-0009110366";

            // Retrieve the channel partner order
            const apiResponse = await new Promise((resolve, reject) => {
                channelPartnerApi.getChannelPartnerOrder(
                    orderId, {_expand: expand},
                    function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    }
                );
            });

            // Check for any errors in the API response
            if (apiResponse.error) {
                console.error(apiResponse.error.developer_message);
                console.error(apiResponse.error.user_message);
                process.exit(1);
            }

            // Extract and log the order
            const order = apiResponse.order;
            console.log(order);

        } catch (ex) {
            // Log details of the error
            if (ex instanceof Error) {
                console.error(`Error: ${ex.message}`);
                console.error(ex.stack);
            } else {
                console.error("An unknown error occurred");
            }
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See OrderApi.getOrder documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelPartnerOrderByChannelPartnerOrderId

> OrderResponse getChannelPartnerOrderByChannelPartnerOrderId(order_id, opts)

Retrieve a channel partner order by the channel partner order id

Retrieves a single order using the channel partner order id, not the ultracart order id.  Only orders belonging to this channel partner may be retrieved. 


### Example

```javascript
import { channelPartnerApi } from '../api.js';

/**
 * ChannelPartnerApi.getChannelPartnerOrderByChannelPartnerOrderId() retrieves a single order for a given
 * channel partner order_id.  This might be useful for call centers which only have their order ids and not UltraCart's.
 * It is identical to the OrderApi.getOrder() call in functionality and result,
 * but allows for a restricted permission set.  The channel partner api assumes a tie to a Channel Partner and
 * only allows retrieval of orders created by that Channel Partner.
 *
 * Possible Order Expansions:
 * - affiliate           - affiliate.ledger                    - auto_order
 * - billing             - channel_partner                     - checkout
 * - coupon              - customer_profile                    - digital_order
 * - edi                 - fraud_score                         - gift
 * - gift_certificate    - internal                            - item
 * - linked_shipment     - marketing                           - payment
 * - payment.transaction - quote                               - salesforce
 * - shipping            - shipping.tracking_number_details    - summary
 * - taxes
 */
export class GetChannelPartnerOrderByChannelPartnerOrderId {
    /**
     * Execute method to retrieve a channel partner order by its channel partner order ID
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // The expansion variable instructs UltraCart how much information to return.
            // The order object is large and while it's easily manageable for a single order,
            // when querying thousands of orders, is useful to reduce payload size.
            // A channel partner will almost always query an order for the purpose of turning
            // around and submitting it to a refund call.
            const expand = "item,summary,shipping";

            // This order MUST be an order associated with this channel partner or you will receive a 400 Bad Request.
            const channelPartnerOrderId = "MY-CALL-CENTER-BLAH-BLAH";

            // Retrieve the channel partner order
            const apiResponse = await new Promise((resolve, reject) => {
                channelPartnerApi.getChannelPartnerOrderByChannelPartnerOrderId(
                    channelPartnerOrderId, {_expand: expand },
                    function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    }
                );
            });

            // Check for any errors in the API response
            if (apiResponse.error) {
                console.error(apiResponse.error.developer_message);
                console.error(apiResponse.error.user_message);
                process.exit(1);
            }

            // Extract and log the order
            const order = apiResponse.order;
            console.log(order);

        } catch (ex) {
            // Log details of the error
            if (ex instanceof Error) {
                console.error(`Error: ${ex.message}`);
                console.error(ex.stack);
            } else {
                console.error("An unknown error occurred");
            }
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The channel partner order id to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See OrderApi.getOrder documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelPartnerReasonCodes

> ChanelPartnerReasonCodesResponse getChannelPartnerReasonCodes(channel_partner_oid)

Retrieve reject and refund reason codes.

Retrieve reject and refund reason codes. 


### Example

```javascript
import { channelPartnerApi } from '../api.js';

/**
 * Retrieves a list of all channel partners reject and reason codes the merchant may have configured.
 */
export class GetChannelPartnerReasonCodes {
    /**
     * Execute method to retrieve channel partner refund and reject reason codes
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // Retrieve channel partners
            const apiResponse = await new Promise((resolve, reject) => {
                channelPartnerApi.getChannelPartnerReasonCodes(18413, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            // Check for any errors in the API response
            if (apiResponse.error) {
                console.error(apiResponse.error.developer_message);
                console.error(apiResponse.error.user_message);
                process.exit(1);
            }

            console.log(apiResponse);

        } catch (ex) {
            // Log details of the error
            if (ex instanceof Error) {
                console.error(`Error: ${ex.message}`);
                console.error(ex.stack);
            } else {
                console.error("An unknown error occurred");
            }
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_oid** | **Number**|  | 

### Return type

[**ChanelPartnerReasonCodesResponse**](ChanelPartnerReasonCodesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelPartnerShipToPreference

> ChannelPartnerShipToPreferenceResponse getChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid)

Retrieve the ship to preference associated with the channel partner and the specific id.

Retrieve the ship to preference associated with the channel partner and the specific id. 


### Example

```javascript
import { channelPartnerApi } from '../api.js';

/**
 * Retrieves a shipto preference for a channel partner.
 * These preferences are used by EDI channel partners to automatically
 * apply return policies and add additional free items to EDI orders based on the EDI code that is present.
 *
 * Possible Errors:
 * Attempting to interact with a channel partner other than the one tied to your API Key:
 *    "Invalid channel_partner_oid specified.  Your REST API key may only interact with channel_partner_oid: 12345"
 * Supplying a bad channel partner oid: "Invalid channel_partner_oid specified."
 * Supplying a bad channel partner shipto preference oid: "Invalid channel_partner_ship_to_preference_oid specified."
 */
export async function execute() {
    console.log(`--- ${execute.name} ---`);

    try {
        // Channel partner OID and shipto preference OID
        const channelPartnerOid = 12345;
        const channelPartnerShiptoPreferenceOid = 67890;

        // Retrieve channel partner shipto preference
        const apiResponse = await new Promise((resolve, reject) => {
            channelPartnerApi.getChannelPartnerShipToPreference(
                channelPartnerOid,
                channelPartnerShipToPreferenceOid
            , function (error, data) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });

        // Check for errors in the API response
        if (apiResponse.error) {
            const error = apiResponse.error;
            console.error(error.developer_message);
            console.error(error.user_message);
            process.exit(1);
        }

        // Extract and log the preference
        const preference = apiResponse.ship_to_preference;
        console.log(preference);

    } catch (ex) {
        // Handle any unexpected errors
        const error = ex instanceof Error ? ex : new Error('Unknown error');
        console.error(`Error: ${error.message}`);
        console.error(error.stack);
    }
}

// Optional: If you want to run this directly
if (require.main === module) {
    execute().catch(console.error);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_oid** | **Number**|  | 
 **channel_partner_ship_to_preference_oid** | **Number**|  | 

### Return type

[**ChannelPartnerShipToPreferenceResponse**](ChannelPartnerShipToPreferenceResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelPartnerShipToPreferences

> ChannelPartnerShipToPreferencesResponse getChannelPartnerShipToPreferences(channel_partner_oid)

Retrieve the ship to preferences associated with the channel partner.

Retrieve the ship to preferences associated with the channel partner. 


### Example

```javascript
import {channelPartnerApi} from '../api.js';

/**
 * Retrieves all shipto preferences for a channel partner.
 * These preferences are used by EDI channel partners to automatically
 * apply return policies and add additional free items to EDI orders based on the EDI code that is present.
 *
 * Possible Errors:
 * Attempting to interact with a channel partner other than the one tied to your API Key:
 *    "Invalid channel_partner_oid specified.  Your REST API key may only interact with channel_partner_oid: 12345"
 * Supplying a bad channel partner oid: "Invalid channel_partner_oid specified."
 */
export async function execute() {
    console.log(`--- ${execute.name} ---`);

    try {
        // Channel partner OID
        const channelPartnerOid = 12345;

        // Retrieve channel partner shipto preferences
        const apiResponse = await new Promise((resolve, reject) => {
            channelPartnerApi.getChannelPartnerShipToPreferences(channelPartnerOid, function (error, data) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });

        // Check for errors in the API response
        if (apiResponse.error) {
            const error = apiResponse.error;
            console.error(error.developer_message);
            console.error(error.user_message);
            process.exit(1);
        }

        // Extract preferences
        const preferences = apiResponse.shipToPreferences;

        // Safely iterate and log preferences
        if (preferences) {
            preferences.forEach(preference => {
                console.log(preference);
            });

            console.log(`Retrieved ${preferences.length} ship to preferences`);
        } else {
            console.log('No ship to preferences found');
        }
    } catch (ex) {
        // Handle any unexpected errors
        const error = ex instanceof Error ? ex : new Error('Unknown error');
        console.error(`Error: ${error.message}`);
        console.error(error.stack);
    }
}

// Optional: If you want to run this directly
if (require.main === module) {
    execute().catch(console.error);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_oid** | **Number**|  | 

### Return type

[**ChannelPartnerShipToPreferencesResponse**](ChannelPartnerShipToPreferencesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChannelPartners

> ChannelPartnersResponse getChannelPartners()

Retrieve the channel partners configured on the account.

Retrieve the channel partners configured on the account. 


### Example

```javascript
import { channelPartnerApi } from '../api.js';

/**
 * Retrieves a list of all channel partners configured for this merchant.
 * If the API KEY used is tied to a specific Channel Partner, then the results
 * will contain only that Channel Partner.
 */
export class GetChannelPartners {
    /**
     * Execute method to retrieve channel partners
     */
    static async execute() {
        console.log(`--- ${this.name} ---`);

        try {
            // Retrieve channel partners
            const apiResponse = await new Promise((resolve, reject) => {
                channelPartnerApi.getChannelPartners(function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            // Check for any errors in the API response
            if (apiResponse.error) {
                console.error(apiResponse.error.developer_message);
                console.error(apiResponse.error.user_message);
                process.exit(1);
            }

            // Extract channel partners
            const channelPartners = apiResponse.channelPartners || [];

            // Log each channel partner
            channelPartners.forEach(channelPartner => {
                console.log(channelPartner);
            });

            // Log total number of channel partners
            console.log(`Retrieved ${channelPartners.length} channel partners`);

        } catch (ex) {
            // Log details of the error
            if (ex instanceof Error) {
                console.error(`Error: ${ex.message}`);
                console.error(ex.stack);
            } else {
                console.error("An unknown error occurred");
            }
        }
    }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**ChannelPartnersResponse**](ChannelPartnersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importChannelPartnerOrder

> ChannelPartnerImportResponse importChannelPartnerOrder(channel_partner_order)

Insert channel partner order

Insert order from a channel partner. 


### Example

```javascript
import { DateTime } from 'luxon';
import { channelPartnerApi } from '../api.js';

/**
 * Imports channel partner orders into UltraCart
 *
 * To run channel partner examples, you will need:
 * 1) An API Key: https://secure.ultracart.com/merchant/configuration/apiManagementApp.do
 * 2) That API Key must be assigned to a channel partner: https://secure.ultracart.com/merchant/configuration/customChannelPartnerListLoad.do
 *
 * The spreadsheet import docs will serve you well here. They describe many fields
 * https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377246/Channel+Partner+API+-+Spreadsheet+Import
 */
export async function execute() {
    console.log(`--- ${execute.name} ---`);

    try {
        // ---------------------------------------------
        // Example 1 - Order needs payment processing
        // ---------------------------------------------
        const order = {
            associate_with_customer_profile_if_present: true,
            auto_approve_purchase_order: true,
            billto_address1: "11460 Johns Creek Parkway",
            billto_address2: "Suite 101",
            billto_city: "Duluth",
            billto_company: "Widgets Inc",
            billto_country_code: "US",
            billto_day_phone: "6784153823",
            billto_evening_phone: "6784154019",
            billto_first_name: "John",
            billto_last_name: "Smith",
            billto_postal_code: "30097",
            billto_state_region: "GA",
            billto_title: "Sir",
            cc_email: "orders@widgets.com",
            channel_partner_order_id: "widget-1245-abc",
            consider_recurring: false,
            coupons: ["10OFF", "BUY1GET1"],
            credit_card_expiration_month: 5,
            credit_card_expiration_year: 2032,
            credit_card_type: "VISA",
            custom_field1: "Whatever",
            custom_field2: "You",
            custom_field3: "Want",
            custom_field4: "Can",
            custom_field5: "Go",
            custom_field6: "In",
            custom_field7: "CustomFields",
            delivery_date: DateTime.now().toISO(),
            email: "ceo@widgets.com",
            gift: false,
            gift_email: "sally@aol.com",
            gift_message: "Congratulations on your promotion!",
            hosted_fields_card_token: "7C97B0AAA26AB10180B4B29F00380101",
            hosted_fields_cvv_token: "C684AB4336787F0180B4B51971380101",
            ip_address: "34.125.95.217",
            least_cost_route: true,
            least_cost_route_shipping_methods: ["FedEx: Ground", "UPS: Ground", "USPS: Priority"],
            mailing_list_opt_in: true,
            no_realtime_payment_processing: false,
            payment_method: "CreditCard",
            rotating_transaction_gateway_code: "MyStripe",
            screen_branding_theme_code: "SF1986",
            ship_on_date: DateTime.now().toISO(),
            ship_to_residential: true,
            shipto_address1: "55 Main Street",
            shipto_address2: "Suite 202",
            shipto_city: "Duluth",
            shipto_company: "Widgets Inc",
            shipto_country_code: "US",
            shipto_day_phone: "6785552323",
            shipto_evening_phone: "7703334444",
            shipto_first_name: "Sally",
            shipto_last_name: "McGonkyDee",
            shipto_postal_code: "30097",
            shipto_state_region: "GA",
            shipto_title: "Director",
            skip_payment_processing: false,
            special_instructions: "Please wrap this in bubble wrap because my FedEx delivery guy is abusive to packages",
            store_completed: false,
            storefront_host_name: "store.mysite.com",
            store_if_payment_declines: false,
            tax_county: "Gwinnett",
            tax_exempt: false,
            treat_warnings_as_errors: true,

            // Items
            items: [{
                merchant_item_id: "shirt",
                quantity: 1,
                upsell: false,
                options: [
                    { name: "Size", value: "Small" },
                    { name: "Color", value: "Orange" }
                ]
            }],

            // Transaction
            transaction: {
                successful: false,
                details: []
            }
        };

        // Import the first order
        const apiResponse = await new Promise((resolve, reject) => {
            channelPartnerApi.importChannelPartnerOrder(order, (error, data, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        // ---------------------------------------------
        // Example 2 - Order already processed
        // ---------------------------------------------
        const processedOrder = {
            ...order,
            no_realtime_payment_processing: true,
            skip_payment_processing: true,
            store_completed: true,
            shipping_method: "FedEx: Ground",
            transaction: {
                successful: true,
                details: [
                    { name: "AVS Code", value: "X" },
                    { name: "Authorization Code", value: "123456" },
                    { name: "CVV Code", value: "M" },
                    { name: "Response Code", value: "Authorized" },
                    { name: "Reason Code", value: "1" },
                    { name: "Response Subcode", value: "1" },
                    { name: "Transaction ID", value: "1234567890" }
                ]
            }
        };

        // Import the processed order
        const processedApiResponse = await new Promise((resolve, reject) => {
            channelPartnerApi.importChannelPartnerOrder(processedOrder, (error, data, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        console.log("Orders imported successfully");
    } catch (ex) {
        console.error(`Error: ${ex instanceof Error ? ex.message : 'Unknown error'}`);
        console.error(ex instanceof Error ? ex.stack : ex);
    }
}

// Optional: If you want to run this directly
if (require.main === module) {
    execute().catch(console.error);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_order** | [**ChannelPartnerOrder**](ChannelPartnerOrder.md)| Order to insert | 

### Return type

[**ChannelPartnerImportResponse**](ChannelPartnerImportResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## insertChannelPartnerShipToPreference

> ChannelPartnerShipToPreferenceResponse insertChannelPartnerShipToPreference(channel_partner_oid, ship_to_preference)

Insert a ship to preference record for the channel partner.

Insert a ship to preference record for the channel partner. 


### Example

```javascript
import {channelPartnerApi} from '../api.js';

/**
 * Inserts a channel partner shipto preference for a channel partner.
 * These preferences are used by EDI channel partners to automatically
 * apply return policies and add additional free items to EDI orders based on the EDI code that is present.
 *
 * Possible Errors:
 * Attempting to interact with a channel partner other than the one tied to your API Key:
 *    "Invalid channel_partner_oid specified.  Your REST API key may only interact with channel_partner_oid: 12345"
 * Supplying a bad channel partner oid: "Invalid channel_partner_oid specified."
 */
export async function execute() {
    console.log(`--- ${execute.name} ---`);

    try {
        // Channel partner OID
        const channelPartnerOid = 12345;

        // Create ship to preference
        const preference = {
            channel_partner_oid: channelPartnerOid,
            ship_to_edi_code: "EDI_CODE_HERE",
            return_policy: "This is some return policy text that will be printed on the packing slip.",
            additional_kit_component_item_ids: ["ITEM_ID1", "ITEM_ID2", "ITEM_ID3"],
            description: "This is a merchant friendly description to help me remember what the above setting are."
        };

        // Insert the ship to preference
        const apiResponse = await new Promise((resolve, reject) => {
            channelPartnerApi.insertChannelPartnerShipToPreference(
                channelPartnerOid, preference,
                function (error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                }
            );
        });

        // Check for errors in the API response
        if (apiResponse.error) {
            const error = apiResponse.error;
            console.error(error.developer_message);
            console.error(error.user_message);
            process.exit(1);
        }

        // Extract and log the inserted preference
        const insertedPreference = apiResponse.ship_to_preference;

        // This should equal what you submitted.
        console.log(insertedPreference);
        console.log("Ship to preference inserted successfully");
    } catch (ex) {
        // Handle any unexpected errors
        const error = ex instanceof Error ? ex : new Error('Unknown error');
        console.error(`Error: ${error.message}`);
        console.error(error.stack);
    }
}

// Optional: If you want to run this directly
if (require.main === module) {
    execute().catch(console.error);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_oid** | **Number**|  | 
 **ship_to_preference** | [**ChannelPartnerShipToPreference**](ChannelPartnerShipToPreference.md)| Ship to preference to create | 

### Return type

[**ChannelPartnerShipToPreferenceResponse**](ChannelPartnerShipToPreferenceResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refundChannelPartnerOrder

> OrderResponse refundChannelPartnerOrder(order_id, order, opts)

Refund a channel partner order

Perform a refund operation on a channel partner order and then update the order if successful.  All of the object properties ending in _refunded should be the TOTAL amount that should end up being refunded.  UltraCart will calculate the actual amount to refund based upon the prior refunds. 


### Example

```javascript
import { channelPartnerApi } from '../api.js';

/**
 * IMPORTANT: Do NOT construct the refunded order. This method does a refund but also updates the entire object, so start with an order query.
 * ALWAYS start with an order retrieved from the system.
 * 1. Call getChannelPartnerOrder or getChannelPartnerOrderByChannelPartnerOrderId to retrieve the order being refunded
 * 2. For a full refund, reverse the following:
 *    A. Set the refunded qty and refunded amount for each item.
 *    B. Set the refunded tax (if any)
 *    C. Set the refunded shipping
 * NOTE: refund amounts are positive numbers. If any item total cost is $20.00, a full refunded amount would also be positive $20.00
 * See the ChannelPartnerApi.getChannelPartnerOrder() sample for details on that method.
 */
export async function execute() {
    try {
        // For a comment on this expand, see getChannelPartnerOrder sample.
        const expand = "item,summary,shipping";

        // This order MUST be an order associated with this channel partner, or you will receive a 400 Bad Request.
        const orderId = "DEMO-0009106820";

        // Retrieve the order
        const apiResponse = await new Promise((resolve, reject) => {
            channelPartnerApi.getChannelPartnerOrder(
                { orderId, expand },
                function (error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                }
            );
        });

        // Check for errors
        if (apiResponse.error) {
            const error = apiResponse.error;
            console.error(error);
            console.error(error.user_message);
            process.exit(1);
        }

        // Ensure order exists
        if (!apiResponse.order) {
            console.error("No order found");
            process.exit(1);
        }

        // Create a copy of the order to modify
        const order = { ...apiResponse.order };

        // RefundReason may be required, but is optional by default.
        order.refund_reason = "Damage Product";

        // Ensure summary exists before modifying
        if (order.summary) {
            order.summary.tax_refunded = order.summary.tax;
            order.summary.shipping_handling_refunded = order.summary.shipping_handling_total;
        }

        // Modify items for refund
        if (order.items) {
            order.items.forEach(item => {
                item.refund_reason = "DifferentItem";
                item.quantity_refunded = item.quantity;
                item.total_refunded = item.total_cost_with_discount;
            });
        }

        // Refund parameters
        const rejectAfterRefund = false;
        const skipCustomerNotification = true;
        const autoOrderCancel = false;
        const manualRefund = false;
        const reverseAffiliateTransactions = true;
        const issueStoreCredit = false;
        const autoOrderCancelReason = undefined;

        // Process the refund
        const refundResponse = await new Promise((resolve, reject) => {
            channelPartnerApi.refundChannelPartnerOrder(
                    orderId,
                    order,
                {
                    reject_after_refund: rejectAfterRefund,
                    skip_customer_notification: skipCustomerNotification,
                    auto_order_cancel: autoOrderCancel,
                    manual_refund: manualRefund,
                    reverse_affiliate_transactions: reverseAffiliateTransactions,
                    issue_store_credit: issueStoreCredit,
                    auto_order_cancel_reason: autoOrderCancelReason,
                    _expand: expand
                },
                function (error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                }
            );
        });

        // Log error and updated order
        const error = refundResponse.error;
        const updatedOrder = refundResponse.order;

        // Log error and updated order details
        console.log("Error:");
        console.log(error ? JSON.stringify(error, null, 2) : "null");
        console.log("\n\n--------------------\n\n");
        console.log("Updated Order:");
        console.log(updatedOrder ? JSON.stringify(updatedOrder, null, 2) : "null");
    } catch (ex) {
        const error = ex instanceof Error ? ex : new Error('Unknown error');
        console.error(`Error: ${error.message}`);
        console.error(error.stack);
    }
}

// Optional: If you want to run this directly
if (require.main === module) {
    execute().catch(console.error);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to refund. | 
 **order** | [**Order**](Order.md)| Order to refund | 
 **reject_after_refund** | **Boolean**| Reject order after refund | [optional] [default to false]
 **skip_customer_notification** | **Boolean**| Skip customer email notification | [optional] [default to false]
 **auto_order_cancel** | **Boolean**| Cancel associated auto orders | [optional] [default to false]
 **manual_refund** | **Boolean**| Consider a manual refund done externally | [optional] [default to false]
 **reverse_affiliate_transactions** | **Boolean**| Reverse affiliate transactions | [optional] [default to true]
 **issue_store_credit** | **Boolean**| Issue a store credit instead of refunding the original payment method, loyalty must be configured on merchant account | [optional] [default to false]
 **auto_order_cancel_reason** | **String**| Reason for auto orders cancellation | [optional] 
 **_expand** | **String**| The object expansion to perform on the result.  See OrderApi.refundOrder documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## updateChannelPartnerShipToPreference

> ChannelPartnerShipToPreferenceResponse updateChannelPartnerShipToPreference(channel_partner_oid, channel_partner_ship_to_preference_oid, ship_to_preference)

Update a ship to preference record for the channel partner.

Update a ship to preference record for the channel partner. 


### Example

```javascript
import {channelPartnerApi} from '../api.js';

/**
 * Updates a channel partner shipto preference for a channel partner.
 * These preferences are used by EDI channel partners to automatically
 * apply return policies and add additional free items to EDI orders based on the EDI code that is present.
 *
 * Possible Errors:
 * Attempting to interact with a channel partner other than the one tied to your API Key:
 *    "Invalid channel_partner_oid specified.  Your REST API key may only interact with channel_partner_oid: 12345"
 * Supplying a bad channel partner oid: "Invalid channel_partner_oid specified."
 */
export async function execute() {
    try {
        const channelPartnerOid = 12345;
        const channelPartnerShipToPreferenceOid = 67890;

        // Retrieve the existing preference
        const getResponse = await new Promise((resolve, reject) => {
            channelPartnerApi.getChannelPartnerShipToPreference(
                {channelPartnerOid, channelPartnerShipToPreferenceOid},
                function (error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                }
            );
        });

        // Check for errors in retrieval
        if (getResponse.error) {
            const error = getResponse.error;
            console.error(error.developer_message);
            console.error(error.user_message);
            process.exit(1);
        }

        // Ensure preference exists
        if (!getResponse.ship_to_preference) {
            console.error("No ship to preference found");
            process.exit(1);
        }

        // Create a copy of the preference to update
        const preference = {
            ...getResponse.ship_to_preference,
            ship_to_edi_code: "EDI_CODE_HERE",
            return_policy: "This is some return policy text that will be printed on the packing slip.",
            additional_kit_component_item_ids: ["ITEM_ID1", "ITEM_ID2", "ITEM_ID3"],
            description: "This is a merchant friendly description to help me remember what the above setting are."
        };

        // Update the preference
        const updateResponse = await new Promise((resolve, reject) => {
            channelPartnerApi.updateChannelPartnerShipToPreference(
                channelPartnerOid,
                channelPartnerShipToPreferenceOid,
                preference,
                function (error, data) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                }
            );
        });

        // Check for errors in update
        if (updateResponse.error) {
            const error = updateResponse.error;
            console.error(error.developer_message);
            console.error(error.user_message);
            process.exit(1);
        }

        // Ensure updated preference exists
        const updatedPreference = updateResponse.ship_to_preference;

        // This should equal what you submitted.
        console.log(JSON.stringify(updatedPreference, null, 2));
    } catch (ex) {
        const error = ex instanceof Error ? ex : new Error('Unknown error');
        console.error(`Error: ${error.message}`);
        console.error(error.stack);
    }
}

// Optional: If you want to run this directly
if (require.main === module) {
    execute().catch(console.error);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_partner_oid** | **Number**|  | 
 **channel_partner_ship_to_preference_oid** | **Number**|  | 
 **ship_to_preference** | [**ChannelPartnerShipToPreference**](ChannelPartnerShipToPreference.md)| Ship to preference to create | 

### Return type

[**ChannelPartnerShipToPreferenceResponse**](ChannelPartnerShipToPreferenceResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

