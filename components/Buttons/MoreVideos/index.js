import Link from "next/link";


import * as S from "./style"

export const ButtonMoereVideos = ({ goTo }) => {
    return (
        <S.Container>
            <S.Button>
                    <Link href={goTo}>
                        More <br />
                        Movies
                    </Link>
            </S.Button>
        </S.Container>
    )
}