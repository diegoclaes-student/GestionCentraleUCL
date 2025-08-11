import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEvent, UpdateEvent } from '@centrale-ucl/schemas';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(createEventDto: CreateEvent) {
    return this.prisma.event.create({
      data: createEventDto,
      include: {
        ticketTypes: true,
        tickets: true,
      },
    });
  }

  async findAll() {
    return this.prisma.event.findMany({
      include: {
        ticketTypes: true,
        tickets: true,
      },
      orderBy: { startAt: 'asc' },
    });
  }

  async findOne(id: string) {
    const event = await this.prisma.event.findUnique({
      where: { id },
      include: {
        ticketTypes: true,
        tickets: {
          include: {
            user: true,
            ticketType: true,
          },
        },
      },
    });

    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    return event;
  }

  async findBySlug(slug: string) {
    const event = await this.prisma.event.findUnique({
      where: { slug },
      include: {
        ticketTypes: true,
        tickets: {
          include: {
            user: true,
            ticketType: true,
          },
        },
      },
    });

    if (!event) {
      throw new NotFoundException(`Event with slug ${slug} not found`);
    }

    return event;
  }

  async update(id: string, updateEventDto: UpdateEvent) {
    await this.findOne(id); // Check if event exists
    
    return this.prisma.event.update({
      where: { id },
      data: updateEventDto,
      include: {
        ticketTypes: true,
        tickets: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Check if event exists
    
    return this.prisma.event.delete({
      where: { id },
    });
  }
}