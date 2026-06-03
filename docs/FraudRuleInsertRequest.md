# UltraCartRestApiV2.FraudRuleInsertRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_email** | **String** | Affiliate email. Used by the &#39;affiliate matches&#39; rule type when affiliate_oid is not supplied. | [optional] 
**affiliate_oid** | **Number** | Affiliate OID. Used by the &#39;affiliate matches&#39; rule type. If omitted, affiliate_email is required. | [optional] 
**amount_threshold** | **Number** | Monetary or score threshold. Used by *transaction amount exceeds*, *fraud score exceeds*, and *decline percentage exceeds* rules. | [optional] 
**auto_note** | **String** | Note automatically appended to the order&#39;s merchant note when this rule fires. | [optional] 
**avs_match_type** | **String** | AVS match type for the zip portion. Used by the &#39;address street and zip avs&#39; rule type. | [optional] 
**avs_response_codes** | **String** | AVS response codes (street). Used by the &#39;address street and zip avs&#39; rule type. | [optional] 
**count_threshold** | **Number** | Integer count threshold. Used by *count exceeds*, *change number*, *quantity exceeds*, and *purchased within last hours* rules. | [optional] 
**country_code** | **String** | ISO country code. Used by the &#39;address not in country&#39; rule type. | [optional] 
**credit_card_bins** | **[String]** | Credit card BINs to block (max 20). Used by the &#39;credit card block bin&#39; rule type. | [optional] 
**email** | **String** | Email address. Used by the &#39;address email&#39; rule type. | [optional] 
**failure_action** | **String** | Action to take when this rule fires. | [optional] 
**gateway_response_codes** | **String** | Gateway response code key. Used by the &#39;gateway response&#39; rule type. | [optional] 
**gateway_response_value** | **String** | Gateway response code value. Used by the &#39;gateway response&#39; rule type. | [optional] 
**ip_address** | **String** | IP address or subnet (eg &#39;192.168.1.1&#39; or &#39;10.0.0.0/8&#39;). Used by &#39;exempt ip&#39; and &#39;ip matches&#39; rules. | [optional] 
**ip_range_type** | **String** | Specifies whether an IP rule applies to a single address or a subnet. | [optional] 
**item_filters** | **[String]** | Optional list of merchant item ids restricting this rule to orders containing one or more of these items. | [optional] 
**merchant_item_id** | **String** | Merchant item id. Used by the &#39;item matches&#39; rule type. | [optional] 
**modify_custom_field1** | **String** | When failure_action is &#39;Process Payment and Modify&#39;, set order custom field 1 to this value. | [optional] 
**modify_custom_field2** | **String** | When failure_action is &#39;Process Payment and Modify&#39;, set order custom field 2 to this value. | [optional] 
**modify_custom_field3** | **String** | When failure_action is &#39;Process Payment and Modify&#39;, set order custom field 3 to this value. | [optional] 
**modify_custom_field4** | **String** | When failure_action is &#39;Process Payment and Modify&#39;, set order custom field 4 to this value. | [optional] 
**modify_custom_field5** | **String** | When failure_action is &#39;Process Payment and Modify&#39;, set order custom field 5 to this value. | [optional] 
**modify_custom_field6** | **String** | When failure_action is &#39;Process Payment and Modify&#39;, set order custom field 6 to this value. | [optional] 
**modify_custom_field7** | **String** | When failure_action is &#39;Process Payment and Modify&#39;, set order custom field 7 to this value. | [optional] 
**modify_skip_affiliate** | **Boolean** | When failure_action is &#39;Process Payment and Modify&#39;, strip the affiliate from the order. | [optional] 
**modify_skip_affiliate_network_pixel** | **Boolean** | When failure_action is &#39;Process Payment and Modify&#39;, skip firing the affiliate network pixel. | [optional] 
**rotating_transaction_gateway_filters** | **[Number]** | Optional list of rotating transaction gateway oids restricting this rule to orders processed by one of these gateways. | [optional] 
**rule_type** | **String** | Rule type. Also returned by GET /v2/fraud/lookup_values. | [optional] 
**screen_branding_theme_filters** | **[Number]** | Optional list of screen branding theme oids restricting this rule to orders associated with one or more storefronts. | [optional] 
**user_action** | **String** | Only used by rule types that distinguish between attempted and approved transactions. | [optional] 



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




