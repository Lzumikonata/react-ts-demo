import * as React from 'react'
import { withRouter, HashRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import Login from '../pages/login'
import { useEffect } from 'react'

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`
const ListWrapper = styled.div`
  
`

const Lists = styled.ul`
  height: 80vh;
  width: 20vw;
  margin: 3vh 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  overflow: auto;
  border-radius: 6px;
  `

const Content = styled.main`
  width: 70vw;
  width: 80vw;
`

const List = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  height: 5vh;
  text-align: center;
`

interface IList {
  name: string,
  path: string
}

export default () => {
  const list: IList[] = [{ name: '孙笑川', path: '/li1' }, { name: '孙笑川', path: '/li2' }, { name: '孙笑川', path: '/li3' }, { name: '孙笑川', path: '/li4' }, { name: '孙笑川', path: '/li5' }, { name: '孙笑川', path: '/li6' }, { name: '孙笑川', path: '/li7' }]

  const getList = async (): Promise<any> => {
    return await new Promise(((resolve, reject) => {
      resolve(list)
    }))
  }

  const toList = (e: any): void => {
    console.log(e.target.getAttribute('class'))
  }

  useEffect(() => {
     getList().then(res => {
        console.log(res)
     })
  })

  return (
    <Container>
      <ListWrapper>
        <h2>NM$L</h2>
        <Lists onClick={ e => toList(e) }>
          { list.map((item: IList, index) => <List key={ index } className={ item.path }>{ item.name }</List>) }
        </Lists>
        <h2>NM$L</h2>
      </ListWrapper>
      <Content>
        <HashRouter>
          <Route component={ withRouter(Login) } path="name"/>
        </HashRouter>
      </Content>
    </Container>)
}
