const React = require('react');
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}