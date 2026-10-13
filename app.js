/**
 * ArtFrame Studio — Real-Time Frame & Poster Generator
 * Khmer (ភាសាខ្មែរ) & Multilingual State Engine & Canvas Renderer
 */

// Bilingual Translation Dictionary
const I18N = {
  km: {
    langBtnText: 'ភាសាខ្មែរ',
    brandSub: 'កម្មវិធីបង្កើតស៊ុមរូបថត និងផ្ទាំងរូបភាពផ្ទាល់',
    studioView: 'ទិដ្ឋភាពស៊ុមទោល',
    wallView: 'ប្រៀបធៀបលើជញ្ជាំង (៤ ទំហំ)',
    reset: 'កំណត់ឡើងវិញ',
    cssCode: 'កូដ CSS',
    download: 'ទាញយករូបភាព',
    presets: 'ទម្រង់គំរូរហ័ស',
    sizeSec: '១. ទំហំស៊ុម និងសមាមាត្រ',
    scaleLabel: 'ពង្រីក/បង្រួមទំហំស៊ុម៖',
    materialSec: '២. ពណ៌ និងសម្ភារៈស៊ុម',
    matOak: 'ឈើអូកធម្មជាតិ',
    matWalnut: 'ឈើក្រម៉ៅ',
    matBlack: 'ខ្មៅទំនើប',
    matWhite: 'ពណ៌សស្អាត',
    matGold: 'មាសប្រណិត',
    matSilver: 'អាលុយមីញ៉ូម',
    customTint: 'ជ្រើសរើសពណ៌ស៊ុមតាមចិត្ត',
    mouldingWidth: 'កម្រាស់ស៊ុម',
    shadowDepth: 'កម្រិតស្រមោល 3D',
    glassReflect: 'ពន្លឺចាំងកញ្ចក់ពិតៗ',
    matSec: '៣. ក្រដាសទ្រាប់ក្នុង (Matboard)',
    matWidth: 'ទំហំគែមក្រដាសទ្រាប់',
    matColor: 'ពណ៌ក្រដាសទ្រាប់',
    typoSec: '៤. ចំណងជើង និងការពិពណ៌នា',
    titleLabel: 'ចំណងជើងធំ',
    descLabel: 'ចំណងជើងរង / ការពិពណ៌នា',
    layoutStyle: 'រចនាប័ទ្ម និងទីតាំងអក្សរ',
    layVintage: 'ផ្ទាំងគំនូរបុរាណ',
    layPlaque: 'ស្លាកសារមន្ទីរ',
    layCorner: 'ជ្រុងស្ថាបត្យកម្ម',
    layHeader: 'ចំណងជើងខាងលើ',
    fontLabel: 'ពុម្ពអក្សរ (Font Family)',
    textColor: 'ពណ៌អក្សរ',
    textSize: 'ទំហំអក្សរ',
    tracking: 'គម្លាតតួអក្សរ',
    decorLine: 'បន្ទាត់ឆ្នូតលម្អសងខាង',
    artworkSec: '៥. រូបភាពសិល្បៈ',
    uploadTitle: 'ចុច ឬអូសទម្លាក់រូបថតមកទីនេះ',
    uploadSub: 'គាំទ្រ PNG, JPG, WEBP, SVG',
    wallSec: '៦. ផ្ទៃជញ្ជាំងខាងក្រោយ',
    wallHeaderTitle: 'ការប្រៀបធៀបទំហំស៊ុមលើជញ្ជាំង',
    wallHeaderSub: 'ប្រៀបធៀបសមាមាត្រទំហំស៊ុមស្ដង់ដារទាំង ៤ ក្នុងពេលដំណាលគ្នា ជាមួយស៊ុម រូបភាព និងអក្សរខ្មែរស្របគ្នា។',
    exportModalTitle: 'ទាញយករូបភាពស៊ុមដែលបានរចនា',
    exportModalDesc: 'ជ្រើសរើសទម្រង់ និងកម្រិតគុណភាពរូបភាព៖',
    exportChoice1Title: 'រូបភាពស៊ុមគុណភាពខ្ពស់ (Framed Artwork)',
    exportChoice1Desc: 'ផ្ទៃខាងក្រោយថ្លា (Transparent) ស៊ុមស្អាតឥតខ្ចោះ (PNG/JPEG)',
    exportChoice2Title: 'រូបភាពស៊ុមព្យួរលើជញ្ជាំងពិត (Wall Mockup)',
    exportChoice2Desc: 'បង្ហាញស៊ុមព្យួរលើជញ្ជាំងជាមួយស្រមោលពន្លឺធម្មជាតិ 3D',
    resLabel: 'កម្រិតភាពច្បាស់៖',
    downloadBtn: 'ទាញយករូបភាព (PNG)',
    cssModalTitle: 'កូដ CSS នៃស៊ុមរូបថត',
    cssModalDesc: 'ចម្លងកូដ CSS នេះដើម្បីយកទៅប្រើប្រាស់ក្នុងគេហទំព័រ ឬកម្មវិធីរបស់អ្នក៖',
    copyCss: 'ចម្លងកូដ CSS',
    done: 'រួចរាល់',
    cancel: 'បោះបង់'
  },
  en: {
    langBtnText: 'English',
    brandSub: 'Real-Time Mockup & Frame Generator',
    studioView: 'Studio View',
    wallView: 'Wall Comparison (4 Sizes)',
    reset: 'Reset',
    cssCode: 'CSS Code',
    download: 'Download Frame',
    presets: 'Curated Presets',
    sizeSec: '1. Frame Size & Aspect Ratio',
    scaleLabel: 'Custom Frame Scale:',
    materialSec: '2. Frame Color & Material',
    matOak: 'Natural Oak',
    matWalnut: 'Dark Walnut',
    matBlack: 'Matte Black',
    matWhite: 'Studio White',
    matGold: 'Brushed Gold',
    matSilver: 'Aluminum',
    customTint: 'Custom Frame Tint',
    mouldingWidth: 'Moulding Width',
    shadowDepth: '3D Wall Shadow Depth',
    glassReflect: 'Glass Glare Reflection',
    matSec: '3. Inner Mat (Passe-partout)',
    matWidth: 'Mat Margin Width',
    matColor: 'Mat Board Color',
    typoSec: '4. Title & Description',
    titleLabel: 'Main Title',
    descLabel: 'Subtitle / Description',
    layoutStyle: 'Typography Style & Layout',
    layVintage: 'Vintage Travel',
    layPlaque: 'Gallery Plaque',
    layCorner: 'Minimal Corner',
    layHeader: 'Top Header',
    fontLabel: 'Font Family',
    textColor: 'Text & Accent Color',
    textSize: 'Title Text Scale',
    tracking: 'Letter Spacing',
    decorLine: 'Decorative Lines',
    artworkSec: '5. Artwork & Image',
    uploadTitle: 'Click or Drag & Drop Photo',
    uploadSub: 'Supports PNG, JPG, WEBP, SVG',
    wallSec: '6. Wall Environment',
    wallHeaderTitle: 'Gallery Wall Size Comparison',
    wallHeaderSub: 'Compare 4 standard aspect ratios simultaneously with synchronized moulding, artwork, and typography.',
    exportModalTitle: 'Export Custom Framed Art',
    exportModalDesc: 'Choose your export format and resolution:',
    exportChoice1Title: 'Framed Artwork (High-Res)',
    exportChoice1Desc: 'Transparent background, clean moulding and mat border (PNG/JPEG)',
    exportChoice2Title: 'Wall Presentation Mockup',
    exportChoice2Desc: 'Framed art hanging on realistic wall with atmospheric shadows',
    resLabel: 'Resolution:',
    downloadBtn: 'Download Image (PNG)',
    cssModalTitle: 'Generated CSS & Frame Styles',
    cssModalDesc: 'Copy this CSS snippet to implement this realistic frame in your own website:',
    copyCss: 'Copy CSS',
    done: 'Done',
    cancel: 'Cancel'
  }
};

// Application State
const state = {
  lang: 'km', // Default to Khmer
  viewMode: 'studio', // 'studio' | 'wall'
  aspectRatio: '1:1',
  aspectW: 1,
  aspectH: 1,
  aspectLabel: '1:1 ការ៉េ (៥០×៥០ ស.ម)',
  scale: 100,
  
  // Moulding & Material
  material: 'natural-oak',
  customFrameColor: '#d8c5aa',
  frameBorderWidth: 18,
  shadowDepth: 65,
  glassReflect: true,

  // Matboard (Passe-partout)
  matEnabled: true,
  matWidth: 26,
  matColor: '#f8f7f4',

  // Typography (Khmer defaults)
  textVisible: true,
  title: 'សៀមរាប',
  desc: 'ព្រះរាជាណាចក្រកម្ពុជា',
  layout: 'vintage-overlay', // 'vintage-overlay' | 'mat-plaque' | 'minimal-corner' | 'top-header'
  fontFamily: "'Koulen', cursive",
  textColor: '#ffffff',
  textSize: 100,
  letterSpacing: 3,
  decorLine: true,

  // Image & Artwork
  artworkSrc: 'assets/poster-siemreap.jpg',
  
  // Environment
  wall: 'gallery-plaster',
  zoom: 100,

  // Export Settings
  exportMode: 'framed-art', // 'framed-art' | 'wall-mockup'
  exportScale: 2
};

// Curated Preset Configurations
const PRESETS = {
  'siemreap': {
    aspectRatio: '1:1',
    aspectW: 1,
    aspectH: 1,
    aspectLabel: '1:1 ការ៉េ (៥០×៥០ ស.ម)',
    material: 'natural-oak',
    customFrameColor: '#d8c5aa',
    frameBorderWidth: 18,
    shadowDepth: 65,
    glassReflect: true,
    matEnabled: true,
    matWidth: 26,
    matColor: '#f8f7f4',
    textVisible: true,
    title: 'សៀមរាប',
    desc: 'ព្រះរាជាណាចក្រកម្ពុជា',
    layout: 'vintage-overlay',
    fontFamily: "'Koulen', cursive",
    textColor: '#ffffff',
    textSize: 100,
    letterSpacing: 3,
    decorLine: true,
    artworkSrc: 'assets/poster-siemreap.jpg',
    wall: 'gallery-plaster'
  },
  'angkor-moul': {
    aspectRatio: '4:5',
    aspectW: 4,
    aspectH: 5,
    aspectLabel: '4:5 បញ្ឈរស្ដង់ដារ (៤០×៥០ ស.ម)',
    material: 'brushed-gold',
    customFrameColor: '#c5a059',
    frameBorderWidth: 24,
    shadowDepth: 75,
    glassReflect: true,
    matEnabled: true,
    matWidth: 32,
    matColor: '#f8f7f4',
    textVisible: true,
    title: 'អង្គរវត្ត',
    desc: 'ខេត្តសៀមរាប • បេតិកភណ្ឌពិភពលោក',
    layout: 'mat-plaque',
    fontFamily: "'Moul', cursive",
    textColor: '#222222',
    textSize: 95,
    letterSpacing: 2,
    decorLine: true,
    artworkSrc: 'assets/poster-siemreap.jpg',
    wall: 'gallery-plaster'
  },
  'fuji': {
    aspectRatio: '3:4',
    aspectW: 3,
    aspectH: 4,
    aspectLabel: '3:4 ផ្ទាំងរូបភាព (៣០×៤០ ស.ម)',
    material: 'walnut',
    customFrameColor: '#3a2214',
    frameBorderWidth: 22,
    shadowDepth: 75,
    glassReflect: true,
    matEnabled: true,
    matWidth: 28,
    matColor: '#eae4d7',
    textVisible: true,
    title: 'ភ្នំហ្វូជី',
    desc: 'ប្រទេសជប៉ុន',
    layout: 'vintage-overlay',
    fontFamily: "'Koulen', cursive",
    textColor: '#ffffff',
    textSize: 105,
    letterSpacing: 3,
    decorLine: true,
    artworkSrc: 'assets/poster-fuji.jpg',
    wall: 'scandi-sage'
  },
  'coastal': {
    aspectRatio: '4:5',
    aspectW: 4,
    aspectH: 5,
    aspectLabel: '4:5 បញ្ឈរស្ដង់ដារ (៤០×៥០ ស.ម)',
    material: 'gallery-white',
    customFrameColor: '#ffffff',
    frameBorderWidth: 20,
    shadowDepth: 55,
    glassReflect: true,
    matEnabled: true,
    matWidth: 32,
    matColor: '#ffffff',
    textVisible: true,
    title: 'ឆ្នេរអាម៉ាល់ហ្វី',
    desc: 'ប្រទេសអ៊ីតាលី',
    layout: 'vintage-overlay',
    fontFamily: "'Kantumruy Pro', sans-serif",
    textColor: '#ffffff',
    textSize: 90,
    letterSpacing: 2,
    decorLine: true,
    artworkSrc: 'assets/poster-coastal.jpg',
    wall: 'warm-terracotta'
  },
  'minimal-black': {
    aspectRatio: '2:3',
    aspectW: 2,
    aspectH: 3,
    aspectLabel: '2:3 រូបថត (៤០×៦០ ស.ម)',
    material: 'matte-black',
    customFrameColor: '#1c1c1e',
    frameBorderWidth: 14,
    shadowDepth: 80,
    glassReflect: false,
    matEnabled: false,
    matWidth: 0,
    matColor: '#f8f7f4',
    textVisible: true,
    title: 'ស្ថាបត្យកម្មទំនើប',
    desc: '១៣.៣៦៣៣° N, ១០៣.៨៥៦៤° E',
    layout: 'minimal-corner',
    fontFamily: "'Kantumruy Pro', sans-serif",
    textColor: '#ffffff',
    textSize: 80,
    letterSpacing: 2,
    decorLine: false,
    artworkSrc: 'assets/poster-fuji.jpg',
    wall: 'dark-charcoal'
  },
  'gold-luxury': {
    aspectRatio: '4:5',
    aspectW: 4,
    aspectH: 5,
    aspectLabel: '4:5 បញ្ឈរស្ដង់ដារ (៤០×៥០ ស.ម)',
    material: 'brushed-gold',
    customFrameColor: '#c49a37',
    frameBorderWidth: 24,
    shadowDepth: 70,
    glassReflect: true,
    matEnabled: true,
    matWidth: 34,
    matColor: '#f8f7f4',
    textVisible: true,
    title: 'រតនសម្បត្តិប្រណិត',
    desc: 'បោះពុម្ពឆ្នាំ ១៩២៨',
    layout: 'mat-plaque',
    fontFamily: "'Moul', cursive",
    textColor: '#222222',
    textSize: 95,
    letterSpacing: 2,
    decorLine: true,
    artworkSrc: 'assets/poster-siemreap.jpg',
    wall: 'gallery-plaster'
  }
};

// DOM Elements
const elements = {
  // Views
  langToggleBtn: document.getElementById('langToggleBtn'),
  langBtnText: document.getElementById('langBtnText'),
  viewStudioBtn: document.getElementById('viewStudioBtn'),
  viewWallBtn: document.getElementById('viewWallBtn'),
  studioStage: document.getElementById('studioStage'),
  wallStage: document.getElementById('wallStage'),
  previewViewport: document.getElementById('previewViewport'),
  
  // Frame Components
  mainFrameContainer: document.getElementById('mainFrameContainer'),
  frameMoulding: document.getElementById('frameMoulding'),
  frameMatboard: document.getElementById('frameMatboard'),
  frameArtWindow: document.getElementById('frameArtWindow'),
  artworkImage: document.getElementById('artworkImage'),
  glassGlare: document.getElementById('glassGlare'),
  
  // Typography
  posterTypography: document.getElementById('posterTypography'),
  posterTitleText: document.getElementById('posterTitleText'),
  posterDescText: document.getElementById('posterDescText'),
  descDividerWrap: document.getElementById('descDividerWrap'),
  matPlaqueContainer: document.getElementById('matPlaqueContainer'),
  matPlaqueTitle: document.getElementById('matPlaqueTitle'),
  matPlaqueDesc: document.getElementById('matPlaqueDesc'),
  studioRatioLabel: document.getElementById('studioRatioLabel'),
  
  // HUD
  ratioDisplayBadge: document.getElementById('ratioDisplayBadge'),
  hudRatioText: document.getElementById('hudRatioText'),
  zoomLevel: document.getElementById('zoomLevel'),
  zoomInBtn: document.getElementById('zoomInBtn'),
  zoomOutBtn: document.getElementById('zoomOutBtn'),
  zoomFitBtn: document.getElementById('zoomFitBtn'),
  
  // Controls
  ratioOptions: document.getElementById('ratioOptions'),
  frameScaleRange: document.getElementById('frameScaleRange'),
  scaleVal: document.getElementById('scaleVal'),
  materialOptions: document.getElementById('materialOptions'),
  customFrameColor: document.getElementById('customFrameColor'),
  frameHexCode: document.getElementById('frameHexCode'),
  frameBorderWidth: document.getElementById('frameBorderWidth'),
  frameBorderWidthVal: document.getElementById('frameBorderWidthVal'),
  shadowDepth: document.getElementById('shadowDepth'),
  shadowDepthVal: document.getElementById('shadowDepthVal'),
  glassReflectToggle: document.getElementById('glassReflectToggle'),
  
  // Matboard Controls
  matToggle: document.getElementById('matToggle'),
  matControlsWrapper: document.getElementById('matControlsWrapper'),
  matWidth: document.getElementById('matWidth'),
  matWidthVal: document.getElementById('matWidthVal'),
  customMatColor: document.getElementById('customMatColor'),
  
  // Text Controls
  textVisibleToggle: document.getElementById('textVisibleToggle'),
  textControlsWrapper: document.getElementById('textControlsWrapper'),
  titleInput: document.getElementById('titleInput'),
  descInput: document.getElementById('descInput'),
  typographyLayoutOptions: document.getElementById('typographyLayoutOptions'),
  fontFamilySelect: document.getElementById('fontFamilySelect'),
  textColorInput: document.getElementById('textColorInput'),
  textHexCode: document.getElementById('textHexCode'),
  textSizeRange: document.getElementById('textSizeRange'),
  textSizeVal: document.getElementById('textSizeVal'),
  letterSpacingRange: document.getElementById('letterSpacingRange'),
  letterSpacingVal: document.getElementById('letterSpacingVal'),
  decorLineToggle: document.getElementById('decorLineToggle'),
  
  // Upload & Wall
  dropArea: document.getElementById('dropArea'),
  fileUploadInput: document.getElementById('fileUploadInput'),
  wallOptions: document.getElementById('wallOptions'),
  
  // Modals & Buttons
  exportBtn: document.getElementById('exportBtn'),
  exportModal: document.getElementById('exportModal'),
  closeExportModal: document.getElementById('closeExportModal'),
  cancelExportBtn: document.getElementById('cancelExportBtn'),
  confirmDownloadBtn: document.getElementById('confirmDownloadBtn'),
  copyCssBtn: document.getElementById('copyCssBtn'),
  cssModal: document.getElementById('cssModal'),
  closeCssModal: document.getElementById('closeCssModal'),
  closeCssModalBtn: document.getElementById('closeCssModalBtn'),
  copySnippetBtn: document.getElementById('copySnippetBtn'),
  generatedCssCode: document.getElementById('generatedCssCode'),
  resetBtn: document.getElementById('resetBtn'),
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toastMessage'),
  exportCanvas: document.getElementById('exportCanvas')
};

/**
 * Initialize
 */
function init() {
  setupEventListeners();
  applyStateToUI();
  updateLiveRender();
}

/**
 * Register Event Listeners
 */
function setupEventListeners() {
  // Language Switcher
  elements.langToggleBtn.addEventListener('click', () => {
    toggleLanguage();
  });

  // Mode Switchers
  elements.viewStudioBtn.addEventListener('click', () => setViewMode('studio'));
  elements.viewWallBtn.addEventListener('click', () => setViewMode('wall'));

  // Quick Presets
  document.querySelectorAll('.preset-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetKey = btn.dataset.preset;
      applyPreset(presetKey);
      document.querySelectorAll('.preset-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Aspect Ratios
  elements.ratioOptions.addEventListener('click', (e) => {
    const btn = e.target.closest('.ratio-btn');
    if (!btn) return;
    
    document.querySelectorAll('.ratio-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    state.aspectRatio = btn.dataset.ratio;
    state.aspectW = parseFloat(btn.dataset.w);
    state.aspectH = parseFloat(btn.dataset.h);
    state.aspectLabel = btn.dataset.label;

    updateLiveRender();
  });

  // Scale Range
  elements.frameScaleRange.addEventListener('input', (e) => {
    state.scale = parseInt(e.target.value, 10);
    elements.scaleVal.textContent = `${state.scale}%`;
    updateLiveRender();
  });

  // Frame Materials
  elements.materialOptions.addEventListener('click', (e) => {
    const card = e.target.closest('.material-card');
    if (!card) return;

    document.querySelectorAll('.material-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    state.material = card.dataset.material;
    updateLiveRender();
  });

  // Custom Frame Color Tint
  elements.customFrameColor.addEventListener('input', (e) => {
    state.customFrameColor = e.target.value;
    state.material = 'custom';
    elements.frameHexCode.textContent = state.customFrameColor.toUpperCase();
    document.querySelectorAll('.material-card').forEach(c => c.classList.remove('active'));
    updateLiveRender();
  });

  // Frame Border Width
  elements.frameBorderWidth.addEventListener('input', (e) => {
    state.frameBorderWidth = parseInt(e.target.value, 10);
    elements.frameBorderWidthVal.textContent = `${state.frameBorderWidth}px`;
    updateLiveRender();
  });

  // Shadow Depth
  elements.shadowDepth.addEventListener('input', (e) => {
    state.shadowDepth = parseInt(e.target.value, 10);
    const isKm = state.lang === 'km';
    const label = state.shadowDepth < 30 ? (isKm ? 'ស្រាល' : 'Soft') : state.shadowDepth < 70 ? (isKm ? 'មធ្យម' : 'Medium') : (isKm ? 'ដិត 3D' : 'Deep 3D');
    elements.shadowDepthVal.textContent = label;
    updateLiveRender();
  });

  // Glass Glare
  elements.glassReflectToggle.addEventListener('change', (e) => {
    state.glassReflect = e.target.checked;
    updateLiveRender();
  });

  // Matboard Toggle & Sliders
  elements.matToggle.addEventListener('change', (e) => {
    state.matEnabled = e.target.checked;
    elements.matControlsWrapper.style.opacity = state.matEnabled ? '1' : '0.4';
    elements.matControlsWrapper.style.pointerEvents = state.matEnabled ? 'auto' : 'none';
    updateLiveRender();
  });

  elements.matWidth.addEventListener('input', (e) => {
    state.matWidth = parseInt(e.target.value, 10);
    elements.matWidthVal.textContent = `${state.matWidth}px`;
    updateLiveRender();
  });

  // Mat Color Presets
  document.querySelectorAll('.mat-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      document.querySelectorAll('.mat-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      state.matColor = dot.dataset.matcolor;
      updateLiveRender();
    });
  });

  elements.customMatColor.addEventListener('input', (e) => {
    state.matColor = e.target.value;
    document.querySelectorAll('.mat-dot').forEach(d => d.classList.remove('active'));
    updateLiveRender();
  });

  // Typography Controls
  elements.textVisibleToggle.addEventListener('change', (e) => {
    state.textVisible = e.target.checked;
    elements.textControlsWrapper.style.opacity = state.textVisible ? '1' : '0.4';
    elements.textControlsWrapper.style.pointerEvents = state.textVisible ? 'auto' : 'none';
    updateLiveRender();
  });

  elements.titleInput.addEventListener('input', (e) => {
    state.title = e.target.value.trim() || ' ';
    updateLiveRender();
  });

  elements.descInput.addEventListener('input', (e) => {
    state.desc = e.target.value.trim() || ' ';
    updateLiveRender();
  });

  elements.typographyLayoutOptions.addEventListener('click', (e) => {
    const btn = e.target.closest('.layout-btn');
    if (!btn) return;
    document.querySelectorAll('.layout-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.layout = btn.dataset.layout;
    updateLiveRender();
  });

  elements.fontFamilySelect.addEventListener('change', (e) => {
    state.fontFamily = e.target.value;
    updateLiveRender();
  });

  elements.textColorInput.addEventListener('input', (e) => {
    state.textColor = e.target.value;
    elements.textHexCode.textContent = state.textColor.toUpperCase();
    updateLiveRender();
  });

  elements.textSizeRange.addEventListener('input', (e) => {
    state.textSize = parseInt(e.target.value, 10);
    elements.textSizeVal.textContent = `${state.textSize}%`;
    updateLiveRender();
  });

  elements.letterSpacingRange.addEventListener('input', (e) => {
    state.letterSpacing = parseInt(e.target.value, 10);
    elements.letterSpacingVal.textContent = `${state.letterSpacing}px`;
    updateLiveRender();
  });

  elements.decorLineToggle.addEventListener('change', (e) => {
    state.decorLine = e.target.checked;
    updateLiveRender();
  });

  // Artwork Selection
  document.querySelectorAll('.art-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      document.querySelectorAll('.art-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      state.artworkSrc = thumb.dataset.art;
      elements.artworkImage.src = state.artworkSrc;
      updateLiveRender();
    });
  });

  // File Upload & Drag-and-Drop
  elements.dropArea.addEventListener('click', () => {
    elements.fileUploadInput.click();
  });

  elements.fileUploadInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleImageFile(file);
  });

  ['dragenter', 'dragover'].forEach(name => {
    elements.dropArea.addEventListener(name, (e) => {
      e.preventDefault();
      elements.dropArea.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(name => {
    elements.dropArea.addEventListener(name, (e) => {
      e.preventDefault();
      elements.dropArea.classList.remove('dragover');
    });
  });

  elements.dropArea.addEventListener('drop', (e) => {
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  });

  // Wall Environment
  elements.wallOptions.addEventListener('click', (e) => {
    const btn = e.target.closest('.wall-btn');
    if (!btn) return;
    document.querySelectorAll('.wall-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.wall = btn.dataset.wall;
    updateWallBackground();
  });

  // Zoom Controls
  elements.zoomInBtn.addEventListener('click', () => adjustZoom(10));
  elements.zoomOutBtn.addEventListener('click', () => adjustZoom(-10));
  elements.zoomFitBtn.addEventListener('click', () => resetZoom());

  // Export Modal Actions
  elements.exportBtn.addEventListener('click', () => {
    elements.exportModal.classList.remove('hidden');
  });

  elements.closeExportModal.addEventListener('click', () => {
    elements.exportModal.classList.add('hidden');
  });

  elements.cancelExportBtn.addEventListener('click', () => {
    elements.exportModal.classList.add('hidden');
  });

  document.querySelectorAll('.export-choice').forEach(choice => {
    choice.addEventListener('click', () => {
      document.querySelectorAll('.export-choice').forEach(c => c.classList.remove('active'));
      choice.classList.add('active');
      state.exportMode = choice.dataset.exportMode;
    });
  });

  document.querySelectorAll('.res-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.res-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.exportScale = parseInt(btn.dataset.scale, 10);
    });
  });

  elements.confirmDownloadBtn.addEventListener('click', () => {
    performExport();
    elements.exportModal.classList.add('hidden');
  });

  // CSS Modal Actions
  elements.copyCssBtn.addEventListener('click', () => {
    showCssSnippetModal();
  });

  elements.closeCssModal.addEventListener('click', () => {
    elements.cssModal.classList.add('hidden');
  });

  elements.closeCssModalBtn.addEventListener('click', () => {
    elements.cssModal.classList.add('hidden');
  });

  elements.copySnippetBtn.addEventListener('click', () => {
    const msg = state.lang === 'km' ? 'បានចម្លងកូដ CSS ទៅក្ដារតម្បៀតខ្ទាស់!' : 'CSS copied to clipboard!';
    copyToClipboard(elements.generatedCssCode.textContent, msg);
  });

  // Reset Button
  elements.resetBtn.addEventListener('click', () => {
    applyPreset('siemreap');
    showToast(state.lang === 'km' ? 'បានកំណត់ឡើងវិញនូវទម្រង់ដើម' : 'Reset to default settings');
  });
}

/**
 * Toggle between Khmer and English
 */
function toggleLanguage() {
  state.lang = state.lang === 'km' ? 'en' : 'km';
  const isKm = state.lang === 'km';
  
  // Update flag & text
  elements.langBtnText.textContent = isKm ? 'ភាសាខ្មែរ' : 'English';
  elements.langToggleBtn.querySelector('.flag-icon').textContent = isKm ? '🇰🇭' : '🇬🇧';
  document.body.className = isKm ? 'theme-dark lang-km' : 'theme-dark lang-en';

  const t = I18N[state.lang];

  // Update texts
  setText('i18nBrandSub', t.brandSub);
  setText('i18nStudioView', t.studioView);
  setText('i18nWallView', t.wallView);
  setText('i18nReset', t.reset);
  setText('i18nCssCode', t.cssCode);
  setText('i18nDownload', t.download);
  setText('i18nPresets', t.presets);
  setText('i18nSizeSec', t.sizeSec);
  setText('i18nScaleLabel', `${t.scaleLabel} ${state.scale}%`);
  setText('i18nMaterialSec', t.materialSec);
  setText('matOakTitle', t.matOak);
  setText('matWalnutTitle', t.matWalnut);
  setText('matBlackTitle', t.matBlack);
  setText('matWhiteTitle', t.matWhite);
  setText('matGoldTitle', t.matGold);
  setText('matSilverTitle', t.matSilver);
  setText('i18nCustomTint', t.customTint);
  setText('i18nMouldingWidth', t.mouldingWidth);
  setText('i18nShadowDepth', t.shadowDepth);
  setText('i18nGlassReflect', t.glassReflect);
  setText('i18nMatSec', t.matSec);
  setText('i18nMatWidth', t.matWidth);
  setText('i18nMatColor', t.matColor);
  setText('i18nTypoSec', t.typoSec);
  setText('i18nTitleLabel', t.titleLabel);
  setText('i18nDescLabel', t.descLabel);
  setText('i18nLayoutStyle', t.layoutStyle);
  setText('layVintage', t.layVintage);
  setText('layPlaque', t.layPlaque);
  setText('layCorner', t.layCorner);
  setText('layHeader', t.layHeader);
  setText('i18nFontLabel', t.fontLabel);
  setText('i18nTextColor', t.textColor);
  setText('i18nTextSize', t.textSize);
  setText('i18nTracking', t.tracking);
  setText('i18nDecorLine', t.decorLine);
  setText('i18nArtworkSec', t.artworkSec);
  setText('i18nUploadTitle', t.uploadTitle);
  setText('i18nUploadSub', t.uploadSub);
  setText('i18nWallSec', t.wallSec);
  setText('i18nWallHeaderTitle', t.wallHeaderTitle);
  setText('i18nWallHeaderSub', t.wallHeaderSub);
  setText('i18nExportModalTitle', t.exportModalTitle);
  setText('i18nExportModalDesc', t.exportModalDesc);
  setText('i18nExportChoice1Title', t.exportChoice1Title);
  setText('i18nExportChoice1Desc', t.exportChoice1Desc);
  setText('i18nExportChoice2Title', t.exportChoice2Title);
  setText('i18nExportChoice2Desc', t.exportChoice2Desc);
  setText('i18nResLabel', t.resLabel);
  setText('downloadBtnText', t.downloadBtn);
  setText('i18nCssModalTitle', t.cssModalTitle);
  setText('i18nCssModalDesc', t.cssModalDesc);
  setText('copySnippetBtn', t.copyCss);
  setText('closeCssModalBtn', t.done);
  setText('cancelExportBtn', t.cancel);

  showToast(isKm ? 'បានប្តូរទៅភាសាខ្មែរ 🇰🇭' : 'Switched to English 🇬🇧');
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/**
 * Handle image file upload
 */
function handleImageFile(file) {
  if (!file.type.startsWith('image/')) {
    showToast(state.lang === 'km' ? 'សូមជ្រើសរើសឯកសាររូបភាពត្រឹមត្រូវ' : 'Please select a valid image file');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    state.artworkSrc = e.target.result;
    elements.artworkImage.src = state.artworkSrc;
    document.querySelectorAll('.art-thumb').forEach(t => t.classList.remove('active'));
    updateLiveRender();
    showToast(state.lang === 'km' ? 'បានបញ្ចូលរូបភាពជោគជ័យ!' : 'Custom artwork loaded!');
  };
  reader.readAsDataURL(file);
}

/**
 * Switch view mode: Studio vs Gallery Wall
 */
function setViewMode(mode) {
  state.viewMode = mode;
  if (mode === 'studio') {
    elements.viewStudioBtn.classList.add('active');
    elements.viewWallBtn.classList.remove('active');
    elements.studioStage.classList.remove('hidden');
    elements.wallStage.classList.add('hidden');
  } else {
    elements.viewStudioBtn.classList.remove('active');
    elements.viewWallBtn.classList.add('active');
    elements.studioStage.classList.add('hidden');
    elements.wallStage.classList.remove('hidden');
    syncGalleryWall();
  }
}

/**
 * Update the 4 frames in Gallery Wall comparison view
 */
function syncGalleryWall() {
  const wallFrames = [
    { el: document.getElementById('wallFrame1'), ratio: '1:1' },
    { el: document.getElementById('wallFrame2'), ratio: '9:16' },
    { el: document.getElementById('wallFrame3'), ratio: '16:9' },
    { el: document.getElementById('wallFrame4'), ratio: '4:5' }
  ];

  wallFrames.forEach(({ el }) => {
    if (!el) return;
    
    // Moulding style
    const moulding = el.querySelector('.wall-moulding');
    moulding.className = 'wall-moulding';
    if (state.material !== 'custom') {
      moulding.classList.add(`mat-${state.material}`);
    } else {
      moulding.style.backgroundColor = state.customFrameColor;
    }

    // Matboard
    const mat = el.querySelector('.wall-mat');
    mat.style.backgroundColor = state.matEnabled ? state.matColor : 'transparent';
    mat.style.padding = state.matEnabled ? '16px' : '0px';

    // Image
    const img = el.querySelector('.wall-art-img');
    img.src = state.artworkSrc;

    // Glass glare
    const glass = el.querySelector('.wall-glass');
    glass.style.display = state.glassReflect ? 'block' : 'none';

    // Typography
    const typo = el.querySelector('.wall-typo');
    if (!state.textVisible) {
      typo.style.display = 'none';
    } else {
      typo.style.display = 'flex';
      const titleSpan = typo.querySelector('.w-title');
      const descSpan = typo.querySelector('.w-desc');
      titleSpan.textContent = state.title;
      descSpan.textContent = state.desc;
      titleSpan.style.fontFamily = state.fontFamily;
      titleSpan.style.color = state.textColor;
      descSpan.style.color = state.textColor;
    }
  });
}

/**
 * Apply Preset
 */
function applyPreset(presetKey) {
  const p = PRESETS[presetKey];
  if (!p) return;

  Object.assign(state, p);
  applyStateToUI();
  updateLiveRender();
}

/**
 * Sync UI controls to state
 */
function applyStateToUI() {
  // Ratio
  document.querySelectorAll('.ratio-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.ratio === state.aspectRatio);
  });
  elements.ratioDisplayBadge.textContent = state.aspectLabel;
  elements.hudRatioText.textContent = state.aspectLabel;
  elements.studioRatioLabel.textContent = state.aspectRatio;

  // Materials
  document.querySelectorAll('.material-card').forEach(card => {
    card.classList.toggle('active', card.dataset.material === state.material);
  });
  elements.customFrameColor.value = state.customFrameColor;
  elements.frameHexCode.textContent = state.customFrameColor.toUpperCase();
  elements.frameBorderWidth.value = state.frameBorderWidth;
  elements.frameBorderWidthVal.textContent = `${state.frameBorderWidth}px`;
  elements.shadowDepth.value = state.shadowDepth;
  elements.glassReflectToggle.checked = state.glassReflect;

  // Mat
  elements.matToggle.checked = state.matEnabled;
  elements.matWidth.value = state.matWidth;
  elements.matWidthVal.textContent = `${state.matWidth}px`;

  // Typography
  elements.textVisibleToggle.checked = state.textVisible;
  elements.titleInput.value = state.title;
  elements.descInput.value = state.desc;
  elements.fontFamilySelect.value = state.fontFamily;
  elements.textColorInput.value = state.textColor;
  elements.textHexCode.textContent = state.textColor.toUpperCase();
  elements.textSizeRange.value = state.textSize;
  elements.textSizeVal.textContent = `${state.textSize}%`;
  elements.letterSpacingRange.value = state.letterSpacing;
  elements.letterSpacingVal.textContent = `${state.letterSpacing}px`;
  elements.decorLineToggle.checked = state.decorLine;

  document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.layout === state.layout);
  });

  // Wall
  document.querySelectorAll('.wall-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.wall === state.wall);
  });
  updateWallBackground();

  // Artwork
  elements.artworkImage.src = state.artworkSrc;
}

