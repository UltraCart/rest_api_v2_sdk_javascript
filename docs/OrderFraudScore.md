# UltraCartRestApiV2.OrderFraudScore

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anonymousProxy** | **Boolean** | True if the IP address is a known anonymous proxy server | [optional] 
**binMatch** | **String** | Whether the BIN (first six digits) matched the country | [optional] 
**carderEmail** | **Boolean** | True if the email address belongs to a known credit card fraudster | [optional] 
**countryCode** | **String** | Country code | [optional] 
**countryMatch** | **Boolean** | Country code matches BIN country | [optional] 
**customerPhoneInBillingLocation** | **String** | Whether the customer&#39;s phone number is located in the area of the billing address | [optional] 
**distanceKm** | **Integer** | Distance in kilometers between the IP address and the BIN | [optional] 
**freeEmail** | **Boolean** | True if the email address is for a free service like gmail.com | [optional] 
**highRiskCountry** | **Boolean** | True if the customer is in a high risk country known for internet fraud | [optional] 
**ipCity** | **String** | City associated with the IP address | [optional] 
**ipIsp** | **String** | ISP that owns the IP address | [optional] 
**ipLatitude** | **String** | Approximate latitude associated with the IP address | [optional] 
**ipLongitude** | **String** | Approximate longitude associated with the IP address | [optional] 
**ipOrg** | **String** | Organization that owns the IP address | [optional] 
**ipRegion** | **String** | State/region associated with the IP address | [optional] 
**proxyScore** | **Number** | Likelihood of the IP address being a proxy server | [optional] 
**score** | **Number** | Overall score.  This is the score that is compared to see if the order is rejected or held for review by the fraud filter rules. | [optional] 
**shipForwarder** | **Boolean** | True if the address is a known ship forwarding company | [optional] 
**spamScore** | **Number** | Likelihood of the email address being associated with a spammer | [optional] 
**transparentProxy** | **Boolean** | True if the IP address that placed the order is a transparent proxy server | [optional] 


<a name="BinMatchEnum"></a>
## Enum: BinMatchEnum


* `NA` (value: `"NA"`)

* `No` (value: `"No"`)

* `NotFound` (value: `"NotFound"`)

* `Yes` (value: `"Yes"`)




<a name="CustomerPhoneInBillingLocationEnum"></a>
## Enum: CustomerPhoneInBillingLocationEnum


* `` (value: `""`)

* `No` (value: `"No"`)

* `NotFound` (value: `"NotFound"`)

* `Yes` (value: `"Yes"`)




