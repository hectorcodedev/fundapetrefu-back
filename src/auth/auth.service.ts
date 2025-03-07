import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly blacklistedTokens: string[] = [];

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signin(dto: AuthDto) {
    const userFound = await this.userRepository.findOne({
      where: {
        email: dto.email,
      },
    });
    if (!userFound) {
      return new HttpException(
        'Email or password incorrect',
        HttpStatus.NOT_FOUND,
      );
    }
    const passwMatch = await argon.verify(userFound.password, dto.password);
    /* const passwMatch = await this.userRepository.findOne({
      where: {
        password: dto.password,
      },
    }); */
    if (!passwMatch) {
      return new HttpException(
        'Email or password incorrect',
        HttpStatus.NOT_FOUND,
      );
    }
    delete userFound.password;
    const token = await this.signToken(userFound.id, userFound.email);
    return { access_token: token };
  }

  async signToken(userId: string, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '60m',
      secret: secret,
    });

    return token;
  }

  async logout(token: string) {
    this.blacklistedTokens.push(token);
    return;
  }

  async verifyToken(token: string) {
    if (this.blacklistedTokens.includes(token)) {
      throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED);
    }
    try {
      const decoded = await this.jwt.verifyAsync(token);
      return decoded;
    } catch {
      throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED);
    }
  }
}
