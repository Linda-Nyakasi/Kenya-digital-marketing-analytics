const WHATSAPP_NUMBER = '254747990254';

const PRODUCTS = {
  'mombasa-dress': {
    name: 'Mombasa Summer Dress',
    price: 'Ksh 3,500',
    category: 'dresses',
    thumb: 'https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=500&h=375&fit=crop',
    img: 'https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=1200',
    desc: "A lightweight, breathable dress cut for Nairobi's warmer months, tailored locally with a flattering A-line fit. Available in three colourways."
  },
  'nairobi-blazer': {
    name: 'Nairobi Casual Blazer',
    price: 'Ksh 4,800',
    category: 'outerwear',
    thumb: 'https://images.pexels.com/photos/7959652/pexels-photo-7959652.jpeg?auto=compress&cs=tinysrgb&w=500&h=375&fit=crop',
    img: 'https://images.pexels.com/photos/7959652/pexels-photo-7959652.jpeg?auto=compress&cs=tinysrgb&w=1200',
    desc: "A versatile blazer that moves easily from the office to evening plans, made from a mid-weight cotton blend with a tailored waist."
  },
  'rift-trench': {
    name: 'Rift Valley Trench Coat',
    price: 'Ksh 6,000',
    category: 'outerwear',
    thumb: 'https://images.pexels.com/photos/9968540/pexels-photo-9968540.jpeg?auto=compress&cs=tinysrgb&w=500&h=375&fit=crop',
    img: 'https://images.pexels.com/photos/9968540/pexels-photo-9968540.jpeg?auto=compress&cs=tinysrgb&w=1200',
    desc: "A structured trench built for Nairobi's rainy season, with a water-resistant outer layer, belt closure, and classic tailoring."
  },
  'karen-gown': {
    name: 'Karen Evening Gown',
    price: 'Ksh 8,500',
    category: 'dresses',
    thumb: 'https://images.pexels.com/photos/26998033/pexels-photo-26998033.jpeg?auto=compress&cs=tinysrgb&w=500&h=375&fit=crop',
    img: 'https://images.pexels.com/photos/26998033/pexels-photo-26998033.jpeg?auto=compress&cs=tinysrgb&w=1200',
    desc: "A floor-length evening gown finished with hand-stitched detailing, made to order in your size with a two-week lead time."
  },
  'ngong-denim': {
    name: 'Ngong Denim Jacket',
    price: 'Ksh 4,200',
    category: 'casual',
    thumb: 'https://images.pexels.com/photos/11653295/pexels-photo-11653295.jpeg?auto=compress&cs=tinysrgb&w=500&h=375&fit=crop',
    img: 'https://images.pexels.com/photos/11653295/pexels-photo-11653295.jpeg?auto=compress&cs=tinysrgb&w=1200',
    desc: "A classic denim jacket for everyday wear, finished with a lightly distressed wash and sturdy topstitching that holds up to daily use."
  },
  'karura-sweater': {
    name: 'Karura Knit Sweater',
    price: 'Ksh 3,200',
    category: 'casual',
    thumb: 'https://images.pexels.com/photos/5488459/pexels-photo-5488459.jpeg?auto=compress&cs=tinysrgb&w=500&h=375&fit=crop',
    img: 'https://images.pexels.com/photos/5488459/pexels-photo-5488459.jpeg?auto=compress&cs=tinysrgb&w=1200',
    desc: "A soft knit sweater for Nairobi's cooler mornings and evenings, relaxed fit, easy to layer over a shirt or under a jacket."
  }
};

const BLOG_POSTS = {
  'trench-styling': {
    title: '5 Ways to Style a Trench Coat for Nairobi Weather',
    excerpt: 'A short guide to layering trench coats through the rainy and dry seasons.',
    body: "Layer it over a simple tee and jeans for wet-season mornings, or belt it over a dress for evening events. In the dry season, wear it open over lighter fabrics as a structured layer rather than for warmth. A trench also works well thrown over gym wear for the school run, and pairs naturally with boots when the ground is muddy after rain."
  },
  'meet-tailors': {
    title: 'Behind the Seams: Meet Our Tailors',
    excerpt: 'Get to know the team hand-finishing every piece in our South B workshop.',
    body: "Our workshop in South B is run by a small team of tailors, most of whom trained through informal apprenticeships before joining us. Each piece passes through at least two pairs of hands, cutting and stitching, before a final quality check. We work in small batches so fit issues get caught early rather than after delivery."
  },
  'fabric-care': {
    title: 'Caring for Locally Made Fabrics',
    excerpt: 'Simple washing and storage tips to keep your pieces looking new for longer.',
    body: "Hand wash or use a gentle cycle in cold water to protect stitching and colour. Air dry away from direct sun, since heat and UV exposure are the fastest way to fade locally dyed fabric. Store folded rather than on wire hangers for structured pieces like blazers and coats, to keep the shoulder shape intact."
  }
};

