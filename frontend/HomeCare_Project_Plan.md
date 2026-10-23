# HomeCare

## Core Product Pages

### Public website

- Home
- How It Works
- Nursing Services
- Find Nurses (where public access is appropriate)
- About
- Contact / Help
- FAQ
- Terms of Service
- Privacy Policy
- Cancellation and Refund Policy
- Nurse onboarding information

### Authentication

- Login
- Patient / client signup
- Nurse signup
- Email or mobile verification
- Forgot password / account recovery
- Verification status and required next steps

### Patient / Client dashboard

- Overview
- Create a Nursing Request
- Nearby / open request status
- Browse and filter nurses
- Nurse profile details
- Specific nurse request
- My Bookings
- Booking details and timeline
- Chat / calling entry point
- Duty start and completion confirmation
- Payments and receipts
- Profile and verification
- Help, complaints, and safety support

### Nurse dashboard

- Overview
- Professional profile
- Credential upload and verification status
- Availability and service radius
- Nearby pending requests
- Request details and accept action
- Active booking
- On-the-way and arrival updates
- Duty start / completion confirmation
- Departure update
- Earnings and payouts
- Trusted contact / safety settings
- Support and disputes

### Admin dashboard

- Overview and operational metrics
- Patient/client management
- Nurse management
- Credential verification queue
- Requests and booking management
- Payment and payout status overview
- Refund/dispute queue
- Complaints and safety incident workflow
- Audit log
- Platform configuration and reports

## 11. Frontend Architecture --- React + TypeScript

Recommended approach: **one React application with shared components and
separate role-specific layouts and pages**. Do not start with three
independent frontend applications unless a future operational or
deployment requirement makes that worthwhile.

A suggested `src/` structure:

```text
src/
├── app/
│   ├── App.tsx
│   ├── main.tsx
│   ├── router.tsx
│   └── providers.tsx
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── ui/                 # Button, Input, Dialog, Badge, Card
│   ├── forms/              # Shared form fields
│   ├── feedback/           # Toasts, loading, empty/error states
│   ├── data-display/       # Shared tables, status labels
│   └── auth/               # RequireAuth, RequireRole, RequireGuest
│
├── layouts/
│   ├── PublicLayout.tsx
│   ├── AuthLayout.tsx
│   ├── UserLayout.tsx
│   ├── NurseLayout.tsx
│   └── AdminLayout.tsx
│
├── pages/
│   ├── public/
│   ├── auth/
│   ├── user/
│   ├── nurse/
│   ├── admin/
│   ├── UnauthorizedPage.tsx
│   └── NotFoundPage.tsx
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── schemas/
│   │   └── types/
│   ├── nurses/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   ├── requests/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── schemas/
│   ├── bookings/
│   ├── attendance/
│   ├── payments/
│   ├── notifications/
│   ├── chat/
│   ├── profile/
│   ├── verification/
│   ├── safety/
│   └── admin/
│
├── services/
│   ├── apiClient.ts
│   └── uploadService.ts
│
├── hooks/
│   ├── useDebounce.ts
│   └── useMediaQuery.ts
│
├── lib/
│   ├── queryClient.ts
│   ├── utils.ts
│   └── dateUtils.ts
│
├── schemas/
│   └── shared.schema.ts
│
├── types/
│   ├── user.types.ts
│   ├── nurse.types.ts
│   ├── request.types.ts
│   ├── booking.types.ts
│   ├── payment.types.ts
│   └── api.types.ts
│
└── styles/
    └── index.css
```

### Suggested frontend libraries

- React + TypeScript + Vite --- app foundation.
- React Router --- route handling and nested layouts.
- TanStack Query --- server data, caching, mutations, and refetching.
- Axios or `fetch` --- API requests; choose one primary approach.
- React Hook Form + Zod --- forms and validation.
- Tailwind CSS + shadcn/ui --- styling and accessible UI primitives.
- Lucide React --- icons.
- Zustand --- optional shared client state when it is actually needed.
- Socket.IO client or another supported realtime client --- only after
  the backend realtime design is selected.
