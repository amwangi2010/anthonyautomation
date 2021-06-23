import {ClientFunction } from 'testcafe';
export const envVariables =  {
    url: 'http://automationpractice.com/index.php',
    getUrl: ClientFunction(() => window.location.href),
};