# 🏘️ CommuniChamp - Community Notice Board

A modern, mobile-friendly community notice board website designed for residential societies and local communities. Built with React, TypeScript, and Tailwind CSS.


## ✨ Features

### 🏠 **Community Hub**
- **Announcements**: Important community updates and notices
- **Local Events**: Community gatherings, celebrations, and activities  
- **Buy/Sell/Rent**: Non-commercial marketplace for residents
- **Important Contacts**: Emergency services and community contacts

### 📱 **User Experience**
- **Mobile-First Design**: Optimized for smartphones and tablets
- **Responsive Layout**: Seamless experience across all devices
- **Clean Interface**: Minimal, card-based design with intuitive navigation
- **Smooth Navigation**: Sticky navbar with smooth scrolling to sections

### 🔐 **Admin Features**
- **Secure Login**: Password-protected admin access
- **Content Management**: Easy-to-use editing interface
- **Real-time Updates**: Changes reflect immediately on the homepage
- **Local Storage**: No backend required - data persists locally

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd community-notice-board
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Usage

### For Residents (Public View)
1. Visit the website to view community information
2. Navigate between sections using the navbar
3. Click phone numbers in contacts to call directly
4. View announcements, events, and marketplace listings

### For Administrators
1. **Access Admin Panel**
   - Click the shield icon (🛡️) in the top-right corner of the navbar
   - Enter password: `admin123`

2. **Edit Content**
   - Switch between tabs: Announcements, Events, Listings, Contacts
   - Add new items using the "Add" button
   - Edit existing content directly in the forms
   - Delete items using the trash icon

3. **Save Changes**
   - Click "Save Changes" to persist updates
   - Changes appear immediately on the homepage
   - Data is stored in browser's localStorage

4. **Logout**
   - Click "Logout" to return to public view

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── HomePage.tsx     # Main homepage component
│   ├── Navbar.tsx       # Navigation bar
│   ├── HeroSection.tsx  # Hero banner section
│   ├── AdminLogin.tsx   # Admin login form
│   └── AdminDashboard.tsx # Admin content editor
├── data/
│   └── defaultData.ts   # Sample community data
├── hooks/
│   └── useLocalStorage.ts # localStorage management
├── types.ts             # TypeScript interfaces
├── App.tsx              # Main app component
└── main.tsx            # App entry point
```

## 🎨 Design System

### Colors
- **Primary**: Blue tones (#2563eb, #1d4ed8)
- **Background**: Light grays (#f9fafb, #f3f4f6)
- **Cards**: White with subtle shadows
- **Text**: Dark grays for readability

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable font sizes (16px+)
- **Mobile**: Optimized text scaling

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Consistent styling with hover states
- **Forms**: Clean inputs with focus states



## 📱 Mobile Optimization

- **Responsive Grid**: Adapts from 1 column (mobile) to 3 columns (desktop)
- **Touch-Friendly**: Large buttons and tap targets
- **Readable Text**: Optimized font sizes and line heights
- **Fast Loading**: Minimal dependencies and optimized assets

## 🔒 Security Notes

- **Client-Side Only**: No server-side authentication
- **Local Storage**: Data stored in browser only
- **Simple Password**: For demonstration purposes
- **Production Use**: Consider implementing proper authentication


### Environment Setup
No environment variables required - works out of the box!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For questions or issues:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include browser and device information

---

**Built with ❤️ for stronger communities**
