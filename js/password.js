/*
 * ========================================================================================
 * PASSWORD GENERATOR PRO - MAIN JAVASCRIPT FILE
 * ========================================================================================
 * 
 * Description: Advanced password generator with multilingual support, animated UI,
 *              password strength analysis, and secure cryptographic randomness.
 * 
 * Features:
 * - Cryptographically secure random generation using Web Crypto API
 * - Real-time password strength analysis with visual indicators
 * - Password history management with local storage
 * - Multilingual interface with automatic language detection
 * - Responsive slider controls with custom styling
 * - Keyboard shortcuts for enhanced user experience
 * - Settings persistence across browser sessions
 * 
 * Author: Password Generator Pro Team
 * Version: 2.0
 * Last Updated: 2025
 * ========================================================================================
 */

console.clear();

// ========================================================================================
// SLIDER CONFIGURATION AND STYLING
// ========================================================================================

/**
 * Configuration object for slider appearance and behavior
 * Defines the visual properties for the password length slider
 */
const sliderProps = {
	fill: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Active fill gradient
	background: "rgba(0, 0, 0, 0.1)", // Inactive background color
};

// Get slider elements from DOM
const slider = document.querySelector(".range__slider");
const sliderValue = document.querySelector(".length__title");

/**
 * Event listener for slider input changes
 * Updates the slider visual appearance and length display in real-time
 */
slider.querySelector('input').addEventListener("input", event => {
	sliderValue.setAttribute("data-length", event.target.value);
	applyFill(event.target);
});

// Initialize slider appearance on page load
applyFill(slider.querySelector("input"));

/**
 * Apply visual fill to slider based on current value
 * @param {HTMLElement} slider - The slider input element
 */
