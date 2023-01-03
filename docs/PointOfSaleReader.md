# UltraCartRestApiV2.PointOfSaleReader

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type** | **String** | The device type of the reader. | [optional] 
**label** | **String** | The label of the reader. | [optional] 
**merchant_id** | **String** | The merchant id that owns this point of sale reader. | [optional] 
**payment_provider** | **String** | The payment provider for the card reader. | [optional] 
**pos_reader_id** | **Number** | Object identifier of the point of sale reader. | [optional] 
**pos_register_oid** | **Number** | Object identifier of the point of sale register this reader is assigned to. | [optional] 
**serial_number** | **String** | The serial number of the reader. | [optional] 
**stripe_account_id** | **String** | If the payment provider is Stripe, this is the Stripe account id | [optional] 
**stripe_reader_id** | **String** | If the payment provide is Stripe, this is the Stripe terminal reader id | [optional] 



## Enum: PaymentProviderEnum


* `stripe` (value: `"stripe"`)




