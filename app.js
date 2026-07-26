const hrsgConfig = {
    steps: [
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
    ],
    components: {
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
        },
        "comp-hrsg-body": {
            title: "เครื่องผลิตไอน้ำดึงความร้อนกลับมาใช้ (HRSG)",
            desc: "หม้อไอน้ำขนาดใหญ่ที่รับความร้อนทิ้งจากกังหันแก๊สมาผลิตไอน้ำไปเดินเครื่องกังหันไอน้ำ ประกอบด้วย Economizer, Evaporator, Steam Drum, และ Superheater",
            specs: {
                "ประเภทเครื่อง": "Horizontal Type, Tri-Pressure",
                "ความร้อนนำกลับมาใช้": "ดึงกลับมาราว 70% ของพลังงานเสีย",
                "การแลกเปลี่ยนความร้อน": "ผ่านขดท่อครีบหนาแน่น (Finned Tubes)",
                "ระบบโครงสร้าง": "รับความร้อนทางเดียว (Exhaust Gas Path)"
            }
        }
    }
};

const fgdConfig = {
    steps: [
        {
            id: 0,
            num: "ขั้นตอนที่ 1",
            title: "ก๊าซไอเสียมีซัลเฟอร์ (Raw Flue Gas)",
            desc: "ก๊าซไอเสียดิบจากการเผาไหม้ถ่านหินลิกไนต์ที่ผ่านเครื่องดักฝุ่นไฟฟ้า (ESP) เข้าสู่ท่อทางเข้าของ FGD โดยมี SO2 ปนเปื้อนสูง",
            highlightId: "comp-fgd-inlet",
            activeFlows: ["flow-fgd-gas-in", "flow-fgd-gas-buf"],
            metrics: { temp: "135 °C", press: "-0.5 kPa", flow: "950 m³/s", output: "SO2: ~ 2,500 ppm" }
        },
        {
            id: 1,
            num: "ขั้นตอนที่ 2",
            title: "เพิ่มแรงขับด้วยพัดลม Booster Fan",
            desc: "Booster Fan เพิ่มแรงลมขับส่งไอเสียดิบปริมาณมากเข้าสู่ด้านล่างหอดูดซับ (Absorber Tower) อย่างเสถียร",
            highlightId: "comp-fgd-fan",
            activeFlows: ["flow-fgd-gas-buf", "flow-fgd-gas-tower"],
            metrics: { temp: "135 °C", press: "+4.5 kPa", flow: "950 m³/s", output: "ความเร็วรอบใบพัดสูง" }
        },
        {
            id: 2,
            num: "ขั้นตอนที่ 3",
            title: "ฉีดพ่นน้ำปูนหินปูน (Limestone Spray)",
            desc: "น้ำปูนหินปูน (Limestone Slurry) ความเข้มข้นสูงถูกฉีดจาก Spray Headers ลงมาด้านล่างเพื่อกระจายพื้นที่ทำปฏิกิริยากับก๊าซ",
            highlightId: "comp-fgd-sprays",
            activeFlows: ["flow-limestone-pump", "flow-limestone-sprays"],
            metrics: { temp: "สเปรย์ระบายความร้อน", press: "0.8 bar", flow: "16,000 m³/h", output: "pH สารละลาย: 5.5 - 6.2" }
        },
        {
            id: 3,
            num: "ขั้นตอนที่ 4",
            title: "ทำปฏิกิริยาเคมีดูดซับ SO2 (Absorption)",
            desc: "ก๊าซ SO2 สัมผัสละอองปูน เกิดปฏิกิริยาทำลายกรดกลายเป็นสารละลายกึ่งยิปซัม (Calcium Sulfite) ตกลงสู่ถังก้นหอดูดซับ",
            highlightId: "comp-fgd-absorber",
            activeFlows: ["flow-fgd-gas-tower", "flow-limestone-sprays", "flow-gypsum-recycle"],
            metrics: { temp: "ลดเหลือ ~ 50 °C", press: "ดรอปเล็กน้อย", flow: "ก๊าซยกตัวขึ้นบน", output: "ดูดซับ SO2 ขจัดได้ > 96%" }
        },
        {
            id: 4,
            num: "ขั้นตอนที่ 5",
            title: "เป่าอากาศอัดทำปฏิกิริยาออกซิเดชัน",
            desc: "เครื่องเป่าลม Oxidation Air Blower อัดอากาศใส่ถังก้นหอเพื่อแปลงแคลเซียมซัลไฟต์ให้กลายเป็นแคลเซียมซัลเฟต (ยิปซัมสมบูรณ์)",
            highlightId: "comp-fgd-blower",
            activeFlows: ["flow-air-blower", "flow-air-bubbles"],
            metrics: { temp: "อุณหภูมิก้นหอ 50°C", press: "1.1 bar", flow: "120 Nm³/min", output: "เปลี่ยนโครงสร้างเป็น ยิปซัม" }
        },
        {
            id: 5,
            num: "ขั้นตอนที่ 6",
            title: "สลัดรีดน้ำยิปซัมไปใช้งานต่อ (Dewatering)",
            desc: "ปั๊มดูดตะกอนยิปซัมข้นก้นหอส่งเข้าเครื่องรีดสลัดแยกน้ำเพื่อผลิตแผ่นยิปซัมหรือปูนซีเมนต์ และเอาน้ำกลับมาใช้ใหม่",
            highlightId: "comp-fgd-dewatering",
            activeFlows: ["flow-gypsum-out", "flow-gypsum-belt"],
            metrics: { temp: "อุณหภูมิปกติ", press: "สุญญากาศสายพาน", flow: "48 ตัน/ชม.", output: "ความชื้นต่ำกว่า 10%" }
        },
        {
            id: 6,
            num: "ขั้นตอนที่ 7",
            title: "ดักละอองน้ำและปล่อยก๊าซสะอาดออก stack",
            desc: "ก๊าซสะอาดลอยตัวผ่าน Mist Eliminator ดักละอองน้ำปูนก่อนระบายออกทางปล่องควันเปียก (Wet Stack) สู่ชั้นบรรยากาศอย่างสะอาด",
            highlightId: "comp-fgd-mist",
            activeFlows: ["flow-fgd-gas-clean", "flow-fgd-gas-stack"],
            metrics: { temp: "50 °C (ควันขาวชื้น)", press: "ปกติ", flow: "920 m³/s", output: "SO2 ปล่อยออก: < 50 ppm" }
        }
    ],
    components: {
        "comp-fgd-inlet": {
            title: "ท่อก๊าซไอเสียเข้า (Flue Gas Inlet)",
            desc: "ท่อนำส่งก๊าซไอเสียที่ผ่านการดักจับฝุ่นละอองจากเครื่องตกตะกอนไฟฟ้าสถิต (ESP) ของโรงไฟฟ้าถ่านหินแม่เมาะ เพื่อนำเข้าสู่ระบบบำบัดมลพิษ",
            specs: {
                "ปริมาณ SO2 ขาเข้า": "2,500 ppm",
                "อัตราการไหลก๊าซ": "950 m³/s",
                "อุณหภูมิก๊าซขาเข้า": "135 °C",
                "ปริมาณฝุ่นหลงเหลือ": "< 40 mg/Nm³"
            }
        },
        "comp-fgd-fan": {
            title: "พัดลมเพิ่มแรงดันไอเสีย (Booster Fan)",
            desc: "พัดลมขับแรงดันส่งก๊าซไอเสียขนาดใหญ่ เพื่อเอาชนะความต้านทานแรงดันลมภายในหอดูดซับและระบบท่อส่งก๊าซ ช่วยดึงไอเสียดิบไม่ให้ตีกลับไปกระทบหม้อต้มโรงไฟฟ้า",
            specs: {
                "กำลังมอเตอร์ขับเคลื่อน": "3,200 kW",
                "ประเภทพัดลม": "Axial Fan (ปรับมุมใบพัดขณะหมุน)",
                "แรงดันส่งดัน": "+4.5 kPa",
                "การควบคุมความเร็ว": "ชุดควบคุม VFD"
            }
        },
        "comp-fgd-absorber": {
            title: "หอดูดซับซัลเฟอร์ (Absorber Tower)",
            desc: "หอคอยทำปฏิกิริยาหลักแบบเปียก (Wet Limestone-Gypsum) ออกแบบให้ก๊าซไอเสียไหลสัมผัสอย่างใกล้ชิดกับละอองสารละลายหินปูน เพื่อสลายกำจัดก๊าซซัลเฟอร์ไดออกไซด์",
            specs: {
                "ความสูงรวมหอคอย": "45 เมตร",
                "เส้นผ่านศูนย์กลาง": "18 เมตร",
                "ประสิทธิภาพกำจัด SO2": "96 - 98%",
                "วัสดุเคลือบป้องกันกรด": "Alloy 2205 และยางสังเคราะห์หนาพิเศษ"
            }
        },
        "comp-fgd-limestone": {
            title: "ระบบผสมเตรียมหินปูน (Limestone Slurry System)",
            desc: "ถังเตรียมและถังเก็บหินปูนบดละเอียดผสมน้ำป้อน ช่วยกวนผสมรักษาความเข้มข้นที่เหมาะสมเพื่อเตรียมจ่ายจ่ายน้ำหินปูนเข้าหอดูดซับตามสัดส่วนปริมาณซัลเฟอร์ไอเสียจริง",
            specs: {
                "อัตราการจ่ายใช้หินปูน": "35 ตัน/ชั่วโมง",
                "ความเข้มข้นสารละลาย": "20 - 30% Solid by Weight",
                "ความละเอียดหินปูน": "95% ผ่านตะแกรง 325 mesh",
                "ความบริสุทธิ์หินปูน (CaCO3)": "> 90%"
            }
        },
        "comp-fgd-sprays": {
            title: "หัวฉีดสเปรย์หินปูน (Spray Headers & Pumps)",
            desc: "ชุดท่อจ่ายสารละลายพร้อมปั๊มสูบจ่ายน้ำปูนปริมาณสูงขึ้นไปฉีดสเปรย์กระจายลงมา ทำหน้าที่จับก๊าซ SO2 ทั่วถึงทุกตารางเซนติเมตรภายในหอดูดซับ",
            specs: {
                "จำนวนชั้นหัวฉีด": "4 ชั้นทำงานหลัก",
                "รูปแบบสเปรย์ฉีด": "Hollow Cone (ละอองทรงกรวยกลวงสัมผัสดีสุด)",
                "กำลังปั๊มจ่ายต่อชั้น": "4,000 m³/h (x4 เครื่อง)",
                "ความดันพ่นสเปรย์": "0.8 bar"
            }
        },
        "comp-fgd-blower": {
            title: "เครื่องเป่าอากาศออกซิเดชัน (Oxidation Air Blower)",
            desc: "เป่าอากาศป้อนเข้าไปที่ถังทำปฏิกิริยาด้านล่างหอคอย (Reaction Tank) เพื่อออกซิไดซ์แคลเซียมซัลไฟต์ให้เปลี่ยนสภาพสมบูรณ์กลายเป็นยิปซัมที่มีมูลค่าเชิงพาณิชย์",
            specs: {
                "กำลังผลิตลมเครื่องเป่า": "120 Nm³/min",
                "ความดันอากาศจ่าย": "1.1 bar",
                "มอเตอร์ขับเคลื่อน": "450 kW",
                "ชนิดเครื่องเป่าลม": "Centrifugal Blower"
            }
        },
        "comp-fgd-dewatering": {
            title: "ระบบผลิตสลัดน้ำยิปซัม (Gypsum Dewatering)",
            desc: "เครื่องสลัดน้ำแยกความชื้นระบบแรงเหวี่ยง Hydrocyclone และเครื่องกรองสายพานสุญญากาศรีดน้ำ เพื่อผลิตยิปซัมแห้งและดึงน้ำกลับเข้าระบบประหยัดการใช้น้ำป้อน",
            specs: {
                "กำลังผลิตยิปซัมแห้ง": "48 ตัน/ชั่วโมง",
                "ความชื้นผลิตภัณฑ์ยิปซัม": "< 10% H2O",
                "อัตราดึงน้ำน้ำกลับมาหมุนเวียน": "90%",
                "การนำไปใช้ต่อ": "อุตสาหกรรมปูนซีเมนต์และแผ่นยิปซัมบอร์ด"
            }
        },
        "comp-fgd-mist": {
            title: "แผงดักละอองน้ำ (Mist Eliminator)",
            desc: "แผงพลาสติกชนิดฟันปลาคู่ ติดตั้งก่อนทางก๊าซออก เพื่อคัดแยกละอองน้ำปูนเหลวที่เกาะไปกับก๊าซ ไม่ให้ระเหยหลุดรอดกัดกร่อนปล่องระบายควันสะดุด",
            specs: {
                "จำนวนชั้นดักกรอง": "2 ชั้นขัดขวางทิศทาง (Chevron)",
                "ประสิทธิภาพจับละอองน้ำ": "99.9% (ขนาดใหญ่กว่า 20 ไมครอน)",
                "น้ำล้างแผงดักกรอง": "ล้างอัตโนมัติเป็นระยะเพื่อป้องกันคราบสะสม",
                "วัสดุแผงกรอง": "Polypropylene (PP)"
            }
        },
        "comp-fgd-stack": {
            title: "ปล่องระบายไอเสียเปียก (Exhaust Wet Stack)",
            desc: "ปล่องปล่อยก๊าซไอเสียสะอาดของโรงไฟฟ้าแม่เมาะที่ผ่านการบำบัดขจัดซัลเฟอร์และฝุ่นเปียกจนสะอาดตามเกณฑ์มาตรฐานความปลอดภัยสิ่งแวดล้อมโลกแล้ว",
            specs: {
                "ความสูงปล่องระบาย": "150 เมตร",
                "อุณหภูมิก๊าซปล่อยออก": "50 °C (ไอชื้นควันสีขาวระเหยง่าย)",
                "ค่า SO2 ที่ระบายออก": "< 50 ppm (เกณฑ์มาตรฐาน < 180 ppm)",
                "ระบบวัดมลพิษ": "CEMS ทำงานและรายงานผลต่อเนื่อง"
            }
        }
    }
};

