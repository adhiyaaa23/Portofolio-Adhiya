# Muhammad Ad'hiya Hartono — Portfolio

Personal portfolio website of **Muhammad Ad'hiya Hartono (Aryaa)** — a Statistics student at Universitas Brawijaya focusing on Data Science & Analytics. Built as a fully custom, animated single-page site (no framework) to showcase academic background, data/AI projects, and skills.

🔗 **Live site:** `https://adhiyaaa23.github.io/Portofolio-Adhiya/` *(update once GitHub Pages is enabled — see [Deployment](#deployment))*

---

## ✨ Features

- Animated loader, entrance curtain transition, and custom cursor
- Scroll-reveal animations across all sections
- Responsive layout (desktop → mobile, with a slide-out mobile menu)
- Project cards written as **Challenge → Approach → Impact** case studies, not just descriptions
- Live, embeddable demos for selected projects (iframe), in addition to source links
- Pure **HTML5, CSS3, and Vanilla JavaScript** — zero dependencies, zero build step

## 🗂️ Sections

| Section | Content |
|---|---|
| **About** | Introduction, contact details, links |
| **Education** | Academic background at Universitas Brawijaya |
| **Projects** | Case studies of data, AI, and dashboard projects |
| **Skills** | Hard skills, soft skills, and languages |

## 🚀 Featured Projects

| # | Project | Stack | Demo / Source |
|---|---|---|---|
| 01 | Kasir Chatbot | Google Colab, Gemini API | [Run in Colab](https://colab.research.google.com/github/adhiyaaa23/Kasir-Chatbot/blob/main/Chatbot%20Kasir.ipynb) |
| 02 | Chatbot Supply Chain (NexusGen v2) | Python, Streamlit, Gemini API | [Source](https://github.com/adhiyaaa23/Chatbot-Supply-Chain) |
| 03 | IoT-Energy Optimization Twin (EcoSense) | Python, Streamlit, IoT/SPC | [Source](https://github.com/adhiyaaa23/Dashboard-Optimization) |
| 04 | Simulasi Dataset Logistik | Python, Machine Learning | [Run in Colab](https://colab.research.google.com/github/adhiyaaa23/Simulasi-Dataset-Logistik/blob/main/Simulasi_Dataset_Logistik_Injeksi_Anomali_Keterlambatan_Pengiriman.ipynb) |
| 05 | Kimia Farma Performance Analytics | BigQuery, Looker Studio, Excel | — |
| 06 | Smart Energy Management System (SEMS) | HTML5 Canvas, Vanilla JS, Chart.js | [Live Demo](https://adhiyaaa23.github.io/Smart-Energy-Management-System/) · [Source](https://github.com/adhiyaaa23/Smart-Energy-Management-System) |
| 07 | SARA — Smart Reservation Assistant for Restaurant | Python, Streamlit, MySQL, Gemini API | [Live Demo](https://smart-reservation-restaurantt-ptufdwfdauksbydu6qieu5.streamlit.app) · [Source](https://github.com/dnldsmrr/Smart-Reservation-Restaurantt) |

> Full write-ups (problem, approach, and impact) for every project are on the live site.

## 🛠️ Tech Stack

- **Markup/Styling:** HTML5, CSS3 (custom properties, grid/flexbox, scroll animations)
- **Scripting:** Vanilla JavaScript (no frameworks)
- **Fonts:** [Syne](https://fonts.google.com/specimen/Syne) & [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts

## 📁 Project Structure

```
Portofolio-Adhiya-main/
├── index.html        # Page structure & content
├── style.css          # All styling, theming, and animations
├── script.js          # Loader, cursor, scroll-reveal, menu logic
├── arya.jpg           # Profile photo
└── *.png / *.jpg      # Tool icons & project screenshots
```

## 💻 Running Locally

No build tools or dependencies required.

```bash
git clone https://github.com/adhiyaaa23/Portofolio-Adhiya.git
cd Portofolio-Adhiya
# then simply open index.html in your browser, or serve it:
python -m http.server 8000
```

Visit `http://localhost:8000` in your browser.

## 🌐 Deployment

This site is static, so it deploys directly via **GitHub Pages**:

1. Go to the repo → **Settings → Pages**
2. Under **Source**, select branch `main` and folder `/ (root)`
3. Save — the site will be live at `https://<username>.github.io/<repo-name>/` within a minute

## 📬 Contact

- **LinkedIn:** [linkedin.com/in/muhammad-adhiya](https://www.linkedin.com/in/muhammad-adhiya)
- **Email:** adhiyamuhammad@student.ub.ac.id

---

© 2026 Muhammad Ad'hiya Hartono. All rights reserved.
