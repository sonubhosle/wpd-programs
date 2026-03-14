// ==================== Interactive Form Features ====================

// Color Picker - Update Color Preview
const colorInput = document.getElementById('color');
const colorPreview = document.querySelector('.color-preview');

if (colorInput) {
    colorInput.addEventListener('input', (e) => {
        colorPreview.style.background = e.target.value;
        colorPreview.style.boxShadow = `0 5px 15px ${e.target.value}80`;
    });

    // Initialize color preview
    colorPreview.style.background = colorInput.value;
}

// Range Slider - Update Value Display
const rangeInput = document.getElementById('experience');
const rangeValue = document.querySelector('.range-value');

if (rangeInput) {
    rangeInput.addEventListener('input', (e) => {
        rangeValue.textContent = e.target.value;
        rangeValue.style.animation = 'pulse 0.3s ease';
        setTimeout(() => rangeValue.style.animation = '', 300);
    });
}

// Add pulse animation for range value
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Form Validation and Submit
const form = document.querySelector('.modern-form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate form
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const terms = document.getElementById('terms').checked;
        
        if (!name || !email || !password || !mobile || !terms) {
            showNotification('Please fill all required fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }
        
        // Mobile validation
        if (mobile.length < 10 || mobile.length > 13) {
            showNotification('Mobile number should be 10-13 digits', 'error');
            return;
        }
        
        // Success
        showNotification('Form submitted successfully! 🎉', 'success');
        setTimeout(() => {
            form.reset();
            document.querySelectorAll('input, select, textarea').forEach(el => {
                el.style.animation = 'none';
            });
        }, 1000);
    });
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#ff6b6b'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInRight 0.4s ease-out, slideOutRight 0.4s ease-in 2.6s forwards;
        font-weight: 600;
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
    `;
    
    document.head.appendChild(styleSheet);
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}

// Input Focus Animation Enhancement
const inputs = document.querySelectorAll('input, select, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
    });
});

// Add smooth transitions to form groups
inputs.forEach((input, index) => {
    input.parentElement.style.transition = 'transform 0.3s ease';
});

// Real-time input validation
document.getElementById('email')?.addEventListener('input', (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(e.target.value);
    
    if (e.target.value.length > 0) {
        e.target.style.borderColor = isValid ? '#4CAF50' : '#ff6b6b';
    }
});

document.getElementById('mobile')?.addEventListener('input', (e) => {
    const isValid = /^\d{10,13}$/.test(e.target.value);
    
    if (e.target.value.length > 0) {
        e.target.style.borderColor = isValid ? '#4CAF50' : '#ff6b6b';
    }
});

// Prevent negative numbers in number inputs
document.getElementById('mobile')?.addEventListener('keypress', (e) => {
    if (!/\d/.test(e.key)) {
        e.preventDefault();
    }
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.animation = 'bodyFadeIn 0.6s ease-out';
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes bodyFadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(styleSheet);
});
