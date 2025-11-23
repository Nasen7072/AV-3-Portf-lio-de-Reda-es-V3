// Dados das produções com novos temas
const productions = [
    {
        id: 1,
        title: "POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?",
        description: "Análise sobre o crescimento dos procedimentos estéticos entre o público jovem e seus impactos sociais.",
        image: "https://botoclinic.com/wp-content/uploads/2023/07/imagem-procedimento-estetico-na-boca.jpg",
        content: "<p>Esta produção analisou o crescimento exponencial dos procedimentos estéticos entre os jovens, explorando fatores como influência das redes sociais, padrões de beleza contemporâneos e acesso facilitado a tratamentos.</p><p>O trabalho abordou tanto os aspectos psicológicos quanto os riscos à saúde envolvidos nessa tendência, propondo reflexões sobre autoestima e aceitação corporal.</p>",
        pages: 3,
        words: 1500
    },
    {
        id: 2,
        title: "ACESSIBILIDADE E INCLUSÃO DE PESSOAS COM DEFICIÊNCIA NO BRASIL",
        description: "Reflexão sobre os desafios e avanços na inclusão de pessoas com deficiência na sociedade brasileira.",
        image: "https://blog.br.tkelevator.com/wp-content/uploads/2020/12/diversidade-e-inclusao-1140x725.png",
        content: "<p>Este trabalho examinou a situação da acessibilidade e inclusão de pessoas com deficiência no Brasil, analisando desde a infraestrutura urbana até as políticas públicas e a conscientização social.</p><p>A produção destacou a importância da inclusão como direito fundamental e apresentou propostas para uma sociedade mais acessível e igualitária.</p>",
        pages: 3,
        words: 1600
    },
    {
        id: 3,
        title: "PRINCIPAIS FATORES QUE INFLUENCIAM NA QUALIDADE DE VIDA E NO BEM-ESTAR DA POPULAÇÃO",
        description: "Estudo sobre os elementos que determinam a qualidade de vida e bem-estar social.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta análise explorou os múltiplos fatores que influenciam a qualidade de vida, incluindo saúde, educação, segurança, meio ambiente e relações sociais.</p><p>O trabalho apresentou uma visão holística do bem-estar, considerando tanto aspectos objetivos quanto subjetivos da felicidade humana.</p>",
        pages: 4,
        words: 2000
    },
    {
        id: 4,
        title: "AS MUDANÇAS CLIMÁTICAS NO BRASIL E SEUS DESAFIOS",
        description: "Análise dos impactos das mudanças climáticas no território brasileiro e os desafios enfrentados.",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção investigou os efeitos das mudanças climáticas no Brasil, com foco em eventos extremos, alterações nos biomas e impactos na agricultura.</p><p>O trabalho também discutiu políticas de adaptação e mitigação, destacando a importância do desenvolvimento sustentável.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 5,
        title: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
        description: "Reflexão sobre os impactos ambientais e sociais do descarte inadequado de lixo eletrônico.",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        content: "<p>Este trabalho analisou as graves consequências do descarte inadequado de lixo eletrônico, incluindo contaminação do solo e água, e problemas de saúde pública.</p><p>A produção também explorou soluções como reciclagem, logística reversa e conscientização ambiental.</p>",
        pages: 3,
        words: 1550
    },
    {
        id: 6,
        title: "O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE",
        description: "Estudo sobre os impactos do consumo de alimentos ultraprocessados na saúde humana.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta análise examinou os efeitos do consumo regular de alimentos ultraprocessados, relacionando-o ao aumento de doenças crônicas como obesidade, diabetes e problemas cardiovasculares.</p><p>O trabalho também discutiu políticas públicas de alimentação saudável e educação nutricional.</p>",
        pages: 3,
        words: 1650
    },
    {
        id: 7,
        title: "FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB",
        description: "Investigação sobre a dependência em jogos de apostas online e seus impactos sociais.",
        image: "https://www.conexasaude.com.br/blog/wp-content/uploads/2024/11/iStock-907044482-1-768x513.jpg",
        content: "<p>Este trabalho explorou os fatores psicológicos e sociais que levam à dependência em jogos de apostas online, analisando seus efeitos devastadores nas finanças e relações familiares.</p><p>A produção também discutiu medidas de prevenção e tratamento para esse tipo de dependência.</p>",
        pages: 3,
        words: 1600
    },
    {
        id: 8,
        title: "A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS",
        description: "Reflexão sobre o papel do voluntariado na redução das desigualdades sociais.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção destacou a importância do trabalho voluntário como instrumento de transformação social, analisando seu impacto no combate à pobreza e na promoção da cidadania.</p><p>O trabalho apresentou casos de sucesso e incentivou a participação social como forma de construir uma sociedade mais justa.</p>",
        pages: 3,
        words: 1550
    },
    {
        id: 9,
        title: "ADULTIZAÇÃO INFANTIL – CONSEQUÊNCIAS DA PERDA IRREPARÁVEL DA INFÂNCIA",
        description: "Análise sobre a adultização precoce das crianças e seus impactos no desenvolvimento.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        content: "<p>Este trabalho investigou o fenômeno da adultização infantil, examinando como a exposição precoce a responsabilidades e informações adultas afeta o desenvolvimento psicológico das crianças.</p><p>A produção alertou para a importância de preservar a infância como fase fundamental de formação.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 10,
        title: "CAMINHOS PARA COMBATER O ETARISMO NAS RELAÇÕES SOCIAIS",
        description: "Reflexão sobre o preconceito etário e estratégias para combatê-lo.",
        image: "https://redacao.rhpravoce.com.br/wp-content/uploads/2023/03/Etarismo-como-combater-o-preconceito-de-idade.jpg",
        content: "<p>Esta análise explorou o etarismo (preconceito baseado na idade) em suas diferentes manifestações, desde o mercado de trabalho até as relações interpessoais.</p><p>O trabalho propôs estratégias educacionais e políticas para promover o respeito à diversidade etária.</p>",
        pages: 3,
        words: 1600
    },
    {
        id: 11,
        title: "A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA PARA OS JOVENS",
        description: "Estudo sobre a relevância do ensino de educação financeira para a formação dos jovens.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        content: "<p>Este trabalho destacou a importância da educação financeira desde cedo, analisando como ela contribui para a autonomia, planejamento de vida e prevenção de problemas como endividamento.</p><p>A produção defendeu a inclusão da educação financeira no currículo escolar como forma de empoderamento juvenil.</p>",
        pages: 3,
        words: 1550
    },
    {
        id: 12,
        title: "DESAFIOS PARA A VALORIZAÇÃO DA CULTURA POPULAR BRASILEIRA",
        description: "Análise dos obstáculos enfrentados pela cultura popular brasileira e estratégias de valorização.",
        image: "https://sopacultural.com/wp-content/uploads/2024/08/f2b44d3a-7b70-4987-b0a2-91b5f90fb1a1.webp",
        content: "<p>Esta produção investigou os desafios para preservação e valorização da cultura popular brasileira frente à globalização e homogeneização cultural.</p><p>O trabalho apresentou propostas para fortalecer as manifestações culturais tradicionais como patrimônio nacional.</p>",
        pages: 3,
        words: 1650
    },
    {
        id: 13,
        title: "CAMINHOS PARA A UNIVERSALIZAÇÃO DO SANEAMENTO BÁSICO NO BRASIL",
        description: "Reflexão sobre os desafios e soluções para universalizar o saneamento básico no país.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        content: "<p>Este trabalho analisou a situação do saneamento básico no Brasil, destacando as desigualdades regionais e os impactos na saúde pública.</p><p>A produção discutiu investimentos necessários, políticas públicas e tecnologias para alcançar a universalização do saneamento.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 14,
        title: "O PAPEL DO ESPORTE COMO FERRAMENTA DE TRANSFORMAÇÃO SOCIAL",
        description: "Estudo sobre o potencial do esporte na promoção da inclusão e transformação social.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta análise explorou como o esporte pode ser utilizado como ferramenta de transformação social, promovendo valores como trabalho em equipe, disciplina e superação.</p><p>O trabalho apresentou casos de projetos sociais que utilizam o esporte para inclusão de jovens em situação de vulnerabilidade.</p>",
        pages: 3,
        words: 1600
    },
    {
        id: 15,
        title: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
        description: "Análise aprofundada sobre os impactos ambientais do lixo eletrônico e soluções sustentáveis.",
        image: "https://www.ambientelegal.com.br/wp-content/uploads/lixoeletronico3-e1508111389938.jpg",
        content: "<p>Esta produção complementar aprofundou a análise sobre o lixo eletrônico, focando em soluções inovadoras como economia circular, reutilização de componentes e conscientização do consumidor.</p><p>O trabalho destacou a importância da responsabilidade compartilhada entre governo, empresas e cidadãos.</p>",
        pages: 3,
        words: 1650
    }
];