- Vitest + React Testing Library --- frontend tests.

Do not put payment, booking assignment, role authorization, or
credential verification rules only in the frontend. The backend must
enforce them.

## 12. Design System

The intended visual direction is premium, modern, calm, and trustworthy.

Proposed core palette:

Purpose Color Hex

---

Deep brand / dark surfaces Midnight Emerald `#102A2A`
Primary actions Royal Emerald `#176B5B`
Hover / deeper accent Deep Forest `#12483F`
Premium accent Champagne Gold `#D9BC83`
Main background Warm Ivory `#F8F7F2`
Cards and forms White `#FFFFFF`
Primary text Slate `#344054`
Muted surfaces Muted Sage `#E4EEE9`
Borders Border Mist `#DFE6E2`
Success Success Green `#287A52`
Error Error Rose `#B42336`

Use ivory and white for most content surfaces, emerald for key actions
and navigation, and gold sparingly. Maintain readable contrast and never
use color alone to convey a status.

## 13. Technical Rules and Edge Cases

### Request acceptance

- The backend must atomically claim a request for one nurse only.
- Validate nurse approval, availability, location eligibility, and
  request state on the server at acceptance time.
- A nurse cannot accept a request that is already accepted, cancelled,
  expired, or otherwise closed.
- The client must handle conflicts gracefully and refresh the current
  request state.
- Notifications and the UI list are not the source of truth.

### Location matching

- Define what "within 10--15 km" means: straight-line distance, road
  distance, or a configurable radius.
- Define which location is used for matching and when it is updated.
- Ask permission before accessing device location and provide a manual
  address/location alternative where possible.
- Do not expose exact patient addresses to nurses who are not assigned
  to the booking.
- Define behavior when location permission is denied or location is
  inaccurate.

### Availability

- Nurses must be eligible, approved, and available to receive or
  accept a request.
- Define how overlapping bookings and schedule conflicts are
  prevented.
- Define how nurse availability changes affect requests already sent.
- Define whether the radius is fixed or configurable per service area.

### Attendance and disputes

- Record who submitted each event and when.
- Use server timestamps for important state transitions.
- Handle missing confirmations, poor connectivity, and conflicting
  reports.
- Provide a support/dispute path before finalizing a contested payout.
- Define what evidence, if any, may be collected and retained.

### Privacy and security

- Use secure authentication and server-side authorization.
- Keep identity documents, health-related data, emergency contacts,
  and precise location access restricted.
- Define data retention, consent, deletion/correction, and access
  policies.
- Avoid exposing sensitive details in push notifications or logs.
- Use HTTPS in production and protect authenticated routes and APIs.
- Ensure the admin dashboard cannot be accessed merely by changing a
  frontend role value.

## 14. MVP Scope --- Recommended First Release

Build the system in increments rather than trying to implement every
feature at once.

### Phase 1 --- Foundation

- Public website and core design system.
- Login/signup and verified contact details.
- Patient and nurse profiles.
- Nurse document submission and admin approval.
- Role-specific layouts and protected routing.

### Phase 2 --- Request matching

- Create a nursing request.
- Nearby eligible nurse matching.
- Pending requests list.
- First-successful-acceptance logic.
- Specific nurse request.
- Request status updates and basic notifications.

### Phase 3 --- Booking and duty workflow

- Booking details and status timeline.
- Nurse on-the-way and arrival updates.
- Dual confirmation of duty start and completion.
- Cancellation, no-show, and dispute paths.
- Safety contact and support flow.

### Phase 4 --- Payments and realtime experience

- Payment-provider integration and verified payment events.
- Refund rules.
- Nurse payout integration and payout status.
- Real-time request updates and notifications.
- Chat or calling after acceptance.

### Phase 5 --- Hardening and launch

