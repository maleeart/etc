const steps = [
    {
        id: 0,
        num: "ขั้นตอนที่ 1",
        title: "จุดเริ่มต้นกังหันแก๊ส (Gas Turbine)",
        desc: "อากาศและเชื้อเพลิงถูกอัดเผาไหม้ ขับเคลื่อนกังหันแก๊สผลิตไฟฟ้าเฟสแรก และปล่อยไอเสียร้อนจัด (580°C) ออกมา",
        highlightId: "comp-gas-turbine",
        activeFlows: ["flow-gas-duct-1", "flow-gas-duct-2"],
        metrics: { temp: "580 °C", press: "1.2 bar", flow: "650 kg/s", output: "150 MW" }
    },
    {
        id: 1,
        num: "ขั้นตอนที่ 2",
        title: "ส่งไอเสียร้อนเข้าสู่ระบบ HRSG",
        desc: "ไอเสียร้อนจัดจากกังหันแก๊สไหลผ่านโครงสร้างแนวตั้งของ HRSG ถ่ายเทความร้อนให้ท่ออุปกรณ์ต่างๆ ก่อนออกปล่องระบาย",
        highlightId: "comp-hrsg-body",
        activeFlows: ["flow-gas-duct-2", "flow-gas-in-hrsg", "flow-gas-stack"],
        metrics: { temp: "580°C → 105°C", press: "ความดันต่ำ", flow: "650 kg/s", output: "นำความร้อนกลับมาใช้" }
    },
    {
        id: 2,
        num: "ขั้นตอนที่ 3",
        title: "อุ่นน้ำป้อนที่เครื่อง Economizer",
        desc: "น้ำป้อนเย็น (Feedwater) ถูกฉีดเข้า Economizer ซึ่งอยู่ท้ายสุดเพื่อดึงความร้อนไอเสียช่วงสุดท้ายมาอุ่นน้ำให้ร้อนจัดก่อนเข้ากลองไอน้ำ",
        highlightId: "comp-economizer",
        activeFlows: ["flow-feedwater-in", "flow-eco-tubes", "flow-eco-to-drum"],
        metrics: { temp: "130°C → 280°C", press: "125 bar", flow: "220 t/h", output: "ประสิทธิภาพเพิ่ม +9%" }
    },
    {
        id: 3,
        num: "ขั้นตอนที่ 4",
        title: "ต้มน้ำและแยกไอที่ Evaporator & Drum",
        desc: "น้ำจาก Steam Drum ไหลเวียนเข้า Evaporator รับความร้อนจนเดือดกลายเป็นไออิ่มตัว (Saturated Steam) แล้วลอยตัวกลับเข้าถังแยกเฟส",
        highlightId: "comp-evaporator",
        activeFlows: ["flow-drum-downcomer", "flow-eva-tubes", "flow-eva-to-drum"],
        metrics: { temp: "315 °C", press: "110 bar", flow: "ธรรมชาติหมุนเวียน", output: "ไอน้ำอิ่มตัว 99.9%" }
    },
    {
        id: 4,
        num: "ขั้นตอนที่ 5",
        title: "ผลิตไอน้ำร้อนจัดที่ Superheater",
        desc: "ไอน้ำแห้งจาก Steam Drum ไหลเข้าชุดท่อ Superheater รับไอเสียร้อนจัดหน้าสุด ทำให้มีอุณหภูมิสูงขึ้นเป็นไอน้ำร้อนจัด (Superheated Steam)",
        highlightId: "comp-superheater",
        activeFlows: ["flow-drum-to-sh", "flow-sh-tubes", "flow-sh-to-turbine"],
        metrics: { temp: "540 °C", press: "105 bar", flow: "220 t/h", output: "พลังงานจลน์สูงสุด" }
    },
    {
        id: 5,
        num: "ขั้นตอนที่ 6",
        title: "ขับเคลื่อนกังหันไอน้ำ (Steam Turbine)",
        desc: "ไอน้ำร้อนจัดแรงดันสูงมากวิ่งไปฉีดขับใบพัดกังหันไอน้ำเพื่อหมุนเครื่องกำเนิดไฟฟ้า ผลิตไฟฟ้าเฟสสองโดยไม่ต้องใช้เชื้อเพลิงเพิ่ม",
        highlightId: "comp-steam-turbine",
        activeFlows: ["flow-sh-to-turbine", "flow-turbine-exhaust"],
        metrics: { temp: "538 °C", press: "102 bar → สุญญากาศ", flow: "3,000 rpm", output: "75 MW" }
    },
    {
        id: 6,
        num: "ขั้นตอนที่ 7",
        title: "ควบแน่นและปั๊มกลับวนลูปปิด",
        desc: "ไอเสียจากกังหันควบแน่นเป็นน้ำป้อนบริสุทธิ์ที่ Condenser และถูกปั๊มน้ำแรงดันสูงส่งกลับไปยัง Economizer เพื่อเริ่มขั้นตอนใหม่อีกครั้ง",
        highlightId: "comp-condenser",
        activeFlows: ["flow-condensate-pump", "flow-feedwater-in"],
        metrics: { temp: "42 °C", press: "-0.92 bar (สุญญากาศ)", flow: "250 m³/h", output: "การทำงานระบบปิด 100%" }
    }
];

