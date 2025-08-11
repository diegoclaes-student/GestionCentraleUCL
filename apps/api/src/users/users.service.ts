import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUser, UpdateUser } from '@centrale-ucl/schemas';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUser) {
    return this.prisma.user.create({
      data: createUserDto,
      include: {
        memberships: true,
        userRoles: true,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      include: {
        memberships: true,
        userRoles: true,
      },
      where: { isActive: true },
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        memberships: true,
        userRoles: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        memberships: true,
        userRoles: true,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUser) {
    const user = await this.findOne(id);
    
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      include: {
        memberships: true,
        userRoles: true,
      },
    });
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    
    return this.prisma.user.update({
      where: { id },
      data: { isActive: false },
    });
  }
}