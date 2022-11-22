import styled from 'styled-components'

import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'

export const Container = styled.div``
export const ContainerBlog = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
`
export const TitleCard = styled.p`
    font-family: Chapaza, serif;
    line-height: 24px;
    font-size: 30px;
    text-align: start;
`
export const ContainerBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

@media (max-width: 600px) {
    flex-direction: column;
}
`
export const BlogText = styled.h1`
    font-size: 80px;
    color: red;
`
export const Box1 = styled.div`
    background-image: url(${blog1});
    margin-right: 15px;

    @media (min-width: 600px) {
        background-image: url(${blog1});
        /* height: 200px; */
        margin-right: 15px;
        background-color: blue;
        display: flex;
        align-items: center;
        justify-content: end;
    }
`
export const Box2 = styled.div`
    background-image: url(${blog2});
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: end;
`
export const Box3 = styled.div`
    background-image: url(${blog3});
    height: 417px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: end;
`
export const BoxTitle = styled.div`
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 250px;
    width: 430px;
    background-color: #fff;
    margin-left: 35px;
`