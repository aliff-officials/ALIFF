// ==================== DATA ====================
const categories = [
  { name: 'Clothing', subcategories: ['Dresses', 'Sweaters', 'Pants', 'Coat & Jackets'] },
  { name: 'Shoes', subcategories: ['Sandals', 'Boots', 'Sneakers', 'Heels'] },
  { name: 'Jewelry', subcategories: ['Rings', 'Necklaces', 'Earrings', 'Bracelets'] },
  { name: 'Handbags', subcategories: ['Crossbody', 'Totes', 'Mini Bags', 'Clutches'] }
];

const products = [
  //DRESSES
{ id: 1.1, name: "ANRABESS Womens Summer Dress", category: "Clothing", subcategory: "Dresses", price: 25.99,
image: "https://m.media-amazon.com/images/I/71Q9ohCPN6L._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4aFmQaL" },
{ id: "1.2", name: "ZEAGOO Summer Dresses for Women", category: "Clothing", subcategory: "Dresses", price: 16.99,
image: "https://m.media-amazon.com/images/I/71Kp0LvnIiL._AC_SX569_.jpg", affiliateUrl: "https://amzn.to/4rGpO4X" },
{ id: "1.3", name: "BTFBM Women’s Summer Dresses", category: "Clothing", subcategory: "Dresses", price: 19.99,
image: "https://m.media-amazon.com/images/I/71XcukmMx0L._AC_SX569_.jpg", affiliateUrl: "https://amzn.to/4l2mGhe" },
{ id: "1.4", name: "WIHOLL Summer Dresses for Women", category: "Clothing", subcategory: "Dresses", price: 14.99,
image: "https://m.media-amazon.com/images/I/815A5zIW1DL._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4r1B0bc" },
{ id: "1.5", name: "GRECERELLE Women Casual Round Neck Loose Split", category: "Clothing", subcategory: "Dresses", price: 28.99,image: "https://m.media-amazon.com/images/I/61ceyasLBOL._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4b0yxId" },

//SWEATERS
{ id: "2.1", name: "Trendy Queen Cropped Cardigan Sweaters for Women", category: "Clothing", subcategory: "Sweaters", price: 24.99,image: "https://m.media-amazon.com/images/I/71EMLE2FjpL._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4simzk1" },
{ id: "2.2", name: "Trendy Queen Women's Oversized Cable Sweaters", category: "Clothing", subcategory: "Sweaters", price: 24.99,image: "https://m.media-amazon.com/images/I/71l9N09tGUL._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4cNRJeA" },
{ id: "2.3", name: "Women's Long Sleeve Knit Shrugs Sweater", category: "Clothing", subcategory: "Sweaters", price: 14.99,image: "https://m.media-amazon.com/images/I/712kTHgqJvL._AC_SX679_.jpg", affiliateUrl: "https://amzn.to/4r61Dvr" },
{ id: "2.4", name: "Women's Lightweight Wool Short Sleeve Sweater", category: "Clothing", subcategory: "Sweaters", price: 22.99,image: "https://m.media-amazon.com/images/I/81OlQsvzDuL._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4cRtMD1" },
{ id: "2.5", name: "Women's Oversized Batwing Sweaters", category: "Clothing", subcategory: "Sweaters", price: 19.99,image: "https://m.media-amazon.com/images/I/61CvT1de7IL._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4rHGV6x" },

//PANTS
{ id: "3.1", name: "Sampeel Wide Leg Palazzo Pants", category: "Clothing", subcategory: "Pants", price: 17.99,
image: "https://m.media-amazon.com/images/I/71UObPvtX+L._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4l0pZ8F" },
{ id: "3.2", name: "Trendy Queen Boho Wide Leg Pants", category: "Clothing", subcategory: "Pants", price: 24.99,
image: "https://m.media-amazon.com/images/I/61h2C8UDpML._AC_SY879_.jpg", affiliateUrl: "https://amzn.to/4cUeD3T" },
{ id: "3.3", name: "Womens Work Casual Wide Leg Pants", category: "Clothing", subcategory: "Pants", price: 14.99,
image: "https://m.media-amazon.com/images/I/716xJMU1g6L._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4l2g42u" },
{ id: "3.4", name: "Women's Straight Wide Leg Pants", category: "Clothing", subcategory: "Pants", price: 17.99,
image: "https://m.media-amazon.com/images/I/51yiSRD3+FL._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4ce1Sky" },
{ id: "3.5", name: "Women's Leopard Print Wide Pants", category: "Clothing", subcategory: "Pants", price: 30.99,
image: "https://m.media-amazon.com/images/I/71wRgfCNQML._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4b1Cqwx" },

//COAT & JACKETS
{ id: "4.1", name: "Hagon PRO 5-Pack Rain Ponchos", category: "Clothing", subcategory: "Coat & Jackets", price: 9.99,
image: "https://m.media-amazon.com/images/I/712kxoa9k8L._AC_SY879_.jpg", affiliateUrl: "https://amzn.to/4cZ8eo2" },
{ id: "4.2", name: "Amazon Essentials Packable Puffer Jacket", category: "Clothing", subcategory: "Coat & Jackets", price: 23.99,image: "https://m.media-amazon.com/images/I/71COVlkiXGL._AC_SX679_.jpg", affiliateUrl: "https://amzn.to/4aYrhwm" },
{ id: "4.3", name: "Vetinee Oversized Frayed Hem Shacket", category: "Clothing", subcategory: "Coat & Jackets", price: 30.99,
image: "https://m.media-amazon.com/images/I/81kgYk-DgyL._AC_SX569_.jpg", affiliateUrl: "https://amzn.to/3OCy3As" },
{ id: "4.4", name: "Luvamia Fitted Button Down Denim Jacket", category: "Clothing", subcategory: "Coat & Jackets", price: 33.99,image: "https://m.media-amazon.com/images/I/61NvBDYqlJL._AC_SY741_.jpg", affiliateUrl: "https://amzn.to/4l3RQVw" },
{ id: "4.5", name: "Columbia Benton Springs Full Zip Jacket", category: "Clothing", subcategory: "Coat & Jackets", price: 45.99,image: "https://m.media-amazon.com/images/I/71WpOyoJCyS._AC_SX679_.jpg", affiliateUrl: "https://amzn.to/4kZawpj" },


  { id: "5.1", name: "Amazon Essentials Women's Thong Sandal", category: "Shoes", subcategory: "Sandals", price: 14.99,
image: "https://m.media-amazon.com/images/I/61zim4qDNNL._AC_SX679_.jpg", affiliateUrl: "https://amzn.to/3OFfJqi" },
{ id: "5.2", name: "Sandals Women Dressy Flats", category: "Shoes", subcategory: "Sandals", price: 35.99,
image: "https://m.media-amazon.com/images/I/81qAyvfeoCL._AC_SY695_.jpg", affiliateUrl: "https://amzn.to/4rOAO0i" },
{ id: "5.3", name: "Flip Flops for Women with Arch Support", category: "Shoes", subcategory: "Sandals", price: 13.99,
image: "https://m.media-amazon.com/images/I/710PdcSAm6L._AC_SX695_.jpg", affiliateUrl: "https://amzn.to/4bdZ5H4" },
{ id: "5.4", name: "Womens Arch Support Flip Flops", category: "Shoes", subcategory: "Sandals", price: 15.99,
image: "https://m.media-amazon.com/images/I/71FLg8v7ZyL._AC_SX695_.jpg", affiliateUrl: "https://amzn.to/4l6eInu" },
{ id: "5.5", name: "Women's Ankle Strap Flat Sandals", category: "Shoes", subcategory: "Sandals", price: 29.99,
image: "https://m.media-amazon.com/images/I/618fc8WCkmL._AC_SY695_.jpg", affiliateUrl: "https://amzn.to/4bdZfhE" },


  // { id: 6, name: 'Leather Ankle Boots', category: 'Shoes', subcategory: 'Boots', price: 245, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop', affiliateUrl: '#' },
  // { id: 7, name: 'White Leather Sneakers', category: 'Shoes', subcategory: 'Sneakers', price: 195, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop', affiliateUrl: '#' },
  // { id: 8, name: 'Pointed Toe Heels', category: 'Shoes', subcategory: 'Heels', price: 275, image: 'https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?w=600&h=800&fit=crop', affiliateUrl: '#' },
  // { id: 9, name: '14k Gold Hoop Earrings', category: 'Jewelry', subcategory: 'Earrings', price: 320, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop', affiliateUrl: '#' },
  // { id: 10, name: 'Pearl Pendant Necklace', category: 'Jewelry', subcategory: 'Necklaces', price: 245, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop', affiliateUrl: '#' },
  // { id: 11, name: 'Diamond Stacking Rings', category: 'Jewelry', subcategory: 'Rings', price: 450, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop', affiliateUrl: '#' },
  // { id: 12, name: 'Gold Tennis Bracelet', category: 'Jewelry', subcategory: 'Bracelets', price: 380, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop', affiliateUrl: '#' },
  // { id: 13, name: 'Structured Leather Tote', category: 'Handbags', subcategory: 'Totes', price: 450, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop', affiliateUrl: '#' },
  // { id: 14, name: 'Crossbody Bag', category: 'Handbags', subcategory: 'Crossbody', price: 225, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop', affiliateUrl: '#' },
  // { id: 15, name: 'Mini Leather Bag', category: 'Handbags', subcategory: 'Mini Bags', price: 185, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop', affiliateUrl: '#' },
  // { id: 16, name: 'Evening Clutch', category: 'Handbags', subcategory: 'Clutches', price: 165, image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&h=800&fit=crop', affiliateUrl: '#' }
];

// ==================== STATE ====================
let activeCategory = 'All';
let activeSubcategory = 'All';
let cart = [];

// ==================== DOM ELEMENTS ====================
const categoryFilters = document.getElementById('categoryFilters');
const subFilters = document.getElementById('subFilters');
const productsGrid = document.getElementById('productsGrid');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuContent = document.getElementById('mobileMenuContent');
const menuToggle = document.getElementById('menuToggle');
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const exploreBtn = document.getElementById('exploreBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchBtn = document.querySelector('.search-btn');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterMessage = document.getElementById('newsletterMessage');
const newsletterBtn = document.getElementById('newsletterBtn');

// ==================== INITIALIZE ====================
function init() {
  lucide.createIcons();
  buildMobileMenu();
  renderProducts();
  setupEventListeners();
  setupSearch();
  setupCart();
  setupNewsletter();
}

// ==================== NEWSLETTER FUNCTIONALITY ====================
function setupNewsletter() {
  if (!newsletterForm || !newsletterEmail || !newsletterMessage) return;

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = newsletterEmail.value.trim();

    // Validate email
    if (!email) {
      showNewsletterMessage('Please enter your email address.', 'error');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNewsletterMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Show loading state
    const originalBtnText = newsletterBtn.textContent;
    newsletterBtn.textContent = 'Joining...';
    newsletterBtn.disabled = true;

    // Simulate API call (in production, replace with actual API)
    setTimeout(() => {
      // Success
      showNewsletterMessage('Welcome to ALIFF! You\'re now subscribed to our newsletter.', 'success');
      newsletterEmail.value = '';
      newsletterBtn.textContent = 'Joined!';

      // Reset button after 2 seconds
      setTimeout(() => {
        newsletterBtn.textContent = originalBtnText;
        newsletterBtn.disabled = false;
      }, 2000);
    }, 1000);
  });
}

