# Default Environment
A github action that populates the workflow context `env` map with the [default environment variables](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables#default-environment-variables) available in all environments.

After running this action, each subsequent step will have access to these variables through the [`env`](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#contexts) context.

# Usage

**Basic**:

```yaml
- uses: Actions-R-Us/default-env@v1
```

**To modify the values of the environment variables seen by this action, modify the [`env`](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv) map of this action.**

```yaml
- uses: Actions-R-Us/default-env@v1
  env:
    GITHUB_ACTOR: 'github'
    GITHUB_REF: 'master'
```
After running this action, the environment variables specified will replace the default ones
