import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/mocks';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const result = products.find(item => item.id === +params.id);
  return result ? 
    NextResponse.json({ message: "OK", item: result, statusCode: 200 }) :
    NextResponse.json({ message: "Not Found", statusCode: 204 });
}

export async function POST(request: NextRequest) {
  // Como se trata de produtos mockados, nao salvaremos os dados.
  return NextResponse.json({ message: "OK", statusCode: 200 });
}