function showNewsletterMessage(message, type) {
  if (!newsletterMessage) return;

  newsletterMessage.textContent = message;
  newsletterMessage.className = `newsletter-message ${type}`;
  newsletterMessage.style.display = 'block';

  // Auto-hide after 5 seconds
  setTimeout(() => {
    newsletterMessage.style.display = 'none';
  }, 5000);
}

// ==================== CART FUNCTIONALITY ====================
function setupCart() {
  // Open cart
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      cartOverlay.classList.add('open');
    });
  }

  // Close cart
  if (cartClose) {
    cartClose.addEventListener('click', closeCart);
  }

  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) {
        closeCart();
      }
    });
  }

  // Checkout button
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
      }
      alert('Thank you for your purchase!');
      cart = [];
      updateCartUI();
      closeCart();
    });
  }
}

function closeCart() {
  if (cartOverlay) {
    cartOverlay.classList.remove('open');
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      subcategory: product.subcategory,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) {
    cartCount.textContent = totalItems;
  }

  // Update cart total
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (cartTotal) {
    cartTotal.textContent = `$${totalPrice}`;
  }

  // Render cart items
  if (cartItems) {
    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">
            <i data-lucide="shopping-bag" width="48" height="48"></i>
          </div>
          <p class="cart-empty-text">Your bag is empty</p>
          <button class="cart-empty-btn" onclick="closeCart(); document.getElementById('shop').scrollIntoView({behavior: 'smooth'})">
            Start Shopping
            <i data-lucide="arrow-right" width="16" height="16"></i>
          </button>
        </div>
      `;
    } else {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-info">
            <h3 class="cart-item-name">${item.name}</h3>
            <p class="cart-item-category">${item.category} · ${item.subcategory}</p>
            <span class="cart-item-price">$${item.price} × ${item.quantity}</span>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">
            <i data-lucide="trash-2" width="18" height="18"></i>
          </button>
        </div>
      `).join('');
    }
    lucide.createIcons();
  }
}

