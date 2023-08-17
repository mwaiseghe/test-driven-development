import request from 'supertest';
import app from '../server';

describe('Todos', () => {
    it('should return a list of todos', async () => {
        const res = await request(app).get('/')

        expect(res.status).toBe(200);
        expect(res.body.todos).toBeInstanceOf(Array);
    });


    it('should get single todo', async () => {
        const res = await request(app).get('/1')

        expect(res.status).toBe(200);
        expect(res.body).toEqual({ 
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
            completed: expect.any(Boolean) 
        });
    });

    it('Should throw an error if not found', async() => {
        const res = await request(app).get('/4363')

        expect(res.status).toBe(404);
        expect(res.body).toEqual({ error: 'Todo not found' });

    });
});