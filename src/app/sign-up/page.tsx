import Image from "next/image";
import Link from "next/link";

import { RegisterForm } from "@/components/organisms";

export default function SignUp() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-primary gap-4">
            <Link href="/">
                <Image src="/images/fazpay-logo.png" alt="FazPay" width={200} height={87} />
            </Link>
            <div className="p-8 max-w-sm w-full bg-white text-gray-600 rounded-xl">
                <div className="flex justify-center mb-4">
                    <h1 className="text-3xl font-semibold">Cadastre-se</h1>
                </div>
                <RegisterForm />
            </div>
        </div>
    )
}