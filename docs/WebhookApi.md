# UltraCartRestApiV2.WebhookApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteWebhook**](WebhookApi.md#deleteWebhook) | **DELETE** /webhook/webhooks/{webhookOid} | Delete a webhook
[**deleteWebhookByUrl**](WebhookApi.md#deleteWebhookByUrl) | **DELETE** /webhook/webhooks | Delete a webhook by URL
[**getWebhookEventCategories**](WebhookApi.md#getWebhookEventCategories) | **GET** /webhook/webhook_event_categories | Retrieve webhook event categories
[**getWebhookLog**](WebhookApi.md#getWebhookLog) | **GET** /webhook/webhooks/{webhookOid}/logs/{requestId} | Retrieve an individual log
[**getWebhookLogSummaries**](WebhookApi.md#getWebhookLogSummaries) | **GET** /webhook/webhooks/{webhookOid}/logs | Retrieve the log summaries
[**getWebhooks**](WebhookApi.md#getWebhooks) | **GET** /webhook/webhooks | Retrieve webhooks
[**insertWebhook**](WebhookApi.md#insertWebhook) | **POST** /webhook/webhooks | Add a webhook
[**resendEvent**](WebhookApi.md#resendEvent) | **POST** /webhook/webhooks/{webhookOid}/reflow/{eventName} | Resend events to the webhook endpoint.
[**updateWebhook**](WebhookApi.md#updateWebhook) | **PUT** /webhook/webhooks/{webhookOid} | Update a webhook



## deleteWebhook

> deleteWebhook(webhookOid)

Delete a webhook

Delete a webhook on the UltraCart account. 


### Example

```javascript
// Import API and UltraCart types
import { webhookApi } from '../api.js';

// Namespace-like structure using a class
export class DeleteWebhook {
  static async execute() {
    /*
     * Deletes a webhook
     *
     * You will need the webhook_oid to call this method. Call getWebhooks() if you don't know your oid.
     * Returns status code 204 (No Content) on success
     */
    try {
      const webhookOid = 123456789; // call getWebhooks if you don't know this.

      // UltraCart API call with parameter as an anonymous object
      await new Promise((resolve, reject) => {
        webhookApi.deleteWebhook(webhookOid, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });

      console.log(`Webhook ${webhookOid} deleted successfully`);
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
 **webhookOid** | **Number**| The webhook oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteWebhookByUrl

> WebhookResponse deleteWebhookByUrl(webhook)

Delete a webhook by URL

Delete a webhook based upon the URL on the webhook_url matching an existing webhook. 


### Example

```javascript
// Import API and UltraCart types
import {webhookApi} from '../api.js';

// Namespace-like structure using a class
export class DeleteWebhookByUrl {
    static async execute() {
        /*
         * This method can be confusing due to its payload. The method does indeed delete a webhook by url, but you need to
         * pass a webhook object in as the payload. However, only the url is used. UltraCart does this to avoid any confusion
         * with the rest url versus the webhook url.
         *
         * To use:
         * Get your webhook url.
         * Create a Webhook object.
         * Set the Webhook url property.
         * Pass the webhook to deleteWebhookByUrl()
         *
         * Returns status code 204 (No Content) on success
         */
        try {
            const webhookUrl = "https://www.mywebiste.com/page/to/call/when/this/webhook/fires.php";
            const webhook = {
                webhook_url: webhookUrl,
            };

            // UltraCart API call with parameter as an anonymous object
            await new Promise((resolve, reject) => {
                webhookApi.deleteWebhookByUrl(webhook, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            console.log(`Webhook with URL ${webhookUrl} deleted successfully`);
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
 **webhook** | [**Webhook**](Webhook.md)| Webhook to delete | 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## getWebhookEventCategories

> WebhookEventCategoriesResponse getWebhookEventCategories()

Retrieve webhook event categories

Retrieves the available webhook event categories and events with backend-owned metadata (OIDs, names, descriptions, available expansions, flags) independent of whether any webhooks are saved.  Used by the New Webhook editor so a merchant with zero webhooks can still see the catalog. 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

[**WebhookEventCategoriesResponse**](WebhookEventCategoriesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookLog

> WebhookLogResponse getWebhookLog(webhookOid, requestId)

Retrieve an individual log

Retrieves an individual log for a webhook given the webhook oid the request id. 


### Example

```javascript
// Import API and UltraCart types
import { webhookApi } from '../api.js';

// Namespace-like structure using a class
export class GetWebhookLog {
  static async execute() {
    /*
     * getWebhookLog() provides a detail log of a webhook event. It is used in tandem with getWebhookLogSummaries to audit
     * webhook events. This method call will require the webhook_oid and the request_id. The webhook_oid can be discerned
     * from the results of getWebhooks() and the request_id can be found from getWebhookLogSummaries(). See those examples
     * if needed.
     */
    try {
      const webhookOid = 123456789; // call getWebhooks if you don't know this
      const requestId = "987654321"; // call getWebhookLogSummaries if you don't know this

      // UltraCart API call with parameters as an anonymous object
      const apiResponse = await new Promise((resolve, reject) => {
        webhookApi.getWebhookLog(webhookOid,requestId, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });

      const webhookLog = apiResponse.webhook_log;

      if (apiResponse.error) {
        console.error(apiResponse.error.developer_message);
        console.error(apiResponse.error.user_message);
        process.exit(1); // Equivalent to Environment.Exit(1) in Node.js
      }

      // For Node.js/console output (adjust for other environments)
      console.log(webhookLog); // JSON-like object output; no ToString() equivalent in TS by default
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
 **webhookOid** | **Number**| The webhook oid that owns the log. | 
 **requestId** | **String**| The request id associated with the log to view. | 

### Return type

[**WebhookLogResponse**](WebhookLogResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhookLogSummaries

> WebhookLogSummariesResponse getWebhookLogSummaries(webhookOid, opts)

Retrieve the log summaries

Retrieves the log summary information for a given webhook.  This is useful for displaying all the various logs that can be viewed. 


### Example

```javascript
// Import API and UltraCart types
import { webhookApi } from '../api.js';
import { DateTime } from 'luxon';

// Namespace-like structure using a class
export class GetWebhookLogSummaries {
  /*
   * This example illustrates how to retrieve webhook log summaries.
   */

  /**
   * Gets a chunk of webhook log summaries
   * @param offset Offset for pagination
   * @param limit Maximum number of records to return
   * @returns Array of webhook log summaries
   * @throws Error when API call fails
   */
  static async getSummaryChunk(offset, limit) {
    const webhookOid = 123456789; // if you don't know this, use getWebhooks to find your webhook, then get its oid
    const since = DateTime.now()
      .setZone('America/New_York')
      .minus({ days: 10 })
      .startOf('day')
      .toISO(); // get the last 10 days in ISO8601 format

    // UltraCart API call with parameters as an anonymous object
    const opts = {
      _limit: limit,
      _offset: offset,
      _since: since,
    };

    const apiResponse = await new Promise((resolve, reject) => {
      webhookApi.getWebhookLogSummaries(webhookOid, opts, function (error, data, response) {
        if (error) {
          reject(error);
        } else {
          resolve(data, response);
        }
      });
    });

    if (apiResponse.webhook_log_summaries) {
      return apiResponse.webhook_log_summaries;
    }
    return [];
  }

  static async execute() {
    const summaries = [];

    let iteration = 1;
    let offset = 0;
    const limit = 200;
    let moreRecordsToFetch = true;

    try {
      while (moreRecordsToFetch) {
        console.log(`executing iteration ${iteration}`);

        const chunkOfSummaries = await this.getSummaryChunk(offset, limit);
        summaries.push(...chunkOfSummaries);
        offset += limit;
        moreRecordsToFetch = chunkOfSummaries.length === limit;
        iteration++;
      }

      // this will be verbose...
      for (const summary of summaries) {
        console.log(summary); // No ToString() in TS; outputs JSON-like object
      }
    } catch (ex) {
      console.log(`Error occurred on iteration ${iteration}`);
      console.log(ex.toString());
      process.exit(1); // Equivalent to Environment.Exit(1) in Node.js
    }
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookOid** | **Number**| The webhook oid to retrieve log summaries for. | 
 **requestId** | **String**| Filter by request id | [optional] 
 **beginDate** | **String**| Filter to deliveries on or after this date/time | [optional] 
 **endDate** | **String**| Filter to deliveries on or before this date/time | [optional] 
 **status** | **String**| Filter by HTTP status code | [optional] 
 **success** | **Boolean**| Filter by success (true) or failure (false) | [optional] 
 **event** | **String**| Filter by an event name contained in the delivery | [optional] 
 **orderId** | **String**| Filter by an order id contained in the delivery | [optional] 
 **request** | **String**| Filter by text contained in the request payload | [optional] 
 **duration** | **Number**| Filter to deliveries that took at least this many milliseconds | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_since** | **String**| Fetch log summaries that have been delivered since this date/time. | [optional] 

### Return type

[**WebhookLogSummariesResponse**](WebhookLogSummariesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebhooks

> WebhooksResponse getWebhooks(opts)

Retrieve webhooks

Retrieves the webhooks associated with this application. 


### Example

```javascript
import {webhookApi} from '../api.js';

/**
 * This example illustrates how to retrieve all webhooks.
 */
export class GetWebhooks {
    /**
     * Gets a chunk of webhooks
     * @param webhookApi The webhook API instance
     * @param offset Offset for pagination
     * @param limit Maximum number of records to return
     * @returns List of webhooks
     * @throws ApiException Thrown when API call fails
     */
    static async getWebhookChunk(webhookApi, offset, limit) {
        const sort = null; // default sorting is webhook_url, disabled, and those are also the two choices for sorting.
        const placeholders = null;  // useful for UI displays, but not needed here.

        // Pay attention to whether limit or offset comes first in the method signature. UltraCart is not consistent with their ordering.
        const apiResponse = await new Promise((resolve, reject) => {
            webhookApi.getWebhooks({
                _limit: limit,
                _offset: offset,
                _sort: sort,
                _placeholders: placeholders
            }, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        return apiResponse.webhooks || [];
    }

    /**
     * Execute method to fetch and process webhooks
     */
    static async execute() {
        const webhooks = [];

        let iteration = 1;
        let offset = 0;
        const limit = 200;
        let moreRecordsToFetch = true;

        try {
            while (moreRecordsToFetch) {
                console.log(`executing iteration ${iteration}`);

                const chunkOfWebhooks = await GetWebhooks.getWebhookChunk(webhookApi, offset, limit);
                webhooks.push(...chunkOfWebhooks);
                offset = offset + limit;
                moreRecordsToFetch = chunkOfWebhooks.length === limit;
                iteration++;
            }
        } catch (e) {
            console.error(`ApiException occurred on iteration ${iteration}`);
            console.error(e);
            process.exit(1);
        }

        // this will be verbose...
        webhooks.forEach(webhook => {
            console.log(webhook.toString());
        });
    }
}

// Optional: If you want to run this directly
if (require.main === module) {
    GetWebhooks.execute().catch(console.error);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_limit** | **Number**| The maximum number of records to return on this one API call. | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the webhooks.  See documentation for examples | [optional] 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**WebhooksResponse**](WebhooksResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertWebhook

> WebhookResponse insertWebhook(webhook, opts)

Add a webhook

Adds a new webhook on the account.  If you add a new webhook with the authentication_type set to basic, but do not specify the basic_username and basic_password, UltraCart will automatically generate random ones and return them.  This allows your application to have simpler logic on the setup of a secure webhook. 


### Example

```javascript
import {webhookApi} from '../api.js';

export class InsertWebhook {
    /**
     * Adds a new webhook on the account.  If you add a new webhook with the authentication_type set to basic, but
     * do not specify the basic_username and basic_password, UltraCart will automatically generate random ones and
     * return them.  This allows your application to have simpler logic on the setup of a secure webhook.
     *
     * Event Categories and Events:
     *
     * auto_order:
     * - auto_order_cancel       Fired when an auto order is canceled
     * - auto_order_create       Fired when an auto order is created
     * - auto_order_decline      Fired when an auto order is declined
     * - auto_order_disable      Fired when an auto order is disabled
     * - auto_order_preshipment  Fired when an auto order generates a new pre-shipment notice
     * - auto_order_rebill       Fired when an auto order is rebilled
     * - auto_order_update       Fired when an auto order is updated
     *
     * chargeback:
     * - chargeback_create       Fired when a chargeback is created
     * - chargeback_delete       Fired when a chargeback is deleted
     * - chargeback_update       Fired when a chargeback is updated
     *
     * checkout:
     * - checkout_cart_abandon           Fired when a cart is abandoned
     * - checkout_cart_send_return_email Fired when a return email should be sent to a customer
     *
     * customer:
     * - customer_create Fired when a customer profile is created
     * - customer_delete Fired when a customer profile is deleted
     * - customer_update Fired when a customer profile is updated
     *
     * fulfillment:
     * - fulfillment_hold      Fired when an order is held for review
     * - fulfillment_transmit  Fired to transmit an order to the fulfillment house
     *
     * item:
     * - item_create Fired when a new item is created
     * - item_delete Fired when an item is deleted
     * - item_update Fired when an item is updated
     *
     * order:
     * - order_abandon_recovery    Fired when a previously abandoned cart turns into an order
     * - order_create              Fired when an order is placed
     * - order_delete              Fired when an order is deleted
     * - order_payment_failed      Fired when a payment fails
     * - order_payment_process     Fired when a payment is processed
     * - order_refund              Fired when an order is refunded
     * - order_reject              Fired when an order is rejected
     * - order_s3_invoice          Fired when an invoice PDF is stored in S3 bucket
     * - order_s3_packing_slip     Fired when a packing slip PDF is stored in an S3 bucket
     * - order_ship                Fired when an order is shipped
     * - order_ship_delivered      Fired when an order has a shipment delivered
     * - order_ship_expected       Fired when an order has an expected delivery date
     * - order_ship_out_for_delivery Fired when an order has a shipment out for delivery
     * - order_stage_change        Fired when an order stage changes
     * - order_update              Fired when an order is edited
     *
     * storefront:
     * - screen_recording Fired when a screen recording is created
     *
     * user:
     * - user_create  Fired when a user is created
     * - user_delete  Fired when a user is deleted
     * - user_login   Fired when a user logs in
     * - user_update  Fired when a user is updated
     *
     * workflow_task:
     * - workflow_task_create Fired when a workflow task is created
     * - workflow_task_delete Fired when a workflow task is deleted
     * - workflow_task_update Fired when a workflow task is updated
     *
     * Note: Each event uses the same expansions as the event category. To see a list of possible expansion values,
     * visit www.ultracart.com/api/. Order Expansions (https://www.ultracart.com/api/#resource_order.html) are listed
     * below because most webhooks are for order events.
     *
     * Order Expansion:
     * - affiliate
     * - auto_order
     * - billing
     * - checkout
     * - affiliate.ledger
     * - channel_partner
     * - coupon
     * - customer_profile
     * - digital_order
     * - edi
     * - fraud_score
     * - gift
     * - gift_certificate
     * - internal
     * - item
     * - linked_shipment
     * - marketing
     * - payment
     * - payment.transaction
     * - point_of_sale
     * - quote
     * - salesforce
     * - shipping
     * - shipping.tracking_number_details
     * - summary
     * - taxes
     * - utms
     *
     * Note: The WebhookEventSubscription.event_ruler field is processed with the AWS Event Ruler library to filter down
     * events to just what you want. If you wish to employ a ruler filter, see https://github.com/aws/event-ruler
     * for syntax examples. You'll need to apply the aws syntax against the UltraCart object models. Contact UltraCart
     * support if you need assistance creating the proper ruler expression.
     *
     * Possible Errors:
     * (Specific error details may vary)
     */
    static async execute() {
        const webhook = {
            webhook_url: "https://www.mywebiste.com/page/to/call/when/this/webhook/fires.php",  // Must be HTTPS if customer related information is being delivered.
            authentication_type: "basic",  // "basic","none","api user","aws iam"
            basic_username: "george",
            basic_password: "LlamaLlamaRedPajama",
            maximum_events: 10,
            maximum_size: 5242880, // 5 MB is pretty chunky.
            api_version: "2017-03-01", // this is our only API version so far.
            compress_events: true // compress events with gzip, then base64 encode them as a string.
        };

        const eventSub1 = {
            event_name: "order_create",
            event_description: "when an order is placed",
            expansion: "shipping,billing,item,coupon,summary", // whatever you need.
            event_ruler: undefined, // no filtering.  we want all objects.
            comments: "Merchant specific comment, for example: Bobby needs this webhook for the Accounting department."
        };

        const eventSub2 = {
            event_name: "order_update",
            event_description: "when an order is modified",
            expansion: "shipping,billing,item,coupon,summary", // whatever you need.
            event_ruler: undefined, // no filtering.  we want all objects.
            comments: "Merchant specific comment, for example: Bobby needs this webhook for the Accounting department."
        };

        const eventSub3 = {
            event_name: "order_delete",
            event_description: "when an order is modified",
            expansion: "", // don't need any expansion on delete.  only need to know the order_id
            event_ruler: undefined, // no filtering.  we want all objects.
            comments: "Merchant specific comment, for example: Bobby needs this webhook for the Accounting department."
        };

        const eventCategory1 = {
            event_category: "order",
            events: [eventSub1, eventSub2, eventSub3]
        };

        try {
            // apiResponse.webhook will return the newly created webhook.
            const apiResponse = await new Promise((resolve, reject) => {
                webhookApi.insertWebhook(webhook, {}, function (error, data, response) {
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
                process.exit(1);
            }

            const createdWebhook = apiResponse.webhook;
            // TODO - store the webhook oid in case you ever need to make changes.

            // This should equal what you submitted, plus contain much new information
            console.log(createdWebhook?.toString());
        } catch (error) {
            console.error('Error inserting webhook:', error);
            process.exit(1);
        }
    }
}

// Optional: If you want to run this directly
if (require.main === module) {
    InsertWebhook.execute().catch(console.error);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [**Webhook**](Webhook.md)| Webhook to create | 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## resendEvent

> WebhookReflowResponse resendEvent(webhookOid, eventName)

Resend events to the webhook endpoint.

This method will resend events to the webhook endpoint.  This method can be used for example to send all the existing items on an account to a webhook. 


### Example

```javascript
import { webhookApi } from '../api.js';

export class ResendEvent {
    /**
     * ResendEvent is used to reflow an event. It will resend ALL events in history.
     * So it is essentially a way to get all objects from an event. Currently, there are
     * only two events available for reflow: "item_update", and "order_create".
     *
     * These two events provide the means to have a webhook receive all items or orders.
     * This method is usually called at the beginning of a webhook's life to prepopulate
     * a merchant's database with all items or orders.
     *
     * You will need the webhook_oid to call this method. Call getWebhooks() if you don't know your oid.
     */
    static async execute() {
        const webhookOid = 123456789; // call getWebhooks if you don't know this.
        const eventName = "item_update"; // or "order_create", but for this sample, we want all items.

        try {
            const apiResponse = await new Promise((resolve, reject) => {
                webhookApi.resendEvent(webhookOid, eventName, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const reflow = apiResponse.reflow;
            const success = !!(reflow && reflow.queued);

            if (apiResponse.error) {
                console.error(apiResponse.error.developer_message);
                console.error(apiResponse.error.user_message);
                process.exit(1);
            }

            console.log(apiResponse.toString());
        } catch (error) {
            console.error('Error resending event:', error);
            process.exit(1);
        }
    }
}

// Optional: If you want to run this directly
if (require.main === module) {
    ResendEvent.execute().catch(console.error);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookOid** | **Number**| The webhook oid that is receiving the reflowed events. | 
 **eventName** | **String**| The event to reflow. | 

### Return type

[**WebhookReflowResponse**](WebhookReflowResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWebhook

> WebhookResponse updateWebhook(webhookOid, webhook, opts)

Update a webhook

Update a webhook on the account 


### Example

```javascript
import { webhookApi } from '../api.js';

export class UpdateWebhook {
    /**
     * Updates a webhook on the account. See insertWebhook.php for a complete example with field usage.
     * For this example, we are just updating the basic password.
     *
     * Notes:
     * - You should have stored the webhook OID when you created the webhook.
     * - If you don't know the OID, call getWebhooks and iterate through them to find your target webhook.
     * - Adding useful comments to each webhook helps in identifying the correct one.
     *
     * HIGHLY RECOMMENDED:
     * - Get the object from UltraCart for updating
     * - Avoid constructing the object yourself to prevent accidentally deleting parts of the object during update
     */
    static async execute() {
        // You should have stored this when you created the webhook
        const webhookOid = 123456789;

        try {
            // Fetch webhooks to find the specific one to update
            const webhooksResponse = await new Promise((resolve, reject) => {
                webhookApi.getWebhooks({_limit: 100, _offset: 0}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const webhooks = webhooksResponse.webhooks || [];

            // Find the specific webhook to update
            const webhookToUpdate = webhooks.find(webhook => webhook.webhook_oid === webhookOid);

            if (!webhookToUpdate) {
                console.error(`Webhook with OID ${webhookOid} not found`);
                process.exit(1);
            }

            // Update the basic password
            webhookToUpdate.basic_password = "new password here";

            // Perform the update
            const apiResponse = await new Promise((resolve, reject) => {
                webhookApi.updateWebhook(webhookOid, webhookToUpdate, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Check for errors
            if (apiResponse.error) {
                console.error(apiResponse.error.developer_message);
                console.error(apiResponse.error.user_message);
                process.exit(1);
            }

            // Log the updated webhook
            const updatedWebhook = apiResponse.webhook;
            console.log(updatedWebhook?.toString());

        } catch (error) {
            console.error('Error updating webhook:', error);
            process.exit(1);
        }
    }
}

// Optional: If you want to run this directly
if (require.main === module) {
    UpdateWebhook.execute().catch(console.error);
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookOid** | **Number**| The webhook oid to update. | 
 **webhook** | [**Webhook**](Webhook.md)| Webhook to update | 
 **_placeholders** | **Boolean**| Whether or not placeholder values should be returned in the result.  Useful for UIs that consume this REST API. | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

