import supertest from 'supertest';
import app from '../app';

const request = supertest(app);

describe('GET /', () => {
  it('Respnse status should equal to 200', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});

describe('GET /resize', () => {
  it('Testing the resizing functionality', async () => {
    const response = await request.get(
      '/resize?imageName=JimRohn-3840x2160.jpg&width=650&height=200'
    );
    expect(response.status).toBe(200);
  });
});

describe('GET /listimages', () => {
  it('Testing the listing functionality', async () => {
    const response = await request.get('/listimages');
    expect(response.status).toBe(200);
  });
});
