---

title: "5.1.2 Release Notes"
date: 2024-03-28
image: /images/chevron-logo-red-on-white.png
description: "Rundeck | Runbook Automation Releases 5.1.2 to fix important issues in 5.1.0 release"
feed:
 enable: true
 description: "Fixes for Node Display and AWS Project Configuration"

---

# 5.1.2 Release Notes

## Overview

This release fixes the following issues:

Nodes were not showing properly in certain scenarios. If users didn't have `system: read`  permissions, they wouldn't be able to see the project's nodes and would get a 403 error.  Nodes would also have trouble being displayed if they contained a url to edit them (e.g AWS Nodes).

When AWS authentication was configured at the project level using plugin group config, AWS plugins would not properly authenticate in versions `5.1.0` and `5.1.1`.

Fixes to a scenario when upgrading to versions after 4.17.0 would result in an inability to delete jobs properly.

## Runbook/Runbook Automation Updates

* Fix AwsPluginGroup not working when the configuration was set at the project level.


## Rundeck Open Source Product Updates

* [Fix for nodes not showing ](https://github.com/rundeck/rundeck/pull/8990)
* [Replace api call for fetching execution modes for nodes](https://github.com/rundeck/rundeck/pull/8988)
* [Fix error when deleting jobs after upgrade.](https://github.com/rundeck/rundeck/pull/9014)

[Here is a link to the full list of public PRs](https://github.com/rundeck/rundeck/pulls?q=is%3Apr+milestone%3A5.1.2+is%3Aclosed)


## Links

- Download the Release: [Open Source](https://www.rundeck.com/community-downloads/5.1.2) | [Self-Hosted](https://www.rundeck.com/enterprise-downloads/5.1.2)
- [Sign up for Release Notes](https://www.rundeck.com/release-notes-signup)
- [Upgrade instructions](/upgrading/index.md)

## Version Info

Name: <span style="color: orchid"><span class="glyphicon glyphicon-flag"></span> "Elbrus orchid flag"</span>

Release Date: March 28th, 2024

## Community Contributors

Submit your own Pull Requests to get recognition here!

## Staff Contributors

* Greg Schueler ([gschueler](https://github.com/gschueler))
* Alberto Hormazabal Cespedes ([ahormazabal](https://github.com/ahormazabal))
* Alexander Abarca ([alexander-variacode](https://github.com/alexander-variacode))
* Antony Velasquez Ruiz ([avelasquezr](https://github.com/avelasquezr))
* Carlos Eduardo ([carlosrfranco](https://github.com/carlosrfranco))
* Christopher McCarroll-Gilbert ([chrismcg14](https://github.com/chrismcg14))
* Darwis Narvaez ([DarwisNarvaezDev](https://github.com/DarwisNarvaezDev))
* Forrest Evans ([fdevans](https://github.com/fdevans))
* Imad Jafir ([imad6639](https://github.com/imad6639))
* Jake Cohen ([jsboak](https://github.com/jsboak))
* Jason Brooks ([jbrookspd](https://github.com/jbrookspd))
* Jesus Osuna ([Jesus-Osuna-M](https://github.com/Jesus-Osuna-M))
* Leonel Juarez ([L2JE](https://github.com/L2JE))
* Luis Toledo ([ltamaster](https://github.com/ltamaster))
* Osman Albarran ([Oalbarran94](https://github.com/Oalbarran94))
* Rodrigo Navarro ([ronaveva](https://github.com/ronaveva))
* Sarah Martinelli Benedetti ([smartinellibenedetti](https://github.com/smartinellibenedetti))
* Stephen Joyner ([sjrd218](https://github.com/sjrd218))
