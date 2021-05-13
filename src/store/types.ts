export type Status = 'loading' | 'warning' | 'success' | 'error'

export interface State {
  status: Status
  user: {
    username: string
    auth: string
  }
}

export type Action =
  | { type: 'UPDATE_USER'; payload?: State }
  | { type: 'CLEAR_USER'; payload?: State }

export type Reducer = (state: State, action: Action) => State
