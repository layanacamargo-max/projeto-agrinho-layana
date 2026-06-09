// 1. Banco de dados com práticas sustentáveis (Dicas do Agrinho)
const praticasSustentaveis = [
    {
        titulo: "Plantio Direto",
        texto: "Cultivo feito sem arar o solo, mantendo a palha da colheita anterior. Isso evita a erosão, retém umidade e armazena carbono na terra."
    },
    {
        titulo: "Rotação de Culturas",
        texto: "Alternar os tipos de plantas cultivadas na mesma área a cada safra. Isso melhora a saúde do solo e reduz naturalmente as pragas."
    },
    {
        titulo: "Integração Lavoura-Pecuária-Floresta (ILPF)",
        texto: "Combina agricultura, criação de gado e plantio de árvores em uma mesma propriedade. Maximiza a produção e neutraliza gases de efeito estufa."
    },
    {
        titulo: "Uso de Bioinsumos",
        texto: "Utilização de defensores biológicos e bactérias benéficas para proteger e nutrir as plantas, reduzindo o uso de produtos químicos."
    },
    {
        titulo: "Energia Solar no Campo",
        texto: "Instalação de painéis solares nas propriedades para gerar energia limpa e renovável, alimentando sistemas de irrigação e galpões."
    }
];

// 2. Captura dos elementos do arquivo HTML
const botao = document.getElementById('btnDica');
const caixaDica = document.getElementById('caixaDica');
const tituloDica = document.getElementById('tituloDica');
const textoDica = document.getElementById('textoDica');

// Guardar o índice da última dica para não repetir de forma seguida
let ultimoIndice = -1;

// 3. Função para sortear e exibir uma nova prática
function mostrarNovaPratica() {
    let novoIndice;
    
    // Garante que o sorteio não vai repetir a dica exibida imediatamente antes
    do {
        novoIndice = Math.floor(Math.random() * praticasSustentaveis.length);
    } while (novoIndice === ultimoIndice);
    
    ultimoIndice = novoIndice;
    
    // Seleciona os dados da dica sorteada
    const dicaSorteada = praticasSustentaveis[novoIndice];
    
    // Atualiza os textos dentro do HTML
    tituloDica.textContent = dicaSorteada.titulo;
    textoDica.textContent = dicaSorteada.texto;
    
    // Remove a classe que esconde o elemento para torná-lo visível
    caixaDica.classList.remove('escondido');
    
    // Muda o texto do botão para convidar o usuário a clicar novamente
    botao.textContent = "Ver Outra Prática";
}

// 4. Conecta o clique do botão à função de sorteio
botao.addEventListener('click', mostrarNovaPratica);
