import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // TODO: Implement authentication endpoints
  // - POST /auth/login
  // - POST /auth/register  
  // - POST /auth/logout
  // - GET /auth/session
}