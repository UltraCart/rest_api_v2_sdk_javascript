# UltraCartRestApiV2.SfvbPostcardCard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_dts** | **String** | When the customer ordered after it. | [optional] 
**cost** | **Number** | What the account is billed for this card. | [optional] 
**customer_uuid** | **String** | The customer it was mailed to. | [optional] 
**delivered_dts** | **String** | When it was delivered. | [optional] 
**from** | [**SfvbPostcardAddress**](SfvbPostcardAddress.md) |  | [optional] 
**mailed_dts** | **String** | When it was mailed. | [optional] 
**order_id** | **String** | The order it converted to. | [optional] 
**print_record_uuid** | **String** | The print vendor&#39;s record for this card. | [optional] 
**status** | **String** | The vendor&#39;s latest status. | [optional] 
**submit_dts** | **String** | When it was sent to the printer. | [optional] 
**to** | [**SfvbPostcardAddress**](SfvbPostcardAddress.md) |  | [optional] 
**tracking_description** | **String** | The vendor&#39;s own words for the latest status.  Only when customer data was asked for, since it can name where the card went. | [optional] 


