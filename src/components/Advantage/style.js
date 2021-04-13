import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10rem;
`

export const Title = styled.h3`
    font-size: 4.2rem;
    font-weight: bolder;
    margin-bottom: 5rem;
`

export const ItensContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 12rem;
`

export const TitleItem = styled.h5`
    font-size: 2.2rem;
    margin: 1rem 0;
`

export const DescriptItem = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
    width: 16em;
    color: #949494;
`
