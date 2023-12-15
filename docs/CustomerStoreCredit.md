# UltraCartRestApiV2.CustomerStoreCredit

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **Number** | Available store credit which is defined as unused and vested | [optional] 
**expiring** | **Number** | Amount of store credit expiring within 30 days | [optional] 
**future_ledgers** | [**[CustomerStoreCreditLedgerEntry]**](CustomerStoreCreditLedgerEntry.md) | Array of future ledger entries including expiring entries | [optional] 
**past_ledgers** | [**[CustomerStoreCreditLedgerEntry]**](CustomerStoreCreditLedgerEntry.md) | Array of past ledger entries including accrual, usage, and expiring entries | [optional] 
**total** | **Number** | Total lifetime store credit for this customer. | [optional] 
**vesting** | **Number** | Amount of store credit vesting | [optional] 


