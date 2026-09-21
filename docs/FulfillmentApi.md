# UltraCartRestApiV2.FulfillmentApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acknowledgeOrders**](FulfillmentApi.md#acknowledgeOrders) | **PUT** /fulfillment/distribution_centers/{distribution_center_code}/acknowledgements | Acknowledge receipt of orders.
[**generatePackingSlip**](FulfillmentApi.md#generatePackingSlip) | **GET** /fulfillment/distribution_centers/{distribution_center_code}/orders/{order_id} | Generate a packing slip for this order for the given distribution center.
[**getDistributionCenterOrders**](FulfillmentApi.md#getDistributionCenterOrders) | **GET** /fulfillment/distribution_centers/{distribution_center_code}/orders | Retrieve orders queued up for this distribution center.
[**getDistributionCenters**](FulfillmentApi.md#getDistributionCenters) | **GET** /fulfillment/distribution_centers | Retrieve distribution centers
[**shipOrders**](FulfillmentApi.md#shipOrders) | **POST** /fulfillment/distribution_centers/{distribution_center_code}/shipments | Mark orders as shipped
[**updateInventory**](FulfillmentApi.md#updateInventory) | **POST** /fulfillment/distribution_centers/{distribution_center_code}/inventory | Update inventory



## acknowledgeOrders

> acknowledgeOrders(distribution_center_code, orderIds)

Acknowledge receipt of orders.

Acknowledge receipt of orders so that they are removed from the fulfillment queue.  This method must be called after receiving and order (via webhook) or retrieving (via retrieve orders method). 


### Example

```javascript
import { fulfillmentApi } from '../api.js';

export class AcknowledgeOrders {
    /**
     * acknowledgeOrders informs UltraCart that you (the fulfillment center) have received an order and have queued it for
     * shipping.  This method is NOT used to notify an order has shipped, only that it is going to be shipped at some
     * point in the future.
     *
     * This method should be called by a fulfillment center after receiving an order either by 1) getDistributionCenterOrders
     * or 2) webhook.  Webhooks are the most efficient means for receiving orders, but if your fulfillment center lacks
     * the ability to consume webhooks, polling by getDistributionCenterOrders is an alternate means.
     *
     * This method is important for notifying UltraCart that a fulfillment center has the action on an order.  Until this
     * call is made, UltraCart will continue to notify a fulfillment center of an order either by 1) subsequent webhooks or
     * 2) continue to include an order in subsequent getDistributionCenterOrders.
     *
     * You will need the distribution center (DC) code.  UltraCart allows for multiple DC and the code is a
     * unique short string you assign to a DC as an easy mnemonic.
     *
     * For more information about UltraCart distribution centers, please see:
     * https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377114/Distribution+Center
     *
     * If you do not know your DC code, query a list of all DC and print them out.
     * $result = $fulfillment_api->getDistributionCenters();
     * print_r($result);
     *
     * A successful call will receive back a status code 204 (No Content).
     *
     * Possible Errors:
     * More than 100 order ids provided -> "order_ids can not contain more than 100 records at a time"
     */
    static async Execute() {
        const distributionCenterCode = "RAMI";

        const orderIds = [
            "DEMO-12345",
            "DEMO-12346",
            "DEMO-12347",
            "DEMO-12348",
            "DEMO-12349"
        ];

        try {
            // limit is 100 acknowledgements at a time.
            await new Promise((resolve, reject) => {
                fulfillmentApi.acknowledgeOrders(distributionCenterCode, orderIds, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            console.log("done");
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
 **distribution_center_code** | **String**| Distribution center code | 
 **orderIds** | [**[String]**](String.md)| Orders to acknowledge receipt of (limit 100) | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generatePackingSlip

> OrderPackingSlipResponse generatePackingSlip(distribution_center_code, order_id)

Generate a packing slip for this order for the given distribution center.

The packing slip PDF that is returned is base 64 encoded 


### Example

```javascript
import { fulfillmentApi } from '../api.js';
import * as fs from 'fs';

export class GeneratePackingSlip {
    /**
     * generatePackingSlip accepts a distribution center code and order_id and returns back a base64 encoded byte array pdf.
     * Both the dc code and order_id are needed because an order may have multiple items shipping via different DCs.
     *
     * You will need the distribution center (DC) code. UltraCart allows for multiple DC and the code is a
     * unique short string you assign to a DC as an easy mnemonic.
     *
     * For more information about UltraCart distribution centers, please see:
     * https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377114/Distribution+Center
     *
     * If you do not know your DC code, query a list of all DC and print them out.
     * $result = $fulfillment_api->getDistributionCenters();
     * print_r($result);
     */
    static async Execute() {
        const distributionCenterCode = "RAMI";
        const orderId = "DEMO-12345";

        try {
            // limit is 500 inventory updates at a time. batch them if you're going large.
            const apiResponse = await new Promise((resolve, reject) => {
                fulfillmentApi.generatePackingSlip(distributionCenterCode, orderId, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Decode base64 PDF
            const base64Pdf = apiResponse.pdfBase64 || '';
            const decodedPdf = Buffer.from(base64Pdf, 'base64');

            // Write PDF to file
            fs.writeFileSync('packing_slip.pdf', decodedPdf);

            console.log("done");
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
 **distribution_center_code** | **String**| Distribution center code | 
 **order_id** | **String**| Order ID | 

### Return type

[**OrderPackingSlipResponse**](OrderPackingSlipResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDistributionCenterOrders

> OrdersResponse getDistributionCenterOrders(distribution_center_code)

Retrieve orders queued up for this distribution center.

Retrieves up to 100 orders that are queued up in this distribution center.  You must acknowledge them before additional new orders will be returned.  There is NO record chunking.  You&#39;ll get the same 100 records again and again until you acknowledge orders.  The orders that are returned contain only items for this distribution center and are by default completely expanded with billing, channel_partner, checkout, coupons, customer_profile, edi, gift, gift_certificate, internal, items, payment, shipping, summary, taxes. 


### Example

```javascript
import { fulfillmentApi } from '../api.js';

export class GetDistributionCenterOrders {
    /*
        getDistributionCenterOrders accepts a distribution center code and returns back up to 100 orders that need shipping.
        There is NO pagination with this method call. Once you receive the orders, you should insert them into your
        system, and acknowledge them via the acknowledgeOrders call. After you acknowledge the orders, subsequent calls
        to getDistributionCenterOrders will return another batch of 100 orders.

        The orders that are returned contain only items for THIS distribution center and are by default completely expanded
        with billing, channel_partner, checkout, coupons, customer_profile, edi, gift, gift_certificate, internal,
        items, payment, shipping, summary, taxes

        You will need the distribution center (DC) code. UltraCart allows for multiple DC and the code is a
        unique short string you assign to a DC as an easy mnemonic.

        For more information about UltraCart distribution centers, please see:
        https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377114/Distribution+Center

        If you do not know your DC code, query a list of all DC and print them out.
        DistributionCentersResponse result = fulfillmentApi.GetDistributionCenters();
        Console.WriteLine(result);
    */
    static async Execute() {
        try {
            const acknowledgedOrders = [];
            const distributionCenterCode = "RAMI";

            const result = await new Promise((resolve, reject) => {
                fulfillmentApi.getDistributionCenterOrders(distributionCenterCode, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            const orders = result.orders || [];

            // Process each order
            for (const order of orders) {
                console.log(order);
                // TODO: do something useful with this order, like adding it to your shipping queue.
                if (order.order_id) {
                    acknowledgedOrders.push(order.order_id);
                }
            }

            // TODO: once you've securely and completely received it into your system, acknowledge the order.
            if (acknowledgedOrders.length > 0) {
                await new Promise((resolve, reject) => {
                    fulfillmentApi.acknowledgeOrders(distributionCenterCode, acknowledgedOrders, function (error, data, response) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data, response);
                        }
                    });
                });
            }

            // After acknowledging orders, you should call getDistributionCenterOrders again until you receive zero orders to ship.
            console.log("done");
        } catch (e) {
            // update inventory failed. examine the reason.
            console.error(`Exception when calling FulfillmentApi.GetDistributionCenterOrders: ${e instanceof Error ? e.message : e}`);
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution_center_code** | **String**| Distribution center code | 

### Return type

[**OrdersResponse**](OrdersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDistributionCenters

> DistributionCentersResponse getDistributionCenters()

Retrieve distribution centers

Retrieves the distribution centers that this user has access to. 


### Example

```javascript
import { fulfillmentApi } from '../api.js';

export class GetDistributionCenters {
    /*
        This method returns back a list of all distribution centers configured for a merchant.

        You will need the distribution center (DC) code for most operations.
        UltraCart allows for multiple DC and the code is a unique short string you assign to a DC as an easy mnemonic.
        This method call is an easy way to determine what a DC code is for a particular distribution center.

        For more information about UltraCart distribution centers, please see:
        https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377114/Distribution+Center
    */
    static async Execute() {
        try {
            const result = await new Promise((resolve, reject) => {
                fulfillmentApi.getDistributionCenters({}, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            // Safely handle potential undefined distributionCenters
            const distributionCenters = result.distribution_centers || [];

            // Print each distribution center
            distributionCenters.forEach(dc => {
                console.log(JSON.stringify(dc, null, 2));
            });

            console.log("done");
        } catch (e) {
            // update inventory failed. examine the reason.
            console.error(`Exception when calling FulfillmentApi.GetDistributionCenters: ${e instanceof Error ? e.message : e}`);
            process.exit(1);
        }
    }
}
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**DistributionCentersResponse**](DistributionCentersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## shipOrders

> shipOrders(distribution_center_code, shipments)

Mark orders as shipped

Store the tracking information and mark the order shipped for this distribution center. 


### Example

```javascript
import { fulfillmentApi } from '../api.js';

export class ShipOrders {
    /*
        shipOrders informs UltraCart that you (the fulfillment center) have shipped an order and allows you to provide
        UltraCart with tracking information.

        You will need the distribution center (DC) code.  UltraCart allows for multiple DC and the code is a
        unique short string you assign to a DC as an easy mnemonic.

        For more information about UltraCart distribution centers, please see:
        https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377114/Distribution+Center

        If you do not know your DC code, query a list of all DC and print them out.
        DistributionCentersResponse result = fulfillmentApi.GetDistributionCenters();
        Console.WriteLine(result);

        A successful call will receive back a status code 204 (No Content).

        Possible Errors:
        More than 100 order ids provided -> "shipments can not contain more than 100 records at a time"
    */
    static async Execute() {
        const distributionCenterCode = "RAMI";

        // Create shipment
        const shipment = {
            order_id: "DEMO-12345",
            tracking_numbers: ["UPS-1234567890", "USPS-BLAH-BLAH-BLAH"], // this order had two boxes.
            shipping_cost: 16.99, // the actual cost to ship this order
            fulfillment_fee: 8.99, // this fulfillment center is kinda pricey.
            package_cost: 11.99 // 11.99?  we use only the finest packaging.
        };

        const shipments = [shipment]; // up to 100 shipments per call

        try {
            // limit is 100 shipments updates at a time.
            await new Promise((resolve, reject) => {
                fulfillmentApi.shipOrders(distributionCenterCode, shipments, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            console.log("done");
        }
        catch (e) {
            // update inventory failed. examine the reason.
            console.error(`Exception when calling FulfillmentApi.ShipOrders: ${e instanceof Error ? e.message : e}`);
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution_center_code** | **String**| Distribution center code | 
 **shipments** | [**[FulfillmentShipment]**](FulfillmentShipment.md)| Orders to mark shipped | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateInventory

> updateInventory(distribution_center_code, inventories)

Update inventory

Update the inventory for items associated with this distribution center 


### Example

```javascript
import { fulfillmentApi } from '../api.js';

export class UpdateInventory {
    /*
        updateInventory is a simple means of updating UltraCart inventory for one or more items (500 max per call)
        You will need the distribution center (DC) code.  UltraCart allows for multiple DC and the code is a
        unique short string you assign to a DC as an easy mnemonic.

        For more information about UltraCart distribution centers, please see:
        https://ultracart.atlassian.net/wiki/spaces/ucdoc/pages/1377114/Distribution+Center

        If you do not know your DC code, query a list of all DC and print them out.
        DistributionCentersResponse result = fulfillmentApi.GetDistributionCenters();
        Console.WriteLine(result);

        Possible Errors:
        More than 500 items provided -> "inventories can not contain more than 500 records at a time"
    */
    static async Execute() {
        const distributionCenterCode = "RAMI";

        const sku = "9780982021361";
        const quantity = 9;

        // Create inventory update
        const firstInventory = {
            itemId: sku,
            quantity: quantity
        };

        // For this example, we're only updating one item
        const inventoryUpdates = [firstInventory];

        console.log(JSON.stringify(inventoryUpdates, null, 2));

        try {
            // limit is 500 inventory updates at a time. batch them if you're going large.
            await new Promise((resolve, reject) => {
                fulfillmentApi.updateInventory(distributionCenterCode, inventoryUpdates, function (error, data, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data, response);
                    }
                });
            });

            console.log("done");
        }
        catch (e) {
            // update inventory failed. examine the reason.
            console.error(`Exception when calling FulfillmentApi.UpdateInventory: ${e instanceof Error ? e.message : e}`);
            process.exit(1);
        }
    }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution_center_code** | **String**| Distribution center code | 
 **inventories** | [**[FulfillmentInventory]**](FulfillmentInventory.md)| Inventory updates (limit 500) | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

