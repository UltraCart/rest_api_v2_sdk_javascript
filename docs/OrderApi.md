# UltraCartRestApiV2.OrderApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adjustOrderTotal**](OrderApi.md#adjustOrderTotal) | **POST** /order/orders/{order_id}/adjust_order_total/{desired_total} | Adjusts an order total
[**assignToAffiliate**](OrderApi.md#assignToAffiliate) | **POST** /order/orders/{order_id}/assignToAffiliate | Assigns an order to an affiliate
[**blockRefundOnOrder**](OrderApi.md#blockRefundOnOrder) | **GET** /order/orders/{order_id}/refund_block | Set a refund block on an order
[**cancelOrder**](OrderApi.md#cancelOrder) | **POST** /order/orders/{order_id}/cancel | Cancel an order
[**deleteOrder**](OrderApi.md#deleteOrder) | **DELETE** /order/orders/{order_id} | Delete an order
[**duplicateOrder**](OrderApi.md#duplicateOrder) | **POST** /order/orders/{order_id}/duplicate | Duplicate an order
[**format**](OrderApi.md#format) | **POST** /order/orders/{order_id}/format | Format order
[**generateInvoice**](OrderApi.md#generateInvoice) | **GET** /order/orders/{order_id}/invoice | Generate an invoice for this order.
[**generateOrderToken**](OrderApi.md#generateOrderToken) | **GET** /order/orders/token/{order_id} | Generate an order token for a given order id
[**generatePackingSlipAllDC**](OrderApi.md#generatePackingSlipAllDC) | **GET** /order/orders/{order_id}/packing_slip | Generate a packing slip for this order across all distribution centers.
[**generatePackingSlipSpecificDC**](OrderApi.md#generatePackingSlipSpecificDC) | **GET** /order/orders/{order_id}/packing_slip/{distribution_center_code} | Generate a packing slip for this order for the given distribution center.
[**getAccountsReceivableDetailValueHistogram**](OrderApi.md#getAccountsReceivableDetailValueHistogram) | **GET** /order/accounts_receivable/detail_value_histogram | Retrieve a value histogram for a given AR transaction-detail name
[**getAccountsReceivableGatewayDetailNames**](OrderApi.md#getAccountsReceivableGatewayDetailNames) | **GET** /order/accounts_receivable/gateway_detail_names | Retrieve gateway / detail-name picker data for the AR filter modal
[**getAccountsReceivableRetryConfig**](OrderApi.md#getAccountsReceivableRetryConfig) | **GET** /order/accountsReceivableRetryConfig | Retrieve A/R Retry Configuration
[**getAccountsReceivableRetryStats**](OrderApi.md#getAccountsReceivableRetryStats) | **GET** /order/accountsReceivableRetryConfig/stats | Retrieve A/R Retry Statistics
[**getOrder**](OrderApi.md#getOrder) | **GET** /order/orders/{order_id} | Retrieve an order
[**getOrderByToken**](OrderApi.md#getOrderByToken) | **POST** /order/orders/token | Retrieve an order using a token
[**getOrderCustomerActivity**](OrderApi.md#getOrderCustomerActivity) | **GET** /order/orders/{order_id}/customer_activity | Retrieve customer activity for this order.
[**getOrderEdiDocuments**](OrderApi.md#getOrderEdiDocuments) | **GET** /order/orders/{order_id}/edi | Retrieve EDI documents associated with this order.
[**getOrderEmails**](OrderApi.md#getOrderEmails) | **GET** /order/orders/{order_id}/emails | Retrieve email delivery information for this order.
[**getOrderPageViewHistory**](OrderApi.md#getOrderPageViewHistory) | **GET** /order/orders/{order_id}/page_view_history | Retrieve page view history for this order.
[**getOrderUpsellCart**](OrderApi.md#getOrderUpsellCart) | **PUT** /order/orders/{order_id}/upsell_with_cart | Get Order Upsell Cart
[**getOrders**](OrderApi.md#getOrders) | **GET** /order/orders | Retrieve orders
[**getOrdersBatch**](OrderApi.md#getOrdersBatch) | **POST** /order/orders/batch | Retrieve order batch
[**getOrdersByQuery**](OrderApi.md#getOrdersByQuery) | **POST** /order/orders/query | Retrieve orders by query
[**heldOrderAddItemsAndRelease**](OrderApi.md#heldOrderAddItemsAndRelease) | **PUT** /order/orders/{order_id}/hold/add_items_and_release | Add items and release a held order
[**heldOrderRelease**](OrderApi.md#heldOrderRelease) | **PUT** /order/orders/{order_id}/hold/release | Release a held order
[**insertOrder**](OrderApi.md#insertOrder) | **POST** /order/orders | Insert an order
[**isRefundableOrder**](OrderApi.md#isRefundableOrder) | **GET** /order/orders/{order_id}/refundable | Determine if an order can be refunded
[**processPayment**](OrderApi.md#processPayment) | **POST** /order/orders/{order_id}/process_payment | Process payment
[**refundOrder**](OrderApi.md#refundOrder) | **PUT** /order/orders/{order_id}/refund | Refund an order
[**replaceOrderItemMerchantItemId**](OrderApi.md#replaceOrderItemMerchantItemId) | **PUT** /order/orders/{order_id}/replace_item_id | Replaces an order item id
[**replacement**](OrderApi.md#replacement) | **POST** /order/orders/{order_id}/replacement | Replacement order
[**resendReceipt**](OrderApi.md#resendReceipt) | **POST** /order/orders/{order_id}/resend_receipt | Resend receipt
[**resendShipmentConfirmation**](OrderApi.md#resendShipmentConfirmation) | **POST** /order/orders/{order_id}/resend_shipment_confirmation | Resend shipment confirmation
[**unblockRefundOnOrder**](OrderApi.md#unblockRefundOnOrder) | **GET** /order/orders/{order_id}/refund_unblock | Remove a refund block on an order
[**updateAccountsReceivableRetryConfig**](OrderApi.md#updateAccountsReceivableRetryConfig) | **POST** /order/accountsReceivableRetryConfig | Update A/R Retry Configuration
[**updateOrder**](OrderApi.md#updateOrder) | **PUT** /order/orders/{order_id} | Update an order
[**validateOrder**](OrderApi.md#validateOrder) | **POST** /order/validate | Validate



## adjustOrderTotal

> BaseResponse adjustOrderTotal(order_id, desired_total)

Adjusts an order total

Adjusts an order total.  Adjusts individual items appropriately and considers taxes.  Desired total should be provided in the same currency as the order and must be less than the current total and greater than zero.  This call will change the order total.  It returns true if the desired total is achieved.  If the goal seeking algorithm falls short (usually by pennies), this method returns back false.  View the merchant notes for the order for further details. 


### Example

```javascript
import { orderApi } from '../api.js';

/**
 * OrderApi.adjustOrderTotal() takes a desired order total and performs goal-seeking to adjust all items and taxes
 * appropriately.  This method was created for merchants dealing with Medicare and Medicaid.  When selling their
 * medical devices, they would often run into limits approved by Medicare.  As such, they needed to adjust the
 * order total to match the approved amount.  This is a convenience method to adjust individual items and their
 * taxes to match the desired total.
 */
export async function execute() {
    const orderId = "DEMO-0009104390";
    const desiredTotal = "21.99";

    try {
        const apiResponse = await new Promise((resolve, reject) => {
            orderApi.adjustOrderTotal(
                orderId,
                desiredTotal
            , function(error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });

        if (apiResponse.error) {
            console.error(apiResponse.error.developer_message);
            console.error(apiResponse.error.user_message);
            console.log("Order could not be adjusted. See error log.");
            return;
        }

        if (apiResponse.success) {
            console.log("Order was adjusted successfully. Use GetOrder() to retrieve the order if needed.");
        }
    } catch (error) {
        console.error("An error occurred while adjusting the order:", error);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to cancel. | 
 **desired_total** | **String**| The desired total with no formatting. example 123.45 | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assignToAffiliate

> OrderResponse assignToAffiliate(order_id, assign_to_affiliate_request, opts)

Assigns an order to an affiliate

Assigns an order to an affiliate. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to assign to the affiliate. | 
 **assign_to_affiliate_request** | [**OrderAssignToAffiliateRequest**](OrderAssignToAffiliateRequest.md)| Assign to affiliate request | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## blockRefundOnOrder

> blockRefundOnOrder(order_id, opts)

Set a refund block on an order

Sets a refund block on an order to prevent a user from performing a refund.  Commonly used when a chargeback has been received. 


### Example

```javascript
import { orderApi } from '../api.js';

/**
 * blockRefundOnOrder sets an order property that is considered when a refund request is made.
 * If the property is present, the refund is denied.  Being an order property allows for querying
 * upon it within BigQuery for audit purposes.
 */
export class BlockRefundOnOrder {
    /**
     * Sets a property to prevent an order from being refunded.
     */
    static async execute() {
        const orderId = "DEMO-0009105222";
        let opts = {};
        opts.block_reason = 'Chargeback';


        try {
            await new Promise((resolve, reject) => {
                orderApi.blockRefundOnOrder(orderId, opts, function(error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            console.log("orderApi.blockRefundOnOrder executed successfully.");
            // Note: This method returns back a 204 No Content.

        } catch (error) {
            console.error("Error setting block refund on an order.:", error);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to block a refund on. | 
 **block_reason** | **String**| Block reason code (optional) | [optional] 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cancelOrder

> BaseResponse cancelOrder(order_id, opts)

Cancel an order

Cancel an order on the UltraCart account.  If the success flag is false, then consult the error message for why it failed. 


### Example

```javascript
import { orderApi } from '../api.js';

/**
 * OrderApi.CancelOrder() will do just that.  It will cancel an order by rejecting it.
 * However, the following restrictions apply:
 * 1) If the order is already completed, this call will fail.
 * 2) If the order has already been rejected, this call will fail.
 * 3) If the order has already been transmitted to a fulfillment center, this call will fail.
 * 4) If the order is queued for transmission to a distribution center, this call will fail.
 */
export class CancelOrder {
    /**
     * Attempts to cancel a specific order
     * @param apiKey The API key for authentication
     * @returns Promise resolving to whether the order was successfully canceled
     */
    static async execute(apiKey) {
        const orderId = "DEMO-0009104390";

        try {
            const apiResponse = await new Promise((resolve, reject) => {
                orderApi.cancelOrder(orderId, function(error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            if (apiResponse.error) {
                console.error(apiResponse.error.developer_message);
                console.error(apiResponse.error.user_message);
                console.log("Order could not be canceled. See error log.");
                return false;
            }

            if (apiResponse.success) {
                console.log("Order was canceled successfully.");
                return true;
            }

            return false;
        } catch (error) {
            console.error("An error occurred while canceling the order:", error);
            return false;
        }
    }
}

// Example usage
async function cancelOrderExample() {
    const apiKey = "your-api-key-here"; // Replace with actual API key
    const result = await CancelOrder.execute(apiKey);
    console.log(result ? "Order cancellation successful" : "Order cancellation failed");
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to cancel. | 
 **lock_self_ship_orders** | **Boolean**| Flag to prevent a order shipping during a refund process | [optional] 
 **skip_refund_and_hold** | **Boolean**| Skip refund and move order to Held Orders department | [optional] 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteOrder

> deleteOrder(order_id)

Delete an order

Delete an order on the UltraCart account. 


### Example

```javascript
import { orderApi } from '../api.js';

/**
 * OrderApi.DeleteOrder() will do just that.  It will delete an order.
 * You might find it more useful to reject an order rather than delete it in order to leave an audit trail.
 * However, deleting test orders will be useful to keep your order history tidy.  Still, any order
 * may be deleted.
 */
export async function execute() {
    const orderId = "DEMO-0008104390";

    try {
        await new Promise((resolve, reject) => {
            orderApi.deleteOrder(orderId, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });
        console.log("Order was deleted successfully.");
    } catch (error) {
        console.error("An error occurred while deleting the order:", error);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## duplicateOrder

> OrderResponse duplicateOrder(order_id, opts)

Duplicate an order

Perform a duplicate of the specified order_id and return a new order located in Accounts Receivable. 


### Example

```javascript
import {orderApi} from '../api.js';

/**
 * OrderApi.DuplicateOrder() does not accomplish much on its own. The use-case for this method is to
 * duplicate a customer's order and then charge them for it. DuplicateOrder() does not charge the customer again.
 *
 * These are the steps for cloning an existing order and charging the customer for it.
 * 1. DuplicateOrder
 * 2. UpdateOrder (if you wish to change any part of it)
 * 3. ProcessPayment to charge the customer.
 *
 * As a reminder, if you wish to create a new order from scratch, use the CheckoutApi or ChannelPartnerApi.
 * The OrderApi is for managing existing orders.
 */
export async function execute() {
    try {
        // For this example, we're going to change the items after we duplicate the order, so
        // the only expansion properties we need are the items.
        // See: https://www.ultracart.com/api/ for a list of all expansions.
        const expansion = "items";

        // Step 1. Duplicate the order
        const orderIdToDuplicate = "DEMO-0009104436";
        const apiResponse = await new Promise((resolve, reject) => {
            orderApi.duplicateOrder(orderIdToDuplicate, {_expand: expansion}, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });
        const newOrder = apiResponse.order;

        // Step 2. Update the items. Create a new items array and assign it to the order to remove the old ones completely.
        const item = {
            merchant_item_id: "simple_teapot",
            quantity: 1,
            description: "A lovely teapot",
            distribution_center_code: "DFLT", // where is this item shipping out of?
            cost: {
                currency_code: "USD",
                value: 9.99
            },
            weight: {
                uom: "OZ",
                value: 6
            }
        };

        newOrder.items = [item];
        const updateResponse = await new Promise((resolve, reject) => {
            orderApi.updateOrder(
                newOrder.order_id,
                newOrder,
                {_expand: expansion}
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        const updatedOrder = updateResponse.order;

        // Step 3. process the payment.
        // the request object below takes two optional arguments.
        // The first is an amount if you wish to bill for an amount different from the order.
        // We do not bill differently in this example.
        // The second is card_verification_number_token, which is a token you can create by using our hosted fields to
        // upload a CVV value. This will create a token you may use here. However, most merchants using the duplicate
        // order method will be setting up an auto order for a customer. Those will not make use of the CVV, so we're
        // not including it here. That is why the request object below is does not have any values set.
        // For more info on hosted fields:
        // See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377775/UltraCart+Hosted+Credit+Card+Fields
        // See: https://github.com/UltraCart/sdk_samples/blob/master/hosted_fields/hosted_fields.html

        const processPaymentRequest = {};
        const paymentResponse = await new Promise((resolve, reject) => {
            orderApi.processPayment(
                newOrder.order_id,
                processPaymentRequest
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        // do whatever you wish with this
        const transactionDetails = paymentResponse.payment_transaction;

        console.log("New Order (after updated items):");
        console.log(JSON.stringify(updatedOrder, null, 2));
        console.log("Payment Response:");
        console.log(JSON.stringify(paymentResponse, null, 2));
    } catch (error) {
        console.error("An error occurred while duplicating and processing the order:", error);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to duplicate. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## format

> OrderFormatResponse format(order_id, format_options)

Format order

Format the order for display at text or html 


### Example

```javascript
import { orderApi } from '../api.js';

export class Format {
    /**
     * format() returns back a text-formatted or html block for displaying an order. It is similar to what you would
     * see on a receipt page.
     */
    static async execute() {
        // Create format options
        const formatOptions = {
            context: 'receipt', // unknown,receipt,shipment,refund,quote-request,quote
            format: 'table', // text,div,table,email
            show_contact_info: false,
            show_payment_info: false, // might not want to show this to just anyone.
            show_merchant_notes: false, // be careful showing these
            email_as_link: true, // makes the email addresses web links

            // if you only wish to show the items for a particular distribution center,
            // this might be useful if you have Context='shipment' and you're displaying this order to a fulfillment center, etc
            // filterDistributionCenterOid: 1234321,

            link_file_attachments: true,
            show_internal_information: true, // consider this carefully.
            show_non_sensitive_payment_info: true, // what the customer usually sees
            show_in_merchant_currency: true,
            hide_bill_to_address: false,

            // filterToItemsInContainerOid: 123454321, // you probably won't need this.

            // when an order displays on the secure.ultracart.com site, we link the email to our order search so you can quickly
            // search for all orders for that email. I doubt you would have use for that. But maybe.
            dont_link_email_to_search: true,
            translate: false // if true, shows in customer's native language
        };

        const orderId = 'DEMO-0009104390';

        try {
            // Await the API call
            const apiResponse = await new Promise((resolve, reject) => {
                orderApi.format(
                    orderId,
                    formatOptions
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            const formattedResult = apiResponse.formatted_result;

            // Construct HTML output
            console.log('<html lang="en">');
            console.log('<head>');

            // you won't have css links for format=table
            if (apiResponse.css_links) {
                apiResponse.css_links.forEach(link => {
                    console.log(`<style type="text/css">${link}</style>`);
                });
            }

            console.log('</head><body>');
            console.log(formattedResult);
            console.log('</body></html>');
        } catch (error) {
            console.error('Error formatting order:', error);
        }
    }
}

// Optional: If you want to call the method
// Format.execute();
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to format | 
 **format_options** | [**OrderFormat**](OrderFormat.md)| Format options | 

### Return type

[**OrderFormatResponse**](OrderFormatResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateInvoice

> OrderInvoiceResponse generateInvoice(order_id)

Generate an invoice for this order.

The invoice PDF that is returned is base 64 encoded 


### Example

```javascript
import {orderApi} from '../api.js';
import fs from 'fs/promises';

export class GenerateInvoice {
    /**
     * generateInvoice returns back a base64 encoded byte array of the given order's Invoice in PDF format.
     */
    static async execute() {
        const orderId = 'DEMO-0009104976';

        try {
            // Await the API call
            const apiResponse = await new Promise((resolve, reject) => {
                orderApi.generateInvoice(
                    orderId
                    , function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
            });

            // the invoice will return as a base64 encoded
            // unpack, save off, email, whatever.
            const base64PdfOrUndefined = apiResponse.pdfBase64;
            if (base64PdfOrUndefined !== undefined) {
                const base64Pdf = base64PdfOrUndefined;
                // Decode base64 to buffer
                const decodedPdf = Buffer.from(base64Pdf, 'base64');

                // Write PDF to file
                await fs.writeFile('invoice.pdf', decodedPdf);

                // If this is running as a web application, you could return the PDF to the browser
                // using something like this (this is Express.js-specific code):
                /*
                app.get('/invoice', async (req, res) => {
                    res.contentType('application/pdf');
                    res.setHeader('Content-Disposition', 'inline; filename="invoice.pdf"');
                    res.setHeader('Cache-Control', 'public, must-revalidate, max-age=0');
                    res.setHeader('Pragma', 'public');
                    res.send(decodedPdf);
                });
                */

                console.log('Invoice PDF saved to invoice.pdf');
            }
        } catch (error) {
            console.error('Error generating invoice:', error);
        }
    }
}

// Optional: If you want to call the method
// GenerateInvoice.execute();
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| Order ID | 

### Return type

[**OrderInvoiceResponse**](OrderInvoiceResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateOrderToken

> OrderTokenResponse generateOrderToken(order_id)

Generate an order token for a given order id

Retrieves a single order token for a given order id.  The token can be used with the getOrderByToken API. 


### Example

```javascript
import {orderApi} from '../api.js';

export class GenerateOrderToken {
    /**
     * This method generates a unique encrypted key for an Order.  This is useful if you wish to provide links for
     * customer orders without allowing someone to easily cycle through orders.  By requiring order tokens, you
     * control which orders are viewable with a public hyperlink.
     *
     * This method works in tandem with OrderApi.getOrderByToken()
     */
    static async execute() {
        const orderId = 'DEMO-0009104436';

        try {
            // Generate order token
            const orderTokenResponse = await new Promise((resolve, reject) => {
                orderApi.generateOrderToken(
                    orderId
                    , function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
            });
            const orderToken = orderTokenResponse.order_token;

            console.log(`Order Token is: ${orderToken}`);

            /*
             * The token format will look something like this:
             * DEMO:UJZOGiIRLqgE3a10yp5wmEozLPNsGrDHNPiHfxsi0iAEcxgo9H74J/l6SR3X8g==
             */
            return orderToken;
        } catch (error) {
            console.error('Error generating order token:', error);
            throw error;
        }
    }
}

// Optional: If you want to call the method
// GenerateOrderToken.execute().then(token => {
//     // Do something with the token
// }).catch(error => {
//     // Handle any errors
// });
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to generate a token for. | 

### Return type

[**OrderTokenResponse**](OrderTokenResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generatePackingSlipAllDC

> OrderPackingSlipResponse generatePackingSlipAllDC(order_id)

Generate a packing slip for this order across all distribution centers.

The packing slip PDF that is returned is base 64 encoded 


### Example

```javascript
import { orderApi } from '../api.js';
import fs from 'fs/promises';
import { Buffer } from 'buffer';

export class GeneratePackingSlipAllDC {
    /**
     * OrderApi.generatePackingSlipAllDC() is a method that might be used by a fulfillment center or distribution
     * center to generate a packing slip to include with a shipment.  This method will return a packing slip for
     * an order for all distribution centers involved.
     */
    static async execute() {
        const orderId = 'DEMO-0009104390';

        try {
            // Generate packing slip for all distribution centers
            const apiResponse = await new Promise((resolve, reject) => {
                orderApi.generatePackingSlipAllDC(
                    orderId
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            // Check for errors
            if (apiResponse.error) {
                console.error('Developer Message:', apiResponse.error.developer_message);
                console.error('User Message:', apiResponse.error.user_message);
                throw new Error('Failed to generate packing slip');
            }

            // the packing slip will return as a base64 encoded
            // unpack, save off, email, whatever.
            const base64PackingSlipOrUndefined = apiResponse.pdfBase64;
            if (base64PackingSlipOrUndefined !== undefined) {
                const base64PackingSlip = base64PackingSlipOrUndefined;
                console.log(base64PackingSlip);

                // Decode Base64 string into a buffer
                const pdfBuffer = Buffer.from(base64PackingSlip, 'base64');

                // Save the buffer to a PDF file
                await fs.writeFile('packing_slip.pdf', pdfBuffer);

                console.log("PDF file saved successfully as 'packing_slip.pdf'");
            }
        } catch (error) {
            console.error('Error generating packing slip:', error);
            process.exit(1);
        }
    }
}

// Optional: If you want to call the method
// GeneratePackingSlipAllDC.execute();
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| Order ID | 

### Return type

[**OrderPackingSlipResponse**](OrderPackingSlipResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generatePackingSlipSpecificDC

> OrderPackingSlipResponse generatePackingSlipSpecificDC(distribution_center_code, order_id)

Generate a packing slip for this order for the given distribution center.

The packing slip PDF that is returned is base 64 encoded 


### Example

```javascript
import { orderApi } from '../api.js';
import fs from 'fs/promises';
import { Buffer } from 'buffer';

export class GeneratePackingSlipSpecificDC {
    /**
     * OrderApi.generatePackingSlipSpecificDC() is a method that might be used by a fulfillment center or distribution
     * center to generate a packing slip to include with a shipment.  As such, this method allows for a packing slip
     * for a specific distribution center (DC) in the case that an order has multiple shipments from multiple DC.
     *
     * You must know the DC, which should not be a problem for any custom shipping application.
     * See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377114/Distribution+Center
     */
    static async execute() {
        const orderId = 'DEMO-0009104390';
        const dc = 'DFLT';

        try {
            // Generate packing slip for a specific distribution center
            const apiResponse = await new Promise((resolve, reject) => {
                orderApi.generatePackingSlipSpecificDC(dc,
                    orderId
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            // Check for errors
            if (apiResponse.error) {
                console.error('Developer Message:', apiResponse.error.developer_message);
                console.error('User Message:', apiResponse.error.user_message);
                throw new Error('Failed to generate packing slip');
            }

            // the packing slip will return as a base64 encoded
            // unpack, save off, email, whatever.
            const base64PackingSlipOrUndefined = apiResponse.pdfBase64;

            if (base64PackingSlipOrUndefined !== undefined) {
                const base64PackingSlip = base64PackingSlipOrUndefined;

                console.log(base64PackingSlip);

                // Decode Base64 string into a buffer
                const pdfBuffer = Buffer.from(base64PackingSlip, 'base64');

                // Save the buffer to a PDF file
                await fs.writeFile('packing_slip.pdf', pdfBuffer);

                console.log("PDF file saved successfully as 'packing_slip.pdf'");
            }
        } catch (error) {
            console.error('Error generating packing slip:', error);
            process.exit(1);
        }
    }
}

// Optional: If you want to call the method
// GeneratePackingSlipSpecificDC.execute();
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution_center_code** | **String**| Distribution center code | 
 **order_id** | **String**| Order ID | 

### Return type

[**OrderPackingSlipResponse**](OrderPackingSlipResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccountsReceivableDetailValueHistogram

> getAccountsReceivableDetailValueHistogram(detail, opts)

Retrieve a value histogram for a given AR transaction-detail name

For the calling merchant&#39;s Accounts Receivable orders, returns a value -&gt; document-count histogram for the named transaction detail, optionally scoped to transactions on the named gateway. Drives the AR filter modal&#39;s autocomplete on the detail-value input. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detail** | **String**| The transaction-detail name to histogram. | 
 **gateway** | **String**| The gateway name to scope to (optional). | [optional] 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccountsReceivableGatewayDetailNames

> getAccountsReceivableGatewayDetailNames()

Retrieve gateway / detail-name picker data for the AR filter modal

For the calling merchant&#39;s Accounts Receivable orders, returns the distinct payment gateway names paired with the set of transaction-detail names observed on those gateways. Drives the cascading gateway / detail-name pickers in the AR filter modal. 


### Example


(No example for this operation).


### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccountsReceivableRetryConfig

> AccountsReceivableRetryConfigResponse getAccountsReceivableRetryConfig()

Retrieve A/R Retry Configuration

Retrieve A/R Retry Configuration. This is primarily an internal API call.  It is doubtful you would ever need to use it. 


### Example

```javascript
// This is primarily an internal API call.  It is doubtful you would ever need to use it.
// We do not provide an example for this call.
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**AccountsReceivableRetryConfigResponse**](AccountsReceivableRetryConfigResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccountsReceivableRetryStats

> AccountsReceivableRetryStatsResponse getAccountsReceivableRetryStats(opts)

Retrieve A/R Retry Statistics

Retrieve A/R Retry Statistics. This is primarily an internal API call.  It is doubtful you would ever need to use it. 


### Example

```javascript
// This is primarily an internal API call.  It is doubtful you would ever need to use it.
// We do not provide an example for this call.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 

### Return type

[**AccountsReceivableRetryStatsResponse**](AccountsReceivableRetryStatsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrder

> OrderResponse getOrder(order_id, opts)

Retrieve an order

Retrieves a single order using the specified order id. 


### Example

```javascript
import { orderApi } from '../api.js';

export class GetOrder {
    /**
     * OrderApi.getOrder() retrieves a single order for a given order_id.
     */
    static async execute() {
        // The expansion variable instructs UltraCart how much information to return.  The order object is large and
        // while it's easily manageable for a single order, when querying thousands of orders, is useful to reduce
        // payload size.
        // see www.ultracart.com/api/ for all the expansion fields available (this list below may become stale)
        /*
        Possible Order Expansions:
        affiliate           affiliate.ledger                    auto_order
        billing             channel_partner                     checkout
        coupon              customer_profile                    digital_order
        edi                 fraud_score                         gift
        gift_certificate    internal                            item
        linked_shipment     marketing                           payment
        payment.transaction quote                               salesforce
        shipping            shipping.tracking_number_details    summary
        taxes
        */
        const expansion = 'item,summary,billing,shipping,shipping.tracking_number_details';

        const orderId = 'DEMO-0009104390';

        try {
            // Retrieve the order
            const apiResponse = await new Promise((resolve, reject) => {
                orderApi.getOrder(orderId, {_expand: expansion }, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            // Check for errors
            if (apiResponse.error) {
                console.error('Developer Message:', apiResponse.error.developer_message);
                console.error('User Message:', apiResponse.error.user_message);
                throw new Error('Failed to retrieve order');
            }

            // Ensure order exists
            if (!apiResponse.order) {
                console.error('No order found');
                return undefined;
            }

            // Pretty print the order
            console.log(JSON.stringify(apiResponse.order, null, 2));

            return apiResponse.order;
        } catch (error) {
            console.error('Error retrieving order:', error);
            process.exit(1);
        }
    }
}


function getItemsSignature(order) {

  // Sort items by merchant_item_id (case-insensitive)
  const sortedItems = [...order.items].sort((a, b) =>
    a.merchant_item_id.toLowerCase().localeCompare(b.merchant_item_id.toLowerCase())
  );

  // Build the signature string
  return sortedItems
    .map(item => `${item.merchant_item_id}[${item.quantity}]`)
    .join(', ');
}

// Optional: If you want to call the method
// GetOrder.execute().then(order => {
//     if (order) {
//         // Do something with the order
//     }
// });
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderByToken

> OrderResponse getOrderByToken(order_by_token_query, opts)

Retrieve an order using a token

Retrieves a single order using the specified order token. 


### Example

```javascript
import {orderApi} from '../api.js';

/**
 * OrderApi.getOrderByToken() was created for use within a custom thank-you page.  The built-in StoreFront
 * thank you page displays the customer receipt and allows for unlimited customization.  However, many
 * merchants wish to process the receipt page on their own servers to do custom processing.
 *
 * See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377199/Custom+Thank+You+Page+URL
 *
 * When setting up a custom thank-you url in the StoreFronts, you will provide a query parameter that will hold
 * this order token.  You many extract that from the Request.QueryString object, then turn around and call getOrderByToken
 * to get the order object.
 */
export async function execute() {
    // The expansion variable instructs UltraCart how much information to return.  The order object is large and
    // while it's easily manageable for a single order, when querying thousands of orders, is useful to reduce
    // payload size.
    // see www.ultracart.com/api/ for all the expansion fields available (this list below may become stale)
    /*
    Possible Order Expansions:
    affiliate           affiliate.ledger                    auto_order
    billing             channel_partner                     checkout
    coupon              customer_profile                    digital_order
    edi                 fraud_score                         gift
    gift_certificate    internal                            item
    linked_shipment     marketing                           payment
    payment.transaction quote                               salesforce
    shipping            shipping.tracking_number_details    summary
    taxes
    */
    const expansion = "billing,checkout,coupon,customer_profile,item,payment,shipping,summary,taxes";

    // the token will be in a Request.QueryString parameter defined by you within your storefront.
    // StoreFront -> Privacy and Tracking -> Advanced -> CustomThankYouUrl
    // Example would be: www.mysite.com/receipt.aspx?OrderToken=[OrderToken]

    // Assuming this is collected from query parameters
    // TODO: Replace with actual method of obtaining order token
    const orderToken = "DEMO:UZBOGywSKKwD2a5wx5JwmkwyIPNsGrDHNPiHfxsi0iAEcxgo9H74J/l6SR3X8g=="; // this won't work for you...
    // to generate an order token manually for testing, set generateOrderToken.ts
    // TODO (for you, the merchant): handle missing order token (perhaps this page somehow called by a search engine, etc).

    const orderTokenQuery = {
        order_token: orderToken
    };

    try {
        const apiResponse = await new Promise((resolve, reject) => {
            orderApi.getOrderByToken(
                orderTokenQuery,
                {_expand: expansion}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        const order = apiResponse.order;

        if (order) {
            console.log(JSON.stringify(order, null, 2));
        } else {
            console.log('No order found');
        }
    } catch (error) {
        console.error('Error fetching order:', error);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_by_token_query** | [**OrderByTokenQuery**](OrderByTokenQuery.md)| Order by token query | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOrderCustomerActivity

> OrderCustomerActivityResponse getOrderCustomerActivity(order_id)

Retrieve customer activity for this order.

Retrieves the customer activity associated with the email address on this order.  This includes email engagement history, email list and segment membership, lifetime metrics and email suppression status.  A customer profile is not required and is not consulted, so this method works for guest orders that have never had a customer profile established.  For the page views captured during the session that placed the order, see the page view history method instead. 


### Example

```javascript
import {orderApi} from '../api.js';

/**
 * getOrderCustomerActivity returns the customer activity associated with the email address on an order.
 * This includes email engagement history, email list and segment membership, lifetime metrics and email
 * suppression status.
 *
 * A customer profile is NOT required and is not consulted.  The activity is keyed off the email address
 * on the order, so this works for guest orders that have never had a customer profile established.  For
 * the page views captured during the session that placed the order, use getOrderPageViewHistory instead.
 *
 * If the order has no valid email address, email and customer_activity both come back null.  That is a
 * successful response rather than an error - without an email there is no activity record to find.
 *
 * Note: activity.ts is a unix timestamp in milliseconds, not an ISO 8601 string like most dates in this API.
 *
 * Possible Errors:
 * order_id does not start with the merchant id -> "Path parameter 'order_id' does not start with the merchant id.  Check your parameter value and call log."
 */
export async function execute() {
    const orderId = "DEMO-0009104976";

    try {
        const response = await new Promise((resolve, reject) => {
            orderApi.getOrderCustomerActivity(
                orderId
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        console.log('Customer activity for: ' + response.email);

        const customerActivity = response.customer_activity;

        if (!customerActivity) {
            console.log('No customer activity found for this order.');
            return;
        }

        console.log('Globally unsubscribed: ' + customerActivity.global_unsubscribed);
        console.log('Spam complaint: ' + customerActivity.spam_complaint);

        const activities = customerActivity.activities || [];

        for (const activity of activities) {
            console.log(new Date(activity.ts).toISOString()
                + ' - ' + activity.type
                + ' - ' + activity.action
                + (activity.subject ? ' - ' + activity.subject : ''));
        }
    } catch (error) {
        console.error('Error fetching customer activity:', error);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to retrieve customer activity for. | 

### Return type

[**OrderCustomerActivityResponse**](OrderCustomerActivityResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderEdiDocuments

> OrderEdiDocumentsResponse getOrderEdiDocuments(order_id)

Retrieve EDI documents associated with this order.

Retrieve EDI documents associated with this order. 


### Example

```javascript
import {orderApi} from '../api.js';

/**
 * getOrderEdiDocuments returns back all EDI documents associated with an order.
 *
 * Possible Errors:
 * Order.channelPartnerOid is null -> "Order is not associated with an EDI channel partner."
 */
export async function execute() {
    const orderId = "DEMO-0009104976";

    try {
        const response = await new Promise((resolve, reject) => {
            orderApi.getOrderEdiDocuments(
                orderId
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        const documents = response.ediDocuments || [];

        for (const doc of documents) {
            console.log(JSON.stringify(doc, null, 2));
        }
    } catch (error) {
        console.error('Error fetching EDI documents:', error);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to retrieve EDI documents for. | 

### Return type

[**OrderEdiDocumentsResponse**](OrderEdiDocumentsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderEmails

> OrderEmailsResponse getOrderEmails(order_id)

Retrieve email delivery information for this order.

Retrieves email delivery records associated with the specified order id. 


### Example

```javascript
import {orderApi} from '../api.js';

/**
 * getOrderEmails returns the delivery records for every email UltraCart sent regarding an order,
 * oldest first.  Each record carries the subject and send time plus delivery, open, click and bounce
 * status, which makes this useful evidence that a customer was notified about their order.
 *
 * A customer profile is NOT required.  These records are tied to the order id itself.
 *
 * An order with no email history, or one whose emails were all suppressed, comes back with an empty
 * emails array.  That is a successful response rather than an error.
 *
 * The `internal` flag marks messages sent to merchant staff rather than to the customer.  Filter those
 * out if you only want what the customer actually received.
 *
 * Possible Errors:
 * order_id does not start with the merchant id -> "Path parameter 'order_id' does not start with the merchant id.  Check your parameter value and call log."
 */
export async function execute() {
    const orderId = "DEMO-0009104976";

    try {
        const response = await new Promise((resolve, reject) => {
            orderApi.getOrderEmails(
                orderId
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        const emails = response.emails || [];

        if (emails.length === 0) {
            console.log('No emails were sent for this order.');
            return;
        }

        for (const email of emails) {
            console.log(email.send_dts + ' - ' + email.email + ' - ' + email.subject);

            const status = [];
            if (email.delivered) status.push('delivered ' + email.delivery_dts);
            if (email.opened) status.push('opened ' + email.opened_dts);
            if (email.clicked) status.push('clicked ' + email.clicked_dts);
            if (email.skipped) status.push('skipped: ' + email.skip_reason);
            if (email.bounce_type) status.push('bounced ' + email.bounce_type + '/' + email.bounce_sub_type);

            console.log('    ' + (status.length ? status.join(', ') : 'no delivery events recorded'));
        }
    } catch (error) {
        console.error('Error fetching order emails:', error);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to retrieve email delivery information for. | 

### Return type

[**OrderEmailsResponse**](OrderEmailsResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderPageViewHistory

> OrderPageViewHistoryResponse getOrderPageViewHistory(order_id)

Retrieve page view history for this order.

Retrieves the page views captured during the session that placed this order. 


### Example

```javascript
import {orderApi} from '../api.js';

/**
 * getOrderPageViewHistory returns the page views captured during the session that placed an order,
 * along with the referrer that started that session.
 *
 * A customer profile is NOT required.  These page views are keyed off an analytics client id stored on
 * the order itself, so this works for guest orders.  For the email engagement side of customer activity,
 * use getOrderCustomerActivity instead.
 *
 * An order placed outside the storefront, such as a phone order or an order imported from a channel
 * partner, will have no analytics session attached.  In that case page_views comes back empty.  That is a
 * successful response rather than an error.
 *
 * Note: view_dts is an ISO 8601 string here.  Be aware that the ts field on getOrderCustomerActivity is
 * unix milliseconds instead, so do not assume the two methods format dates the same way.
 *
 * Possible Errors:
 * order_id does not start with the merchant id -> "Path parameter 'order_id' does not start with the merchant id.  Check your parameter value and call log."
 */
export async function execute() {
    const orderId = "DEMO-0009104976";

    try {
        const response = await new Promise((resolve, reject) => {
            orderApi.getOrderPageViewHistory(
                orderId
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        console.log('Session referrer: ' + (response.referrer || '(none captured)'));

        const pageViews = response.page_views || [];

        if (pageViews.length === 0) {
            console.log('No page views were captured for this order.');
            return;
        }

        for (const pageView of pageViews) {
            console.log(pageView.view_dts + ' - ' + pageView.url
                + (pageView.time_on_page ? ' (' + pageView.time_on_page + 's on page)' : ''));

            for (const param of pageView.params || []) {
                console.log('    param ' + param.name + ' = ' + param.value);
            }

            for (const meta of pageView.meta_data || []) {
                console.log('    meta  ' + meta.name + ' = ' + meta.value);
            }
        }
    } catch (error) {
        console.error('Error fetching page view history:', error);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to retrieve page view history for. | 

### Return type

[**OrderPageViewHistoryResponse**](OrderPageViewHistoryResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderUpsellCart

> OrderResponse getOrderUpsellCart(order_id, upsell_cart_request, opts)

Get Order Upsell Cart

Creates a new cart using cloned information from the order, but with a specific set of items, coupons and optionally a checkout URL to return the customer to 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to base things on. | 
 **upsell_cart_request** | [**OrderUpsellCartRequest**](OrderUpsellCartRequest.md)| Request for the upsell cart | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## getOrders

> OrdersResponse getOrders(opts)

Retrieve orders

Retrieves a group of orders from the account.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the orders returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
import { orderApi } from '../api.js';

/**
 * getOrders was the first order query provided by UltraCart. It still functions well, but it is extremely verbose
 * because the query call takes a variable for every possible filter. You are advised to get getOrdersByQuery().
 * It is easier to use and will result in less code. Still, we provide an example here to be thorough.
 *
 * For this email, we will query all orders for a particular email address. The getOrdersByQuery() example
 * illustrates using a date range to filter and select orders.
 */
export async function execute() {
    const orders = [];

    let iteration = 1;
    let offset = 0;
    const limit = 200;
    let moreRecordsToFetch = true;

    while (moreRecordsToFetch) {
        console.log(`executing iteration ${iteration}<br>`);
        const chunkOfOrders = await getOrderChunk(offset, limit);
        orders.push(...chunkOfOrders);
        offset = offset + limit;
        moreRecordsToFetch = chunkOfOrders.length === limit;
        iteration++;
    }

    // this could get verbose...
    for (const order of orders) {
        console.log(JSON.stringify(order, null, 2));
    }

    console.log(orders);
}

/**
 * Fetches a chunk of orders based on various filters
 * @param offset - The offset for pagination
 * @param limit - The number of records to fetch
 * @returns A list of orders
 */
async function getOrderChunk(offset, limit) {
    // The expansion variable instructs UltraCart how much information to return.
    // see www.ultracart.com/api/ for all the expansion fields available (this list below may become stale)
    /*
    Possible Order Expansions:
    affiliate           affiliate.ledger                    auto_order
    billing             channel_partner                     checkout
    coupon              customer_profile                    digital_order
    edi                 fraud_score                         gift
    gift_certificate    internal                            item
    linked_shipment     marketing                           payment
    payment.transaction quote                               salesforce
    shipping            shipping.tracking_number_details    summary
    taxes
    */
    const expansion = "item,summary,billing,shipping,shipping.tracking_number_details";

    // Prepare query parameters - only using email as a filter
    const queryParams = {
        order_id: undefined,
        payment_method: undefined,
        company: undefined,
        first_name: undefined,
        last_name: undefined,
        city: undefined,
        state_region: undefined,
        postal_code: undefined,
        country_code: undefined,
        phone: undefined,
        email: "support@ultracart.com", // <-- this is the only filter we're using
        cc_email: undefined,
        total: undefined,
        screen_branding_theme_code: undefined,
        storefront_host_name: undefined,
        creation_date_begin: undefined,
        creation_date_end: undefined,
        payment_date_begin: undefined,
        payment_date_end: undefined,
        shipment_date_begin: undefined,
        shipment_date_end: undefined,
        rma: undefined,
        purchase_order_number: undefined,
        item_id: undefined,
        current_stage: undefined,
        channel_partner_code: undefined,
        channel_partner_order_id: undefined,
        _limit: limit,
        _offset: offset,
        _sort: undefined,
        _expand: expansion
    };

    try {
        const apiResponse = await new Promise((resolve, reject) => {
            orderApi.getOrders(queryParams, function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            });
        });

        return apiResponse.orders || [];
    } catch (error) {
        console.error('Error fetching orders:', error);
        return [];
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| Order Id | [optional] 
 **payment_method** | **String**| Payment Method | [optional] 
 **company** | **String**| Company | [optional] 
 **first_name** | **String**| First Name | [optional] 
 **last_name** | **String**| Last Name | [optional] 
 **city** | **String**| City | [optional] 
 **state_region** | **String**| State/Region | [optional] 
 **postal_code** | **String**| Postal Code | [optional] 
 **country_code** | **String**| Country Code (ISO-3166 two letter) | [optional] 
 **phone** | **String**| Phone | [optional] 
 **email** | **String**| Email | [optional] 
 **cc_email** | **String**| CC Email | [optional] 
 **total** | **Number**| Total | [optional] 
 **screen_branding_theme_code** | **String**| Screen Branding Theme Code | [optional] 
 **storefront_host_name** | **String**| StoreFront Host Name | [optional] 
 **creation_date_begin** | **String**| Creation Date Begin | [optional] 
 **creation_date_end** | **String**| Creation Date End | [optional] 
 **payment_date_begin** | **String**| Payment Date Begin | [optional] 
 **payment_date_end** | **String**| Payment Date End | [optional] 
 **shipment_date_begin** | **String**| Shipment Date Begin | [optional] 
 **shipment_date_end** | **String**| Shipment Date End | [optional] 
 **rma** | **String**| RMA | [optional] 
 **purchase_order_number** | **String**| Purchase Order Number | [optional] 
 **item_id** | **String**| Item Id | [optional] 
 **current_stage** | **String**| Current Stage | [optional] 
 **channel_partner_code** | **String**| Channel Partner Code | [optional] 
 **channel_partner_order_id** | **String**| Channel Partner Order ID | [optional] 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result. | [optional] 

### Return type

[**OrdersResponse**](OrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrdersBatch

> OrdersResponse getOrdersBatch(order_batch, opts)

Retrieve order batch

Retrieves a group of orders from the account based on an array of order ids.  If more than 500 order ids are specified, the API call will fail with a bad request error. 


### Example

```javascript
import {orderApi} from '../api.js';

/**
 * This method is useful when you need to query a defined set of orders and would like to avoid querying them
 * one at a time.
 */
export async function execute() {
    // The expansion variable instructs UltraCart how much information to return.
    // see www.ultracart.com/api/ for all the expansion fields available (this list below may become stale)
    /*
    Possible Order Expansions:
    affiliate           affiliate.ledger                    auto_order
    billing             channel_partner                     checkout
    coupon              customer_profile                    digital_order
    edi                 fraud_score                         gift
    gift_certificate    internal                            item
    linked_shipment     marketing                           payment
    payment.transaction quote                               salesforce
    shipping            shipping.tracking_number_details    summary
    taxes
    */
    const expansion = "item,summary,billing,shipping,shipping.tracking_number_details";

    const orderBatch = {
        order_ids: ["DEMO-0009104390", "DEMO-0009104391", "DEMO-0009104392"]
    };

    try {
        const apiResponse = await new Promise((resolve, reject) => {
            orderApi.getOrdersBatch(
                orderBatch,
                {_expand: expansion}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        if (apiResponse.error) {
            console.error(apiResponse.error.developer_message);
            console.error(apiResponse.error.user_message);
            process.exit(1);
        }

        const orders = apiResponse.orders || [];

        if (orders.length === 0) {
            console.error("There were no orders returned by this query.");
        }

        // do something with the orders. for this example, we're just accessing many properties as illustration.
        for (const order of orders) {
            const summary = order.summary;
            const actualShippingCost = summary?.actual_shipping?.localized ?? 0;

            const currentStage = order.current_stage;
            const sAddr = order.shipping;
            const trackingNumbers = sAddr?.tracking_numbers || [];

            for (const trackingNumber of trackingNumbers) {
                // do something with tracking number here.
            }

            // Here's how to access the shipping information. Do something with the variables.
            const sfname = order.shipping?.first_name;
            const slname = order.shipping?.last_name;
            const saddress1 = order.shipping?.address1;
            const saddress2 = order.shipping?.address2;
            const scity = order.shipping?.city;
            const sregion = order.shipping?.state_region;
            const sccode = order.shipping?.country_code;
            const spcode = order.shipping?.postal_code;
            const sdayphone = order.shipping?.day_phone;
            const shippingMethod = order.shipping?.shipping_method;

            // Here's how to access the billing information. Do something with the variables.
            const billingAddress1 = order.billing?.address1;
            const billingAddress2 = order.billing?.address2;
            const billingCity = order.billing?.city;
            const billingStateRegion = order.billing?.state_region;
            const billingCountryCode = order.billing?.country_code;
            const billingPostalCode = order.billing?.postal_code;
            const email = order.billing?.email; // email is located on the billing object.

            // here is how to access the items
            const items = order.items || [];
            for (const item of items) {
                const qty = item.quantity;
                const itemId = item.merchant_item_id;
                const description = item.description;
                const cost = item.cost?.localized;
                const costFormatted = item.cost?.localized_formatted; // cost with symbols.
            }
        }

        // this could get verbose depending on the size of your batch ...
        for (const order of orders) {
            console.log(JSON.stringify(order, null, 2));
        }
    } catch (error) {
        console.error('Error fetching orders batch:', error);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_batch** | [**OrderQueryBatch**](OrderQueryBatch.md)| Order batch | 
 **_expand** | **String**| The object expansion to perform on the result. | [optional] 

### Return type

[**OrdersResponse**](OrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOrdersByQuery

> OrdersResponse getOrdersByQuery(order_query, opts)

Retrieve orders by query

Retrieves a group of orders from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the orders returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
import {DateTime} from 'luxon';
import {orderApi} from '../api.js';

/**
 * This example illustrates how to query the OrderQuery object to select a range of records. It uses a subroutine
 * to aggregate the records that span multiple API calls. This example illustrates a work-around to selecting
 * all rejected orders. Because the UltraCart SDK does not have a way to query orders based on whether they
 * were rejected, we can instead query based on the rejected_dts, which is null if the order is not rejected.
 * So we will simply use a large time frame to ensure we query all rejections.
 */
export class GetOrdersByQuery {
    /**
     * Execute the order query and retrieve orders
     */
    static async execute() {
        const orders = [];

        let iteration = 1;
        let offset = 0;
        const limit = 200;
        let moreRecordsToFetch = true;

        while (moreRecordsToFetch) {
            console.log(`executing iteration ${iteration}<br>`);
            const chunkOfOrders = await this.getOrderChunk(offset, limit);
            orders.push(...chunkOfOrders);
            offset = offset + limit;
            moreRecordsToFetch = chunkOfOrders.length === limit;
            iteration++;
        }

        orders.forEach(order => {
            console.log(JSON.stringify(order, null, 2));
        });
    }

    /**
     * Retrieve a chunk of orders based on query parameters
     * @param offset - The offset for pagination
     * @param limit - The number of records to retrieve
     * @returns A promise resolving to a list of orders
     */
    static async getOrderChunk(offset, limit) {
        const expansion = "item,summary,billing,shipping,shipping.tracking_number_details";
        // see www.ultracart.com/api/ for all the expansion fields available (this list below may become stale)
        /*
        Possible Order Expansions:
        affiliate           affiliate.ledger                    auto_order
        billing             channel_partner                     checkout
        coupon              customer_profile                    digital_order
        edi                 fraud_score                         gift
        gift_certificate    internal                            item
        linked_shipment     marketing                           payment
        payment.transaction quote                               salesforce
        shipping            shipping.tracking_number_details    summary
        taxes
        */

        const query = {};
        // Uncomment the next two lines to retrieve a single order. But there are simpler methods to do that.
        // const orderId = "DEMO-0009104390";
        // query.orderId = orderId;

        const beginDts = DateTime.now().minus({days: 2000}).toFormat("yyyy-MM-dd") + "T00:00:00+00:00"; // yes, that 2,000 days.
        const endDts = DateTime.now().toFormat("yyyy-MM-dd") + "T00:00:00+00:00";
        console.error(beginDts);
        console.error(endDts);

        query.refund_date_begin = beginDts;
        query.refund_date_end = endDts;

        const apiResponse = await new Promise((resolve, reject) => {
            orderApi.getOrdersByQuery(
                query,
                {
                    _limit: limit,
                    _offset: offset,
                    _expand: expansion
                }
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        return apiResponse.orders ?? [];
    }
}

// Example usage
// GetOrdersByQuery.execute().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_query** | [**OrderQuery**](OrderQuery.md)| Order query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the orders.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 
 **_expand** | **String**| The object expansion to perform on the result. | [optional] 

### Return type

[**OrdersResponse**](OrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## heldOrderAddItemsAndRelease

> OrderResponse heldOrderAddItemsAndRelease(order_id, add_items_and_release_request, opts)

Add items and release a held order

This method adds items to an order in the hold stage and releases it 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to release. | 
 **add_items_and_release_request** | [**OrderAddItemsAndReleaseRequest**](OrderAddItemsAndReleaseRequest.md)| Add items and release request | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## heldOrderRelease

> OrderResponse heldOrderRelease(order_id, opts)

Release a held order

This method releases an order from the hold stage 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to release. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertOrder

> OrderResponse insertOrder(order, opts)

Insert an order

Inserts a new order on the UltraCart account.  This is probably NOT the method you want.  This is for channel orders.  For regular orders the customer is entering, use the CheckoutApi.  It has many, many more features, checks, and validations. 


### Example

```javascript
/*
 * Please do not use OrderApi.insertOrder()
 * This method was provided in the first release of our REST API.
 * It was replaced with our ChannelPartnerApi.importChannelPartnerOrder()
 *
 * Here are your options:
 * If you need to add regular orders that still require payment processing, use the CheckoutApi.
 *    The CheckoutApi has fantastic support for payment processing.
 *
 * If you need to add channel partner orders (eBay, Amazon, your call center, etc), use the ChannelPartnerApi.
 *    The ChannelPartnerApi has appropriate support for processing such orders.
 *
 * We support our entire API forever, so this method remains active.  But, we do not provide any samples for it.
 * You may use it, but we believe it will require extra time and effort and possibly much frustration.
 *
 * Reminder: The ONLY way to provide credit card numbers and cvv numbers to the UltraCart system is through
 * hosted fields.
 * See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377775/UltraCart+Hosted+Credit+Card+Fields
 * See: https://github.com/UltraCart/sdk_samples/blob/master/hosted_fields/hosted_fields.html
 */
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**Order**](Order.md)| Order to insert | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## isRefundableOrder

> OrderRefundableResponse isRefundableOrder(order_id)

Determine if an order can be refunded

Determine if an order can be refunded based upon payment method and age 


### Example

```javascript
import { orderApi } from '../api.js';

/**
 * isRefundable queries the UltraCart system whether an order is refundable or not.
 * In addition to a simple boolean response, UltraCart also returns back any reasons why
 * an order is not refundable.
 * Finally, the response also contains any refund or return reasons configured on the account in the event
 * that this merchant account is configured to require a reason for a return or refund.
 */
export class IsRefundableOrder {
    /**
     * Execute the refundable order check
     */
    static async execute() {
        const orderId = "DEMO-0009104976";

        try {
            const refundableResponse = await new Promise((resolve, reject) => {
                orderApi.isRefundableOrder(orderId, function(error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            console.log(`Is Refundable: ${refundableResponse.refundable}`);

            // the response contains dropdown values and additional information.  It's much more than a true/false flag.
            console.log("API Response:");
            console.log(JSON.stringify(refundableResponse, null, 2));
        } catch (error) {
            console.error("Error checking refundable status:", error);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to check for refundable order. | 

### Return type

[**OrderRefundableResponse**](OrderRefundableResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## processPayment

> OrderProcessPaymentResponse processPayment(order_id, process_payment_request)

Process payment

Process payment on order 


### Example

```javascript
import {orderApi} from '../api.js';

class ProcessPayment {
    /*
     * OrderApi.processPayment() was designed to charge a customer for an order. It was created to work in tandem with
     * duplicateOrder(), which does not accomplish payment on its own. The use-case for this method is to
     * duplicate a customer's order and then charge them for it. duplicateOrder() does not charge the customer again,
     * which is why processPayment() exists.
     *
     * These are the steps for cloning an existing order and charging the customer for it.
     * 1. duplicateOrder
     * 2. updateOrder (if you wish to change any part of it)
     * 3. processPayment to charge the customer.
     *
     * As a reminder, if you wish to create a new order from scratch, use the CheckoutApi or ChannelPartnerApi.
     * The OrderApi is for managing existing orders.
     */
    static async execute() {
        const expansion = "items";   // for this example, we're going to change the items after we duplicate the order, so
                                     // the only expansion properties we need are the items.
                                     // See: https://www.ultracart.com/api/  for a list of all expansions.

        // Step 1. Duplicate the order
        const orderIdToDuplicate = "DEMO-0009104436";
        const apiResponse = await new Promise((resolve, reject) => {
            orderApi.duplicateOrder(
                orderIdToDuplicate, {
                    _expand: expansion
                }, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });
        const newOrder = apiResponse.order;

        if (!newOrder) {
            throw new Error("Order duplication failed");
        }

        // Step 2. Update the items. I will create a new items list and assign it to the order to remove the old ones completely.
        const items = [];
        const item = {
            merchant_item_id: "simple_teapot",
            quantity: 1,
            description: "A lovely teapot",
            distribution_center_code: "DFLT", // where is this item shipping out of?

            cost: {
                currency_code: "USD",
                value: 9.99
            },

            weight: {
                uom: "OZ",
                value: 6
            }
        };

        items.push(item);
        newOrder.items = items;
        const updateResponse = await new Promise((resolve, reject) => {
            orderApi.updateOrder(
                newOrder.order_id,
                newOrder,
                {
                    _expand: expansion
                }, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        const updatedOrder = updateResponse.order;

        // Step 3. process the payment.
        // the request object below takes two optional arguments.
        // The first is an amount if you wish to bill for an amount different from the order.
        // We do not bill differently in this example.
        // The second is card_verification_number_token, which is a token you can create by using our hosted fields to
        // upload a CVV value. This will create a token you may use here. However, most merchants using the duplicate
        // order method will be setting up an auto order for a customer. Those will not make use of the CVV, so we're
        // not including it here. That is why the request object below is does not have any values set.
        // For more info on hosted fields:
        // See: https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377775/UltraCart+Hosted+Credit+Card+Fields
        // See: https://github.com/UltraCart/sdk_samples/blob/master/hosted_fields/hosted_fields.html

        const processPaymentRequest = {};
        const paymentResponse = await new Promise((resolve, reject) => {
            orderApi.processPayment(
                newOrder.order_id,
                processPaymentRequest
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });
        const transactionDetails = paymentResponse.payment_transaction; // do whatever you wish with this.

        console.log("New Order (after updated items):");
        this.displayOrderInfo(updatedOrder);
        console.log("\nPayment Response:");
        this.displayPaymentResponse(paymentResponse);
    }

    static displayOrderInfo(order) {
        if (!order) {
            console.log("No order information available");
            return;
        }

        console.log(`Order ID: ${order.order_id}`);
        console.log(`Total: ${order.summary?.total?.value} ${order.summary?.total?.currency_code}`);
        console.log("Items:");

        order.items?.forEach(item => {
            console.log(`  - ${item.quantity}x ${item.description} (${item.merchant_item_id})`);
            console.log(`    Cost: ${item.cost?.value} ${item.cost?.currency_code}`);
        });
    }

    static displayPaymentResponse(response) {
        console.log(`Successfully Processed: ${response.success}`);

        if (response.payment_transaction) {
            console.log(`Transaction ID: ${response.payment_transaction.transaction_id}`);
            console.log(`Transaction Timestamp: ${response.payment_transaction.transaction_timestamp}`);
        }

        // here's the entire object:
        console.log(JSON.stringify(response, null, 2));

        if (response.error) {
            console.log(`Error: ${response.error.user_message}`);
        }
    }
}

export default ProcessPayment;
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to process payment on | 
 **process_payment_request** | [**OrderProcessPaymentRequest**](OrderProcessPaymentRequest.md)| Process payment parameters | 

### Return type

[**OrderProcessPaymentResponse**](OrderProcessPaymentResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## refundOrder

> OrderResponse refundOrder(order_id, order, opts)

Refund an order

Perform a refund operation on an order and then update the order if successful.  All of the object properties ending in _refunded should be the TOTAL amount that should end up being refunded.  UltraCart will calculate the actual amount to refund based upon the prior refunds. 


### Example

```javascript
import {orderApi} from '../api.js';

/*
 * refundOrder() allows for both partial and complete refunds. Both are accomplished with the same steps.
 * 1) retrieve an order object using the SDK.
 * 2) input the refunded quantities for any or all items
 * 3) call refundOrder, passing in the modified object.
 * 4) To do a full refund, set all item refund quantities to their purchased quantities.
 *
 * This example will perform a full refund.
 */
export class RefundOrder {
    static async execute() {
        // for the refund, I only need the items expanded to adjust their quantities.
        // See: https://www.ultracart.com/api/ for a list of all expansions.
        const expand = "items";

        // Step 1. Retrieve the order
        const orderId = "DEMO-0009104436";
        const orderResponse = await new Promise((resolve, reject) => {
            orderApi.getOrder(orderId,
                {
                    _expand: expand
                }, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        const order = orderResponse.order;
        if (order) {
            for (const item of order.items) {
                item.quantity_refunded = item.quantity;
            }

            const rejectAfterRefund = false;
            const skipCustomerNotification = true;
            const cancelAssociatedAutoOrders = true; // does not matter for this sample. the order is not a recurring order.
            const considerManualRefundDoneExternally = false; // no, I want an actual refund done through my gateway
            const reverseAffiliateTransactions = true; // can't let my affiliates get money on a refunded order. bad business.
            const issueStoreCredit = false;
            const autoCancelReason = undefined;

            const apiResponse = await new Promise((resolve, reject) => {
                orderApi.refundOrder(
                    orderId,
                    order,
                    {
                        reject_after_refund: rejectAfterRefund,
                        skip_customer_notification: skipCustomerNotification,
                        auto_order_cancel: cancelAssociatedAutoOrders,
                        manual_refund: considerManualRefundDoneExternally,
                        reverse_affiliate_transactions: reverseAffiliateTransactions,
                        issue_store_credit: issueStoreCredit,
                        auto_order_cancel_reason: autoCancelReason,
                        _expand: expand
                    }, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
            });

            const refundedOrder = apiResponse.order;

            // examine the subtotals and ensure everything was refunded correctly.
            console.log(JSON.stringify(refundedOrder, null, 2));
        }
    }
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
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## replaceOrderItemMerchantItemId

> OrderResponse replaceOrderItemMerchantItemId(order_id, replace_order_item_id_request, opts)

Replaces an order item id

Replaces a single order item id with another merchant_item_id, leaving all other attributes and properties unchanged.  A custom method requested by a merchant to allow for item id updates due to shipping errors.  It is doubtful you will ever need this method.  The expansion variable affects the returned order object. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to update. | 
 **replace_order_item_id_request** | [**ReplaceOrderItemIdRequest**](ReplaceOrderItemIdRequest.md)| Replacement Request | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## replacement

> OrderReplacementResponse replacement(order_id, replacement)

Replacement order

Create a replacement order based upon a previous order 


### Example

```javascript
import {orderApi} from '../api.js';

/*
 * The use-case for replacement() is to create another order for a customer to replace the items of the existing
 * order. For example, a merchant is selling perishable goods and the goods arrive late, spoiled. replacement()
 * helps to create another order to send more goods to the customer.
 *
 * You MUST supply the items you desire in the replacement order. This is done with the OrderReplacement.items field.
 * All options are displayed below including whether to charge the customer for this replacement order or not.
 */
export class Replacement {
    static async execute() {
        // Step 1. Replace the order
        const orderIdToReplace = "DEMO-0009104436";
        const replacementOptions = {
            original_order_id: orderIdToReplace,
            items: [
                {
                    merchant_item_id: "TSHIRT",
                    quantity: 1,
                    // arbitraryUnitCost: 9.99 // Commented out as in original
                },
                {
                    merchant_item_id: "BONE",
                    quantity: 2
                }
            ],
            // shippingMethod: "FedEx: Ground", // Commented out as in original
            immediate_charge: true,
            skip_payment: true,
            free: true,
            custom_field1: "Whatever",
            custom_field4: "More Whatever",
            additional_merchant_notes_new_order: "Replacement order for spoiled ice cream",
            additional_merchant_notes_original_order: "This order was replaced."
        };

        const apiResponse = await new Promise((resolve, reject) => {
            orderApi.replacement(
                orderIdToReplace,
                replacementOptions
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
        });

        console.log(`Replacement Order: ${apiResponse.orderId}`);
        console.log(`Success flag: ${apiResponse.successful}`);
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to generate a replacement for. | 
 **replacement** | [**OrderReplacement**](OrderReplacement.md)| Replacement order details | 

### Return type

[**OrderReplacementResponse**](OrderReplacementResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resendReceipt

> BaseResponse resendReceipt(order_id)

Resend receipt

Resend the receipt for an order on the UltraCart account. 


### Example

```javascript
import {orderApi} from '../api.js';

/*
 * OrderApi.resendReceipt() will resend (email) a receipt to a customer.
 */
export class ResendReceipt {
    static async execute() {
        const orderId = "DEMO-0009104436";

        const apiResponse = await new Promise((resolve, reject) => {
            orderApi.resendReceipt(
                orderId
                , function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
        });

        if (apiResponse.error !== undefined) {
            console.error(apiResponse.error.developer_message);
            console.error(apiResponse.error.user_message);
            console.log("Order receipt could not be resent. See error log.");
            return;
        }

        if (apiResponse.success) {
            console.log("Receipt was resent.");
        } else {
            console.log("Failed to resend receipt.");
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to resend the receipt for. | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resendShipmentConfirmation

> BaseResponse resendShipmentConfirmation(order_id)

Resend shipment confirmation

Resend shipment confirmation for an order on the UltraCart account. 


### Example

```javascript
import { orderApi } from '../api.js';

/*
 * OrderApi.resendShipmentConfirmation() will resend (email) a shipment confirmation to a customer.
 */
export class ResendShipmentConfirmation {
    static async execute() {
        const orderId = "DEMO-0009104436";

        const apiResponse = await new Promise((resolve, reject) => {
            orderApi.resendShipmentConfirmation(
                orderId
            , function (error, data, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data, response);
                }
            });
        });

        if (apiResponse.error !== undefined) {
            console.error(apiResponse.error.developer_message);
            console.error(apiResponse.error.user_message);
            console.log("Order could not be adjusted. See error log.");
            return;
        }

        if (apiResponse.success) {
            console.log("Shipment confirmation was resent.");
        } else {
            console.log("Failed to resend shipment confirmation.");
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to resend the shipment notification for. | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unblockRefundOnOrder

> unblockRefundOnOrder(order_id)

Remove a refund block on an order

Removes a refund block on an order to prevent a user from performing a refund. 


### Example

```javascript
import { orderApi } from '../api.js';

/**
 * unblockRefundOnOrder removes an order property that is considered when a refund request is made.
 * If the property is present, the refund is denied.  Being an order property allows for querying
 * upon it within BigQuery for audit purposes.
 */
export class UnblockRefundOnOrder {
    /**
     * Removes a property to prevent an order from being refunded.
     */
    static async execute() {
        const orderId = "DEMO-0009105222";


        try {
            await new Promise((resolve, reject) => {
                orderApi.unblockRefundOnOrder(orderId, function(error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            console.log("orderApi.unblockRefundOnOrder executed successfully.");
            // Note: This method returns back a 204 No Content.

        } catch (error) {
            console.error("Error removing block refund on an order.:", error);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to unblock a refund on. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAccountsReceivableRetryConfig

> BaseResponse updateAccountsReceivableRetryConfig(retry_config)

Update A/R Retry Configuration

Update A/R Retry Configuration.  This is primarily an internal API call.  It is doubtful you would ever need to use it. 


### Example

```javascript
// This is primarily an internal API call.  It is doubtful you would ever need to use it.
// We do not provide an example for this call.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **retry_config** | [**AccountsReceivableRetryConfig**](AccountsReceivableRetryConfig.md)| AccountsReceivableRetryConfig object | 

### Return type

[**BaseResponse**](BaseResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateOrder

> OrderResponse updateOrder(order_id, order, opts)

Update an order

Update a new order on the UltraCart account.  This is probably NOT the method you want.  It is rare to update a completed order.  This will not trigger charges, emails, or any other automation. 


### Example

```javascript
import {orderApi} from '../api.js';

export class UpdateOrder {
    static async execute() {
        const expansion = "checkout"; // see the getOrder sample for expansion discussion

        const orderId = "DEMO-0009104976";
        const orderOrUndefined = await new Promise((resolve, reject) => {
            orderApi.getOrder(
                orderId,
                {_expand: expansion}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        if (orderOrUndefined.order !== undefined) {
            const order = orderOrUndefined.order;

            console.log("Original Order follows:");
            console.log(JSON.stringify(order, null, 2));

            // TODO: do some updates to the order.
            // For example:
            // order.billingAddress.firstName = "John";
            // order.billingAddress.lastName = "Smith";

            const apiResponse = await new Promise((resolve, reject) => {
                orderApi.updateOrder(
                    orderId,
                    order,
                    {_expand: expansion}, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
            });

            if (apiResponse.error !== undefined) {
                console.error(apiResponse.error.developer_message);
                console.error(apiResponse.error.user_message);
                return;
            }

            const updatedOrder = apiResponse.order;

            console.log("Updated Order follows:");
            console.log(JSON.stringify(updatedOrder, null, 2));
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The order id to update. | 
 **order** | [**Order**](Order.md)| Order to update | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**OrderResponse**](OrderResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## validateOrder

> OrderValidationResponse validateOrder(validation_request)

Validate

Validate the order for errors.  Specific checks can be passed to fine tune what is validated. Read and write permissions are required because the validate method may fix obvious address issues automatically which require update permission.This rest call makes use of the built-in translation of rest objects to UltraCart internal objects which also contains a multitude of validation checks that cannot be trapped.  Therefore any time this call is made, you should also trap api exceptions and examine their content because it may contain validation issues.  So check the response object and trap any exceptions. 


### Example

```javascript
import {orderApi} from '../api.js';

export class ValidateOrder {
    /*
        validateOrder may be used to check for any and all validation errors that may result from an insertOrder
        or updateOrder call. Because those method are built on our existing infrastructure, some validation
        errors may not bubble up to the rest api call and instead be returned as generic "something went wrong" errors.
        This call will return detail validation issues needing correction.

        Within the ValidationRequest, you may leave the 'checks' array null to check for everything, or pass
        an array of the specific checks you desire. Here is a list of the checks:

        "Billing Address Provided"
        "Billing Destination Restriction"
        "Billing Phone Numbers Provided"
        "Billing State Abbreviation Valid"
        "Billing Validate City State Zip"
        "Email provided if required"
        "Gift Message Length"
        "Item Quantity Valid"
        "Items Present"
        "Merchant Specific Item Relationships"
        "One per customer violations"
        "Referral Code Provided"
        "Shipping Address Provided"
        "Shipping Destination Restriction"
        "Shipping Method Ignore Invalid"
        "Shipping Method Provided"
        "Shipping State Abbreviation Valid"
        "Shipping Validate City State Zip"
        "Special Instructions Length"
     */
    static async execute() {
        const expansion = "checkout"; // see the getOrder sample for expansion discussion

        const orderId = "DEMO-0009104976";
        const orderOrUndefined = await new Promise((resolve, reject) => {
            orderApi.getOrder(
                orderId,
                {_expand: expansion}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });

        if (orderOrUndefined.order !== undefined) {
            const order = orderOrUndefined.order;

            console.log(JSON.stringify(order, null, 2));

            // TODO: do some updates to the order.
            const validationRequest = {
                order: order,
                checks: undefined // leaving this undefined to perform all validations.
            };

            const apiResponse = await new Promise((resolve, reject) => {
                orderApi.validateOrder(
                    validationRequest
                    , function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
            });

            console.log("Validation errors:");
            if (apiResponse.errors !== undefined) {
                for (const error of apiResponse.errors) {
                    console.log(`- ${error}`);
                }
            } else {
                console.log("No validation errors found.");
            }

            console.log("\nValidation messages:");
            if (apiResponse.messages !== undefined) {
                for (const message of apiResponse.messages) {
                    console.log(`- ${message}`);
                }
            } else {
                console.log("No validation messages found.");
            }
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validation_request** | [**OrderValidationRequest**](OrderValidationRequest.md)| Validation request | 

### Return type

[**OrderValidationResponse**](OrderValidationResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

