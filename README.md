# 🚀 Social Media Scheduler SaaS

## Master Project Context v1.0



---



# Project Overview



A production-level Social Media Scheduler SaaS application where users can:



- Schedule posts

- Manage multiple social media accounts

- View analytics

- Generate AI content

- Manage profile & settings

- Receive notifications



Project is being built like a real SaaS product.



---



# Tech Stack



## Frontend



- React 19

- TypeScript

- Vite

- Tailwind CSS

- React Router DOM

- Lucide React



## Backend (Upcoming)



- Spring Boot 3

- Spring Security 6

- JWT Authentication

- Spring Data JPA

- Hibernate

- MySQL

- Lombok

- Maven

- Validation

- File Upload



---



# Folder Structure



frontend

├── src

│

├── assets

├── components

│ ├── landing

│ ├── dashboard

│ ├── scheduler

│ ├── common

│

├── context

├── hooks

├── layouts

├── pages

├── routes

├── services

├── types

├── utils

└── App.tsx



---



# Frontend Status



## Landing



✅ Complete



Contains



- Navbar

- Hero

- Trusted Brands

- Features

- Dashboard Showcase

- AI Studio

- Testimonials

- Pricing

- Footer



---



## Authentication



✅ Complete



Pages



- Login

- Register

- Forgot Password

- Reset Password



Implemented



- AuthContext

- ProtectedRoute

- LocalStorage Token

- Logout



---



## Dashboard



Status



90%



Contains



- Sidebar

- Header

- Stats Cards

- Analytics Chart

- Recent Activity

- Quick Actions

- AI Assistant



---



## Scheduler



Status



85%



Contains



- Calendar

- Create Post Modal

- View Post Modal

- Schedule Form



---



## Analytics



Status



75%



Contains



- Analytics Cards

- Analytics Chart



---



## AI Studio



Status



75%



Contains



- Caption Generator UI

- Hashtag Generator UI

- AI Tool Cards



---



## Settings



Status



85%



Contains



- Appearance

- Notifications

- Delete Account UI



---



## Notifications



Status



85%



Contains



- Notification List



---



## Profile



Status



85%



Contains



- User Information

- Avatar UI

- Edit Button



---





#project structere 

frontend/
│
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── robots.txt
│
├── src/
│
├── app/
│   ├── AppProviders.tsx
│   └── ErrorBoundary.tsx
│
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   ├── illustrations/
│   └── logos/
│
├── components/
│   │
│   ├── ui/                              (Shadcn / Base UI Components)
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── skeleton.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   └── tooltip.tsx
│   │
│   ├── common/
│   │   ├── ConfirmDialog.tsx
│   │   ├── EmptyState.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── Loader.tsx
│   │   ├── Logo.tsx
│   │   ├── PageTitle.tsx
│   │   ├── SearchBox.tsx
│   │   ├── SectionHeading.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── landing/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── StatsCounter.tsx
│   │   ├── TrustedBrands.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── DashboardShowcase.tsx
│   │   ├── AIStudioSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Newsletter.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   │
│   ├── dashboard/
│   │   ├── DashboardHeader.tsx
│   │   ├── DashboardSidebar.tsx
│   │   ├── DashboardOverview.tsx
│   │   ├── StatsCard.tsx
│   │   ├── AnalyticsChart.tsx
│   │   ├── RecentActivity.tsx
│   │   ├── QuickActions.tsx
│   │   ├── NotificationPanel.tsx
│   │   ├── UpcomingPosts.tsx
│   │   ├── PlatformCards.tsx
│   │   └── AIAssistant.tsx
│   │
│   ├── scheduler/
│   │   ├── Calendar.tsx
│   │   ├── CalendarDay.tsx
│   │   ├── CalendarToolbar.tsx
│   │   ├── CreatePostModal.tsx
│   │   ├── ViewPostModal.tsx
│   │   ├── ScheduleForm.tsx
│   │   ├── PlatformSelector.tsx
│   │   ├── MediaUploader.tsx
│   │   ├── PostPreview.tsx
│   │   ├── DraftList.tsx
│   │   ├── SchedulerFilters.tsx
│   │   └── SchedulerStats.tsx
│   │
│   ├── analytics/
│   │   ├── AnalyticsOverview.tsx
│   │   ├── AudienceChart.tsx
│   │   ├── EngagementChart.tsx
│   │   ├── PlatformPerformance.tsx
│   │   ├── TopPosts.tsx
│   │   └── ExportReport.tsx
│   │
│   ├── ai/
│   │   ├── CaptionGenerator.tsx
│   │   ├── HashtagGenerator.tsx
│   │   ├── ContentIdeas.tsx
│   │   ├── RewriteContent.tsx
│   │   ├── PromptLibrary.tsx
│   │   └── AIHistory.tsx
│   │
│   ├── settings/
│   │   ├── AccountSettings.tsx
│   │   ├── AppearanceSettings.tsx
│   │   ├── ConnectedAccounts.tsx
│   │   ├── NotificationSettings.tsx
│   │   ├── PrivacySettings.tsx
│   │   └── SecuritySettings.tsx
│   │
│   ├── profile/
│   │   ├── ProfileCard.tsx
│   │   ├── EditProfile.tsx
│   │   ├── UserStatistics.tsx
│   │   └── SocialAccounts.tsx
│   │
│   └── notifications/
│       ├── NotificationCard.tsx
│       └── NotificationList.tsx
│
├── config/
│   ├── appConfig.ts
│   ├── routes.ts
│   └── constants.ts
│
├── context/
│   ├── AuthContext.tsx
│   ├── ThemeContext.tsx
│   └── NotificationContext.tsx
│
├── features/
│   ├── auth/
│   ├── scheduler/
│   ├── analytics/
│   ├── ai/
│   └── dashboard/
│
├── hooks/
│   ├── useAuth.ts
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   ├── useModal.ts
│   ├── useTheme.ts
│   └── useToast.ts
│
├── layouts/
│   ├── DashboardLayout.tsx
│   └── PublicLayout.tsx
│
├── lib/
│   └── utils.ts
│
├── pages/
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── PricingPage.tsx
│   ├── DashboardPage.tsx
│   ├── SchedulerPage.tsx
│   ├── AnalyticsPage.tsx
│   ├── AIStudioPage.tsx
│   ├── SettingsPage.tsx
│   ├── ProfilePage.tsx
│   ├── NotificationsPage.tsx
│   ├── ForgotPasswordPage.tsx
│   ├── ResetPasswordPage.tsx
│   └── NotFoundPage.tsx
│
├── routes/
│   ├── AppRouter.tsx
│   ├── ProtectedRoute.tsx
│   └── PublicRoute.tsx
│
├── services/
│   ├── authService.ts
│   ├── dashboardService.ts
│   ├── schedulerService.ts
│   ├── analyticsService.ts
│   ├── aiService.ts
│   ├── notificationService.ts
│   └── uploadService.ts
│
├── store/
│   ├── index.ts
│   ├── authStore.ts
│   ├── schedulerStore.ts
│   ├── analyticsStore.ts
│   └── themeStore.ts
│
├── styles/
│   ├── globals.css
│   ├── animations.css
│   └── variables.css
│
├── types/
│   ├── analytics.ts
│   ├── api.ts
│   ├── auth.ts
│   ├── dashboard.ts
│   ├── notification.ts
│   ├── scheduledPost.ts
│   └── user.ts
│
├── utils/
│   ├── constants.ts
│   ├── formatDate.ts
│   ├── formatNumber.ts
│   ├── storage.ts
│   └── validators.ts
│
├── App.tsx
├── index.css
└── main.tsx
