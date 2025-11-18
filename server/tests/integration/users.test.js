
const request = require('supertest');
const app = require('../../app');

describe('Users API Integration Tests', () => {
  describe('GET /api/users', () => {
    test('should get all users', async () => {
      const response = await request(app)
        .get('/api/users')
        .expect(200);
      
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/users/:id', () => {
    test('should get user by ID', async () => {
      const response = await request(app)
        .get('/api/users/1')
        .expect(200);
      
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('email');
    });

    test('should return 404 for non-existent user', async () => {
      await request(app)
        .get('/api/users/999')
        .expect(404);
    });
  });

  describe('POST /api/users', () => {
    test('should create new user', async () => {
      const newUser = {
        name: 'Test User',
        email: 'test@example.com'
      };

      const response = await request(app)
        .post('/api/users')
        .send(newUser)
        .expect(201);
      
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(newUser.name);
      expect(response.body.email).toBe(newUser.email);
    });

    test('should return 400 for missing required fields', async () => {
      await request(app)
        .post('/api/users')
        .send({ name: 'Test' }) // Missing email
        .expect(400);
    });
  });
});