const componentDetails = {
    "comp-gas-turbine": {
        title: "กังหันแก๊ส (Gas Turbine)",
        desc: "หน่วยผลิตไฟฟ้าหลักที่เผาไหม้แก๊สธรรมชาติกับอากาศแรงดันสูง ผลิตกระแสไฟฟ้าเฟสแรก และระบายก๊าซไอเสียพลังงานความร้อนสูงป้อนเข้าสู่ระบบ HRSG",
        specs: {
            "อุณหภูมิไอเสีย": "580 °C",
            "อัตราการไหลของแก๊ส": "650 kg/s",
            "กำลังการผลิตไฟฟ้า": "150 MW",
            "ประสิทธิภาพความร้อน": "ประมาณ 38%"
        }
    },
    "comp-superheater": {
        title: "เครื่องเพิ่มความร้อนไอน้ำ (Superheater)",
        desc: "ชุดท่อแลกเปลี่ยนความร้อนที่ติดตั้งอยู่หน้าสุดของ HRSG ทำหน้าที่รับความร้อนสูงจัดจากไอเสียแก๊สโดยตรง เพื่อเพิ่มอุณหภูมิไออิ่มตัวให้กลายเป็นไอน้ำแห้งร้อนจัด (Superheated Steam) แรงดันสูง ป้องกันความเสียหายจากละอองน้ำที่จะไปทำลายใบพัดกังหันไอน้ำ",
        specs: {
            "อุณหภูมิไอน้ำขาออก": "540 °C",
            "ความดันไอน้ำใช้งาน": "105 bar",
            "อัตราการผลิตไอน้ำ": "220 ตัน/ชั่วโมง",
            "วัสดุทำท่อรับความร้อน": "Alloy Steel (T91/T92)"
        }
    },
    "comp-evaporator": {
        title: "เครื่องต้มน้ำ/ผลิตไอน้ำ (Evaporator)",
        desc: "ส่วนกลางของ HRSG ทำหน้าที่แลกเปลี่ยนความร้อนอย่างหนาแน่นเพื่อต้มน้ำร้อนจัดในท่อจนกลายเป็นไอน้ำอิ่มตัว (Saturated Steam) โดยระบบจะป้อนน้ำร้อนจาก Steam Drum ไหลวนเวียนผ่านแผงท่อนี้อย่างทั่วถึง",
        specs: {
            "อุณหภูมิใช้งาน": "315 °C",
            "การถ่ายเทความร้อน": "85 MW",
            "รูปแบบการไหลเวียน": "หมุนเวียนตามธรรมชาติ (Natural Circulation)",
            "พื้นที่ผิวสัมผัสท่อ": "12,500 ตารางเมตร"
        }
    },
    "comp-economizer": {
        title: "เครื่องอุ่นน้ำป้อน (Economizer)",
        desc: "ชุดท่อแลกเปลี่ยนความร้อนส่วนท้ายสุดของระบบ HRSG ดึงความร้อนที่เหลือจากแก๊สไอเสียที่กำลังจะออกปล่อง (ช่วงประมาณ 200°C) มาอุ่นน้ำป้อน (Feedwater) ก่อนส่งเข้า Steam Drum ช่วยให้ประหยัดพลังงานความร้อนป้อนและเพิ่มประสิทธิภาพรวม",
        specs: {
            "อุณหภูมิน้ำเข้า": "130 °C",
            "อุณหภูมิน้ำอุ่นออก": "280 °C",
            "ความดันน้ำใช้งาน": "125 bar",
            "สัดส่วนการช่วยประหยัด": "เพิ่มประสิทธิภาพโรงไฟฟ้า 8-10%"
        }
    },
    "comp-steam-drum": {
        title: "ถังไอน้ำ (Steam Drum)",
        desc: "ถังขนาดใหญ่ติดตั้งที่ส่วนบนของ HRSG ทำหน้าที่เป็นตัวกลางแยกเฟสระหว่างน้ำร้อนและไอน้ำ โดยจะคัดแยกไอน้ำแห้งส่งต่อไปยัง Superheater และจ่ายน้ำส่วนที่เหลือที่เป็นของเหลวลงสู่ Evaporator เพื่อต้มซ้ำ",
        specs: {
            "ความจุภายใน": "45 ลูกบาศก์เมตร",
            "ความดันออกแบบ": "135 bar",
            "อุปกรณ์แยกไอภายใน": "Cyclone Separators & Demister",
            "สัดส่วนน้ำ / ไอ": "50% / 50%"
        }
    },
    "comp-steam-turbine": {
        title: "กังหันไอน้ำ (Steam Turbine)",
        desc: "รับไอน้ำร้อนจัดความดันสูงจาก Superheater มาฉีดพ่นขับเคลื่อนใบพัดกังหันให้หมุนด้วยความเร็วสูง เชื่อมต่อกับเครื่องกำเนิดไฟฟ้าผลิตกระแสไฟฟ้าเพิ่มได้อีกราว 50% ของกำลังการผลิตกังหันแก๊ส โดยไม่ต้องเผาผลาญเชื้อเพลิงเพิ่ม",
        specs: {
            "ความเร็วรอบใช้งาน": "3,000 rpm",
            "ความดันไอน้ำเข้า": "102 bar",
            "กำลังการผลิตไฟฟ้า": "75 MW",
            "เกรดความร้อนไอน้ำเข้า": "High Pressure (HP) Stage"
        }
    },
    "comp-condenser": {
        title: "เครื่องควบแน่นไอน้ำ (Condenser)",
        desc: "ทำหน้าที่ลดอุณหภูมิไอน้ำไอเสียจากกังหันไอน้ำให้กลั่นตัวกลับเป็นน้ำป้อนบริสุทธิ์ (Condensate) ด้วยการแลกเปลี่ยนความร้อนกับน้ำหล่อเย็นภายนอก พร้อมสร้างสภาวะสุญญากาศช่วยดูดดึงไอน้ำขับเคลื่อนกังหันให้มีกำลังสูงสุด",
        specs: {
            "ระดับสุญญากาศห้องควบ": "-0.92 bar",
            "อุณหภูมิน้ำควบแน่น": "42 °C",
            "อัตราไหลน้ำหล่อเย็น": "15,000 m³/h",
            "ชนิดทางวิศวกรรม": "Shell and Tube Condenser"
        }
    },
    "comp-feedwater-pump": {
        title: "ปั๊มน้ำป้อนระบบ (Feedwater Pump)",
        desc: "ปั๊มน้ำแรงดันสูง ทำหน้าที่อัดน้ำป้อนบริสุทธิ์จากถังพักน้ำส่งกลับขึ้นไปป้อนเข้าสู่เครื่อง Economizer ของระบบ HRSG เพื่อหมุนเวียนเริ่มวงจรใหม่อีกครั้งอย่างต่อเนื่อง",
        specs: {
            "แรงดันส่งออกปั๊ม": "130 bar",
            "อัตราการไหลส่งน้ำ": "250 m³/h",
            "กำลังขับเคลื่อนมอเตอร์": "1,200 kW",
            "ประเภทปั๊ม": "Multistage Centrifugal Pump"
        }
    },
    "comp-chimney": {
        title: "ปล่องไอเสีย (Exhaust Stack)",
        desc: "ปล่องท้ายสุดของ HRSG ทำหน้าที่ระบายแก๊สไอเสียที่ดึงความร้อนออกไปใช้งานหมดแล้ว (อุณหภูมิเหลือประมาณ 105°C) ออกสู่ชั้นบรรยากาศอย่างปลอดภัย พร้อมติดตั้งเซ็นเซอร์ตรวจวัดมลพิษตลอด 24 ชั่วโมง",
        specs: {
            "ความสูงโครงสร้าง": "60 เมตร",
            "อุณหภูมิไอเสียระบายออก": "105 °C",
            "ระบบตรวจสอบมลพิษ": "CEMS (Continuous Emission Monitoring)"
        }
    }
};

