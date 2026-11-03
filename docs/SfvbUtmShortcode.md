# UltraCartRestApiV2.SfvbUtmShortcode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | The shortcode.  Matched ignoring case. | [optional] 
**creation_dts** | **String** | When the shortcode was created, ISO 8601. | [optional] 
**description** | **String** | What the shortcode is for.  Null when blank. | [optional] 
**hash_sha256** | **String** | The hash of the code, description and values.  Send it as If-Match when changing or deleting the shortcode. | [optional] 
**itm_campaign** | **String** | ITM campaign the shortcode applies.  Null when blank. | [optional] 
**itm_content** | **String** | ITM content the shortcode applies.  Null when blank. | [optional] 
**itm_id** | **String** | ITM id the shortcode applies.  Null when blank. | [optional] 
**itm_medium** | **String** | ITM medium the shortcode applies.  Null when blank. | [optional] 
**itm_source** | **String** | ITM (internal tracking) source the shortcode applies.  Null when blank. | [optional] 
**itm_term** | **String** | ITM term the shortcode applies.  Null when blank. | [optional] 
**last_modified_dts** | **String** | When the shortcode last changed, ISO 8601. | [optional] 
**path_segment** | **String** | Append this to a storefront path (as its last segment) to apply the shortcode.  Fires only where that full path is not itself a page. | [optional] 
**query_parameter** | **String** | Add this query parameter to a link on any page running UC Analytics, including other sites, to apply the shortcode. | [optional] 
**shortcode_oid** | **Number** | The shortcode&#39;s id on this storefront. | [optional] 
**utm_campaign** | **String** | UTM campaign the shortcode applies.  Null when blank. | [optional] 
**utm_content** | **String** | UTM content the shortcode applies.  Null when blank. | [optional] 
**utm_id** | **String** | UTM id the shortcode applies.  Null when blank. | [optional] 
**utm_medium** | **String** | UTM medium the shortcode applies.  Null when blank. | [optional] 
**utm_source** | **String** | UTM source the shortcode applies.  Null when blank. | [optional] 
**utm_term** | **String** | UTM term the shortcode applies.  Null when blank. | [optional] 


