import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const test = await prisma.appointment.findMany();
    return NextResponse.json(test);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
