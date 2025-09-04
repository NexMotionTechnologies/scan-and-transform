# PLANNING.md

## Project Vision

**Pampiri** is an AI-powered receipt digitization platform that transforms physical receipts into organized, exportable digital data. The vision is to eliminate manual data entry for businesses and individuals by providing instant, accurate receipt scanning with enterprise-grade processing capabilities.

### Current Project Scope
**This landing page project is specifically focused on user onboarding and beta signup.** The core OCR MVP application is being developed separately. Our role is to create an effective landing page that:
1. Showcases the Pampiri product and its capabilities
2. Captures beta user signups with email collection
3. Sends welcome confirmation emails to new beta users
4. Sets expectation for future download link delivery

### Mission Statement
"Turn receipts into organized data instantly" - Making financial record-keeping effortless through cutting-edge AI technology, accessible to everyone from small business owners to enterprise accounting teams.

### Core Value Propositions
- **Speed**: Process hundreds of receipts in minutes with 99.5% accuracy
- **Simplicity**: Scan with phone, get Excel files instantly
- **Security**: Enterprise-grade encryption and GDPR compliance
- **Compatibility**: Export to all major accounting software (QuickBooks, Xero, etc.)

## Product Architecture

### High-Level Architecture
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Mobile App    │    │   Web Platform   │    │  Admin Portal   │
│   (React PWA)   │    │  (Landing Page)  │    │   (Firebase)    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
         ┌──────────────────────────────────────────┐
         │           API Gateway Layer              │
         │        (Firebase Functions)             │
         └──────────────────────────────────────────┘
                                 │
         ┌───────────────┬────────────────┬─────────────────┐
         │               │                │                 │
  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
  │   AI/OCR     │ │   Database   │ │  File Storage│ │    Email     │
  │   Service    │ │  (Firestore) │ │  (Firebase)  │ │   Service    │
  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

### System Components

#### Current Landing Page Architecture
- **Frontend**: React landing page with beta signup form
- **Database**: Firebase Firestore for beta user email collection
- **Email Service**: Automated welcome emails with download instructions
- **Hosting**: Static site deployment (Vercel/Netlify)

#### Separate OCR MVP Application (Not part of this project)
- **Core App**: Receipt processing interface (being built separately)
- **AI/OCR Integration**: Text extraction capabilities
- **File Processing**: Export functionality for multiple formats
- **User Authentication**: Access control for beta users

#### Landing Page Data Flow
1. User visits landing page and learns about Pampiri
2. User enters email in beta signup form
3. Email stored in Firebase Firestore with beta status
4. Welcome confirmation email sent immediately
5. Email includes: welcome message, expectation setting for download link
6. Future: Download link email sent when OCR MVP is ready for beta testing

## Technology Stack

### Frontend Technologies
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling framework
- **shadcn/ui** - Component library built on Radix UI
- **React Router DOM** - Client-side routing
- **React Query** - Server state management

### Backend & Services
- **Firebase Suite**:
  - Firestore - NoSQL database
  - Firebase Storage - File storage
  - Firebase Functions - Serverless compute
  - Firebase Auth - User authentication (future)
- **EmailJS/Web3Forms** - Email delivery services
- **Vercel/Netlify** - Frontend deployment

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **Lovable Tagger** - Component development tracking

### Future Tech Additions
- **OCR/AI Services**: Google Vision API, AWS Textract, or Azure Computer Vision
- **File Processing**: PDF generation, Excel manipulation libraries
- **Authentication**: Firebase Auth with social logins
- **Payment**: Stripe integration for subscriptions
- **Analytics**: Google Analytics, Mixpanel for user tracking

## Required Tools & Setup

### Development Environment
```bash
# Required
Node.js 18+ and npm
Git version control
Modern IDE (VS Code recommended)

# Setup Commands
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Production build
npm run lint        # Code linting
```

### Required Accounts & Services
1. **Firebase Project**
   - Firestore Database enabled
   - Storage bucket configured
   - Environment variables configured

2. **Email Service** (choose one):
   - Web3Forms (recommended - free tier)
   - Formspree (freemium)
   - EmailJS (advanced features)
   - Netlify Forms (if deploying to Netlify)

3. **Deployment Platform**:
   - Vercel (recommended for React)
   - Netlify (alternative with form handling)

### Environment Configuration
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# Email Service (choose one)
VITE_WEB3FORMS_API_KEY=        # Recommended
VITE_FORMSPREE_FORM_ID=        # Alternative
VITE_EMAILJS_SERVICE_ID=       # Advanced
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Development Phases

### Current Phase: Landing Page & Beta Onboarding (This Project)
- [x] Modern landing page design
- [x] Hero section with video background
- [x] Features showcase
- [x] Pricing tiers
- [x] Beta signup with Firebase integration
- [x] Basic email confirmation system
- [ ] **PRIORITY**: Test and refine welcome email template
- [ ] **PRIORITY**: Ensure email includes proper messaging about download link expectation
- [ ] Final testing and optimization
- [ ] Production deployment

### Separate Development Track: OCR MVP Application (Not This Project)
The core OCR application is being built independently and will include:
- User authentication system
- File upload interface
- OCR integration and text extraction
- Data export functionality
- Beta user access controls

### Future Integration Phase (Post-Launch)
- [ ] Connect beta users from landing page to OCR MVP
- [ ] Send download link emails when OCR MVP is ready
- [ ] User onboarding flow from landing page to application
- [ ] Analytics and conversion tracking

### Long-term Vision (Beyond Current Scope)
- [ ] Mobile app development
- [ ] Enterprise features
- [ ] API for third-party integrations
- [ ] Advanced analytics dashboard

## Success Metrics

### Technical KPIs
- Page load speed < 2 seconds
- 99.5% uptime
- OCR accuracy > 95%
- Processing time < 5 seconds per receipt

### Business KPIs
- Beta signup conversion rate > 5%
- User retention rate > 60% after 30 days
- Customer satisfaction score > 4.5/5
- Monthly recurring revenue growth > 20%

## Risk Assessment & Mitigation

### Technical Risks
- **OCR Accuracy**: Test multiple AI services, implement manual review
- **Scalability**: Use Firebase autoscaling, implement caching
- **Security**: Regular security audits, encryption at rest and in transit

### Business Risks
- **Market Competition**: Focus on UX differentiation, rapid iteration
- **Customer Acquisition**: Multiple marketing channels, referral programs
- **Pricing Strategy**: Flexible pricing tiers, freemium model

## Next Steps (Landing Page Project)
1. **Immediate**: Test and refine email confirmation system
2. **Immediate**: Update email template with proper welcome message and download expectations
3. **This Week**: Complete landing page testing and optimization
4. **This Week**: Deploy landing page to production
5. **Ongoing**: Monitor beta signup metrics and conversion rates
6. **Future**: Coordinate with OCR MVP team for user handoff process

## Success Metrics (Landing Page Specific)
### Primary KPIs
- Beta signup conversion rate > 5%
- Email delivery success rate > 98%
- Page load speed < 2 seconds
- Mobile responsiveness across devices

### Secondary KPIs
- Time spent on page > 2 minutes
- Bounce rate < 60%
- Email open rates > 25%
- Social sharing and referral traffic