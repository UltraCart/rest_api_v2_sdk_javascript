# UltraCartRestApiV2.SfvbTestOrdersResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hint** | **String** | Present when nothing matched.  Says how to place a test order. | [optional] 
**searched_days** | **Number** | How many days back were searched, 7, 30 or 90, widening until enough test orders were found. | [optional] 
**test_orders** | [**[SfvbTestOrder]**](SfvbTestOrder.md) | Test orders, newest first.  Only orders marked as test orders are ever listed. | [optional] 


