function renderTexts() {
    document.getElementById('text-title').textContent = SITE_CONFIG.profile.title;
    document.getElementById('text-subtitle').textContent = SITE_CONFIG.profile.subtitle;
    document.getElementById('text-about').textContent = SITE_CONFIG.profile.aboutMe;
    document.getElementById('discord-input').textContent = SITE_CONFIG.contact.discordId;
}

function renderTechs() {
    const container = document.getElementById('tech-container');
    container.innerHTML = '';
    
    SITE_CONFIG.technologies.forEach(tech => {
        container.innerHTML += `<div class="tech-tag"><i class="${tech.icon}"></i> ${tech.name}</div>`;
    });
}

function renderPortfolio() {
    const container = document.getElementById('projetos-container');
    container.innerHTML = '';

    SITE_CONFIG.portfolio.forEach(proj => {
        const iframe = proj.link 
            ? `<div class="iframe-container"><iframe src="${proj.link}" class="iframe-thumb" scrolling="no" tabindex="-1"></iframe></div>` 
            : `<div class="iframe-container" style="display:flex;align-items:center;justify-content:center;color:var(--pure-red); font-family: 'Quicksand', sans-serif; font-weight: 800; font-size: 20px;">[ ARQUIVO CORROMPIDO ]</div>`;
            
        const btnLink = proj.link 
            ? `<a href="${proj.link}" target="_blank" class="btn-link">Acessar Deploy <i class="fa-solid fa-arrow-right"></i></a>` 
            : `<span style="color:var(--pure-red); font-size: 12px; font-weight: 800;">[ ACESSO RESTRITO ]</span>`;
        
        container.innerHTML += `
            <div class="project-card">
                ${iframe}
                <div class="project-info">
                    <h3>${proj.titulo}</h3>
                    <p>${proj.desc}</p>
                    ${btnLink}
                </div>
            </div>
        `;
    });
}

function renderPricing() {
    document.getElementById('pricing-title').textContent = SITE_CONFIG.pricing.title;
    document.getElementById('pricing-desc').textContent = SITE_CONFIG.pricing.description;
    document.getElementById('pricing-action').textContent = SITE_CONFIG.pricing.action;
}

function renderAll() {
    renderTexts();
    renderTechs();
    renderPortfolio();
    renderPricing();
}