let currentTab = "hrsg";
let currentStep = 0;
let isPlaying = false;
let playInterval = null;
let currentHighlightedElement = null;

document.addEventListener("DOMContentLoaded", () => {
    initTabs();
    initControls();
    initDiagramInteractions();
    loadSystem(currentTab);
});

function initTabs() {
    const btnHrsg = document.getElementById("tab-hrsg");
    const btnFgd = document.getElementById("tab-fgd");

    btnHrsg.addEventListener("click", () => {
        if (currentTab === "hrsg") return;
        switchTab("hrsg");
    });

    btnFgd.addEventListener("click", () => {
        if (currentTab === "fgd") return;
        switchTab("fgd");
    });
}

function switchTab(tabName) {
    currentTab = tabName;
    
    // Update active tab buttons
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`tab-${tabName}`).classList.add("active");

    // Toggle SVG displays
    if (tabName === "hrsg") {
        document.getElementById("svg-hrsg").classList.remove("hidden");
        document.getElementById("svg-fgd").classList.add("hidden");
    } else {
        document.getElementById("svg-hrsg").classList.add("hidden");
        document.getElementById("svg-fgd").classList.remove("hidden");
    }

    // Reset details overlay
    document.getElementById("info-overlay").classList.remove("active");
    if (currentHighlightedElement) {
        currentHighlightedElement.classList.remove("highlighted");
        currentHighlightedElement = null;
    }

    if (isPlaying) pauseAutoplay();
    
    loadSystem(tabName);
}

