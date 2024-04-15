//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
export async function POST(req,res) {
  // const{body} = await req.json();
  const{email,subject,message} = await req.json();
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["singhankit0460@gmail.com",email],
      subject: 'Ankit Singh',
      react: 
      <>
      <h1>{subject}</h1>
      <p>Thank You for contacting us !</p>
      <p>New message submitted from {email}</p>
      <p>{message}</p>
      </>,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
