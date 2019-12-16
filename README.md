# Default Environment
A github action that populates the workflow `env` with the default environment variables available in all environments.

The default variables are listed [here](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables#default-environment-variables). After running this action, each subsequent step will have access to these variables by accessing `${{env.<variable_name>}}`.

# Usage

**Basic**:

```yaml
- uses: smac89/default-env@0.0.1`
```

**To modify the values of the environment variables seen by this action, modify the [`env`](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv) map of this action.**

```yaml
- uses: smac89/default-env@0.0.1
  env:
    GITHUB_ACTOR: 'github'
    GITHUB_REF: 'master'
```
