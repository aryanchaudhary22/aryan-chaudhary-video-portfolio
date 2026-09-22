'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  Mail,
  Menu,
  Play,
  X,
} from 'lucide-react'

const categories = [
  { id: 'horizontal', number: '01', label: 'Post Event Edits [Horizontal]' },
  { id: 'vertical', number: '02', label: 'Post Event Edits [Vertical]' },
  { id: 'pre-event', number: '03', label: 'Pre Event Promotions' },
  { id: 'music', number: '04', label: 'Music Visuals Edits' },
  { id: 'edits', number: '05', label: 'Edits' },
  { id: 'ai', number: '06', label: 'Ai Experiments' },
  { id: 'commercial', number: '07', label: 'Commercial' },
] as const

type CategoryId = (typeof categories)[number]['id']

type Project = {
  id: string
  title: string
  category: CategoryId
  aspectRatio: string
  videoSrc: string
  thumbnail: string
}

// ============================================================
// PROJECTS
// ============================================================

const projects: Project[] = [
  // 01 — Post Event Edits [Horizontal]
  {
    id: 'aftermovie-sunburn-2025',
    title: 'Aftermovie Sunburn 2025',
    category: 'horizontal',
    aspectRatio: '16 / 9',
    videoSrc: '/videos/post-event-horizontal/aftermovie-sunburn-2025.mp4',
    thumbnail: '/thumbnails/post-event-horizontal/aftermovie-sunburn-2025.jpg',
  },
  {
    id: 'aftermovie-sunburn-2023',
    title: 'Aftermovie Sunburn 2023',
    category: 'horizontal',
    aspectRatio: '16 / 9',
    videoSrc: '/videos/post-event-horizontal/aftermovie-sunburn-2023.mp4',
    thumbnail: '/thumbnails/post-event-horizontal/aftermovie-sunburn-2023.jpg',
  },
  {
    id: 'aftermovie-saheb',
    title: 'Aftermovie Saheb',
    category: 'horizontal',
    aspectRatio: '16 / 9',
    videoSrc: '/videos/post-event-horizontal/aftermovie-saheb.mp4',
    thumbnail: '/thumbnails/post-event-horizontal/aftermovie-saheb.jpg',
  },
  {
    id: 'aftermovie-mevajat',
    title: 'Aftermovie Mevajat',
    category: 'horizontal',
    aspectRatio: '4 / 3',
    videoSrc: '/videos/post-event-horizontal/aftermovie-mevajat.mp4',
    thumbnail: '/thumbnails/post-event-horizontal/aftermovie-mevajat.jpg',
  },
  
  

  // 02 — Post Event Edits [Vertical]
  {
    id: 'vibe-nation-show-reel',
    title: 'Vibe Nation Show Reel',
    category: 'vertical',
    aspectRatio: '9 / 16',
    videoSrc: '/videos/post-event-vertical/vibe-nation-show-reel.mp4',
    thumbnail: '/thumbnails/post-event-vertical/vibe-nation-show-reel.jpg',
  },
  {
    id: 'vibe-nation-show-reel-2',
    title: 'Vibe Nation Show Reel 2',
    category: 'vertical',
    aspectRatio: '9 / 16',
    videoSrc: '/videos/post-event-vertical/vibe-nation-show-reel-2.mp4',
    thumbnail: '/thumbnails/post-event-vertical/vibe-nation-show-reel-2.jpg',
  },

  // 03 — Pre Event Promotions
  {
    id: 'paradox-mirage-reel-1',
    title: 'Paradox Mirage Reel 1',
    category: 'pre-event',
    aspectRatio: '9 / 16',
    videoSrc: '/videos/pre-event-promotions/paradox-mirage-reel-1.mp4',
    thumbnail: '/thumbnails/pre-event-promotions/paradox-mirage-reel-1.jpg',
  },
  {
    id: 'paradox-mirage-reel-2',
    title: 'Paradox Mirage Reel 2',
    category: 'pre-event',
    aspectRatio: '9 / 16',
    videoSrc: '/videos/pre-event-promotions/paradox-mirage-reel-2.mp4',
    thumbnail: '/thumbnails/pre-event-promotions/paradox-mirage-reel-2.jpg',
  },
  {
    id: 'paradox-mirage-reel-3',
    title: 'Paradox Mirage Reel 3',
    category: 'pre-event',
    aspectRatio: '9 / 16',
    videoSrc: '/videos/pre-event-promotions/paradox-mirage-reel-3.mp4',
    thumbnail: '/thumbnails/pre-event-promotions/paradox-mirage-reel-3.jpg',
  },
  {
    id: 'divas-night-reel-1',
    title: "Diva's Night Reel 1",
    category: 'pre-event',
    aspectRatio: '9 / 16',
    videoSrc: '/videos/pre-event-promotions/divas-night-reel-1.mp4',
    thumbnail: '/thumbnails/pre-event-promotions/divas-night-reel-1.jpg',
  },
  {
    id: 'mevajat-album-announcement',
    title: 'Mevajat Album Announcement Video',
    category: 'pre-event',
    aspectRatio: '1 / 1',
    videoSrc: '/videos/pre-event-promotions/mevajat-album-announcement.mp4',
    thumbnail: '/thumbnails/pre-event-promotions/mevajat-album-announcement.jpg',
  },

  // 04 — Music Visuals Edits
  {
    id: 'music-video-cash',
    title: 'Music Video Cash',
    category: 'music',
    aspectRatio: '4 / 3',
    videoSrc: '/videos/music-visuals/music-video-cash.mp4',
    thumbnail: '/thumbnails/music-visuals/music-video-cash.jpg',
  },
  {
    id: 'music-video-circle',
    title: 'Music Video Circle',
    category: 'music',
    aspectRatio: '16 / 9',
    videoSrc: '/videos/music-visuals/music-video-circle.mp4',
    thumbnail: '/thumbnails/music-visuals/music-video-circle.jpg',
  },
  {
    id: 'music-video-teaser',
    title: 'Music Video Teaser',
    category: 'music',
    aspectRatio: '16 / 9',
    videoSrc: '/videos/music-visuals/music-video-teaser.mp4',
    thumbnail: '/thumbnails/music-visuals/music-video-teaser.jpg',
  },
  {
    id: 'trailer-circle',
    title: 'Trailer Circle',
    category: 'music',
    aspectRatio: '4 / 3',
    videoSrc: '/videos/music-visuals/trailer-circle.mp4',
    thumbnail: '/thumbnails/music-visuals/trailer-circle.jpg',
  },
  {
    id: 'trailer-still-standing',
    title: 'Trailer Still Standing',
    category: 'music',
    aspectRatio: '4 / 3',
    videoSrc: '/videos/music-visuals/trailer-still-standing.mp4',
    thumbnail: '/thumbnails/music-visuals/trailer-still-standing.jpg',
  },

  // 05 — Edits
  {
    id: 'edit-bw',
    title: 'Edit B&W',
    category: 'edits',
    aspectRatio: '4 / 3',
    videoSrc: '/videos/edits/edit-bw.mp4',
    thumbnail: '/thumbnails/edits/edit-bw.jpg',
  },
  {
  id: 'mevajat-show-announcement',
  title: 'Mevajat Show Announcement Video',
  category: 'edits',
  aspectRatio: '1 / 1',
  videoSrc: '/videos/edits/mevajat-show-announcement.mp4',
    thumbnail: '/thumbnails/edits/mevajat-show-announcement.jpg',
  },
  
  // 06 — AI Experiments
  {
    id: 'music-visualiser',
    title: 'Music Visualiser',
    category: 'ai',
    aspectRatio: '4 / 3',
    videoSrc: '/videos/ai-experiments/music-visualiser.mp4',
    thumbnail: '/thumbnails/ai-experiments/music-visualiser.jpg',
  },

  // 07 — Commercial
  {
    id: 'rizz-drink-pitch',
    title: 'Rizz Drink Pitch',
    category: 'commercial',
    aspectRatio: '16 / 9',
    videoSrc: '/videos/commercial/rizz-drink-pitch.mp4',
    thumbnail: '/thumbnails/commercial/rizz-drink-pitch.jpg',
  },
]

