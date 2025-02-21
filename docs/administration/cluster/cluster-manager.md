# Cluster Manager

:::enterprise
:::

The Cluster Manager provides a centralized interface for monitoring and managing Runbook Automation cluster instances. This feature enables administrators to view cluster health, manage instance states, and balance workloads across the cluster.

To access the Cluster Manager, navigate to the **System Menu** (gear icon) in the upper right corner and select **Cluster Manager**.

![Cluster Manager](/assets/img/cluster-manager.png)<br>

To access the Cluster Manager, navigate to the **_System Menu_** (gear icon in the upper right) and then select **Cluster Manager**.

## Monitoring Cluster Members

The Members tab displays comprehensive information about all cluster instances, including their current status and resource utilization. Each cluster member entry shows:

* Instance Details: Displays the instance name, operating system, and Runbook Automation version
* Operational Status: Shows whether the instance is in Active or Passive mode (Passive instances do not accept new job executions)
* Workload Metrics: Presents the number of scheduled jobs (shown as enabled/total), currently running jobs, CPU usage, memory utilization, and uptime

Clicking on any cluster member reveals additional configuration details, including:

* Remote Execution policies
* Base directory location
* Other instance-specific settings

![Cluster Member Details](/assets/img/cluster-manager-member-expanded.png)<br>

## Managing Scheduled Jobs

The Jobs tab provides a comprehensive view of all scheduled jobs across the cluster. Administrators can:

* Filter jobs by name, group, project, or cluster member
* Monitor job distribution across cluster instances
* Manage job scheduling and ownership

![Cluster Jobs](/assets/img/cluster-manager-jobs-tab.png)<br>

## Balancing Workload Across Cluster Members

To optimize cluster performance or prepare for maintenance, you can redistribute scheduled jobs across cluster members. To reassign a job:

* Select the desired job from the Jobs tab
* Click the Action dropdown and choose Change Schedule Owner
* Select the target cluster member in the Change Job Schedule Owner dialog
* Confirm the change by clicking Change Schedule Owner

![Reassign Scheduled Job](/assets/img/cluster-manager-action-dropdown.png)<br>

![Change Job Schedule Owner](/assets/img/cluster-manager-change-schedule-owner.png)<br>

The Jobs tab will update to reflect the new job assignment in the Member column of the Scheduled Jobs table.

## Best Practices

Consider these recommendations when managing a cluster:

* Regularly monitor resource utilization across cluster members to ensure balanced workload distribution
* Reassign jobs before performing maintenance on cluster members to minimize service disruption
* Maintain some instances in Active mode at all times to ensure continuous job execution capability