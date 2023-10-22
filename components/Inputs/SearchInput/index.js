import * as S from "./style"


export const InpuSearch = ({handleChange}) => {
    return (
        <S.InputContainer
            type='text'
            placeholder="Search by movie"
            onChange={e => handleChange(e.target.value)}
        />
    )
}