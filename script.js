const meusProjetos = [
   {
        titulo: "Automação de RPG",
        link: "https://fichaeitoporbl4ast.vercel.app/", 
        descricao: "Fichas dinâmicas que fazem o trabalho pesado. Cálculo de status em tempo real.",
        tags: ["Lógica", "Automação","Javascript","CSS"]
    },
    {
        titulo: "Portfólio",
        link: "https://araraverificaisso.vercel.app/", 
        descricao: "Portfólio para comissões de skins de Minecraft.",
        tags: ["Design", "Portfólio","Javascript","CSS"]
    },
    {
        titulo: "Pequeno ARG",
        link: "https://jornalcamila.vercel.app/", 
        descricao: "Puzzles em sequência contando uma história misteriosa.",
        tags: ["Puzzles", "Imersão","Javascript","CSS"]
    },
    {
        titulo: "SITE DE LORES PARA SMP",
        link: "https://personagem-para-portifolio.vercel.app/", 
        descricao: "Sites de lore únicos e totalmente personalizados, perfeito para você passar naquele SMP que sempre quis.",
        tags: ["Puzzles", "Imersão","Javascript","CSS"]
    }

];

// ==========================================
// RENDERIZADOR AUTOMÁTICO DE PROJETOS
// ==========================================
function carregarProjetos() {
    const container = document.getElementById('projetos-container');
    container.innerHTML = ''; 

    meusProjetos.forEach(projeto => {
        const tagsHtml = projeto.tags.map(tag => `<span>${tag}</span>`).join('');
        
        // Se tem link, renderiza o Iframe (Miniatura ao vivo) e o Botão.
        let midiaHTML = '';
        let botaoAcesso = '';

        if (projeto.link !== "") {
            midiaHTML = `
                <div class="iframe-container">
                    <div class="iframe-overlay"></div>
                    <iframe src="${projeto.link}" class="iframe-thumb" scrolling="no" tabindex="-1"></iframe>
                </div>
            `;
            botaoAcesso = `<a href="${projeto.link}" target="_blank" class="btn-acesso">Acessar Sistema <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
        } else {
            // Se não tiver link (ainda não postou ou é privado)
            midiaHTML = `
                <div class="project-img bg-enigma">
                    <span>[ ARQUIVO OFFLINE ]</span>
                </div>
            `;
            botaoAcesso = `<span class="btn-acesso-off">Acesso Restrito</span>`;
        }

        const cardHTML = `
            <div class="project-card">
                ${midiaHTML}
                <div class="project-info">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <div class="tags">
                        ${tagsHtml}
                    </div>
                    ${botaoAcesso}
                </div>
            </div>
        `;

        container.innerHTML += cardHTML;
    });
}

carregarProjetos();

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if(navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = '#000000';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid #1a1a1a';
    }
});

// --- Lógica da Calculadora Dinâmica de Preços ---
let hours = 8; // Começa na estimativa padrão de 8 horas
const valorHora = 5; // R$ 5,00 por hora

const hoursCountEl = document.getElementById('hours-count');
const totalPriceEl = document.getElementById('total-price');
const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');

function atualizarCalculadora() {
    hoursCountEl.textContent = hours;
    const custoEstimado = hours * valorHora;
    totalPriceEl.textContent = `R$ ${custoEstimado.toFixed(2).replace('.', ',')}`;
}

btnPlus.addEventListener('click', () => {
    hours++;
    atualizarCalculadora();
});

btnMinus.addEventListener('click', () => {
    if (hours > 1) { // Garante que a simulação não fique em zero ou negativa
        hours--;
        atualizarCalculadora();
    }
});

// --- Sistema "Copiar Usuário" do Discord ---
const btnCopy = document.getElementById('btn-copy');
const discordInput = document.getElementById('discord-username');
const copyMessage = document.getElementById('copy-message');

btnCopy.addEventListener('click', () => {
    // Seleciona o texto e executa o comando de cópia
    discordInput.select();
    discordInput.setSelectionRange(0, 99999); // Suporte para mobile
    navigator.clipboard.writeText(discordInput.value);

    // Exibe aviso visual temporário de sucesso
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2500);
});