import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const body = await req.json();
  const created = await prisma.appointment.create({ data: body });

  // Simulating Email Notification (Console for now)
  console.log(`📩 NEW APPOINTMENT REQUEST:
    Name: ${created.name}
    Email: ${created.email}
    Phone: ${created.phone}
    Date: ${created.date}
    Time: ${created.time}`
  );

  return NextResponse.json(created);
}
