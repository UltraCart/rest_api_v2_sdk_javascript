# UltraCartRestApiV2.SfvbRedirectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_from_sitemap** | **Boolean** | True to leave the rule&#39;s source out of the generated sitemap.  On a create, left out means false, as in the admin.  On an update, left out keeps the rule&#39;s value. | [optional] 
**note** | **String** | Why the rule exists, up to 500 characters. | [optional] 
**over_live_page** | **Boolean** | Allow a source that is a live, visible page or item, which the rule then hides. | [optional] 
**source** | **String** | The path to catch, starting with /.  End it with /_* to catch everything below. | [optional] 
**status** | **String** | Updates only.  301 turns an admin rule into a permanent redirect.  Leave empty to keep the rule&#39;s status.  New rules are always 301. | [optional] 
**target** | **String** | A path on the storefront, or a URL on one of its own hosts. | [optional] 


