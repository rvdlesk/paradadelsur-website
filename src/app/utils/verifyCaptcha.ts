// src/utils/verifyCaptcha.ts
export const verifyCaptcha = async (captchaToken: string): Promise<boolean> => {
    const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;
  
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
    try {
      const response = await fetch(verificationUrl, { method: 'POST' });
      const data = await response.json();
      return data.success;
    } catch {
      return false;
    }
  };
  