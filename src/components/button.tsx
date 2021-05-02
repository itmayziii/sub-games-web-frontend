import React from 'react'
import cn from 'classnames'

interface ButtonProps {
  component: React.ElementType
  color?: 'primary' | 'secondary'
  variant?: 'contained' | 'outlined'
  className?: string
}
const Button: TestingThings<ButtonProps> = function Button (props) {
  const Component = props.component
  const color = props.color === undefined ? 'primary' : props.color
  const isPrimary = color === 'primary'
  const isSecondary = color === 'secondary'

  // Need to filter out certain props like "component" that are common in React so they don't get used again.
  const filteredProps = { ...props, ...{ component: undefined } }
  return (
    <Component {...filteredProps} className={cn(
      props.className,
      'shadow-md cursor-pointer text-white rounded hover:shadow-lg whitespace-nowrap',
      {
        'bg-primary': isPrimary,
        'bg-secondary': isSecondary
      })}
    />
  )
}

export type TestingThings<M extends object> = <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C
    } & M & React.ComponentProps<C>
  ) => JSX.Element

export default Button
