---
redirectFrom: /administration/runner/runner-advancedsetup
title: "Custom Configuration"
---

## Proxying Runner connections

Runners can be configured to connect through a HTTP/HTTPS proxy. Proxies are commonly used to centralize and secure outbound traffic from the datacenter to internet services. The proxy configuration is optional and is added as java command line arguments when the runner process is started.

### Proxy configuration without proxy authentication

The following example will allow the runner to connect through the secure company proxy with address wp.acme.corp.

```
java -Dmicronaut.http.client.proxy-type=http -Dmicronaut.http.client.proxy-address=wp.acme.corp:443 -jar pdrunner.jar
```

1. `-Dmicronaut.http.client.proxy-type` is set to `http`
1. `-Dmicronaut.http.client.proxy-address` is set to the secure proxy company address.

### Proxy configuration with proxy authentication

The following example adds basic auth proxy configuration to the runner. The proxy-type and proxy-address settings are the same as the unauthenticated access example.

```
java -Dmicronaut.http.client.proxy-type=http -Dmicronaut.http.client.proxy-address=wp.acme.corp:443 -Dmicronaut.http.client.proxy-username=proxyUsernameString -Dmicronaut.http.client.proxy-password=proxyPassString -jar pdrunner.jar
```

1. `-Dmicronaut.http.client.proxy-username` is set to the user that is allowed to connect through the secure proxy.
1. `-Dmicronaut.http.client.proxy-password` is set to the secure proxy user password.

## Configure Java Heap Size

To configure the Java heap size for the Runner, add these parameters when starting it.

`-Xms` sets the initial Java heap size.

`-Xmx` sets the maximum Java heap size.

Example:
```
java -Xms4g -Xmx6g -jar runner.jar
```

In this example, the Runner will start with an initial heap size of 4GB and can use a maximum of 6GB.

## Override temporary directory

To override the temporary directory used by the Runner, add these parameters when starting it.

`runner.rundeck.overrideTempDir:` 'true' to override the temporary directory, or 'false' to retain the default directory '/temp'.

`runner.dirs.tmp:` the new temporary directory.

Example:
```
java -Drunner.rundeck.overrideTempDir=true -Drunner.dirs.tmp=/your/custom/dir -jar runner.jar
```

## Runner APIs

[Runner APIs](/api/index.md#runner-management) are available to create, edit, download, and delete Runners.

## Runner configuration in a Docker container

You can configure java command line arguments properties by using the 'command' property in a docker compose file or docker run command.

This will override the default command on the container startup (`java -jar pd-runner.jar``) to the java command with the appropriated arguments.

Here is an example for a Proxy configuration on a Runner container:

**Docker compose file**

```
version: '3.9'
services:
    runner:
        image: 'rundeckpro/runner:5.9.0'
        environment:
            - RUNNER_RUNDECK_CLIENT_ID=<your-runner-id>
            - 'RUNNER_RUNDECK_SERVER_URL=https://<your-subdomain>.runbook.pagerduty.cloud'
            - RUNNER_RUNDECK_SERVER_TOKEN=<your-api-token>
        command: "java -Dmicronaut.http.client.proxy-type=http -Dmicronaut.http.client.proxy-address=proxysrv:443 -jar pd-runner.jar"
```

**Docker run command**

```
docker run \
  --name runner \
  -e RUNNER_RUNDECK_CLIENT_ID=<your-runner-id> \
  -e RUNNER_RUNDECK_SERVER_URL=https://<your-subdomain>.runbook.pagerduty.cloud \
  -e RUNNER_RUNDECK_SERVER_TOKEN=<your-api-token> \
  rundeckpro/runner:5.9.0 \
  java -Dmicronaut.http.client.proxy-type=http -Dmicronaut.http.client.proxy-address=proxysrv:443 -jar pd-runner.jar
```
