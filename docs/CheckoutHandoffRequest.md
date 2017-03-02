# UltraCartRestApiV2.CheckoutHandoffRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart** | [**Cart**](Cart.md) |  | [optional] 
**errorParameterName** | **String** | If any error happen during the processing on the UltraCart side, the browser will be redirected to your error_return_url with the error passed in this parameter name. | [optional] 
**errorReturnUrl** | **String** | The URL to return the browser to if there are processing errors on the UltraCart side. | [optional] 
**operation** | **String** | The type of handoff operation to perform | [optional] 
**paypalMaximumUpsellRevenue** | **Number** | The maximum amount of revenue that you think the customer could add during a custom upsell after sequence on your checkout. | [optional] 
**paypalReturnUrl** | **String** | The URl to return the customers browser to after they have completed the PayPal process. | [optional] 
**secureHostName** | **String** | The desired secure host name to perform the handoff on.  This should match the desired StoreFront. | [optional] 


<a name="OperationEnum"></a>
## Enum: OperationEnum


* `checkout` (value: `"checkout"`)

* `payPal` (value: `"payPal"`)

* `payPalCredit` (value: `"payPalCredit"`)

* `view` (value: `"view"`)




