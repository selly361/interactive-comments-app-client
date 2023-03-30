export interface IButtonProps {
   type?: 'primary-button' | 'secondary-button' | 'tertiary-button'
   onClick: (args: any) => void
   content: string
}
