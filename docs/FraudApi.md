# UltraCartRestApiV2.FraudApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**declineEmail**](FraudApi.md#declineEmail) | **POST** /fraud/decline_email | Decline email during checkout fraud review
[**deleteFraudRule**](FraudApi.md#deleteFraudRule) | **DELETE** /fraud/rules/{fraud_rule_oid} | Delete a fraud rule
[**establishFraudRulesFromOrder**](FraudApi.md#establishFraudRulesFromOrder) | **POST** /fraud/rules/from_order | Establish fraud rules from an order
[**getFraudLookupValues**](FraudApi.md#getFraudLookupValues) | **GET** /fraud/lookup_values | Retrieve fraud rule lookup values
[**insertFraudRule**](FraudApi.md#insertFraudRule) | **POST** /fraud/rules | Insert a fraud rule
[**searchFraudRules**](FraudApi.md#searchFraudRules) | **POST** /fraud/rules/search | Search fraud rules



## declineEmail

> declineEmail(fraud_decline_emails_request)

Decline email during checkout fraud review

Adds one email address to the fraud decline list for this merchant account. 


### Example

```javascript
import { fraudApi } from "../api.js";

/**
 * declineEmail is a shortcut for telling UltraCart to decline orders from a specific email
 * address. It is the quick alternative to building a full "address email" fraud rule by hand.
 */
export async function declineEmail() {
  console.log(`--- ${declineEmail.name} ---`);

  const declineRequest = {
    email: "chargeback-charlie@example.com",
  };

  try {
    await new Promise((resolve, reject) => {
      fraudApi.declineEmail(declineRequest, function (error, data, response) {
        if (error) {
          reject(error);
        } else {
          resolve(data, response);
        }
      });
    });

    console.log(`Declined email: ${declineRequest.email}`);
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(error instanceof Error ? error.stack : error);
  }
}

// Optional: If you want to call the function
// declineEmail().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fraud_decline_emails_request** | [**FraudDeclineEmailRequest**](FraudDeclineEmailRequest.md)| Fraud decline emails request | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFraudRule

> deleteFraudRule(fraud_rule_oid)

Delete a fraud rule

Deletes a fraud rule for this merchant account. 


### Example

```javascript
import { fraudApi } from "../api.js";

/**
 * deleteFraudRule removes a fraud rule by its oid.
 *
 * To keep this sample self-contained it first inserts a throwaway rule, then deletes it using
 * the oid returned from the insert. In your own code you would already have the oid of the rule
 * you want to remove (for example from searchFraudRules).
 */
export async function deleteFraudRule() {
  console.log(`--- ${deleteFraudRule.name} ---`);

  try {
    // Insert a rule so we have something to delete.
    const rule = {
      rule_type: "credit card single transaction exceeds",
      amount_threshold: 2500.0,
      failure_action: "Flag For Review",
      auto_note: "Temporary rule created by the deleteFraudRule sample",
    };

    const insertResponse = await new Promise((resolve, reject) => {
      fraudApi.insertFraudRule(rule, function (error, data, response) {
        if (error) {
          reject(error);
        } else {
          resolve(data, response);
        }
      });
    });

    const fraudRuleOid = insertResponse.fraud_rule.fraud_rule_oid;
    console.log(`Inserted temporary rule, oid = ${fraudRuleOid}`);

    // Now delete it.
    await new Promise((resolve, reject) => {
      fraudApi.deleteFraudRule(fraudRuleOid, function (error, data, response) {
        if (error) {
          reject(error);
        } else {
          resolve(data, response);
        }
      });
    });

    console.log(`Deleted fraud rule oid = ${fraudRuleOid}`);
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(error instanceof Error ? error.stack : error);
  }
}

// Optional: If you want to call the function
// deleteFraudRule().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fraud_rule_oid** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## establishFraudRulesFromOrder

> FraudRulesResponse establishFraudRulesFromOrder(fraud_rule_from_order_request)

Establish fraud rules from an order

Creates one or more fraud rules for this merchant account derived from an existing order, mirroring the &#39;establish fraud filter&#39; action in the order processing screen. Select which filters to establish; all values are taken from the order. The IP rule is created against the order&#39;s /24 subnet (last octet masked). The credit card filter duplicates the order&#39;s stored card vault token, so no card number is sent through the API. Filters whose order data is missing (no stored card, no email, no usable IP, or no numeric street) are skipped and reported in the warning slot rather than failing the request. 


### Example

```javascript
import { fraudApi } from "../api.js";

/**
 * establishFraudRulesFromOrder is a shortcut that derives fraud rules from an existing order.
 * Point it at an order you have identified as fraudulent and tell it which attributes of that
 * order to turn into rules: the email, the credit card, the ip address, and/or the address.
 * It creates the matching rules and returns them. This is the fast way to "block everything
 * associated with this bad order" instead of building each rule by hand.
 *
 * Not every filter produces a rule; the order must actually have that attribute. For example an
 * order with no stored card data will not produce a credit card rule.
 */
export async function establishFraudRulesFromOrder() {
  console.log(`--- ${establishFraudRulesFromOrder.name} ---`);

  const request = {
    order_id: "DEMO-0009104434",
    establish_email_filter: true,
    establish_card_filter: true,
    establish_ip_filter: true,
    establish_address_filter: true,
    failure_action: "Flag For Review",
    auto_note: "Established from fraudulent order DEMO-0009104434",
  };

  try {
    const apiResponse = await new Promise((resolve, reject) => {
      fraudApi.establishFraudRulesFromOrder(request, function (error, data, response) {
        if (error) {
          reject(error);
        } else {
          resolve(data, response);
        }
      });
    });

    const fraudRules = apiResponse.fraud_rules || [];
    console.log(`Established ${fraudRules.length} rule(s) from the order:`);
    fraudRules.forEach((fraudRule) => {
      console.log(`  oid ${fraudRule.fraud_rule_oid} - ${fraudRule.rule_type} - ${fraudRule.auto_note || ''}`);
    });
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(error instanceof Error ? error.stack : error);
  }
}

// Optional: If you want to call the function
// establishFraudRulesFromOrder().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fraud_rule_from_order_request** | [**FraudRuleFromOrderRequest**](FraudRuleFromOrderRequest.md)| Fraud rule from order request | 

### Return type

[**FraudRulesResponse**](FraudRulesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFraudLookupValues

> FraudLookupValuesResponse getFraudLookupValues()

Retrieve fraud rule lookup values

Returns the dropdown values required to build valid fraud rule insert and search requests. Includes rule types, failure actions, user actions, IP range types, AVS match types, the merchant&#39;s rotating transaction gateways, screen branding themes, countries, and affiliates. 


### Example

```javascript
import { fraudApi } from "../api.js";

/**
 * getFraudLookupValues returns the lookup values used when building fraud rules:
 * the allowed countries, affiliates, ip range types, rule groups, and rule types.
 * Call this first when constructing a rule so you supply valid values.
 */
export async function getFraudLookupValues() {
  console.log(`--- ${getFraudLookupValues.name} ---`);

  try {
    const apiResponse = await new Promise((resolve, reject) => {
      fraudApi.getFraudLookupValues(function (error, data, response) {
        if (error) {
          reject(error);
        } else {
          resolve(data, response);
        }
      });
    });

    const lookupValues = apiResponse.fraud_lookup_values || {};
    console.log("Rule types:", lookupValues.rule_types);
    console.log("Rule groups:", lookupValues.rule_groups);
    console.log("IP range types:", lookupValues.ip_range_types);
    console.log("Countries:", lookupValues.countries);
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(error instanceof Error ? error.stack : error);
  }
}

// Optional: If you want to call the function
// getFraudLookupValues().catch(console.error);
```


### Parameters

This endpoint does not need any parameter.

### Return type

[**FraudLookupValuesResponse**](FraudLookupValuesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertFraudRule

> FraudRuleResponse insertFraudRule(fraud_rule_insert_request)

Insert a fraud rule

Creates a fraud rule for this merchant account. Field names in the request body are semantic (eg amount_threshold, email, ip_address). Call GET /v2/fraud/lookup_values for the list of valid rule_type, failure_action, and related dropdown values. The &#39;credit card matches&#39; rule type is not supported via REST. 


### Example

```javascript
import { fraudApi } from "../api.js";

/**
 * insertFraudRule creates a single fraud rule. Each rule has a rule_type (what it inspects),
 * a failure_action (what happens when it matches), and type-specific fields such as an amount
 * threshold, country code, ip address, or email.
 *
 * This sample has some fun and inserts several rules of different types in one run. Call
 * getFraudLookupValues.js to see every valid rule_type and the other lookup values.
 */
export async function insertFraudRule() {
  console.log(`--- ${insertFraudRule.name} ---`);

  // Build a handful of rules covering different rule types.
  const rules = [
    // 1. Decline any order placed with a known-bad email address.
    {
      rule_type: "address email",
      email: "chargeback-charlie@example.com",
      failure_action: "Decline Transaction",
      auto_note: "Known chargeback email - decline on sight",
    },
    // 2. Flag large single credit card transactions over $1,000 for manual review.
    {
      rule_type: "credit card single transaction exceeds",
      amount_threshold: 1000.0,
      failure_action: "Flag For Review",
      auto_note: "Large single transaction - review before shipping",
    },
    // 3. Decline orders that ship outside the United States.
    {
      rule_type: "address not in country",
      country_code: "US",
      failure_action: "Decline Transaction",
      auto_note: "Domestic shipping only",
    },
    // 4. Decline transactions originating from a specific bad IP address.
    {
      rule_type: "ip matches",
      ip_address: "203.0.113.66",
      ip_range_type: "address",
      failure_action: "Decline Transaction",
      auto_note: "Blocked IP address",
    },
    // 5. Flag prepaid credit cards for review.
    {
      rule_type: "credit card block prepaid",
      failure_action: "Flag For Review",
      auto_note: "Prepaid card - take a closer look",
    },
    // 6. Flag a customer IP making more than 10 transactions in a single day.
    {
      rule_type: "ip daily transaction count exceeds",
      count_threshold: 10,
      ip_range_type: "address",
      user_action: "Attempted",
      failure_action: "Flag For Review",
      auto_note: "IP velocity - more than 10 orders in a day",
    },
  ];

  try {
    for (const rule of rules) {
      const apiResponse = await new Promise((resolve, reject) => {
        fraudApi.insertFraudRule(rule, function (error, data, response) {
          if (error) {
            reject(error);
          } else {
            resolve(data, response);
          }
        });
      });

      const created = apiResponse.fraud_rule || {};
      console.log(`Inserted '${rule.rule_type}' rule, oid = ${created.fraud_rule_oid}`);
    }
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(error instanceof Error ? error.stack : error);
  }
}

// Optional: If you want to call the function
// insertFraudRule().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fraud_rule_insert_request** | [**FraudRuleInsertRequest**](FraudRuleInsertRequest.md)| Fraud rule insert request | 

### Return type

[**FraudRuleResponse**](FraudRuleResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchFraudRules

> FraudRulesResponse searchFraudRules(fraud_rule_search_request, opts)

Search fraud rules

Searches fraud rules for this merchant account using semantic filter fields. Pagination and sort are passed as query parameters (_limit, _offset, _sort). You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. Results are capped at 10,000 records by ElasticSearch and the warning slot indicates when that cap was hit. Use more selective filters in that case. 


### Example

```javascript
import { fraudApi } from "../api.js";

/**
 * searchFraudRules returns the fraud rules that match the supplied criteria. Every field on the
 * search request is optional; supply only the ones you want to filter on. Pagination and sort
 * are passed as options (_limit, _offset, _sort).
 *
 * This sample searches for every rule whose action is "Decline Transaction".
 */
export async function searchFraudRules() {
  console.log(`--- ${searchFraudRules.name} ---`);

  const searchRequest = {
    failure_action: "Decline Transaction",
  };

  const opts = {
    _limit: 200,
    _offset: 0,
  };

  try {
    const apiResponse = await new Promise((resolve, reject) => {
      fraudApi.searchFraudRules(searchRequest, opts, function (error, data, response) {
        if (error) {
          reject(error);
        } else {
          resolve(data, response);
        }
      });
    });

    const fraudRules = apiResponse.fraud_rules || [];
    console.log(`Found ${fraudRules.length} rule(s) with action 'Decline Transaction'`);
    fraudRules.forEach((fraudRule) => {
      console.log(`  oid ${fraudRule.fraud_rule_oid} - ${fraudRule.rule_type} - ${fraudRule.auto_note || ''}`);
    });
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(error instanceof Error ? error.stack : error);
  }
}

// Optional: If you want to call the function
// searchFraudRules().catch(console.error);
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fraud_rule_search_request** | [**FraudRuleSearchRequest**](FraudRuleSearchRequest.md)| Fraud rule search request | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the fraud rules.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**FraudRulesResponse**](FraudRulesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

