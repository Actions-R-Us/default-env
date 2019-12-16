import * as core from '@actions/core';

const env_vars = [
    'HOME',
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
    console.log(JSON.stringify(process.env))
    try {
        for (const env_var of env_vars) {
            if (env_var in process.env) {
                core.debug(`Export: ${env_var}=${process.env[env_var]}`)
                core.exportVariable(env_var, process.env[env_var])
            }
        }
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
