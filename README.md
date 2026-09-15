# ACE-Design_2026

Educational platform frontend built from the ACE Figma design. The
project currently contains the public website, authentication flows,
course browsing/details/checkout UI, and the student dashboard. The next
major phase is the Laravel + MySQL backend, followed by incremental
frontend integration and the staff portal.

## Current Status

**Frontend:** active / substantially implemented\
**Backend:** planned next\
**Staff portal:** Figma available; shell can be built early, data-heavy
screens should follow backend features

## Technology Stack

### Frontend

-   Next.js (App Router)
-   TypeScript
-   Tailwind CSS
-   Poppins via `next/font`
-   Lucide React
-   React Icons where needed
-   Next/Image and Next/Link

### Planned application libraries

-   React Hook Form
-   Zod
-   TanStack Query for interactive API state where useful

### Backend (next phase)

-   Laravel REST API
-   Laravel Sanctum
-   MySQL
-   Role/permission-based authorization for student, staff, and admin

## Architecture

``` text
ACE-Design-2026/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── (public)/
│   │   │   ├── (auth)/
│   │   │   ├── (student)/
│   │   │   └── (staff)/          # future
│   │   ├── components/
│   │   ├── features/
│   │   ├── lib/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── styles/
│   └── public/
├── backend/                       # Laravel next
└── README.md
```

Route groups organize layouts but do not appear in URLs.

## Frontend Areas Implemented / Designed

### Public website

-   Homepage
-   About
-   Careers
-   Contact
-   Courses listing
-   Dynamic course details
-   Terms & Conditions
-   Privacy Policy
-   404 page
-   Shared navigation, page header, footer, and Become a Teacher banner

### Authentication

Dedicated auth layout, separate from the public navigation/footer: -
Sign Up - Sign In - Verify Email - Email Verified - Forgot Password -
Reset Password - Password Reset Success

### Courses and checkout

-   Course cards (default/compact)
-   Course listing filters/toolbar/grid
-   Dynamic `/courses/[slug]`
-   Overview, outcomes, audience, curriculum, prerequisites, schedule,
    registration
-   Checkout structure
-   Mobile wallet and Fawry payment UI areas

### Student dashboard

Route: `/dashboard`

Implemented dashboard structure: - Student sidebar - Dashboard header -
Six statistic cards - Enrolled Courses - What's Next? - Learning
Overview - Assignments and Quizzes - Upcoming Sessions - Quick Actions

Desktop dashboard content follows a 1200px design grid. Important row
proportions: - Step 6: Learning Overview 384px + 24px gap + Assignments
& Quizzes 792px - Step 7: Upcoming Sessions 792px + 24px gap + Quick
Actions 384px

Use responsive ratios rather than forcing those widths when the
available viewport is smaller.

## Design System

Primary CSS variables currently used include:

``` css
--color-white: #ffffff;
--color-grey-light: #f8f9fa;
--color-grey-medium: #f0f0f0;
--color-grey-dark: #767676;
--color-grey-strong: #2b2b2b;
--color-grey-disable: #c4c4c4;
--color-blue-light: #eef6ff;
--color-blue-medium: #bed2e9;
--color-blue-vibrant: #0265d4;
--color-blue-dark: #004797;
--color-red-light: #fff4f7;
--color-red-dark: #d30032;
--color-violet-light: #f1efff;
--color-violet-dark: #7d6bf0;
--color-orange-light: #fff1de;
--color-orange-dark: #f49517;
--color-green-light: #e8fff1;
--color-green-dark: #19864a;
```

Typography uses **Poppins**. Dashboard convention established during
implementation: - Section/card title: `20px`, semibold - Body paragraph:
`16px`, regular

## Frontend Engineering Rules

1.  Reuse shared UI components before creating duplicates.
2.  Domain-specific UI belongs under `features/`.
3.  Route layouts own shared shells; pages must not duplicate them.
4.  Use exported Figma assets for custom illustrations and
    design-specific graphics.
5.  For fixed-size empty-state illustrations, prefer explicit Next/Image
    width/height rather than `fill`.
