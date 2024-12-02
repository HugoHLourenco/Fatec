import { ValidationError } from './errorHandler';
import HttpStatus from 'http-status';

export function validateUser(user) {
  if (!user.name || typeof user.name !== 'string') {
    throw new ValidationError('Invalid name', HttpStatus.BAD_REQUEST);
  }
  // Adicione outras validações conforme necessário
  return null;
}

export function validateLogin(user) {
  if (!user.username || typeof user.username !== 'string') {
    throw new ValidationError('Invalid username', HttpStatus.BAD_REQUEST);
  }
  if (!user.password || typeof user.password !== 'string') {
    throw new ValidationError('Invalid password', HttpStatus.BAD_REQUEST);
  }
  return null;
}
