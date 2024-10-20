import React, { ReactNode } from 'react';
import Todo from '../models/todo';

const Todos: React.FunctionComponent<{ items: Todo[] }> = (props) => {
    const { items } = props

    return (
        <Container text={''}>
            {items.map(i => (
                <li key={i.id}>{i.text}</li>
            ))}
        </Container>
    )
}

export default Todos;


function Container(props: { children: any, text: string }) {
    return (
        <div style={{ textAlign: 'center' }}>
            {props.children}
        </div>
    )
}