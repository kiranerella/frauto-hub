import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const appointments = await prisma.appointment.findMany({
    orderBy: { date: 'asc' }
  });

  return NextResponse.json(appointments);
}
