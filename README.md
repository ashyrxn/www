# Ashyrxn.xyz

Um portfólio pessoal moderno e responsivo construído com Next.js 15.

## 🚀 Tecnologias

- **Next.js 15** - Framework React
- **Tailwind CSS** - Estilização
- **TypeScript** - Linguagem
- **Vercel** - Deploy

## ✨ Características

- Design moderno e responsivo
- Tema escuro com acentos laranja
- Animações suaves
- Otimizado para SEO
- Acessível (WCAG)

## 🏃‍♂️ Começar

```bash
# Clonar repositório
git clone https://github.com/ashyrxn/www.git
cd www

# Instalar dependências
bun install

# Executar em desenvolvimento
bun run dev
```

Acesse `http://localhost:3000`

## 📁 Estrutura

```
├── app/
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout e metadados
│   └── globals.css        # Estilos globais
├── components/ui/         # Componentes reutilizáveis
├── public/int/           # Imagens (avatar, background)
└── tailwind.config.js    # Configuração do Tailwind
```

## ⚙️ Personalizar

### Informações Pessoais
Edite as constantes em `app/page.tsx`:

```typescript
const PROFILE = {
  name: "Seu Nome",
  title: "Seu Título",
  bio: "Sua descrição",
  email: "seu.email@exemplo.com"
}
```

### Cores
Modifique em `tailwind.config.js`:

```javascript
colors: {
  primary: "#cd3e16",    // Laranja principal
  secondary: "#e75d05",  // Laranja claro
  accent: "#f5dc4e"      // Dourado
}
```

### Imagens
Substitua os arquivos em `public/int/`:
- `avatar.webp` - Sua foto
- `background.webp` - Imagem de fundo

## 🌐 Deploy

### Vercel (Recomendado)
1. Faça push para o GitHub
2. Importe o projeto no Vercel
3. Deploy automático

### Outros
```bash
bun run build
bun start
```

## 📄 Licença

MIT License

---

**Demo**: [ashyrxn.xyz](https://ashyrxn.xyz)