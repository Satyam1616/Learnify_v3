# 🎓 Learnify - Modern Learning Platform

A comprehensive full-stack educational platform built with React, TypeScript, and Express.js, featuring AI-powered learning assistance and mobile-responsive design.

## 🌟 Features

### 🎯 Core Features

- **AI-Powered Learning Assistant (Blu)** - 24/7 personalized mentorship
- **E-Learning Courses** - Interactive programming, design, and business courses
- **Job Bridge Programs** - Career transformation programs with industry mentorship
- **Smart Labs** - Virtual laboratory experiences
- **Global Internships** - International placement opportunities
- **Educational Tablets** - Hardware solutions for enhanced learning

### 📱 Mobile-First Design

- **Responsive Sliders** - Touch-friendly navigation for all sections
- **Mobile-Optimized UI** - Seamless experience across all devices
- **Progressive Web App** - Fast loading and offline capabilities

### 🎨 Modern UI/UX

- **Tailwind CSS** - Utility-first styling
- **Radix UI Components** - Accessible and customizable components
- **Smooth Animations** - GPU-accelerated transitions
- **Dark/Light Mode** - Theme switching support

## 🚀 Live Demo

- **Production**: [https://snazzy-mermaid-1ad615.netlify.app](https://snazzy-mermaid-1ad615.netlify.app)
- **GitHub**: [https://github.com/Satyam1616/Learnify_v3](https://github.com/Satyam1616/Learnify_v3)

## 🛠️ Tech Stack

### Frontend

- **React 18.3.1** - Modern React with hooks
- **TypeScript 5.6.3** - Type-safe development
- **Vite 5.4.19** - Fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Wouter 3.3.5** - Lightweight routing
- **TanStack Query 5.60.5** - Data fetching and caching
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend

- **Node.js** - JavaScript runtime
- **Express.js 4.21.2** - Web application framework
- **TypeScript** - Type-safe backend development
- **Drizzle ORM 0.39.1** - Type-safe database operations
- **Passport.js 0.7.0** - Authentication middleware
- **Zod 3.24.2** - Schema validation

### Database

- **PostgreSQL** - Primary database (Neon serverless)
- **MongoDB 6.18.0** - Document storage for forms and analytics

### Deployment

- **Netlify** - Frontend hosting with CDN
- **Vercel/Railway** - Backend hosting options
- **GitHub Actions** - CI/CD pipeline

## 📦 Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/Satyam1616/Learnify_v3.git
cd Learnify_v3
```

### 2. Install Dependencies

```bash
# Install all dependencies (root, client, and server)
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL="your_postgresql_connection_string"
MONGODB_URI="your_mongodb_connection_string"

# Authentication
SESSION_SECRET="your_session_secret"
JWT_SECRET="your_jwt_secret"

# External APIs (if needed)
OPENAI_API_KEY="your_openai_key"
STRIPE_SECRET_KEY="your_stripe_key"
```

### 4. Database Setup

```bash
# Push database schema
npm run db:push

# Optional: Seed database with sample data
npm run db:seed
```

### 5. Development Server

```bash
# Start both frontend and backend in development mode
npm run dev

# Or start them separately:
npm run dev:client  # Frontend only (http://localhost:5173)
npm run dev:server  # Backend only (http://localhost:3000)
```

### 6. Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
Learnify_v3/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── types/         # TypeScript type definitions
│   ├── public/            # Static assets
│   └── dist/              # Production build output
├── server/                # Express.js backend
│   ├── routes/            # API route handlers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Database models
│   └── utils/             # Server utilities
├── shared/                # Shared types and schemas
│   ├── types/             # Common TypeScript types
│   └── schema.ts          # Database schema
├── attached_assets/       # Project assets and images
└── docs/                  # Documentation files
```

## 🎯 Key Components

### 📚 Learning Modules

- **E-Learning Courses**: Interactive programming and design courses
- **Job Bridge Programs**: Career transformation with AI mentorship
- **Global Internships**: International placement opportunities
- **Research Papers**: Academic research and publication support

### 🤖 AI Features

- **Blu AI Mentor**: 24/7 personalized learning assistance
- **Smart Recommendations**: AI-powered course suggestions
- **Progress Tracking**: Intelligent learning analytics
- **Career Guidance**: AI-driven career path recommendations

### 📱 Mobile Features

- **Touch-Friendly Sliders**: Swipe navigation for all card sections
- **Responsive Design**: Optimized for all screen sizes
- **Progressive Loading**: Fast loading with skeleton screens
- **Offline Support**: Basic offline functionality

## 🚀 Deployment

### Netlify Deployment (Frontend)

```bash
# Deploy to Netlify (draft)
npm run deploy:netlify

# Deploy to production
npm run deploy:netlify:prod
```

### Manual Deployment

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Deploy frontend**: Upload `client/dist` to your hosting provider

3. **Deploy backend**: Deploy `server` directory to Node.js hosting

## 🧪 Testing

```bash
# Run all tests
npm test

# Run frontend tests
npm run test:client

# Run backend tests
npm run test:server

# Run e2e tests
npm run test:e2e
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~580KB (gzipped: ~146KB)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s

## 🔧 Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Husky** - Git hooks
- **Commitlint** - Commit message linting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure mobile responsiveness

## 📝 API Documentation

### Authentication Endpoints

```
POST /api/auth/login     # User login
POST /api/auth/register  # User registration
POST /api/auth/logout    # User logout
GET  /api/auth/profile   # Get user profile
```

### Course Endpoints

```
GET    /api/courses           # Get all courses
GET    /api/courses/:id       # Get course by ID
POST   /api/courses           # Create new course
PUT    /api/courses/:id       # Update course
DELETE /api/courses/:id       # Delete course
```

### User Progress

```
GET  /api/progress/:userId    # Get user progress
POST /api/progress            # Update progress
```

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Input Validation** - Zod schema validation
- **SQL Injection Protection** - Parameterized queries
- **XSS Protection** - Content Security Policy
- **Rate Limiting** - API request throttling

## 🌍 Internationalization

- **Multi-language Support** - English, Hindi, Spanish
- **RTL Support** - Right-to-left language support
- **Currency Localization** - Multiple currency support

## 📈 Analytics & Monitoring

- **Google Analytics** - User behavior tracking
- **Error Monitoring** - Sentry integration
- **Performance Monitoring** - Web Vitals tracking
- **User Feedback** - In-app feedback system

## 🆘 Troubleshooting

### Common Issues

1. **Build Errors**:

   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Database Connection Issues**:

   - Check your `DATABASE_URL` in `.env`
   - Ensure database is running
   - Verify network connectivity

3. **Port Already in Use**:
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   ```

## 📞 Support

- **Email**: support@learnify.com
- **Discord**: [Join our community](https://discord.gg/learnify)
- **Documentation**: [docs.learnify.com](https://docs.learnify.com)
- **Issues**: [GitHub Issues](https://github.com/Satyam1616/Learnify_v3/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vercel** - For Next.js and deployment platform
- **Netlify** - For seamless frontend hosting
- **Tailwind CSS** - For the utility-first CSS framework
- **Radix UI** - For accessible component primitives
- **All Contributors** - For making this project better

---

<div align="center">
  <p>Made with ❤️ by the Learnify Team</p>
  <p>
    <a href="https://snazzy-mermaid-1ad615.netlify.app">Live Demo</a> •
    <a href="https://github.com/Satyam1616/Learnify_v3/issues">Report Bug</a> •
    <a href="https://github.com/Satyam1616/Learnify_v3/issues">Request Feature</a>
  </p>
</div>
