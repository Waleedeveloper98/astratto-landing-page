# Mágico Design Portfolio 🚀

A high-end, component-based landing page built with **React**, **Vite**, and **Tailwind CSS**. This project follows a strict modular architecture to ensure the code remains maintainable and readable for years to come.

---

## 🛠️ Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS (Utility-first)
* **Icons:** Lucide React / React Icons
* **Workflow:** Component-Driven Development

---

## 📂 Component Architecture

I have deconstructed the website into a logical hierarchy. Each component is named contextually to describe its exact role in the UI.

### 🏗️ Layout Components
* **`Navbar.jsx`** - Main site navigation.
* **`Hero.jsx`** - Top section containing:
    * `HeroContent.jsx` (Heading & CTA)
    * `HeroBackground.jsx` (Background shapes & illustrations)

### 💼 Services Section
* **`Services.jsx`** - Main container.
    * `ServiceList.jsx` - Wrapper for the service grid.
    * `ServiceCard.jsx` - Individual card for each service.

### 🎨 Projects Section
* **`ProjectsSection.jsx`** - Main container.
    * `ProjectCardsContainer.jsx` - Responsive layout container for projects.
    * `ProjectCard.jsx` - Component composed of:
        * `ProjectThumbnail.jsx` (Image container)
        * `ProjectCardHeader.jsx` (Title & Category)
        * `ProjectCardDescription.jsx` (Body text)

### 📝 Information & Footer
* **`AboutSection.jsx`** - Typography-focused mission statement.
* **`Footer.jsx`** - Main footer container.
    * `FooterTop.jsx` - "Transformative Journey" call-to-action block.
    * `FooterBottom.jsx` - Copyright, Legal links, and Socials.


### 💼 General
* **`Header.jsx`** Reusable title/subtitle block.
     * `Heading.jsx` - "Heading for all.
    * `Description.jsx` - Description for all.

    
---

## 🚀 Getting Started

### 1. Installation
First, clone the project and install dependencies:
```bash
npm install