# UltraCartRestApiV2.TaxCloudConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **String** | TaxCloud API key | [optional] 
**connection_id** | **String** | TaxCloud Connection ID (a UUID) identifying the TaxCloud connection to use; a test connection and a production connection have different IDs | [optional] 
**default_tic** | **String** | Default TaxCloud TIC (Taxability Information Code), used for items that do not have their own TIC; blank lets TaxCloud apply its default (0, general goods) | [optional] 
**estimate_only** | **Boolean** | True if this TaxCloud configuration is to estimate taxes only and not report placed orders to TaxCloud | [optional] 
**last_test_dts** | **String** | Date/time of the connection test to TaxCloud | [optional] 
**shipping_tic** | **String** | TaxCloud TIC used to classify shipping/handling charges (11000 &#x3D; shipping and handling); blank means shipping is not taxed | [optional] 
**test_results** | **String** | Test results of the last connection test to TaxCloud | [optional] 


