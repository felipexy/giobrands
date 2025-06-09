"use client";

import { useState } from "react";
import { Header, Footer, ProjectLatestWorks } from "@/components";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
    howFoundUs: "",
    companySegment: "",
    brandAge: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Mensagem enviada com sucesso! Entraremos em contato em breve."
        );
        // Reset form
        setFormData({
          name: "",
          email: "",
          brandName: "",
          howFoundUs: "",
          companySegment: "",
          brandAge: "",
          additionalInfo: "",
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.error || "Erro ao enviar mensagem. Tente novamente."
        );
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Erro ao enviar mensagem. Verifique sua conexão e tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-4 md:px-6 lg:px-24 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            VAMOS TRAZER SUA
            <br />
            VISÃO À VIDA.
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Entre em contato para discutir como podemos transformar suas ideias
            em realidades visuais únicas, aproveitando nosso compromisso com a
            excelência e inovação para dar vida à sua visão.
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 mb-6"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-bold text-black tracking-wider mb-4">
              [CONTATO]
            </h3>
            <div className="text-sm text-gray-600 leading-relaxed">
              <p className="mb-4">
                Responderemos sua solicitação de orçamento em até 24 horas. Se
                sua solicitação for urgente, sinta-se à vontade para nos
                contatar diretamente em{" "}
                <a
                  href="mailto:hello@giobrands.co"
                  className="text-black underline"
                >
                  hello@giobrands.co
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu Nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm text-black placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Seu Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm text-black placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Brand Name */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Nome da sua marca
                </label>
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  placeholder="Nome da Marca"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm text-black placeholder:text-gray-500"
                  required
                />
              </div>

              {/* How did you get to Gio Brands */}
              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  Como você conheceu a Gio Brands?
                </label>
                <div className="space-y-3">
                  {[
                    "Instagram",
                    "Website",
                    "Behance",
                    "LinkedIn",
                    "Indicação",
                    "Google",
                    "Outro",
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="howFoundUs"
                        value={option}
                        onChange={handleInputChange}
                        className="mr-3 text-black focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Company Segment */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Qual é o segmento da empresa?
                </label>
                <input
                  type="text"
                  name="companySegment"
                  value={formData.companySegment}
                  onChange={handleInputChange}
                  placeholder="Tecnologia"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm text-black placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Brand Age */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Há quanto tempo a marca está estabelecida no mercado?
                </label>
                <input
                  type="text"
                  name="brandAge"
                  value={formData.brandAge}
                  onChange={handleInputChange}
                  placeholder="5 anos"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm text-black placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Sinta-se à vontade para contribuir com outras informações
                  relevantes sobre sua marca.
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Compartilhe qualquer informação adicional relevante sobre sua marca."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm text-black resize-none placeholder:text-gray-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full cursor-pointer py-4 px-6 rounded-md font-medium text-sm tracking-wider transition-colors duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>

              {/* Success/Error Messages */}
              {submitStatus !== "idle" && (
                <div
                  className={`mt-4 p-4 rounded-md text-sm ${
                    submitStatus === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
      <ProjectLatestWorks />
      <Footer />
    </div>
  );
}
