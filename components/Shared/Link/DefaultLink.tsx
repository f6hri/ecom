import { ILink } from "./interface";
import NextLink from "next/link";

export const DefaultLink: React.FC<ILink> = ({ href, children, customStyle }) => (
    <NextLink href={href} className={`hover:underline ${customStyle}`}>
        {children}
    </NextLink>
);