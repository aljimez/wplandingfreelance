/**
 * WPDev Landing Page - JavaScript Optimizado CRO
 * Gestión de internacionalización, animaciones y formularios
 */

// ========================================
// DATOS DE TRADUCCIÓN (ACTUALIZADO)
// ========================================
const translations = {
    es: {
        'meta.title': 'Deja de perder clientes por una web lenta | WordPress Freelance',
        'meta.description': 'Convierto tu WordPress en máquina de generar leads. Diseño que vende, velocidad que posiciona. Presupuesto fijo en 24h.',
        'og.title': 'Deja de perder clientes por una web lenta | WordPress Freelance',
        'og.description': 'Web WordPress que genera consultas mientras duermes. Especializado en negocios que necesitan resultados.',
        'hero.badge': '💼 WordPress Developer Freelance',
        'hero.title': 'Deja de perder clientes por una web <span class="highlight">lenta y desactualizada</span>',
        'hero.subtitle': 'Convierto tu WordPress en una máquina de generar leads: <strong>diseño que vende, velocidad que posiciona</strong> y un proceso donde tú no tocas código. Especializado en negocios que necesitan resultados, no solo "una web bonita".',
        'hero.cta': 'Ver si encajo con tu proyecto →',
        'hero.cta.secondary': 'O mira cómo trabajo primero',
        'hero.note': 'Solo 2 proyectos al mes',
        'services.badge': 'Soluciones',
        'services.title': '¿Qué necesitas resolver?',
        'services.web.title': 'Web que genera consultas',
        'services.web.desc': 'Web corporativa que trae clientes mientras duermes. Optimizada para móvil desde el minuto 1 porque el 70% de tu tráfico vendrá del móvil.',
        'services.design.title': 'Diseño que convierte',
        'services.design.desc': 'Diseño que guía al visitante a contactarte, no a admirar fotos. Cada botón, color y espacio pensado para convertir visitantes en clientes.',
        'services.seo.title': 'Velocidad = posicionamiento',
        'services.seo.desc': 'Google te encontrará por las palabras que buscan tus clientes. Velocidad de carga <2s y estructura técnica que mejora tu posicionamiento orgánico.',
        'services.maintenance.title': 'Tú descansas, yo vigilo',
        'services.maintenance.desc': 'Actualizaciones, copias de seguridad y soporte técnico gestionado por mí. Tú solo recibes un email mensual: "Todo funciona perfecto".',
        'process.badge': 'Cómo trabajo',
        'process.title': 'De tu idea a web funcionando en 2 semanas',
        'process.step1.title': 'Diagnóstico gratuito (15 min)',
        'process.step1.desc': 'Hablamos de tu negocio, no de tecnología. Identifico qué necesitas realmente y si encajamos.',
        'process.step2.title': 'Propuesta clara en 24h',
        'process.step2.desc': 'Recibes presupuesto fijo, calendario de entregas y ejemplos de diseño. Sin sorpresas ni "ya veremos".',
        'process.step3.title': 'Desarrollo con feedback',
        'process.step3.desc': 'Revisión cada 3 días. Tú ves avances reales, no esperas 2 meses a ver algo.',
        'process.step4.title': 'Lanzamiento + garantía',
        'process.step4.desc': 'Web online, formación básica y 30 días de ajustes incluidos. Duermo tranquilo si tú duermes tranquilo.',
        'process.guarantee': '✓ Si no encajamos en la llamada inicial, te recomiendo a alguien mejor. Sin coste.',
        'why.badge': 'Por qué yo',
        'why.title': 'Especializado en webs que venden, no en webs que "quedan bonitas"',
        'why.results.title': 'Mejor conversión, no solo tráfico',
        'why.results.desc': 'Una web rápida sin estrategia es un coche rápido sin rumbo. Diseño cada página para que el visitante haga clic en "contactar", no solo para que te admiren.',
        'why.speed.title': 'Velocidad que Google premia',
        'why.speed.desc': '90+ en Core Web Vitals garantizado. Tu web carga en menos de 2 segundos o no cobro el proyecto.',
        'why.communication.title': 'Hablas conmigo, no con un "equipo"',
        'why.communication.desc': 'Soy desarrollador, no agencia. WhatsApp directo, respuesta en horas, cero burocracia. Si tengo dudas te pregunto, no asumo.',
        'stats.projects': 'Webs generando leads',
        'stats.satisfaction': 'Proyectos abandonados',
        'stats.response': 'Tiempo medio de respuesta',
        'contact.badge': 'Primer paso',
        'contact.title': 'Hablemos 15 minutos sin compromiso',
        'contact.desc': 'Cuéntame qué frustración tienes con tu web actual (o por qué necesitas una). Si veo que puedo ayudarte, te preparo diagnóstico gratuito. Si no, te recomiendo a alguien mejor.',
        'contact.obj1': 'Presupuesto fijo antes de empezar. Sin "extras sorpresa".',
        'contact.obj2': 'Si no puedo entregar en tu fecha, te lo digo en la primera llamada.',
        'contact.obj3': 'Si no encajamos, te recomiendo a otro desarrollador. Sin drama.',
        'form.title': 'Cuéntame tu proyecto',
        'form.subtitle': 'Respondo en 24h (normalmente antes)',
        'form.name': '¿Cómo te llamas? *',
        'form.namePlaceholder': 'María García',
        'form.email': 'Tu email *',
        'form.emailPlaceholder': 'maria@tunegocio.com',
        'form.message': '¿Qué necesita tu negocio? *',
        'form.messagePlaceholder': 'Ej: Tengo una consulta dental y necesito que la gente pueda pedir cita online. Mi web actual tarda 5 segundos en cargar.',
        'form.consent': 'Acepto que me contactes sobre mi proyecto. No spam, prometido.',
        'form.submit': 'Pedir cita de diagnóstico gratis',
        'form.security': '🔒 Tu información solo la veo yo. Nada de newsletters automáticos.',
        'form.micro': '¿Prefieres escribirme directo? <a href="mailto:ajimenezal01@gmail.com">ajimenezal01@gmail.com</a> (respondo en 2h)',
        'footer.legal': '© <span id="year"></span> WPDev. Especialista en WordPress que genera resultados. <a href="mailto:ajimenezal01@gmail.com">ajimenezal01@gmail.com</a>',
        'footer.privacy': 'Política de privacidad',
        'thanks.meta.title': 'Mensaje recibido | WPDev',
        'thanks.meta.desc': 'He recibido tu mensaje. Esto es lo que pasa ahora.',
        'thanks.title': 'Mensaje recibido. Esto pasa ahora:',
        'thanks.message': '<strong>En las próximas 4 horas</strong> reviso tu proyecto y te escribo para proponerte una llamada de 15 minutos. Si veo que no puedo ayudarte, te lo digo honestamente y te recomiendo alternativas.',
        'thanks.time1': 'Reviso tu proyecto',
        'thanks.time2': 'Te propongo llamada o alternativa',
        'thanks.time3': 'Hablamos 15 min (si encajamos)',
        'thanks.next': 'Mientras tanto, esto te ayuda:',
        'thanks.item1': '📋 Piensa en tu objetivo principal: ¿más llamadas, más emails, más ventas directas?',
        'thanks.item2': '📸 Busca 3 webs de tu competencia que funcionen bien (para la llamada)',
        'thanks.item3': '💰 Define tu presupuesto mensual para mantenimiento (no solo para la web, para el crecimiento)',
        'thanks.urgency': '¿Urgente? Escríbeme por WhatsApp: +34 600 000 000',
        'thanks.back': '← Volver a la web'
    },
    en: {
        'meta.title': 'Stop losing customers to a slow website | WordPress Freelance',
        'meta.description': 'I turn your WordPress into a lead machine. Design that sells, speed that ranks. Fixed quote in 24h.',
        'og.title': 'Stop losing customers to a slow website | WordPress Freelance',
        'og.description': 'WordPress websites that generate inquiries while you sleep. Specialized for businesses that need results.',
        'hero.badge': '💼 WordPress Developer Freelance',
        'hero.title': 'Stop losing customers to a <span class="highlight">slow, outdated website</span>',
        'hero.subtitle': 'I turn your WordPress into a lead-generating machine: <strong>design that sells, speed that ranks</strong>, and a process where you never touch code. Specialized for businesses that need results, not just "a pretty website".',
        'hero.cta': 'See if we\'re a fit →',
        'hero.cta.secondary': 'Or see how I work first',
        'hero.note': 'Only 2 projects per month',
        'services.badge': 'Solutions',
        'services.title': 'What problem do you need to solve?',
        'services.web.title': 'Websites that generate inquiries',
        'services.web.desc': 'Corporate website that brings clients while you sleep. Mobile-optimized from minute 1 because 70% of your traffic will come from mobile.',
        'services.design.title': 'Design that converts',
        'services.design.desc': 'Design that guides visitors to contact you, not just admire photos. Every button, color and space designed to convert visitors into customers.',
        'services.seo.title': 'Speed = Rankings',
        'services.seo.desc': 'Google will find you for the words your customers search. <2s loading speed and technical structure that improves your organic ranking.',
        'services.maintenance.title': 'You rest, I watch',
        'services.maintenance.desc': 'Updates, backups and technical support managed by me. You only receive a monthly email: "Everything works perfectly".',
        'process.badge': 'My Process',
        'process.title': 'From your idea to live website in 2 weeks',
        'process.step1.title': 'Free diagnosis (15 min)',
        'process.step1.desc': 'We talk about your business, not technology. I identify what you really need and if we\'re a good fit.',
        'process.step2.title': 'Clear proposal in 24h',
        'process.step2.desc': 'You get fixed pricing, delivery schedule and design examples. No surprises or "we\'ll see".',
        'process.step3.title': 'Development with feedback',
        'process.step3.desc': 'Review every 3 days. You see real progress, not waiting 2 months to see something.',
        'process.step4.title': 'Launch + warranty',
        'process.step4.desc': 'Website live, basic training and 30 days of tweaks included. I sleep well if you sleep well.',
        'process.guarantee': '✓ If we don\'t fit in the initial call, I\'ll recommend someone better. No charge.',
        'why.badge': 'Why me',
        'why.title': 'Specialized in websites that sell, not just "look pretty"',
        'why.results.title': 'Better conversion, not just traffic',
        'why.results.desc': 'A fast website without strategy is a fast car without direction. I design every page so visitors click "contact", not just admire you.',
        'why.speed.title': 'Speed that Google rewards',
        'why.speed.desc': '90+ Core Web Vitals guaranteed. Your site loads in under 2 seconds or I don\'t charge.',
        'why.communication.title': 'You talk to me, not a "team"',
        'why.communication.desc': 'I\'m a developer, not an agency. Direct WhatsApp, response in hours, zero bureaucracy. If I have questions, I ask you, I don\'t assume.',
        'stats.projects': 'Websites generating leads',
        'stats.satisfaction': 'Projects abandoned',
        'stats.response': 'Average response time',
        'contact.badge': 'First step',
        'contact.title': 'Let\'s talk 15 minutes, no commitment',
        'contact.desc': 'Tell me what frustration you have with your current website (or why you need one). If I can help, I\'ll prepare a free diagnosis. If not, I\'ll recommend someone better.',
        'contact.obj1': 'Fixed budget before starting. No "surprise extras".',
        'contact.obj2': 'If I can\'t deliver by your date, I\'ll tell you in the first call.',
        'contact.obj3': 'If we don\'t fit, I\'ll recommend another developer. No drama.',
        'form.title': 'Tell me about your project',
        'form.subtitle': 'I reply within 24h (usually sooner)',
        'form.name': 'What\'s your name? *',
        'form.namePlaceholder': 'Maria Garcia',
        'form.email': 'Your email *',
        'form.emailPlaceholder': 'maria@yourbusiness.com',
        'form.message': 'What does your business need? *',
        'form.messagePlaceholder': 'Ex: I have a dental practice and need people to book appointments online. My current website takes 5 seconds to load.',
        'form.consent': 'I agree to be contacted about my project. No spam, promised.',
        'form.submit': 'Book free diagnosis call',
        'form.security': '🔒 Your info is only seen by me. No automated newsletters.',
        'form.micro': 'Prefer to email me directly? <a href="mailto:ajimenezal01@gmail.com">ajimenezal01@gmail.com</a> (I reply in 2h)',
        'footer.legal': '© <span id="year"></span> WPDev. WordPress specialist that delivers results. <a href="mailto:ajimenezal01@gmail.com">ajimenezal01@gmail.com</a>',
        'footer.privacy': 'Privacy Policy',
        'thanks.meta.title': 'Message received | WPDev',
        'thanks.meta.desc': 'I\'ve received your message. Here\'s what happens now.',
        'thanks.title': 'Message received. Here\'s what happens now:',
        'thanks.message': '<strong>Within the next 4 hours</strong> I review your project and write back to propose a 15-min call. If I see I can\'t help you, I\'ll tell you honestly and recommend alternatives.',
        'thanks.time1': 'I review your project',
        'thanks.time2': 'I propose call or alternative',
        'thanks.time3': 'We talk 15 min (if we fit)',
        'thanks.next': 'Meanwhile, this will help you:',
        'thanks.item1': '📋 Think about your main goal: more calls, more emails, more direct sales?',
        'thanks.item2': '📸 Find 3 competitor websites that work well (for the call)',
        'thanks.item3': '💰 Define your monthly budget for maintenance (not just for the website, for growth)',
        'thanks.urgency': 'Urgent? WhatsApp me: +1 234 567 890',
        'thanks.back': '← Back to website'
    }
};

