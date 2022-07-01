import React from 'react'

const Footer = () => {
  return (
    <footer>
      <span>Hecho con ♥ por <a href="https://github.com/anfer-code">anfer-code</a></span>
      <style jsx>{`
        footer {
          padding: 20px;
          border-top: 1px solid #d5d5d5;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </footer>
  )
}

export default Footer