- Security and authorization review.
- Booking concurrency tests.
- Payment idempotency and webhook tests.
- Mobile responsive and accessibility testing.
- Operational monitoring and support procedures.
- Privacy policy, terms, cancellation policy, and applicable
  compliance review.

The order can change depending on the selected payment provider and the
business model. For example, payment architecture should be designed
before relying on automatic nurse payouts.

## 15. Decisions Still Open

The following are not yet confirmed and should not be treated as settled
requirements:

1.  **Service geography:** Initial city/launch area and whether the
    radius is 10 km, 15 km, or configurable.
2.  **Pricing:** Per hour, per visit, per shift, or service-specific
    pricing.
3.  **Payment timing:** Capture before broadcasting, authorize first and
    capture after acceptance, or another supported marketplace flow.
4.  **No nurse accepts:** Automatic refund, retry, request expiry, or
    another process.
5.  **Cancellation and no-show:** Fees, refunds, and evidence
    requirements.
6.  **Duty confirmations:** PIN/OTP, dual buttons, location evidence, or
    a combination.
7.  **Disputes:** What happens when patient and nurse disagree on
    completion.
8.  **Payout timing:** Immediate initiation after successful completion
    checks versus a short safety/dispute hold.
9.  **Specific nurse request:** Expiry, reminder, and whether the
    patient may then broadcast to others.
10. **Contact methods:** Email, mobile OTP, Google sign-in, and account
    recovery details.
11. **Realtime technology:** WebSockets/Socket.IO or another option.
12. **Communication:** In-app chat, masked calling, or external phone
    contact.
13. **Nurse safety:** Relative-contact verification, consent,
    escalation, and emergency workflows.
14. **Verification policy:** Exact required documents and approval
    criteria.
15. **Legal and operational requirements:** Applicable healthcare,
    marketplace, privacy, tax, payment, and professional licensing
    obligations for the launch location.

## 16. Working Agreement for Future Project Discussions

When continuing HomeCare development, use this document as the current
product reference.

- Prefer one React + TypeScript frontend with shared components and
  separate User, Nurse, and Admin layouts.
- Keep the on-demand nearby nurse request model and
  first-successful-acceptance rule in mind.
- Include the specific-nurse request option.
- Treat patient and nurse verification as core workflows.
- Include the full travel, arrival, duty start, duty completion,
  departure, and payout lifecycle when discussing bookings.
- Include nurse safety and trusted-relative contact requirements where
  relevant.
- Distinguish confirmed requirements from open product decisions.
- Do not invent features or business rules that the owner has not
  confirmed.
- Prioritize reliable backend enforcement for booking ownership,
  authorization, payments, verification, and payout decisions.
- Keep frontend guidance practical, modular, accessible, responsive,
  and suitable for React + TypeScript.

# Model Data Store

## User Model

```
{
  "id": "user_001",
  "fullName": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210",
  "passwordHash": "hashed_password",
  "role": "patient",
  "profileImage": "image_url",
  "isVerified": false,
  "accountStatus": "active",
  "createdAt": "2026-10-23T10:00:00Z",
  "updatedAt": "2026-10-23T10:00:00Z"
}
```

## Patient Model

```
{
  "id": "patient_001",
  "userId": "user_001",
  "dateOfBirth": "1985-05-12",
  "gender": "male",
  "address": {
    "street": "Example Street",
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "postalCode": "462001"
  },
  "location": {
    "latitude": 23.2599,
    "longitude": 77.4126
  },
  "emergencyContact": {
    "name": "Amit Sharma",
    "relationship": "brother",
    "phone": "98XXXXXXXX"
  },
  "createdAt": "2026-10-23T10:00:00Z"
}
```

## Nurse Profile Model

