const WHATSAPP_NUMBER = '254747990254';

const PRODUCTS = {
  'mombasa-dress': {
    name: 'Mombasa Summer Dress',
    price: 'Ksh 3,500',
    img: 'https://picsum.photos/seed/mombasa-dress-nfh/600/450',
    desc: "A lightweight, breathable dress cut for Nairobi's warmer months, tailored locally with a flattering A-line fit. Available in three colourways."
  },
  'nairobi-blazer': {
    name: 'Nairobi Casual Blazer',
    price: 'Ksh 4,800',
    img: 'https://picsum.photos/seed/nairobi-blazer-nfh/600/450',
    desc: "A versatile blazer that moves easily from the office to evening plans, made from a mid-weight cotton blend with a tailored waist."
  },
  'rift-trench': {
    name: 'Rift Valley Trench Coat',
    price: 'Ksh 6,000',
    img: 'https://picsum.photos/seed/rift-trench-nfh/600/450',
    desc: "A structured trench built for Nairobi's rainy season, with a water-resistant outer layer, belt closure, and classic tailoring."
  },
  'karen-gown': {
    name: 'Karen Evening Gown',
    price: 'Ksh 8,500',
    img: 'https://picsum.photos/seed/karen-gown-nfh/600/450',
    desc: "A floor-length evening gown finished with hand-stitched detailing, made to order in your size with a two-week lead time."
  }
};

const BLOG_POSTS = {
  'trench-styling': {
    title: '5 Ways to Style a Trench Coat for Nairobi Weather',
    body: "Layer it over a simple tee and jeans for wet-season mornings, or belt it over a dress for evening events. In the dry season, wear it open over lighter fabrics as a structured layer rather than for warmth. A trench also works well thrown over gym wear for the school run, and pairs naturally with boots when the ground is muddy after rain."
  },
  'meet-tailors': {
    title: 'Behind the Seams: Meet Our Tailors',
    body: "Our workshop in South B is run by a small team of tailors, most of whom trained through informal apprenticeships before joining us. Each piece passes through at least two pairs of hands, cutting and stitching, before a final quality check. We work in small batches so fit issues get caught early rather than after delivery."
  },
  'fabric-care': {
    title: 'Caring for Locally Made Fabrics',
    body: "Hand wash or use a gentle cycle in cold water to protect stitching and colour. Air dry away from direct sun, since heat and UV exposure are the fastest way to fade locally dyed fabric. Store folded rather than on wire hangers for structured pieces like blazers and coats, to keep the shoulder shape intact."
  }
};

function trackNavClick(section) {
  if (typeof gtag === 'function') {
    gtag('event', 'nav_click', { event_category: 'navigation', event_label: section });
  }
}

function trackCareerApplyClick(roleId) {
  if (typeof gtag === 'function') {
    gtag('event', 'career_click', { event_category: 'careers', event_label: roleId });
  }
}

function trackCareerView(el, roleId) {
  if (el.open && typeof gtag === 'function') {
    gtag('event', 'career_view', { event_category: 'careers', event_label: roleId });
  }
}

function openProductModal(id) {
  const p = PRODUCTS[id];
  if (!p) return;
  document.getElementById('modal-product-title').textContent = p.name;
  document.getElementById('modal-product-price').textContent = p.price;
  document.getElementById('modal-product-desc').textContent = p.desc;
  document.getElementById('modal-product-img').src = p.img;
  document.getElementById('modal-product-img').alt = p.name;
  const waText = encodeURIComponent('Hi! I am interested in the ' + p.name + ' (' + p.price + ').');
  document.getElementById('modal-product-whatsapp').href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + waText;
  document.getElementById('product-modal').classList.add('open');

  const numericValue = parseInt(p.price.replace(/[^0-9]/g, ''), 10);
  if (typeof gtag === 'function') {
    gtag('event', 'view_item', { event_category: 'product', event_label: p.name, value: numericValue });
  }
}

function closeProductModal() {
  document.getElementById('product-modal').classList.remove('open');
}

function openBlogModal(id) {
  const post = BLOG_POSTS[id];
  if (!post) return;
  document.getElementById('modal-blog-title').textContent = post.title;
  document.getElementById('modal-blog-body').textContent = post.body;
  document.getElementById('blog-modal').classList.add('open');
  if (typeof gtag === 'function') {
    gtag('event', 'blog_click', { event_category: 'content', event_label: id });
  }
}

function closeBlogModal() {
  document.getElementById('blog-modal').classList.remove('open');
}

function filterCategory(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.product-card').forEach(card => {
    const show = category === 'all' || card.getAttribute('data-category') === category;
    card.style.display = show ? '' : 'none';
  });

  if (typeof gtag === 'function') {
    gtag('event', 'filter_select', { event_category: 'engagement', event_label: category });
  }
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  if (typeof gtag === 'function') {
    gtag('event', 'sign_up', { event_category: 'conversion', event_label: 'newsletter' });
  }
  alert('Thanks for subscribing! (demo form, no email is actually sent)');
  document.getElementById('newsletter-email').value = '';
  return false;
}

document.addEventListener('click', function (e) {
  document.querySelectorAll('.modal-overlay.open').forEach(function (overlay) {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// Scroll depth tracking at 25/50/75/100 percent milestones, per page
(function () {
  const milestones = [25, 50, 75, 100];
  const reached = new Set();

  function checkScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const percent = Math.round((scrollTop / docHeight) * 100);

    milestones.forEach(m => {
      if (percent >= m && !reached.has(m) && typeof gtag === 'function') {
        reached.add(m);
        gtag('event', 'scroll_depth', { event_category: 'engagement', event_label: m + '%' });
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
})();

// Time-on-page milestone at 30 seconds, per page
setTimeout(function () {
  if (typeof gtag === 'function') {
    gtag('event', 'time_on_page', { event_category: 'engagement', event_label: '30_seconds' });
  }
}, 30000);
