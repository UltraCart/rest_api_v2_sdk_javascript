# UltraCartRestApiV2.FraudLookupValues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliates** | [**[FraudLookupAffiliate]**](FraudLookupAffiliate.md) | Affiliates with non-empty email, sorted by email. | [optional] 
**avs_match_types** | **[String]** | Valid values for avs_match_type on the &#39;address street and zip avs&#39; rule type. | [optional] 
**countries** | **[String]** | ISO country codes available to this merchant. | [optional] 
**failure_actions** | **[String]** | Valid values for failure_action on insert and search requests. | [optional] 
**ip_range_types** | **[String]** | Valid values for ip_range_type on IP-based rules. | [optional] 
**linked_accounts** | **Boolean** | True when this merchant has at least one linked merchant account. | [optional] 
**rotating_transaction_gateways** | [**[FraudLookupGateway]**](FraudLookupGateway.md) | Rotating transaction gateways configured for this merchant. Use the oid as a value in rotating_transaction_gateway_filters on insert. | [optional] 
**rule_groups** | **[String]** | Valid values for rule_group on search requests. | [optional] 
**rule_types** | **[String]** | Valid values for rule_type on insert and search requests. | [optional] 
**screen_branding_themes** | [**[FraudLookupTheme]**](FraudLookupTheme.md) | Screen branding themes configured for this merchant. Use the oid as a value in screen_branding_theme_filters on insert. | [optional] 
**user_actions** | **[String]** | Valid values for user_action on rule types that distinguish between attempted and approved transactions. | [optional] 


