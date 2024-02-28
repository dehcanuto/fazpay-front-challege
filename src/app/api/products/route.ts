import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/mocks';

export async function GET() {
  return NextResponse.json({ message: "OK", items: products, statusCode: 200 });
}

export async function POST(request: NextRequest) {
  // Como se trata de produtos mockados, nao salvaremos os dados.
  return NextResponse.json({ message: "OK", statusCode: 200 });
}