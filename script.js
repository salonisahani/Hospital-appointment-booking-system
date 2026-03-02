//  Toast Notification 
function showToast(message, duration = 4000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

//  Appointment Form 
// Set min date to today
document.getElementById('apptDate').min = new Date().toISOString().split('T')[0];

const deptDoctors = {
    'Cardiology': ['Dr. Anil Mehta'],
    'Neurology': ['Dr. Sunita Rao'],
    'Orthopedics': ['Dr. Vikram Singh'],
    'Pediatrics': ['Dr. Meera Patel'],
    'Oncology': ['Dr. Ravi Sharma'],
    'Ophthalmology': ['Dr. Ramesh Pillai'],
    'Dermatology': ['Dr. Kavita Deshmukh'], // fixed double Dr.
    'General Medicine': ['Dr. Priya Nair'],
    'Dental': ['Dr. Arjun Das'],
};

function updateDoctors() {
    const dept = document.getElementById('deptSelect').value;
    const sel = document.getElementById('doctorSelect');

    if (!dept) { 
        sel.innerHTML = '<option>Select department first</option>'; 
        return; 
    }

    const docs = deptDoctors[dept] || [];
    sel.innerHTML = '<option value="">Any available doctor</option>' + 
                    docs.map(d => `<option>${d}</option>`).join('');
}

function submitForm() {

  const name = document.getElementById('patientName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const age = document.getElementById('age').value.trim();
  const dept = document.getElementById('deptSelect').value;
  const date = document.getElementById('apptDate').value;

    //  Validation check
    if (!name || !phone || !dept || !date) {
        showToast('⚠️ Please fill in all required fields.');
        return;
    }

    // Success Message
    showToast('✅ Appointment request submitted! We\'ll call you within 2 hours to confirm.');
}

// Contact Form 

function submitContact(event) {

    if (event) event.preventDefault(); // prevent refresh if used in form

    const name    = document.getElementById('contactName').value.trim();
    const phone   = document.getElementById('contactPhone').value.trim();
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !phone || !subject || !message) {
        showToast('⚠️ Please fill in all required fields.');
        return;
    }

    const t = document.getElementById('toast');
    t.textContent = '✅ Message sent! Our team will respond within 24 hours.';
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4000);

    document.getElementById('contactForm').reset(); // optional reset
}

// Scroll Animations 
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .test-card, .doctor-card, .service-full-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}
  


