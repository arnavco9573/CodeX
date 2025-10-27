# CodeX 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.10.1-green)](https://www.prisma.io/)

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
DATABASE_URL = '*****'
NEXT_PUBLIC_APP_URL = "http://localhost:3000"
OPENAI_API_KEY = "****"
E2B_API_KEY = "****"
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="***"
CLERK_SECRET_KEY="****"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/"

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


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
