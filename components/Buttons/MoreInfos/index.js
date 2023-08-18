import {Button} from "./style"

import Link from "next/link"


export const ButtonMoereInfos = ({goTo}) => {
    return (
        <Link href={goTo}>
            <Button>MORE INFOS</Button>
        </Link>
    )
}