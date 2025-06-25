const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app'); 

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('POST /pets/register', () => {
  it('should register a new pet', async () => {
    const petData = {
      name: "Firulais",
      breed: "Labrador",
      age: 3,
      healthStatus: "Good",
      description: "Friendly dog",
      location: "Quito",
      images: ["https://example.com/firulais.jpg"]
    };

    const res = await request(app)
      .post('/pets/register')
      .send(petData);

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Firulais");
  });

  it('should fail with missing required fields', async () => {
    const petData = {
      age: 2
    };

    const res = await request(app)
      .post('/pets/register')
      .send(petData);

    expect(res.statusCode).toBe(500); 
  });
});