/**
 * Real-time Live Render Update
 */
function updateLiveRender() {
  const root = document.documentElement;

  // 1. Update CSS Variables
  root.style.setProperty('--frame-border-width', `${state.frameBorderWidth}px`);
  root.style.setProperty('--frame-shadow-depth', state.shadowDepth);
  root.style.setProperty('--mat-width', `${state.matEnabled ? state.matWidth : 0}px`);
  root.style.setProperty('--mat-color', state.matColor);
  root.style.setProperty('--frame-base-color', state.customFrameColor);
  root.style.setProperty('--text-color', state.textColor);
  root.style.setProperty('--font-family', state.fontFamily);
  root.style.setProperty('--font-scale', state.textSize / 100);
  root.style.setProperty('--letter-spacing', `${state.letterSpacing}px`);

  // 2. Aspect Ratio & Dimensions Calculation
  const baseDim = 460 * (state.scale / 100);
  let artW = baseDim;
  let artH = baseDim;

  if (state.aspectW >= state.aspectH) {
    artW = baseDim;
    artH = Math.round(baseDim * (state.aspectH / state.aspectW));
  } else {
    artH = baseDim;
    artW = Math.round(baseDim * (state.aspectW / state.aspectH));
  }

  elements.frameArtWindow.style.width = `${artW}px`;
  elements.frameArtWindow.style.height = `${artH}px`;

  // Badges & Labels
  elements.ratioDisplayBadge.textContent = state.aspectLabel;
  elements.hudRatioText.textContent = state.aspectLabel;
  elements.studioRatioLabel.textContent = state.aspectRatio;

  // 3. Moulding Material Class
  elements.frameMoulding.className = 'moulding-outer';
  if (state.material !== 'custom') {
    elements.frameMoulding.classList.add(`mat-${state.material}`);
  } else {
    elements.frameMoulding.style.backgroundColor = state.customFrameColor;
  }

  // 4. Matboard visibility
  elements.frameMatboard.classList.toggle('no-mat', !state.matEnabled);

  // 5. Glass Reflection
  elements.glassGlare.classList.toggle('hidden', !state.glassReflect);

  // 6. Typography rendering
  if (!state.textVisible) {
    elements.posterTypography.classList.add('hidden');
    elements.matPlaqueContainer.classList.remove('active');
  } else {
    elements.posterTitleText.textContent = state.title;
    elements.posterDescText.textContent = state.desc;

    // Layout variations
    if (state.layout === 'mat-plaque' && state.matEnabled) {
      elements.posterTypography.classList.add('hidden');
      elements.matPlaqueContainer.classList.add('active');
      elements.matPlaqueTitle.textContent = state.title;
      elements.matPlaqueDesc.textContent = state.desc;
      elements.matPlaqueTitle.style.fontFamily = state.fontFamily;
      elements.matPlaqueTitle.style.letterSpacing = `${state.letterSpacing}px`;
    } else {
      elements.matPlaqueContainer.classList.remove('active');
      elements.posterTypography.classList.remove('hidden');
      elements.posterTypography.className = `poster-typography layout-${state.layout}`;
      
      // Divider lines
      const leftLine = elements.descDividerWrap.querySelector('.left-line');
      const rightLine = elements.descDividerWrap.querySelector('.right-line');
      if (leftLine && rightLine) {
        leftLine.classList.toggle('hidden', !state.decorLine);
        rightLine.classList.toggle('hidden', !state.decorLine);
      }
    }
  }

  // If in wall view, synchronize gallery wall frames as well
  if (state.viewMode === 'wall') {
    syncGalleryWall();
  }
}