// Elementos DOM
const productionsContainer = document.getElementById('productions-container');
const modal = document.getElementById('production-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const productionCount = document.getElementById('production-count');
const pageCount = document.getElementById('page-count');
const wordCount = document.getElementById('word-count');
const themeToggle = document.getElementById('theme-toggle');

// Função para alternar modo claro/escuro
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    // Atualizar ícone do botão
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Verificar preferência salva ou do sistema
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
}

// Função para renderizar as produções
function renderProductions() {
    productionsContainer.innerHTML = '';
    
    productions.forEach(production => {
        const card = document.createElement('div');
        card.className = 'production-card';
        card.innerHTML = `
            <img src="${production.image}" alt="${production.title}" class="production-img">
            <div class="production-content">
                <h3>${production.title}</h3>
                <p>${production.description}</p>
                <a href="#" class="read-more" data-id="${production.id}">Ler mais</a>
            </div>
        `;
        productionsContainer.appendChild(card);
    });
    
    // Adicionar event listeners aos botões "Ler mais"
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const id = parseInt(this.getAttribute('data-id'));
            openModal(id);
        });
    });
}

// Função para abrir o modal
function openModal(id) {
    const production = productions.find(p => p.id === id);
    if (production) {
        modalTitle.textContent = production.title;
        modalBody.innerHTML = production.content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Impede rolagem do body
    }
}

// Função para fechar o modal
function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura rolagem do body
}

// Função para calcular totais
function calculateTotals() {
    const totalPages = productions.reduce((sum, production) => sum + production.pages, 0);
    const totalWords = productions.reduce((sum, production) => sum + production.words, 0);
    
    // Animar contadores
    animateCounter(pageCount, totalPages);
    animateCounter(wordCount, totalWords);
}

// Função para animar contadores
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Menu hamburguer
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Event listeners
closeModal.addEventListener('click', closeModalFunc);
themeToggle.addEventListener('click', toggleTheme);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderProductions();
    calculateTotals();
    initTheme();
});