let currentStep = 0;
let isPlaying = false;
let playInterval = null;
let currentHighlightedElement = null;

document.addEventListener("DOMContentLoaded", () => {
    initSidebar();
    initControls();
    initDiagramInteractions();
    setStep(0);
});

function initSidebar() {
    const stepsListContainer = document.getElementById("steps-list");
    stepsListContainer.innerHTML = "";

    steps.forEach((step, idx) => {
        const card = document.createElement("div");
        card.className = "step-card";
        card.id = `step-card-${idx}`;
        card.innerHTML = `
            <div class="step-header">
                <span class="step-num">${step.num}</span>
            </div>
            <div class="step-title">${step.title}</div>
            <div class="step-desc">${step.desc}</div>
        `;
        card.addEventListener("click", () => {
            setStep(idx);
            if (isPlaying) pauseAutoplay();
        });
        stepsListContainer.appendChild(card);
    });
}

function initControls() {
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const btnPlay = document.getElementById("btn-play");
    const btnOverview = document.getElementById("btn-overview");
    const speedSlider = document.getElementById("speed-slider");
    const infoClose = document.getElementById("info-close");

    btnPrev.addEventListener("click", () => {
        setStep((currentStep - 1 + steps.length) % steps.length);
        if (isPlaying) pauseAutoplay();
    });

    btnNext.addEventListener("click", () => {
        setStep((currentStep + 1) % steps.length);
        if (isPlaying) pauseAutoplay();
    });

    btnPlay.addEventListener("click", () => {
        if (isPlaying) {
            pauseAutoplay();
        } else {
            startAutoplay();
        }
    });

    btnOverview.addEventListener("click", () => {
        showOverview();
        if (isPlaying) pauseAutoplay();
    });

    speedSlider.addEventListener("input", (e) => {
        const val = e.target.value;
        document.documentElement.style.setProperty("--flow-speed-scale", val);
        document.getElementById("speed-display").innerText = val + "x";
    });

    infoClose.addEventListener("click", () => {
        document.getElementById("info-overlay").classList.remove("active");
        if (currentHighlightedElement) {
            currentHighlightedElement.classList.remove("highlighted");
            currentHighlightedElement = null;
        }
    });
}

