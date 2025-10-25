# CodeX 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.10.1-green)](https://www.prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

CodeX is an advanced AI-powered development platform that transforms natural language descriptions into production-ready Next.js applications. It streamlines the web development process by leveraging artificial intelligence to generate high-quality code while maintaining best practices and modern development standards.

## ✨ Key Features

- **🤖 AI-Powered Code Generation**: Convert natural language descriptions into functional Next.js components and applications
- **🎯 Project Management**: Create, organize, and track multiple projects in one place
- **💡 Real-time Preview**: Instantly visualize generated code and components
- **🔐 Secure Authentication**: Built-in user authentication powered by Clerk
- **💳 Usage Tracking**: Built-in credit system to manage API usage
- **🎨 Modern UI Components**: Pre-built components using Shadcn UI
- **🌓 Dark/Light Themes**: Seamless theme switching for better user experience
- **📱 Responsive Design**: Mobile-first approach ensuring compatibility across devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- PostgreSQL database
- Clerk account for authentication
- OpenAI API key
- Inngest account for background jobs

### Installation

1. Clone the repository:
```bash
git clone https://github.com/arnavco9573/codex.git
cd codex
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file with the following variables:
```env
DATABASE_URL="postgresql://..."
CLERK_SECRET_KEY="..."
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="..."
INNGEST_EVENT_KEY="..."
OPENAI_API_KEY="..."
```

4. Initialize the database:
```bash
npx prisma db push
```

5. Start the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app router pages and API routes
├── components/         # Reusable UI components
│   ├── ui/            # Shadcn UI components
│   └── code-view/     # Code preview components
├── config/            # Configuration files
├── hooks/             # Custom React hooks
├── inngest/           # Background job handlers
├── lib/               # Utility functions and services
├── modules/           # Feature-specific modules
└── trpc/              # tRPC API configuration
```

## �️ Built With

- **Framework**: [Next.js 15.3.3](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [Clerk](https://clerk.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **API Layer**: [tRPC](https://trpc.io/)
- **Background Jobs**: [Inngest](https://www.inngest.com/)
- **AI Integration**: OpenAI

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🆘 Getting Help

- **Documentation**: Check the [docs](docs/) directory for detailed documentation
- **Issues**: Submit bugs and feature requests through [GitHub Issues](https://github.com/arnavco9573/codex/issues)
- **Discussions**: Join our [GitHub Discussions](https://github.com/arnavco9573/codex/discussions) for questions and community support

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Maintainers

- Arnav Sharma ([@arnavco9573](https://github.com/arnavco9573))

---
Built with ❤️ using Next.js and AI
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
