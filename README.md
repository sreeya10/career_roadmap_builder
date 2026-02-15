# Career Roadmap Builder

A complete full-stack web application for career planning, progress tracking, and collaborative learning.

## Features

- 50+ Career paths with detailed roadmaps
- Progress tracking for skills and projects
- Daily streak system for motivation
- Time tracking (daily/weekly)
- Study groups for collaborative learning
- Career suitability quiz
- User authentication with JWT
- Responsive design

## Tech Stack

**Frontend:**
- HTML5
- CSS3 (Custom styling, no frameworks)
- Vanilla JavaScript

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Setup Steps

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
Edit the `.env` file and update:
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET` - A secure random string
- `PORT` - Server port (default: 3000)

3. Start MongoDB (if running locally):
```bash
mongod
```

4. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
career-roadmap-builder/
├── public/                  # Frontend files
│   ├── index.html          # Home page
│   ├── about.html          # About page
│   ├── careers.html        # Careers listing
│   ├── career-detail.html  # Individual career page
│   ├── dashboard.html      # User dashboard
│   ├── resources.html      # Learning resources
│   ├── quiz.html           # Career quiz
│   ├── login.html          # Login page
│   ├── signup.html         # Signup page
│   ├── group.html          # Study groups
│   ├── styles.css          # All styling
│   ├── script.js           # Main JavaScript
│   ├── auth.js             # Authentication logic
│   ├── careers-data.js     # Career data
│   ├── career-detail.js    # Career page logic
│   ├── dashboard.js        # Dashboard logic
│   ├── quiz.js             # Quiz logic
│   └── group.js            # Group functionality
├── models/                  # Database models
│   ├── User.js
│   ├── Group.js
│   └── TimeLog.js
├── routes/                  # API routes
│   ├── auth.js
│   ├── career.js
│   ├── progress.js
│   ├── group.js
│   └── time.js
├── middleware/
│   └── auth.js             # JWT authentication
├── server.js               # Express server
├── package.json
└── .env                    # Environment variables
```

## Usage

### For Users

1. **Sign Up / Login**: Create an account or login to save progress
2. **Explore Careers**: Browse 50+ career paths
3. **Take Quiz**: Find your ideal career match
4. **Track Progress**: Mark skills and projects as complete
5. **Join Groups**: Study with friends and see each other's progress
6. **Monitor Stats**: View your streak, time spent, and achievements

### API Endpoints

**Authentication:**
- POST `/api/auth/signup` - Register new user
- POST `/api/auth/login` - User login
- GET `/api/auth/me` - Get current user

**Careers:**
- POST `/api/career/save` - Save career to profile
- POST `/api/career/set-primary` - Set primary career
- GET `/api/career/saved` - Get saved careers

**Progress:**
- POST `/api/progress/skill` - Mark skill complete
- POST `/api/progress/project` - Mark project complete
- GET `/api/progress/:career` - Get career progress
- POST `/api/progress/update-streak` - Update daily streak

**Groups:**
- POST `/api/group/create` - Create study group
- POST `/api/group/join` - Join group with invite code
- GET `/api/group/my-groups` - Get user's groups
- GET `/api/group/:groupId/members` - Get group members
- POST `/api/group/toggle-privacy` - Toggle progress visibility

**Time Tracking:**
- POST `/api/time/log` - Log time spent
- GET `/api/time/daily` - Get today's time
- GET `/api/time/weekly` - Get weekly summary

## Color Palette

- Primary: #1E1B4B (Deep Indigo)
- Accent: #7C3AED (Purple)
- Highlight: #22D3EE (Cyan)
- Background: #F8FAFC (Light Gray)

## Features in Detail

### Progress Tracking
- Only one career can be active for tracking
- Automatic progress calculation
- Visual progress bars
- Milestone-based encouragement messages

### Streak System
- Daily activity tracking
- Current and longest streak display
- Automatic streak updates

### Study Groups
- Create private study groups
- Share invite codes
- View friend progress
- Option to hide individual progress

### Time Tracking
- Automatic session tracking
- Daily and weekly summaries
- Displayed on dashboard

## License

This project is created for educational purposes.
