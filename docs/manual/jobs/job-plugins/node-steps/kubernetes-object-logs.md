# Kubernetes Clusters - Object Logs
:::enterprise
:::

## Overview

This plugin retrieves logs from a specific object within a Kubernetes cluster. Since this is a node-step plugin, multiple Kubernetes clusters or namespaces can be targeted within a single Job.

The types of objects that can be viewed logs from within a Kubernetes cluster include:

- **Pods**

## Configuration

### Prerequisites

Before configuring the Kubernetes Object Logs plugin, the target clusters must be added to the Runbook Automation instance and the authentication method must be configured. This is done by following the steps outlined in the [Kubernetes Plugins Overview](/manual/plugins/kubernetes-plugins-overview.md).

### Add Kubernetes Object Logs Step

When building a Job, add the **Kubernetes / Clusters / Object Logs** node step:

![Kubernetes Object Logs](/assets/img/k8s-cluster-object-logs.png)<br>

Configure the following fields:

* **Name**: The name of the object to view logs from, such as Pod name.
* **Container**: Specify a particular container to view logs from within the object.
* **Number of Log Lines**: The number of log lines to retrieve. Default is 50.
* **Time-span (seconds)**: A relative time in seconds before the current time from which to show logs.
* **Follow Logs**: If selected, the plugin will follow the log output. Note that the Job may continue to run until manually stopped.

### Invocation Output

The output of the step will be the logs from the object in the Kubernetes cluster:

![Kubernetes Object Logs Output](/assets/img/k8s-cluster-logs-output.png)<br>

## Notes

- When using the "Follow Logs" option, be aware that the Job will continue running until it's manually stopped.
- The Time-span option allows you to view logs from a specific point in time, which can be useful for troubleshooting recent issues.