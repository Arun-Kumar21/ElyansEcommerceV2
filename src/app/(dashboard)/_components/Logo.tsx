import Image from "next/image"

const Logo = () => {
    return(
        <Image
            height={120}
            width={120}
            alt="logo"
            src="/mainlogo.svg"
        />
    )
}

export default  Logo;