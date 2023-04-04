export interface IButtonProps {
   type?: 'primary-button' | 'secondary-button' | 'tertiary-button'
   onClick: (args: unknown) => void
   content: string
}
