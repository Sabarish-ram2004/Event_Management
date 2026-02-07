# EventPro - Login & Signup Pages

## Project Structure

```
src/
├── pages/
│   ├── Login.jsx          # Login page component
│   ├── Signup.jsx         # Signup page component
│   └── Dashboard.jsx      # Dashboard page (post-login)
├── styles/
│   ├── Auth.css           # Styling for login/signup pages
│   └── Dashboard.css      # Styling for dashboard
├── App.jsx                # Main routing setup
└── main.jsx               # App entry point
```

## Routes Configuration

The application uses React Router with the following routes:

- **`/`** → Redirects to `/login` (default route)
- **`/login`** → Login page
- **`/signup`** → Signup page  
- **`/dashboard`** → Dashboard (post-authentication)

## Login Page Features

✅ Email input field
✅ Password input field
✅ Role selection dropdown (Admin, User, Vendor)
✅ Login button
✅ "Don't have an account? Register" link to signup page
✅ Close button (X)

## Signup Page Features

✅ Full name input field
✅ Email input field
✅ Password input field
✅ Role selection dropdown (Admin, User, Vendor)
✅ Create Account button
✅ "Already have an account? Login" link to login page
✅ Close button (X)

## Dashboard Page Features

✅ Navigation bar with EventPro branding
✅ Logout button
✅ Welcome message

## Styling Details

- **Color Scheme**: Purple gradient (from #667eea to #764ba2)
- **Responsive Design**: Mobile-friendly layouts
- **Smooth Animations**: Fade-in effect on card load
- **Modern UI**: Clean inputs, rounded corners, hover effects
- **Form Validation**: Required field validation

## How to Use

1. **Start the application**: `npm run dev`
2. **Access the app**: Open `http://localhost:5174`
3. **Navigate**: 
   - Login page is the default landing page
   - Click "Register" to go to signup
   - Click "Login" from signup to return to login
   - After login, you're redirected to the dashboard
   - Click "Logout" to return to login

## Next Steps (Backend Integration)

To connect with your backend services:

1. Replace the TODO comments in Login.jsx and Signup.jsx with actual API calls
2. Update the form submission handlers to call your AuthUser microservice
3. Implement JWT token storage and authentication state management
4. Add protected routes using private route components
5. Connect API Gateway for microservice communication
