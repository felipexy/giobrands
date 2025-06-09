import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Debug: verificar se a API key está carregada
if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY não encontrada no .env.local");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      brandName,
      howFoundUs,
      companySegment,
      brandAge,
      additionalInfo,
    } = body;

    // Validação básica
    if (!name || !email || !brandName) {
      return NextResponse.json(
        { error: "Nome, email e nome da marca são obrigatórios" },
        { status: 400 }
      );
    }

    // Verificar se a API key está presente
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY não configurada" },
        { status: 500 }
      );
    }

    // Enviar email
    console.log("Tentando enviar email...");
    const { data, error } = await resend.emails.send({
      from: "GioBrands <onboarding@resend.dev>",
      to: ["delivered@resend.dev"], // Email de teste do Resend
      subject: `Novo contato de ${name} - ${brandName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
            Novo Contato - GioBrands
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Informações de Contato</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Nome da Marca:</strong> ${brandName}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 15px;">Detalhes do Negócio</h3>
            <p><strong>Como nos encontrou:</strong> ${howFoundUs || "Não informado"}</p>
            <p><strong>Segmento da empresa:</strong> ${companySegment}</p>
            <p><strong>Tempo de mercado:</strong> ${brandAge}</p>
          </div>

          ${
            additionalInfo
              ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #333; margin-bottom: 15px;">Informações Adicionais</h3>
              <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                ${additionalInfo.replace(/\n/g, "<br>")}
              </p>
            </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Este email foi enviado através do formulário de contato do site GioBrands.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error: `Falha ao enviar email: ${error.message || JSON.stringify(error)}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email enviado com sucesso", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