/**
 * Wall background switcher
 */
function updateWallBackground() {
  elements.previewViewport.className = `preview-viewport wall-${state.wall}`;
}

/**
 * Zoom controls
 */
function adjustZoom(delta) {
  state.zoom = Math.max(50, Math.min(180, state.zoom + delta));
  elements.zoomLevel.textContent = `${state.zoom}%`;
  elements.studioStage.style.transform = `scale(${state.zoom / 100})`;
}

function resetZoom() {
  state.zoom = 100;
  elements.zoomLevel.textContent = '100%';
  elements.studioStage.style.transform = 'scale(1)';
}

/**
 * High-Resolution HTML5 Canvas Rendering Engine with Khmer Font Support
 */
function performExport() {
  const canvas = elements.exportCanvas;
  const ctx = canvas.getContext('2d');
  const dpr = state.exportScale || 2;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    // Determine canvas dimensions
    const baseW = 600;
    const baseH = Math.round(600 * (state.aspectH / state.aspectW));
    
    const matPad = state.matEnabled ? Math.round(state.matWidth * 1.5) : 0;
    const plaqueH = (state.layout === 'mat-plaque' && state.matEnabled && state.textVisible) ? 46 : 0;
    const framePad = Math.round(state.frameBorderWidth * 1.5);

    let canvasW, canvasH, startX, startY;

    if (state.exportMode === 'wall-mockup') {
      canvasW = (baseW + (matPad * 2) + (framePad * 2) + 200) * dpr;
      canvasH = (baseH + (matPad * 2) + (framePad * 2) + plaqueH + 240) * dpr;
      startX = 100 * dpr;
      startY = 90 * dpr;
    } else {
      canvasW = (baseW + (matPad * 2) + (framePad * 2)) * dpr;
      canvasH = (baseH + (matPad * 2) + (framePad * 2) + plaqueH) * dpr;
      startX = 0;
      startY = 0;
    }

    canvas.width = canvasW;
    canvas.height = canvasH;

    // 1. Draw Wall Background if wall-mockup mode
    if (state.exportMode === 'wall-mockup') {
      drawWallBackgroundOnCanvas(ctx, canvasW, canvasH);
    }

    const frameX = startX;
    const frameY = startY;
    const frameW = (baseW + (matPad * 2) + (framePad * 2)) * dpr;
    const frameH = (baseH + (matPad * 2) + (framePad * 2) + plaqueH) * dpr;

    // 2. Draw 3D Drop Shadow
    if (state.exportMode === 'wall-mockup') {
      ctx.save();
      ctx.shadowColor = `rgba(0, 0, 0, ${state.shadowDepth * 0.005})`;
      ctx.shadowBlur = 45 * dpr;
      ctx.shadowOffsetY = 24 * dpr;
      ctx.fillStyle = '#000000';
      ctx.fillRect(frameX, frameY, frameW, frameH);
      ctx.restore();
    }

    // 3. Draw Outer Moulding (Wood / Metal / Color)
    drawMouldingOnCanvas(ctx, frameX, frameY, frameW, frameH, framePad * dpr);

    // 4. Draw Inner Matboard
    const matX = frameX + (framePad * dpr);
    const matY = frameY + (framePad * dpr);
    const matW = frameW - (framePad * 2 * dpr);
    const matH = frameH - (framePad * 2 * dpr);

    ctx.fillStyle = state.matEnabled ? state.matColor : '#000000';
    ctx.fillRect(matX, matY, matW, matH);

    // Inner matboard bevel shadow
    if (state.matEnabled) {
      ctx.save();
      ctx.strokeStyle = 'rgba(0,0,0,0.18)';
      ctx.lineWidth = 2 * dpr;
      ctx.strokeRect(matX, matY, matW, matH);
      ctx.restore();
    }

    // 5. Draw Artwork Image Window
    const artX = matX + (matPad * dpr);
    const artY = matY + (matPad * dpr);
    const artDrawW = baseW * dpr;
    const artDrawH = baseH * dpr;

    ctx.save();
    ctx.beginPath();
    ctx.rect(artX, artY, artDrawW, artDrawH);
    ctx.clip();

    // Cover fit image
    drawCoverImage(ctx, img, artX, artY, artDrawW, artDrawH);

    // 6. Draw Glass Specular Glare
    if (state.glassReflect) {
      const grad = ctx.createLinearGradient(artX, artY, artX + artDrawW, artY + artDrawH);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
      grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.07)');
      grad.addColorStop(0.5, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(artX, artY, artDrawW, artDrawH);
    }

    // 7. Draw Typography overlay if enabled and inside artwork
    if (state.textVisible && state.layout !== 'mat-plaque') {
      drawPosterTypographyOnCanvas(ctx, artX, artY, artDrawW, artDrawH, dpr);
    }

    ctx.restore(); // Restore clip

    // 8. Draw Mat Plaque if layout is 'mat-plaque'
    if (state.textVisible && state.layout === 'mat-plaque' && state.matEnabled) {
      const plaqueY = artY + artDrawH + (20 * dpr);
      ctx.save();
      ctx.textAlign = 'center';
      ctx.fillStyle = '#222222';
      ctx.font = `bold ${18 * (state.textSize / 100) * dpr}px ${state.fontFamily}`;
      ctx.fillText(state.title, matX + (matW / 2), plaqueY);

      ctx.fillStyle = '#666666';
      ctx.font = `600 ${9 * (state.textSize / 100) * dpr}px 'Kantumruy Pro', Montserrat, sans-serif`;
      ctx.fillText(state.desc, matX + (matW / 2), plaqueY + (16 * dpr));
      ctx.restore();
    }

    // Trigger Download
    const filename = `artframe-${state.title.replace(/\s+/g, '-')}-${state.aspectRatio.replace(':', 'x')}.png`;
    downloadCanvas(canvas, filename);
    const msg = state.lang === 'km' ? `បានទាញយក "${filename}" ដោយជោគជ័យ!` : `Exported "${filename}" successfully!`;
    showToast(msg);
  };

  img.src = state.artworkSrc;
}

