import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Award,
  Bolt,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Gauge,
  HousePlug,
  LampCeiling,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PanelTop,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/erb-hero.jpg";
import livingImage from "@/assets/erb-living.jpg";
import logoAsset from "@/assets/erb-logo-trimmed.png";
import galleryImage1 from "@/assets/s1.jpeg";
import galleryImage2 from "@/assets/s2.jpeg";
import galleryImage3 from "@/assets/s3.jpeg";
import galleryImage4 from "@/assets/s4.jpeg";
import galleryImage5 from "@/assets/s5.jpeg";
import galleryImage7 from "@/assets/s7.jpeg";
import galleryImage8 from "@/assets/s8.jpeg";
import galleryImage9 from "@/assets/s9.jpeg";
import galleryImage11 from "@/assets/s11.jpeg";
import galleryImage12 from "@/assets/s12.jpeg";
import galleryImage13 from "@/assets/s13.jpeg";
import galleryImage14 from "@/assets/s14.jpeg";
import galleryImage15 from "@/assets/s15.jpeg";
import galleryImage16 from "@/assets/s16.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ERB Elétrica | Soluções Elétricas e Automação" },
      {
        name: "description",
        content:
          "Instalações elétricas, automação residencial e predial, iluminação LED e laudos técnicos com segurança e acabamento impecável.",
      },
      { property: "og:title", content: "ERB Elétrica | Energia para o seu próximo projeto" },
      {
        property: "og:description",
        content: "Soluções elétricas modernas, seguras e inteligentes para residências e empresas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Bolt,
    number: "01",
    title: "Instalações e Reformas Elétricas",
    text: "Execução completa para residências, condomínios e estabelecimentos comerciais.",
  },
  {
    icon: HousePlug,
    number: "02",
    title: "Automação Residencial & Smart Home",
    text: "Controle inteligente de iluminação, tomadas e ambientes integrados.",
  },
  {
    icon: LampCeiling,
    number: "03",
    title: "Iluminação em LED & Luminotécnica",
    text: "Projetos de alto padrão com fitas de LED, perfis e iluminação indireta.",
  },
  {
    icon: PanelTop,
    number: "04",
    title: "Montagem e Manutenção de Quadros (QDC)",
    text: "Adequação, distribuição de circuitos e proteção contra sobrecargas com DPS e DR.",
  },
  {
    icon: Wrench,
    number: "05",
    title: "Manutenção Preventiva e Corretiva",
    text: "Diagnóstico de falhas, eliminação de quedas de energia e curto-circuitos.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Laudos Técnicos e Normas NR-10",
    text: "Vistorias de conformidade e segurança para imóveis e empresas.",
  },
];

const testimonials = [
  {
    quote:
      "Equipe muito organizada e cuidadosa. A automação ficou intuitiva e o acabamento superou nossa expectativa.",
    name: "Mariana Costa",
    role: "Projeto residencial",
  },
  {
    quote:
      "Cumpriram o prazo e explicaram cada etapa. Nosso novo quadro ficou seguro, identificado e muito bem instalado.",
    name: "Ricardo Almeida",
    role: "Reforma comercial",
  },
  {
    quote:
      "O projeto de iluminação transformou completamente o ambiente e ainda reduziu nosso consumo mensal.",
    name: "Fernanda Rocha",
    role: "Projeto luminotécnico",
  },
];

const galleryImages = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage11,
  galleryImage7,
  galleryImage8,
  galleryImage9,
  galleryImage12,
  galleryImage13,
  galleryImage14,
  galleryImage15,
  galleryImage16,
];

