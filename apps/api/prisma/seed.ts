import { PrismaClient, Role, MembershipStatus, EventStatus, EventVisibility, TicketStatus, PaymentStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create sample users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'president@centrale-ucl.be',
        firstName: 'Marie',
        lastName: 'Dupont',
        phone: '+33123456789',
        studentId: '2021001',
      },
    }),
    prisma.user.create({
      data: {
        email: 'tresorier@centrale-ucl.be',
        firstName: 'Thomas',
        lastName: 'Martin',
        phone: '+33123456790',
        studentId: '2021002',
      },
    }),
    prisma.user.create({
      data: {
        email: 'membre1@centrale-ucl.be',
        firstName: 'Sophie',
        lastName: 'Bernard',
        phone: '+33123456791',
        studentId: '2022001',
      },
    }),
  ]);

  console.log(`👥 Created ${users.length} users`);

  // Create memberships
  const memberships = await Promise.all([
    prisma.membership.create({
      data: {
        userId: users[0].id,
        status: MembershipStatus.ACTIVE,
        startAt: new Date('2024-01-01'),
      },
    }),
    prisma.membership.create({
      data: {
        userId: users[1].id,
        status: MembershipStatus.ACTIVE,
        startAt: new Date('2024-01-01'),
      },
    }),
    prisma.membership.create({
      data: {
        userId: users[2].id,
        status: MembershipStatus.ACTIVE,
        startAt: new Date('2024-01-01'),
      },
    }),
  ]);

  console.log(`📋 Created ${memberships.length} memberships`);

  // Create user roles
  const userRoles = await Promise.all([
    prisma.userRole.create({
      data: {
        userId: users[0].id,
        role: Role.PRESIDENT,
        scope: 'global',
      },
    }),
    prisma.userRole.create({
      data: {
        userId: users[1].id,
        role: Role.TRESORIER,
        scope: 'global',
      },
    }),
    prisma.userRole.create({
      data: {
        userId: users[2].id,
        role: Role.MEMBER,
        scope: 'global',
      },
    }),
  ]);

  console.log(`🎭 Created ${userRoles.length} user roles`);

  // Create sample events
  const events = await Promise.all([
    prisma.event.create({
      data: {
        title: 'Soirée d\'intégration 2024',
        slug: 'soiree-integration-2024',
        description: 'Grande soirée d\'intégration pour accueillir les nouveaux membres',
        location: 'Salle des fêtes de l\'école',
        startAt: new Date('2024-02-15T19:00:00Z'),
        endAt: new Date('2024-02-16T02:00:00Z'),
        capacity: 150,
        status: EventStatus.PUBLISHED,
        visibility: EventVisibility.PUBLIC,
        budgetTarget: 5000,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Conférence Tech 2024',
        slug: 'conference-tech-2024',
        description: 'Conférence sur les nouvelles technologies et l\'innovation',
        location: 'Amphithéâtre principal',
        startAt: new Date('2024-03-20T14:00:00Z'),
        endAt: new Date('2024-03-20T18:00:00Z'),
        capacity: 100,
        status: EventStatus.PUBLISHED,
        visibility: EventVisibility.PUBLIC,
      },
    }),
  ]);

  console.log(`🎉 Created ${events.length} events`);

  // Create ticket types
  const ticketTypes = await Promise.all([
    prisma.ticketType.create({
      data: {
        eventId: events[0].id,
        name: 'Membre',
        priceCents: 1500, // 15€
        quota: 100,
        memberOnly: true,
      },
    }),
    prisma.ticketType.create({
      data: {
        eventId: events[0].id,
        name: 'Non-membre',
        priceCents: 2000, // 20€
        quota: 50,
        memberOnly: false,
      },
    }),
    prisma.ticketType.create({
      data: {
        eventId: events[1].id,
        name: 'Étudiant',
        priceCents: 0, // Gratuit
        quota: 100,
        memberOnly: false,
      },
    }),
  ]);

  console.log(`🎫 Created ${ticketTypes.length} ticket types`);

  // Create sponsors
  const sponsors = await Promise.all([
    prisma.sponsor.create({
      data: {
        name: 'TechCorp Solutions',
        tier: 'Gold',
        contactEmail: 'partnership@techcorp.com',
        notes: 'Partenaire principal pour les événements tech',
      },
    }),
    prisma.sponsor.create({
      data: {
        name: 'Innovation Labs',
        tier: 'Silver',
        contactEmail: 'contact@innovationlabs.fr',
        notes: 'Sponsor des conférences',
      },
    }),
  ]);

  console.log(`🏢 Created ${sponsors.length} sponsors`);

  // Create dues for current season
  const dues = await prisma.dues.create({
    data: {
      season: '2024-2025',
      amountCents: 5000, // 50€
      dueDate: new Date('2024-12-31'),
      description: 'Cotisation annuelle 2024-2025',
    },
  });

  console.log(`💰 Created dues for ${dues.season}`);

  // Create sample communication templates
  const templates = await Promise.all([
    prisma.communicationTemplate.create({
      data: {
        key: 'welcome_member',
        subject: 'Bienvenue à Centrale UCL !',
        bodyMjml: '<mjml><mj-body><mj-section><mj-column><mj-text>Bienvenue {{firstName}} !</mj-text></mj-column></mj-section></mj-body></mjml>',
        variables: ['firstName'],
      },
    }),
    prisma.communicationTemplate.create({
      data: {
        key: 'event_reminder',
        subject: 'Rappel : {{eventTitle}}',
        bodyMjml: '<mjml><mj-body><mj-section><mj-column><mj-text>N\'oubliez pas l\'événement {{eventTitle}} le {{eventDate}} !</mj-text></mj-column></mj-section></mj-body></mjml>',
        variables: ['eventTitle', 'eventDate'],
      },
    }),
  ]);

  console.log(`📧 Created ${templates.length} communication templates`);

  // Create sample inventory items
  const inventoryItems = await Promise.all([
    prisma.inventoryItem.create({
      data: {
        sku: 'TSHIRT-UCL-M',
        name: 'T-shirt Centrale UCL - Taille M',
        qty: 25,
        unitCostCents: 800, // 8€
        resalePriceCents: 1500, // 15€
        location: 'Stock bureau',
      },
    }),
    prisma.inventoryItem.create({
      data: {
        sku: 'STICKER-LOGO',
        name: 'Stickers logo Centrale UCL',
        qty: 200,
        unitCostCents: 50, // 0.50€
        resalePriceCents: 100, // 1€
        location: 'Stock bureau',
      },
    }),
  ]);

  console.log(`📦 Created ${inventoryItems.length} inventory items`);

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });