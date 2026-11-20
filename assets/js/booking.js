/**
 * VEYRA OPTICAL STORE & EYE CARE CENTER
 * 7-Step Interactive Eye Test Appointment Booking Engine
 * 
 * Workflow Steps:
 * Step 1: Select Appointment Type
 * Step 2: Select Clinic Location
 * Step 3: Choose Appointment Date
 * Step 4: Choose Time Slot
 * Step 5: Patient Details & Insurance
 * Step 6: Review Booking Summary
 * Step 7: Confirmation & Calendar Receipt
 * 
 * Integration Notice:
 * This is a complete front-end demonstration interface with input validation.
 * For production, connect Step 7 to your scheduling backend API (e.g. Acuity,
 * Calendly, Epic/Cerner EHR, or custom Node/Python booking microservice).
 */

const BOOKING_STATE = {
  currentStep: 1,
  type: 'Comprehensive Eye Examination (45 Mins)',
  typePrice: '$75 (Complimentary with frame purchase)',
  store: 'Downtown Flagship Atelier (104 Grand Street)',
  date: '2026-11-20',
  formattedDate: 'Friday, November 20, 2026',
  time: '10:30 AM',
  patient: {
    fullName: '',
    email: '',
    phone: '',
    insurance: 'None (Direct Self-Pay)',
    notes: ''
  },
  referenceId: ''
};

document.addEventListener('DOMContentLoaded', () => {
  initBookingWorkflow();
});

function initBookingWorkflow() {
  const stepperContainer = document.querySelector('.booking-workflow-wrapper');
  if (!stepperContainer) return;

  setupStepOptions();
  setupNavigationButtons();
  generateCalendarDates();
  generateTimeSlots();
  updateStepperUI();
}

function setupStepOptions() {
  // Step 1: Appointment type selection
  document.querySelectorAll('input[name="booking-type"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      BOOKING_STATE.type = e.target.value;
      BOOKING_STATE.typePrice = e.target.getAttribute('data-price') || '$75';
      highlightSelectedCard(e.target);
    });
  });

  // Step 2: Location selection
  document.querySelectorAll('input[name="booking-store"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      BOOKING_STATE.store = e.target.value;
      highlightSelectedCard(e.target);
    });
  });
}

function highlightSelectedCard(radioElem) {
  const parentCard = radioElem.closest('.booking-option-card');
  if (!parentCard) return;
  const siblingCards = parentCard.parentElement.querySelectorAll('.booking-option-card');
  siblingCards.forEach(c => c.classList.remove('selected'));
  parentCard.classList.add('selected');
}

function generateCalendarDates() {
  const calendarGrid = document.querySelector('#bookingCalendarDays');
  if (!calendarGrid) return;

  // Generate 14 days starting from tomorrow
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const today = new Date();
  let html = '';

  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dayName = daysOfWeek[d.getDay()];
    const monthName = months[d.getMonth()];
    const dateNum = d.getDate();
    const isSunday = d.getDay() === 0;
    const isSelected = i === 2; // Default select day 2

    const isoStr = d.toISOString().split('T')[0];
    const fullFormatted = `${dayName}, ${monthName} ${dateNum}, ${d.getFullYear()}`;

    if (isSelected) {
      BOOKING_STATE.date = isoStr;
      BOOKING_STATE.formattedDate = fullFormatted;
    }

    html += `
      <div class="calendar-day-cell ${isSelected ? 'selected' : ''} ${isSunday ? 'disabled' : ''}" 
           data-iso="${isoStr}" 
           data-formatted="${fullFormatted}"
           onclick="selectBookingDate(this, '${isoStr}', '${fullFormatted}')"
           style="border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 12px 6px; text-align: center; cursor: ${isSunday ? 'not-allowed' : 'pointer'}; opacity: ${isSunday ? '0.4' : '1'}; transition: all 0.2s ease;">
        <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">${dayName}</div>
        <div style="font-size: 1.25rem; font-weight: 800; margin: 4px 0; color: var(--text-main);">${dateNum}</div>
        <div style="font-size: 0.7rem; color: ${isSunday ? 'var(--text-muted)' : 'var(--color-primary)'}; font-weight: 600;">
          ${isSunday ? 'Closed' : 'Available'}
        </div>
      </div>
    `;
  }

  calendarGrid.innerHTML = html;
}

function selectBookingDate(cellElem, isoStr, fullFormatted) {
  if (cellElem.classList.contains('disabled')) return;
  document.querySelectorAll('.calendar-day-cell').forEach(c => {
    c.classList.remove('selected');
    c.style.borderColor = 'var(--border-color)';
    c.style.backgroundColor = 'transparent';
  });

  cellElem.classList.add('selected');
  cellElem.style.borderColor = 'var(--color-primary)';
  cellElem.style.backgroundColor = 'var(--color-primary-light)';

  BOOKING_STATE.date = isoStr;
  BOOKING_STATE.formattedDate = fullFormatted;
  if (window.showToast) window.showToast(`Selected date: ${fullFormatted}`);
}
window.selectBookingDate = selectBookingDate;