function initDiagramInteractions() {
    const interactiveComponents = document.querySelectorAll(".interactive-component");
    const tooltip = document.getElementById("diagram-tooltip");
    const container = document.getElementById("canvas-container");

    interactiveComponents.forEach(comp => {
        const compId = comp.id;
        const details = componentDetails[compId];

        if (details) {
            comp.addEventListener("click", (e) => {
                e.stopPropagation();
                showComponentDetails(compId);
            });

            comp.addEventListener("mousemove", (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left + 15;
                const y = e.clientY - rect.top + 15;
                
                tooltip.style.left = `${x}px`;
                tooltip.style.top = `${y}px`;
                tooltip.style.opacity = "1";
                tooltip.innerText = details.title;
            });

            comp.addEventListener("mouseleave", () => {
                tooltip.style.opacity = "0";
            });
        }
    });

    // Close info popup when clicking elsewhere on the canvas
    container.addEventListener("click", () => {
        document.getElementById("info-overlay").classList.remove("active");
        if (currentHighlightedElement) {
            currentHighlightedElement.classList.remove("highlighted");
            currentHighlightedElement = null;
        }
    });
}

function setStep(stepIndex) {
    // Update state
    currentStep = stepIndex;
    const step = steps[stepIndex];

    // Update active class in sidebar
    document.querySelectorAll(".step-card").forEach((card, idx) => {
        if (idx === stepIndex) {
            card.classList.add("active");
            card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
            card.classList.remove("active");
        }
    });

    // Update step info panel
    document.getElementById("current-step-num").innerText = step.num;
    document.getElementById("current-step-title").innerText = step.title;
    document.getElementById("current-step-desc").innerText = step.desc;

    // Highlight the active component in diagram
    document.querySelectorAll(".interactive-component").forEach(comp => {
        comp.classList.remove("highlighted");
    });
    const activeComp = document.getElementById(step.highlightId);
    if (activeComp) {
        activeComp.classList.add("highlighted");
        currentHighlightedElement = activeComp;
    }

    // Set active flows in diagram
    document.querySelectorAll(".flow-path").forEach(flow => {
        flow.classList.remove("active");
    });
    
    step.activeFlows.forEach(flowId => {
        const flows = document.querySelectorAll(`.${flowId}`);
        flows.forEach(f => f.classList.add("active"));
    });

    // Open detail panel for the step's primary component
    showComponentDetails(step.highlightId, true);
}

