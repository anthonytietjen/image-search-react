import React from 'react'
import './Tag.scss'

interface IProps {
  text: string
  testId: string
}

export const Tag = (props: IProps) => (
  <span
    data-testid={props.testId}
    className="tag"
  >
    {props.text}
  </span>
)