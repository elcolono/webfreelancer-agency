import { sendMail } from "@/utils/mailer";

function formValid(body) {
  return !!body.name && !!body.email;
}

export async function POST(req, res) {
  const body = await req.json();
  if (!formValid) return;

  try {
    const text = JSON.stringify(body);
    await sendMail("Website - New contact request", text, (info) => {
      console.log("Email sent successfully");
      console.log("MESSAGE ID: ", info.messageId);
    });

    return new Response("Success", {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response("Error", {
      status: 500,
    });
  }
}