```
{
  "id": "nurse_001",
  "userId": "user_002",
  "qualification": "GNM",
  "experienceYears": 4,
  "specializations": [
    "elderly_care",
    "post_surgery_care"
  ],
  "serviceRadiusKm": 15,
  "serviceLocation": {
    "latitude": 23.2599,
    "longitude": 77.4126
  },
  "verificationStatus": "pending",
  "availabilityStatus": "available",
  "isAcceptingRequests": false,
  "averageRating": 0,
  "createdAt": "2026-10-23T10:00:00Z"
}
```

## Nurse Document Model

```
{
  "id": "document_001",
  "nurseId": "nurse_001",
  "documentType": "nursing_certificate",
  "fileUrl": "private_storage_url",
  "verificationStatus": "pending",
  "reviewedBy": null,
  "reviewedAt": null,
  "rejectionReason": null,
  "uploadedAt": "2026-10-23T10:00:00Z"
}
```

## Service Model

```
{
  "id": "service_001",
  "name": "Elderly Care",
  "slug": "elderly-care",
  "description": "Support for elderly care needs at home.",
  "isActive": true,
  "createdAt": "2026-10-23T10:00:00Z"
}
```

## Booking / Care Request Model

```
{
  "id": "booking_001",
  "patientId": "patient_001",
  "serviceId": "service_001",
  "preferredNurseId": null,
  "assignedNurseId": null,
  "assignmentMode": "first_accept",
  "careDescription": "Need nursing support at home.",
  "address": {
    "city": "Bhopal",
    "postalCode": "462001",
    "latitude": 23.2599,
    "longitude": 77.4126
  },
  "scheduledStartAt": "2026-10-25T09:00:00Z",
  "scheduledEndAt": "2026-10-25T13:00:00Z",
  "status": "pending",
  "paymentStatus": "pending",
  "createdAt": "2026-10-23T10:00:00Z"
}
```

## Booking Acceptance Model

```
{
  "id": "response_001",
  "bookingId": "booking_001",
  "nurseId": "nurse_001",
  "responseStatus": "accepted",
  "respondedAt": "2026-10-23T10:05:00Z"
}
```

## Duty Attendance Model

```
{
  "id": "duty_001",
  "bookingId": "booking_001",
  "nurseDepartureAt": null,
  "nurseArrivalAt": null,
  "nurseStartConfirmedAt": null,
  "patientStartConfirmedAt": null,
  "actualDutyStartAt": null,
  "nurseCompletionConfirmedAt": null,
  "patientCompletionConfirmedAt": null,
  "actualDutyEndAt": null,
  "nurseLeftLocationAt": null,
  "status": "not_started"
}
```

## Payment Model

```
{
  "id": "payment_001",
  "bookingId": "booking_001",
  "patientId": "patient_001",
  "nurseId": "nurse_001",
  "amount": 1500,
  "currency": "INR",
  "paymentProvider": "payment_gateway",
  "providerPaymentId": "provider_payment_123",
  "paymentStatus": "pending",
  "payoutStatus": "not_eligible",
  "createdAt": "2026-10-23T10:00:00Z"
}
```

## Chat / Messages Model

```
{
  "id": "message_001",
  "bookingId": "booking_001",
  "senderId": "user_001",
  "receiverId": "user_002",
  "messageType": "text",
  "message": "I will be available at home.",
  "sentAt": "2026-10-23T10:10:00Z",
  "readAt": null
}
```

## Notification Model

```
{
  "id": "notification_001",
  "userId": "user_002",
  "bookingId": "booking_001",
  "type": "new_care_request",
  "title": "New Care Request",
  "body": "A new nursing request is available in your area.",
  "isRead": false,
  "createdAt": "2026-10-23T10:00:00Z"
}
```

## Admin Activity / Audit Log

```
{
  "id": "audit_001",
  "adminId": "user_admin_001",
  "action": "nurse_verification_approved",
  "entityType": "nurse",
  "entityId": "nurse_001",
  "reason": "Required documents reviewed",
  "createdAt": "2026-10-23T11:00:00Z"
}
```
