'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

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
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <a href="/" style={{ fontSize: '20px', fontWeight: 600, textDecoration: 'none', color: '#111' }}>
            GLINA
          </a>

          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
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
                padding: '10px 24px',
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none'
              }}
            >
              Связаться
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section ref={heroRef} style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '60px'
      }}>
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <p style={{ color: '#888', marginBottom: '16px', fontSize: '16px' }}>
              Дизайн-студия
            </p>

            <h1 style={{
              fontSize: 'clamp(48px, 10vw, 120px)',
              fontWeight: 600,
              lineHeight: 0.95,
              marginBottom: '32px',
              letterSpacing: '-0.02em'
            }}>
              Создаём
              <br />
              <span style={{ color: '#ccc' }}>визуальный</span>
              <br />
              контент
            </h1>

            <p style={{
              fontSize: '20px',
              color: '#666',
              maxWidth: '500px',
              marginBottom: '40px',
              lineHeight: 1.6
            }}>
              Карточки для маркетплейсов, инфографика, дизайн интерьеров и AI-видео. Быстро, качественно, современно.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#работы"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#111',
                  color: '#fff',
                  padding: '16px 32px',
                  borderRadius: '100px',
                  fontSize: '16px',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}
              >
                Смотреть работы
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'transparent',
                border: '1px solid #e0e0e0',
                padding: '16px 32px',
                borderRadius: '100px',
                fontSize: '16px',
                fontWeight: 500,
                cursor: 'pointer'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#f5f5f5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="16" height="16" fill="#111" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Showreel
              </button>
            </div>
          </div>

          {/* Video placeholder */}
          <div style={{ maxWidth: '1200px', margin: '60px auto 0', padding: '0 24px' }}>
            <div style={{
              aspectRatio: '16/9',
              background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}>
                  <svg width="32" height="32" fill="#111" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p style={{ color: '#888' }}>Showreel 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section style={{
        padding: '24px 0',
        borderTop: '1px solid #f0f0f0',
        borderBottom: '1px solid #f0f0f0',
        overflow: 'hidden'
      }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              marginRight: '32px',
              whiteSpace: 'nowrap'
            }}>
              <span style={{ fontSize: '28px', fontWeight: 500, color: '#ddd' }}>{item}</span>
              <span style={{ width: '8px', height: '8px', background: '#ddd', borderRadius: '50%' }} />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="услуги" style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ color: '#888', marginBottom: '8px' }}>Услуги</p>
          <h2 style={{ fontSize: '48px', fontWeight: 600, marginBottom: '60px' }}>
            Что мы делаем
          </h2>

          <div>
            {services.map((service, index) => (
              <a
                key={index}
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '32px 0',
                  borderBottom: '1px solid #f0f0f0',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '28px', fontWeight: 500, marginBottom: '4px' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#888' }}>{service.subtitle}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <span style={{ color: '#888' }}>{service.price}</span>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: '#f5f5f5',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="20" height="20" fill="none" stroke="#111" strokeWidth="2" viewBox="0 0 24 24">
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
      <section id="работы" style={{ padding: '120px 0', background: '#fafafa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <p style={{ color: '#888', marginBottom: '8px' }}>Портфолио</p>
              <h2 style={{ fontSize: '48px', fontWeight: 600 }}>Избранные работы</h2>
            </div>
            <a href="/works" style={{ color: '#666', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Все проекты
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {works.map((work) => (
              <div key={work.id} style={{ cursor: 'pointer' }}>
                <div style={{
                  aspectRatio: '4/3',
                  background: 'linear-gradient(135deg, #e8e8e8 0%, #d8d8d8 100%)',
                  borderRadius: '16px',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{ color: '#aaa' }}>Фото проекта</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '4px' }}>{work.title}</h3>
                    <p style={{ color: '#888', fontSize: '14px' }}>{work.category}</p>
                  </div>
                  <span style={{ color: '#aaa', fontSize: '14px' }}>{work.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="о-нас" style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#888', marginBottom: '8px' }}>О нас</p>
              <h2 style={{ fontSize: '48px', fontWeight: 600, marginBottom: '24px' }}>Дизайн + AI</h2>
              <p style={{ fontSize: '18px', color: '#666', lineHeight: 1.7, marginBottom: '48px' }}>
                Мы объединяем креативность профессионального дизайнера с возможностями искусственного интеллекта. 
                Это позволяет делать работу быстрее, сохраняя индивидуальный подход к каждому проекту.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                {[
                  { value: "150+", label: "Проектов" },
                  { value: "2 часа", label: "Среднее время" },
                  { value: "98%", label: "Довольных клиентов" },
                  { value: "24/7", label: "Поддержка" },
                ].map((stat, index) => (
                  <div key={index}>
                    <div style={{ fontSize: '36px', fontWeight: 600, marginBottom: '4px' }}>{stat.value}</div>
                    <div style={{ color: '#888' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              aspectRatio: '1',
              background: '#f5f5f5',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <p style={{ color: '#aaa' }}>Фото команды</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ color: '#888', marginBottom: '8px' }}>FAQ</p>
            <h2 style={{ fontSize: '48px', fontWeight: 600 }}>Частые вопросы</h2>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <div key={index} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '24px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '18px', fontWeight: 500 }}>{faq.q}</span>
                  <span style={{
                    fontSize: '24px',
                    color: '#888',
                    transform: openFaq === index ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.2s'
                  }}>+</span>
                </button>
                {openFaq === index && (
                  <p style={{ paddingBottom: '24px', color: '#666', lineHeight: 1.6 }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 0', background: '#fafafa' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 600, marginBottom: '24px' }}>
            Готовы начать проект?
          </h2>
          <p style={{ fontSize: '20px', color: '#666', marginBottom: '40px' }}>
            Напишите нам — обсудим задачу и найдём лучшее решение
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://t.me/angel0411"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#111',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '100px',
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'none'
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              Написать в Telegram
            </a>
            <a
              href="mailto:hello@glina.studio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#fff',
                color: '#111',
                padding: '16px 32px',
                borderRadius: '100px',
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'none',
                border: '1px solid #e0e0e0'
              }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '60px 0', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '60px', marginBottom: '60px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>GLINA</h3>
              <p style={{ color: '#666', maxWidth: '300px' }}>
                Дизайн-студия нового поколения. Создаём визуальный контент с помощью AI.
              </p>
            </div>

            <div>
              <h4 style={{ fontWeight: 500, marginBottom: '16px' }}>Навигация</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Услуги', 'Работы', 'О нас', 'FAQ'].map(item => (
                  <li key={item} style={{ marginBottom: '12px' }}>
                    <a href={`#${item.toLowerCase()}`} style={{ color: '#666', textDecoration: 'none' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: 500, marginBottom: '16px' }}>Контакты</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#666' }}>
                <li style={{ marginBottom: '12px' }}>
                  <a href="https://t.me/angel0411" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none' }}>
                    Telegram
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>hello@glina.studio</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid #f0f0f0' }}>
            <p style={{ color: '#888', fontSize: '14px' }}>© 2025 GLINA Studio</p>
            <a
              href="https://t.me/angel0411"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                background: '#f5f5f5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="20" height="20" fill="#666" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}