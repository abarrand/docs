# Kubernetes Clusters - Create Object
:::enterprise
:::

## Overview

This plugin creates an object of a selected kind within a Kubernetes cluster. Since this is a node-step plugin, multiple Kubernetes clusters or namespaces can be targeted within a single Job.

The types of objects that can be created within a Kubernetes cluster include:
- **ConfigMaps**
- **DaemonSets**
- **Deployments**
- **Jobs**
- **Namespaces**
- **Pods**
- **ReplicaSets**
- **Secrets**
- **Services**
- **StatefulSets**

## Configuration

### Prerequisites

Before configuring the Kubernetes Create Object plugin, the target clusters must be added to the Runbook Automation instance and the authentication method must be configured. This is done by following the steps outlined in the [Kubernetes Plugins Overview](/manual/plugins/kubernetes-plugins-overview.md).

### Add Kubernetes Create Object Step
When building a Job, add the **Kubernetes / Clusters / Create Object** node step:

![Kubernetes Create Object](/assets/img/k8s-clusters-create-object.png)<br>

* **Object Type**: Select the type of object to create (Pods, ConfigMaps, Deployments, etc.)
* **YAML Definition**: The YAML definition of the object to be created.  This can be a data-variable that is passed from a prior step - such as a YAML definition that is retrieved from a git repository.
* **Namespace**: The namespace where the object will be created. Default is `default`.
* **Output Format**: Choose the format for the output (JSON or YAML). Default is JSON.

### Invocation Output

The output of the step will be the object that was created in the Kubernetes cluster. The output format will be the same as the format selected in the step configuration:

![Kubernetes Create Object Output](/assets/img/k8s-create-object-output.png)<br>