function generateTimeSlots() {
  const container = document.querySelector('#bookingTimeSlots');
  if (!container) return;

  const slots = [
    { time: '09:30 AM', avail: true },
    { time: '10:30 AM', avail: true, selected: true },
    { time: '11:15 AM', avail: true },
    { time: '12:00 PM', avail: false },
    { time: '01:30 PM', avail: true },
    { time: '02:45 PM', avail: true },
    { time: '03:30 PM', avail: true },
    { time: '04:15 PM', avail: false },
    { time: '05:00 PM', avail: true },
    { time: '05:45 PM', avail: true }
  ];

  container.innerHTML = slots.map(s => `
    <div class="time-slot-chip ${s.selected ? 'selected' : ''} ${!s.avail ? 'disabled' : ''}"
         onclick="selectBookingTime(this, '${s.time}', ${s.avail})">
      <i class="bi bi-clock me-1"></i> ${s.time}
      ${!s.avail ? '<span style="display:block; font-size: 0.65rem; color: var(--text-muted); font-weight: normal;">Booked</span>' : ''}
    </div>
  `).join('');
}

function selectBookingTime(chipElem, timeStr, isAvail) {
  if (!isAvail) return;
  document.querySelectorAll('.time-slot-chip').forEach(c => c.classList.remove('selected'));
  chipElem.classList.add('selected');
  BOOKING_STATE.time = timeStr;
}
window.selectBookingTime = selectBookingTime;

function setupNavigationButtons() {
  const btnNext = document.querySelector('#btnBookingNext');
  const btnPrev = document.querySelector('#btnBookingPrev');

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (validateCurrentStep(BOOKING_STATE.currentStep)) {
        if (BOOKING_STATE.currentStep < 7) {
          BOOKING_STATE.currentStep += 1;
          if (BOOKING_STATE.currentStep === 6) {
            renderBookingSummary();
          } else if (BOOKING_STATE.currentStep === 7) {
            confirmBookingReceipt();
          }
          updateStepperUI();
        }
      }
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (BOOKING_STATE.currentStep > 1 && BOOKING_STATE.currentStep < 7) {
        BOOKING_STATE.currentStep -= 1;
        updateStepperUI();
      }
    });
  }

  // Stepper Header Click Navigation
  document.querySelectorAll('.progress-step-indicator').forEach(ind => {
    ind.addEventListener('click', () => {
      const targetStep = parseInt(ind.getAttribute('data-step'), 10);
      if (targetStep < BOOKING_STATE.currentStep) {
        BOOKING_STATE.currentStep = targetStep;
        updateStepperUI();
      }
    });
  });
}

function validateCurrentStep(step) {
  if (step === 5) {
    const nameInput = document.querySelector('#patientFullName');
    const emailInput = document.querySelector('#patientEmail');
    const phoneInput = document.querySelector('#patientPhone');
    const insuranceSelect = document.querySelector('#patientInsurance');
    const notesInput = document.querySelector('#patientNotes');

    if (!nameInput || !nameInput.value.trim()) {
      alert('Please enter the patient full legal name.');
      nameInput?.focus();
      return false;
    }
    if (!emailInput || !emailInput.value.trim() || !emailInput.value.includes('@')) {
      alert('Please enter a valid contact email address.');
      emailInput?.focus();
      return false;
    }
    if (!phoneInput || !phoneInput.value.trim()) {
      alert('Please enter a valid phone number for SMS confirmation.');
      phoneInput?.focus();
      return false;
    }

    BOOKING_STATE.patient.fullName = nameInput.value.trim();
    BOOKING_STATE.patient.email = emailInput.value.trim();
    BOOKING_STATE.patient.phone = phoneInput.value.trim();
    if (insuranceSelect) BOOKING_STATE.patient.insurance = insuranceSelect.value;
    if (notesInput) BOOKING_STATE.patient.notes = notesInput.value.trim();
  }
  return true;
}

