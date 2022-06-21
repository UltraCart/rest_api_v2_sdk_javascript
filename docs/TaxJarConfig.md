# UltraCartRestApiV2.TaxJarConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | True if TaxJar is active for this merchant | [optional] 
**api_key** | **String** | TaxJar API key | [optional] 
**estimate_only** | **Boolean** | True if this TaxJar configuration is to estimate taxes only and not report placed orders to TaxJar | [optional] 
**send_outside_nexus** | **Boolean** | Send orders outside your nexus TaxJar.  The default is to not transmit outside orders to TaxJar to reduce API calls.  However, this will prevent TaxJar from dynamically creating new Nexus when thresholds are exceeded for a state. | [optional] 
**send_test_orders** | **Boolean** | Send test orders through to TaxJar.  The default is to not transmit test orders to TaxJar. | [optional] 
**skip_channel_orders** | **Boolean** | Do not send channel partner orders to TaxJar.  Set this to true if your channel partner reports tax on their own. | [optional] 
**use_distribution_center_from** | **Boolean** | Use distribution center from address | [optional] 


