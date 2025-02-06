# Creating Runners

The Enterprise Runner can be used to dispatch automation to remote environments and to give teams flexibility with their automation with Projects.

To learn more about the Runner architecture and use-cases, see the [Runner Overview](/administration/runner/index.md).

## Prerequisites

Before creating a Runner, ensure that you have read the [prerequisites](/administration/runner/index.md#enabling-the-latest-runner-features) section of the Runner Overview.


## Creating Runners from System Level

Creating Runners at the System level provides the flexibility of associating the Runner with multiple Projects.

To create a Runner through at the System level:

1. Navigate to the **System** menu.
2. Click **Runner Management**.
3. Click **Create Runner**.
4. Give the Runner a **Name** and a **Description.**
5. Define **Tags** for the Runner so that it can be selected for use within Jobs.
    ![Create a Runner](/assets/img/create-runner-step-1.png)
6. Click **Next**.
7. In the **Project Association** step, select the Projects that can make use of this Runner.
    ![Create a Runner](/assets/img/create-runner-step-2.png)
8. On the **Confirmation Screen** click **Download**. This downloads the Runner **`.jar`** file.
9. Click **Close and Complete**.

On the subsequent screen, the new Runner will be listed along with any other Runners that have been created:

![System Runners List](/assets/img/system-level-runners-list.png)<br>

#### Permissions
To create a Runner at the System level, users will need the following ACL permissions:
```
by:
  group: my-user-group-name
description: Allow creating of Runners at the System level
for:
  runner:
  - allow:
    - create
context:
  application: rundeck

---
by:
  group: my-user-group-name
description: Allow "write" access within Runner management at the System level
for:
  resource:
  - allow:
    - admin
    equals:
      kind: runner
context:
  application: rundeck
---
by:
  group: my-user-group-name
description: Allow creation of apitokens (general)
for:
  apitoken:
  - allow:
    - create
context:
  application: rundeck
---
by:
  group: my-user-group-name
description: Restrict apitoken creation to only generate_service_token to be used for Runners
for:
  resource:
  - allow:
    - generate_service_token
    equals:
      kind: apitoken
context:
  application: rundeck
```
* Change **`my-user-group-name`** in the above ACL policy to the name of the user group that needs to have these permissions.

:::warning Error Without API Permissions
If the user does not have the necessary API permissions, the following error will be displayed when attempting to create a Runner:

**`Error: Failed to create runner due to server side error: Unauthorized: generate API token`**

To resolve this error, ensure that the user has the necessary API permissions.
:::

## Creating Runners within a Project

Runners created within a project are associated with that project only. This means that users within other projects will not be able to use this Runner for their automation tasks.

:::tip Changing Runners from Single to Multi Project Association
A Runner that is created within a project will not be visible to users within other projects.
**However**, a user at the System level can change the association of a Runner from a single project to multiple projects.
When this happens, then the Runner will be visible to users within the other projects.
:::

To create a Runner within a Project:

1. Navigate into the specific project.
2. Click **Runner Management**.
3. Click **Create Runner**.
4. Give the Runner a **Name** and a **Description.**
5. Define **Tags** for the Runner so that it can be selected for use within Jobs.
    ![Create a Runner](/assets/img/create-runner-step-1.png)
6. Click **Next**.
7. On the **Confirmation Screen** click **Download**. This downloads the Runner **`.jar`** file.
8. Click **Close and Complete**.
9. The new Runner will be listed along with any other Runners that have been created within the project.

#### Permissions

To create a Runner within a Project, users will need the following ACL permissions:
```
by:
  group: my-user-group-name
description: Allow "write" for runner feature within specific project
for:
  resource:
  - allow:
    - admin
    equals:
      kind: runner
context:
  project: my-project-name

---
by:
  group: my-user-group-name
description: Allow [create, read] for runners within specific project
for:
  runner:
  - allow:
    - create
    - read
context:
  project: my-project-name
---
by:
  group: runneradmin
description: Allow creation of apitokens (general)
for:
  apitoken:
  - allow:
    - create
context:
  application: rundeck
---
by:
  group: runneradmin
description: Restrict apitoken creation to only generate_service_token to be used for Runners
for:
  resource:
  - allow:
    - generate_service_token
    equals:
      kind: apitoken
context:
  application: rundeck
```