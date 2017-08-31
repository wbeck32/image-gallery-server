const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../app');
const connect = require('../connect');
const connection = require('mongoose').connection;
const req = chai.request(app);
const photos = require('../helpers/imageurls.json');

describe('image mongoose tests', () => {
  before(async () => {
    await connect();
    await connection.dropDatabase();
  });

  const testPhotoOne = {
    title: photos[0].title,
    url:
      'https://www.flickr.com/photos/' + photos[0].owner + '/' + photos[0].id,
    alt: 'alt text',
    description: 'description'
  };

  const testPhotoTwo = {
    title: photos[1].title,
    url:
      'https://www.flickr.com/photos/' + photos[1].owner + '/' + photos[1].id,
    alt: 'alt text',
    description: 'description'
  };

  it('DELETE image by id', async () => {
    const responseInPost = await req.post('/images').send(testPhotoTwo);
    const responseAfterDelete = await req
      .delete('/images')
      .query({ id: responseInPost.body._id });
    console.log('after delete: ', responseAfterDelete.body);
  }),
    it('POST image', async () => {
      const responseInPost = await req.post('/images').send(testPhotoOne);
      // console.log('post: ', responseInPost.body);
    }),
    it('GET all images', async () => {
      const responseInGet = await req.get('/images');
      // console.log('get: ', responseInGet.body);
    });
});

// https://www.flickr.com/photos/{user-id}/{photo-id} - individual photo
