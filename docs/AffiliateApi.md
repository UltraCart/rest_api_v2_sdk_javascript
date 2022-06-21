# UltraCartRestApiV2.AffiliateApi

All URIs are relative to *https://secure.ultracart.com/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getClicksByQuery**](AffiliateApi.md#getClicksByQuery) | **POST** /affiliate/clicks/query | Retrieve clicks
[**getLedgersByQuery**](AffiliateApi.md#getLedgersByQuery) | **POST** /affiliate/ledgers/query | Retrieve ledger entries



## getClicksByQuery

> AffiliateClicksResponse getClicksByQuery(click_query, opts)

Retrieve clicks

Retrieves a group of clicks from the account based on a query object.  If no parameters are specified, the API call will fail with a bad request error.  Always specify some parameters to limit the scope of the clicks returned to ones you are truly interested in.  You will need to make multiple API calls in order to retrieve the entire result set since this API performs result set pagination. 

### Example

```javascript
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.AffiliateApi();
let click_query = new UltraCartRestApiV2.AffiliateClickQuery(); // AffiliateClickQuery | Click query
let opts = {
  '_limit': 10000, // Number | The maximum number of records to return on this one API call. (Maximum 10000)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  Only option is link.
};
apiInstance.getClicksByQuery(click_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import UltraCartRestApiV2 from 'ultra_cart_rest_api_v2';
let defaultClient = UltraCartRestApiV2.ApiClient.instance;
// Configure OAuth2 access token for authorization: ultraCartOauth
let ultraCartOauth = defaultClient.authentications['ultraCartOauth'];
ultraCartOauth.accessToken = 'YOUR ACCESS TOKEN';
// Configure API key authorization: ultraCartSimpleApiKey
let ultraCartSimpleApiKey = defaultClient.authentications['ultraCartSimpleApiKey'];
ultraCartSimpleApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ultraCartSimpleApiKey.apiKeyPrefix = 'Token';

let apiInstance = new UltraCartRestApiV2.AffiliateApi();
let ledger_query = new UltraCartRestApiV2.AffiliateLedgerQuery(); // AffiliateLedgerQuery | Ledger query
let opts = {
  '_limit': 100, // Number | The maximum number of records to return on this one API call. (Maximum 200)
  '_offset': 0, // Number | Pagination of the record set.  Offset is a zero based index.
  '_expand': "_expand_example" // String | The object expansion to perform on the result.  Only option is link.
};
apiInstance.getLedgersByQuery(ledger_query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

