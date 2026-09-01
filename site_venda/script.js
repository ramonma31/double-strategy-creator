// ==========================================================================
// DOUBLE STRATEGY CREATOR - CLIENT JS
// Interactive Pricing, Checkout InfinitePay, Live Roulette, FAQ & Download
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // 2. Interactive Pricing Plan Switcher (Mensal / Anual)
  const switchBtn = document.getElementById('billingSwitch');
  const labelMonthly = document.getElementById('labelMonthly');
  const labelAnnual = document.getElementById('labelAnnual');
  
  const priceMonthly = document.getElementById('priceMonthly');
  const periodMonthly = document.getElementById('periodMonthly');
  const priceAnnual = document.getElementById('priceAnnual');
  const periodAnnual = document.getElementById('periodAnnual');
  
  let isAnnual = false;

  function updatePricing() {
    if (isAnnual) {
      switchBtn.classList.add('active');
      labelAnnual.classList.add('active');
      labelMonthly.classList.remove('active');
      
      // Anual: R$ 697/ano (~ R$ 58/mês)
      priceAnnual.textContent = '697';
      periodAnnual.textContent = '/ano (2 meses grátis)';
      
      priceMonthly.textContent = '97';
      periodMonthly.textContent = '/mês';
    } else {
      switchBtn.classList.remove('active');
      labelMonthly.classList.add('active');
      labelAnnual.classList.remove('active');
      
      priceMonthly.textContent = '97';
      periodMonthly.textContent = '/mês';
      
      priceAnnual.textContent = '697';
      periodAnnual.textContent = '/ano';
    }
  }

  if (switchBtn) {
    switchBtn.addEventListener('click', () => {
      isAnnual = !isAnnual;
      updatePricing();
    });
    labelMonthly.addEventListener('click', () => {
      isAnnual = false;
      updatePricing();
    });
    labelAnnual.addEventListener('click', () => {
      isAnnual = true;
      updatePricing();
    });
  }

  // 3. Modal de Checkout InfinitePay
  const modalOverlay = document.getElementById('checkoutModal');
  const modalClose = document.getElementById('modalClose');
  const btnCheckoutList = document.querySelectorAll('.btn-checkout');
  const modalPlanTitle = document.getElementById('modalPlanTitle');
  const modalPlanPrice = document.getElementById('modalPlanPrice');
  const btnInfinitePay = document.getElementById('btnInfinitePay');

  // CONFIGURAÇÃO DO LINK DA INFINITEPAY
  // Substitua pelos seus links reais criados no app da InfinitePay (Link de Pagamento / InfiniteLink)
  const INFINITEPAY_LINKS = {
    mensal: 'https://invoice.infinitepay.io/plans/auto_app/JfxMLSz6LO',
    anual: 'https://invoice.infinitepay.io/plans/auto_app/okyGpAj5w3'
  };

  btnCheckoutList.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planType = btn.getAttribute('data-plan') || 'mensal';
      
      if (planType === 'mensal') {
        modalPlanTitle.textContent = 'Plano Mensal - Double Strategy Creator';
        modalPlanPrice.textContent = 'R$ 97,00 / mês';
        btnInfinitePay.href = INFINITEPAY_LINKS.mensal;
      } else {
        modalPlanTitle.textContent = 'Plano Anual VIP - Double Strategy Creator';
        modalPlanPrice.textContent = 'R$ 697,00 / ano (Economia de R$ 467)';
        btnInfinitePay.href = INFINITEPAY_LINKS.anual;
      }

      modalOverlay.classList.add('active');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 4. Roleta Dinâmica Animada no Hero Mockup
  const liveRoulette = document.getElementById('liveRoulette');
  if (liveRoulette) {
    const historyRolls = [
      { num: 1, color: 'red' },
      { num: 14, color: 'black' },
      { num: 2, color: 'red' },
      { num: 7, color: 'red' },
      { num: 0, color: 'white' },
      { num: 11, color: 'black' },
      { num: 8, color: 'black' },
      { num: 3, color: 'red' },
      { num: 9, color: 'black' },
      { num: 5, color: 'red' }
    ];

    function renderRoulette() {
      liveRoulette.innerHTML = '';
      historyRolls.forEach(item => {
        const ball = document.createElement('div');
        ball.className = `roulette-ball ball-${item.color}`;
        ball.textContent = item.num;
        liveRoulette.appendChild(ball);
      });
    }

    renderRoulette();

    // Simula novos giros caindo a cada 4 segundos
    setInterval(() => {
      const num = Math.floor(Math.random() * 15);
      let color = 'white';
      if (num >= 1 && num <= 7) color = 'red';
      else if (num >= 8 && num <= 14) color = 'black';

      historyRolls.shift();
      historyRolls.push({ num, color });
      renderRoulette();
    }, 4000);
  }

  // 5. Botão de Download Direto
  const btnDownloadApp = document.getElementById('btnDownloadApp');
  if (btnDownloadApp) {
    btnDownloadApp.addEventListener('click', (e) => {
      // Cria link direto ou dispara notificação de download do arquivo .exe
      alert('🚀 Seu download do instalador Windows (BlazeDoubleIA.exe) está iniciando!');
    });
  }
});

