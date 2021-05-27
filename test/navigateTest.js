fixture('Navigate')
.page('http://automationpractice.com/index.php')

test('Navigate test', async t => {
  await t
  .navigateTo('https://www.mailchimp.com');
});