function showComponentDetails(compId, isStepChange = false) {
    const details = componentDetails[compId];
    if (!details) return;

    // Highlight component in SVG
    if (!isStepChange) {
        document.querySelectorAll(".interactive-component").forEach(comp => {
            comp.classList.remove("highlighted");
        });
        const compElem = document.getElementById(compId);
        if (compElem) {
            compElem.classList.add("highlighted");
            currentHighlightedElement = compElem;
        }
    }

    // Update Detail Panel Info
    const overlay = document.getElementById("info-overlay");
    document.getElementById("info-title").innerText = details.title;
    document.getElementById("info-desc").innerText = details.desc;

    const specContainer = document.getElementById("info-specs");
    specContainer.innerHTML = "";

    Object.entries(details.specs).forEach(([label, val]) => {
        const item = document.createElement("div");
        item.className = "spec-item";
        item.innerHTML = `
            <div class="spec-label">${label}</div>
            <div class="spec-value">${val}</div>
        `;
        specContainer.appendChild(item);
    });

    overlay.classList.add("active");
}

function showOverview() {
    // Highlight all flows
    document.querySelectorAll(".flow-path").forEach(flow => {
        flow.classList.add("active");
    });

    // Remove specific highlighted component
    document.querySelectorAll(".interactive-component").forEach(comp => {
        comp.classList.remove("highlighted");
    });

    // Show overall stats in info panel
    const overlay = document.getElementById("info-overlay");
    document.getElementById("info-title").innerText = "ภาพรวมระบบ Combined Cycle & HRSG";
    document.getElementById("info-desc").innerText = "ระบบโรงไฟฟ้าความร้อนร่วมนำไอเสียร้อนจากกังหันแก๊สมาต้มน้ำเพื่อหมุนกังหันไอน้ำ ช่วยรีดประสิทธิภาพการผลิตไฟฟ้าจากเชื้อเพลิงสูงสุดถึง 60% เมื่อเทียบกับโรงไฟฟ้าทั่วไป";
    
    const specContainer = document.getElementById("info-specs");
    specContainer.innerHTML = `
        <div class="spec-item" style="grid-column: 1 / -1;">
            <div class="spec-label">ประสิทธิภาพโรงไฟฟ้ารวม (Efficiency)</div>
            <div class="spec-value" style="color: #10b981; font-size: 1rem;">~ 58 - 60% (เทียบเดิม 38%)</div>
        </div>
        <div class="spec-item">
            <div class="spec-label">กำลังผลิต Gas Turbine</div>
            <div class="spec-value">150 MW</div>
        </div>
        <div class="spec-item">
            <div class="spec-label">กำลังผลิต Steam Turbine</div>
            <div class="spec-value">75 MW</div>
        </div>
        <div class="spec-item">
            <div class="spec-label">แรงดันไอน้ำหลัก (Main Steam)</div>
            <div class="spec-value">105 bar</div>
        </div>
        <div class="spec-item">
            <div class="spec-label">อุณหภูมิไอเสียปลาย stack</div>
            <div class="spec-value">105 °C</div>
        </div>
    `;

    overlay.classList.add("active");

    // Clear sidebar active class
    document.querySelectorAll(".step-card").forEach(card => card.classList.remove("active"));
    document.getElementById("current-step-num").innerText = "ภาพรวม";
    document.getElementById("current-step-title").innerText = "Combined Cycle Plant Diagram";
    document.getElementById("current-step-desc").innerText = "ก๊าซร้อน (สีส้ม) เดินทางจากซ้ายไปขวาเพื่อต้มน้ำ (สีน้ำเงิน) ให้เดือดกลายเป็นไอน้ำ (สีชมพู) เข้ากังหันไอน้ำ";
}

function startAutoplay() {
    isPlaying = true;
    const playBtn = document.getElementById("btn-play");
    playBtn.innerHTML = `
        <svg style="width: 14px; height: 14px; display: inline; vertical-align: middle; margin-right: 4px;" viewBox="0 0 24 24" fill="currentColor">
            <rect x="4" y="4" width="6" height="16" rx="1"/>
            <rect x="14" y="4" width="6" height="16" rx="1"/>
        </svg>
        <span>Pause</span>
    `;
    playBtn.classList.add("btn-primary");

    playInterval = setInterval(() => {
        setStep((currentStep + 1) % steps.length);
    }, 6000);
}

function pauseAutoplay() {
    isPlaying = false;
    clearInterval(playInterval);
    const playBtn = document.getElementById("btn-play");
    playBtn.innerHTML = `
        <svg style="width: 14px; height: 14px; display: inline; vertical-align: middle; margin-right: 4px;" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21"/>
        </svg>
        <span>Auto Play</span>
    `;
    playBtn.classList.remove("btn-primary");
}
