import { HeaderContainer, HeaderContent, Button } from "./styles";
import logoImg from "../../../public/nuint.svg";
import Image from "next/future/image";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={logoImg} alt="" width={120} height={80} />
        <Button>Atualizar</Button>
      </HeaderContent>
    </HeaderContainer>
  );
}
