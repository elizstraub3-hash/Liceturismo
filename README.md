# LICE TURISMO

Site institucional / landing page da **LICE TURISMO** — agência de viagens com
atendimento personalizado. Inspirado no conceito "Planeje sua viagem com
especialistas", com foco nos destinos **Gramado**, **Foz do Iguaçu** e **Beto Carrero**.

## O que tem no site

- **Hero** com formulário de captação de leads ("Fale com um especialista")
- **Destinos em alta**: Gramado, Foz do Iguaçu e Beto Carrero (cards com preço a partir de)
- **Diferenciais** da agência (atendimento humano, roteiro sob medida, parcelamento, suporte)
- **Como funciona** em 3 passos
- **Depoimentos** de clientes
- **Contato** com formulário e botão de WhatsApp
- **Botão flutuante do WhatsApp**
- Layout **responsivo** (desktop, tablet e celular)

## Tecnologia

Site estático — apenas HTML, CSS e JavaScript puro. Não precisa de build.

```
index.html   -> estrutura e conteúdo
styles.css   -> estilos e responsividade
script.js    -> menu mobile e envio dos formulários via WhatsApp
```

## Como rodar localmente

Basta abrir o `index.html` no navegador, ou servir a pasta:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Personalização importante

Antes de publicar, troque os dados de contato:

1. **Número do WhatsApp** — em `script.js`, variável `WHATSAPP`
   (formato internacional, ex.: `5541999999999`).
2. **Links `wa.me`** e telefone/e-mail exibidos no `index.html`.
3. **Preços** dos pacotes e imagens dos destinos, conforme necessário.

## Deploy

Por ser estático, pode ser publicado em GitHub Pages, Vercel, Netlify ou
qualquer hospedagem simples, sem configuração adicional.
