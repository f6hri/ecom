import { Container } from "@/components/Shared/Layout";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const TopbarView: React.FC = () => (
    <div className="py-2 bg-black text-white flex items-center justify-center">
        <Container>
            <div className={`flex items-center justify-between relative`}>
                <div className="mx-auto text-sm">
                    650 TL VE ÜZERİ ALIŞVERİŞLERDE ÜCRETSİZ KARGO
                </div>
                <div className="flex items-center gap-5 absolute right-0">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>
        </Container>
    </div>
);

export default TopbarView;