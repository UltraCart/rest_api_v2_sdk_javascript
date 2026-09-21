# UltraCartRestApiV2.AffiliateApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAffiliate**](AffiliateApi.md#deleteAffiliate) | **DELETE** /affiliate/affiliates/{affiliate_oid} | Delete an affiliate
[**getAffiliate**](AffiliateApi.md#getAffiliate) | **GET** /affiliate/affiliates/{affiliate_oid} | Retrieve an affiliate
[**getAffiliatesByQuery**](AffiliateApi.md#getAffiliatesByQuery) | **POST** /affiliate/affiliates/query | Retrieve affiliates
[**getClicksByQuery**](AffiliateApi.md#getClicksByQuery) | **POST** /affiliate/clicks/query | Retrieve clicks
[**getLedgersByQuery**](AffiliateApi.md#getLedgersByQuery) | **POST** /affiliate/ledgers/query | Retrieve ledger entries
[**insertAffiliate**](AffiliateApi.md#insertAffiliate) | **POST** /affiliate/affiliates | Insert an affiliate
[**sendAffiliateWelcomeEmail**](AffiliateApi.md#sendAffiliateWelcomeEmail) | **POST** /affiliate/affiliates/{affiliate_oid}/welcome_email | Send a welcome email to an affiliate
[**updateAffiliate**](AffiliateApi.md#updateAffiliate) | **PUT** /affiliate/affiliates/{affiliate_oid} | Update an affiliate



## deleteAffiliate

> deleteAffiliate(affiliate_oid)

Delete an affiliate

Delete an affiliate on the UltraCart account.  The affiliate is disabled within the active affiliate program; their ledger and click history is preserved. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_oid** | **Number**| The affiliate oid to delete. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliate

> AffiliateResponse getAffiliate(affiliate_oid, opts)

Retrieve an affiliate

Retrieves a single affiliate using the specified affiliate oid. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_oid** | **Number**| The affiliate oid to retrieve. | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AffiliateResponse**](AffiliateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAffiliatesByQuery

> AffiliatesResponse getAffiliatesByQuery(affiliate_query, opts)

Retrieve affiliates

Retrieves a group of affiliates from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the affiliates returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_query** | [**AffiliateQuery**](AffiliateQuery.md)| Affiliate query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_sort** | **String**| The sort order of the affiliates.  See Sorting documentation for examples of using multiple values and sorting by ascending and descending. | [optional] 

### Return type

[**AffiliatesResponse**](AffiliatesResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getClicksByQuery

> AffiliateClicksResponse getClicksByQuery(click_query, opts)

Retrieve clicks

Retrieves a group of clicks from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the clicks returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **click_query** | [**AffiliateClickQuery**](AffiliateClickQuery.md)| Click query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 10000) | [optional] [default to 10000]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_expand** | **String**| The object expansion to perform on the result.  Only option is link. | [optional] 

### Return type

[**AffiliateClicksResponse**](AffiliateClicksResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLedgersByQuery

> AffiliateLedgersResponse getLedgersByQuery(ledger_query, opts)

Retrieve ledger entries

Retrieves a group of ledger entries from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the ledgers returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 


### Example

```javascript
// Internal API. No sample provided.
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ledger_query** | [**AffiliateLedgerQuery**](AffiliateLedgerQuery.md)| Ledger query | 
 **_limit** | **Number**| The maximum number of records to return on this one API call. (Maximum 200) | [optional] [default to 100]
 **_offset** | **Number**| Pagination of the record set.  Offset is a zero based index. | [optional] [default to 0]
 **_expand** | **String**| The object expansion to perform on the result.  Only option is link. | [optional] 

### Return type

[**AffiliateLedgersResponse**](AffiliateLedgersResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## insertAffiliate

> AffiliateResponse insertAffiliate(affiliate, opts)

Insert an affiliate

Insert an affiliate on the UltraCart account.  The affiliate is created within the merchant&#39;s active affiliate program. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate** | [**Affiliate**](Affiliate.md)| Affiliate to insert | 
 **send_welcome_email** | **Boolean**| Whether to send a welcome email to the affiliate after it is created.  Defaults to false. | [optional] [default to false]
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AffiliateResponse**](AffiliateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json


## sendAffiliateWelcomeEmail

> sendAffiliateWelcomeEmail(affiliate_oid)

Send a welcome email to an affiliate

Sends a welcome email to the specified affiliate using the welcome letter configured on the merchant&#39;s active affiliate program. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_oid** | **Number**| The affiliate oid to send the welcome email to. | 

### Return type

null (empty response body)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAffiliate

> AffiliateResponse updateAffiliate(affiliate_oid, affiliate, opts)

Update an affiliate

Update an affiliate on the UltraCart account.  This is a full replacement of the affiliate; omitted fields are reset to their defaults, with the exception of password which is only changed when supplied. 


### Example


(No example for this operation).


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **affiliate_oid** | **Number**| The affiliate oid to update. | 
 **affiliate** | [**Affiliate**](Affiliate.md)| Affiliate to update | 
 **_expand** | **String**| The object expansion to perform on the result.  See documentation for examples | [optional] 

### Return type

[**AffiliateResponse**](AffiliateResponse.md)

### Authorization

[ultraCartOauth](../README.md#ultraCartOauth), [ultraCartSimpleApiKey](../README.md#ultraCartSimpleApiKey)

### HTTP request headers

- **Content-Type**: application/json; charset=UTF-8
- **Accept**: application/json

