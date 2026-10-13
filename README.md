# ArtFrame Studio 🎨🖼️
### កម្មវិធីបង្កើតស៊ុមរូបថត និងផ្ទាំងរូបភាពផ្ទាល់ (Real-Time Custom Frame & Poster Generator)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Khmer](https://img.shields.io/badge/Language-Khmer%20%26%20English-gold.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**ArtFrame Studio** គឺជាគេហទំព័រសម្រាប់រចនា បង្កើត និងសាកល្បងស៊ុមរូបថត (Picture Frames) និងផ្ទាំងរូបភាពសិល្បៈ (Posters) ក្នុងពេលជាក់ស្តែង (Real-Time) ជាមួយការគាំទ្រពុម្ពអក្សរខ្មែរយ៉ាងពេញលេញ។

---

## ✨ លក្ខណៈពិសេសចម្បង (Key Features)

- 📐 **ជ្រើសរើសទំហំ និងសមាមាត្ររូបភាព (Aspect Ratios)**:
  - `1:1` ការ៉េ (50×50 cm)
  - `4:5` បញ្ឈរស្ដង់ដារ (40×50 cm)
  - `3:4` ផ្ទាំងរូបភាព (30×40 cm)
  - `2:3` រូបថត (40×60 cm)
  - `9:16` បញ្ឈរវែង (36×64 cm)
  - `16:9` ផ្តេកភាពយន្ត (64×36 cm)
  - របាររំកិលពង្រីក/បង្រួមទំហំស៊ុម (70% – 130%)
- 🖼️ **សម្ភារៈ និងពណ៌ស៊ុម (Frame Materials & Colours)**:
  - ឈើអូកធម្មជាតិ (Natural Oak)
  - ឈើវ៉ាល់ណាត់ក្រម៉ៅ (Dark Walnut)
  - ពណ៌ខ្មៅទំនើប (Matte Black)
  - ពណ៌សស្អាត (Studio White)
  - ពណ៌មាសប្រណិត (Brushed Gold)
  - អាលុយមីញ៉ូម (Anodized Aluminum)
  - ឧបករណ៍ជ្រើសរើសពណ៌តាមចិត្ត (Custom Color Picker)
  - កម្រាស់ស៊ុម និងស្រមោល 3D Depth
  - ពន្លឺចាំងកញ្ចក់ពិតៗ (Realistic Glass Glare)
- 📜 **ក្រដាសទ្រាប់ក្នុង (Inner Matboard / Passe-Partout)**:
  - បើក/បិទក្រដាសទ្រាប់
  - កែសម្រួលទំហំគែមក្រដាសទ្រាប់
  - ពណ៌ក្រែម, សសុទ្ធ, សរសៃអំបោះ, និងធ្យូងខ្មៅ
- ✍️ **ចំណងជើង និងការពិពណ៌នាជាភាសាខ្មែរ (Khmer Typography)**:
  - គាំទ្រពុម្ពអក្សរខ្មែរល្បីៗ: **Koulen (គូលែន)**, **Moul (អក្សរមូល)**, **Kantumruy Pro (កន្ទុំរុយ)**, **Battambang (បាត់ដំបង)**, **Siemreap (សៀមរាប)**
  - រចនាប័ទ្មទីតាំង: ផ្ទាំងគំនូរបុរាណ (Vintage Overlay), ស្លាកសារមន្ទីរ (Mat Plaque), ជ្រុងស្ថាបត្យកម្ម, និងចំណងជើងខាងលើ
- 🏛️ **ប្រៀបធៀបលើជញ្ជាំង ៤ ទំហំ (Gallery Wall Comparison)**:
  - បង្ហាញស៊ុម ៤ ទំហំដំណាលគ្នាលើជញ្ជាំង (`1:1`, `9:16`, `16:9`, `4:5`) ដូចក្នុងរូបថតគំរូ។
- 📥 **ទាញយករូបភាពកម្រិតច្បាស់ខ្ពស់ (High-Res Export)**:
  - HTML5 Canvas Export កម្រិត 1x, 2x, និង 3x Print Resolution
  - ទាញយកជារូបភាព PNG (ស៊ុមថ្លា ឬរូបភាពព្យួរលើជញ្ជាំង Mockup)
  - ចម្លងកូដ CSS ដោយចុចតែម្តង (1-Click Copy CSS)

---

## 🚀 ការដាក់ឱ្យដំណើរការលើ Vercel (Vercel Deployment)

គេហទំព័រនេះត្រូវបានបង្កើតឡើងដោយប្រើប្រាស់ Pure HTML, CSS, និង JavaScript គ្មាន dependency ស្មុគស្មាញ ដែលធ្វើឱ្យវាដំណើរការលឿនបំផុតនៅលើ Vercel!

### វិធីទី១៖ ភ្ជាប់តាមរយៈ GitHub (ណែនាំបំផុត)
1. ចូលទៅកាន់ [vercel.com](https://vercel.com)
2. ចុចលើ **"Add New Project"**
3. ជ្រើសរើស repository **`vannat-24/Frame`**
4. ចុច **"Deploy"** — Vercel នឹងបង្កើតគេហទំព័រផ្ទាល់ខ្លួនជូនអ្នកភ្លាមៗ!

### វិធីទី២៖ ប្រើ Vercel CLI
```bash
npx vercel
```

---

## 💻 ដំណើរការលើម៉ាស៊ីនផ្ទាល់ (Local Development)

```bash
# ដំណើរការជាមួយ serve ឬ static server
npx serve .
```
បើក `http://localhost:3000` ឬ `http://localhost:5173` ក្នុងកម្មវិធីរុករក (Browser) របស់អ្នក។

---

## 📄 អាជ្ញាប័ណ្ណ (License)
MIT License © 2026 vannat-24
