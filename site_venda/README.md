# 🌐 Site de Vendas - Double Strategy Creator

Página de vendas moderna, responsiva e de alta conversão para o aplicativo **Double Strategy Creator** (Apostador Automático do Double Blaze), com integração para links de pagamento da **InfinitePay** e download para Windows.

---

## 📁 Estrutura de Arquivos
- **`index.html`**: Estrutura semântica completa (Hero interativo, Grid de Recursos, Passo a Passo, Tabela de Preços Mensal/Anual, Seção de Download, Depoimentos, FAQ e Modal de Checkout).
- **`styles.css`**: Design moderno com Glassmorphism, temas escuros futuristas, gradientes neon e responsividade para celular, tablet e computador.
- **`script.js`**: Lógica interativa para troca de planos (Mensal/Anual com desconto), simulação em tempo real da roleta, modal de pagamento InfinitePay e sanfona de FAQ.
- **`assets/`**: Ícone oficial e imagens do projeto.

---

## 💳 Como Configurar seus Links de Pagamento da InfinitePay

1. Abra o aplicativo da **InfinitePay** no celular ou acesse o portal web.
2. Acesse a opção **Vender / Link de Pagamento (InfiniteLink)**.
3. Crie dois links de cobrança:
   - **Plano Mensal**: R$ 97,00 (Aceitando Pix e Cartão)
   - **Plano Anual VIP**: R$ 697,00 (Aceitando Pix e Cartão em até 12x)
4. Abra o arquivo [script.js](file:///d:/Ramon/scripts/Selenium_teste/site_venda/script.js) e cole seus links na constante `INFINITEPAY_LINKS`:

```javascript
const INFINITEPAY_LINKS = {
  mensal: 'SEU_LINK_INFINITEPAY_MENSAL_AQUI',
  anual: 'SEU_LINK_INFINITEPAY_ANUAL_AQUI'
};
```

---

## 🚀 Onde Hospedar Gratuitamente em Menos de 1 Minuto

Como o site é 100% estático (HTML5, CSS3, JavaScript puro), você pode hospedá-lo gratuitamente em qualquer uma das plataformas abaixo:

### 1. Vercel (Recomendado)
1. Instale a CLI: `npm i -g vercel` (ou acesse [vercel.com](https://vercel.com))
2. No terminal dentro da pasta `site_venda`, execute `vercel` e siga as instruções.
3. Seu site estará online com HTTPS e CDN mundial gratuito.

### 2. Netlify
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste e solte a pasta `site_venda`.
3. Pronto! O site estará online imediatamente com domínio `.netlify.app` ou seu domínio próprio.

### 3. GitHub Pages
1. Crie um repositório no GitHub com os arquivos da pasta `site_venda`.
2. Vá em **Settings > Pages** e ative o GitHub Pages na branch `main`.

---

## 💻 Como Vincular o Download do Executável Windows

Para permitir que o cliente baixe o executável `.exe` direto pelo site:
1. Compile seu aplicativo executando o script `./build_exe.bat` na raiz do projeto.
2. Copie o arquivo gerado `dist/BlazeDoubleIA.exe` para a pasta `site_venda/assets/DoubleStrategyCreator.exe`.
3. No arquivo `index.html`, o link de download pode apontar diretamente para `href="assets/DoubleStrategyCreator.exe"` ou para um link direto no Google Drive/Dropbox/GitHub Releases.