function loadSystem(systemName) {
    const config = systemName === "hrsg" ? hrsgConfig : fgdConfig;
    
    // Update sidebar title and description
    if (systemName === "hrsg") {
        document.getElementById("sidebar-title").innerText = "ระบบต้มน้ำด้วยความร้อนทิ้ง (HRSG)";
        document.getElementById("sidebar-desc").innerText = "เรียนรู้การทำงานของเครื่องต้มน้ำด้วยก๊าซร้อนทิ้งของโรงไฟฟ้ากังหันแก๊สแบบขั้นตอนต่อขั้นตอน กดเลือกดูอุปกรณ์ หรือคลิกปุ่ม Auto Play";
    } else {
        document.getElementById("sidebar-title").innerText = "ระบบกำจัด SO2 (Wet FGD - แม่เมาะ)";
        document.getElementById("sidebar-desc").innerText = "เรียนรู้การทำงานของระบบบำบัดซัลเฟอร์ไดออกไซด์แบบเปียกของโรงไฟฟ้าแม่เมาะแบบขั้นตอนต่อขั้นตอน กดเลือกดูอุปกรณ์ หรือคลิกปุ่ม Auto Play";
    }
    
    // 1. Initialize steps list on sidebar
    const stepsListContainer = document.getElementById("steps-list");
    stepsListContainer.innerHTML = "";

    config.steps.forEach((step, idx) => {
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

    // 2. Load step 0
    setStep(0);
}

function initControls() {
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const btnPlay = document.getElementById("btn-play");
    const btnOverview = document.getElementById("btn-overview");
    const speedSlider = document.getElementById("speed-slider");
    const infoClose = document.getElementById("info-close");

    btnPrev.addEventListener("click", () => {
        const config = currentTab === "hrsg" ? hrsgConfig : fgdConfig;
        setStep((currentStep - 1 + config.steps.length) % config.steps.length);
        if (isPlaying) pauseAutoplay();
    });

    btnNext.addEventListener("click", () => {
        const config = currentTab === "hrsg" ? hrsgConfig : fgdConfig;
        setStep((currentStep + 1) % config.steps.length);
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
    const tooltip = document.getElementById("diagram-tooltip");
    const container = document.getElementById("canvas-container");

    // We listen on the container for clicks and hovers to handle components from both SVGs dynamically
    container.addEventListener("click", (e) => {
        // Find if we clicked on an interactive component
        const interactiveGroup = e.target.closest(".interactive-component");
        if (interactiveGroup) {
            e.stopPropagation();
            showComponentDetails(interactiveGroup.id);
        } else {
            // Clicked empty space: close overlay
            document.getElementById("info-overlay").classList.remove("active");
            if (currentHighlightedElement) {
                currentHighlightedElement.classList.remove("highlighted");
                currentHighlightedElement = null;
            }
        }
    });

    container.addEventListener("mousemove", (e) => {
        const interactiveGroup = e.target.closest(".interactive-component");
        if (interactiveGroup) {
            const config = currentTab === "hrsg" ? hrsgConfig : fgdConfig;
            const details = config.components[interactiveGroup.id];
            
            if (details) {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left + 15;
                const y = e.clientY - rect.top + 15;
                
                tooltip.style.left = `${x}px`;
                tooltip.style.top = `${y}px`;
                tooltip.style.opacity = "1";
                tooltip.innerText = details.title;
                return;
            }
        }
        tooltip.style.opacity = "0";
    });

    container.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
    });
}

function setStep(stepIndex) {
    currentStep = stepIndex;
    const config = currentTab === "hrsg" ? hrsgConfig : fgdConfig;
    const step = config.steps[stepIndex];

    // Update active class in sidebar
    document.querySelectorAll(".step-card").forEach((card, idx) => {
        if (idx === stepIndex) {
            card.classList.add("active");
            card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
            card.classList.remove("active");
        }
    });

    // Update bottom step info bar
    document.getElementById("current-step-num").innerText = step.num;
    document.getElementById("current-step-title").innerText = step.title;
    document.getElementById("current-step-desc").innerText = step.desc;

    // Highlight the active component in active SVG
    document.querySelectorAll(".interactive-component").forEach(comp => {
        comp.classList.remove("highlighted");
    });
    
    const activeComp = document.getElementById(step.highlightId);
    if (activeComp) {
        activeComp.classList.add("highlighted");
        currentHighlightedElement = activeComp;
    }

    // Set active flows in active SVG
    document.querySelectorAll(".flow-path").forEach(flow => {
        flow.classList.remove("active");
    });
    
    step.activeFlows.forEach(flowId => {
        const flows = document.querySelectorAll(`.${flowId}`);
        flows.forEach(f => f.classList.add("active"));
    });

    // Show details for primary component
    showComponentDetails(step.highlightId, true);
}

function showComponentDetails(compId, isStepChange = false) {
    const config = currentTab === "hrsg" ? hrsgConfig : fgdConfig;
    const details = config.components[compId];
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
    // Highlight all flows of the current system
    document.querySelectorAll(".flow-path").forEach(flow => {
        flow.classList.add("active");
    });

    // Remove specific highlighted component
    document.querySelectorAll(".interactive-component").forEach(comp => {
        comp.classList.remove("highlighted");
    });

    const overlay = document.getElementById("info-overlay");
    const specContainer = document.getElementById("info-specs");

    if (currentTab === "hrsg") {
        document.getElementById("info-title").innerText = "ภาพรวมระบบ Combined Cycle & HRSG";
        document.getElementById("info-desc").innerText = "ระบบโรงไฟฟ้าความร้อนร่วมนำไอเสียร้อนจากกังหันแก๊สมาต้มน้ำเพื่อหมุนกังหันไอน้ำ ช่วยรีดประสิทธิภาพการผลิตไฟฟ้าจากเชื้อเพลิงสูงสุดถึง 60% เมื่อเทียบกับโรงไฟฟ้าทั่วไป";
        
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
        
        document.getElementById("current-step-num").innerText = "ภาพรวม";
        document.getElementById("current-step-title").innerText = "Combined Cycle Plant Diagram";
        document.getElementById("current-step-desc").innerText = "ก๊าซร้อน (สีส้ม) เดินทางจากซ้ายไปขวาเพื่อต้มน้ำ (สีน้ำเงิน) ให้เดือดกลายเป็นไอน้ำ (สีชมพู) เข้ากังหันไอน้ำ";
    } else {
        document.getElementById("info-title").innerText = "ภาพรวมระบบกําจัด SO2 โรงไฟฟ้าแม่เมาะ (Wet FGD)";
        document.getElementById("info-desc").innerText = "ระบบกำจัดก๊าซซัลเฟอร์ไดออกไซด์แบบเปียกโดยใช้น้ำปูนหินปูน (Wet Limestone FGD) ขจัดมลพิษแก๊สที่เป็นกรดได้อย่างมีประสิทธิภาพสูงกว่า 96% และผลิตยิปซัมแห้งเป็นวัสดุพลอยได้";
        
        specContainer.innerHTML = `
            <div class="spec-item" style="grid-column: 1 / -1;">
                <div class="spec-label">ประสิทธิภาพการขจัดก๊าซ SO2 (SO2 Removal)</div>
                <div class="spec-value" style="color: #10b981; font-size: 1rem;">> 96% (ผ่านมาตรฐานสิ่งแวดล้อม)</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">อัตราสารละลายหินปูนที่จ่าย</div>
                <div class="spec-value">35 t/h</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">กำลังผลิตยิปซัมแห้งผลผลิต</div>
                <div class="spec-value">48 t/h</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">ปริมาณก๊าซบำบัด</div>
                <div class="spec-value">950 m³/s</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">อุณหภูมิก๊าซสะอาดปลาย stack</div>
                <div class="spec-value">~ 50 °C (ควันชื้นสีขาว)</div>
            </div>
        `;
        
        document.getElementById("current-step-num").innerText = "ภาพรวม";
        document.getElementById("current-step-title").innerText = "Wet FGD Plant Diagram (Mae Moh)";
        document.getElementById("current-step-desc").innerText = "ก๊าซเสีย (สีเทา) วิ่งผ่าน Booster Fan เข้ามาฉีดสเปรย์พ่นหินปูน (สีเทาอ่อน) เกิดปฏิกิริยากลายเป็นยิปซัมป้อนออกก้นถัง (สีเหลือง)";
    }

    overlay.classList.add("active");
    
    // Clear sidebar active class
    document.querySelectorAll(".step-card").forEach(card => card.classList.remove("active"));
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
        const config = currentTab === "hrsg" ? hrsgConfig : fgdConfig;
        setStep((currentStep + 1) % config.steps.length);
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
