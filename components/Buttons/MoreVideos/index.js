import Link from "next/link";


import * as S from "./style"

export const ButtonMoereVideos = ({ goTo }) => {
    return (
        <S.Container>
            <Link href={goTo}>
                <S.Button>
                    More <br />
                    Movies
                </S.Button>
            </Link>
        </S.Container>
    )
}