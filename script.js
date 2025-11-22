// Dados das produções
const productions = [
    {
        id: 1,
        title: "Análise do conto 'A Cartomante'",
        description: "Análise crítica do conto de Machado de Assis, explorando temas como destino, ciência e superstição.",
        image: "https://source.unsplash.com/random/600x400/?book",
        content: "<p>Esta produção consistiu na análise crítica do conto 'A Cartomante' de Machado de Assis. O trabalho explorou temas como destino, ciência e superstição, além de analisar a construção dos personagens e a ironia machadiana.</p><p>Através desta análise, pude compreender melhor as técnicas narrativas utilizadas por Machado de Assis e como ele constrói uma crítica social sutil através de sua prosa.</p>",
        pages: 3,
        words: 1500
    },
    {
        id: 2,
        title: "Redação sobre Sustentabilidade",
        description: "Texto dissertativo-argumentativo sobre a importância das práticas sustentáveis no mundo contemporâneo.",
        image: "https://source.unsplash.com/random/600x400/?sustainability",
        content: "<p>Nesta redação, abordei a importância das práticas sustentáveis no mundo contemporâneo, argumentando sobre a necessidade de equilíbrio entre desenvolvimento econômico e preservação ambiental.</p><p>O texto seguiu a estrutura dissertativa-argumentativa, com introdução, desenvolvimento e conclusão, apresentando dados concretos e exemplos para sustentar a tese principal.</p>",
        pages: 2,
        words: 1200
    },
    {
        id: 3,
        title: "Resenha Crítica de Filme",
        description: "Análise crítica do filme 'Central do Brasil', explorando seus aspectos sociais e cinematográficos.",
        image: "https://source.unsplash.com/random/600x400/?cinema",
        content: "<p>Esta resenha crítica analisou o filme 'Central do Brasil', dirigido por Walter Salles. O trabalho explorou tanto os aspectos cinematográficos quanto as questões sociais retratadas na obra.</p><p>A resenha destacou a representação do Brasil profundo, a jornada dos personagens e como o filme utiliza elementos visuais e narrativos para construir sua mensagem.</p>",
        pages: 2,
        words: 1000
    },
    {
        id: 4,
        title: "Artigo de Opinião sobre Educação",
        description: "Texto opinativo sobre os desafios e perspectivas da educação brasileira no século XXI.",
        image: "https://source.unsplash.com/random/600x400/?education",
        content: "<p>Neste artigo de opinião, expus minha visão sobre os desafios e perspectivas da educação brasileira no século XXI. Abordei temas como acesso, qualidade do ensino e a importância da valorização dos professores.</p><p>O texto seguiu a estrutura típica do gênero, com introdução que apresenta o tema, desenvolvimento com argumentos fundamentados e conclusão que reforça o ponto de vista defendido.</p>",
        pages: 3,
        words: 1400
    },
    {
        id: 5,
        title: "Análise Poética - Carlos Drummond",
        description: "Interpretação do poema 'No Meio do Caminho' de Carlos Drummond de Andrade.",
        image: "https://source.unsplash.com/random/600x400/?poetry",
        content: "<p>Esta produção consistiu na análise do poema 'No Meio do Caminho' de Carlos Drummond de Andrade. Explorei os recursos poéticos utilizados, as camadas de significado e a relação do poema com o contexto histórico de sua produção.</p><p>A análise destacou como Drummond utiliza elementos simples para construir uma reflexão profunda sobre a existência humana e os obstáculos que encontramos em nossa trajetória.</p>",
        pages: 2,
        words: 900
    },
    {
        id: 6,
        title: "Conto de Ficção Científica",
        description: "Narrativa ficcional com elementos de ficção científica, explorando temas como tecnologia e humanidade.",
        image: "https://source.unsplash.com/random/600x400/?scifi",
        content: "<p>Neste conto de ficção científica, criei uma narrativa que explora a relação entre tecnologia e humanidade em um futuro distópico. A história acompanha um personagem que desafia as normas de uma sociedade altamente tecnológica.</p><p>O trabalho me permitiu exercitar a criatividade narrativa, ao mesmo tempo em que explorei questões éticas relacionadas ao avanço tecnológico e sua influência nas relações humanas.</p>",
        pages: 4,
        words: 2000
    },
    {
        id: 7,
        title: "Análise de Charges Políticas",
        description: "Estudo sobre o uso do humor e da ironia em charges políticas como forma de crítica social.",
        image: "https://source.unsplash.com/random/600x400/?cartoon",
        content: "<p>Esta produção analisou o uso do humor e da ironia em charges políticas como forma de crítica social. Examinei diferentes exemplos de charges publicadas em veículos de comunicação, identificando os recursos visuais e textuais utilizados para transmitir mensagens críticas.</p><p>O trabalho destacou como a charge, enquanto gênero multimodal, combina elementos verbais e não verbais para construir sentidos e promover reflexão sobre questões políticas e sociais.</p>",
        pages: 2,
        words: 1100
    },
    {
        id: 8,
        title: "Carta Argumentativa",
        description: "Carta dirigida a autoridades sobre a importância da preservação do patrimônio histórico.",
        image: "https://source.unsplash.com/random/600x400/?heritage",
        content: "<p>Nesta carta argumentativa, dirigi-me a autoridades públicas para defender a importância da preservação do patrimônio histórico. A produção seguiu a estrutura formal do gênero epistolar, com argumentos fundamentados sobre o valor cultural, educativo e turístico do patrimônio histórico.</p><p>O texto buscou persuadir o destinatário através de uma linguagem respeitosa, porém firme, apresentando dados concretos e exemplos de boas práticas de preservação.</p>",
        pages: 2,
        words: 1300
    },
    {
        id: 9,
        title: "Ensaio sobre Literatura Contemporânea",
        description: "Reflexão sobre tendências e características da literatura brasileira contemporânea.",
        image: "https://source.unsplash.com/random/600x400/?literature",
        content: "<p>Este ensaio explorou as tendências e características da literatura brasileira contemporânea, analisando obras de autores como Conceição Evaristo, Milton Hatoum e Luiz Ruffato. O trabalho destacou como esses escritores abordam questões identitárias, urbanas e sociais em suas produções.</p><p>Através desta análise, pude compreender melhor as transformações na literatura brasileira nas últimas décadas e como os autores contemporâneos dialogam com o contexto social e político do país.</p>",
        pages: 4,
        words: 2200
    },
    {
        id: 10,
        title: "Crônica do Cotidiano",
        description: "Narrativa breve inspirada em situações do dia a dia, com observações sobre o comportamento humano.",
        image: "https://source.unsplash.com/random/600x400/?daily",
        content: "<p>Nesta crônica, criei uma narrativa breve inspirada em situações do cotidiano, com observações sobre o comportamento humano em contextos urbanos. O texto misturou elementos narrativos e reflexivos, característicos do gênero crônica.</p><p>A produção me permitiu exercitar a observação do cotidiano e a transformação de situações aparentemente banais em material literário, destacando aspectos humanos universais presentes no dia a dia.</p>",
        pages: 2,
        words: 800
    },
    {
        id: 11,
        title: "Análise Comparativa de Textos",
        description: "Estudo comparativo entre textos de diferentes épocas sobre o mesmo tema: a representação da cidade.",
        image: "https://source.unsplash.com/random/600x400/?city",
        content: "<p>Esta análise comparativa examinou textos de diferentes épocas sobre o mesmo tema: a representação da cidade. Comparei descrições urbanas em obras de autores como Aluísio Azevedo, João do Rio e Ferréz, identificando continuidades e rupturas na forma como a cidade é representada na literatura brasileira.</p><p>O trabalho destacou como as transformações urbanas e sociais se refletem na produção literária de cada período, criando diferentes perspectivas sobre o espaço urbano.</p>",
        pages: 3,
        words: 1600
    },
    {
        id: 12,
        title: "Texto de Divulgação Científica",
        description: "Produção de texto informativo sobre descobertas recentes na área de neurociência.",
        image: "https://source.unsplash.com/random/600x400/?science",
        content: "<p>Neste texto de divulgação científica, produzi um conteúdo informativo sobre descobertas recentes na área de neurociência, especificamente sobre a plasticidade cerebral. O trabalho buscou tornar conceitos complexos acessíveis ao público leigo, sem perder o rigor científico.</p><p>A produção exigiu pesquisa aprofundada sobre o tema e a adaptação da linguagem técnica para uma comunicação clara e atraente, características essenciais do gênero de divulgação científica.</p>",
        pages: 3,
        words: 1400
    },
    {
        id: 13,
        title: "Memórias Literárias",
        description: "Narrativa autobiográfica com elementos ficcionais, explorando lembranças da infância.",
        image: "https://source.unsplash.com/random/600x400/?childhood",
        content: "<p>Nesta produção, criei uma narrativa autobiográfica com elementos ficcionais, explorando lembranças da infância. O texto misturou memórias reais com elaboração literária, criando um retrato afetivo de momentos significativos da formação pessoal.</p><p>O trabalho me permitiu refletir sobre como as experiências da infância moldam nossa identidade e como a memória pode ser trabalhada literariamente, transformando lembranças pessoais em material narrativo universal.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 14,
        title: "Análise de Discurso Político",
        description: "Estudo sobre estratégias argumentativas em discursos políticos contemporâneos.",
        image: "https://source.unsplash.com/random/600x400/?politics",
        content: "<p>Esta análise de discurso examinou as estratégias argumentativas em discursos políticos contemporâneos, identificando recursos linguísticos, figuras de retórica e construções discursivas utilizadas para persuadir o público. O trabalho analisou tanto o conteúdo verbal quanto os aspectos não verbais da comunicação política.</p><p>Através desta análise, pude compreender melhor como se constrói a persuasão no discurso político e como diferentes estratégias comunicativas podem influenciar a percepção do público sobre questões políticas.</p>",
        pages: 3,
        words: 1800
    },
    {
        id: 15,
        title: "Texto Teatral - Monólogo",
        description: "Criação de monólogo teatral explorando conflitos internos de um personagem.",
        image: "https://source.unsplash.com/random/600x400/?theater",
        content: "<p>Nesta produção, criei um monólogo teatral explorando os conflitos internos de um personagem em um momento de decisão crucial. O texto seguiu as convenções do gênero dramático, com indicações cênicas e construção de um discurso que revela gradualmente a psicologia do personagem.</p><p>O trabalho me permitiu explorar a construção de personagens através do discurso direto, exercitando a criação de vozes narrativas distintas e o desenvolvimento de tensão dramática através do texto.</p>",
        pages: 3,
        words: 1500
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
