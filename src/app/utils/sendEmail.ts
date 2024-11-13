// src/utils/sendEmail.ts
export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  export const sendEmail = async (formData: FormData): Promise<string> => {
    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY as string, // Asegúrate de definir esta variable en .env.local
        },
        body: JSON.stringify({
          sender: { name: 'Website', email: 'parada.dsrd@gmail.com' },
          to: [{ email: 'parada.dsrd@gmail.com', name:'Parada' }], // Cambia este correo a tu dirección de destino
          subject: `Mesaje del sitio web: ${formData.subject}`,
          htmlContent: `<p><strong>Nombre:</strong> ${formData.name}</p>
                        <p><strong>Correo:</strong> ${formData.email}</p>
                        <p><strong>Mensaje:</strong><br>${formData.message}</p>`,
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
      throw new Error(`Error en la respuesta del servidor: ${errorText}`);
      }
  
      return 'Correo enviado con éxito';
    } catch (error) {
        throw new Error('Error al enviar el correo: ' + (error as Error).message);
    }
  };
  