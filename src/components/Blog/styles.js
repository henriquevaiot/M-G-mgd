import styled from 'styled-components'

import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'

export const Container = styled.div`
`
export const ContainerBlog = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 500px;
`
export const TitleCard = styled.p`
    font-family: Chapaza, serif;
    line-height: 24px;
    font-size: 30px;
    text-align: start;
`
export const ContainerTitle = styled.div``
export const ContainerBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const BlogText = styled.h1`
    font-size: 80px;
    color: red;
`
export const Box1 = styled.div`
    background-image: url(${blog1});
    height: 417px;
    width: 461px;
    margin-right: 15px;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: end;
`
export const Box2 = styled.div`
    background-image: url(${blog2});
    height: 417px;
    width: 461px;
    margin-right: 15px;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: end;
`
export const Box3 = styled.div`
    background-image: url(${blog3});
    height: 417px;
    width: 461px;
    margin-right: 15px;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: end;
`
export const BoxTitle = styled.div`
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 433px;
    background-color: #fff;
    margin-top: 260px;
`