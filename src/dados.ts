/**
 * Conteúdo do portfólio num lugar só.
 *
 * FALTA: tudo que vem do Instagram @patricionlima (o perfil só abre com
 * login, então nada abaixo foi lido de lá). Os textos entre colchetes são
 * provisórios e existem só para mostrar a estrutura.
 */
export const PERFIL = {
  nome: "Patrício Lima",
  instagram: "https://www.instagram.com/patricionlima/",
  usuario: "@patricionlima",
  whatsapp: "", // ex.: "5585999999999"
  email: "",
  cidade: "Fortaleza, Brasil", // FALTA confirmar
};

export const TRABALHOS = [
  { titulo: "[Projeto em destaque]", tag: "[categoria]" },
  { titulo: "[Projeto 2]", tag: "[categoria]" },
  { titulo: "[Projeto 3]", tag: "[categoria]" },
  { titulo: "[Projeto 4]", tag: "[categoria]" },
  { titulo: "[Projeto 5]", tag: "[categoria]" },
  { titulo: "[Projeto 6]", tag: "[categoria]" },
];

export const CLIENTES = ["[Cliente 1]", "[Cliente 2]", "[Cliente 3]", "[Cliente 4]", "[Cliente 5]", "[Cliente 6]", "[Cliente 7]", "[Cliente 8]"];

export const ATOS = [
  { titulo: "[Etapa 1]", texto: "[Como o trabalho começa: conversa, briefing, entender o objetivo.]", itens: ["[entrega]", "[entrega]"] },
  { titulo: "[Etapa 2]", texto: "[Como ele cria: direção, captação, estética.]", itens: ["[entrega]", "[entrega]", "[entrega]"] },
  { titulo: "[Etapa 3]", texto: "[Como entrega: edição, formatos, acompanhamento.]", itens: ["[entrega]", "[entrega]"] },
];

export function linkContato() {
  return PERFIL.whatsapp
    ? `https://wa.me/${PERFIL.whatsapp}?text=${encodeURIComponent("Olá, Patrício! Vi seu portfólio e quero conversar sobre um projeto.")}`
    : PERFIL.instagram;
}
