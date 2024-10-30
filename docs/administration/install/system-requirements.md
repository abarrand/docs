# Instance System Requirements
|| Runbook Automation Self-Hosted | Rundeck Open Source |
| --- | ---------- | --- |
| Operating Systems | **Supported**:<br>[Red Hat Enterprise 8+/Amazon 2+/Oracle Linux 8+](/administration/install/linux-rpm.md)<br>[Ubuntu 22.04.3+/Debian 11.8+](/administration/install/linux-deb.md)<br>[Windows Server 2019+](/administration/install/windows.md) | **Recommended**:<br>[Red Hat Enterprise 8+/Amazon 2+/Oracle Linux 8+](/administration/install/linux-rpm.md)<br>[Ubuntu 22.04.3+/Debian11.8+](/administration/install/linux-deb.md)<br>[Windows Server 2019+](/administration/install/windows.md) |
| Server Profile | **Recommended**:<br>32GB RAM<br>(24GB JVM Heap)<br>8 CPUs per instance<br>*Equivalent to m4.2xlarge in AWS EC2*<br><br>**Minimum**:<br>16GB RAM<br>(12GB JVM Heap)<br>4 CPUs per instance<br>*Equivalent to m4.xlarge in AWS EC2* | <br><br><br><br><br><br><br>**Minimum**:<br>8GB RAM<br>(4GB JVM Heap)<br>2 CPUs per instance<br>*Equivalent to m4.large in AWS EC2*  |
| [Database](#database) | **Supported**:<br>[MariaDB 10.11.6+/MySQL 8.0.35+](/administration/configuration/database/mysql.md)<br>[PostgreSQL 15.5+](/administration/configuration/database/postgres.md)<br>[Microsoft SQL Server 2019 CU23+](/administration/configuration/database/mssql.md)<br>[Oracle 19c+](/administration/configuration/database/oracle.md) | **Recommended**:<br>[MariaDB 10.11.6+/MySQL 8.0.35+](/administration/configuration/database/mysql.md)<br> [PostgreSQL 15.5+](/administration/configuration/database/postgres.md)<br>[Microsoft SQL Server 2019 CU23+](/administration/configuration/database/mssql.md)<br>[Oracle 19c+](/administration/configuration/database/oracle.md) |
| [Java](#java) | [Java 11](#java) installed on each instance | [Java 11](#java) installed on each instance |
| [Log Store](#logstore) | **Recommended**:<br>[S3-compatible object store](/learning/howto/S3-minio.md#s3-or-minio-for-execution-logs) | File system or <br>[S3-compatible object store](/learning/howto/S3-minio.md#s3-or-minio-for-execution-logs) |
| Install Method | [.rpm](/administration/install/linux-rpm.md)<br> [.deb](/administration/install/linux-deb.md)<br>[Java servlet (.war)](/administration/install/jar.md)<br>[Docker](/administration/install/docker.md) | [.rpm](/administration/install/linux-rpm.md)<br>[.deb](/administration/install/linux-deb.md)<br>[Java servlet (.war)](/administration/install/jar.md)<br>[Docker](/administration/install/docker.md) |
| [Network Ports](#network-access) | 4443 (https)<br>4440 (http)<br>22 (Linux machines over SSH)<br>5985 (Windows machines over http)<br>5986 (Windows machines over https) | 4443 (https)<br>4440 (http)<br>22 (Linux machines over SSH)<br>5985 (Windows machines over http)<br>5986 (Windows machines over https) |
| Admin Access | Root (or Administrator on Windows) is not [required or recommended](#admin-access). | Root (or Administrator on Windows) is not [required or recommended](#admin-access). |
| Browser | Accessing automation typically requires an HTML5 compliant browser. Currently supported version of Mozilla Firefox or Google Chrome are recommended. | Accessing automation typically requires an HTML5 compliant browser. Currently supported version of Mozilla Firefox or Google Chrome are recommended. |

## Java

Rundeck is a Java-Servlet based server and therefore requires the Java runtime.

As of version 5.x, Java 11 is required. Java must be installed prior to running the install process. Ensure the JAVA\_HOME environment variable is defined properly in your environment before running the launcher. Installers will use the java found on your path. See [Setting JAVA\_HOME](/administration/maintenance/startup.md#setting-java_home) if you want to run a different version of java.

Verify your Java version to check it meets the requirement:

```
$ java -version
```

Example output (actual version numbers can vary)

```
java version "11.0.7" 2020-04-14 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.7+8-LTS)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.7+8-LTS, mixed mode)
```

::: warning Java Versions
At this time the 5.x series ONLY supports Java 11.  Java 17+ is not currently validated or tested so we recommend using version 11.

[Azul Zulu Open JDK](https://www.azul.com/downloads/?package=jdk#zulu) is what the software is built and tested with and is the recommended distribution.

Sun/Oracle and other flavors of Java may work, but our team has limited capabilities to troubleshoot problems specific to those distributions. The [Azul Zulu Open JDK](https://www.azul.com/downloads/?package=jdk#zulu) is strongly recommended.
:::

## Network access

When the server starts, it binds to several TCP ports by default:

- 4440 (http)
- 4443 (https)

To check if the ports are free on a Unix host, run:

```
$ netstat -an | egrep '4440|4443'
```

If the ports are in use on the server, you will see output similar to below:

```
tcp46 0 0 \*.4440 \*.\* LISTEN
```

The installation procedures describe how to choose different ports if there is a conflict.

In addition, TCP port 22 (by default) needs to be open on the clients for SSH.

Clients should be set up to allow the Rundeck server user to connect to the clients using SSH via public-key authentication. It should not prompt for a password. See [Configure remote machine for SSH](/manual/projects/node-execution/ssh.md#configuring-remote-machine-for-ssh) for configuration details.

There are various ways for installing SSH on Windows; we recommend [Cygwin (opens new window)](https://www.cygwin.com/).

## Database

When you install the default Rundeck (Or Runbook Automation Self-Hosted) configuration, it will use H2, an embedded database. It is convenient to have an embedded database when testing or using it for a non-critical purpose. Using the H2 database is not considered safe for production because it is not resilient if Rundeck is not shutdown gracefully. When shutdown gracefully, Rundeck can write the data (kept in memory) to disk. If Rundeck is forcefully shutdown, the data is not guaranteed to be written to file on disk and will likely cause truncation and corruption.

Don't use the H2 embedded database for anything except testing and non-production.

For production instances, use an external database like [MariaDB/MySQL](/administration/configuration/database/mysql.md) or [PostgreSQL](/administration/configuration/database/postgres.md).

Also, be sure to locate your external database on a host with sufficient capacity and performance. Don't create a downstream bottleneck!

For more about setting the datasource see: [Configuration/Database](/administration/configuration/database/index.md).

## Logstore<br>
Rundeck records all job execution data into the Logstore. By default, Rundeck is configured to use the local file system. Normally, that is defined by the framework.logs.dir system setting found in framework.properties.

For clustered setups with Runbook Automation, see: [Configuration/Logstore](/administration/cluster/logstore/index.md).

## Admin Access<br>
Using a dedicated user account such as "rundeck" is recommended. If there is a need for root access, please set up the Rundeck user to have access via [sudo](https://en.wikipedia.org/wiki/Sudo).
