# Using Oracle as a database backend

<!---
Original
http://support.rundeck.com/customer/en/portal/articles/2415681-oracle-setup)
--->

## Guide

In order for Rundeck to connect to an Oracle Database, it requires the Oracle Database JDBC driver. Picking the correct JAR file depends on the version of Java in use by Rundeck and the version of the database you wish to connect to.  These files can be downloaded from the Oracle customer portal.


- Copy the downloaded jar file to the `$RDECK_BASE/server/lib` for war launcher or in `/var/lib/rundeck/lib` (create it) for RPM and DEB installations
- Update `rundeck-config.properties` file according to your installation [layout](/administration/configuration/config-file-reference.md#configuration-layout):

```properties
dataSource.driverClassName = oracle.jdbc.OracleDriver
dataSource.url = jdbc:oracle:thin:@oracle.rundeck.local:1521:orcl #orcl is the instance name
dataSource.username = rundeckuser
dataSource.password = rundeckpassword
dataSource.dialect = org.rundeck.hibernate.RundeckOracleDialect
dataSource.properties.validationQuery = SELECT 1 FROM DUAL
```

:::tip
The config properties above are case sensitive and an example.  Adjust accordingly for your installation.
:::
