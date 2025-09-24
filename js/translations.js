/*
 * ========================================================================================
 * MULTILINGUAL TRANSLATION SYSTEM
 * ========================================================================================
 * 
 * Description: Comprehensive translation system supporting 10+ languages with automatic
 *              browser language detection and RTL (Right-to-Left) text support.
 * 
 * Supported Languages:
 * - English (en) - Default language
 * - Arabic (ar) - RTL support
 * - Turkish (tr)
 * - German (de)
 * - French (fr)
 * - Spanish (es)
 * - Italian (it)
 * - Portuguese (pt)
 * - Chinese (zh)
 * - Japanese (ja)
 * 
 * Features:
 * - Automatic language detection based on browser settings
 * - Dynamic language switching with live UI updates
 * - RTL text direction support for Arabic languages
 * - Fallback to English for unsupported languages
 * - Consistent translation keys across all languages
 * - Special handling for technical terms and console logs
 * 
 * Author: Password Generator Pro Team
 * Version: 2.0
 * Last Updated: 2025
 * ========================================================================================
 */

/**
 * Main translations object containing all supported languages
 * Each language object contains key-value pairs for UI text elements
 */
const translations = {
    
    // ========================================================================================
    // ENGLISH (DEFAULT LANGUAGE)
    // ========================================================================================
    'en': {
        // Main Interface Labels
        title: '🔐 Password Generator Pro',
        generatedPassword: 'Generated Password',
        clickGenerate: 'Click Generate',
        clickToCopy: 'click to copy',
        copied: 'copied ✓',
        clickGenerateButton: 'CLICK GENERATE',
        
        // Settings and Configuration
        length: 'length:',
        settings: 'settings',
        includeUppercase: 'Include Uppercase (A-Z)',
        includeLowercase: 'Include Lowercase (a-z)',
        includeNumbers: 'Include Numbers (0-9)',
        includeSymbols: 'Include Symbols (@#$%)',
        excludeSimilar: 'Exclude Similar Characters (0,O,l,1)',
        generateButton: 'Generate Strong Password',
        
        // History Management
        passwordHistory: 'Password History',
        clearHistory: 'Clear History',
        noHistory: 'No saved passwords yet',
        clearHistoryConfirm: 'Are you sure you want to clear all saved passwords?',
        
        // Footer and Credits
        createdBy: 'Created by',
        socialMedia: 'social media',
        allRightsReserved: 'All Rights Reserved © 2025',
        info: 'info',
        
        // System Messages
        noSavedSettings: 'No saved settings found',
        copyFailed: 'Copy failed:',
        
        // Console Messages (Always in English for developer consistency)
        consoleTitle: '🔐 Password Generator Pro loaded successfully!',
        consoleShortcuts: '💡 Keyboard shortcuts:',
        consoleCtrlG: '   - Ctrl/Cmd + G: Generate password',
        consoleCtrlC: '   - Ctrl/Cmd + C: Copy password',
        consoleEnter: '   - Enter: Generate password',
        // Password strength
        veryWeak: 'Very Weak',
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
        veryStrong: 'Very Strong'
    },
    
    // العربية
    'ar': {
        title: '🔐 مولد كلمات المرور المتطور',
        generatedPassword: 'كلمة المرور المُنتجة',
        clickGenerate: 'اضغط على توليد',
        clickToCopy: 'اضغط للنسخ',
        copied: 'تم النسخ ✓',
        clickGenerateButton: 'اضغط على توليد كلمة مرور',
        length: 'الطول:',
        settings: 'الإعدادات',
        includeUppercase: 'تضمين الأحرف الكبيرة (A-Z)',
        includeLowercase: 'تضمين الأحرف الصغيرة (a-z)',
        includeNumbers: 'تضمين الأرقام (0-9)',
        includeSymbols: 'تضمين الرموز (@#$%)',
        excludeSimilar: 'تجنب الأحرف المتشابهة (0,O,l,1)',
        generateButton: 'توليد كلمة مرور قوية',
        passwordHistory: 'تاريخ كلمات المرور',
        clearHistory: 'مسح التاريخ',
        noHistory: 'لا توجد كلمات مرور محفوظة بعد',
        createdBy: 'تم التطوير بواسطة',
        socialMedia: 'وسائل التواصل',
        allRightsReserved: 'جميع الحقوق محفوظة © 2025',
        info: 'معلومات',
        clearHistoryConfirm: 'هل أنت متأكد من مسح جميع كلمات المرور المحفوظة؟',
        noSavedSettings: 'لم يتم العثور على إعدادات محفوظة',
        copyFailed: 'فشل في النسخ:',
        consoleTitle: '🔐 مولد كلمات المرور المتطور تم تحميله بنجاح!',
        consoleShortcuts: '💡 اختصارات لوحة المفاتيح:',
        consoleCtrlG: '   - Ctrl/Cmd + G: توليد كلمة مرور',
        consoleCtrlC: '   - Ctrl/Cmd + C: نسخ كلمة المرور',
        consoleEnter: '   - Enter: توليد كلمة مرور',
        // Password strength
        veryWeak: 'ضعيف جداً',
        weak: 'ضعيف',
        medium: 'متوسط',
        strong: 'قوي',
        veryStrong: 'قوي جداً'
    },
    
    // Türkçe
    'tr': {
        title: '🔐 Gelişmiş Şifre Oluşturucu',
        generatedPassword: 'Oluşturulan Şifre',
        clickGenerate: 'Oluştur\'a Tıklayın',
        clickToCopy: 'kopyalamak için tıklayın',
        copied: 'kopyalandı ✓',
        clickGenerateButton: 'ŞİFRE OLUŞTUR',
        length: 'uzunluk:',
        settings: 'ayarlar',
        includeUppercase: 'Büyük Harfleri Dahil Et (A-Z)',
        includeLowercase: 'Küçük Harfleri Dahil Et (a-z)',
        includeNumbers: 'Rakamları Dahil Et (0-9)',
        includeSymbols: 'Sembolleri Dahil Et (@#$%)',
        excludeSimilar: 'Benzer Karakterleri Hariç Tut (0,O,l,1)',
        generateButton: 'Güçlü Şifre Oluştur',
        passwordHistory: 'Şifre Geçmişi',
        clearHistory: 'Geçmişi Temizle',
        noHistory: 'Henüz kaydedilen şifre yok',
        createdBy: 'Geliştiren',
        socialMedia: 'sosyal medya',
        allRightsReserved: 'Tüm Hakları Saklıdır © 2025',
        info: 'bilgi',
        clearHistoryConfirm: 'Tüm kaydedilen şifreleri silmek istediğinizden emin misiniz?',
        noSavedSettings: 'Kaydedilen ayar bulunamadı',
        copyFailed: 'Kopyalama başarısız:',
        consoleTitle: '🔐 Gelişmiş Şifre Oluşturucu başarıyla yüklendi!',
        consoleShortcuts: '💡 Klavye kısayolları:',
        consoleCtrlG: '   - Ctrl/Cmd + G: Şifre oluştur',
        consoleCtrlC: '   - Ctrl/Cmd + C: Şifreyi kopyala',
        consoleEnter: '   - Enter: Şifre oluştur',
        // Password strength
        veryWeak: 'Çok Zayıf',
        weak: 'Zayıf',
        medium: 'Orta',
        strong: 'Güçlü',
        veryStrong: 'Çok Güçlü'
    },
    
    // Deutsch
    'de': {
        title: '🔐 Erweiterter Passwort-Generator',
        generatedPassword: 'Generiertes Passwort',
        clickGenerate: 'Klicken Sie auf Generieren',
        clickToCopy: 'zum Kopieren klicken',
        copied: 'kopiert ✓',
        clickGenerateButton: 'PASSWORT GENERIEREN',
        length: 'länge:',
        settings: 'einstellungen',
        includeUppercase: 'Großbuchstaben Einschließen (A-Z)',
        includeLowercase: 'Kleinbuchstaben Einschließen (a-z)',
        includeNumbers: 'Zahlen Einschließen (0-9)',
        includeSymbols: 'Symbole Einschließen (@#$%)',
        excludeSimilar: 'Ähnliche Zeichen Ausschließen (0,O,l,1)',
        generateButton: 'Starkes Passwort Generieren',
        passwordHistory: 'Passwort-Verlauf',
        clearHistory: 'Verlauf Löschen',
        noHistory: 'Noch keine gespeicherten Passwörter',
        createdBy: 'Erstellt von',
        socialMedia: 'soziale Medien',
        allRightsReserved: 'Alle Rechte Vorbehalten © 2025',
        info: 'info',
        clearHistoryConfirm: 'Sind Sie sicher, dass Sie alle gespeicherten Passwörter löschen möchten?',
        noSavedSettings: 'Keine gespeicherten Einstellungen gefunden',
        copyFailed: 'Kopieren fehlgeschlagen:',
        consoleTitle: '🔐 Erweiterter Passwort-Generator erfolgreich geladen!',
        consoleShortcuts: '💡 Tastenkombinationen:',
        consoleCtrlG: '   - Ctrl/Cmd + G: Passwort generieren',
        consoleCtrlC: '   - Ctrl/Cmd + C: Passwort kopieren',
        consoleEnter: '   - Enter: Passwort generieren',
        // Password strength
        veryWeak: 'Sehr Schwach',
        weak: 'Schwach',
        medium: 'Mittel',
        strong: 'Stark',
        veryStrong: 'Sehr Stark'
    },
    
    // Français
    'fr': {
        title: '🔐 Générateur de Mot de Passe Avancé',
        generatedPassword: 'Mot de Passe Généré',
        clickGenerate: 'Cliquez sur Générer',
        clickToCopy: 'cliquez pour copier',
        copied: 'copié ✓',
        clickGenerateButton: 'GÉNÉRER UN MOT DE PASSE',
        length: 'longueur:',
        settings: 'paramètres',
        includeUppercase: 'Inclure les Majuscules (A-Z)',
        includeLowercase: 'Inclure les Minuscules (a-z)',
        includeNumbers: 'Inclure les Chiffres (0-9)',
        includeSymbols: 'Inclure les Symboles (@#$%)',
        excludeSimilar: 'Exclure les Caractères Similaires (0,O,l,1)',
        generateButton: 'Générer un Mot de Passe Fort',
        passwordHistory: 'Historique des Mots de Passe',
        clearHistory: 'Effacer l\'Historique',
        noHistory: 'Aucun mot de passe sauvegardé pour le moment',
        createdBy: 'Créé par',
        socialMedia: 'médias sociaux',
        allRightsReserved: 'Tous Droits Réservés © 2025',
        info: 'info',
        clearHistoryConfirm: 'Êtes-vous sûr de vouloir effacer tous les mots de passe sauvegardés?',
        noSavedSettings: 'Aucun paramètre sauvegardé trouvé',
        copyFailed: 'Échec de la copie:',
        consoleTitle: '🔐 Générateur de Mot de Passe Avancé chargé avec succès!',
        consoleShortcuts: '💡 Raccourcis clavier:',
        consoleCtrlG: '   - Ctrl/Cmd + G: Générer un mot de passe',
        consoleCtrlC: '   - Ctrl/Cmd + C: Copier le mot de passe',
        consoleEnter: '   - Enter: Générer un mot de passe',
        // Password strength
        veryWeak: 'Très Faible',
        weak: 'Faible',
        medium: 'Moyen',
        strong: 'Fort',
        veryStrong: 'Très Fort'
    },
    
    // Español
    'es': {
        title: '🔐 Generador de Contraseñas Avanzado',
        generatedPassword: 'Contraseña Generada',
        clickGenerate: 'Haz Clic en Generar',
        clickToCopy: 'haz clic para copiar',
        copied: 'copiado ✓',
        clickGenerateButton: 'GENERAR CONTRASEÑA',
        length: 'longitud:',
        settings: 'configuración',
        includeUppercase: 'Incluir Mayúsculas (A-Z)',
        includeLowercase: 'Incluir Minúsculas (a-z)',
        includeNumbers: 'Incluir Números (0-9)',
        includeSymbols: 'Incluir Símbolos (@#$%)',
        excludeSimilar: 'Excluir Caracteres Similares (0,O,l,1)',
        generateButton: 'Generar Contraseña Fuerte',
        passwordHistory: 'Historial de Contraseñas',
        clearHistory: 'Limpiar Historial',
        noHistory: 'No hay contraseñas guardadas aún',
        createdBy: 'Creado por',
        socialMedia: 'redes sociales',
        allRightsReserved: 'Todos los Derechos Reservados © 2025',
        info: 'info',
        clearHistoryConfirm: '¿Estás seguro de que quieres eliminar todas las contraseñas guardadas?',
        noSavedSettings: 'No se encontraron configuraciones guardadas',
        copyFailed: 'Falló la copia:',
        consoleTitle: '🔐 Generador de Contraseñas Avanzado cargado exitosamente!',
        consoleShortcuts: '💡 Atajos de teclado:',
        consoleCtrlG: '   - Ctrl/Cmd + G: Generar contraseña',
        consoleCtrlC: '   - Ctrl/Cmd + C: Copiar contraseña',
        consoleEnter: '   - Enter: Generar contraseña',
        // Password strength
        veryWeak: 'Muy Débil',
        weak: 'Débil',
        medium: 'Medio',
        strong: 'Fuerte',
        veryStrong: 'Muy Fuerte'
    },
    
    // Italiano
    'it': {
        title: '🔐 Generatore di Password Avanzato',
        generatedPassword: 'Password Generata',
        clickGenerate: 'Clicca su Genera',
        clickToCopy: 'clicca per copiare',
        copied: 'copiato ✓',
        clickGenerateButton: 'GENERA PASSWORD',
        length: 'lunghezza:',
        settings: 'impostazioni',
        includeUppercase: 'Includi Maiuscole (A-Z)',
        includeLowercase: 'Includi Minuscole (a-z)',
        includeNumbers: 'Includi Numeri (0-9)',
        includeSymbols: 'Includi Simboli (@#$%)',
        excludeSimilar: 'Escludi Caratteri Simili (0,O,l,1)',
        generateButton: 'Genera Password Forte',
        passwordHistory: 'Cronologia Password',
        clearHistory: 'Cancella Cronologia',
        noHistory: 'Nessuna password salvata ancora',
        createdBy: 'Creato da',
        socialMedia: 'social media',
        allRightsReserved: 'Tutti i Diritti Riservati © 2025',
        info: 'info',
        clearHistoryConfirm: 'Sei sicuro di voler cancellare tutte le password salvate?',
        noSavedSettings: 'Nessuna impostazione salvata trovata',
        copyFailed: 'Copia fallita:',
        consoleTitle: '🔐 Generatore di Password Avanzato caricato con successo!',
        consoleShortcuts: '💡 Scorciatoie da tastiera:',
        consoleCtrlG: '   - Ctrl/Cmd + G: Genera password',
        consoleCtrlC: '   - Ctrl/Cmd + C: Copia password',
        consoleEnter: '   - Enter: Genera password',
        // Password strength
        veryWeak: 'Molto Debole',
        weak: 'Debole',
        medium: 'Medio',
        strong: 'Forte',
        veryStrong: 'Molto Forte'
    },
    
    // Português
    'pt': {
        title: '🔐 Gerador de Senhas Avançado',
        generatedPassword: 'Senha Gerada',
        clickGenerate: 'Clique em Gerar',
        clickToCopy: 'clique para copiar',
        copied: 'copiado ✓',
        clickGenerateButton: 'GERAR SENHA',
        length: 'comprimento:',
        settings: 'configurações',
        includeUppercase: 'Incluir Maiúsculas (A-Z)',
        includeLowercase: 'Incluir Minúsculas (a-z)',
        includeNumbers: 'Incluir Números (0-9)',
        includeSymbols: 'Incluir Símbolos (@#$%)',
        excludeSimilar: 'Excluir Caracteres Similares (0,O,l,1)',
        generateButton: 'Gerar Senha Forte',
        passwordHistory: 'Histórico de Senhas',
        clearHistory: 'Limpar Histórico',
        noHistory: 'Nenhuma senha salva ainda',
        createdBy: 'Criado por',
        socialMedia: 'mídias sociais',
        allRightsReserved: 'Todos os Direitos Reservados © 2025',
        info: 'info',
        clearHistoryConfirm: 'Tem certeza de que deseja limpar todas as senhas salvas?',
        noSavedSettings: 'Nenhuma configuração salva encontrada',
        copyFailed: 'Falha na cópia:',
        consoleTitle: '🔐 Gerador de Senhas Avançado carregado com sucesso!',
        consoleShortcuts: '💡 Atalhos do teclado:',
        consoleCtrlG: '   - Ctrl/Cmd + G: Gerar senha',
        consoleCtrlC: '   - Ctrl/Cmd + C: Copiar senha',
        consoleEnter: '   - Enter: Gerar senha',
        // Password strength
        veryWeak: 'Muito Fraca',
        weak: 'Fraca',
        medium: 'Média',
        strong: 'Forte',
        veryStrong: 'Muito Forte'
    },
    
    // 中文 (Chinese)
    'zh': {
        title: '🔐 高级密码生成器',
        generatedPassword: '生成的密码',
        clickGenerate: '点击生成',
        clickToCopy: '点击复制',
        copied: '已复制 ✓',
        clickGenerateButton: '生成密码',
        length: '长度:',
        settings: '设置',
        includeUppercase: '包含大写字母 (A-Z)',
        includeLowercase: '包含小写字母 (a-z)',
        includeNumbers: '包含数字 (0-9)',
        includeSymbols: '包含符号 (@#$%)',
        excludeSimilar: '排除相似字符 (0,O,l,1)',
        generateButton: '生成强密码',
        passwordHistory: '密码历史',
        clearHistory: '清除历史',
        noHistory: '还没有保存的密码',
        createdBy: '创建者',
        socialMedia: '社交媒体',
        allRightsReserved: '版权所有 © 2025',
        info: '信息',
        clearHistoryConfirm: '确定要清除所有保存的密码吗？',
        noSavedSettings: '未找到保存的设置',
        copyFailed: '复制失败:',
        consoleTitle: '🔐 高级密码生成器加载成功！',
        consoleShortcuts: '💡 键盘快捷键:',
        consoleCtrlG: '   - Ctrl/Cmd + G: 生成密码',
        consoleCtrlC: '   - Ctrl/Cmd + C: 复制密码',
        consoleEnter: '   - Enter: 生成密码',
        // Password strength
        veryWeak: '很弱',
        weak: '弱',
        medium: '中等',
        strong: '强',
        veryStrong: '很强'
    },
    
    // 日本語 (Japanese)
    'ja': {
        title: '🔐 高度なパスワードジェネレーター',
        generatedPassword: '生成されたパスワード',
        clickGenerate: '生成をクリック',
        clickToCopy: 'クリックしてコピー',
        copied: 'コピーされました ✓',
        clickGenerateButton: 'パスワードを生成',
        length: '長さ:',
        settings: '設定',
        includeUppercase: '大文字を含む (A-Z)',
        includeLowercase: '小文字を含む (a-z)',
        includeNumbers: '数字を含む (0-9)',
        includeSymbols: '記号を含む (@#$%)',
        excludeSimilar: '似た文字を除外 (0,O,l,1)',
        generateButton: '強いパスワードを生成',
        passwordHistory: 'パスワード履歴',
        clearHistory: '履歴をクリア',
        noHistory: '保存されたパスワードはまだありません',
        createdBy: '作成者',
        socialMedia: 'ソーシャルメディア',
        allRightsReserved: '全ての権利を保有 © 2025',
        info: '情報',
        clearHistoryConfirm: '保存されたすべてのパスワードを削除してもよろしいですか？',
        noSavedSettings: '保存された設定が見つかりません',
        copyFailed: 'コピーに失敗しました:',
        consoleTitle: '🔐 高度なパスワードジェネレーターが正常に読み込まれました！',
        consoleShortcuts: '💡 キーボードショートカット:',
        consoleCtrlG: '   - Ctrl/Cmd + G: パスワード生成',
        consoleCtrlC: '   - Ctrl/Cmd + C: パスワードコピー',
        consoleEnter: '   - Enter: パスワード生成',
        // Password strength
        veryWeak: '非常に弱い',
        weak: '弱い',
        medium: '中程度',
        strong: '強い',
        veryStrong: '非常に強い'
    }
};

