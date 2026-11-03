# UltraCartRestApiV2.SfvbTrackingHtml

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_needed** | **Boolean** | On a dry run, whether the real write needs an approved tracking_html.put request. | [optional] 
**changed** | **Boolean** | On a write, whether the slot changed.  False when the content was already the same. | [optional] 
**content** | **String** | The HTML, with its Velocity tokens as stored.  Only on a read of one slot and on a write.  Null when empty. | [optional] 
**dry_run** | **Boolean** | On a write, true when nothing was saved. | [optional] 
**hash_sha256** | **String** | The SHA-256 of the HTML as UTF-8, the hash of an empty string when empty.  Send it as If-Match on the write. | [optional] 
**label** | **String** | The slot&#39;s name in the admin. | [optional] 
**runs_on** | **String** | Where the storefront injects it, in words. | [optional] 
**set** | **Boolean** | True when the slot holds any HTML. | [optional] 
**size_bytes** | **Number** | The size of the HTML in UTF-8 bytes.  0 when empty. | [optional] 
**slot** | **String** | tracking is injected into every page except the receipt.  conversion is injected into the receipt only. | [optional] 



## Enum: SlotEnum


* `tracking` (value: `"tracking"`)

* `conversion` (value: `"conversion"`)




