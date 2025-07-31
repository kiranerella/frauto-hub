import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  // TODO: Save to DB or notify team
  console.log('🔍 Lead request received:', data);

  return NextResponse.json({ success: true });
}
