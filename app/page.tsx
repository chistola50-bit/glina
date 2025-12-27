'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const heroRef = useRef(null)

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0])
  const heroScale = useTransform(heroScroll, [0, 0.5], [1, 0.95])

  const services = [
    { title: "Карточки для маркетплейсов", subtitle: "WB • Ozon • Яндекс", price: "от 2 500 ₽" },
    { title: "Инфографика", subtitle: "Презентации • Отчёты", price: "от 5 000 ₽" },
    { title: "Дизайн интерьеров", subtitle: "3D визуализация", price: "от 15 000 ₽" },
    { title: "AI-видео", subtitle: "Промо • Реклама", price: "от 3 000 ₽" },
  ]

  const works = [
    { id: 1, title: "Современный интерьер", category: "Дизайн интерьера", year: "2025" },
    { id: 2, title: "Карточки для Wildberries", category: "Маркетплейс", year: "2025" },
    { id: 3, title: "Брендинг кофейни", category: "Инфографика", year: "2024" },
    { id: 4, title: "AI промо-ролик", category: "Видео", year: "2025" },
  ]

  const faqs = [
    { q: "Сколько времени занимает создание карточки?", a: "В среднем 2-4 часа. Срочные заказы выполняем за 1 час." },
    { q: "Какие правки входят в стоимость?", a: "2 раунда правок включены в стоимость." },
    { q: "Работаете с регионами?", a: "Да, работаем удалённо по всей России и СНГ." },
    { q: "Как происходит оплата?", a: "50% предоплата, 50% после согласования." },
  ]

  const marqueeItems = ["Карточки", "Инфографика", "3D Визуализация", "AI-Видео", "Презентации", "Брендинг"]

  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#111' }}>

      {/* HEADER */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <a href="/" style={{ fontSize: '18px', fontWeight: 600, textDecoration: 'none', color: '#111' }}>
            GLINA
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
            {['Услуги', 'Работы', 'О нас', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                style={{ fontSize: '14px', color: '#666', textDecoration: 'none' }}
              >
                {item}
              </a>
            ))}
            <a
              href="https://t.me/angel0411"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#111',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none'
              }}
            >
              Связаться
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-burger"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            <div style={{ width: '24px', height: '2px', background: '#111', marginBottom: '6px', transition: '0.3s', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }} />
            <div style={{ width: '24px', height: '2px', background: '#111', marginBottom: '6px', opacity: isMenuOpen ? 0 : 1, transition: '0.3s' }} />
            <div style={{ width: '24px', height: '2px', background: '#111', transition: '0.3s', transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu" style={{
            display: 'none',
            position: 'absolute',
            top: '60px',
            left: 0,
            right: 0,
            background: '#fff',
            padding: '20px',
            borderBottom: '1px solid #f0f0f0',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {['Услуги', 'Работы', 'О нас', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsMenuOpen(false)}
                style={{ fontSize: '18px', color: '#111', textDecoration: 'none', padding: '8px 0' }}
              >
                {item}
              </a>
            ))}
            <a
              href="https://t.me/angel0411"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#111',
                color: '#fff',
                padding: '14px 24px',
                borderRadius: '100px',
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: '8px'
              }}
            >
              Написать в Telegram
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section ref={heroRef} style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingBottom: '40px'
      }}>
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <p style={{ color: '#888', marginBottom: '12px', fontSize: '14px' }}>
              Дизайн-студия
            </p>

            <h1 className="hero-title" style={{
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: 1,
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              Создаём
              <br />
              <span style={{ color: '#ccc' }}>визуальный</span>
              <br />
              контент
            </h1>

            <p className="hero-text" style={{
              fontSize: '16px',
              color: '#666',
              maxWidth: '500px',
              marginBottom: '32px',
              lineHeight: 1.6
            }}>
              Карточки для маркетплейсов, инфографика, дизайн интерьеров и AI-видео. Быстро, качественно, современно.
            </p>

            <div className="hero-buttons" style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
              <a
                href="#работы"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#111',
                  color: '#fff',
                  padding: '14px 28px',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}
              >
                Смотреть работы
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'transparent',
                border: '1px solid #e0e0e0',
                padding: '14px 28px',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: 500,
                cursor: 'pointer'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: '#f5f5f5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="12" height="12" fill="#111" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Showreel
              </button>
            </div>
          </div>

          {/* Video placeholder */}
          <div style={{ maxWidth: '1200px', margin: '40px auto 0', padding: '0 20px' }}>
            <div style={{
              aspectRatio: '16/9',
              background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}>
                  <svg width="24" height="24" fill="#111" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p style={{ color: '#888', fontSize: '14px' }}>Showreel 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section style={{
        padding: '20px 0',
        borderTop: '1px solid #f0f0f0',
        borderBottom: '1px solid #f0f0f0',
        overflow: 'hidden'
      }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginRight: '24px',
              whiteSpace: 'nowrap'
            }}>
              <span style={{ fontSize: '20px', fontWeight: 500, color: '#ddd' }}>{item}</span>
              <span style={{ width: '6px', height: '6px', background: '#ddd', borderRadius: '50%' }} />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="услуги" style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <p style={{ color: '#888', marginBottom: '8px', fontSize: '14px' }}>Услуги</p>
          <h2 className="section-title" style={{ fontSize: '32px', fontWeight: 600, marginBottom: '40px' }}>
            Что мы делаем
          </h2>

          <div>
            {services.map((service, index) => (
              <a
                key={index}
                href="#"
                className="service-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 0',
                  borderBottom: '1px solid #f0f0f0',
                  textDecoration: 'none',
                  color: 'inherit',
                  gap: '16px'
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 className="service-title" style={{ fontSize: '18px', fontWeight: 500, marginBottom: '4px' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#888', fontSize: '14px' }}>{service.subtitle}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                  <span style={{ color: '#888', fontSize: '14px' }}>{service.price}</span>
                  <div className="service-arrow" style={{
                    width: '40px',
                    height: '40px',
                    background: '#f5f5f5',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="16" height="16" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="работы" style={{ padding: '80px 0', background: '#fafafa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="works-header" style={{ marginBottom: '40px' }}>
            <div>
              <p style={{ color: '#888', marginBottom: '8px', fontSize: '14px' }}>Портфолио</p>
              <h2 className="section-title" style={{ fontSize: '32px', fontWeight: 600 }}>Избранные работы</h2>
            </div>
            <a href="/works" className="all-projects-link" style={{ color: '#666', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', marginTop: '16px' }}>
              Все проекты
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="works-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            {works.map((work) => (
              <div key={work.id} style={{ cursor: 'pointer' }}>
                <div style={{
                  aspectRatio: '4/3',
                  background: 'linear-gradient(135deg, #e8e8e8 0%, #d8d8d8 100%)',
                  borderRadius: '12px',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#aaa', fontSize: '14px' }}>Фото проекта</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '4px' }}>{work.title}</h3>
                    <p style={{ color: '#888', fontSize: '13px' }}>{work.category}</p>
                  </div>
                  <span style={{ color: '#aaa', fontSize: '13px' }}>{work.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="о-нас" style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="about-grid">
            <div>
              <p style={{ color: '#888', marginBottom: '8px', fontSize: '14px' }}>О нас</p>
              <h2 className="section-title" style={{ fontSize: '32px', fontWeight: 600, marginBottom: '20px' }}>Дизайн + AI</h2>
              <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7, marginBottom: '40px' }}>
                Мы объединяем креативность профессионального дизайнера с возможностями искусственного интеллекта. 
                Это позволяет делать работу быстрее, сохраняя индивидуальный подход к каждому проекту.
              </p>

              <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                {[
                  { value: "150+", label: "Проектов" },
                  { value: "2 часа", label: "Среднее время" },
                  { value: "98%", label: "Довольных клиентов" },
                  { value: "24/7", label: "Поддержка" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div style={{ fontSize: '28px', fontWeight: 600, marginBottom: '4px' }}>{stat.value}</div>
                    <div style={{ color: '#888', fontSize: '14px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-image" style={{
              aspectRatio: '1',
              background: '#f5f5f5',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '40px'
            }}>
              <p style={{ color: '#aaa', fontSize: '14px' }}>Фото команды</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ color: '#888', marginBottom: '8px', fontSize: '14px' }}>FAQ</p>
            <h2 className="section-title" style={{ fontSize: '32px', fontWeight: 600 }}>Частые вопросы</h2>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <div key={index} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '20px 0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '16px'
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 500, flex: 1 }}>{faq.q}</span>
                  <span style={{
                    fontSize: '24px',
                    color: '#888',
                    transform: openFaq === index ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.2s',
                    flexShrink: 0
                  }}>+</span>
                </button>
                {openFaq === index && (
                  <p style={{ paddingBottom: '20px', color: '#666', lineHeight: 1.6, fontSize: '15px' }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '32px', fontWeight: 600, marginBottom: '16px' }}>
            Готовы начать проект?
          </h2>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '32px' }}>
            Напишите нам — обсудим задачу и найдём лучшее решение
          </p>

          <div className="cta-buttons" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexDirection: 'column' }}>
            <a
              href="https://t.me/angel0411"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: '#111',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none'
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              Написать в Telegram
            </a>
            <a
              href="mailto:hello@glina.studio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: '#fff',
                color: '#111',
                padding: '14px 28px',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                border: '1px solid #e0e0e0'
              }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="footer-grid" style={{ marginBottom: '40px' }}>
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>GLINA</h3>
              <p style={{ color: '#666', maxWidth: '300px', fontSize: '14px', lineHeight: 1.6 }}>
                Дизайн-студия нового поколения. Создаём визуальный контент с помощью AI.
              </p>
            </div>

            <div className="footer-links" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
              <div>
                <h4 style={{ fontWeight: 500, marginBottom: '12px', fontSize: '14px' }}>Навигация</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['Услуги', 'Работы', 'О нас', 'FAQ'].map(item => (
                    <li key={item} style={{ marginBottom: '8px' }}>
                      <a href={`#${item.toLowerCase()}`} style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ fontWeight: 500, marginBottom: '12px', fontSize: '14px' }}>Контакты</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: '#666', fontSize: '14px' }}>
                  <li style={{ marginBottom: '8px' }}>
                    <a href="https://t.me/angel0411" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none' }}>
                      Telegram
                    </a>
                  </li>
                  <li style={{ marginBottom: '8px' }}>hello@glina.studio</li>
                  <li>Москва, Россия</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
            <p style={{ color: '#888', fontSize: '13px' }}>© 2025 GLINA Studio</p>
            <a
              href="https://t.me/angel0411"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
                background: '#f5f5f5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="16" height="16" fill="#666" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* STYLES */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .hero-title {
            font-size: 80px !important;
          }
          .hero-text {
            font-size: 18px !important;
          }
          .hero-buttons {
            flex-direction: row !important;
          }
          .section-title {
            font-size: 48px !important;
          }
          .service-title {
            font-size: 24px !important;
          }
          .works-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .works-header {
            display: flex !important;
            justify-content: space-between !important;
            align-items: flex-end !important;
          }
          .all-projects-link {
            margin-top: 0 !important;
          }
          .about-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 60px !important;
            align-items: center !important;
          }
          .about-image {
            margin-top: 0 !important;
          }
          .stats-grid {
            gap: 32px !important;
          }
          .cta-buttons {
            flex-direction: row !important;
          }
          .footer-grid {
            display: grid !important;
            grid-template-columns: 2fr 1fr !important;
            gap: 60px !important;
          }
          .desktop-nav {
            display: flex !important;
          }
          .mobile-burger {
            display: none !important;
          }
        }
        
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-burger {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>

    </div>
  )
}
