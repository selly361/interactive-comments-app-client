export interface IButtonProps {
   type?: 'primary-button' | 'secondary-button' | 'tertiary-button'
   onClick: () => void
   content: string
}
