import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  // Validação mockada.
  if (username !== 'johndoe' || password !== '123456')
    return NextResponse.json({ message: "Unauthorized", statusCode: 401 });

  // Cria um token randomico.
  const token = () => Math.random().toString(36).substr(2);
  const result = {
    access_token: token() + token(),
    user: {
      name: "John Doe",
      email: "johndoe@teste.com",
      image: request.body,
    }
  }

  return NextResponse.json({ message: "OK", statusCode: 200, result });
}
