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
    initNavigation();
    initAffiliateConverter();
    initAffiliateAnalytics();
    initCashflowGame();
    switchView("home"); // Start at the landing page
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
            if (window.innerWidth > 1024) {
                card.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        } else {
            card.classList.remove("active");
        }
    });

    // Update bottom step info bar
    document.getElementById("current-step-num").innerText = step.num;
    document.getElementById("current-step-title").innerText = step.title;
    document.getElementById("current-step-desc").innerText = step.desc;

    // Update floating HUD overlay on diagram with smooth slide-in animation
    const hud = document.getElementById("step-hud");
    hud.classList.remove("hud-animate");
    document.getElementById("hud-step-num").innerText = step.num;
    document.getElementById("hud-step-title").innerText = step.title;
    document.getElementById("hud-step-desc").innerText = step.desc;
    void hud.offsetWidth; // Trigger reflow
    hud.classList.add("hud-animate");

    // Highlight the active component in active SVG (Spotlight effect)
    const svgElem = currentTab === "hrsg" ? document.getElementById("svg-hrsg") : document.getElementById("svg-fgd");
    const otherSvgElem = currentTab === "hrsg" ? document.getElementById("svg-fgd") : document.getElementById("svg-hrsg");
    
    otherSvgElem.classList.remove("has-highlight");
    
    document.querySelectorAll(".interactive-component").forEach(comp => {
        comp.classList.remove("highlighted");
    });
    
    const activeComp = document.getElementById(step.highlightId);
    if (activeComp) {
        activeComp.classList.add("highlighted");
        currentHighlightedElement = activeComp;
        svgElem.classList.add("has-highlight");
    } else {
        svgElem.classList.remove("has-highlight");
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
    const svgElem = currentTab === "hrsg" ? document.getElementById("svg-hrsg") : document.getElementById("svg-fgd");
    if (!isStepChange) {
        document.querySelectorAll(".interactive-component").forEach(comp => {
            comp.classList.remove("highlighted");
        });
        const compElem = document.getElementById(compId);
        if (compElem) {
            compElem.classList.add("highlighted");
            currentHighlightedElement = compElem;
            svgElem.classList.add("has-highlight");
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

    // Clear spotlight dimming
    document.getElementById("svg-hrsg").classList.remove("has-highlight");
    document.getElementById("svg-fgd").classList.remove("has-highlight");

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
        
        // Update floating HUD overlay on diagram
        document.getElementById("hud-step-num").innerText = "ภาพรวม";
        document.getElementById("hud-step-title").innerText = "Combined Cycle Plant Diagram";
        document.getElementById("hud-step-desc").innerText = "ก๊าซร้อน (สีส้ม) เดินทางจากซ้ายไปขวาเพื่อต้มน้ำ (สีน้ำเงิน) ให้เดือดกลายเป็นไอน้ำ (สีชมพู) เข้ากังหันไอน้ำ";
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
        
        // Update floating HUD overlay on diagram
        document.getElementById("hud-step-num").innerText = "ภาพรวม";
        document.getElementById("hud-step-title").innerText = "Wet FGD Plant Diagram (Mae Moh)";
        document.getElementById("hud-step-desc").innerText = "ก๊าซเสีย (สีเทา) วิ่งผ่าน Booster Fan เข้ามาฉีดสเปรย์พ่นหินปูน (สีเทาอ่อน) เกิดปฏิกิริยากลายเป็นยิปซัมป้อนออกก้นถัง (สีเหลือง)";
    }

    // Trigger HUD slide animation
    const hud = document.getElementById("step-hud");
    hud.classList.remove("hud-animate");
    void hud.offsetWidth; // Trigger reflow
    hud.classList.add("hud-animate");

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

// ==========================================
// VIEW NAVIGATION LOGIC
// ==========================================
function switchView(viewName) {
    const homeView = document.getElementById("home-view");
    const powerplantView = document.getElementById("powerplant-view");
    const affiliateView = document.getElementById("affiliate-view");
    const cashflowView = document.getElementById("cashflow-view");
    const powerplantTabs = document.getElementById("powerplant-tabs");

    // Pause powerplant autoplay when leaving powerplant view
    if (viewName !== "powerplant" && isPlaying) {
        pauseAutoplay();
    }

    // Hide all views
    homeView.classList.add("hidden");
    powerplantView.classList.add("hidden");
    affiliateView.classList.add("hidden");
    cashflowView.classList.add("hidden");

    // Update active nav button
    document.querySelectorAll(".nav-link-btn").forEach(btn => btn.classList.remove("active"));

    // Show selected view
    if (viewName === "home") {
        homeView.classList.remove("hidden");
        document.getElementById("nav-home-btn").classList.add("active");
        powerplantTabs.classList.add("hidden");
    } else if (viewName === "powerplant") {
        powerplantView.classList.remove("hidden");
        document.getElementById("nav-powerplant-btn").classList.add("active");
        powerplantTabs.classList.remove("hidden");
        // Reload system to ensure SVG sizes recalculate nicely
        loadSystem(currentTab);
    } else if (viewName === "affiliate") {
        affiliateView.classList.remove("hidden");
        document.getElementById("nav-affiliate-btn").classList.add("active");
        powerplantTabs.classList.add("hidden");
        // Render Shopee views
        renderSavedLinks();
        renderAffiliateChart("7d");
    } else if (viewName === "cashflow") {
        cashflowView.classList.remove("hidden");
        document.getElementById("nav-cashflow-btn").classList.add("active");
        powerplantTabs.classList.add("hidden");
    }
}

function initNavigation() {
    // Mode Cards
    const cardPowerplant = document.getElementById("mode-powerplant");
    cardPowerplant.addEventListener("click", () => switchView("powerplant"));

    const cardAffiliate = document.getElementById("mode-affiliate");
    cardAffiliate.addEventListener("click", () => switchView("affiliate"));

    const cardCashflow = document.getElementById("mode-cashflow");
    cardCashflow.addEventListener("click", () => switchView("cashflow"));

    // Top Navigation Link Buttons
    document.getElementById("nav-home-btn").addEventListener("click", () => switchView("home"));
    document.getElementById("nav-powerplant-btn").addEventListener("click", () => switchView("powerplant"));
    document.getElementById("nav-affiliate-btn").addEventListener("click", () => switchView("affiliate"));
    document.getElementById("nav-cashflow-btn").addEventListener("click", () => switchView("cashflow"));

    // Brand Logo Click
    document.getElementById("brand-logo").addEventListener("click", () => switchView("home"));
}

// ==========================================
// SHOPEE AFFILIATE CONTROLLER LOGIC
// ==========================================

// Seed default links if empty
const defaultShopeeLinks = [
    { id: "1", name: "พัดลมตั้งโต๊ะไร้สายแบบชาร์จไฟมินิมอล 🏠", category: "ของแต่งบ้าน", commission: 10, affUrl: "https://shope.ee/5fL1a91" },
    { id: "2", name: "ขาตั้งกล้องเซลฟี่ Bluetooth หมุน 360° 💻", category: "อุปกรณ์แต่งคอม", commission: 8, affUrl: "https://shope.ee/3fK2b82" },
    { id: "3", name: "มาม่าเผ็ดเกาหลี Samyang รสไก่เผ็ดร้อน 🍜", category: "ของกินอร่อย", commission: 5, affUrl: "https://shope.ee/9fO3d93" }
];

function getSavedLinks() {
    const data = localStorage.getItem("shopee_aff_links");
    if (!data) {
        localStorage.setItem("shopee_aff_links", JSON.stringify(defaultShopeeLinks));
        return defaultShopeeLinks;
    }
    return JSON.parse(data);
}

function saveLinks(links) {
    localStorage.setItem("shopee_aff_links", JSON.stringify(links));
}

// Render product list table
function renderSavedLinks() {
    const links = getSavedLinks();
    const tbody = document.getElementById("saved-links-list");
    const searchQuery = document.getElementById("search-saved-links").value.toLowerCase();
    const filterCategory = document.getElementById("filter-saved-category").value;

    tbody.innerHTML = "";

    const filtered = links.filter(link => {
        const matchSearch = link.name.toLowerCase().includes(searchQuery) || link.affUrl.toLowerCase().includes(searchQuery);
        const matchCategory = filterCategory === "all" || link.category === filterCategory;
        return matchSearch && matchCategory;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 2rem;">ไม่มีข้อมูลในหมวดหมู่นี้ หรือไม่พบผลลัพธ์การค้นหา</td></tr>`;
        return;
    }

    filtered.forEach(link => {
        const tr = document.createElement("tr");
        
        let categoryClass = "badge-home";
        if (link.category === "อุปกรณ์แต่งคอม") categoryClass = "badge-computer";
        else if (link.category === "ของกินอร่อย") categoryClass = "badge-food";
        else if (link.category === "อื่น ๆ") categoryClass = "badge-other";

        tr.innerHTML = `
            <td data-label="ชื่อสินค้า" style="font-weight: 600;">${link.name}</td>
            <td data-label="หมวดหมู่"><span class="category-badge ${categoryClass}">${link.category}</span></td>
            <td data-label="ค่าคอม" style="text-align: center; font-weight: 700; color: #ee4d2d;">${link.commission}%</td>
            <td data-label="ลิงก์แนะนำ">
                <div class="copy-input-group" style="max-width: 260px;">
                    <input type="text" value="${link.affUrl}" readonly style="font-size: 0.75rem; padding: 0.3rem 0.5rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); color: #10b981; border-radius: 4px; width: 100%;">
                    <button class="btn-action-copy" data-link="${link.affUrl}">คัดลอก</button>
                </div>
            </td>
            <td data-label="การจัดการ" style="text-align: center;">
                <button class="btn-delete" data-id="${link.id}">&times;</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Bind event listeners to table buttons
    tbody.querySelectorAll(".btn-action-copy").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const url = e.target.getAttribute("data-link");
            navigator.clipboard.writeText(url).then(() => {
                const oldText = e.target.innerText;
                e.target.innerText = "แล้ว!";
                e.target.style.background = "#10b981";
                e.target.style.color = "#fff";
                setTimeout(() => {
                    e.target.innerText = oldText;
                    e.target.style.background = "";
                    e.target.style.color = "";
                }, 1500);
            });
        });
    });

    tbody.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            if (confirm("คุณแน่ใจหรือไม่ว่าต้องการลบสินค้าแนะนำชิ้นนี้?")) {
                const links = getSavedLinks();
                const updated = links.filter(l => l.id !== id);
                saveLinks(updated);
                renderSavedLinks();
            }
        });
    });
}

// Convert normal Shopee link to Affiliate link
function initAffiliateConverter() {
    const btnConvert = document.getElementById("btn-convert-link");
    btnConvert.addEventListener("click", () => {
        const inputUrl = document.getElementById("input-shopee-url").value.trim();
        const subid = document.getElementById("input-subid").value.trim();

        if (!inputUrl) {
            alert("กรุณากรอกลิงก์ Shopee ก่อนกดแปลงลิงก์ครับ");
            return;
        }

        // Simulating Shopee Universal Link formatting
        let targetId = "3fK2b82";
        if (inputUrl.includes("shopee.co.th")) {
            // Generate a random-looking short affiliate code
            const hash = Math.random().toString(36).substring(2, 9);
            targetId = hash;
        }
        
        let affUrl = `https://shope.ee/${targetId}`;
        if (subid) {
            affUrl += `?subid=${encodeURIComponent(subid)}`;
        }

        // Show result
        const resultArea = document.getElementById("convert-result-area");
        resultArea.classList.remove("hidden");
        document.getElementById("output-affiliate-url").value = affUrl;

        // Load QR Code using standard QR code API
        const qrImg = document.getElementById("output-qr-image");
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(affUrl)}`;

        // Scroll result into view smoothly
        resultArea.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    // Result Copy Button
    document.getElementById("btn-copy-aff").addEventListener("click", () => {
        const outputField = document.getElementById("output-affiliate-url");
        navigator.clipboard.writeText(outputField.value).then(() => {
            const copyBtn = document.getElementById("btn-copy-aff");
            copyBtn.innerText = "คัดลอกเรียบร้อย! ✓";
            copyBtn.style.background = "#059669";
            setTimeout(() => {
                copyBtn.innerText = "คัดลอกลิงก์";
                copyBtn.style.background = "";
            }, 2000);
        });
    });

    // Add custom product to library form
    const btnAdd = document.getElementById("btn-add-product");
    btnAdd.addEventListener("click", () => {
        const name = document.getElementById("prod-name").value.trim();
        const category = document.getElementById("prod-category").value;
        const commission = parseInt(document.getElementById("prod-commission").value) || 8;
        const affUrl = document.getElementById("prod-aff-url").value.trim();

        if (!name || !affUrl) {
            alert("กรุณากรอกชื่อสินค้าและลิงก์แนะนำนายหน้ารายละเอียดให้ครบถ้วนครับ");
            return;
        }

        const newLink = {
            id: Date.now().toString(),
            name,
            category,
            commission,
            affUrl
        };

        const links = getSavedLinks();
        links.unshift(newLink);
        saveLinks(links);

        // Reset form
        document.getElementById("prod-name").value = "";
        document.getElementById("prod-aff-url").value = "";

        // Re-render
        renderSavedLinks();
        alert("เพิ่มสินค้าลงในคลังเรียบร้อยแล้ว!");
    });

    // Live search & filters
    document.getElementById("search-saved-links").addEventListener("input", renderSavedLinks);
    document.getElementById("filter-saved-category").addEventListener("change", renderSavedLinks);
}

// Render dynamic column chart using SVG
function renderAffiliateChart(timeframe) {
    const chartSvg = document.getElementById("aff-chart");
    chartSvg.innerHTML = "";

    const data7d = [
        { label: "จ.", value: 120, commission: 96 },
        { label: "อ.", value: 180, commission: 144 },
        { label: "พ.", value: 340, commission: 272 },
        { label: "พฤ.", value: 150, commission: 120 },
        { label: "ศ.", value: 290, commission: 232 },
        { label: "ส.", value: 450, commission: 360 },
        { label: "อา.", value: 390, commission: 312 }
    ];

    const data30d = [
        { label: "1-5", value: 840, commission: 672 },
        { label: "6-10", value: 1100, commission: 880 },
        { label: "11-15", value: 1650, commission: 1320 },
        { label: "16-20", value: 920, commission: 736 },
        { label: "21-25", value: 1980, commission: 1584 },
        { label: "26-30", value: 2450, commission: 1960 }
    ];

    const activeData = timeframe === "7d" ? data7d : data30d;

    // Update Stats Summary text based on timeframe
    if (timeframe === "7d") {
        document.getElementById("stat-gmv").innerText = "฿24,500";
        document.getElementById("stat-commission").innerText = "฿1,960";
        document.getElementById("stat-clicks").innerText = "1,920";
        document.getElementById("stat-cr").innerText = "2.8%";
    } else {
        document.getElementById("stat-gmv").innerText = "฿112,400";
        document.getElementById("stat-commission").innerText = "฿7,232";
        document.getElementById("stat-clicks").innerText = "8,940";
        document.getElementById("stat-cr").innerText = "3.4%";
    }

    // Chart layouts
    const width = 600;
    const height = 200;
    const paddingLeft = 40;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 30;

    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    // Find max value for scale
    const maxValue = Math.max(...activeData.map(d => d.commission));
    const scaleY = val => (val / maxValue) * (chartHeight * 0.85);

    // Draw grid horizontal lines
    for (let i = 0; i <= 4; i++) {
        const y = paddingTop + chartHeight - (chartHeight / 4) * i;
        const valueLabel = Math.round((maxValue / 4) * i);
        
        // Line
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", paddingLeft);
        line.setAttribute("y1", y);
        line.setAttribute("x2", width - paddingRight);
        line.setAttribute("y2", y);
        line.setAttribute("stroke", "rgba(255, 255, 255, 0.05)");
        line.setAttribute("stroke-width", "1");
        chartSvg.appendChild(line);

        // Value text
        const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        txt.setAttribute("x", paddingLeft - 8);
        txt.setAttribute("y", y + 4);
        txt.setAttribute("fill", "var(--text-secondary)");
        txt.setAttribute("font-size", "9px");
        txt.setAttribute("text-anchor", "end");
        txt.textContent = `฿${valueLabel}`;
        chartSvg.appendChild(txt);
    }

    // Draw columns
    const colCount = activeData.length;
    const colSpacing = chartWidth / colCount;
    const barWidth = Math.min(colSpacing * 0.5, 40);

    activeData.forEach((d, idx) => {
        const x = paddingLeft + colSpacing * idx + (colSpacing - barWidth) / 2;
        const barHeight = scaleY(d.commission);
        const y = paddingTop + chartHeight - barHeight;

        // Create column bar group
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

        // The Bar rect
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", barWidth);
        rect.setAttribute("height", barHeight);
        rect.setAttribute("class", "chart-bar");
        rect.setAttribute("fill", timeframe === "7d" ? "url(#pipe-gas)" : "url(#pipe-water)");
        rect.setAttribute("rx", "4");
        g.appendChild(rect);

        // Tooltip hover label value on top of bar
        const txtVal = document.createElementNS("http://www.w3.org/2000/svg", "text");
        txtVal.setAttribute("x", x + barWidth / 2);
        txtVal.setAttribute("y", y - 6);
        txtVal.setAttribute("fill", "var(--text-primary)");
        txtVal.setAttribute("font-size", "9px");
        txtVal.setAttribute("font-weight", "700");
        txtVal.setAttribute("text-anchor", "middle");
        txtVal.textContent = `฿${d.commission}`;
        g.appendChild(txtVal);

        // X Axis labels
        const txtLbl = document.createElementNS("http://www.w3.org/2000/svg", "text");
        txtLbl.setAttribute("x", x + barWidth / 2);
        txtLbl.setAttribute("y", paddingTop + chartHeight + 18);
        txtLbl.setAttribute("fill", "var(--text-secondary)");
        txtLbl.setAttribute("font-size", "10px");
        txtLbl.setAttribute("font-weight", "600");
        txtLbl.setAttribute("text-anchor", "middle");
        txtLbl.textContent = d.label;
        g.appendChild(txtLbl);

        chartSvg.appendChild(g);
    });
}

function initAffiliateAnalytics() {
    const btn7d = document.getElementById("btn-toggle-7d");
    const btn30d = document.getElementById("btn-toggle-30d");

    btn7d.addEventListener("click", () => {
        btn7d.classList.add("active");
        btn30d.classList.remove("active");
        renderAffiliateChart("7d");
    });

    btn30d.addEventListener("click", () => {
        btn30d.classList.add("active");
        btn7d.classList.remove("active");
        renderAffiliateChart("30d");
    });
}

// ==========================================================================
// ========================== CASHFLOW GAME ENGINE ==========================

const cfCareers = [
    {
        name: "ภารโรง (Janitor)",
        salary: 16000,
        cash: 5600,
        expenses: { taxes: 2800, mortgage: 2000, carLoan: 600, creditCard: 600, retailDebt: 500, other: 3000, bankInterest: 0, childCost: 950 },
        liabilities: { mortgage: 200000, carLoan: 40000, creditCard: 20000, retail: 10000, bankLoan: 0 }
    },
    {
        name: "ครูประถม (School Teacher)",
        salary: 33000,
        cash: 4000,
        expenses: { taxes: 6300, mortgage: 5000, carLoan: 1200, creditCard: 900, retailDebt: 500, other: 7600, bankInterest: 0, childCost: 1800 },
        liabilities: { mortgage: 500000, carLoan: 70000, creditCard: 30000, retail: 10000, bankLoan: 0 }
    },
    {
        name: "วิศวกร (Engineer)",
        salary: 49000,
        cash: 4000,
        expenses: { taxes: 10500, mortgage: 7000, carLoan: 1400, creditCard: 1200, retailDebt: 900, other: 10900, bankInterest: 0, childCost: 2500 },
        liabilities: { mortgage: 750000, carLoan: 90000, creditCard: 40000, retail: 20000, bankLoan: 0 }
    },
    {
        name: "แพทย์ประจำบ้าน (Doctor)",
        salary: 95000,
        cash: 4000,
        expenses: { taxes: 24600, mortgage: 19000, carLoan: 3800, creditCard: 2700, retailDebt: 1800, other: 19000, bankInterest: 0, childCost: 4800 },
        liabilities: { mortgage: 2000000, carLoan: 340000, creditCard: 90000, retail: 50000, bankLoan: 0 }
    }
];

const cfBoardSpaces = [
    { type: "payday", label: "วันจ่ายเงิน 💵" },
    { type: "opportunity", label: "โอกาสการลงทุน 📈" },
    { type: "doodad", label: "ค่าใช้จ่ายฟุ่มเฟือย 🛍️" },
    { type: "opportunity", label: "โอกาสการลงทุน 📈" },
    { type: "payday", label: "วันจ่ายเงิน 💵" },
    { type: "market", label: "ตลาดซื้อขาย 🏢" },
    { type: "opportunity", label: "โอกาสการลงทุน 📈" },
    { type: "doodad", label: "ค่าใช้จ่ายฟุ่มเฟือย 🛍️" },
    { type: "payday", label: "วันจ่ายเงิน 💵" },
    { type: "opportunity", label: "โอกาสการลงทุน 📈" },
    { type: "baby", label: "มีลูกเพิ่ม 👶" },
    { type: "opportunity", label: "โอกาสการลงทุน 📈" },
    { type: "payday", label: "วันจ่ายเงิน 💵" },
    { type: "downsized", label: "ตกงาน 🛑" },
    { type: "doodad", label: "ค่าใช้จ่ายฟุ่มเฟือย 🛍️" },
    { type: "opportunity", label: "โอกาสการลงทุน 📈" },
    { type: "payday", label: "วันจ่ายเงิน 💵" },
    { type: "market", label: "ตลาดซื้อขาย 🏢" },
    { type: "opportunity", label: "โอกาสการลงทุน 📈" },
    { type: "doodad", label: "ค่าใช้จ่ายฟุ่มเฟือย 🛍️" },
    { type: "payday", label: "วันจ่ายเงิน 💵" },
    { type: "opportunity", label: "โอกาสการลงทุน 📈" },
    { type: "market", label: "ตลาดซื้อขาย 🏢" },
    { type: "doodad", label: "ค่าใช้จ่ายฟุ่มเฟือย 🛍️" }
];

// Game State variables
let cfState = {
    profession: null,
    cash: 0,
    salary: 0,
    passiveIncome: 0,
    totalIncome: 0,
    expenses: {},
    liabilities: {},
    assets: {
        stocks: [],      // { symbol, shares, averageCost, dividendPerShare }
        realEstate: [],  // { id, type, cost, downPayment, mortgage, cashFlow }
        businesses: []   // { id, name, cost, downPayment, cashFlow }
    },
    childrenCount: 0,
    boardPosition: 0,
    turnCount: 0,
    downsizedTurnsLeft: 0,
    activeGame: false
};

// Opportunities Deals list
const smallDeals = [
    { type: "stock", symbol: "MYCO", name: "หุ้นยาชีวภาพ MYCO", cost: 100, range: "฿50 - ฿350", cashFlow: 0, desc: "หุ้นยาชีวภาพ MYCO เปิดขายในราคาตกร่อง มีแนวโน้มราคาผันผวนสูง คาดหวังการขายทำกำไรในตลาดอนาคตได้" },
    { type: "stock", symbol: "OK4U", name: "หุ้นปันผล OK4U", cost: 150, range: "฿100 - ฿250", cashFlow: 20, desc: "หุ้นสาธารณูปโภค OK4U มั่นคงสูง ปันผลต่อเนื่องที่ ฿20 ต่อหุ้น/เดือน เหมาะสะสมเพื่อปันผล" },
    { type: "realestate", category: "condo", name: "คอนโด 2 ห้องนอน (2-BD Condo)", cost: 400000, downPayment: 40000, mortgage: 360000, cashFlow: 1600, desc: "คอนโดใกล้รถไฟฟ้า ยอดเงินกู้ต่ำ สร้างรายได้ค่าเช่าทันที ฿1,600 ต่อเดือน" },
    { type: "realestate", category: "house", name: "บ้านทาวน์โฮม 3 ห้องนอน (3-BD Townhouse)", cost: 500000, downPayment: 50000, mortgage: 450000, cashFlow: 2200, desc: "บ้านชานเมืองสภาพดีมาก มีคนเช่าอยู่แล้ว ช่วยสร้างรายได้ Passive +฿2,200 ต่อเดือน" }
];

const bigDeals = [
    { type: "realestate", category: "apartment", name: "อพาร์ตเมนต์ 8 ห้อง (8-Unit Apartment)", cost: 1600000, downPayment: 240000, mortgage: 1360000, cashFlow: 14000, desc: "อพาร์ตเมนต์คนเช่าเต็ม ยอดกระแสเงินสดสูงถึง ฿14,000 ต่อเดือน ต้องการเงินดาวน์สูง" },
    { type: "realestate", category: "commercial", name: "ตึกช็อปปิ้งมอลล์ (Shopping Center)", cost: 3000000, downPayment: 500000, mortgage: 2500000, cashFlow: 26000, desc: "อาคารพาณิชย์สร้างเสร็จใหม่ มีแบรนด์ดังทำสัญญาเช่าระยะยาว รับกระแสเงินสดสุทธิ ฿26,000/เดือน" },
    { type: "business", name: "แฟรนไชส์ร้านพิซซ่าค้างเคียง (Pizza Franchise)", cost: 1200000, downPayment: 180000, mortgage: 1020000, cashFlow: 10000, desc: "ส่วนแบ่งร้านพิซซ่ายอดขายคงที่ ระบบงานลงตัวแล้ว ปันผล Passive +฿10,000 ต่อเดือน" }
];

// Doodads list
const doodadCards = [
    { name: "ซื้อโทรศัพท์มือถือเรือธงรุ่นใหม่ 📱", cost: 10000, desc: "โทรศัพท์ตกรุ่นพอดี ทนกระแสไม่ไหว รูดบัตรซื้อเงินสดไปทันที ฿10,000" },
    { name: "ซ่อมแซมใหญ่รถยนต์ส่วนตัว 🚗", cost: 6000, desc: "เครื่องยนต์ส่งเสียงเตือน ต้องเข้าศูนย์เช็คระบบไฟและเกียร์ จ่ายค่าซ่อม ฿6,000" },
    { name: "ล่องเรือสำราญพักผ่อนประจำปี 🚢", cost: 15000, desc: "เพื่อนชวนเที่ยวทริปสุดหรูระดับห้าดาว จ่ายค่าบัตรและค่าห้อง ฿15,000" },
    { name: "ซื้อรองเท้าและกระเป๋าแบรนด์เนม 🛍️", cost: 3000, desc: "เห็นป้ายลดราคาในห้างช็อปปิ้ง รูดซื้อของสะสมส่วนตัวทันที ฿3,000" },
    { name: "จัดงานเลี้ยงวันเกิดสุดอลังการ 🎂", cost: 4000, desc: "ฉลองเลี้ยงอาหารและเครื่องดื่มให้เพื่อนฝูงและญาติมิตร จ่ายค่าจัดเลี้ยง ฿4,000" }
];

// Market Events list
const marketCards = [
    { type: "buyer_condo", name: "บริษัทซื้ออสังหาฯ เสนอซื้อคอนโด 2 ห้องนอน 🏢", price: 650000, desc: "นักลงทุนรายใหญ่เสนอซื้อคอนโด 2 ห้องนอนทุกแห่งในราคาหลังละ ฿650,000 ผู้ที่มีสินทรัพย์นี้สามารถขายเพื่อรับเงินก้อนได้ทันที" },
    { type: "buyer_house", name: "ครอบครัวย้ายถิ่น เสนอซื้อทาวน์โฮม 3 ห้องนอน 🏠", price: 850000, desc: "ตลาดอสังหาฯ ร้อนแรง มีผู้ต้องการซื้อบ้านทาวน์โฮม 3 ห้องนอนในราคาหลังละ ฿850,000 สามารถขายเพื่อเอาเงินสดสะสมได้" },
    { type: "stock_boom", symbol: "MYCO", price: 320, name: "ราคาหุ้น MYCO พุ่งสูงขึ้นเป็นประวัติการณ์! 🚀", desc: "หุ้นยา MYCO ประสบความสำเร็จในการวิจัยวัคซีน ราคาหุ้นพุ่งขึ้นเป็น ฿320 ต่อหุ้น สามารถสั่งขายหุ้นในมือได้ทั้งหมด" },
    { type: "stock_boom", symbol: "OK4U", price: 240, name: "หุ้น OK4U ปรับราคาเพิ่มขึ้นรับปันผล 📈", desc: "ราคาหุ้น OK4U พุ่งขึ้นมาที่ ฿240 ต่อหุ้น สามารถขายเพื่อเอากำไรส่วนต่างได้ทันที" },
    { type: "buyer_apartment", name: "กลุ่มทุนใหญ่กว้านซื้อตึก อพาร์ตเมนต์ 8 ห้อง 🏢", price: 2300000, desc: "ทุนต่างชาติเสนอซื้อตึกอพาร์ตเมนต์ 8 ห้องในราคาตึกละ ฿2,300,000 จ่ายเงินสดหักหนี้กู้ยืมทั้งหมด" },
    { type: "inflation", name: "วิกฤตเงินเฟ้อและของแพง 💸", price: 2000, desc: "ราคาน้ำมันและของใช้ส่วนตัวแพงขึ้นกะทันหัน จ่ายค่าซื้อของเข้าบ้านเพิ่มขึ้นทันที ฿2,000" }
];

// Initialize and setup Event listeners
function initCashflowGame() {
    renderCareers();

    // Board click and action buttons
    document.getElementById("btn-roll-dice").addEventListener("click", rollDice);
    document.getElementById("btn-bank-borrow").addEventListener("click", borrowBank);
    document.getElementById("btn-bank-repay").addEventListener("click", repayBank);

    // Debt repayments
    document.getElementById("btn-pay-credit-card").addEventListener("click", () => repayDebt("creditCard"));
    document.getElementById("btn-pay-car-loan").addEventListener("click", () => repayDebt("carLoan"));

    // Reset game button
    document.getElementById("btn-restart-game").addEventListener("click", () => {
        document.getElementById("cf-victory-modal").classList.add("hidden");
        cfState.activeGame = false;
        renderCareers();
        document.getElementById("cf-career-select").classList.remove("hidden");
        document.getElementById("cf-game-board-view").classList.add("hidden");
    });
}

// Render Career selection screen
function renderCareers() {
    const container = document.getElementById("career-options-container");
    container.innerHTML = "";

    cfCareers.forEach((car, idx) => {
        const card = document.createElement("div");
        card.className = "career-card";
        
        // Sum initial expenses
        let totalExp = 0;
        Object.values(car.expenses).forEach(v => { totalExp += v; });
        // Exclude childCost since childrenCount starts at 0
        totalExp -= car.expenses.childCost; 
        const netFlow = car.salary - totalExp;

        card.innerHTML = `
            <h4>
                <span>${car.name}</span>
                <span style="color: #10b981;">+฿${netFlow.toLocaleString()}</span>
            </h4>
            <div class="career-card-body">
                <div class="career-stat"><span>รายรับเงินเดือน (Salary):</span> <strong>฿${car.salary.toLocaleString()}</strong></div>
                <div class="career-stat"><span>รายจ่ายเริ่มต้น:</span> <strong class="text-red">฿${totalExp.toLocaleString()}</strong></div>
                <div class="career-stat"><span>เงินออมเริ่มต้น:</span> <strong class="text-green">฿${car.cash.toLocaleString()}</strong></div>
                <div class="career-stat"><span>หนี้สินบ้าน (Mortgage):</span> <strong>฿${car.liabilities.mortgage.toLocaleString()}</strong></div>
                <div class="career-stat"><span>หนี้บัตรเครดิตสะสม:</span> <strong>฿${car.liabilities.creditCard.toLocaleString()}</strong></div>
                <div class="career-stat"><span>ค่าเลี้ยงดูลูก (ต่อคน):</span> <strong class="text-red">฿${car.expenses.childCost.toLocaleString()}</strong></div>
            </div>
            <button class="mode-btn btn-green" onclick="startCashflowGame(${idx})">เลือกอาชีพนี้ ➡️</button>
        `;
        container.appendChild(card);
    });
}

// Launch game with selected career
function startCashflowGame(careerIdx) {
    const car = cfCareers[careerIdx];
    
    // Reset state
    cfState.profession = car.name;
    cfState.cash = car.cash;
    cfState.salary = car.salary;
    cfState.passiveIncome = 0;
    cfState.expenses = { ...car.expenses };
    cfState.liabilities = { ...car.liabilities };
    cfState.assets = { stocks: [], realEstate: [], businesses: [] };
    cfState.childrenCount = 0;
    cfState.boardPosition = 0;
    cfState.turnCount = 0;
    cfState.downsizedTurnsLeft = 0;
    cfState.activeGame = true;

    // Build the visual board track in DOM
    buildBoardTrack();

    // Hide Career select and show Board
    document.getElementById("cf-career-select").classList.add("hidden");
    document.getElementById("cf-game-board-view").classList.remove("hidden");

    // Clean log panel
    const logBox = document.getElementById("cf-game-logs");
    logBox.innerHTML = `<div class="log-entry system-log">เริ่มต้นเกม: คุณทำงานเป็น ${car.name} เริ่มต้นลู่แข่ง Rat Race เงินสดในมือ ฿${cfState.cash.toLocaleString()}</div>`;

    // Render original card state
    document.getElementById("event-card-display").innerHTML = `
        <div class="event-card empty-state">
            <h4>เตรียมตัวทอยลูกเต๋าเพื่อเดินทาง 🎲</h4>
            <p>กดปุ่ม "ทอยลูกเต๋า" เพื่อเคลื่อนตำแหน่งหมากของคุณ ตกช่องใดจะเกิดเหตุการณ์ทางการเงินของช่องนั้น ๆ</p>
        </div>
    `;

    updateCFUI();
}

// Build 24 rectangular track slots dynamically
function buildBoardTrack() {
    const track = document.getElementById("cf-board-track");
    track.innerHTML = "";

    // Coordinates mapping for 8x6 grid
    const coordinates = [
        { r: 1, c: 1 }, { r: 1, c: 2 }, { r: 1, c: 3 }, { r: 1, c: 4 }, { r: 1, c: 5 }, { r: 1, c: 6 }, { r: 1, c: 7 }, { r: 1, c: 8 },
        { r: 2, c: 8 }, { r: 3, c: 8 }, { r: 4, c: 8 }, { r: 5, c: 8 }, { r: 6, c: 8 },
        { r: 6, c: 7 }, { r: 6, c: 6 }, { r: 6, c: 5 }, { r: 6, c: 4 }, { r: 6, c: 3 }, { r: 6, c: 2 }, { r: 6, c: 1 },
        { r: 5, c: 1 }, { r: 4, c: 1 }, { r: 3, c: 1 }, { r: 2, c: 1 }
    ];

    cfBoardSpaces.forEach((space, idx) => {
        const slot = document.createElement("div");
        slot.className = `track-slot slot-${space.type}`;
        slot.id = `cf-slot-${idx}`;
        slot.style.gridRow = coordinates[idx].r;
        slot.style.gridColumn = coordinates[idx].c;

        slot.innerHTML = `
            <span class="slot-num">${idx + 1}</span>
            <div class="slot-label">${space.label}</div>
        `;
        track.appendChild(slot);
    });

    // Mark current player position
    document.getElementById(`cf-slot-0`).classList.add("active-token");
}

// Roll dice & move player
function rollDice() {
    if (!cfState.activeGame) return;

    // Check if player is downsized
    if (cfState.downsizedTurnsLeft > 0) {
        cfState.downsizedTurnsLeft--;
        cfState.turnCount++;
        addCFLog(`คุณยังถูกตกงานอยู่! พลาดตานี้ (เหลือเวลาหยุดเดิน ${cfState.downsizedTurnsLeft} ตา)`, "doodad-log");
        document.getElementById("game-turn-count").innerText = cfState.turnCount;
        if (cfState.downsizedTurnsLeft === 0) {
            addCFLog("หางานใหม่เสร็จสิ้น! คุณเริ่มเดินได้ตามปกติในรอบหน้า", "system-log");
        }
        return;
    }

    const roll = Math.floor(Math.random() * 6) + 1;
    const oldPosition = cfState.boardPosition;
    cfState.boardPosition = (cfState.boardPosition + roll) % 24;
    cfState.turnCount++;

    // Visual animation to show rolled value
    const diceResult = document.getElementById("dice-result");
    const diceEmoji = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    diceResult.innerText = diceEmoji[roll - 1];

    // Remove token from old slot, add to new slot
    document.querySelectorAll(".track-slot").forEach(s => s.classList.remove("active-token"));
    document.getElementById(`cf-slot-${cfState.boardPosition}`).classList.add("active-token");

    addCFLog(`ทอยลูกเต๋าได้ ${roll} แต้ม 🎲 เดินทางไปยังช่อง ${cfState.boardPosition + 1}`, "system-log");

    // Rat Race Rule: Whenever you land on OR PASS a Payday slot, you get paid!
    let paydayCrossedCount = 0;
    for (let step = 1; step <= roll; step++) {
        const checkPos = (oldPosition + step) % 24;
        if (cfBoardSpaces[checkPos].type === "payday") {
            paydayCrossedCount++;
        }
    }

    if (paydayCrossedCount > 0) {
        const netFlow = calculateCFNetFlow();
        cfState.cash += netFlow * paydayCrossedCount;
        addCFLog(`💵 ได้รับเงินวันจ่ายเงิน (Payday)! รับรายได้สุทธิ ฿${netFlow.toLocaleString()} x ${paydayCrossedCount} = ฿${(netFlow * paydayCrossedCount).toLocaleString()}`, "payday-log");
    }

    // Process landing space type
    const space = cfBoardSpaces[cfState.boardPosition];
    handleSpaceEvent(space.type);

    updateCFUI();
}

// Handle space landing event
function handleSpaceEvent(type) {
    const container = document.getElementById("event-card-display");

    switch (type) {
        case "payday":
            container.innerHTML = `
                <div class="event-card">
                    <h4>💵 วันรับเงินเดือนกะทันหัน (Payday)</h4>
                    <p>คุณเดินตกช่องวันรับเงินเดือนโดยตรง! ได้รับกระแสเงินสดตามงบสุทธิเป็นที่เรียบร้อย สะสมสินทรัพย์และหลีกเลี่ยงรายจ่ายฟุ่มเฟือยเพื่อสร้างความมั่งคั่งต่อไป</p>
                    <button class="btn btn-green-full" onclick="clearEventCard()">รับทราบ ➡️</button>
                </div>
            `;
            break;

        case "opportunity":
            container.innerHTML = `
                <div class="event-card">
                    <h4>📈 โอกาสการลงทุนเพื่อสร้าง Passive Income</h4>
                    <p>คุณสามารถเลือกซื้อ "ดีลเล็ก" (Small Deal - วงเงินดาวน์ไม่เกิน ฿50,000 เหมาะสำหรับเก็บหอมรอบริบหุ้นหรืออสังหาขนาดเล็ก) หรือ "ดีลใหญ่" (Big Deal - ต้องการเงินลงทุนสูง แต่ให้ Passive Income ก้อนใหญ่)</p>
                    <div class="event-card-actions">
                        <button class="btn btn-card-buy" onclick="drawDeal('small')">ดีลขนาดเล็ก 📈</button>
                        <button class="btn btn-card-pass" onclick="drawDeal('big')">ดีลขนาดใหญ่ 🏢</button>
                    </div>
                </div>
            `;
            break;

        case "doodad":
            const card = doodadCards[Math.floor(Math.random() * doodadCards.length)];
            cfState.cash -= card.cost;
            addCFLog(`🛍️ ค่าใช้จ่ายฟุ่มเฟือย: ${card.name} เสียเงินสด ฿${card.cost.toLocaleString()}`, "doodad-log");

            container.innerHTML = `
                <div class="event-card" style="border-left: 4px solid #ef4444;">
                    <h4 class="text-red">🛍️ รายจ่ายฟุ่มเฟือย (Doodad Drawn)</h4>
                    <p class="event-card-subtitle">${card.name}</p>
                    <p>${card.desc} เงินสดถูกหักจากมือจำนวน <strong>฿${card.cost.toLocaleString()}</strong> ทันที</p>
                    <button class="btn btn-green-full" onclick="clearEventCard()">ชำระเงินเรียบร้อย ➡️</button>
                </div>
            `;
            break;

        case "market":
            const market = marketCards[Math.floor(Math.random() * marketCards.length)];
            let sellAvailable = false;
            let sellDetailsHTML = "";

            if (market.type === "buyer_condo") {
                const condos = cfState.assets.realEstate.filter(re => re.category === "condo");
                if (condos.length > 0) {
                    sellAvailable = true;
                    sellDetailsHTML = condos.map(c => `
                        <div style="display:flex; justify-content:space-between; margin-bottom: 0.5rem;">
                            <span>${c.name} (ค่าเช่า +฿${c.cashFlow.toLocaleString()})</span>
                            <button class="btn-action-borrow" onclick="sellRealEstate('${c.id}', ${market.price})">ขายรับเงินก้อน (+฿${(market.price - c.mortgage).toLocaleString()})</button>
                        </div>
                    `).join("");
                }
            } else if (market.type === "buyer_house") {
                const houses = cfState.assets.realEstate.filter(re => re.category === "house");
                if (houses.length > 0) {
                    sellAvailable = true;
                    sellDetailsHTML = houses.map(h => `
                        <div style="display:flex; justify-content:space-between; margin-bottom: 0.5rem;">
                            <span>${h.name} (ค่าเช่า +฿${h.cashFlow.toLocaleString()})</span>
                            <button class="btn-action-borrow" onclick="sellRealEstate('${h.id}', ${market.price})">ขายรับเงินก้อน (+฿${(market.price - h.mortgage).toLocaleString()})</button>
                        </div>
                    `).join("");
                }
            } else if (market.type === "buyer_apartment") {
                const apartments = cfState.assets.realEstate.filter(re => re.category === "apartment");
                if (apartments.length > 0) {
                    sellAvailable = true;
                    sellDetailsHTML = apartments.map(a => `
                        <div style="display:flex; justify-content:space-between; margin-bottom: 0.5rem;">
                            <span>${a.name} (ค่าเช่า +฿${a.cashFlow.toLocaleString()})</span>
                            <button class="btn-action-borrow" onclick="sellRealEstate('${a.id}', ${market.price})">ขายรับเงินก้อน (+฿${(market.price - a.mortgage).toLocaleString()})</button>
                        </div>
                    `).join("");
                }
            } else if (market.type === "stock_boom") {
                const stock = cfState.assets.stocks.find(s => s.symbol === market.symbol);
                if (stock && stock.shares > 0) {
                    sellAvailable = true;
                    sellDetailsHTML = `
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span>มีหุ้นในครอบครอง ${stock.shares} หุ้น (ต้นทุนเฉลี่ย ฿${stock.averageCost.toLocaleString()})</span>
                            <button class="btn-action-borrow" onclick="sellStock('${stock.symbol}', ${market.price})">ขายหุ้นทั้งหมด (+฿${(stock.shares * market.price).toLocaleString()})</button>
                        </div>
                    `;
                }
            } else if (market.type === "inflation") {
                cfState.cash -= market.price;
                addCFLog(`💸 จ่ายค่าซื้อของแพงขึ้นเงินเฟ้อ ฿${market.price.toLocaleString()}`, "doodad-log");
            }

            container.innerHTML = `
                <div class="event-card" style="border-left: 4px solid #8b5cf6;">
                    <h4 class="text-blue">🏢 ตลาดซื้อขายอสังหาฯ และหลักทรัพย์ (Market event)</h4>
                    <p class="event-card-subtitle">${market.name}</p>
                    <p>${market.desc}</p>
                    ${sellAvailable ? `
                        <div style="background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:10px; margin-bottom:1rem;">
                            <label style="font-size:0.75rem; color:var(--text-secondary); display:block; margin-bottom:0.5rem;">คลิกปุ่มเพื่อดำเนินการขาย:</label>
                            ${sellDetailsHTML}
                        </div>
                    ` : `<p style="font-style:italic; font-size:0.8rem; color:rgba(255,255,255,0.2);">คุณไม่มีสินทรัพย์ประเภทนี้ที่สอดคล้องกับความต้องการของตลาดขณะนี้</p>`}
                    <button class="btn btn-green-full" onclick="clearEventCard()">ผ่าน / รับทราบ ➡️</button>
                </div>
            `;
            break;

        case "baby":
            if (cfState.childrenCount < 3) {
                cfState.childrenCount++;
                addCFLog(`👶 มีลูกเพิ่มคนที่ ${cfState.childrenCount}! รายจ่ายเพิ่มขึ้นรายเดือน ฿${cfState.expenses.childCost.toLocaleString()}`, "doodad-log");
                
                container.innerHTML = `
                    <div class="event-card" style="border-left: 4px solid #ec4899;">
                        <h4 style="color: #ec4899;">👶 มีทายาทเพิ่มขึ้น! (Add a Child)</h4>
                        <p>ขอแสดงความยินดี! สมาชิกใหม่ในครอบครัวได้เกิดขึ้นแล้ว คุณมีหน้าที่ต้องจ่ายเลี้ยงดูเพิ่มขึ้น <strong>฿${cfState.expenses.childCost.toLocaleString()}</strong> ต่อเดือน (สูงสุดไม่เกิน 3 คน)</p>
                        <button class="btn btn-green-full" onclick="clearEventCard()">ต้อนรับทารกใหม่ ➡️</button>
                    </div>
                `;
            } else {
                container.innerHTML = `
                    <div class="event-card">
                        <h4>👶 มีลูกเพิ่ม (จำกัดสูงสุด 3 คน)</h4>
                        <p>คุณเดินตกช่องมีลูก แต่ขณะนี้ครอบครัวมีลูกครบ 3 คนตามโควตาสูงสุดแล้ว จึงไม่มีรายจ่ายเลี้ยงดูเพิ่มเติม</p>
                        <button class="btn btn-green-full" onclick="clearEventCard()">รับทราบ ➡️</button>
                    </div>
                `;
            }
            break;

        case "downsized":
            const expense = calculateCFTotalExpenses();
            cfState.cash -= expense;
            cfState.downsizedTurnsLeft = 2;
            addCFLog(`🛑 ตกงาน! จ่ายรายจ่ายรายเดือน ฿${expense.toLocaleString()} และพลาดการเล่นทอยลูกเต๋า 2 รอบ`, "doodad-log");

            container.innerHTML = `
                <div class="event-card" style="border-left: 4px solid #f97316;">
                    <h4 class="text-orange">🛑 คุณถูกเลิกจ้างชั่วคราว! (Downsized)</h4>
                    <p>บริษัทปรับลดขนาดแผนก ทำให้คุณต้องจ่ายรายจ่ายส่วนตัวรวมประจำเดือน <strong>฿${expense.toLocaleString()}</strong> ให้แก่ธนาคารทันที และต้องหยุดเดินเพื่อหางานใหม่เป็นเวลา 2 รอบการทอย</p>
                    <button class="btn btn-green-full" onclick="clearEventCard()">รับสภาพตกงาน ➡️</button>
                </div>
            `;
            break;
    }
}

// Clear event card box and render roll dice reminder
function clearEventCard() {
    document.getElementById("event-card-display").innerHTML = `
        <div class="event-card empty-state">
            <h4>เตรียมตัวทอยลูกเต๋าเพื่อเดินทาง 🎲</h4>
            <p>กดปุ่ม "ทอยลูกเต๋า" เพื่อเคลื่อนตำแหน่งหมากของคุณ ตกช่องใดจะเกิดเหตุการณ์ทางการเงินของช่องนั้น ๆ</p>
        </div>
    `;
}

// Draw Small vs Big Deal
function drawDeal(dealType) {
    const container = document.getElementById("event-card-display");
    const dataset = dealType === "small" ? smallDeals : bigDeals;
    const card = dataset[Math.floor(Math.random() * dataset.length)];

    if (dealType === "big" && cfState.cash < 50000) {
        container.innerHTML = `
            <div class="event-card">
                <h4>🛑 เงินสดไม่เพียงพอที่จะเข้าดูดีลใหญ่</h4>
                <p>การเปิดดีลใหญ่ต้องการเงินลงทุน/เงินดาวน์สูงกว่าปกติ (ขั้นต่ำประมาณ ฿50,000) แต่คุณมีเงินสดในมือเพียง ฿${cfState.cash.toLocaleString()} แนะนำให้เริ่มจากเก็บดีลขนาดเล็กก่อนครับ</p>
                <div class="event-card-actions">
                    <button class="btn btn-card-buy" onclick="drawDeal('small')">กลับไปเลือกดีลขนาดเล็ก 📈</button>
                    <button class="btn btn-card-pass" onclick="clearEventCard()">ยกเลิกดีล ➡️</button>
                </div>
            </div>
        `;
        return;
    }

    if (card.type === "stock") {
        const sharesOptions = [100, 200, 500, 1000];
        let optionsHTML = sharesOptions.map(sh => {
            const cost = sh * card.cost;
            return `<button class="btn-action-borrow" onclick="buyStockDeal('${card.symbol}', ${sh}, ${card.cost}, ${card.cashFlow})">ซื้อ ${sh} หุ้น (฿${cost.toLocaleString()})</button>`;
        }).join(" ");

        container.innerHTML = `
            <div class="event-card" style="border-left: 4px solid #3b82f6;">
                <h4>📈 เสนอซื้อโอกาสตลาดหลักทรัพย์ (${card.symbol})</h4>
                <p class="event-card-subtitle">${card.name}</p>
                <p>${card.desc}</p>
                <div class="event-card-stats">
                    <div class="card-stat">ราคาปัจจุบัน: <strong>฿${card.cost.toLocaleString()}/หุ้น</strong></div>
                    <div class="card-stat">กรอบราคาตลาดทั่วไป: <strong>${card.range}</strong></div>
                    <div class="card-stat">ปันผลต่อหุ้น/เดือน: <strong>+฿${card.cashFlow || 0}</strong></div>
                </div>
                <div style="background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:10px; margin-bottom:1rem;">
                    <label style="font-size:0.75rem; color:var(--text-secondary); display:block; margin-bottom:0.5rem;">เลือกซื้อจำนวนหุ้นที่เหมาะสม:</label>
                    <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem;">
                        ${optionsHTML}
                    </div>
                </div>
                <button class="btn btn-card-pass" onclick="clearEventCard()">ผ่านข้อเสนอนี้ ➡️</button>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="event-card" style="border-left: 4px solid #3b82f6;">
                <h4>🏢 โอกาสลงทุนอสังหาฯ และธุรกิจส่วนตัว</h4>
                <p class="event-card-subtitle">${card.name}</p>
                <p>${card.desc}</p>
                <div class="event-card-stats">
                    <div class="card-stat">ราคาสินทรัพย์ทั้งหมด: <strong>฿${card.cost.toLocaleString()}</strong></div>
                    <div class="card-stat">เงินสดดาวน์เริ่มต้น: <strong class="text-green">฿${card.downPayment.toLocaleString()}</strong></div>
                    <div class="card-stat">กระแสเงินสดเข้ากระเป๋า: <strong class="text-green">+฿${card.cashFlow.toLocaleString()}/เดือน</strong></div>
                    <div class="card-stat">ยอดหนี้จำนอง (Mortgage): <strong>฿${(card.mortgage || 0).toLocaleString()}</strong></div>
                </div>
                <div class="event-card-actions">
                    <button class="btn btn-card-buy" onclick="buyAssetDeal('${card.name}', '${card.type}', ${card.cost}, ${card.downPayment}, ${card.mortgage || 0}, ${card.cashFlow})">ตกลงลงทุน ➕</button>
                    <button class="btn btn-card-pass" onclick="clearEventCard()">ผ่านดีลนี้ ➡️</button>
                </div>
            </div>
        `;
    }
}

// Purchase Stock Deal
function buyStockDeal(symbol, shares, costPerShare, dividendPerShare) {
    const totalCost = shares * costPerShare;
    if (cfState.cash < totalCost) {
        alert("คุณมีเงินสดไม่เพียงพอสำหรับการซื้อจำนวนหุ้นนี้! กรุณากู้ธนาคารมาก่อนตัดสินใจซื้อครับ");
        return;
    }

    cfState.cash -= totalCost;

    const existing = cfState.assets.stocks.find(s => s.symbol === symbol);
    if (existing) {
        const totalShares = existing.shares + shares;
        const totalValue = (existing.shares * existing.averageCost) + totalCost;
        existing.averageCost = Math.round(totalValue / totalShares);
        existing.shares = totalShares;
    } else {
        cfState.assets.stocks.push({
            symbol,
            shares,
            averageCost: costPerShare,
            dividendPerShare
        });
    }

    addCFLog(`📈 ลงทุนซื้อหุ้น ${symbol} จำนวน ${shares} หุ้น ที่ราคา ฿${costPerShare.toLocaleString()} (จ่ายเงินรวม ฿${totalCost.toLocaleString()})`, "deal-log");
    clearEventCard();
    updateCFUI();
}

// Purchase Real Estate or Business Asset Deal
function buyAssetDeal(name, assetType, cost, downPayment, mortgage, monthlyCashflow) {
    if (cfState.cash < downPayment) {
        alert("คุณมีเงินสดดาวน์ไม่เพียงพอ! กรุณากู้เงินธนาคารมาก่อนตัดสินใจลงทุนครับ");
        return;
    }

    cfState.cash -= downPayment;

    const newAsset = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 5),
        name,
        cost,
        downPayment,
        mortgage,
        cashFlow: monthlyCashflow
    };

    if (assetType === "realestate") {
        let category = "house";
        if (name.includes("Condo") || name.includes("คอนโด")) category = "condo";
        else if (name.includes("Apartment") || name.includes("อพาร์ตเมนต์")) category = "apartment";

        newAsset.category = category;
        cfState.assets.realEstate.push(newAsset);
    } else {
        cfState.assets.businesses.push(newAsset);
    }

    addCFLog(`🏢 ตกลงลงทุนใน ${name} (เงินดาวน์ ฿${downPayment.toLocaleString()}, กระแสเงินสด Passive +฿${monthlyCashflow.toLocaleString()}/เดือน)`, "deal-log");
    clearEventCard();
    updateCFUI();
}

// Sell Real Estate Asset through Market Offer
function sellRealEstate(assetId, marketPrice) {
    const asset = cfState.assets.realEstate.find(re => re.id === assetId);
    if (!asset) return;

    const equity = marketPrice - asset.mortgage;
    cfState.cash += equity;

    cfState.assets.realEstate = cfState.assets.realEstate.filter(re => re.id !== assetId);

    addCFLog(`🏢 ขายอสังหาริมทรัพย์ ${asset.name} ที่ราคาตลาด ฿${marketPrice.toLocaleString()} (หักหนี้กู้ยืม ฿${asset.mortgage.toLocaleString()} รับเงินสุทธิ ฿${equity.toLocaleString()})`, "market-log");
    clearEventCard();
    updateCFUI();
}

// Sell Stock Asset through Market Offer
function sellStock(symbol, marketPrice) {
    const stock = cfState.assets.stocks.find(s => s.symbol === symbol);
    if (!stock) return;

    const proceeds = stock.shares * marketPrice;
    cfState.cash += proceeds;

    cfState.assets.stocks = cfState.assets.stocks.filter(s => s.symbol !== symbol);

    addCFLog(`📈 ขายหุ้น ${symbol} ทั้งหมดจำนวน ${stock.shares} หุ้น ที่ราคาตลาด ฿${marketPrice.toLocaleString()} (รับเงินก้อนสุทธิ ฿${proceeds.toLocaleString()})`, "market-log");
    clearEventCard();
    updateCFUI();
}

// Borrow Bank loan (฿10,000 chunks)
function borrowBank() {
    cfState.cash += 10000;
    cfState.liabilities.bankLoan += 10000;
    cfState.expenses.bankInterest += 1000; // 10% Interest rate

    addCFLog(`💵 กู้ยืมเงินธนาคารเพิ่ม +฿10,000 (เพิ่มรายจ่ายดอกเบี้ย ฿1,000/เดือน)`, "deal-log");
    updateCFUI();
}

// Repay Bank loan (฿10,000 chunks)
function repayBank() {
    if (cfState.liabilities.bankLoan < 10000) {
        alert("คุณไม่มียอดค้างชำระเงินกู้ยืมธนาคารนี้ครับ");
        return;
    }
    if (cfState.cash < 10000) {
        alert("เงินสดในมือไม่เพียงพอชำระหนี้ ฿10,000! กรุณาสะสมเงินจากกระแสรายเดือนก่อนครับ");
        return;
    }

    cfState.cash -= 10000;
    cfState.liabilities.bankLoan -= 10000;
    cfState.expenses.bankInterest -= 1000;

    addCFLog(`💵 คืนชำระหนี้กู้ธนาคาร -฿10,000 (ลดค่าใช้จ่ายดอกเบี้ยลง ฿1,000/เดือน)`, "deal-log");
    updateCFUI();
}

// Repay specific career debts
function repayDebt(debtType) {
    let debtValue = 0;
    let monthlySaving = 0;

    if (debtType === "creditCard") {
        debtValue = cfState.liabilities.creditCard;
        monthlySaving = cfState.expenses.creditCard;
    } else if (debtType === "carLoan") {
        debtValue = cfState.liabilities.carLoan;
        monthlySaving = cfState.expenses.carLoan;
    }

    if (debtValue === 0) {
        alert("หนี้สินส่วนนี้ได้รับการปิดยอดชำระหมดเรียบร้อยแล้วครับ");
        return;
    }

    if (cfState.cash < debtValue) {
        alert(`เงินสดไม่เพียงพอปิดหนี้สินจำนวน ฿${debtValue.toLocaleString()}! กรุณาสะสมเงินสดเพิ่มขึ้นก่อนครับ`);
        return;
    }

    cfState.cash -= debtValue;
    
    if (debtType === "creditCard") {
        cfState.liabilities.creditCard = 0;
        cfState.expenses.creditCard = 0;
        addCFLog(`🎉 ปิดหนี้บัตรเครดิตสะสมทั้งหมด -฿${debtValue.toLocaleString()} สำเร็จ! ลดรายจ่ายประจำลง ฿${monthlySaving.toLocaleString()}/เดือน`, "deal-log");
    } else if (debtType === "carLoan") {
        cfState.liabilities.carLoan = 0;
        cfState.expenses.carLoan = 0;
        addCFLog(`🎉 ปิดหนี้กู้ซื้อรถยนต์สะสมทั้งหมด -฿${debtValue.toLocaleString()} สำเร็จ! ลดรายจ่ายประจำลง ฿${monthlySaving.toLocaleString()}/เดือน`, "deal-log");
    }

    updateCFUI();
}

// Add event logs
function addCFLog(text, logClass = "system-log") {
    const logs = document.getElementById("cf-game-logs");
    const entry = document.createElement("div");
    entry.className = `log-entry ${logClass}`;
    entry.innerText = `[รอบที่ ${cfState.turnCount}] ${text}`;
    logs.appendChild(entry);
    logs.scrollTop = logs.scrollHeight;
}

// Math calculation helper
function calculateCFPassiveIncome() {
    let passive = 0;

    cfState.assets.realEstate.forEach(re => {
        passive += re.cashFlow;
    });

    cfState.assets.businesses.forEach(b => {
        passive += b.cashFlow;
    });

    cfState.assets.stocks.forEach(s => {
        passive += s.shares * (s.dividendPerShare || 0);
    });

    cfState.passiveIncome = passive;
    return passive;
}

function calculateCFTotalIncome() {
    const passive = calculateCFPassiveIncome();
    cfState.totalIncome = cfState.salary + passive;
    return cfState.totalIncome;
}

function calculateCFTotalExpenses() {
    let totalExp = 0;
    Object.values(cfState.expenses).forEach(v => {
        totalExp += v;
    });
    totalExp -= cfState.expenses.childCost; 
    totalExp += cfState.childrenCount * cfState.expenses.childCost;
    return totalExp;
}

function calculateCFNetFlow() {
    const totalInc = calculateCFTotalIncome();
    const totalExp = calculateCFTotalExpenses();
    return totalInc - totalExp;
}

// Sync Game State variables with UI ledger components
function updateCFUI() {
    if (!cfState.activeGame) return;

    document.getElementById("game-turn-count").innerText = cfState.turnCount;
    document.getElementById("game-cash-on-hand").innerText = `฿${cfState.cash.toLocaleString()}`;
    document.getElementById("cf-display-job").innerText = `อาชีพ: ${cfState.profession}`;

    const passive = calculateCFPassiveIncome();
    const expenses = calculateCFTotalExpenses();
    const income = calculateCFTotalIncome();
    const netFlow = income - expenses;

    document.getElementById("cf-net-cashflow-val").innerText = `฿${netFlow.toLocaleString()}`;
    
    if (netFlow < 0) {
        document.getElementById("cf-net-cashflow-val").className = "text-red";
    } else {
        document.getElementById("cf-net-cashflow-val").className = "text-green";
    }

    document.getElementById("progress-val-passive").innerText = `฿${passive.toLocaleString()}`;
    document.getElementById("progress-val-expenses").innerText = `฿${expenses.toLocaleString()}`;

    let progressPct = 0;
    if (expenses > 0) {
        progressPct = Math.round((passive / expenses) * 100);
    }
    
    document.getElementById("cf-passive-progress-bar").style.width = `${Math.min(100, progressPct)}%`;
    document.getElementById("cf-escape-status").innerText = `ความคืบหน้าการเป็นอิสระทางการเงิน: ${progressPct}%`;

    document.getElementById("cf-salary-val").innerText = `฿${cfState.salary.toLocaleString()}`;
    document.getElementById("cf-interest-val").innerText = `฿${cfState.assets.stocks.reduce((acc, s) => acc + (s.shares * (s.dividendPerShare || 0)), 0).toLocaleString()}`;
    document.getElementById("cf-realestate-inc-val").innerText = `฿${cfState.assets.realEstate.reduce((acc, re) => acc + re.cashFlow, 0).toLocaleString()}`;
    document.getElementById("cf-business-inc-val").innerText = `฿${cfState.assets.businesses.reduce((acc, b) => acc + b.cashFlow, 0).toLocaleString()}`;
    document.getElementById("cf-total-income-val").innerText = `฿${income.toLocaleString()}`;

    document.getElementById("cf-tax-val").innerText = `฿${cfState.expenses.taxes.toLocaleString()}`;
    document.getElementById("cf-mortgage-pay-val").innerText = `฿${cfState.expenses.mortgage.toLocaleString()}`;
    document.getElementById("cf-car-pay-val").innerText = `฿${cfState.expenses.carLoan.toLocaleString()}`;
    document.getElementById("cf-cc-pay-val").innerText = `฿${cfState.expenses.creditCard.toLocaleString()}`;
    document.getElementById("cf-retail-pay-val").innerText = `฿${cfState.expenses.retailDebt.toLocaleString()}`;
    document.getElementById("cf-child-count-lbl").innerText = cfState.childrenCount;
    document.getElementById("cf-child-pay-val").innerText = `฿${(cfState.childrenCount * cfState.expenses.childCost).toLocaleString()}`;
    document.getElementById("cf-bank-interest-val").innerText = `฿${cfState.expenses.bankInterest.toLocaleString()}`;
    document.getElementById("cf-total-expenses-val").innerText = `฿${expenses.toLocaleString()}`;

    renderLedgerLists();

    document.getElementById("cf-mortgage-liab-val").innerText = `฿${cfState.liabilities.mortgage.toLocaleString()}`;
    document.getElementById("cf-car-liab-val").innerText = `฿${cfState.liabilities.carLoan.toLocaleString()}`;
    document.getElementById("cf-cc-liab-val").innerText = `฿${cfState.liabilities.creditCard.toLocaleString()}`;
    document.getElementById("cf-retail-liab-val").innerText = `฿${cfState.liabilities.retail.toLocaleString()}`;
    document.getElementById("cf-bank-liab-val").innerText = `฿${cfState.liabilities.bankLoan.toLocaleString()}`;

    document.getElementById("btn-pay-credit-card").innerText = `ปิดหนี้บัตรเครดิต (฿${cfState.liabilities.creditCard.toLocaleString()})`;
    document.getElementById("btn-pay-car-loan").innerText = `ปิดหนี้รถยนต์ (฿${cfState.liabilities.carLoan.toLocaleString()})`;

    if (passive > expenses && cfState.activeGame) {
        triggerVictory();
    }
}

// Render Asset listing inside Ledger
function renderLedgerLists() {
    const stockContainer = document.getElementById("cf-list-stocks");
    stockContainer.innerHTML = "";
    if (cfState.assets.stocks.length === 0) {
        stockContainer.innerHTML = `<div class="ledger-empty-msg">ไม่มีหุ้นกู้ในครอบครอง</div>`;
    } else {
        cfState.assets.stocks.forEach(s => {
            const item = document.createElement("div");
            item.className = "ledger-item";
            item.innerHTML = `
                <span>${s.symbol} (${s.shares} หุ้น, ต้นทุน ฿${s.averageCost.toLocaleString()})</span>
                <span class="ledger-item-val">+฿${(s.shares * (s.dividendPerShare || 0)).toLocaleString()}/ด.</span>
            `;
            stockContainer.appendChild(item);
        });
    }

    const reContainer = document.getElementById("cf-list-realestate");
    reContainer.innerHTML = "";
    if (cfState.assets.realEstate.length === 0) {
        reContainer.innerHTML = `<div class="ledger-empty-msg">ไม่มีอสังหาฯ ในครอบครอง</div>`;
    } else {
        cfState.assets.realEstate.forEach(re => {
            const item = document.createElement("div");
            item.className = "ledger-item";
            item.innerHTML = `
                <span>${re.name} (จำนอง ฿${re.mortgage.toLocaleString()})</span>
                <span class="ledger-item-val">+฿${re.cashFlow.toLocaleString()}/ด.</span>
            `;
            reContainer.appendChild(item);
        });
    }

    const bizContainer = document.getElementById("cf-list-businesses");
    bizContainer.innerHTML = "";
    if (cfState.assets.businesses.length === 0) {
        bizContainer.innerHTML = `<div class="ledger-empty-msg">ไม่มีธุรกิจในครอบครอง</div>`;
    } else {
        cfState.assets.businesses.forEach(b => {
            const item = document.createElement("div");
            item.className = "ledger-item";
            item.innerHTML = `
                <span>${b.name}</span>
                <span class="ledger-item-val">+฿${b.cashFlow.toLocaleString()}/ด.</span>
            `;
            bizContainer.appendChild(item);
        });
    }
}

// Victory screen setup
function triggerVictory() {
    cfState.activeGame = false;
    
    document.getElementById("vic-job").innerText = cfState.profession;
    document.getElementById("vic-turns").innerText = cfState.turnCount;
    document.getElementById("vic-passive").innerText = `฿${cfState.passiveIncome.toLocaleString()}`;
    document.getElementById("vic-expenses").innerText = `฿${calculateCFTotalExpenses().toLocaleString()}`;

    document.getElementById("cf-victory-modal").classList.remove("hidden");
    addCFLog("🏆 ยินดีด้วย! คุณหลุดพ้นจากวงจรหนูถีบจักร (Rat Race) สำเร็จและชนะเกมนี้!", "payday-log");
}
