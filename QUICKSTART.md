# Quick Start Guide

Get your Career Roadmap Builder running in 3 steps:

## Step 1: Install Dependencies

```bash
cd career-roadmap-builder
npm install
```

## Step 2: Setup Database

**Option A - Local MongoDB:**
Make sure MongoDB is running on your machine:
```bash
mongod
```

**Option B - MongoDB Atlas (Cloud):**
1. Create free account at mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `.env` file with your connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/career-roadmap
```

## Step 3: Start Server

```bash
npm start
```

Visit: http://localhost:3000

## First Time User Guide

1. **Sign Up**: Create your account (top right corner)
2. **Take Quiz**: Find your ideal career path
3. **Explore Careers**: Browse 50+ career options
4. **Start Learning**: Click on a career to see the roadmap
5. **Track Progress**: Mark skills and projects as done
6. **Build Streak**: Visit daily to maintain your streak!

## Key Features to Try

✅ **Career Quiz** - Get personalized career recommendation  
✅ **Progress Tracking** - Mark skills/projects complete  
✅ **Streak System** - Build daily learning habits (🔥)  
✅ **Study Groups** - Learn with friends  
✅ **Time Tracking** - Monitor your learning time  
✅ **Dashboard** - View all your stats in one place  

## Tips

- Only ONE career can be tracked at a time for progress
- Login to save your progress across sessions
- Create a study group and share the invite code with friends
- Check Resources page for learning materials
- Visit daily to maintain your streak!

## Troubleshooting

**Can't connect to database?**
- Make sure MongoDB is running (if local)
- Check your connection string in .env file

**Port 3000 already in use?**
- Change PORT in .env file to another port (e.g., 3001)

**Changes not showing?**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Default Settings

- Port: 3000
- Database: MongoDB (local or Atlas)
- Token expiry: 30 days

Enjoy building your career! 🚀
