# UltraCartRestApiV2.CustomerLoyalty

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_points** | **Number** | Current points | [optional] 
**internal_gift_certificate** | [**GiftCertificate**](GiftCertificate.md) |  | [optional] 
**internal_gift_certificate_balance** | **String** | Loyalty Cashback / Store credit balance (internal gift certificate balance) | [optional] 
**internal_gift_certificate_oid** | **Number** | Internal gift certificate oid used to tracking loyalty cashback / store credit. | [optional] 
**ledger_entries** | [**[CustomerLoyaltyLedger]**](CustomerLoyaltyLedger.md) | Ledger entries | [optional] 
**loyalty_tier_expiration_dts** | **String** | Loyalty tier expiration date (read only because of SDK addition) | [optional] 
**loyalty_tier_name** | **String** | Loyalty tier name | [optional] 
**loyalty_tier_oid** | **Number** | Loyalty tier oid (set to zero to remove the tier) | [optional] 
**pending_points** | **Number** | Pending Points | [optional] 
**redemptions** | [**[CustomerLoyaltyRedemption]**](CustomerLoyaltyRedemption.md) | Redemptions | [optional] 