// وظيفة تحديد اللغة بناءً على لغة المتصفح
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.toLowerCase().split('-')[0]; // أخذ الجزء الأول من كود اللغة
    
    // التحقق من وجود الترجمة للغة المكتشفة
    if (translations[langCode]) {
        return langCode;
    }
    
    // العودة إلى الإنجليزية كلغة افتراضية
    return 'en';
}

// وظيفة الحصول على النص المترجم
function t(key) {
    const currentLang = detectLanguage();
    return translations[currentLang][key] || translations['en'][key] || key;
}

// وظيفة ترجمة العناصر في الصفحة
function translatePage() {
    const currentLang = detectLanguage();
    
    // إضافة data-lang attribute للـ body للتحكم في CSS
    document.body.setAttribute('data-lang', currentLang);
    
    // تحديد اتجاه النص للغات RTL
    const rtlLanguages = ['ar'];
    if (rtlLanguages.includes(currentLang)) {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', currentLang);
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', currentLang);
    }
    
    // تحديث مؤشر اللغة
    updateLanguageIndicator(currentLang);
    
    // ترجمة العناصر
    const elements = {
        '.title': 'title',
        '.result__title': 'generatedPassword',
        '.result__info.right': 'clickToCopy',
        '.result__info.left': 'copied',
        '.length__title': 'length',
        '.setting__title': 'settings',
        'label[for="uppercase"]': 'includeUppercase',
        'label[for="lowercase"]': 'includeLowercase',
        'label[for="number"]': 'includeNumbers',
        'label[for="symbol"]': 'includeSymbols',
        'label[for="excludeSimilar"]': 'excludeSimilar',
        '.btn.generate': 'generateButton',
        '.history-title': 'passwordHistory',
        '.floating-btn': 'info',
        '.floating-text a': 'allRightsReserved'
    };
    
    // تطبيق الترجمات
    Object.keys(elements).forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            const translationKey = elements[selector];
            if (selector === '.history-title') {
                // التعامل مع عنوان التاريخ بشكل خاص
                element.innerHTML = `<i class="fas fa-history"></i> ${t(translationKey)}
                    <button class="clear-history-btn" id="clearHistory" title="${t('clearHistory')}">
                        <i class="fas fa-trash"></i>
                    </button>`;
            } else if (selector === '.btn.generate') {
                element.innerHTML = `<i class="fas fa-key"></i> ${t(translationKey)}`;
            } else {
                element.textContent = t(translationKey);
            }
        }
    });
    
    // ترجمة عنصر النتيجة إذا كان يحتوي على النص الافتراضي
    const resultElement = document.getElementById('result');
    if (resultElement && (resultElement.textContent === 'CLICK GENERATE' || 
        resultElement.textContent === 'اضغط على توليد كلمة مرور' ||
        resultElement.textContent.includes('GENERA') ||
        resultElement.textContent.includes('GÉNÉRER'))) {
        resultElement.textContent = t('clickGenerateButton');
    }
    
    // ترجمة مؤشر القوة
    const strengthText = document.getElementById('strengthText');
    if (strengthText && strengthText.textContent === 'Click Generate') {
        strengthText.textContent = t('clickGenerate');
    }
    
    // ترجمة عناصر اللوحة الاجتماعية
    const socialPanelP = document.querySelector('.social-panel p');
    if (socialPanelP) {
        const link = socialPanelP.querySelector('a');
        const linkHref = link ? link.getAttribute('href') : '';
        const linkText = link ? link.textContent : '';
        socialPanelP.innerHTML = `${t('createdBy')} <a target="_blank" href="${linkHref}">${linkText}</a><i class="fa fa-heart"></i>`;
    }
    
    const socialPanelH4 = document.querySelector('.social-panel h4');
    if (socialPanelH4) {
        socialPanelH4.textContent = t('socialMedia');
    }
}

// وظيفة تحديث مؤشر اللغة
function updateLanguageIndicator(langCode) {
    const languageNames = {
        'en': 'EN',
        'ar': 'عر',
        'tr': 'TR',
        'de': 'DE',
        'fr': 'FR',
        'es': 'ES',
        'it': 'IT',
        'pt': 'PT',
        'zh': '中',
        'ja': '日'
    };
    
    const currentLanguageElement = document.getElementById('currentLanguage');
    if (currentLanguageElement) {
        currentLanguageElement.textContent = languageNames[langCode] || 'EN';
    }
}

// تصدير الوظائف للاستخدام في ملفات أخرى
if (typeof window !== 'undefined') {
    window.t = t;
    window.translatePage = translatePage;
    window.detectLanguage = detectLanguage;
    window.updateLanguageIndicator = updateLanguageIndicator;
}