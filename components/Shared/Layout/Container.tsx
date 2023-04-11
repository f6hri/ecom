import { ILayout } from "./interface";

export const Container: React.FC<ILayout> = ({ children, customStyle }) => (
    <div className={`container mx-auto ${customStyle}`}>
        {children}
    </div>
);