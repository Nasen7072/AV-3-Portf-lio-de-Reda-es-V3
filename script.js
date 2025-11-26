// Dados das produções com as redações completas
const productions = [
    {
        id: 1,
        title: "POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?",
        description: "Análise sobre o crescimento da busca por procedimentos estéticos entre o público jovem e seus impactos sociais.",
        image: "https://midias.em.com.br/_midias/jpg/2024/04/24/2150478728-36447503.jpg?20240424091845",
        content: `
            <div class="redacao-content">
                <p>Atualmente o padrão estético está sendo mais implantado como prioridades na mente dos demais jovens, o aumento do processamento estético entre jovens está ligado a diversos fatores, incluindo principalmente a pressão por padrões de belezas difundidos nas redes sociais e raízes sociais, a busca pela auto estima e ser socialmente aceito com a influência de tendências e modas.</p>
                
                <p>A exposição constante a imagens de corpos perfeitos ou retocados nas redes sociais cria uma padronização de beleza inatingível, causando muitos jovens a buscarem ou se aproximarem desse ideal. A adolescência é um Período de transformações Físicas e Psicológica, e a busca por processamentos estéticos pode ser uma forma de lidar com insatisfações e inseguranças relacionadas à aparência, buscando melhorar a autoestima e a autoconfiança.</p>
                
                <p>O bullying, especialmente relacionado à aparência física, pode ser um fator que leva alguns jovens a buscar procedimentos estéticos para se proteger de comentários e situações constrangedoras. A influência da mídia também é responsável, A mídia, com sua constante valorização da juventude e de corpos perfeitos, pode exercer grande pressão sobre os jovens, levando-os a buscar procedimentos estéticos para se adequar a esses padrões.</p>
                
                <p>Em resumo, o aumento de procedimentos estéticos entre jovens é um fenômeno complexo, influenciando por diversos fatores sociais, culturais e individuais. É importante que os jovens tenha acesso a informações claras e precisas sobre os riscos e benefícios desses procedimentos, além de desenvolverem uma redação saudável com sua própria imagem e autoestima.</p>
            </div>
        `,
        pages: 3,
        words: 1500
    },
    // ... (mantenha os outros 14 objetos de produção exatamente como estavam antes)
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
        miniVolumeSlider: document.getElementById('mini-volume-slider'),
        backgroundMusic: document.getElementById('background-music'),
        musicPlayer: document.getElementById('music-player'),
        playIcon: document.getElementById('play-icon'),
        hamburger: document.getElementById('hamburger'),
        navMenu: document.getElementById('nav-menu')
    };

    // Estado
    let isPlaying = false;
    let isExpanded = false;

    // Verificar elementos críticos
    console.log('🔍 Verificando elementos DOM...');
    Object.keys(elements).forEach(key => {
        if (!elements[key]) {
            console.warn(`⚠️ Elemento não encontrado: ${key}`);
        } else {
            console.log(`✅ Elemento encontrado: ${key}`);
        }
    });

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
        
        if (elements.backgroundMusic) {
            // Configurar volume inicial
            const initialVolume = 0.5;
            elements.backgroundMusic.volume = initialVolume;
            
            if (elements.volumeSlider) elements.volumeSlider.value = initialVolume * 100;
            if (elements.miniVolumeSlider) elements.miniVolumeSlider.value = initialVolume * 100;
            
            // Configurar eventos de áudio
            elements.backgroundMusic.addEventListener('canplaythrough', function() {
                console.log('✅ Áudio carregado e pronto para reprodução');
            });
            
            elements.backgroundMusic.addEventListener('error', function(e) {
                console.error('❌ Erro no áudio:', e);
                console.log('Tentando URL alternativa...');
                // Tentar URL alternativa se a primeira falhar
                elements.backgroundMusic.src = 'https://assets.mixkit.co/music/preview/mixkit-vibes-126.mp3';
            });
            
            console.log('✅ Áudio configurado');
        } else {
            console.error('❌ Elemento de áudio não encontrado');
        }
    }

    // Função para tocar/pausar música
    function toggleMusic() {
        console.log('🎵 Alternando estado da música');
        
        if (!elements.backgroundMusic) {
            console.log('Áudio não disponível');
            return;
        }

        if (isPlaying) {
            console.log('⏸️ Pausando música');
            elements.backgroundMusic.pause();
            updateMusicUI(false);
            isPlaying = false;
        } else {
            console.log('▶️ Reproduzindo música');
            const playPromise = elements.backgroundMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('✅ Música iniciada com sucesso');
                    updateMusicUI(true);
                    isPlaying = true;
                }).catch(error => {
                    console.log('🔇 Interação do usuário necessária para reproduzir áudio:', error);
                    showAudioActivationPrompt();
                });
            }
        }
    }

    // Função para mostrar prompt de ativação de áudio
    function showAudioActivationPrompt() {
        console.log('👆 Mostrando prompt de ativação de áudio');
        
        // Criar um overlay simples
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
            <div style="text-align: center; padding: 30px; background: #2a2a2a; border-radius: 15px; max-width: 300px;">
                <h3 style="margin-bottom: 15px;">🎵 Ativar Música</h3>
                <p style="margin-bottom: 20px; line-height: 1.5;">Clique no botão abaixo para ativar a reprodução de música de fundo</p>
                <button style="padding: 12px 24px; background: #e94560; color: white; border: none; border-radius: 25px; cursor: pointer; font-size: 16px; transition: all 0.3s;">
                    Ativar Música
                </button>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        const button = overlay.querySelector('button');
        button.addEventListener('click', function() {
            elements.backgroundMusic.play().then(() => {
                updateMusicUI(true);
                isPlaying = true;
                document.body.removeChild(overlay);
                console.log('✅ Áudio ativado via prompt');
            }).catch(error => {
                console.error('Erro ao reproduzir áudio:', error);
                document.body.removeChild(overlay);
            });
        });
    }

    // Função para atualizar a UI da música
    function updateMusicUI(playing) {
        console.log(`🎛️ Atualizando UI da música: ${playing ? 'playing' : 'paused'}`);
        
        if (playing) {
            // Atualizar ícone do botão principal
            if (elements.musicToggle) {
                elements.musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
                elements.musicToggle.classList.add('playing', 'active');
            }
            // Atualizar ícone do botão mini
            if (elements.playIcon) {
                elements.playIcon.className = 'fas fa-pause';
            }
            if (elements.miniMusicToggle) {
                elements.miniMusicToggle.classList.add('active');
            }
            if (elements.musicPlayer) {
                elements.musicPlayer.classList.add('playing');
            }
        } else {
            // Atualizar ícone do botão principal
            if (elements.musicToggle) {
                elements.musicToggle.innerHTML = '<i class="fas fa-music"></i>';
                elements.musicToggle.classList.remove('playing', 'active');
            }
            // Atualizar ícone do botão mini
            if (elements.playIcon) {
                elements.playIcon.className = 'fas fa-play';
            }
            if (elements.miniMusicToggle) {
                elements.miniMusicToggle.classList.remove('active');
            }
            if (elements.musicPlayer) {
                elements.musicPlayer.classList.remove('playing');
            }
        }
    }

    // Função para ajustar volume
    function adjustVolume() {
        if (elements.backgroundMusic && elements.volumeSlider) {
            const volume = elements.volumeSlider.value / 100;
            elements.backgroundMusic.volume = volume;
            if (elements.miniVolumeSlider) {
                elements.miniVolumeSlider.value = elements.volumeSlider.value;
            }
            console.log(`🔊 Volume ajustado para: ${volume}`);
        }
    }

    // Função para ajustar volume mini
    function adjustMiniVolume() {
        if (elements.backgroundMusic && elements.miniVolumeSlider) {
            const volume = elements.miniVolumeSlider.value / 100;
            elements.backgroundMusic.volume = volume;
            if (elements.volumeSlider) {
                elements.volumeSlider.value = elements.miniVolumeSlider.value;
            }
            console.log(`🔊 Volume mini ajustado para: ${volume}`);
        }
    }

    // Função para expandir player
    function toggleMusicPlayer() {
        isExpanded = !isExpanded;
        if (elements.musicPlayer) {
            elements.musicPlayer.classList.toggle('expanded', isExpanded);
            console.log(`🎵 Player ${isExpanded ? 'expandido' : 'recolhido'}`);
        }
    }

    // Função para renderizar produções
    function renderProductions() {
        if (!elements.productionsContainer) {
            console.error('❌ Container de produções não encontrado');
            return;
        }

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

        // Adicionar event listeners para os botões "Ler mais"
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
        if (production && elements.modal && elements.modalTitle && elements.modalBody) {
            elements.modalTitle.textContent = production.title;
            elements.modalBody.innerHTML = production.content;
            elements.modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // Função para fechar modal
    function closeModal() {
        if (elements.modal) {
            elements.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
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

    // Função para toggle do menu hamburger
    function toggleMenu() {
        if (elements.navMenu) {
            elements.navMenu.classList.toggle('active');
        }
    }

    // Configurar eventos
    function setupEventListeners() {
        console.log('🔗 Configurando event listeners...');
        
        // Modal
        if (elements.closeModal) {
            elements.closeModal.addEventListener('click', closeModal);
        }
        
        // Tema
        if (elements.themeToggle) {
            elements.themeToggle.addEventListener('click', toggleTheme);
        }
        
        // Música - botão principal
        if (elements.musicToggle) {
            elements.musicToggle.addEventListener('click', toggleMusic);
        }
        
        // Música - botão mini
        if (elements.miniMusicToggle) {
            elements.miniMusicToggle.addEventListener('click', toggleMusic);
        }
        
        // Player de música
        if (elements.musicPlayer) {
            elements.musicPlayer.addEventListener('click', function(e) {
                if (e.target === elements.musicPlayer || e.target.classList.contains('music-info')) {
                    toggleMusicPlayer();
                }
            });
        }
        
        // Controles de volume
        if (elements.volumeSlider) {
            elements.volumeSlider.addEventListener('input', adjustVolume);
        }
        
        if (elements.miniVolumeSlider) {
            elements.miniVolumeSlider.addEventListener('input', adjustMiniVolume);
        }

        // Menu hamburger
        if (elements.hamburger) {
            elements.hamburger.addEventListener('click', toggleMenu);
        }

        // Fechar modal ao clicar fora
        window.addEventListener('click', (e) => {
            if (e.target === elements.modal) closeModal();
        });

        // Fechar menu ao clicar em um link
        if (elements.navMenu) {
            elements.navMenu.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') {
                    elements.navMenu.classList.remove('active');
                }
            });
        }

        // Ativar áudio na primeira interação do usuário
        function initAudioOnInteraction() {
            console.log('👆 Interação do usuário detectada - tentando ativar áudio');
            if (elements.backgroundMusic && !isPlaying) {
                elements.backgroundMusic.play().then(() => {
                    updateMusicUI(true);
                    isPlaying = true;
                    console.log('✅ Áudio ativado por interação do usuário');
                }).catch(error => {
                    console.log('❌ Falha ao ativar áudio:', error);
                });
            }
            // Remover este listener após a primeira interação
            document.removeEventListener('click', initAudioOnInteraction);
            document.removeEventListener('keydown', initAudioOnInteraction);
        }

        document.addEventListener('click', initAudioOnInteraction, { once: true });
        document.addEventListener('keydown', initAudioOnInteraction, { once: true });
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
