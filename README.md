# E-Commerce Landing Page - Web Development Internship Task

A modern, responsive e-commerce website with interactive navigation and color-changing hover effects.

## 🎯 Project Overview

This project demonstrates a complete e-commerce shopping experience with:
- Fixed navigation menu that changes on scroll and hover
- Interactive product cards with smooth color transitions
- Fully functional shopping cart
- Product filtering by category
- Clean, responsive design for all devices

## ✨ Key Features

### Interactive Navigation Menu
- **Fixed Position**: Stays at the top across all pages and sections
- **Scroll Detection**: Changes style when user scrolls down
- **Hover Effects**: Menu items highlight with color changes and animations
- **Cart Button**: Animated cart icon with item counter
- **Responsive**: Adapts to mobile screens

### Color-Changing Hover Effects
- **Product Cards**: 
  - Gradient overlay appears on hover (purple → pink)
  - Images scale and brighten
  - Category badges transform colors
  - Prices change from purple to pink
  - Smooth lift animation with shadow
  
- **Buttons & Links**:
  - All interactive elements have color transitions
  - "Add to Cart" buttons change to green
  - Filter buttons animate with colors
  - Navigation links get underline animations

### Shopping Experience
- Add products to cart with live counter updates
- Sliding cart sidebar with smooth animations
- Remove items from cart
- Real-time total price calculation
- Cart data persists (localStorage)
- Success notifications

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes (desktop, tablet, mobile)
- Touch-friendly interactions
- Responsive grid layouts
- Full-width cart on mobile

## 📁 Project Structure

```
SCT_WD_1/
└── ecommerce/
    ├── shop.html              # Main e-commerce page
    ├── css/
    │   └── shop-styles.css    # All styles with hover effects
    ├── js/
    │   └── shop.js            # Shopping cart & interactions
    └── README.md              # Detailed documentation
```

## 🚀 How to Run

### Method 1: Direct Browser Open (Quickest)

```powershell
# Navigate to project folder
cd SCT_WD_1\ecommerce

# Open in default browser
ii .\shop.html
```

### Method 2: Local Server (Recommended)

```powershell
# From ecommerce folder
cd SCT_WD_1\ecommerce

# Start Python HTTP server
python -m http.server 8000
```

Then open http://localhost:8000/shop.html in your browser.

### Method 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click `shop.html`
3. Select "Open with Live Server"

## 🧪 Testing the Features

### Navigation Menu Testing
1. Scroll down the page → Nav background changes color and gains shadow
2. Hover over menu links → Color changes and underline appears
3. Click cart button → Sidebar slides in from right
4. Resize to mobile → Navigation stays fixed and functional

### Hover Effects Testing
1. Hover over any product card → Watch multiple color transitions:
   - Gradient overlay fades in
   - Image zooms smoothly
   - Category badge changes color
   - Product name highlights
   - Price color changes
   - Card lifts with shadow

2. Hover over filter buttons → Color change with lift effect

3. Hover "Add to Cart" → Button turns green and scales

### Shopping Cart Testing
1. Click "Add to Cart" on products → Green notification appears
2. Cart counter updates in real-time
3. Click cart icon → Sidebar opens with overlay
4. Remove items → Click × button
5. Close cart → Click outside, × button, or ESC key
6. Refresh page → Cart data persists

### Responsive Testing
1. Desktop (>768px) → Multi-column grid
2. Tablet (768px-480px) → 2-column grid
3. Mobile (<480px) → Single column, full-width cart
4. All breakpoints → Smooth transitions

## 🎨 Color Scheme

```css
Primary (Purple):   #6366f1
Secondary (Pink):   #ec4899
Success (Green):    #10b981
Warning (Orange):   #f59e0b
Dark:              #1f2937
Light Background:  #f9fafb
Text:              #374151
```

## 💻 Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with variables, flexbox, grid
- **Vanilla JavaScript**: No frameworks, pure JS
- **LocalStorage API**: Cart persistence
- **Responsive Design**: Mobile-first approach
- **CSS Transitions & Animations**: Smooth hover effects

## 📱 Browser Compatibility

✅ Chrome/Edge (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Internship Requirements Met

### ✅ Fixed Navigation Menu
- Position: fixed at top
- Visible on all sections
- Changes on scroll (background, shadow)
- Changes on hover (color, animations)

### ✅ Responsive Design
- Works on all devices
- Mobile-first approach
- Smooth breakpoint transitions
- Touch-friendly

### ✅ Interactive Elements
- Hover color changes throughout
- Smooth transitions (280ms cubic-bezier)
- Visual feedback on all interactions
- Professional animations

### ✅ Clean Design
- Modern color palette
- Consistent spacing
- Clear typography
- Professional layout

## 🔧 Customization Guide

### Change Colors
Edit CSS variables in `css/shop-styles.css`:
```css
:root {
  --primary: #6366f1;    /* Change primary color */
  --secondary: #ec4899;  /* Change secondary color */
  /* ... more variables */
}
```

### Add Products
Edit the `products` array in `js/shop.js`:
```javascript
const products = [
  {
    id: 13,
    name: 'Your Product',
    price: 99.99,
    category: 'electronics',
    image: 'your-image-url.jpg'
  },
  // ... add more
];
```

### Modify Hover Effects
Adjust transitions in `css/shop-styles.css`:
```css
.product-card {
  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🚀 Future Enhancements

- [ ] Product detail pages
- [ ] Checkout flow
- [ ] User authentication
- [ ] Search functionality
- [ ] Product reviews/ratings
- [ ] Wishlist feature
- [ ] Backend integration
- [ ] Payment gateway

## 📝 Notes

- All images are loaded from Unsplash for demo purposes
- Cart data is stored locally (no backend)
- Product data is hardcoded in JavaScript
- Ready for backend integration

## 👨‍💻 Development

Created as part of web development internship task demonstrating:
- Modern front-end development skills
- Responsive design principles
- Interactive UI/UX design
- Clean, maintainable code
- Professional project structure

---

**Project Status**: ✅ Complete and Production-Ready

**Last Updated**: November 7, 2025
