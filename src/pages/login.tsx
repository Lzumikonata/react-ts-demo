import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`

const FormContainer = styled.div`
  box-sizing: border-box;
  margin: 15% 30% 0 30%;
  width: 40%;
  padding: 50px;
  border-radius: 16px;
  box-shadow: 2px 12px 14px 0px rgba(0, 0, 0, 0.3);
`

const Title = styled.p`
  font-size: 26px
`

const FormItem = styled.div`
  margin-bottom: 18px;
  display: flex;
`

const Input = styled.input`
  width: 100%;
`

const Button = styled.button`
  width: 100%;
`

interface IProps {
  history: any
}

export default (props: IProps) => {
  const [form, useForm] = useState({
    password: '',
    username: '',
  })

   const add = (x: number, y: number): void => {
     props.history.push('/home')
   }

  // const log = () => {
  //   console.log(props.history)
  //   return 123
  // }

  return (
    <Container>
      <FormContainer>
        <form>
          <Title>登录</Title>
          <FormItem>
            <Input type="text"
                   placeholder="输入用户名"
                   value={form.username}
                   onChange={e => useForm(Object.assign({}, form, { username: e.target.value }))}/>
          </FormItem>
          <FormItem>
            <Input type="password"
                   placeholder="输入密码"
                   value={form.password}
                   onChange={e => useForm(Object.assign({}, form, { password: e.target.value }))}/>
          </FormItem>
          <FormItem>
            <Button onClick={() => add(1, 2)}>登录</Button>
          </FormItem>
        </form>
      </FormContainer>
    </Container>)}
