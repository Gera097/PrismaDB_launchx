const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });


    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Gera Alba' },
        update: {},
        create: {
          name: 'Gera Alba',
                  username: 'Gera097',
                  mission: 'Node'
        },
      });

    const commander = await prisma.missionCommander.upsert({
      where: { name: 'Carlo Gilmar' },
      update: {},
      create: {
                name: 'Carlo Gilmar',
                username: 'carlogilmar',
                mainStack: 'Elixir',
                currentEnrollment: true,
                hasAzureCertification: true 
      },
    });

    const commander1 = await prisma.missionCommander.upsert({
      where: { name: 'Fernanda Ochoa' },
      update: {},
      create: {
                name: 'Fernanda Ochoa',
                username: 'FerOchoa',
                mainStack: 'Java',
                currentEnrollment: true,
                hasAzureCertification: true 
      },
    });


    console.log('7 entries created');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();