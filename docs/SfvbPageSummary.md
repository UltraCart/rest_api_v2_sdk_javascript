# UltraCartRestApiV2.SfvbPageSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_count** | **Number** | Number of pages directly under this one. | [optional] 
**exclude_from_sitemap** | **Boolean** | True when the page is left out of the sitemap and marked noindex. | [optional] 
**group_template** | **String** | Template file that renders the page itself, a bare .vm name found anywhere in the active theme. | [optional] 
**item_count** | **Number** | Number of items assigned to the page.  The catalog stops counting at its per-page item ceiling. | [optional] 
**item_template** | **String** | Template file that renders the item pages under this page. | [optional] 
**page_type** | **String** | S for a static page, D for a dynamic one. | [optional] 
**parent_path** | **String** | Path of the page this one sits under.  Empty for the root page. | [optional] 
**path** | **String** | The page path, beginning and ending with a slash.  The root page is /. | [optional] 
**root** | **Boolean** | True for the storefront&#39;s home page. | [optional] 
**sort_order** | **Number** | Position among its siblings when the parent sorts child pages by a custom order. | [optional] 
**title** | **String** | The page title. | [optional] 
**uses_selectors** | **Boolean** | True when the page&#39;s items or blog posts are chosen by selectors rather than assigned by hand. | [optional] 
**visible** | **Boolean** | False when the page is hidden.  A hidden page answers 404 to shoppers. | [optional] 
**visible_dts** | **String** | When set, the page stays hidden until this time (ISO 8601, UTC). | [optional] 


