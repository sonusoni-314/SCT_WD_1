// E-Commerce Shop JavaScript
// Handles product display, filtering, cart management, and interactions

// Sample product data
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Designer Sunglasses',
    price: 129.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Leather Backpack',
    price: 89.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Coffee Maker',
    price: 149.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Indoor Plant Set',
    price: 39.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400&h=300&fit=crop'
  },
  {
    id: 7,
    name: 'Yoga Mat Premium',
    price: 49.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop'
  },
  {
    id: 8,
    name: 'Running Shoes',
    price: 119.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop'
  },
  {
    id: 9,
    name: 'Bluetooth Speaker',
    price: 59.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop'
  },
  {
    id: 10,
    name: 'Denim Jacket',
    price: 79.99,
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop'
  },
  {
    id: 11,
    name: 'Table Lamp',
    price: 44.99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop'
  },
  {
    id: 12,
    name: 'Fitness Tracker',
    price: 69.99,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop'
  }
];

// Shopping cart
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartToggle = document.getElementById('cart-toggle');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  setupEventListeners();
  loadCartFromStorage();
});

// Render products
function renderProducts(productsToRender) {
  productsGrid.innerHTML = '';
  
  productsToRender.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.style.animationDelay = `${index * 50}ms`;
    
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
    
    productsGrid.appendChild(productCard);
  });
  
  // Add event listeners to add-to-cart buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = parseInt(button.dataset.id);
      addToCart(productId);
    });
  });
}

// Filter products
function filterProducts(category) {
  if (category === 'all') {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
  }
}

// Add to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  updateCart();
  saveCartToStorage();
  showNotification('Added to cart!');
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
  saveCartToStorage();
}

// Update cart display
function updateCart() {
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  
  // Update cart items
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    totalPrice.textContent = '$0.00';
    return;
  }
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity}</div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}">×</button>
    </div>
  `).join('');
  
  // Calculate total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  totalPrice.textContent = `$${total.toFixed(2)}`;
  
  // Add event listeners to remove buttons
  document.querySelectorAll('.cart-item-remove').forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.dataset.id);
      removeFromCart(productId);
    });
  });
}

// Toggle cart sidebar
function toggleCart() {
  cartSidebar.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
}

// Setup event listeners
function setupEventListeners() {
  // Cart toggle
  cartToggle.addEventListener('click', toggleCart);
  closeCart.addEventListener('click', toggleCart);
  overlay.addEventListener('click', toggleCart);
  
  // Filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter products
      const category = button.dataset.category;
      filterProducts(category);
    });
  });
  
  // Close cart on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartSidebar.classList.contains('open')) {
      toggleCart();
    }
  });
}

// Local storage functions
function saveCartToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCart();
  }
}

// Notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 90px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 3000;
    animation: slideIn 300ms ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 300ms ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
