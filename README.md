# Receitopia

> Plataforma web de receitas culinárias com navegação por categorias, buscador e páginas dedicadas por receita.

![Status](https://img.shields.io/badge/status-concluído-22c55e)
![Frontend](https://img.shields.io/badge/frontend-HTML%2FCSS%2FJS-1f6feb)
![Tipo](https://img.shields.io/badge/tipo-aplicação%20web-f59e0b)
![Licença](https://img.shields.io/badge/licença-proprietária-red)

🌐 **[Ver aplicação ao vivo](https://receitopia.vercel.app/)** · 📁 **[Repositório GitHub](https://github.com/taysouzaa/Receitopia)**

> **Estado:** ativo · **Última revisão:** 2026-08-10

## Visão geral

O **Receitopia** é uma aplicação web de receitas culinárias que oferece navegação fluida por categorias, buscador integrado e páginas detalhadas para cada receita. Interface limpa e responsiva, construída inteiramente com tecnologias web nativas.

### O que o sistema resolve

- Centraliza receitas com categorização e busca rápida.
- Apresenta cada receita em página própria com ingredientes e modo de preparo.
- Funciona sem backend — deploy estático e direto.

## O que foi desenvolvido

### 1. Páginas e Navegação
- Página inicial com destaques e categorias.
- Sistema de páginas individuais por receita (`pages/`).
- Buscador client-side para filtrar receitas.

### 2. Interface Visual
- Layout responsivo com HTML5 e CSS3.
- Imagens organizadas na pasta `img/`.
- Estilo consistente em todas as páginas.

### 3. Documentação
- Pasta `docs/` com anotações e materiais de apoio.

## Stack

- **Frontend:** HTML5, CSS3, JavaScript (vanilla)
- **Deploy:** Hospedagem estática

## Estrutura do projeto

```text
.
├─ index.html      ← página inicial
├─ src/            ← demais páginas do site (Receitas, sobre, contato)
├─ pages/          ← uma página por receita (8 receitas)
├─ css/
│  └─ style.css    ← estilos globais
├─ js/
│  └─ script.js    ← busca e interações
├─ img/            ← fotos das receitas
├─ docs/           ← cópias de apoio (readme e licença)
├─ Lasanha.jpg     ← imagem na raiz, fora de img/
└─ LICENSE
```

## Rodar local

Abra `index.html` diretamente no navegador ou sirva com qualquer servidor estático.

## Licença

Licença proprietária — todos os direitos reservados. O código pode ser lido para avaliação profissional ou estudo; qualquer reuso, cópia, modificação ou uso comercial exige autorização prévia e por escrito da autora. Ver [LICENSE](./LICENSE).