const WHATSAPP_NUMBER = "5511974575827";
const CONTACT_EMAIL = "contato@erbeletrica.com";
const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const emailLink = (subject: string, body: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2a9.84 9.84 0 0 0-8.53 14.74L2 22l5.39-1.41A9.94 9.94 0 0 0 12.04 22 9.99 9.99 0 0 0 12.04 2Zm0 18.17a8.1 8.1 0 0 1-4.14-1.13l-.3-.18-3.2.84.85-3.11-.2-.32a8.1 8.1 0 0 1-1.25-4.33 8.23 8.23 0 1 1 8.24 8.23Zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.49-.08 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const service = form.get("service");
    const location = form.get("location");
    const name = form.get("name");
    const phone = form.get("phone");
    const details = form.get("details");
    setSent(true);
    window.location.href = emailLink(
      "Solicitação de orçamento - ERB Elétrica",
      `Olá, ERB Elétrica!\n\nNome: ${name}\nTelefone / WhatsApp: ${phone}\nServiço: ${service}\nLocal: ${location}\nDetalhes do projeto: ${details || "Não informado"}`,
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" aria-label="ERB Elétrica — início" className="shrink-0">
            <img src={logoAsset} alt="ERB Elétrica" className="h-12 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {[
              ["Serviços", "#servicos"],
              ["Diferenciais", "#diferenciais"],
              ["Projetos", "#projetos"],
              ["Galeria", "#galeria"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>
          <Button
            asChild
            className="hidden h-11 bg-accent px-5 font-bold text-accent-foreground shadow-accent hover:bg-accent/90 md:inline-flex"
          >
            <a href="#orcamento">
              Solicitar orçamento <ArrowRight />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 md:hidden">
            {[
              ["Serviços", "#servicos"],
              ["Diferenciais", "#diferenciais"],
              ["Projetos", "#projetos"],
              ["Galeria", "#galeria"],
              ["Contato", "#contato"],
            ].map(([item, href]) => (
              <a
                key={item}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border py-3 font-medium"
              >
                {item}
              </a>
            ))}
            <Button
              asChild
              className="mt-5 h-12 w-full bg-whatsapp font-bold text-whatsapp-foreground hover:bg-whatsapp/90"
            >
              <a
                href={whatsappLink("Olá, ERB Elétrica! Gostaria de solicitar um orçamento.")}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon /> Solicitar orçamento
              </a>
            </Button>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative min-h-[780px] pt-20 lg:min-h-[860px]">
        <img
          src={heroImage}
          alt="Painéis elétricos industriais iluminados em uma fábrica moderna"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-5 py-20 lg:min-h-[780px] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-md">
              <Zap className="size-4 fill-current" /> Energia para o seu próximo projeto
            </div>
            <h1 className="max-w-3xl font-display text-[2.6rem] font-bold leading-[1.06] text-hero-foreground sm:text-6xl lg:text-7xl">
              Soluções elétricas <span className="text-primary">modernas</span>, seguras e
              inteligentes.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-hero-muted">
              Da instalação à automação completa, entregamos tecnologia, segurança e acabamento
              impecável para transformar seus ambientes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="min-h-14 whitespace-normal bg-whatsapp px-6 py-3 text-center text-base font-bold text-whatsapp-foreground shadow-whatsapp hover:bg-whatsapp/90 sm:px-7"
              >
                <a
                  href={whatsappLink("Olá, ERB Elétrica! Gostaria de solicitar um orçamento.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon /> Solicitar Orçamento no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 border-hero-foreground/20 bg-hero-foreground/5 px-7 text-base text-hero-foreground backdrop-blur-md hover:bg-hero-foreground/10 hover:text-hero-foreground"
              >
                <a
                  href={emailLink(
                    "Solicitação de orçamento - ERB Elétrica",
                    "Olá, ERB Elétrica! Gostaria de solicitar um orçamento.",
                  )}
                >
                  <Mail /> Enviar e-mail
                </a>
              </Button>
            </div>
            <div className="mt-12 grid max-w-2xl gap-4 border-t border-hero-foreground/15 pt-7 sm:grid-cols-3">
              {[
                [ShieldCheck, "Certificação", "Profissionais NR-10"],
                [Clock3, "Agilidade", "Atendimento rápido"],
                [Award, "Confiança", "Serviço com garantia"],
              ].map(([Icon, title, text]) => {
                const CredIcon = Icon as typeof ShieldCheck;
                return (
                  <div key={String(title)} className="flex items-center gap-3">
                    <CredIcon className="size-6 text-primary" />
                    <div>
                      <p className="text-sm font-bold text-hero-foreground">{String(title)}</p>
                      <p className="text-xs text-hero-muted">{String(text)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 translate-y-1/2 lg:block">
          <div className="flex items-center gap-4 border border-border bg-card px-7 py-5 shadow-2xl">
            <span className="flex size-11 items-center justify-center bg-primary/15 text-primary">
              <Gauge />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                Resposta rápida
              </p>
              <p className="font-display text-lg font-bold">Seu orçamento começa aqui</p>
            </div>
            <ChevronRight className="ml-5 text-accent" />
          </div>
        </div>
      </section>

      <section id="servicos" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-kicker">Serviços especializados</p>
              <h2 className="section-title mt-4">Engenharia elétrica para cada necessidade.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              Soluções completas, executadas com precisão técnica e atenção a cada detalhe — do
              diagnóstico à entrega final.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative flex min-h-80 flex-col overflow-hidden border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-electric sm:p-7 lg:col-span-2"
              >
                <span className="absolute right-5 top-4 font-display text-5xl font-bold text-muted/70">
                  {service.number}
                </span>
                <div className="mb-8 flex size-12 items-center justify-center bg-primary/12 text-primary">
                  <service.icon />
                </div>
                <h3 className="max-w-xs font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{service.text}</p>
                <a
                  href={whatsappLink(
                    `Olá, ERB Elétrica! Gostaria de cotar o serviço: ${service.title}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto flex items-center gap-2 pt-7 text-sm font-bold text-primary transition-colors hover:text-accent"
                >
                  Cotar este serviço <ChevronRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-primary/30 bg-primary/8 p-6 sm:flex-row sm:items-center lg:p-8">
            <div>
              <h3 className="font-display text-xl font-bold">
                Não encontrou exatamente o que precisa?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fale com um especialista e receba uma orientação personalizada.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="h-12 w-full shrink-0 bg-whatsapp font-bold text-whatsapp-foreground hover:bg-whatsapp/90 sm:w-auto"
            >
              <a
                href={whatsappLink(
                  "Olá, ERB Elétrica! Preciso de orientação para um serviço elétrico.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon /> Conversar agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="border-y border-border bg-secondary/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="section-kicker">Por que escolher a ERB</p>
            <h2 className="section-title mt-4">Segurança que você vê. Qualidade que você sente.</h2>
            <p className="mt-6 max-w-lg leading-7 text-muted-foreground">
              Não basta funcionar: cada instalação precisa ser segura, durável, organizada e pronta
              para o futuro.
            </p>
            <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
              {[
                [
                  ShieldCheck,
                  "Segurança em primeiro lugar",
                  "Procedimentos alinhados às normas técnicas.",
                ],
                [Clock3, "Pontualidade", "Planejamento claro e respeito ao seu tempo."],
                [Award, "Equipe qualificada", "Conhecimento técnico aplicado em cada etapa."],
                [Sparkles, "Acabamento impecável", "Organização e cuidado dentro do seu espaço."],
              ].map(([Icon, title, text]) => {
                const FeatureIcon = Icon as typeof ShieldCheck;
                return (
                  <div key={String(title)} className="bg-background p-6">
                    <FeatureIcon className="mb-5 size-7 text-accent" />
                    <h3 className="font-bold">{String(title)}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{String(text)}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            id="projetos"
            className="relative min-h-[520px] overflow-hidden border border-border"
          >
            <img
              src={livingImage}
              alt="Detalhes de iluminação e automação em ambiente residencial"
              loading="lazy"
              width={1920}
              height={1080}
              className="h-full w-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-project-overlay" />
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                Ambientes conectados
              </p>
              <h3 className="mt-3 max-w-md font-display text-3xl font-bold text-hero-foreground">
                Iluminação inteligente que acompanha cada momento.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="border-y border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <p className="section-kicker">Galeria de fotos</p>
              <h2 className="section-title mt-4">
                Projetos e detalhes que dão vida a cada ambiente.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
                Confira alguns registros dos trabalhos da ERB Elétrica e inspire-se para o seu
                próximo projeto.
              </p>
            </div>
            <Carousel
              opts={{ loop: true }}
              className="group relative min-w-0"
              aria-label="Galeria de fotos dos projetos da ERB Elétrica"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={image}>
                    <div className="flex aspect-[3/2] items-center justify-center overflow-hidden rounded-sm border border-border bg-card">
                      <img
                        src={image}
                        alt={`Foto ${index + 1} da galeria de projetos da ERB Elétrica`}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                aria-label="Foto anterior"
                className="left-3 top-1/2 z-10 size-11 -translate-y-1/2 border-white/30 bg-background/70 text-foreground backdrop-blur hover:bg-background"
              />
              <CarouselNext
                aria-label="Próxima foto"
                className="right-3 top-1/2 z-10 size-11 -translate-y-1/2 border-white/30 bg-background/70 text-foreground backdrop-blur hover:bg-background"
              />
            </Carousel>
          </div>
        </div>
      </section>

      <section id="orcamento" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-border bg-card lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative overflow-hidden bg-primary p-8 text-primary-foreground lg:p-12">
            <Zap className="absolute -bottom-16 -right-12 size-72 opacity-10" />
            <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">
              Simulação rápida
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold">
              Conte seu projeto. Nós cuidamos da energia.
            </h2>
            <p className="mt-5 leading-7 opacity-80">
              Preencha os dados ao lado e envie sua solicitação diretamente para nosso atendimento.
            </p>
            <ul className="mt-10 space-y-4 text-sm font-medium">
              {["Retorno ágil", "Avaliação personalizada", "Orçamento sem compromisso"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-6 items-center justify-center bg-primary-foreground/15">
                      <Check className="size-4" />
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-10 space-y-3 text-sm">
              <a
                href={emailLink(
                  "Solicitação de orçamento - ERB Elétrica",
                  "Olá, ERB Elétrica! Gostaria de solicitar um orçamento.",
                )}
                className="flex items-center gap-3 font-semibold transition-opacity hover:opacity-80"
              >
                <Mail className="size-4" /> Enviar e-mail
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-5 p-8 lg:grid-cols-2 lg:p-12">
            <label className="field-label lg:col-span-2">
              Tipo de serviço
              <select name="service" required className="field-input">
                <option value="">Selecione uma opção</option>
                <option>Instalação ou reforma elétrica</option>
                <option>Automação residencial</option>
                <option>Projeto de iluminação</option>
                <option>Quadro de distribuição</option>
                <option>Laudo ou adequação NR-10</option>
              </select>
            </label>
            <label className="field-label">
              Seu nome
              <input
                name="name"
                required
                className="field-input"
                placeholder="Como podemos chamar você?"
              />
            </label>
            <label className="field-label">
              Telefone / WhatsApp
              <input
                name="phone"
                required
                inputMode="tel"
                className="field-input"
                placeholder="(00) 00000-0000"
              />
            </label>
            <label className="field-label lg:col-span-2">
              Local do serviço
              <input
                name="location"
                required
                className="field-input"
                placeholder="Cidade e bairro"
              />
            </label>
            <label className="field-label lg:col-span-2">
              Conte um pouco sobre o projeto
              <textarea
                name="details"
                className="field-input min-h-28 resize-y"
                placeholder="Ex.: reforma completa de um apartamento..."
              />
            </label>
            <div className="flex flex-col items-start gap-4 lg:col-span-2 sm:flex-row sm:items-center">
              <Button
                type="submit"
                size="lg"
                className="h-12 w-full bg-accent px-7 font-bold text-accent-foreground hover:bg-accent/90 sm:w-auto"
              >
                <Mail /> Enviar por e-mail
              </Button>
              {sent && (
                <p className="flex items-center gap-2 text-sm font-medium text-success">
                  <CheckCircle2 className="size-4" /> E-mail preparado para envio.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/35 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-kicker">Clientes satisfeitos</p>
            <h2 className="section-title mt-4">Confiança construída em cada entrega.</h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="border border-border bg-card p-7">
                <div className="mb-6 flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-base leading-7">“{item.quote}”</blockquote>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-primary py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">
              Atendimento direto
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              Pronto para tirar seu projeto do papel?
            </h2>
          </div>
          <Button
            asChild
            size="lg"
            className="min-h-13 w-full shrink-0 whitespace-normal bg-whatsapp px-6 py-3 font-bold text-whatsapp-foreground shadow-whatsapp hover:bg-whatsapp/90 sm:w-auto"
          >
            <a
              href={whatsappLink(
                "Olá, ERB Elétrica! Quero solicitar um orçamento para o meu projeto.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon /> Solicitar orçamento no WhatsApp
            </a>
          </Button>
        </div>
      </section>

      <footer id="contato" className="bg-footer py-16 text-footer-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <img src={logoAsset} alt="ERB Elétrica" className="h-16 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-6 text-footer-muted">
              Soluções elétricas, automação e iluminação desenvolvidas para tornar seus espaços mais
              seguros, eficientes e inteligentes.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Atendimento</h3>
            <div className="mt-5 space-y-4 text-sm text-footer-muted">
              <a
                href={emailLink(
                  "Contato - ERB Elétrica",
                  "Olá, ERB Elétrica! Gostaria de falar com a equipe.",
                )}
                className="footer-link"
              >
                <Mail /> Enviar e-mail
              </a>
              <a href="tel:+5511974575827" className="footer-link">
                <Phone /> (11) 97457-5827
              </a>
            </div>
          </div>
          <div>
            <h3 className="footer-title">Informações</h3>
            <div className="mt-5 space-y-4 text-sm text-footer-muted">
              <p className="footer-link">
                <Clock3 /> Atendimento sob consulta
              </p>
              <p className="footer-link">
                <MapPin /> Atendimento regional
              </p>
              <p className="footer-link">
                <Building2 /> Industrial, comercial e predial
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-footer-border px-5 pt-7 text-xs text-footer-muted sm:flex-row sm:justify-between lg:px-8">
          <p>© 2026 ERB Elétrica. Todos os direitos reservados.</p>
          <p>Energia • Tecnologia • Segurança</p>
        </div>
      </footer>

      <a
        href={whatsappLink("Olá, ERB Elétrica! Gostaria de solicitar uma cotação rápida.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a ERB Elétrica pelo WhatsApp"
        className="whatsapp-float fixed bottom-4 right-4 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-transform hover:scale-105 sm:bottom-5 sm:right-5"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </main>
  );
}