// ============================================================
// MEDIA PLACEHOLDER
// ============================================================

function MediaPlaceholder({
  project,
  large = false,
}: {
  project: Project
  large?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()

    if (!videoRef.current) return

    videoRef.current.play().catch(() => {
      // Browser may block autoplay/playback in some situations.
    })
  }

  const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement>) => {
    event.stopPropagation()
  }

  return (
    <div
      className={`media-placeholder ${
        large ? 'media-placeholder-large' : ''
      }`}
      style={{ aspectRatio: project.aspectRatio }}
      onClick={(event) => event.stopPropagation()}
    >
      {project.videoSrc ? (
        <>
          <video
            ref={videoRef}
            src={project.videoSrc}
            poster={project.thumbnail || undefined}
            controls
            preload="metadata"
            playsInline
            onClick={handleVideoClick}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />

          {!isPlaying && (
            <button
              type="button"
              className="play-mark"
              aria-label={`Play ${project.title}`}
              onClick={handlePlayClick}
            >
              <Play fill="currentColor" />
            </button>
          )}
        </>
      ) : (
        <>
          <div className="placeholder-lines" aria-hidden="true" />

          <span className="placeholder-label">
            PROJECT MEDIA
          </span>

          <span className="placeholder-ratio">
            {project.aspectRatio.replaceAll(' ', '')}
          </span>

          <span className="play-mark" aria-hidden="true">
            <Play fill="currentColor" />
          </span>
        </>
      )}
    </div>
  )
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function Page() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryId | null>(null)

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null)

  const [menuOpen, setMenuOpen] = useState(false)

  const active = categories.find(
    (category) => category.id === activeCategory
  )

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) => project.category === activeCategory
      ),
    [activeCategory]
  )

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject
      ? 'hidden'
      : ''

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedProject])

  const scrollTo = (id: string) => {
    setMenuOpen(false)

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>

      {/* ======================================================
          HEADER
      ====================================================== */}

      <header className="site-header">

        <a
          className="brand"
          href="#top"
          aria-label="Aryan Chaudhary home"
        >
          ARYAN CHAUDHARY
          <span className="brand-dot">.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </button>

        <nav
          className={
            menuOpen
              ? 'nav-links nav-open'
              : 'nav-links'
          }
          aria-label="Main navigation"
        >
          {['work', 'about', 'skills', 'contact'].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
              >
                {item}
              </button>
            )
          )}
        </nav>

      </header>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="hero" id="top">

        <div className="hero-kicker">
          <span>01 — CREATIVE ARCHIVE</span>
          <span>NEW DELHI / INDIA</span>
        </div>

        <div className="hero-title">

          <h1>
            ARYAN
            <br />
            <em>CHAUDHARY</em>
          </h1>

          <div className="hero-stamp">
            <span>VIDEO EDITOR</span>
            <span>CREATIVE STORYTELLER</span>
          </div>

        </div>

        <div className="hero-bottom">

          <p>
            Events <i>•</i> Music <i>•</i> Promotions{' '}
            <i>•</i> Digital Content <i>•</i> AI
          </p>

          <p className="hero-description">
            I turn raw footage and creative ideas into
            engaging visual stories.
          </p>

          <div className="hero-actions">

            <button
              className="text-link"
              onClick={() => scrollTo('work')}
            >
              VIEW MY WORK
              <ArrowDownRight />
            </button>

            <button
              className="text-link muted"
              onClick={() => scrollTo('contact')}
            >
              LET&apos;S WORK TOGETHER
              <ArrowUpRight />
            </button>

          </div>

        </div>

      </section>

      {/* ======================================================
          WORK
      ====================================================== */}

      <section
        className="work-section section-shell"
        id="work"
      >

        <div className="section-intro">

          <span className="eyebrow">
            02 — SELECTED WORK
          </span>

          <p>
            Twenty pieces of visual storytelling,
            organized by rhythm, format and feeling.
          </p>

        </div>

        {!activeCategory ? (

          /* ==================================================
             CATEGORY LIST
          ================================================== */

          <div className="category-list">

            {categories.map((category) => {

              const count = projects.filter(
                (project) =>
                  project.category === category.id
              ).length

              return (
                <button
                  className="category-row"
                  key={category.id}
                  onClick={() =>
                    setActiveCategory(category.id)
                  }
                >

                  <span className="category-number">
                    {category.number}
                  </span>

                  <span className="category-name">
                    {category.label}
                  </span>

                  <span className="category-count">
                    {String(count).padStart(2, '0')}{' '}
                    {count === 1
                      ? 'PROJECT'
                      : 'PROJECTS'}
                  </span>

                  <ArrowUpRight
                    className="category-arrow"
                  />

                </button>
              )
            })}

          </div>

        ) : (

          /* ==================================================
             PROJECT VIEW
          ================================================== */

          <div className="project-view">

            <button
              className="back-link"
              onClick={() => setActiveCategory(null)}
            >
              <ArrowLeft />
              BACK TO WORK
            </button>

            <div className="category-heading">

              <span className="eyebrow">
                {active?.number} — CATEGORY
              </span>

              <h2>
                {active?.label}
              </h2>

            </div>

            <div className="project-grid">

              {filteredProjects.map(
                (project, index) => (

                  /*
                   * IMPORTANT:
                   * This used to be a <button>.
                   * It is now a <div> because MediaPlaceholder
                   * contains its own Play <button>.
                   *
                   * This prevents:
                   * <button>
                   *   <button>
                   * </button>
                   */

                  <div
                    key={project.id}
                    className={`project-card project-card-${
                      index % 3
                    }`}
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      setSelectedProject(project)
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key === 'Enter' ||
                        event.key === ' '
                      ) {
                        event.preventDefault()
                        setSelectedProject(project)
                      }
                    }}
                  >

                    <MediaPlaceholder
                      project={project}
                    />

                    <div className="project-meta">

                      <span>
                        {project.title}
                      </span>

                      <span>
                        {project.aspectRatio.replaceAll(
                          ' ',
                          ''
                        )}
                      </span>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>
        )}

      </section>

      {/* ======================================================
          ABOUT
      ====================================================== */}

      <section
        className="about-section section-shell"
        id="about"
      >

        <div className="about-side">

          <div className="section-intro">
            <span className="eyebrow">
              03 — ABOUT ME
            </span>
          </div>

          <div className="portrait-frame">

            <img
              src="/aryan-chaudhary-profile.png"
              alt="Aryan Chaudhary portrait"
            />

            <span className="portrait-caption">
              ARYAN / 2026
            </span>

            <span
              className="portrait-line"
              aria-hidden="true"
            />

          </div>

        </div>

        <div className="about-copy">

          <h2>
            Stories that move
            <br />
            <em>at the right pace.</em>
          </h2>

          <p>
            I&apos;m Aryan Chaudhary, a video editor
            focused on transforming raw footage, music
            and creative ideas into engaging visual
            stories.
          </p>

          <p>
            My work spans event films, aftermovies,
            pre-event promotions, music visuals,
            creative edits, commercial content and
            AI-assisted visual work.
          </p>

        </div>

      </section>

      {/* ======================================================
          SKILLS
      ====================================================== */}

      <section
        className="skills-section section-shell"
        id="skills"
      >

        <div className="skills-heading">

          <div>

            <span className="eyebrow">
              04 — TOOLKIT
            </span>

            <h2>
              Core Skills <em>&amp; tools</em>
            </h2>

            <span
              className="skills-accent"
              aria-hidden="true"
            />

          </div>

          <p>
            Every tool is part of a larger process:
            shaping rhythm, feeling and story into
            something people remember.
          </p>

        </div>

        <div className="skills-layout">

          <div
            className="skills-list"
            aria-label="Core skills and tools"
          >
            <span>Premiere Pro</span>
            <span>AI-Assisted Editing</span>
            <span>After Effects</span>
            <span>CapCut</span>
            <span>Color Grading</span>
            <span>Motion Design</span>
            <span>Sound Design</span>
            <span>AI Workflows</span>
          </div>

          <aside className="skills-stats">

            <span className="skill-index">
              THE APPROACH
            </span>

            <strong>
              Cut with
              <br />
              <em>intention.</em>
            </strong>

            <p>
              Strong footage, clean pacing and details
              that make every frame feel considered.
            </p>

            <span
              className="skills-stat-line"
              aria-hidden="true"
            />

          </aside>

        </div>

        <div className="skills-footer">
          <span>
            RHYTHM / DETAIL / FEELING
          </span>

          <span>
            08 TOOLS IN THE KIT
          </span>
        </div>

      </section>

      {/* ======================================================
          CONTACT
      ====================================================== */}

      <section
        className="contact-section section-shell"
        id="contact"
      >

        <span className="eyebrow">
          05 — CONTACT
        </span>

        <div className="contact-content">

          <h2>
            LET&apos;S CREATE
            <br />
            <em>SOMETHING.</em>
          </h2>

          <p>
            Available for video editing projects,
            creative collaborations, event content,
            music visuals and promotional work.
          </p>

          <div className="contact-actions">

            <a
              className="contact-button"
              href="mailto:aryanch680@gmail.com"
            >
              EMAIL ME
              <Mail />
            </a>

            <a
              className="contact-button"
              href="https://wa.me/917300854093"
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP
              <ArrowUpRight />
            </a>

          </div>

          <div className="contact-details">

            <a href="mailto:aryanch680@gmail.com">
              aryanch680@gmail.com
            </a>

            <a
              href="https://wa.me/917300854093"
              target="_blank"
              rel="noreferrer"
            >
              +91 7300854093
            </a>

          </div>

        </div>

      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="site-footer">

        <div>

          <strong>
            ARYAN CHAUDHARY
            <span className="brand-dot">.</span>
          </strong>

          <span>
            VIDEO EDITOR / CREATIVE STORYTELLER
          </span>

        </div>

        <span>
          © 2026
        </span>

        <button
          onClick={() => scrollTo('top')}
        >
          BACK TO TOP
          <ChevronDown />
        </button>

      </footer>

      {/* ======================================================
          PROJECT MODAL
      ====================================================== */}

      {selectedProject && (

        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              setSelectedProject(null)
            }
          }}
        >

          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
          >

            <button
              className="modal-close"
              aria-label="Close project viewer"
              onClick={() =>
                setSelectedProject(null)
              }
            >
              <X />
            </button>

            <MediaPlaceholder
              project={selectedProject}
              large
            />

            <div className="modal-meta">

              <div>

                <span className="eyebrow">
                  {
                    categories.find(
                      (category) =>
                        category.id ===
                        selectedProject.category
                    )?.label
                  }
                </span>

                <h2 id="project-title">
                  {selectedProject.title}
                </h2>

              </div>

              <span>
                {selectedProject.aspectRatio.replaceAll(
                  ' ',
                  ''
                )}
              </span>

            </div>

          </div>

        </div>

      )}

    </main>
  )
}