import React from 'react'
import { Button, Container, Current, Previous, Screen } from './styled'

export default function Calculator() {
    return (
        <Container>
            <Screen>
                <Previous>10 +</Previous>
                <Current>10</Current>
            </Screen>
            <Button control>AC</Button>
            <Button control>DEL</Button>
            <Button control>%</Button>
            <Button operation>÷</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button operation>x</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button operation>-</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button operation>+</Button>
            <Button gridSpan={2}>0</Button>
            <Button >.</Button>
            <Button operation>=</Button>
        </Container>
    )
}