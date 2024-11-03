import express, { Request, Response } from 'express';
import cors from 'cors';
import type { User, ApiResponse } from '@repo/types';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Example data
const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

app.get('/api/users', (_req: Request, res: Response) => {
  const response: ApiResponse<User[]> = {
    success: true,
    data: users
  };
  res.json(response);
});

app.get('/api/users/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    const response: ApiResponse<null> = {
      success: false,
      data: null,
      error: 'ID parameter is required'
    };
    return res.status(400).json(response);
  }

  const user = users.find(u => u.id === parseInt(id));
  const response: ApiResponse<User | null> = {
    success: !!user,
    data: user || null,
    error: !user ? 'User not found' : undefined
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
