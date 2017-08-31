const Image = require('../models/Image');
const { assert } = require('chai');
const photos = require('../helpers/imageurls.json');

describe('Image model tests', () => {
  beforeEach(() => {


  })
  const testPhoto = new Image({
    url:
      'https://www.flickr.com/photos/' + photos[0].owner + '/' + photos[0].id,
    alt: 'alt text',
    description: 'description'
  });

  it('image model fails validation', async () => {
    const failValidate = await testPhoto.validate().catch(() => {
        throw (new Error('Validation errors'),
        ({ errors }) => {
          console.log(errors);
          // assert.equal();
          // assert.equal();
        });
      });
  }),
    it('image model passes validation', () => {
      const testPhoto = new Image({
        title: photos[0].title,
        url: 'https://www.flickr.com/photos/' + photos[0].owner + '/' + photos[0].id,
        alt: 'alt text',
        description: 'description'
      });
      return testPhoto
        .validate()
        .then(() => {
          // console.log('unit test: ', testPhoto);
        })
        .catch(() => {
          throw (new Error('Validation errors'),
          ({ errors }) => {
            console.log(errors);
            // assert.equal();
            // assert.equal();
          });
        });
    });
});

describe('album model tests', () => {
  it('album model fails validation', () => {}),
    it('album model passes validation', () => {});
});
