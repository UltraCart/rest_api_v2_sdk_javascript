# UltraCartRestApiV2.SfvbExperiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_ends_at** | **String** | When the experiment engine will end this experiment by itself and declare the variation with the best raw objective per session the winner, without a significance check (ISO 8601, UTC).  Set for running url and theme experiments, and for any running experiment whose traffic shifts toward the leader (equal_weighting false).  Null when only ending it deliberately will stop it. | [optional] 
**days_elapsed** | **Number** | Whole days the experiment has run, up to now or to when it ended. | [optional] 
**experiment** | [**Experiment**](Experiment.md) |  | [optional] 
**notice** | **String** | Something the caller should know about what this call did or could not do. | [optional] 
**p_value_test** | **String** | The test behind p_value.  one_way_anova across all variations, so a low p_value says some variation differs, not which one is best. | [optional] 
**page_body_path** | **String** | Set when this call rewrote a page body - starting a page experiment writes its id there, and ending one without a winner clears it.  Pull the file again before editing it. | [optional] 
**page_body_sha256** | **String** | The rewritten page body&#39;s new hash, for If-Match on the next write. | [optional] 
**router_url** | **String** | For a url experiment, the address visitors must enter through to be split between the pages.  Ads and links must point here, not at the pages. | [optional] 
**sessions_needed_computed_dts** | **String** | When p95_sessions_needed was last estimated (ISO 8601, UTC).  It is estimated only once the experiment has 1000 sessions, and at most hourly.  Null before then. | [optional] 
**type** | **String** | page for an experiment element inside a page, url for a split between pages, theme for a split between themes, openai for a generated headline experiment. | [optional] 


