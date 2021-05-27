import {Selector} from 'testcafe';

const fileUpload = Selector('input#file-upload');
const uploadFileButton = Selector('input#file-submit.button');

fixture("Upload fixture")
.page("https://the-internet.herokuapp.com/upload");

test('Upload file', async t => {
  await t
  .setFilesToUpload(fileUpload,'../../upload/File.jpg')
  .click(uploadFileButton);

});
