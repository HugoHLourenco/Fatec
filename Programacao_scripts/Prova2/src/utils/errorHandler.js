import HttpStatus from 'http-status';

export class ValidationError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ValidationError';
    this.status = status;
  }
}

export function handleError(err, res) {
  if (err instanceof ValidationError) {
    res.status(err.status).json({ error: err.message });
  } else {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
}
