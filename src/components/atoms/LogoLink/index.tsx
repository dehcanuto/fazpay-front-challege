import Image from "next/image";
import Link from "next/link"

const LogoLink = () => {
    return (
        <Link href="/u" className="flex items-center justify-center mt-8">
            <Image src="/images/fazpay-logo-purple.png" alt="FazPay" width={150} height={37} />
        </Link>
    )
}

export default LogoLink;