function updateStepperUI() {
  const current = BOOKING_STATE.currentStep;

  // Update progress indicators
  document.querySelectorAll('.progress-step-indicator').forEach(ind => {
    const s = parseInt(ind.getAttribute('data-step'), 10);
    ind.classList.remove('active', 'completed');
    if (s === current) {
      ind.classList.add('active');
    } else if (s < current) {
      ind.classList.add('completed');
    }
  });

  // Switch step panels
  document.querySelectorAll('.booking-step-content').forEach(panel => {
    const s = parseInt(panel.getAttribute('data-step-content'), 10);
    if (s === current) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });

  // Update navigation buttons
  const btnPrev = document.querySelector('#btnBookingPrev');
  const btnNext = document.querySelector('#btnBookingNext');

  if (btnPrev) {
    btnPrev.style.display = (current === 1 || current === 7) ? 'none' : 'inline-flex';
  }

  if (btnNext) {
    if (current === 6) {
      btnNext.textContent = 'Confirm Appointment Request';
      btnNext.className = 'btn btn-primary';
    } else if (current === 7) {
      btnNext.style.display = 'none';
    } else {
      btnNext.textContent = 'Continue →';
      btnNext.className = 'btn btn-primary';
    }
  }

  // Scroll to top of workflow
  const wrapper = document.querySelector('.booking-workflow-wrapper');
  if (wrapper && current > 1) {
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderBookingSummary() {
  const summaryBox = document.querySelector('#bookingSummaryContent');
  if (!summaryBox) return;

  summaryBox.innerHTML = `
    <div style="background-color: var(--bg-surface); border-radius: var(--radius-md); padding: 24px; border: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
        <span style="color: var(--text-muted); font-size: 0.9rem;">Exam Type</span>
        <strong style="color: var(--text-main); font-size: 0.95rem;">${BOOKING_STATE.type}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
        <span style="color: var(--text-muted); font-size: 0.9rem;">Store &amp; Clinic</span>
        <strong style="color: var(--text-main); font-size: 0.95rem;">${BOOKING_STATE.store}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
        <span style="color: var(--text-muted); font-size: 0.9rem;">Date &amp; Time</span>
        <strong style="color: var(--color-primary); font-size: 0.95rem;">${BOOKING_STATE.formattedDate} at ${BOOKING_STATE.time}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
        <span style="color: var(--text-muted); font-size: 0.9rem;">Patient Legal Name</span>
        <strong style="color: var(--text-main); font-size: 0.95rem;">${BOOKING_STATE.patient.fullName}</strong>
      </div>
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
        <span style="color: var(--text-muted); font-size: 0.9rem;">Contact Phone &amp; Email</span>
        <strong style="color: var(--text-main); font-size: 0.95rem;">${BOOKING_STATE.patient.phone} | ${BOOKING_STATE.patient.email}</strong>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span style="color: var(--text-muted); font-size: 0.9rem;">Estimated Cost</span>
        <strong style="color: var(--color-primary); font-size: 1.05rem;">${BOOKING_STATE.typePrice}</strong>
      </div>
    </div>
  `;
}

function confirmBookingReceipt() {
  const randNum = Math.floor(10000 + Math.random() * 90000);
  BOOKING_STATE.referenceId = `#STK-${randNum}`;

  const receiptBox = document.querySelector('#bookingConfirmationReceipt');
  if (!receiptBox) return;

  receiptBox.innerHTML = `
    <div style="text-align: center; padding: 30px 10px;">
      <div style="width: 72px; height: 72px; border-radius: 50%; background-color: var(--color-primary-subtle); color: var(--color-primary); display: inline-flex; align-items: center; justify-content: center; font-size: 2.2rem; margin-bottom: 20px;">
        <i class="bi bi-calendar-check-fill"></i>
      </div>
      <h2 style="margin-bottom: 8px;">Appointment Confirmed!</h2>
      <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 24px;">
        Booking Reference: <strong style="color: var(--color-primary); font-size: 1.25rem;">${BOOKING_STATE.referenceId}</strong>
      </p>

      <div style="background-color: var(--bg-surface); border: 1.5px dashed var(--border-color); border-radius: var(--radius-md); padding: 24px; max-width: 580px; margin: 0 auto 30px; text-align: left;">
        <div style="margin-bottom: 12px;">
          <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Location</span>
          <div style="font-weight: 700; font-size: 1rem; color: var(--text-main);">${BOOKING_STATE.store}</div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 12px;">
          <div>
            <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Date</span>
            <div style="font-weight: 700; color: var(--text-main);">${BOOKING_STATE.formattedDate}</div>
          </div>
          <div>
            <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Time Slot</span>
            <div style="font-weight: 700; color: var(--color-primary);">${BOOKING_STATE.time}</div>
          </div>
        </div>
        <div>
          <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Attending Patient</span>
          <div style="font-weight: 600; color: var(--text-main);">${BOOKING_STATE.patient.fullName} (${BOOKING_STATE.patient.email})</div>
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
        <button class="btn btn-outline" onclick="window.print()">
          <i class="bi bi-printer me-1"></i> Print Confirmation
        </button>
        <button class="btn btn-outline-primary" onclick="showToast('Calendar invite (.ics) downloaded')">
          <i class="bi bi-calendar-plus me-1"></i> Add to Calendar
        </button>
        <a href="products.html" class="btn btn-primary">
          Explore Eyewear Collections →
        </a>
      </div>
    </div>
  `;

  if (window.showToast) {
    window.showToast(`Appointment ${BOOKING_STATE.referenceId} confirmed! SMS & email sent.`);
  }
}
