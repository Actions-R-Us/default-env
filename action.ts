import * as core from '@actions/core';

// https://help.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables#default-environment-variables
const env_vars = [
    'GITHUB_WORKFLOW',
    'GITHUB_ACTION',
    'GITHUB_ACTIONS',
    'GITHUB_ACTOR',
    'GITHUB_REPOSITORY',
    'GITHUB_EVENT_NAME',
    'GITHUB_EVENT_PATH',
    'GITHUB_WORKSPACE',
    'GITHUB_SHA',
    'GITHUB_REF',
    'GITHUB_HEAD_REF',
    'GITHUB_BASE_REF'
];

async function run(): Promise<void> {
    try {
        for (const env_var of env_vars) {
            if (env_var in process.env && process.env[env_var] !== "") {
                core.exportVariable(env_var, process.env[env_var])
            }
        }

        // Also add USERPROFILE or HOME depending on platform
        if (process.platform === 'win32') {
            core.exportVariable('HOME', process.env.USERPROFILE)
        } else {
            core.exportVariable('HOME', process.env.HOME)
        }
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
