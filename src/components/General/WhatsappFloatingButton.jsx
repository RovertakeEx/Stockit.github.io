import React from 'react'
import { AnimatedWhatsAppButton } from './WhatsAppButton';

const WhatsappFloatingButton = () => {
  return (
    <div className='container mx-auto fixed bottom-10 z-50 justify-end floating-container'>
        <AnimatedWhatsAppButton/>
    </div>
  )
}

export default WhatsappFloatingButton