// Dados das produções
const productions = [
    {
        id: 1,
        title: "POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?",
        description: "Análise sobre o crescimento da busca por procedimentos estéticos entre o público jovem e seus impactos sociais.",
        image: "https://midias.em.com.br/_midias/jpg/2024/04/24/2150478728-36447503.jpg?20240424091845",
        content: "<p>Esta produção analisa o aumento significativo de procedimentos estéticos entre os jovens brasileiros. O trabalho explora fatores como influência das redes sociais, padrões de beleza contemporâneos e a busca por aceitação social.</p><p>A redação aborda também os riscos associados a essas intervenções quando realizadas sem orientação adequada e a importância da valorização da diversidade corporal.</p>",
        pages: 3,
        words: 1500
    },
    {
        id: 2,
        title: "ACESSIBILIDADE E INCLUSÃO DE PESSOAS COM DEFICIÊNCIA NO BRASIL",
        description: "Reflexão sobre os desafios e avanços na inclusão de pessoas com deficiência na sociedade brasileira.",
        image: "https://blog.br.tkelevator.com/wp-content/uploads/2020/12/diversidade-e-inclusao-1140x725.png",
        content: "<p>Esta produção discute a situação da acessibilidade e inclusão de pessoas com deficiência no Brasil. O texto aborda desde barreiras arquitetônicas até preconceitos sociais que dificultam a plena participação desses cidadãos na sociedade.</p><p>A redação também analisa a legislação brasileira sobre o tema e propõe medidas para promover uma sociedade verdadeiramente inclusiva.</p>",
        pages: 3,
        words: 1600
    },
    {
        id: 3,
        title: "PRINCIPAIS FATORES QUE INFLUENCIAM NA QUALIDADE DE VIDA E NO BEM-ESTAR DA POPULAÇÃO",
        description: "Análise dos elementos que impactam diretamente na qualidade de vida e bem-estar dos cidadãos.",
        image: "https://totalpass.com/wp-content/uploads/2023/02/qualidade-de-vida.jpg",
        content: "<p>Esta produção examina os principais fatores que influenciam na qualidade de vida e bem-estar da população, incluindo aspectos como saúde, educação, segurança, moradia e relações sociais.</p><p>O texto discute como políticas públicas eficazes podem melhorar esses indicadores e promover maior equidade social.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 4,
        title: "AS MUDANÇAS CLIMÁTICAS NO BRASIL E SEUS DESAFIOS",
        description: "Análise dos impactos das mudanças climáticas no território brasileiro e os desafios para enfrentá-los.",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção aborda as mudanças climáticas no contexto brasileiro, analisando seus efeitos em diferentes biomas e regiões do país. O texto discute eventos extremos, alterações nos padrões de chuva e impactos na agricultura.</p><p>A redação também propõe medidas de adaptação e mitigação que podem ser implementadas em nível nacional e local.</p>",
        pages: 3,
        words: 1800
    },
    {
        id: 5,
        title: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
        description: "Reflexão sobre os impactos ambientais e sociais do descarte inadequado de resíduos eletrônicos.",
        image: "https://seteambiental.com.br/wp-content/uploads/2023/05/crescimento-lixo-eletronico-sete-ambiental.jpg",
        content: "<p>Esta produção analisa as consequências do descarte inadequado de lixo eletrônico, abordando desde a contaminação do solo e da água até os riscos à saúde humana.</p><p>O texto também discute a responsabilidade compartilhada entre fabricantes, governo e consumidores no gerenciamento adequado desses resíduos.</p>",
        pages: 3,
        words: 1600
    },
    {
        id: 6,
        title: "O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE",
        description: "Análise dos impactos do consumo de alimentos ultraprocessados na saúde da população.",
        image: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/gettyimages-180258510.jpg?w=1600",
        content: "<p>Esta produção examina o crescimento do consumo de alimentos ultraprocessados e suas consequências para a saúde pública. O texto aborda a relação entre esses produtos e o aumento de doenças crônicas como obesidade, diabetes e hipertensão.</p><p>A redação também discute estratégias para promover alimentação mais saudável e consciente na população.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 7,
        title: "FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB",
        description: "Reflexão sobre os fatores que levam à dependência em jogos de apostas online e seus efeitos na vida dos usuários.",
        image: "https://www.conexasaude.com.br/blog/wp-content/uploads/2024/11/iStock-907044482-1-768x513.jpg",
        content: "<p>Esta produção analisa os fatores psicológicos, sociais e econômicos que contribuem para a dependência em jogos de apostas online. O texto explora também os efeitos devastadores dessa dependência na vida financeira, familiar e profissional dos usuários.</p><p>A redação discute ainda a necessidade de regulamentação e políticas de prevenção para esse problema crescente.</p>",
        pages: 3,
        words: 1750
    },
    {
        id: 8,
        title: "A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS",
        description: "Análise do papel do trabalho voluntário na redução das desigualdades sociais no Brasil.",
        image: "https://jrmcoaching.com.br/wp-content/uploads/2016/11/Trabalho-Voluntario.jpg",
        content: "<p>Esta produção discute a importância do trabalho voluntário como ferramenta de combate às desigualdades sociais. O texto aborda como iniciativas voluntárias podem complementar ações governamentais e promover transformação social.</p><p>A redação também reflete sobre os benefícios do voluntariado tanto para quem recebe quanto para quem oferece o serviço.</p>",
        pages: 3,
        words: 1650
    },
    {
        id: 9,
        title: "ADULTIZAÇÃO INFANTIL – CONSEQUÊNCIAS DA PERDA IRREPARÁVEL DA INFÂNCIA",
        description: "Reflexão sobre o fenômeno da adultização infantil e suas consequências no desenvolvimento das crianças.",
        image: "https://images.educamaisbrasil.com.br/content/noticias/adultizacao-infantil-causas-impactos-e-como-proteger-as-criancas_g.jpg",
        content: "<p>Esta produção analisa o fenômeno da adultização infantil, explorando como a exposição precoce a responsabilidades, informações e comportamentos adultos pode impactar negativamente o desenvolvimento das crianças.</p><p>O texto discute também o papel da mídia, da publicidade e das redes sociais nesse processo e propõe caminhos para preservar a infância.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 10,
        title: "CAMINHOS PARA COMBATER O ETARISMO NAS RELAÇÕES SOCIAIS",
        description: "Análise do etarismo (idadeísmo) e propostas para combatê-lo nas relações sociais.",
        image: "https://redacao.rhpravoce.com.br/wp-content/uploads/2023/03/Etarismo-como-combater-o-preconceito-de-idade.jpg",
        content: "<p>Esta produção examina o etarismo - discriminação baseada na idade - e suas manifestações na sociedade contemporânea. O texto aborda estereótipos relacionados tanto a jovens quanto a idosos e seus impactos nas relações sociais.</p><p>A redação propõe caminhos para combater esse tipo de preconceito e promover uma sociedade mais inclusiva para todas as idades.</p>",
        pages: 3,
        words: 1600
    },
    {
        id: 11,
        title: "A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA PARA OS JOVENS",
        description: "Reflexão sobre a relevância da educação financeira na formação dos jovens e seu impacto no futuro.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        content: "<p>Esta produção discute a importância da educação financeira para os jovens, abordando como o conhecimento sobre finanças pessoais pode impactar positivamente suas vidas adultas.</p><p>O texto analisa também a necessidade de incluir esse tema no currículo escolar e propõe estratégias para tornar o aprendizado financeiro mais acessível e atraente para os jovens.</p>",
        pages: 3,
        words: 1550
    },
    {
        id: 12,
        title: "DESAFIOS PARA A VALORIZAÇÃO DA CULTURA POPULAR BRASILEIRA",
        description: "Análise dos desafios enfrentados para a preservação e valorização da cultura popular brasileira.",
        image: "https://sopacultural.com/wp-content/uploads/2024/08/f2b44d3a-7b70-4987-b0a2-91b5f90fb1a1.webp",
        content: "<p>Esta produção examina os desafios para a valorização da cultura popular brasileira em um contexto de globalização e homogeneização cultural. O texto aborda desde a falta de incentivos até o desconhecimento da população sobre suas próprias tradições.</p><p>A redação propõe medidas para preservar e revitalizar manifestações culturais populares, reconhecendo sua importância para a identidade nacional.</p>",
        pages: 3,
        words: 1700
    },
    {
        id: 13,
        title: "CAMINHOS PARA A UNIVERSALIZAÇÃO DO SANEAMENTO BÁSICO NO BRASIL",
        description: "Reflexão sobre os desafios e possíveis soluções para universalizar o saneamento básico no Brasil.",
        image: "https://conteudo.imguol.com.br/c/noticias/33/2019/04/24/11jul2018---falta-de-saneamento-basico-em-ruas-e-canais-no-bairro-da-terra-firme-periferia-de-belem-no-para-1556111395715_v2_1x1.jpg",
        content: "<p>Esta produção analisa os desafios para a universalização do saneamento básico no Brasil, abordando desde questões técnicas e financeiras até desigualdades regionais e sociais.</p><p>O texto discute também os impactos da falta de saneamento na saúde pública e propõe caminhos para superar essas barreiras, garantindo acesso universal a esse direito fundamental.</p>",
        pages: 3,
        words: 1800
    },
    {
        id: 14,
        title: "O PAPEL DO ESPORTE COMO FERRAMENTA DE TRANSFORMAÇÃO SOCIAL",
        description: "Análise do potencial do esporte como instrumento de transformação e inclusão social.",
        image: "https://esbrasil.com.br/wp-content/uploads/2022/12/esporte_transformacao-social_ES-Brasil.jpg",
        content: "<p>Esta produção examina o papel do esporte como ferramenta de transformação social, analisando como práticas esportivas podem promover inclusão, desenvolvimento de habilidades socioemocionais e construção de valores.</p><p>O texto discute também iniciativas esportivas que têm impactado positivamente comunidades vulneráveis e propõe formas de ampliar esse potencial transformador.</p>",
        pages: 3,
        words: 1650
    },
    {
        id: 15,
        title: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
        description: "Reflexão sobre os impactos ambientais e sociais do descarte inadequado de resíduos eletrônicos.",
        image: "https://www.recicletronic.com.br/imagens/portal/descarte-de-desktop_11830_372541_1611774637622_cover.jpg",
        content: "<p>Esta produção analisa as consequências do descarte inadequado de lixo eletrônico, abordando desde a contaminação do solo e da água até os riscos à saúde humana.</p><p>O texto também discute a responsabilidade compartilhada entre fabricantes, governo e consumidores no gerenciamento adequado desses resíduos.</p>",
        pages: 3,
        words: 1600
    }
];

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Site inicializando...');
    
    // Elementos DOM
    const elements = {
        productionsContainer: document.getElementById('productions-container'),
        modal: document.getElementById('production-modal'),
        modalTitle: document.getElementById('modal-title'),
        modalBody: document.getElementById('modal-body'),
        closeModal: document.getElementById('close-modal'),
        productionCount: document.getElementById('production-count'),
        pageCount: document.getElementById('page-count'),
        wordCount: document.getElementById('word-count'),
        themeToggle: document.getElementById('theme-toggle'),
        musicToggle: document.getElementById('music-toggle'),
        miniMusicToggle: document.getElementById('mini-music-toggle'),
        volumeSlider: document.getElementById('volume-slider'),
        backgroundMusic: document.getElementById('background-music'),
        musicPlayer: document.getElementById('music-player'),
        playIcon: document.getElementById('play-icon')
    };

    // Estado
    let isPlaying = false;
    let isExpanded = false;
    let audioContext = null;
    let audioElement = null;

    // Verificar elementos críticos
    if (!elements.productionsContainer) {
        console.error('❌ Elemento productions-container não encontrado');
        return;
    }

    // Função para alternar modo claro/escuro
    function toggleTheme() {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        elements.themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }

    // Inicializar tema
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isLight = savedTheme === 'light' || (!savedTheme && !systemPrefersDark);
        
        if (isLight) {
            document.body.classList.add('light-mode');
            elements.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    // Função para inicializar áudio
    function initAudio() {
        console.log('🔊 Inicializando sistema de áudio...');
        
        // URLs alternativas para música Lofi (sem restrições de CORS)
        const musicUrls = [
            'https://assets.mixkit.co/music/preview/mixkit-chill-abstract-loop-229.mp3',
            'https://assets.mixkit.co/music/preview/mixkit-vibes-126.mp3',
            'https://assets.mixkit.co/music/preview/mixkit-slow-trap-175.mp3'
        ];

        // Criar elemento de áudio dinamicamente
        audioElement = new Audio();
        audioElement.loop = true;
        audioElement.volume = elements.volumeSlider ? elements.volumeSlider.value / 100 : 0.5;
        
        // Tentar carregar a primeira URL disponível
        let currentUrlIndex = 0;
        
        function tryNextUrl() {
            if (currentUrlIndex < musicUrls.length) {
                audioElement.src = musicUrls[currentUrlIndex];
                audioElement.load();
                currentUrlIndex++;
            } else {
                console.warn('❌ Todas as URLs de áudio falharam. Música não disponível.');
                disableMusicControls();
            }
        }

        audioElement.addEventListener('error', function() {
            console.warn(`❌ Falha ao carregar áudio da URL ${currentUrlIndex}, tentando próxima...`);
            tryNextUrl();
        });

        audioElement.addEventListener('canplaythrough', function() {
            console.log('✅ Áudio carregado com sucesso');
        });

        tryNextUrl();
    }

    // Função para desativar controles de música se não houver áudio
    function disableMusicControls() {
        if (elements.musicToggle) {
            elements.musicToggle.style.display = 'none';
        }
        if (elements.miniMusicToggle) {
            elements.miniMusicToggle.style.display = 'none';
        }
        if (elements.musicPlayer) {
            elements.musicPlayer.style.display = 'none';
        }
    }

    // Função para tocar/pausar música
    function toggleMusic() {
        if (!audioElement) {
            console.log('Áudio não disponível');
            return;
        }

        if (isPlaying) {
            audioElement.pause();
            updateMusicUI(false);
            isPlaying = false;
        } else {
            const playPromise = audioElement.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    updateMusicUI(true);
                    isPlaying = true;
                }).catch(error => {
                    console.log('🔇 Interação do usuário necessária para reproduzir áudio');
                    // Solicitar interação do usuário
                    requestUserInteraction();
                });
            }
        }
    }

    // Função para solicitar interação do usuário
    function requestUserInteraction() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            color: white;
            font-family: Arial, sans-serif;
        `;
        
        overlay.innerHTML = `
            <div style="text-align: center; padding: 20px; background: #2a2a2a; border-radius: 10px;">
                <h3>🎵 Ativar Música</h3>
                <p>Clique no botão abaixo para ativar a reprodução de música</p>
                <button style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; margin: 10px;">
                    Ativar Música
                </button>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        const button = overlay.querySelector('button');
        button.addEventListener('click', function() {
            audioElement.play().then(() => {
                updateMusicUI(true);
                isPlaying = true;
                document.body.removeChild(overlay);
            }).catch(error => {
                console.error('Erro ao reproduzir áudio:', error);
                document.body.removeChild(overlay);
            });
        });
    }

    // Função para atualizar a UI da música
    function updateMusicUI(playing) {
        if (playing) {
            if (elements.playIcon) elements.playIcon.className = 'fas fa-pause';
            if (elements.musicToggle) {
                elements.musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
                elements.musicToggle.classList.add('playing', 'active');
            }
            if (elements.miniMusicToggle) elements.miniMusicToggle.classList.add('active');
            if (elements.musicPlayer) elements.musicPlayer.classList.add('playing');
        } else {
            if (elements.playIcon) elements.playIcon.className = 'fas fa-play';
            if (elements.musicToggle) {
                elements.musicToggle.innerHTML = '<i class="fas fa-music"></i>';
                elements.musicToggle.classList.remove('playing', 'active');
            }
            if (elements.miniMusicToggle) elements.miniMusicToggle.classList.remove('active');
            if (elements.musicPlayer) elements.musicPlayer.classList.remove('playing');
        }
    }

    // Função para ajustar volume
    function adjustVolume() {
        if (audioElement && elements.volumeSlider) {
            const volume = elements.volumeSlider.value / 100;
            audioElement.volume = volume;
        }
    }

    // Função para expandir player
    function toggleMusicPlayer() {
        isExpanded = !isExpanded;
        if (elements.musicPlayer) {
            elements.musicPlayer.classList.toggle('expanded', isExpanded);
        }
    }

    // Função para renderizar produções
    function renderProductions() {
        elements.productionsContainer.innerHTML = productions.map(production => `
            <div class="production-card">
                <img src="${production.image}" alt="${production.title}" class="production-img" loading="lazy">
                <div class="production-content">
                    <h3>${production.title}</h3>
                    <p>${production.description}</p>
                    <a href="#" class="read-more" data-id="${production.id}">Ler mais</a>
                </div>
            </div>
        `).join('');

        // Atualizar contador de produções
        if (elements.productionCount) {
            elements.productionCount.textContent = productions.length;
        }

        elements.productionsContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('read-more')) {
                e.preventDefault();
                const id = parseInt(e.target.getAttribute('data-id'));
                openModal(id);
            }
        });
    }

    // Função para abrir modal
    function openModal(id) {
        const production = productions.find(p => p.id === id);
        if (production) {
            elements.modalTitle.textContent = production.title;
            elements.modalBody.innerHTML = production.content;
            elements.modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // Função para fechar modal
    function closeModal() {
        elements.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Função para calcular totais
    function calculateTotals() {
        const totalPages = productions.reduce((sum, p) => sum + p.pages, 0);
        const totalWords = productions.reduce((sum, p) => sum + p.words, 0);
        
        if (elements.pageCount) animateCounter(elements.pageCount, totalPages);
        if (elements.wordCount) animateCounter(elements.wordCount, totalWords);
    }

    // Função para animar contadores
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 20);
    }

    // Configurar eventos
    function setupEventListeners() {
        if (elements.closeModal) elements.closeModal.addEventListener('click', closeModal);
        if (elements.themeToggle) elements.themeToggle.addEventListener('click', toggleTheme);
        if (elements.musicToggle) elements.musicToggle.addEventListener('click', toggleMusic);
        if (elements.miniMusicToggle) elements.miniMusicToggle.addEventListener('click', toggleMusic);
        if (elements.musicPlayer) elements.musicPlayer.addEventListener('click', toggleMusicPlayer);
        if (elements.volumeSlider) elements.volumeSlider.addEventListener('input', adjustVolume);

        window.addEventListener('click', (e) => {
            if (e.target === elements.modal) closeModal();
        });

        // Permitir ativação de áudio em qualquer clique na página
        document.addEventListener('click', function initAudioOnInteraction() {
            if (audioElement && !isPlaying) {
                audioElement.play().then(() => {
                    updateMusicUI(true);
                    isPlaying = true;
                }).catch(console.error);
            }
        }, { once: true });
    }

    // Inicializar tudo
    function init() {
        console.log('🎯 Inicializando componentes...');
        renderProductions();
        calculateTotals();
        initTheme();
        initAudio();
        setupEventListeners();
        
        console.log('✅ Site inicializado com sucesso!');
    }

    // Iniciar
    init();
});