/**
 * Draw frame moulding onto canvas with realistic shading
 */
function drawMouldingOnCanvas(ctx, x, y, w, h, borderPx) {
  ctx.save();
  if (state.material === 'natural-oak') {
    const grad = ctx.createLinearGradient(x, y, x + w, y + h);
    grad.addColorStop(0, '#e2cbb0');
    grad.addColorStop(0.3, '#cfb088');
    grad.addColorStop(0.7, '#d9be9e');
    grad.addColorStop(1, '#b8976f');
    ctx.fillStyle = grad;
  } else if (state.material === 'walnut') {
    const grad = ctx.createLinearGradient(x, y, x + w, y + h);
    grad.addColorStop(0, '#4a2f1d');
    grad.addColorStop(0.5, '#351f11');
    grad.addColorStop(1, '#261409');
    ctx.fillStyle = grad;
  } else if (state.material === 'matte-black') {
    ctx.fillStyle = '#17181a';
  } else if (state.material === 'gallery-white') {
    ctx.fillStyle = '#f8f8f8';
  } else if (state.material === 'brushed-gold') {
    const grad = ctx.createLinearGradient(x, y, x + w, y + h);
    grad.addColorStop(0, '#fae298');
    grad.addColorStop(0.4, '#c8a347');
    grad.addColorStop(0.7, '#edd385');
    grad.addColorStop(1, '#b58f33');
    ctx.fillStyle = grad;
  } else if (state.material === 'raw-silver') {
    const grad = ctx.createLinearGradient(x, y, x + w, y + h);
    grad.addColorStop(0, '#dfe3e7');
    grad.addColorStop(0.5, '#b0b4b8');
    grad.addColorStop(1, '#9ea2a6');
    ctx.fillStyle = grad;
  } else {
    ctx.fillStyle = state.customFrameColor;
  }

  ctx.fillRect(x, y, w, h);

  // Moulding bevel borders
  ctx.lineWidth = borderPx * 0.15;
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.strokeRect(x + 1, y + 1, w - 2, h - 2);

  ctx.strokeStyle = 'rgba(0, 0, 0, 0.45)';
  ctx.strokeRect(x + borderPx, y + borderPx, w - (borderPx * 2), h - (borderPx * 2));
  ctx.restore();
}

