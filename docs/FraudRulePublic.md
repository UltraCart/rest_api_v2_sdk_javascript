# UltraCartRestApiV2.FraudRulePublic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_oid** | **Number** | Affiliate oid for the &#39;affiliate matches&#39; rule type. | [optional] 
**amount_threshold** | **Number** | Monetary or score threshold for amount/score/percentage rule types. | [optional] 
**auto_note** | **String** | Note automatically appended to the order&#39;s merchant note when this rule fires. | [optional] 
**avs_match_type** | **String** |  | [optional] 
**avs_response_codes** | **String** | AVS response codes for the &#39;address street and zip avs&#39; rule type. | [optional] 
**card_number** | **String** | Masked credit card number for rules tied to a specific card | [optional] 
**count_threshold** | **Number** | Integer count threshold for count/quantity/hours rule types. | [optional] 
**country_code** | **String** | ISO country code for the &#39;address not in country&#39; rule type. | [optional] 
**created_by** | **String** |  | [optional] 
**created_dts** | **String** | Created date | [optional] 
**credit_card_bins** | **[String]** | Credit card BINs blocked by the &#39;credit card block bin&#39; rule type. | [optional] 
**decline_message** | **String** | Message shown in the A/R review screen when this rule fires. | [optional] 
**description** | **String** | Human-readable description of the rule | [optional] 
**description_html** | **String** | HTML version of the rule description | [optional] 
**email** | **String** | Email address for the &#39;address email&#39; rule type. | [optional] 
**failure_action** | **String** | Action taken when this rule fires. | [optional] 
**fraud_rule_oid** | **Number** | UltraCart unique identifier for this fraud rule | [optional] 
**gateway_response_codes** | **String** | Gateway response code key for the &#39;gateway response&#39; rule type. | [optional] 
**gateway_response_value** | **String** | Gateway response code value for the &#39;gateway response&#39; rule type. | [optional] 
**ip_address** | **String** | IP address or subnet for &#39;exempt ip&#39; and &#39;ip matches&#39; rule types. | [optional] 
**ip_range_type** | **String** |  | [optional] 
**item_filters** | [**[FraudRuleItemFilter]**](FraudRuleItemFilter.md) | Item filters restricting this rule to orders containing one or more of these items. | [optional] 
**merchant_item_id** | **String** | Merchant item id for the &#39;item matches&#39; rule type. | [optional] 
**modify_custom_field1** | **String** | Value the rule sets on order custom field 1 (only meaningful for &#39;Process Payment and Modify&#39;). | [optional] 
**modify_custom_field2** | **String** | Value the rule sets on order custom field 2 (only meaningful for &#39;Process Payment and Modify&#39;). | [optional] 
**modify_custom_field3** | **String** | Value the rule sets on order custom field 3 (only meaningful for &#39;Process Payment and Modify&#39;). | [optional] 
**modify_custom_field4** | **String** | Value the rule sets on order custom field 4 (only meaningful for &#39;Process Payment and Modify&#39;). | [optional] 
**modify_custom_field5** | **String** | Value the rule sets on order custom field 5 (only meaningful for &#39;Process Payment and Modify&#39;). | [optional] 
**modify_custom_field6** | **String** | Value the rule sets on order custom field 6 (only meaningful for &#39;Process Payment and Modify&#39;). | [optional] 
**modify_custom_field7** | **String** | Value the rule sets on order custom field 7 (only meaningful for &#39;Process Payment and Modify&#39;). | [optional] 
**modify_skip_affiliate** | **Boolean** | When true, the rule strips the affiliate from the order (only meaningful for &#39;Process Payment and Modify&#39;). | [optional] 
**modify_skip_affiliate_network_pixel** | **Boolean** | When true, the rule suppresses the affiliate network pixel (only meaningful for &#39;Process Payment and Modify&#39;). | [optional] 
**rotating_transaction_gateway_filters** | [**[FraudRuleRotatingTransactionGatewayFilter]**](FraudRuleRotatingTransactionGatewayFilter.md) | Gateway filters restricting this rule to orders processed by one of these rotating transaction gateways. | [optional] 
**rule_group** | **String** | Group containing this rule type (eg &#39;creditCardRules&#39;). Deliberately not constrained by allowableValues on the response so SDK consumers do not hard-fail on an unexpected value if a future rule_type slips through the server-side mapping. Search REQUESTS still restrict rule_group to the known set. | [optional] 
**rule_type** | **String** | Rule type. | [optional] 
**storefront_filters** | [**[FraudRuleStorefrontFilter]**](FraudRuleStorefrontFilter.md) | Storefront filters restricting this rule to orders placed on one of these storefronts. | [optional] 
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




