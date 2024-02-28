import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    // Como se trata de usuarios mockados, nao salvaremos os dados.
    return NextResponse.json({ message: "OK", statusCode: 200 });
  }