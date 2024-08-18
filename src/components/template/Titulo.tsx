interface TituloProps {
    texto1: string
    texto2: string
}


export default function Titulo(props: TituloProps) {
    return (
        <div className="text-6xl">
            <span className="opacity-40 font-thin">{props.texto1}</span>

            <span className="
                font-black 
                bg-gradient-to-r from-blue-500 to-green-500
                text-transparent bg-clip-text
            ">
                {props.texto2}
            </span>
        </div>
    )
}