// ========================================
// GESTIÓN DE IDIOMAS
// ========================================
const I18n = {
    currentLang: 'es',
    
    init() {
        const savedLang = localStorage.getItem('wpdev-language');
        const browserLang = navigator.language.split('-')[0];
        
        if (savedLang && translations[savedLang]) {
            this.currentLang = savedLang;
        } else if (translations[browserLang]) {
            this.currentLang = browserLang;
        }
        
        this.applyLanguage(this.currentLang);
        this.setupEventListeners();
        this.updateActiveButton();
    },
    
    applyLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.lang = lang;
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        this.updateMetaTags(lang);
        
        const langInput = document.getElementById('form-language');
        if (langInput) {
            langInput.value = lang;
        }
        
        localStorage.setItem('wpdev-language', lang);
        this.updateActiveButton();
    },
    
    updateMetaTags(lang) {
        const titleEl = document.querySelector('title[data-i18n="meta.title"]');
        if (titleEl && translations[lang]['meta.title']) {
            document.title = translations[lang]['meta.title'];
        }
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && translations[lang]['meta.description']) {
            metaDesc.setAttribute('content', translations[lang]['meta.description']);
        }
        
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        
        if (ogTitle && translations[lang]['og.title']) {
            ogTitle.setAttribute('content', translations[lang]['og.title']);
        }
        if (ogDesc && translations[lang]['og.description']) {
            ogDesc.setAttribute('content', translations[lang]['og.description']);
        }
    },
    
    updateActiveButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
    },
    
    setupEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                if (lang !== this.currentLang) {
                    this.applyLanguage(lang);
                }
            });
        });
    }
};

// ========================================
// ANIMACIONES AL SCROLL
// ========================================
const ScrollAnimations = {
    init() {
        this.setupRevealAnimations();
        this.setupHeaderScroll();
        this.setupSmoothScroll();
    },
    
    setupRevealAnimations() {
        const revealElements = document.querySelectorAll('.service-card, .service-card-recurrente, .benefit-item, .step, .stat');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    },
    
    setupHeaderScroll() {
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    },
    
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// ========================================
// UTILIDADES
// ========================================
const Utils = {
    init() {
        this.updateYear();
        this.setupFormValidation();
    },
    
    updateYear() {
        const yearElements = document.querySelectorAll('#year');
        const currentYear = new Date().getFullYear();
        yearElements.forEach(el => {
            el.textContent = currentYear;
        });
    },
    
    setupFormValidation() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const consent = form.querySelector('input[name="consent"]');
                if (consent && !consent.checked) {
                    e.preventDefault();
                    const msg = I18n.currentLang === 'es' 
                        ? 'Por favor, acepta que te contacte sobre tu proyecto.' 
                        : 'Please agree to be contacted about your project.';
                    alert(msg);
                }
            });
        });
    }
};

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    I18n.init();
    ScrollAnimations.init();
    Utils.init();
});