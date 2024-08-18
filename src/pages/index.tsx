import MenuItem from "@/components/template/MenuItem";
import Titulo from "@/components/template/Titulo";
import { IconArrowsDownUp, IconForms, IconNumbers, IconShoppingCart } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="
      flex flex-col justify-center items-center h-screen
      bg-gradient-to-br from-zinc-800 to-black gap-20
    ">

      <Titulo texto1="Gerenciamento de " texto2="Estado"/>

      <div className="flex flex-wrap justify-around w-3/5">
        <MenuItem icone={<IconForms />} texto="Estado" url="/revisao/estado" />
        <MenuItem icone={<IconArrowsDownUp />} texto="Comunicação" url="/revisao/comunicacao" />
        <MenuItem icone={<IconNumbers />} texto="Básico" url="/basico" />
        <MenuItem icone={<IconShoppingCart />} texto="Loja" url="/loja" />
      </div>

    </div>
  )
}