const CAREERS = {
  'tailor-seamstress': {
    title: 'Tailor / Seamstress',
    meta: 'Nairobi (South B, on-site) &middot; Full-time',
    location: 'South B workshop, Nairobi. This is an on-site role, not remote.',
    salary: 'Ksh 25,000 to 35,000 per month, based on experience, reviewed after a 3-month probation period.',
    minReq: ['At least 2 years of hands-on tailoring experience', 'Comfortable operating industrial sewing machines', 'Basic pattern-reading ability'],
    desiredReq: ['Experience with womenswear tailoring specifically', 'Familiarity with alterations and custom fittings', 'A strong eye for finishing detail'],
    success: ['Garments consistently pass quality check on first review', 'Turnaround time per piece stays within workshop targets', 'Client alteration requests drop over time as fit accuracy improves at first cut'],
    culture: "You'll join a small team with direct mentorship from senior tailors, and a real path to move into pattern-making as the brand grows.",
    applyText: 'Tailor%20/%20Seamstress'
  },
  'delivery-rider': {
    title: 'Delivery Rider',
    meta: 'Nairobi &amp; surrounding areas &middot; Part-time',
    location: "Based out of the South B workshop, covering Nairobi and nearby areas.",
    salary: 'Ksh 800 to 1,200 per delivery day, plus a fuel allowance, paid weekly.',
    minReq: ['Valid motorbike license', 'Own motorbike in good working condition', 'Smartphone for order coordination via WhatsApp'],
    desiredReq: ["Familiarity with Nairobi's road network and traffic patterns", 'Prior delivery or courier experience'],
    success: ['On-time delivery rate above 95 percent', 'Low breakage or damage incidents', 'Positive customer feedback on handling of orders'],
    culture: 'Flexible scheduling around your availability, direct coordination with the workshop over WhatsApp, and the option to move to full-time as order volume grows.',
    applyText: 'Delivery%20Rider'
  }
};

function trackNavClick(section) {
  if (typeof gtag === 'function') {
    gtag('event', 'nav_click', { event_category: 'navigation', event_label: section });
  }
}

/* ---------- Products: list <-> detail ---------- */
function showProductDetail(id) {
  const p = PRODUCTS[id];
  if (!p) return;
  document.getElementById('product-list-view').style.display = 'none';
  const detail = document.getElementById('product-detail-view');
  detail.style.display = 'block';
  document.getElementById('detail-product-img').src = p.img;
  document.getElementById('detail-product-img').alt = p.name;
  document.getElementById('detail-product-title').textContent = p.name;
  document.getElementById('detail-product-price').textContent = p.price;
  document.getElementById('detail-product-desc').textContent = p.desc;
  const waText = encodeURIComponent('Hi! I am interested in the ' + p.name + ' (' + p.price + ').');
  document.getElementById('detail-product-whatsapp').href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + waText;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const numericValue = parseInt(p.price.replace(/[^0-9]/g, ''), 10);
  if (typeof gtag === 'function') {
    gtag('event', 'view_item', { event_category: 'products', event_label: p.name, value: numericValue });
  }
}

function backToProducts() {
  document.getElementById('product-detail-view').style.display = 'none';
  document.getElementById('product-list-view').style.display = 'block';
  if (typeof gtag === 'function') {
    gtag('event', 'back_click', { event_category: 'navigation', event_label: 'products' });
  }
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

/* ---------- Blog: list <-> detail ---------- */
function showBlogDetail(id) {
  const post = BLOG_POSTS[id];
  if (!post) return;
  document.getElementById('blog-list-view').style.display = 'none';
  document.getElementById('blog-detail-view').style.display = 'block';
  document.getElementById('detail-blog-title').textContent = post.title;
  document.getElementById('detail-blog-body').textContent = post.body;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (typeof gtag === 'function') {
    gtag('event', 'blog_click', { event_category: 'blog', event_label: id });
  }
}

function backToBlog() {
  document.getElementById('blog-detail-view').style.display = 'none';
  document.getElementById('blog-list-view').style.display = 'block';
  if (typeof gtag === 'function') {
    gtag('event', 'back_click', { event_category: 'navigation', event_label: 'blog' });
  }
}

/* ---------- Careers: list <-> detail ---------- */
function buildListHtml(items) {
  return items.map(i => '<li>' + i + '</li>').join('');
}

function showCareerDetail(id) {
  const role = CAREERS[id];
  if (!role) return;
  document.getElementById('careers-list-view').style.display = 'none';
  document.getElementById('careers-detail-view').style.display = 'block';

  document.getElementById('detail-career-title').textContent = role.title;
  document.getElementById('detail-career-meta').innerHTML = role.meta;
  document.getElementById('detail-career-location').textContent = role.location;
  document.getElementById('detail-career-salary').textContent = role.salary;
  document.getElementById('detail-career-minreq').innerHTML = buildListHtml(role.minReq);
  document.getElementById('detail-career-desiredreq').innerHTML = buildListHtml(role.desiredReq);
  document.getElementById('detail-career-success').innerHTML = buildListHtml(role.success);
  document.getElementById('detail-career-culture').textContent = role.culture;
  document.getElementById('detail-career-apply').href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=Hi!%20I%20am%20inquiring%20about%20the%20' + role.applyText + '%20position.';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (typeof gtag === 'function') {
    gtag('event', 'career_view', { event_category: 'careers', event_label: id });
  }
}

function backToCareers() {
  document.getElementById('careers-detail-view').style.display = 'none';
  document.getElementById('careers-list-view').style.display = 'block';
  if (typeof gtag === 'function') {
    gtag('event', 'back_click', { event_category: 'navigation', event_label: 'careers' });
  }
}

function trackCareerApplyClick(roleId) {
  if (typeof gtag === 'function') {
    gtag('event', 'career_click', { event_category: 'careers', event_label: roleId });
  }
}

/* ---------- Newsletter ---------- */
function handleNewsletterSubmit(event) {
  event.preventDefault();
  if (typeof gtag === 'function') {
    gtag('event', 'sign_up', { event_category: 'conversion', event_label: 'newsletter' });
  }
  alert('Thanks for subscribing! (demo form, no email is actually sent)');
  document.getElementById('newsletter-email').value = '';
  return false;
}

/* ---------- Scroll depth tracking, per page ---------- */
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

/* ---------- Time-on-page milestone, per page ---------- */
setTimeout(function () {
  if (typeof gtag === 'function') {
    gtag('event', 'time_on_page', { event_category: 'engagement', event_label: '30_seconds' });
  }
}, 30000);