// ==================== SEARCH FUNCTIONALITY ====================
function setupSearch() {
  if (!searchBtn || !searchOverlay) return;

  // Open search overlay
  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    searchInput.focus();
  });

  // Close search overlay
  if (searchClose) {
    searchClose.addEventListener('click', closeSearch);
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        closeSearch();
      }
    });
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      performSearch(query);
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('open')) {
      closeSearch();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchOverlay) {
        searchOverlay.classList.add('open');
        searchInput.focus();
      }
    }
  });
}

function closeSearch() {
  if (searchOverlay) searchOverlay.classList.remove('open');
  if (searchInput) searchInput.value = '';
  if (searchResults) searchResults.innerHTML = '';
}

function performSearch(query) {
  if (!query || !searchResults) {
    if (searchResults) searchResults.innerHTML = '';
    return;
  }

  const results = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.subcategory.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="search-no-results">
        <p>No products found for "${query}"</p>
      </div>
    `;
    return;
  }

  searchResults.innerHTML = results.map(product => `
    <div class="search-result-item" onclick="selectSearchProduct('${product.category}', '${product.subcategory}')">
      <img src="${product.image}" alt="${product.name}" class="search-result-image">
      <div class="search-result-info">
        <p class="search-result-name">${product.name}</p>
        <p class="search-result-category">${product.category} · ${product.subcategory}</p>
      </div>
      <span class="search-result-price">$${product.price}</span>
    </div>
  `).join('');
}

function selectSearchProduct(category, subcategory) {
  activeCategory = category;
  activeSubcategory = subcategory;
  updateCategoryButtons();
  updateSubFilters();
  renderProducts();
  closeSearch();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

// ==================== MOBILE MENU ====================
function buildMobileMenu() {
  let html = '';
  categories.forEach((cat) => {
    html += `
      <div class="mobile-category">
        <button class="mobile-category-header" data-category="${cat.name}">
          <span>${cat.name}</span>
          <i data-lucide="chevron-down" width="18" height="18"></i>
        </button>
        <div class="mobile-subcategories" data-category="${cat.name}">
          <a href="#" data-category="${cat.name}" data-subcategory="All">All ${cat.name}</a>
          ${cat.subcategories.map(sub => `<a href="#" data-category="${cat.name}" data-subcategory="${sub}">${sub}</a>`).join('')}
        </div>
      </div>
    `;
  });
  mobileMenuContent.innerHTML = html;
  lucide.createIcons();

  // Add click handlers for category headers
  document.querySelectorAll('.mobile-category-header').forEach(header => {
    header.addEventListener('click', () => {
      const category = header.dataset.category;
      const subcategories = document.querySelector(`.mobile-subcategories[data-category="${category}"]`);
      if (subcategories) {
        header.classList.toggle('active');
        subcategories.classList.toggle('show');
      }
    });
  });

  // Add click handlers for subcategory links
  document.querySelectorAll('.mobile-subcategories a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.dataset.category;
      const subcategory = link.dataset.subcategory;

      // Set filters
      activeCategory = category;
      activeSubcategory = subcategory;

      // Update UI
      updateCategoryButtons();
      updateSubFilters();
      renderProducts();

      // Close mobile menu
      mobileMenu.classList.remove('open');
      updateMenuIcon();

      // Scroll to shop
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function updateMenuIcon() {
  const icon = menuToggle.querySelector('i');
  if (icon) {
    if (mobileMenu.classList.contains('open')) {
      icon.setAttribute('data-lucide', 'x');
    } else {
      icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
  }
}

// ==================== PRODUCTS ====================
function renderProducts() {
  const filtered = products.filter(p => {
    const categoryMatch = activeCategory === 'All' || p.category === activeCategory;
    const subcategoryMatch = activeSubcategory === 'All' || p.subcategory === activeSubcategory;
    return categoryMatch && subcategoryMatch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        <p class="empty-state-text">No items found.</p>
        <button class="clear-filters-btn" onclick="clearFilters()">Clear filters</button>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map((product, index) => `
    <div class="product-card" style="animation-delay: ${index * 0.05}s">
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
        <div class="product-overlay"></div>
        <div class="product-actions">
          <button class="shop-btn" onclick="shopProduct('${product.affiliateUrl}')">
            Shop Now
            <i data-lucide="external-link" width="14" height="14"></i>
          </button>
          <button class="add-to-cart-btn" onclick="handleAddToCart(${product.id}, this)">
            Add to Bag
            <i data-lucide="shopping-bag" width="14" height="14"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.subcategory}</span>
        <h3 class="product-name">${product.name}</h3>
        <span class="product-price">$${product.price}</span>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function handleAddToCart(productId, button) {
  addToCart(productId);

  // Visual feedback
  const originalText = button.innerHTML;
  button.classList.add('added');
  button.innerHTML = `
    Added!
    <i data-lucide="check" width="14" height="14"></i>
  `;
  lucide.createIcons();

  setTimeout(() => {
    button.classList.remove('added');
    button.innerHTML = originalText;
    lucide.createIcons();
  }, 1500);
}

