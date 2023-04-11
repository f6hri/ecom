import Image from "next/image";
import { DefaultLink } from "@/components/Shared/Link";
import { FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import { Container } from "@/components/Shared/Layout";

const NavbarView: React.FC = () => (
    <Container>
        <div className={`flex items-center justify-between py-5 relative`}>
            <div className={`mx-auto`}>
                <DefaultLink href="/">
                    <Image
                        src="/logo.png"
                        alt="F&M_LOGO"
                        width={150}
                        height={70}
                    />
                </DefaultLink>
            </div>
            <div className={`flex items-center gap-8 absolute right-0`}>
                <DefaultLink href="/login" customStyle={`text-sm text-center font-medium`}>
                    <FiUser className={`text-2xl mx-auto`} />
                    <p>Giriş Yap</p>
                </DefaultLink>
                <DefaultLink href="/like" customStyle={`text-sm text-center font-medium`}>
                    <FiHeart className={`text-2xl mx-auto`} />
                    <p>Favorilerim</p>
                </DefaultLink>
                <DefaultLink href="/cart" customStyle={`text-sm text-center font-medium`}>
                    <FiShoppingCart className={`text-2xl mx-auto`} />
                    <p>Sepetim</p>
                </DefaultLink>
            </div>
        </div>
    </Container>
);

export default NavbarView;
