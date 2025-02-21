# Cluster Manager

:::enterprise
:::

The Cluster Manager is a page that allows users to view and manage the instances of the Runbook Automation cluster.

![Cluster Manager](/assets/img/cluster-manager.png)<br>

To access the Cluster Manager, navigate to the **_System Menu_** (gear icon in the upper right) and then select **Cluster Manager**.

## Members

In the **Members** tab of Cluster Manager, you can view the list of all the instances that are part of the Runbook Automation cluster. The list includes the following details:

* **Cluster Member**: This includes the name of the instance as well as the OS and the version.
* **Mode**: This indicates whether the instance is in an **Active** or **Passive** state. When an instance is in a **Passive** state, no new executions are assigned to it.
* **Jobs**: This shows the number of _scheduled_ jobs assigned to this cluster member.  This number is a fraction: it displays the number of enabled scheduled jobs relative to the total number of scheduled jobs.
* **Running**: The number of Jobs currently executing on this particular cluster member.
* **CPU**: The CPU usage of this cluster member.
* **Memory**: The memory usage of this cluster member.
* **Uptime**: The time since the cluster member was started.

When you click on a cluster member, you can view additional details about the instance, such as the Remote Execution policy and the base directory.

![Cluster Member Details](/assets/img/cluster-manager-member-expanded.png)<br>

## Jobs

The **Jobs** tab displays the list of all the scheduled Jobs in the cluster: 

![Cluster Jobs](/assets/img/cluster-manager-jobs-tab.png)<br>

The list can be filtered by Job name, Group, Project and cluster member.

### Reassigning Scheduled Jobs Across Cluster Members

Reassigning a scheduled Job to a different cluster member can be useful when conducting upgrades or maintenance on a particular cluster member. This can also be useful as a way to balance the load across the cluster members.

To reassign a scheduled Job to a different cluster member, click on the Job and then click on the **Action** dropdown. Select **Change Schedule Owner** and then choose the cluster member to which you want to reassign the Job.

![Reassign Scheduled Job](/assets/img/cluster-manager-action-dropdown.png)<br>

In the **Change Job Schedule Owner** dialog, select the cluster member to which you want to reassign the Job and then click **Change Schedule Owner**:

![Change Job Schedule Owner](/assets/img/cluster-manager-change-schedule-owner.png)<br>

The Job will now be reassigned to the selected cluster member and this will be reflected in the **Member** column of the **Scheduled Jobs** table.