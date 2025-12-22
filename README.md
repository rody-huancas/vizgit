<div align="center">
  <img src="/logo-vizgit.webp" alt="VizGit Logo" width="120" height="120" />
  
  # 🌱 VizGit
  
  **Visualiza tus contribuciones de GitHub de forma elegante**
  
  [![Next.js](https://img.shields.io/badge/Next.js-16.0-black? style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  
  [Demo](https://vizgit.novtiq.com) · [Reportar Bug](https://github.com/rody-huancas/vizgit/issues) · [Solicitar Feature](https://github.com/rody-huancas/vizgit/issues)
</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características](#-características)
- [Demo](#-demo)
- [Tecnologías](#️-tecnologías)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Uso](#-uso)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Sobre el Proyecto

**VizGit** es una aplicación web que transforma tus contribuciones de GitHub en hermosas visualizaciones interactivas. Analiza tu actividad, descubre patrones en tus commits y comparte tus estadísticas con un diseño elegante y personalizable.

### ¿Por qué VizGit?

- 📊 **Visualización Clara**: Heatmaps interactivos al estilo GitHub
- 🎨 **Personalizable**: 5 temas diferentes y opciones de customización
- 📈 **Análisis Completo**: Estadísticas detalladas de tu actividad
- 💾 **Exportación**:  Descarga tus estadísticas como imagen PNG de alta calidad
- ⚡ **Rápido**: Construido con Next.js 16 y optimizado para rendimiento
- 🌐 **SEO Optimizado**: Metadata completa y Open Graph

---

## ✨ Características

### 📊 Visualización de Datos

- **Heatmap de Contribuciones**: Calendario anual con todos tus commits
- **Nivel de Actividad**: Sistema de gamificación con 6 niveles (Novato → Leyenda)
- **Estadísticas Generales**: Repos, estrellas, forks, seguidores, PRs, issues
- **Lenguajes Más Usados**: Top 8 lenguajes con porcentajes y colores
- **Análisis Semanal**: Gráfico de barras por día de la semana

### 🎨 Personalización

- **5 Temas Predefinidos**: GitHub, Ocean, Sunset, Purple, Dark
- **Customizador Avanzado**: Ajusta tamaño, espaciado y bordes de los cuadrados
- **Responsive Design**: Funciona perfectamente en móviles, tablets y desktop
- **Animaciones Suaves**: Transiciones y efectos visuales agradables

### 💾 Funcionalidades Extra

- **Exportar como Imagen**: Descarga tu perfil completo en PNG de alta resolución
- **SEO Completo**: robots.txt, sitemap.xml, Open Graph, Twitter Cards
- **PWA Ready**:  Manifest configurado para instalación como app
- **Structured Data**: Schema.org para mejor indexación

---

## 🚀 Demo

Prueba la aplicación en vivo:  **[vizgit.novtiq.com](https://vizgit.novtiq.com)**

### Ejemplos: 
- [Ver perfil de ejemplo](https://vizgit.novtiq.com/rody-huancas)
- [Torvalds](https://vizgit.novtiq.com/torvalds)

### Screenshots: 

<details>
<summary>📸 Ver capturas de pantalla</summary>

#### Desktop
![Desktop View](./screenshots/desktop.png)

#### Mobile
![Mobile View](./screenshots/mobile.png)

</details>

---

## 🛠️ Tecnologías

### Core
- **[Next.js 16](https://nextjs.org/)** - Framework React con App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilos utility-first

### APIs y Librerías
- **[GitHub GraphQL API](https://docs.github.com/en/graphql)** - Obtención de datos
- **[html-to-image](https://github.com/bubkoo/html-to-image)** - Exportación a imagen
- **[clsx](https://github.com/lukeed/clsx)** - Utilidades de className

### Herramientas de Desarrollo
- **[ESLint](https://eslint.org/)** - Linting
- **[Prettier](https://prettier.io/)** - Formateo de código
- **[pnpm](https://pnpm.io/)** - Gestor de paquetes (recomendado)

---

## 📦 Instalación

### Prerrequisitos

- **Node.js** 18.17 o superior
- **pnpm** (recomendado), npm o yarn
- **Cuenta de GitHub** para generar token de API

### 1. Clonar el repositorio

```bash
git clone https://github.com/rody-huancas/vizgit.git
cd vizgit
