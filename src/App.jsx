import React from 'react'
import { Container, Button } from 'react-bootstrap'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Container className="py-5">
        <h1 className="mb-4">Vite + React + Bootstrap</h1>
        <p>This is a minimal starter mounted with Vite.</p>
        <Button variant="primary">Primary</Button>
      </Container>
    </>
  )
}
