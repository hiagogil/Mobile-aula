import { describe, it } from 'mocha'

import { Ensure, equals } from '@serenity-js/assertions'
import { actorCalled } from '@serenity-js/core'
import { By, Navigate, PageElement, Text } from '@serenity-js/web'

import { GitHubStatus } from '../serenity/github-api/GitHubStatus.js'
import { TodoList } from '../serenity/todo-list-app/TodoList.js'

/**
 * Serenity/JS Screenplay Pattern test scenarios use one or more actors to represent people and external systems
 * interacting with the system under test.
 *
 * To design a test scenario, give each actor a series of tasks and interactions to perform
 * and instruct them to answer questions about the state of the system under test
 * to ensure that the answers meet the expected results.
 *
 * This example test file demonstrates several ways of writing test scenarios using the Screenplay Pattern.
 *
 * Learn more:
 * - Serenity/JS Screenplay Pattern - https://serenity-js.org/handbook/design/screenplay-pattern/
 * - Web Testing with Serenity/JS - https://serenity-js.org/handbook/web-testing/
 * - API Testing with Serenity/JS - https://serenity-js.org/handbook/api-testing/
 * - Serenity/JS web module - https://serenity-js.org/api/web/
 * - Serenity/JS REST module - https://serenity-js.org/api/rest/
 * - Serenity/JS assertions module - https://serenity-js.org/api/assertions/
 */

describe('Primeiro teste', () => {
    it('acessar o meu forms', async () => {
        await $('~Forms').click()
        expect(await $('~text-imput')).toBeDisplayed()        
    });
});
