export function Footer() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Casa da Irrigacao",
    url: "https://www.casadairrigacao.com.br",
    sameAs: [],
  };

  return (
    <footer className="mt-16 border-t border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">Casa da Irrigacao</div>
            <p className="mt-2 text-sm text-slate-600">
              Irrigacao residencial e agricola com suporte tecnico e produtos selecionados.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Atendimento</div>
            <p className="mt-2 text-sm text-slate-600">
              Segunda a sexta • 8h as 18h<br />
              WhatsApp e suporte tecnico
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">SEO / Credibilidade</div>
            <p className="mt-2 text-sm text-slate-600">
              Site rapido, responsivo e pensado para trafego organico.
            </p>
          </div>
        </div>

        <div className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Casa da Irrigacao. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
