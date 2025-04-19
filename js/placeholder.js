/* Arquivo de placeholder para imagens */
/* Este arquivo é usado para gerar imagens de placeholder para o website */

function createPlaceholder(width, height, text, bgColor, textColor) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Desenha o fundo
    ctx.fillStyle = bgColor || '#f0f0f0';
    ctx.fillRect(0, 0, width, height);
    
    // Desenha o texto
    ctx.fillStyle = textColor || '#333333';
    ctx.font = `${Math.floor(width/20)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text || `${width}x${height}`, width/2, height/2);
    
    return canvas.toDataURL('image/png');
}

// Exemplos de uso:
// const servicoImg = createPlaceholder(600, 400, 'Serviço', '#e0f0ff', '#0066cc');
// const teamImg = createPlaceholder(400, 400, 'Equipe', '#f0ffe0', '#339900');