function shopProduct(url) {
  if (url && url !== '#') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

window.clearFilters = function () {
  activeCategory = 'All';
  activeSubcategory = 'All';
  updateCategoryButtons();
  updateSubFilters();
  renderProducts();
};

// ==================== FILTERS ====================
function updateCategoryButtons() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === activeCategory);
  });
}

function updateSubFilters() {
  if (activeCategory === 'All') {
    subFilters.innerHTML = '';
    return;
  }

  const category = categories.find(c => c.name === activeCategory);
  if (!category) return;

  let html = `
    <button class="sub-filter-btn ${activeSubcategory === 'All' ? 'active' : ''}" data-subcategory="All">
      All ${activeCategory}
    </button>
  `;

  category.subcategories.forEach(sub => {
    html += `
      <button class="sub-filter-btn ${activeSubcategory === sub ? 'active' : ''}" data-subcategory="${sub}">
        ${sub}
      </button>
    `;
  });

  subFilters.innerHTML = html;

  // Add click handlers
  document.querySelectorAll('.sub-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSubcategory = btn.dataset.subcategory;
      updateSubFilters();
      renderProducts();
    });
  });
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  // Category filter buttons
  categoryFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    activeCategory = btn.dataset.category;
    activeSubcategory = 'All';

    updateCategoryButtons();
    updateSubFilters();
    renderProducts();
  });

  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    updateMenuIcon();
  });

  // Explore button
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Desktop nav links
  document.querySelectorAll('.desktop-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.dataset.category;
      if (category) {
        activeCategory = category;
        activeSubcategory = 'All';
        updateCategoryButtons();
        updateSubFilters();
        renderProducts();
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Logo click - reload page
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      location.reload();
    });
  }

  // Footer filter links
  document.querySelectorAll('.footer-filter-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.dataset.category;
      if (category) {
        activeCategory = category;
        activeSubcategory = 'All';
        updateCategoryButtons();
        updateSubFilters();
        renderProducts();
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);


