import Image from "next/image";
import Link from "next/link"

import { LoginForm } from "@/components/organisms";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#2817e8] to-[#eb15ce] gap-4">
      <h1 className="text-4xl font-bold tracking-wide">Login</h1>
      <div className="p-8 max-w-sm w-full bg-white text-gray-600 rounded-xl">
        <div className="flex justify-center mt-2 mb-4">
          <Image src="/images/fazpay-logo-alt.png" alt="FazPay" width={200} height={87} />
        </div>
        <LoginForm />
        <div className="flex flex-row mt-6 text-center gap-2">
          Não tem acesso?
          <Link 
            href={{ pathname: '/sign-up' }}
            className="text-primary-100 font-semibold hover:underline-none">
            Cadastre-se agora
          </Link>
        </div>
      </div>
    </div>
  );
}
