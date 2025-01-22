# Kubernetes Clusters - Describe Object
:::enterprise
:::

## Overview

This plugin describes an object of a selected kind within a Kubernetes cluster. Since this is a node-step plugin, multiple Kubernetes clusters or namespaces can be targeted within a single Job.

The types of objects that can be described within a Kubernetes cluster include:

- **ConfigMaps**
- **CronJobs**
- **DaemonSets**
- **Deployments**
- **Ingresses**
- **Jobs**
- **Namespaces**
- **Nodes**
- **PersistentVolumes**
- **PersistentVolumeClaims**
- **Pods**
- **ReplicaSets**
- **Secrets**
- **Services**
- **StatefulSets**
- **StorageClasses**

## Configuration

### Prerequisites

Before configuring the Kubernetes Describe Object plugin, the target clusters must be added to the Runbook Automation instance and the authentication method must be configured. This is done by following the steps outlined in the [Kubernetes Plugins Overview](/manual/plugins/kubernetes-plugins-overview.md).

### Add Kubernetes Describe Object Step

When building a Job, add the **Kubernetes / Clusters / Describe Object** node step:

![Kubernetes Describe Object](/assets/img/k8s-clusters-describe-object.png)<br>

Configure the following fields:

* **Object Type**: Select the type of object to describe (e.g., Pods, ConfigMaps, Deployments).
* **Name**: The name of the object to be described, such as Pod name or Deployment name.
* **Namespace**: The namespace where the object resides.
* **Output Format**: Choose the format for the output (JSON or YAML).

### Invocation Output

The output of the step will be the object that was described in the Kubernetes cluster. The output format will be the same as the format selected in the step configuration:

![Kubernetes Describe Object Output](/assets/img/k8s-describe-object-output.png)<br> 