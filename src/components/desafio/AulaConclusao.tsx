import { IconCheck } from "@tabler/icons-react";

interface AulaConclusaoProps {
    concluida: boolean
    onClick?: () => void
}

export default function AulaConclusao(props: AulaConclusaoProps) {
    return (
        <button className={`
            flex justify-center items-center
            border border-zinc-400
            w-6 h-6 rounded-full
            ${props.concluida && 'bg-green-500'}
        `} onClick={props.onClick}>
            {props.concluida && <IconCheck size={18} stroke={3} />}
            
        </button>
    )
}