/**
 * Cover-fit drawing helper for canvas
 */
function drawCoverImage(ctx, img, dx, dy, dw, dh) {
  const imgRatio = img.width / img.height;
  const targetRatio = dw / dh;
  let sx, sy, sWidth, sHeight;

  if (imgRatio > targetRatio) {
    sHeight = img.height;
    sWidth = img.height * targetRatio;
    sx = (img.width - sWidth) / 2;
    sy = 0;
  } else {
    sWidth = img.width;
    sHeight = img.width / targetRatio;
    sx = 0;
    sy = (img.height - sHeight) / 2;
  }

  ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dw, dh);
}

/**
 * Draw typography on canvas
 */
function drawPosterTypographyOnCanvas(ctx, x, y, w, h, dpr) {
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const titleScale = (state.textSize / 100);
  const titleFontSize = Math.round(38 * titleScale * dpr);
  const descFontSize = Math.round(12 * titleScale * dpr);

  let posY = y + h * 0.85;

  if (state.layout === 'top-header') {
    posY = y + h * 0.13;
  }

  // Title shadow
  ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
  ctx.shadowBlur = 12 * dpr;
  ctx.shadowOffsetY = 2 * dpr;

  // Title Text
  ctx.fillStyle = state.textColor;
  ctx.font = `bold ${titleFontSize}px ${state.fontFamily}`;
  ctx.fillText(state.title, x + (w / 2), posY);

  // Subtitle & Lines
  const descY = posY + (24 * dpr);
  ctx.font = `600 ${descFontSize}px 'Kantumruy Pro', Montserrat, sans-serif`;
  ctx.fillText(state.desc, x + (w / 2), descY);

  if (state.decorLine) {
    ctx.lineWidth = 1.5 * dpr;
    ctx.strokeStyle = state.textColor;
    const textWidth = ctx.measureText(state.desc).width;
    const lineLen = 30 * dpr;
    const gap = 12 * dpr;

    // Left line
    ctx.beginPath();
    ctx.moveTo(x + (w / 2) - (textWidth / 2) - gap - lineLen, descY);
    ctx.lineTo(x + (w / 2) - (textWidth / 2) - gap, descY);
    ctx.stroke();

    // Right line
    ctx.beginPath();
    ctx.moveTo(x + (w / 2) + (textWidth / 2) + gap, descY);
    ctx.lineTo(x + (w / 2) + (textWidth / 2) + gap + lineLen, descY);
    ctx.stroke();
  }

  ctx.restore();
}

/**
 * Draw wall environment background on canvas
 */
function drawWallBackgroundOnCanvas(ctx, w, h) {
  if (state.wall === 'scandi-sage') {
    ctx.fillStyle = '#7b8e7e';
  } else if (state.wall === 'dark-charcoal') {
    ctx.fillStyle = '#212328';
  } else if (state.wall === 'warm-terracotta') {
    ctx.fillStyle = '#a8624a';
  } else if (state.wall === 'minimal-white') {
    ctx.fillStyle = '#f7f7f8';
  } else {
    // Gallery plaster
    ctx.fillStyle = '#ebe7df';
  }
  ctx.fillRect(0, 0, w, h);
}

/**
 * Trigger download from canvas
 */
function downloadCanvas(canvas, filename) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Show CSS Snippet Modal
 */
function showCssSnippetModal() {
  const css = `/* កូដ CSS នៃស៊ុមរូបថត — ArtFrame Studio */
.framed-picture {
  box-sizing: border-box;
  aspect-ratio: ${state.aspectW} / ${state.aspectH};
  padding: ${state.frameBorderWidth}px;
  background-color: ${state.customFrameColor};
  border-radius: 2px;
  box-shadow: 
    0 ${Math.round(state.shadowDepth * 0.3)}px ${Math.round(state.shadowDepth * 0.5)}px rgba(0, 0, 0, ${ (state.shadowDepth * 0.005).toFixed(2) }),
    inset 0 1px 2px rgba(255, 255, 255, 0.4),
    inset -1px -1px 2px rgba(0, 0, 0, 0.4);
}

.matboard {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: ${state.matEnabled ? state.matWidth : 0}px;
  background-color: ${state.matEnabled ? state.matColor : 'transparent'};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25);
}

.art-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.35);
}`;

  elements.generatedCssCode.textContent = css;
  elements.cssModal.classList.remove('hidden');
}

/**
 * Clipboard helper
 */
function copyToClipboard(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg || 'បានចម្លង!');
  }).catch(() => {
    showToast('បរាជ័យក្នុងការចម្លង');
  });
}

/**
 * Toast notifications
 */
let toastTimer = null;
function showToast(msg) {
  elements.toastMessage.textContent = msg;
  elements.toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.add('hidden');
  }, 2400);
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', init);
