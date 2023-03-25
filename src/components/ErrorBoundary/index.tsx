import { Component, ErrorInfo } from 'react'
import { IProps, IState } from './types'

class ErrorBoundary extends Component<IProps, IState> {
   public state: IState = {
      hasError: false,
   }

   public static getDerivedStateFromError(_: Error): IState {
      return { hasError: true }
   }

   public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      console.error('Uncaught error:', error, errorInfo)
   }

   public render() {
      if (this.state.hasError) {
         return (
            <main>
               <h1>Sorry.. there was an error</h1>;
            </main>
         )
      }

      return this.props.children
   }
}

export default ErrorBoundary
