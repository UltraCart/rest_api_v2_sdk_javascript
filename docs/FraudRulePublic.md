# UltraCartRestApiV2.FraudRulePublic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_oid** | **Number** |  | [optional] 
**amount_threshold** | **Number** |  | [optional] 
**auto_note** | **String** |  | [optional] 
**avs_match_type** | **String** |  | [optional] 
**avs_response_codes** | **String** |  | [optional] 
**card_number** | **String** | Masked credit card number for rules tied to a specific card | [optional] 
**count_threshold** | **Number** |  | [optional] 
**country_code** | **String** |  | [optional] 
**created_by** | **String** |  | [optional] 
**created_dts** | **String** | Created date | [optional] 
**credit_card_bins** | **Object** | Credit card BINs blocked by the &#39;credit card block bin&#39; rule type. | [optional] 
**decline_message** | **String** |  | [optional] 
**description** | **String** | Human-readable description of the rule | [optional] 
**description_html** | **String** | HTML version of the rule description | [optional] 
**email** | **String** |  | [optional] 
**failure_action** | **String** | Action taken when this rule fires. | [optional] 
**fraud_rule_oid** | **Number** | UltraCart unique identifier for this fraud rule | [optional] 
**gateway_response_codes** | **String** |  | [optional] 
**gateway_response_value** | **String** |  | [optional] 
**ip_address** | **String** |  | [optional] 
**ip_range_type** | **String** |  | [optional] 
**item_filters** | [**[FraudRuleItemFilter]**](FraudRuleItemFilter.md) |  | [optional] 
**merchant_item_id** | **String** |  | [optional] 
**modify_custom_field1** | **String** |  | [optional] 
**modify_custom_field2** | **String** |  | [optional] 
**modify_custom_field3** | **String** |  | [optional] 
**modify_custom_field4** | **String** |  | [optional] 
**modify_custom_field5** | **String** |  | [optional] 
**modify_custom_field6** | **String** |  | [optional] 
**modify_custom_field7** | **String** |  | [optional] 
**modify_skip_affiliate** | **Boolean** |  | [optional] 
**modify_skip_affiliate_network_pixel** | **Boolean** |  | [optional] 
**rotating_transaction_gateway_filters** | [**[FraudRuleRotatingTransactionGatewayFilter]**](FraudRuleRotatingTransactionGatewayFilter.md) |  | [optional] 
**rule_group** | **String** | Group containing this rule type (eg &#39;creditCardRules&#39;) | [optional] 
**rule_type** | **String** | Rule type. | [optional] 
**storefront_filters** | [**[FraudRuleStorefrontFilter]**](FraudRuleStorefrontFilter.md) |  | [optional] 
**user_action** | **String** |  | [optional] 



## Enum: AvsMatchTypeEnum


* `match` (value: `"match"`)

* `no match` (value: `"no match"`)

* `partial` (value: `"partial"`)





## Enum: FailureActionEnum


* `Flag For Review` (value: `"Flag For Review"`)

* `Process Payment and Modify` (value: `"Process Payment and Modify"`)

* `Process Payment and Review` (value: `"Process Payment and Review"`)

* `Decline Transaction` (value: `"Decline Transaction"`)

* `Exempt` (value: `"Exempt"`)





## Enum: IpRangeTypeEnum


* `address` (value: `"address"`)

* `subnet` (value: `"subnet"`)





## Enum: RuleGroupEnum


* `exemptRules` (value: `"exemptRules"`)

* `creditCardRules` (value: `"creditCardRules"`)

* `ipRules` (value: `"ipRules"`)

* `addressRules` (value: `"addressRules"`)

* `affiliateRules` (value: `"affiliateRules"`)

* `itemRules` (value: `"itemRules"`)

* `orderRules` (value: `"orderRules"`)

* `browserRules` (value: `"browserRules"`)





## Enum: RuleTypeEnum


* `exempt apo fpo` (value: `"exempt apo fpo"`)

* `exempt ip` (value: `"exempt ip"`)

* `exempt logged in customer with pricing tier` (value: `"exempt logged in customer with pricing tier"`)

* `credit card single transaction exceeds` (value: `"credit card single transaction exceeds"`)

* `credit card daily transaction amount exceeds` (value: `"credit card daily transaction amount exceeds"`)

* `credit card daily transaction count exceeds` (value: `"credit card daily transaction count exceeds"`)

* `credit card weekly transaction amount exceeds` (value: `"credit card weekly transaction amount exceeds"`)

* `credit card weekly transaction count exceeds` (value: `"credit card weekly transaction count exceeds"`)

* `credit card change number` (value: `"credit card change number"`)

* `credit card block bin` (value: `"credit card block bin"`)

* `credit card block prepaid` (value: `"credit card block prepaid"`)

* `amazon special instructions` (value: `"amazon special instructions"`)

* `paypal special instructions` (value: `"paypal special instructions"`)

* `reward coupon email mismatch` (value: `"reward coupon email mismatch"`)

* `gateway response` (value: `"gateway response"`)

* `ip daily transaction amount exceeds` (value: `"ip daily transaction amount exceeds"`)

* `ip daily transaction count exceeds` (value: `"ip daily transaction count exceeds"`)

* `ip weekly transaction amount exceeds` (value: `"ip weekly transaction amount exceeds"`)

* `ip weekly transaction count exceeds` (value: `"ip weekly transaction count exceeds"`)

* `ip matches` (value: `"ip matches"`)

* `ip country mismatch` (value: `"ip country mismatch"`)

* `address fraud score exceeds` (value: `"address fraud score exceeds"`)

* `address fraud score exceeds exempt apo fpo` (value: `"address fraud score exceeds exempt apo fpo"`)

* `address street and zip avs` (value: `"address street and zip avs"`)

* `address billing doesnt match shipping` (value: `"address billing doesnt match shipping"`)

* `billing country doesnt match shipping` (value: `"billing country doesnt match shipping"`)

* `address international` (value: `"address international"`)

* `address match except zip` (value: `"address match except zip"`)

* `address email` (value: `"address email"`)

* `address not in country` (value: `"address not in country"`)

* `wholesale customer not logged in` (value: `"wholesale customer not logged in"`)

* `affiliate matches` (value: `"affiliate matches"`)

* `affiliate daily count exceeds` (value: `"affiliate daily count exceeds"`)

* `affiliate weekly count exceeds` (value: `"affiliate weekly count exceeds"`)

* `affiliate daily decline percentage exceeds` (value: `"affiliate daily decline percentage exceeds"`)

* `affiliate weekly decline percentage exceeds` (value: `"affiliate weekly decline percentage exceeds"`)

* `affiliate daily with same ip` (value: `"affiliate daily with same ip"`)

* `affiliate weekly with same ip` (value: `"affiliate weekly with same ip"`)

* `item matches` (value: `"item matches"`)

* `item quantity exceeds` (value: `"item quantity exceeds"`)

* `order previous return` (value: `"order previous return"`)

* `order purchased within last hours` (value: `"order purchased within last hours"`)

* `order used coupon meant for sharing` (value: `"order used coupon meant for sharing"`)

* `browser os linux` (value: `"browser os linux"`)





## Enum: UserActionEnum


* `Attempted` (value: `"Attempted"`)

* `Approved` (value: `"Approved"`)