6.  Do not hardcode backend authorization in the UI as security. Laravel
    must independently enforce permissions.
7.  Keep visual components data-driven so mock values can be replaced by
    API responses without redesigning them.
8.  Preserve empty and populated dashboard states in the same
    components.
9.  Avoid fixed-height containers when their children can wrap/stack
    responsively.
10. Keep the 1200px Figma grid as the desktop target while allowing
    responsive shrinking/stacking.

## Backend Integration Plan

Development should proceed vertically rather than finishing every
remaining frontend screen with mock data.

### Phase 1 --- Backend foundation

-   Create Laravel application
-   Configure MySQL
-   Configure environment
-   Establish API structure
-   Configure CORS
-   Connect Next.js to Laravel

### Phase 2 --- Authentication and authorization

-   Users
-   Student/staff/admin roles
-   Laravel Sanctum
-   Login/logout/current-user endpoints
-   Protected API routes
-   Connect existing frontend auth flow

### Phase 3 --- Courses and enrollments

-   Courses
-   Course delivery/intakes as required by final schema
-   Enrollments
-   Course APIs
-   Replace course mock data
-   Connect student Enrolled Courses and active-course statistics
-   Begin staff course management UI

### Phase 4 --- Sessions

-   Sessions/schedules
-   Student What's Next?
-   Upcoming Sessions
-   Staff session management

### Phase 5 --- Assignments and quizzes

-   Assignments/submissions
-   Quizzes/attempts
-   Dashboard counts/scores
-   Staff management interfaces

### Phase 6 --- Orders/payments

-   Orders
-   Payment records/status
-   Checkout API integration
-   Staff/order views

### Phase 7 --- Certificates

-   Certificate records
-   Student certificates
-   Staff certificate issuing/management

### Phase 8 --- Dashboard aggregation

Suggested endpoint:

``` http
GET /api/student/dashboard
```

The API should aggregate the data required by the dashboard rather than
forcing the frontend to make many unrelated requests for initial
rendering.

## Staff Portal

Figma staff portal assets/designs exist.

Known nodes: - Staff Portal login: `672:32570` - Staff dashboard:
`672:32177`

Recommended architecture:

``` text
src/app/(staff)/
└── staff/
    ├── dashboard/
    ├── courses/
    ├── students/
    ├── sessions/
    ├── assignments/
    ├── quizzes/
    └── certificates/

src/features/
├── staff-dashboard/
├── staff-courses/
├── staff-students/
├── staff-sessions/
├── staff-assignments/
├── staff-quizzes/
└── staff-certificates/
```

Build the staff shell/layout early if useful, but build data-heavy staff
features alongside the corresponding Laravel backend phase.

## Future Frontend Workflow

After each backend phase:

1.  Return to the corresponding existing frontend feature.
2.  Replace mock/static data with typed API data.
3.  Add loading, error, empty, and populated states.
4.  Add mutations/actions only after the backend endpoint exists.
5.  Verify authorization behavior.
6.  Compare the result with Figma.
7.  Run a responsive/layout refinement pass.
8.  Commit the completed vertical feature.

## Planned Data Flow

``` text
Next.js
   │
   ├── Public Website
   ├── Student Portal
   └── Staff Portal
           │
           ▼
     Laravel REST API
           │
   Sanctum + Authorization
           │
           ▼
          MySQL
```

The browser must never connect directly to MySQL.

## Deployment

Target hosting: GoDaddy Node.js Hosting for the frontend environment.
Final Laravel/MySQL deployment configuration should be confirmed during
the backend/deployment phase.

## Development Notes

-   TypeScript alias:

``` json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

-   If Next.js cache causes stale module/layout errors:

``` bash
rm -rf .next
npm run dev
```

-   Never commit `.next/`. A previous push failed because a Turbopack
    cache file exceeded GitHub's 100 MB limit.

Recommended `.gitignore` entries include:

``` gitignore
.next/
node_modules/
.env
.env.local
```

## Immediate Next Step

Start **Backend Phase 1: Laravel + MySQL foundation**, then integrate
frontend features phase-by-phase rather than completing all remaining
staff screens with mock data.