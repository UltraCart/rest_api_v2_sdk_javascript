# UltraCartRestApiV2.SfvbSitemapsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **String** | The host the sitemaps are built for. | [optional] 
**notes** | **[String]** | What a person should know about these sitemaps, such as when they are rebuilt. | [optional] 
**prevent_indexing** | **Boolean** | True when the storefront&#39;s Prevent Indexing setting is on.  The sitemaps are still served, but every page tells search engines not to index it. | [optional] 
**robots_txt** | [**SfvbRobotsTxt**](SfvbRobotsTxt.md) |  | [optional] 
**sitemaps** | [**[SfvbSitemap]**](SfvbSitemap.md) | The sitemaps that exist, sitemaps.org first.  Empty until the nightly build has run. | [optional] 
**storefront_oid** | **Number** | The storefront. | [optional] 


