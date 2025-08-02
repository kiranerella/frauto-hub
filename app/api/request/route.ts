import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const body = await req.json();
  const created = await prisma.requestLead.create({
    data: {
      ...body,
      budget: Number(body.budget),
    },
  });

  return NextResponse.json(created);
}