function applyFill(slider) {
	const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
	const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage + 0.1}%)`;
	slider.style.background = bg;
	sliderValue.setAttribute("data-length", slider.value);
}

// ========================================================================================
// SECURE RANDOM CHARACTER GENERATION FUNCTIONS
// ========================================================================================

/**
 * Object containing functions for generating different types of random characters
 * Each function uses cryptographically secure randomness for maximum security
 */
const randomFunc = {
	lower: getRandomLower,    // Lowercase letters
	upper: getRandomUpper,    // Uppercase letters
	number: getRandomNumber,  // Numeric digits
	symbol: getRandomSymbol,
};

function secureMathRandom() {
	return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
}

function getRandomLower() {
	const excludeSimilar = document.getElementById('excludeSimilar').checked;
	const chars = excludeSimilar ? 'abcdefghjkmnpqrstuvwxyz' : 'abcdefghijklmnopqrstuvwxyz';
	return chars[Math.floor(secureMathRandom() * chars.length)];
}

function getRandomUpper() {
	const excludeSimilar = document.getElementById('excludeSimilar').checked;
	const chars = excludeSimilar ? 'ABCDEFGHJKMNPQRSTUVWXYZ' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return chars[Math.floor(secureMathRandom() * chars.length)];
}

function getRandomNumber() {
	const excludeSimilar = document.getElementById('excludeSimilar').checked;
	const chars = excludeSimilar ? '23456789' : '0123456789';
	return chars[Math.floor(secureMathRandom() * chars.length)];
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
	return symbols[Math.floor(secureMathRandom() * symbols.length)];
}

// عناصر الواجهة
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('slider');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById("symbol");
const excludeSimilarEl = document.getElementById("excludeSimilar");
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById("copy-btn");
const resultContainer = document.querySelector('.result');
const copyInfo = document.querySelector('.result__info.right');
const copiedInfo = document.querySelector(".result__info.left");
const strengthMeter = document.getElementById('strengthMeter');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');

// متغيرات التحكم
let generatedPassword = false;
let resultContainerBound = {
	left: resultContainer.getBoundingClientRect().left,
	top: resultContainer.getBoundingClientRect().top,
};

// وظائف تقييم قوة كلمة المرور
function calculatePasswordStrength(password) {
	if (!password || password === t('clickGenerateButton')) return { score: 0, text: t('clickGenerate'), color: "#9ca3af" };
	
	let score = 0;
	let feedback = [];
	
	// فحص الطول
	if (password.length >= 8) score += 25;
	if (password.length >= 12) score += 25;
	
	// فحص التنوع
	if (/[a-z]/.test(password)) score += 10;
	if (/[A-Z]/.test(password)) score += 10;
	if (/[0-9]/.test(password)) score += 15;
	if (/[^A-Za-z0-9]/.test(password)) score += 15;
	
	// تحديد النص واللون
	if (score <= 30) return { score: 30, text: t('veryWeak'), color: "#ff6b6b" };
	if (score <= 50) return { score: 50, text: t('weak'), color: "#ff9500" };
	if (score <= 75) return { score: 75, text: t('medium'), color: "#ffd700" };
	if (score <= 90) return { score: 90, text: t('strong'), color: "#00c851" };
	return { score: 100, text: t('veryStrong'), color: "#007e33" };
}

function updatePasswordStrength(password) {
	const strength = calculatePasswordStrength(password);
	strengthFill.style.width = strength.score + '%';
	strengthFill.style.background = `linear-gradient(90deg, ${strength.color}, ${strength.color}dd)`;
	strengthText.textContent = strength.text;
	strengthText.style.color = strength.color;
}

// وظائف إدارة تاريخ كلمات المرور
class PasswordHistory {
	constructor() {
		this.storageKey = 'passwordHistory';
		this.maxHistorySize = 50; // حد أقصى 50 كلمة مرور
	}
	
	// حفظ كلمة مرور جديدة
	savePassword(password, settings) {
		if (!password || password === t('clickGenerateButton')) return;
		
		const history = this.getHistory();
		const strength = calculatePasswordStrength(password);
		
		// تحديد تنسيق التاريخ - استخدام الأرقام الإنجليزية دائماً
		const dateOptions = {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		};
		
		// استخدام اللغة الإنجليزية لجميع التواريخ لضمان الأرقام الإنجليزية
		const locale = 'en-US';
		
		const newEntry = {
			id: Date.now(),
			password: password,
			date: new Date().toLocaleString(locale, dateOptions),
			settings: settings,
			strength: strength.text
		};
		
		// إضافة في المقدمة وإزالة الزائد
		history.unshift(newEntry);
		if (history.length > this.maxHistorySize) {
			history.splice(this.maxHistorySize);
		}
		
		localStorage.setItem(this.storageKey, JSON.stringify(history));
		this.displayHistory();
	}
	
	// استرجاع التاريخ
	getHistory() {
		try {
			return JSON.parse(localStorage.getItem(this.storageKey)) || [];
		} catch {
			return [];
		}
	}
	
	// حذف عنصر واحد
	deleteItem(id) {
		const history = this.getHistory().filter(item => item.id !== id);
		localStorage.setItem(this.storageKey, JSON.stringify(history));
		this.displayHistory();
	}
	
	// مسح جميع التاريخ
	clearAll() {
		localStorage.removeItem(this.storageKey);
		this.displayHistory();
	}
	
	// عرض التاريخ في الواجهة
	displayHistory() {
		const historyContent = document.getElementById('historyContent');
		const history = this.getHistory();
		
		if (history.length === 0) {
			historyContent.innerHTML = `<p class="no-history">${t('noHistory')}</p>`;
			return;
		}
		
		historyContent.innerHTML = history.map(item => `
			<div class="history-item">
				<div class="history-actions">
					<button class="history-copy-btn" onclick="copyToClipboard('${item.password}')" title="نسخ">
						<i class="fas fa-copy"></i>
					</button>
					<button class="history-delete-btn" onclick="passwordHistory.deleteItem(${item.id})" title="حذف">
						<i class="fas fa-trash"></i>
					</button>
				</div>
				<div class="history-password">${item.password}</div>
				<div class="history-details">
					<span class="history-date">${item.date}</span>
					<span class="history-strength" style="background: ${this.getStrengthColor(item.strength)}; color: white;">
						${item.strength}
					</span>
				</div>
			</div>
		`).join('');
	}
	
	// تحديد لون القوة
	getStrengthColor(strengthText) {
		// استخدام قاموس يحتوي على جميع الترجمات للقوة
		const strengthColors = {
			// English
			'Very Weak': '#ff6b6b', 'Weak': '#ff9500', 'Medium': '#ffd700', 'Strong': '#00c851', 'Very Strong': '#007e33',
			// Arabic
			'ضعيف جداً': '#ff6b6b', 'ضعيف': '#ff9500', 'متوسط': '#ffd700', 'قوي': '#00c851', 'قوي جداً': '#007e33',
			// Turkish
			'Çok Zayıf': '#ff6b6b', 'Zayıf': '#ff9500', 'Orta': '#ffd700', 'Güçlü': '#00c851', 'Çok Güçlü': '#007e33',
			// German
			'Sehr Schwach': '#ff6b6b', 'Schwach': '#ff9500', 'Mittel': '#ffd700', 'Stark': '#00c851', 'Sehr Stark': '#007e33',
			// French
			'Très Faible': '#ff6b6b', 'Faible': '#ff9500', 'Moyen': '#ffd700', 'Fort': '#00c851', 'Très Fort': '#007e33',
			// Spanish
			'Muy Débil': '#ff6b6b', 'Débil': '#ff9500', 'Medio': '#ffd700', 'Fuerte': '#00c851', 'Muy Fuerte': '#007e33',
			// Italian
			'Molto Debole': '#ff6b6b', 'Debole': '#ff9500', 'Medio': '#ffd700', 'Forte': '#00c851', 'Molto Forte': '#007e33',
			// Portuguese
			'Muito Fraca': '#ff6b6b', 'Fraca': '#ff9500', 'Média': '#ffd700', 'Forte': '#00c851', 'Muito Forte': '#007e33',
			// Chinese
			'很弱': '#ff6b6b', '弱': '#ff9500', '中等': '#ffd700', '强': '#00c851', '很强': '#007e33',
			// Japanese
			'非常に弱い': '#ff6b6b', '弱い': '#ff9500', '中程度': '#ffd700', '強い': '#00c851', '非常に強い': '#007e33'
		};
		return strengthColors[strengthText] || '#9ca3af';
	}
}

// إنشاء مثيل من كلاس التاريخ
const passwordHistory = new PasswordHistory();

// نسخ النص باستخدام الـ Clipboard API الحديث
async function copyToClipboard(text) {
	try {
		if (navigator.clipboard && window.isSecureContext) {
			await navigator.clipboard.writeText(text);
		} else {
			// fallback للمتصفحات القديمة
			const textarea = document.createElement('textarea');
			textarea.value = text;
			textarea.style.position = 'fixed';
			textarea.style.opacity = '0';
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand('copy');
			textarea.remove();
		}
		
		// إظهار رسالة النسخ
		showCopyMessage();
		return true;
	} catch (err) {
		console.error('Copy failed:', err);
		return false;
	}
}

function showCopyMessage() {
	copyInfo.style.transform = "translateY(200%)";
	copyInfo.style.opacity = "0";
	copiedInfo.style.transform = "translateY(0%)";
	copiedInfo.style.opacity = "0.75";
	
	setTimeout(() => {
		copyInfo.style.transform = 'translateY(0%)';
		copyInfo.style.opacity = "0.75";
		copiedInfo.style.transform = "translateY(200%)";
		copiedInfo.style.opacity = "0";
	}, 2000);
}

// أحداث الفأرة والحركة
resultContainer.addEventListener('mousemove', e => {
	resultContainerBound = {
		left: resultContainer.getBoundingClientRect().left,
		top: resultContainer.getBoundingClientRect().top,
	};
	if(generatedPassword){
		copyBtn.style.opacity = '1';
		copyBtn.style.pointerEvents = 'all';
		copyBtn.style.setProperty('--x', `${e.x - resultContainerBound.left}px`);
		copyBtn.style.setProperty('--y', `${e.y - resultContainerBound.top}px`);
	}else {
		copyBtn.style.opacity = '0';
		copyBtn.style.pointerEvents = 'none';
	}
});

window.addEventListener('resize', e => {
	resultContainerBound = {
		left: resultContainer.getBoundingClientRect().left,
		top: resultContainer.getBoundingClientRect().top,
	};
});

// حدث النسخ
copyBtn.addEventListener('click', async () => {
	const password = resultEl.innerText;
	if (!password || password === t('clickGenerateButton')) {
		return;
	}
	
	await copyToClipboard(password);
});

// حدث التوليد المحسّن
generateBtn.addEventListener("click", () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numberEl.checked;
	const hasSymbol = symbolEl.checked;
	
	generatedPassword = true;
	const newPassword = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
	resultEl.innerText = newPassword;
	
	// تحديث مؤشر القوة
	updatePasswordStrength(newPassword);
	
	// حفظ في التاريخ
	const settings = {
		length,
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		excludeSimilar: excludeSimilarEl.checked
	};
	passwordHistory.savePassword(newPassword, settings);
	
	// إظهار معلومات النسخ
	copyInfo.style.transform = 'translateY(0%)';
	copyInfo.style.opacity = "0.75";
	copiedInfo.style.transform = "translateY(200%)";
	copiedInfo.style.opacity = "0";
});

// وظيفة التوليد المحسّنة
function generatePassword(length, lower, upper, number, symbol) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if (typesCount === 0) {
		return '';
	}
	
	// ضمان وجود حرف واحد على الأقل من كل نوع محدد
	if (lower) generatedPassword += getRandomLower();
	if (upper) generatedPassword += getRandomUpper();
	if (number) generatedPassword += getRandomNumber();
	if (symbol) generatedPassword += getRandomSymbol();
	
	// ملء باقي الطول
	for (let i = generatedPassword.length; i < length; i++) {
		const randomType = typesArr[Math.floor(secureMathRandom() * typesArr.length)];
		const funcName = Object.keys(randomType)[0];
		generatedPassword += randomFunc[funcName]();
	}
	
	// خلط الأحرف لتجنب النمط المتوقع
	return shuffleString(generatedPassword).slice(0, length);
}

// وظيفة خلط النص
function shuffleString(str) {
	return str.split('').sort(() => secureMathRandom() - 0.5).join('');
}

// منع تعطيل جميع الخيارات
function disableOnlyCheckbox() {
	const checkboxes = [uppercaseEl, lowercaseEl, numberEl, symbolEl];
	let totalChecked = checkboxes.filter(el => el.checked);
	
	checkboxes.forEach(el => {
		if(totalChecked.length == 1 && el.checked){
			el.disabled = true;
		} else {
			el.disabled = false;
		}
	});
}

// إضافة أحداث للخيارات
[uppercaseEl, lowercaseEl, numberEl, symbolEl].forEach(el => {
	el.addEventListener('click', () => {
		disableOnlyCheckbox();
		saveSettings(); // حفظ الإعدادات
	});
});

// حفظ واسترجاع الإعدادات
function saveSettings() {
	const settings = {
		length: lengthEl.value,
		uppercase: uppercaseEl.checked,
		lowercase: lowercaseEl.checked,
		number: numberEl.checked,
		symbol: symbolEl.checked,
		excludeSimilar: excludeSimilarEl.checked
	};
	localStorage.setItem('passwordSettings', JSON.stringify(settings));
}

function loadSettings() {
	try {
		const settings = JSON.parse(localStorage.getItem('passwordSettings'));
		if (settings) {
			lengthEl.value = settings.length || 16;
			uppercaseEl.checked = settings.uppercase !== false;
			lowercaseEl.checked = settings.lowercase !== false;
			numberEl.checked = settings.number !== false;
			symbolEl.checked = settings.symbol !== false;
			excludeSimilarEl.checked = settings.excludeSimilar || false;
			
			// تحديث السلايدر
			applyFill(lengthEl);
		}
	} catch (e) {
		console.log('No saved settings found');
	}
}

// أحداث حفظ الإعدادات
lengthEl.addEventListener('input', saveSettings);
excludeSimilarEl.addEventListener('change', saveSettings);

// أحداث اللوحة الاجتماعية
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible');
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible');
});

// حدث مسح التاريخ
document.getElementById('clearHistory').addEventListener('click', () => {
	if (confirm(t('clearHistoryConfirm'))) {
		passwordHistory.clearAll();
	}
});

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
	// ترجمة الصفحة أولاً
	translatePage();
	
	loadSettings();
	disableOnlyCheckbox();
	passwordHistory.displayHistory();
	updatePasswordStrength(""); // تهيئة مؤشر القوة
	
	// تحديث النص في مربع النتيجة إذا كان فارغاً
	if (resultEl.textContent === "CLICK GENERATE" || resultEl.textContent === "") {
		resultEl.textContent = t('clickGenerateButton');
	}
});

// اختصارات لوحة المفاتيح
document.addEventListener('keydown', (e) => {
	// Ctrl+G أو Cmd+G لتوليد كلمة مرور
	if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
		e.preventDefault();
		generateBtn.click();
	}
	
	// Ctrl+C أو Cmd+C لنسخ كلمة المرور (إذا كانت مُولدة)
	if ((e.ctrlKey || e.metaKey) && e.key === 'c' && generatedPassword) {
		copyBtn.click();
	}
	
	// Enter لتوليد كلمة مرور
	if (e.key === 'Enter') {
		generateBtn.click();
	}
});

console.log('🔐 Password Generator Pro loaded successfully!');
console.log('💡 Keyboard shortcuts:');
console.log('   - Ctrl/Cmd + G: Generate password');
console.log('   - Ctrl/Cmd + C: Copy password');
console.log('   - Enter: Generate password');
