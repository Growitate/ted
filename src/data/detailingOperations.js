// Complete 105-Operation Detailing Framework from TED_Four_Levels_of_Detailing.pdf

export const FRESHMAN_OPERATIONS = [
  { step: 1, title: "Initial vehicle inspection", category: "Inspection & Preparation" },
  { step: 2, title: "Wheel and tyre surface cleaning", category: "Exterior Cleaning" },
  { step: 3, title: "Exterior pre-rinse", category: "Exterior Cleaning" },
  { step: 4, title: "pH-neutral shampoo wash", category: "Exterior Cleaning" },
  { step: 5, title: "Exterior panel cleaning", category: "Exterior Cleaning" },
  { step: 6, title: "Exterior glass cleaning", category: "Exterior Cleaning" },
  { step: 7, title: "Deionized-water final rinse", category: "Water Standard (0-4 TDS)" },
  { step: 8, title: "Interior dust removal using clean microfiber", category: "Interior Care" },
  { step: 9, title: "Interior vacuuming", category: "Interior Care" },
  { step: 10, title: "Floor mat cleaning and placement", category: "Interior Care" }
];

export const SCHOLAR_ADDITIONAL_OPERATIONS = [
  { step: 11, title: "Detailed wheel-face cleaning", category: "Wheels & Arches" },
  { step: 12, title: "Accessible wheel-arch cleaning", category: "Wheels & Arches" },
  { step: 13, title: "Tyre dressing application", category: "Wheels & Dressing" },
  { step: 14, title: "Exterior plastic-trim dressing", category: "Exterior Trim" },
  { step: 15, title: "Door-jamb cleaning", category: "Exterior Jambs" },
  { step: 16, title: "Dashboard microfiber cleaning", category: "Interior Touchpoints" },
  { step: 17, title: "Centre-console surface cleaning", category: "Interior Touchpoints" },
  { step: 18, title: "Interior door-panel cleaning", category: "Interior Touchpoints" },
  { step: 19, title: "Interior glass cleaning", category: "Interior Touchpoints" },
  { step: 20, title: "Interior dusting of accessible crevices", category: "Interior Touchpoints" }
];

export const GRADUATE_ADDITIONAL_OPERATIONS = [
  { step: 21, title: "Touchless pre-rinse using a suitable pre-wash chemical", category: "Pre-Wash Chemistry" },
  { step: 22, title: "Steam cleaning of suitable interior surfaces", category: "Steam & Deep Clean" },
  { step: 23, title: "Deep cleaning of floor mats", category: "Carpets & Mats" },
  { step: 24, title: "Fabric-seat cleaning where appropriate", category: "Upholstery" },
  { step: 25, title: "Carpet and floor-area deep cleaning", category: "Carpets & Mats" },
  { step: 26, title: "Targeted stain treatment", category: "Stain Removal" },
  { step: 27, title: "Detailed cleaning of accessible seat crevices", category: "Intricate Crevices" },
  { step: 28, title: "Deep cleaning of interior door pockets", category: "Intricate Crevices" },
  { step: 29, title: "Detailed cleaning around cup holders", category: "Intricate Crevices" },
  { step: 30, title: "Cleaning of accessible seat rails", category: "Intricate Crevices" },
  { step: 31, title: "Steering-wheel and control-area detailing", category: "Control Area" },
  { step: 32, title: "Targeted cleaning of interior plastic surfaces", category: "Interior Plastics" },
  { step: 33, title: "Interior odour-source inspection", category: "Odour Neutralisation" },
  { step: 34, title: "Appropriate odour-neutralisation treatment", category: "Odour Neutralisation" },
  { step: 35, title: "Ozone treatment, when suitable and requested", category: "Odour Neutralisation" },
  { step: 36, title: "Final interior vacuuming", category: "Interior Quality" },
  { step: 37, title: "Final interior quality inspection", category: "Interior Quality" }
];

export const DOCTORATE_ADDITIONAL_OPERATIONS = [
  { step: 38, title: "Detailed inspection of interior and exterior condition", category: "Inspection & Gaps" },
  { step: 39, title: "Careful cleaning of accessible exterior panel gaps", category: "Inspection & Gaps" },
  { step: 40, title: "Detailed cleaning around exterior badges", category: "Exterior Precision" },
  { step: 41, title: "Cleaning of accessible grille sections", category: "Exterior Precision" },
  { step: 42, title: "Detailed cleaning around door handles", category: "Exterior Precision" },
  { step: 43, title: "Detailed cleaning of exterior mirrors", category: "Exterior Precision" },
  { step: 44, title: "Cleaning of accessible fuel-filler area", category: "Exterior Precision" },
  { step: 45, title: "Detailed cleaning of door jambs and hinges", category: "Exterior Precision" },
  { step: 46, title: "Detailed cleaning of weather-seal surfaces", category: "Weather Seals" },
  { step: 47, title: "Detailed cleaning around window switches", category: "Interior Switches" },
  { step: 48, title: "Cleaning of steering-wheel buttons", category: "Interior Switches" },
  { step: 49, title: "Detailed air-vent cleaning", category: "Air Vents" },
  { step: 50, title: "Cleaning around dashboard seams", category: "Dashboard Seams" },
  { step: 51, title: "Detailed centre-console crevice cleaning", category: "Console & Seams" },
  { step: 52, title: "Cleaning around seat-belt buckles", category: "Seat Details" },
  { step: 53, title: "Detailed seat-stitching cleaning where suitable", category: "Seat Details" },
  { step: 54, title: "Headliner spot cleaning where appropriate", category: "Headliner" },
  { step: 55, title: "Leather cleaning, where applicable", category: "Leather Care" },
  { step: 56, title: "Suitable leather conditioning", category: "Leather Care" },
  { step: 57, title: "Detailed fabric-upholstery treatment where applicable", category: "Upholstery" },
  { step: 58, title: "Carpet extraction where suitable and equipped", category: "Extraction" },
  { step: 59, title: "Boot or luggage-compartment vacuuming", category: "Luggage Compartment" },
  { step: 60, title: "Boot-area surface cleaning", category: "Luggage Compartment" },
  { step: 61, title: "Spare-wheel-well cleaning where accessible", category: "Luggage Compartment" },
  { step: 62, title: "Detailed cleaning of removable floor mats", category: "Carpets & Mats" },
  { step: 63, title: "Cleaning of seat adjustment controls", category: "Seat Controls" },
  { step: 64, title: "Cleaning of accessible seat tracks", category: "Seat Controls" },
  { step: 65, title: "Cleaning of child-seat contact areas when unoccupied and accessible", category: "Delicate Areas" },
  { step: 66, title: "Cleaning around interior storage compartments", category: "Storage Compartments" },
  { step: 67, title: "Cleaning of accessible charging ports externally", category: "Electronics & Ports" },
  { step: 68, title: "Cleaning around infotainment controls", category: "Electronics & Ports" },
  { step: 69, title: "Appropriate cleaning of piano-black trim", category: "Delicate Finishes" },
  { step: 70, title: "Appropriate care of delicate interior finishes", category: "Delicate Finishes" },
  { step: 71, title: "Detailed cleaning of window edges", category: "Glass & Seals" },
  { step: 72, title: "Cleaning of accessible rubber seals", category: "Glass & Seals" },
  { step: 73, title: "Cleaning of exterior plastic details", category: "Exterior Trim" },
  { step: 74, title: "Detailed wheel-spoke cleaning", category: "Wheels & Barrels" },
  { step: 75, title: "Cleaning of accessible wheel-barrel areas", category: "Wheels & Barrels" },
  { step: 76, title: "Detailed tyre-sidewall cleaning", category: "Wheels & Barrels" },
  { step: 77, title: "Cleaning of accessible wheel-arch surfaces", category: "Wheels & Barrels" },
  { step: 78, title: "Removal of suitable bonded contamination from exterior surfaces", category: "Decontamination" },
  { step: 79, title: "Targeted iron decontamination, where needed and compatible", category: "Decontamination" },
  { step: 80, title: "Detailed cleaning around emblems and badges", category: "Exterior Precision" },
  { step: 81, title: "Final deionized-water rinse", category: "Water Standard (0-4 TDS)" },
  { step: 82, title: "Detailed drying of exterior crevices", category: "Safe Drying" },
  { step: 83, title: "Drying of accessible door-jamb areas", category: "Safe Drying" },
  { step: 84, title: "Cleaning of exterior glass edges", category: "Glass & Finishing" },
  { step: 85, title: "Final inspection of exterior finish", category: "Final Inspection" },
  { step: 86, title: "Final inspection of interior surfaces", category: "Final Inspection" },
  { step: 87, title: "Cleaning of accessible dashboard vent fins", category: "Air Vents" },
  { step: 88, title: "Cleaning around the gear selector", category: "Controls & Shifter" },
  { step: 89, title: "Detailed cleaning of accessible handbrake controls", category: "Controls & Shifter" },
  { step: 90, title: "Cleaning around seat-belt anchor areas", category: "Seat Details" },
  { step: 91, title: "Final odour-control assessment", category: "Odour Assessment" },
  { step: 92, title: "Performance air-filter inspection, if applicable", category: "Performance Air Filter" },
  { step: 93, title: "Cleaning of a compatible, reusable performance air filter, if required", category: "Performance Air Filter" },
  { step: 94, title: "Reinstallation of the filter according to manufacturer instructions", category: "Performance Air Filter" },
  { step: 95, title: "Verification that the filter housing is properly closed", category: "Performance Air Filter" },
  { step: 96, title: "Final interior glass inspection", category: "Quality Control" },
  { step: 97, title: "Final tyre-dressing inspection", category: "Quality Control" },
  { step: 98, title: "Final exterior-trim inspection", category: "Quality Control" },
  { step: 99, title: "Final wheel and tyre inspection", category: "Quality Control" },
  { step: 100, title: "Final inspection of accessible exterior crevices", category: "Quality Control" },
  { step: 101, title: "Final inspection of high-touch interior areas", category: "Quality Control" },
  { step: 102, title: "Confirmation that serviced surfaces are dry where required", category: "Quality Control" },
  { step: 103, title: "Removal of detailing residue from treated surfaces", category: "Quality Control" },
  { step: 104, title: "Final vehicle presentation", category: "Quality Control" },
  { step: 105, title: "Completion of a detailing quality-control checklist", category: "Quality Control" }
];

// Complete combined arrays
export const SCHOLAR_ALL_OPERATIONS = [...FRESHMAN_OPERATIONS, ...SCHOLAR_ADDITIONAL_OPERATIONS];
export const GRADUATE_ALL_OPERATIONS = [...SCHOLAR_ALL_OPERATIONS, ...GRADUATE_ADDITIONAL_OPERATIONS];
export const DOCTORATE_ALL_OPERATIONS = [...GRADUATE_ALL_OPERATIONS, ...DOCTORATE_ADDITIONAL_OPERATIONS];

export const TWO_WHEELER_FRESHMAN_OPERATIONS = [
  "Initial vehicle inspection and condition check",
  "Pre-rinse to loosen loose dirt",
  "pH-neutral shampoo foam application",
  "Gentle hand wash of painted body panels",
  "Fuel tank and tank-cover cleaning",
  "Front and rear mudguard cleaning",
  "Basic wheel and rim face cleaning",
  "Tyre sidewall cleaning",
  "Headlamp and tail-lamp exterior cleaning",
  "Indicator and reflector cleaning",
  "Mirror cleaning and finishing",
  "Windshield or visor exterior cleaning",
  "Accessible emblem and badge cleaning",
  "Handlebar, grips and lever exterior cleaning",
  "Instrument cluster exterior cleaning using a suitable method",
  "Footrest and footboard cleaning",
  "Accessible exterior crevice cleaning with detailing brushes",
  "Exhaust exterior cleaning when cool",
  "Plastic trim dressing to enhance appearance",
  "Deionised-water final rinse, safe drying and final inspection"
];

export const TWO_WHEELER_DOCTORATE_OPERATIONS = [
  "All 20 services included in Freshman package",
  "Thorough wheel and rim detailing",
  "Individual spoke cleaning on spoke-wheel motorcycles",
  "Chain cleaning and lubrication on chain-driven motorcycles",
  "Front and rear sprocket cleaning where safely accessible",
  "Detailed tyre sidewall cleaning and finishing",
  "Water-mark treatment on suitable exterior surfaces",
  "Detailed cleaning around badges, seams and accessible crevices",
  "Engine exterior cleaning using material-safe methods",
  "Careful exterior cleaning of electrical housings and accessible electronics",
  "Instrument cluster and switchgear detailing with suitable products",
  "Detailed handlebar, lever and control-area cleaning",
  "Thorough plastic trim treatment",
  "Exhaust and heat-shield cleaning when cool",
  "Headlamp, indicator and mirror finishing",
  "Accessible under-seat and footboard-area cleaning",
  "Seat cleaning with a material-appropriate product",
  "Deionised-water final rinse where appropriate",
  "Controlled drying and finishing",
  "Final quality inspection"
];

export const DOCTORATE_WORKFLOW_STAGES = [
  {
    id: "stage-1",
    title: "Stage 1: Decontamination & Zero-TDS Foam Wash",
    count: 22,
    summary: "Exterior pre-rinse, pH-neutral bath, panel gaps, emblem recesses & 0-4 TDS rinse.",
    narrative: "The exterior restoration begins with an exhaustive condition assessment to identify delicate surfaces and clear-coat defects. A touchless pre-rinse with targeted pre-wash chemistry is applied to emulsify road grime, followed by a gentle pH-neutral foam hand wash. Detailing brushes systematically purge accessible panel gaps, grille sections, door handles, mirror housings, fuel-filler compartments, door jambs, hinges, and weather-seal channels. Chemical decontamination removes embedded iron fallout and bonded surface particulates without abrasives. The vehicle is then treated to TED's signature 0–4 TDS deionized-water spot-free rinse, followed by warm filtered air-purge drying and plush microfiber towel finishing on all crevices, jambs, and glass edges.",
    steps: [
      { step: 1, title: "Initial vehicle inspection and condition check" },
      { step: 3, title: "Exterior pre-rinse to loosen surface dirt" },
      { step: 4, title: "pH-neutral shampoo foam application and gentle hand wash" },
      { step: 5, title: "Exterior body panel cleaning" },
      { step: 6, title: "Exterior glass cleaning" },
      { step: 7, title: "Deionized-water final rinse (0-4 TDS)" },
      { step: 21, title: "Touchless pre-rinse using targeted pre-wash chemistry" },
      { step: 39, title: "Careful cleaning of accessible exterior panel gaps" },
      { step: 40, title: "Detailed cleaning around exterior badges and emblems" },
      { step: 41, title: "Cleaning of accessible grille sections" },
      { step: 42, title: "Detailed cleaning around door handles and recesses" },
      { step: 43, title: "Detailed cleaning of exterior mirrors and housings" },
      { step: 44, title: "Cleaning of accessible fuel-filler door and area" },
      { step: 45, title: "Detailed cleaning of door jambs and hinges" },
      { step: 46, title: "Detailed cleaning of weather-seal surfaces" },
      { step: 78, title: "Removal of bonded contamination from exterior surfaces" },
      { step: 79, title: "Targeted iron fallout decontamination" },
      { step: 80, title: "Detailed cleaning around all body emblems" },
      { step: 81, title: "Final deionized-water spot-free rinse" },
      { step: 82, title: "Detailed air and microfiber drying of exterior crevices" },
      { step: 83, title: "Drying of accessible door-jamb areas" },
      { step: 84, title: "Cleaning of exterior glass edges" }
    ]
  },
  {
    id: "stage-2",
    title: "Stage 2: Wheels, Arches & Exterior Trim Dressing",
    count: 15,
    summary: "Spoke & barrel detailing, arch deep cleaning, non-greasy tyre dressings, and exterior plastic trim protection.",
    narrative: "Wheels and arches receive intensive multi-stage technical care. Wheel barrels, individual spokes, and accessible arch liners are deep-cleaned using specialized barrel brushes and safe iron-dissolving formulas to eliminate baked-on brake dust. Tyre sidewalls undergo deep scrub degreasing to strip old browning residues before receiving a breathable, satin-finish protective dressing. Exterior window rubber seals, window edges, and unpainted plastic cladding are cleansed, hydrated, and conditioned with UV-inhibiting polymers to prevent sun-fading and restore deep OEM satin contrast, culminating in a dedicated wheel and trim quality sign-off.",
    steps: [
      { step: 2, title: "Wheel and tyre surface cleaning" },
      { step: 11, title: "Detailed wheel-face cleaning" },
      { step: 12, title: "Accessible wheel-arch cleaning" },
      { step: 13, title: "Tyre dressing application for long-lasting finish" },
      { step: 14, title: "Exterior plastic-trim dressing and protection" },
      { step: 71, title: "Detailed cleaning of window edges" },
      { step: 72, title: "Cleaning of accessible rubber seals" },
      { step: 73, title: "Cleaning of exterior plastic details" },
      { step: 74, title: "Detailed wheel-spoke cleaning" },
      { step: 75, title: "Cleaning of accessible wheel-barrel inner areas" },
      { step: 76, title: "Detailed tyre-sidewall cleaning and prep" },
      { step: 77, title: "Cleaning of accessible wheel-arch surfaces" },
      { step: 97, title: "Final tyre-dressing inspection" },
      { step: 98, title: "Final exterior-trim inspection" },
      { step: 99, title: "Final wheel and tyre inspection" }
    ]
  },
  {
    id: "stage-3",
    title: "Stage 3: Deep Interior Steam, Carpet & Odour Sanitization",
    count: 24,
    summary: "Microfiber dusting, full vacuuming, high-temperature steam extraction, carpet care, and interior odour treatment.",
    narrative: "The cabin is revitalized through high-temperature thermal steam sanitization and hot-water extraction on suitable carpets, fabric upholstery, and removable floor mats. Deep vacuuming reaches all luggage compartments, the spare-wheel well, accessible seat rails, sliders, and seat crevices. Door pockets, cup holders, and interior door panels are stripped of soil using material-safe antimicrobial cleaners. Stains undergo targeted spot treatments, and the cabin environment is tested for odour sources before undergoing active neutralisation and optional ozone air-purification, leaving an allergen-free, fresh factory atmosphere.",
    steps: [
      { step: 8, title: "Interior dust removal using clean microfiber towels" },
      { step: 9, title: "Interior cabin vacuuming" },
      { step: 10, title: "Floor mat cleaning and placement" },
      { step: 18, title: "Interior door-panel cleaning" },
      { step: 19, title: "Interior glass cleaning" },
      { step: 22, title: "Steam cleaning of suitable interior surfaces" },
      { step: 23, title: "Deep cleaning of removable floor mats" },
      { step: 24, title: "Fabric-seat cleaning where appropriate" },
      { step: 25, title: "Carpet and floor-area deep cleaning" },
      { step: 26, title: "Targeted spot and stain treatment" },
      { step: 27, title: "Detailed cleaning of accessible seat crevices" },
      { step: 28, title: "Deep cleaning of interior door pockets" },
      { step: 29, title: "Detailed cleaning around cup holders" },
      { step: 30, title: "Cleaning of accessible seat rails and sliders" },
      { step: 33, title: "Interior odour-source inspection" },
      { step: 34, title: "Appropriate odour-neutralisation treatment" },
      { step: 35, title: "Ozone treatment (when suitable and requested)" },
      { step: 36, title: "Final interior vacuuming pass" },
      { step: 58, title: "Carpet extraction where suitable and equipped" },
      { step: 59, title: "Boot and luggage-compartment vacuuming" },
      { step: 60, title: "Boot-area surface wipe and cleaning" },
      { step: 61, title: "Spare-wheel-well cleaning where accessible" },
      { step: 62, title: "Detailed cleaning of removable floor mats" },
      { step: 91, title: "Final cabin odour-control assessment" }
    ]
  },
  {
    id: "stage-4",
    title: "Stage 4: Intricate Crevices, Delicate Finishes & Leather Care",
    count: 26,
    summary: "Piano-black trims, infotainment buttons, air-vent fins, seat stitching, console crevices, and leather conditioning.",
    narrative: "Every delicate interior touchpoint is treated with surgical precision. Using ultra-soft horsehair detailing brushes, technicians delicately detail dashboard seams, air-vent louvres, infotainment rotary dials, window switches, steering-wheel controls, gear selectors, and electronic handbrake toggles. High-gloss piano-black surfaces and digital instrument screens are cleansed with scratch-free optical solutions. Fine leather seating receives dedicated pH-balanced cleaning and conditioning to replenish natural oils, seat stitching is gently cleared of debris, and child-seat mounts, glove compartments, and sun-visor vanity mirrors are cleansed to perfection.",
    steps: [
      { step: 16, title: "Dashboard microfiber cleaning" },
      { step: 17, title: "Centre-console surface cleaning" },
      { step: 20, title: "Interior dusting of accessible crevices" },
      { step: 31, title: "Steering-wheel and control-area detailing" },
      { step: 32, title: "Targeted cleaning of interior plastic surfaces" },
      { step: 47, title: "Detailed cleaning around window switches" },
      { step: 48, title: "Cleaning of steering-wheel buttons" },
      { step: 49, title: "Detailed air-vent cleaning" },
      { step: 50, title: "Cleaning around dashboard seams" },
      { step: 51, title: "Detailed centre-console crevice cleaning" },
      { step: 52, title: "Cleaning around seat-belt buckles" },
      { step: 53, title: "Detailed seat-stitching cleaning where suitable" },
      { step: 54, title: "Headliner spot cleaning where appropriate" },
      { step: 55, title: "Material-appropriate leather cleaning" },
      { step: 56, title: "Suitable leather conditioning" },
      { step: 57, title: "Detailed fabric-upholstery treatment where applicable" },
      { step: 63, title: "Cleaning of seat adjustment controls" },
      { step: 64, title: "Cleaning of accessible seat tracks" },
      { step: 65, title: "Cleaning of child-seat contact areas when unoccupied and accessible" },
      { step: 66, title: "Cleaning around interior storage compartments" },
      { step: 67, title: "Cleaning of accessible charging ports externally" },
      { step: 68, title: "Cleaning around infotainment controls" },
      { step: 69, title: "Appropriate cleaning of sensitive piano-black trim" },
      { step: 70, title: "Appropriate care of delicate interior finishes" },
      { step: 87, title: "Cleaning of accessible dashboard vent fins" },
      { step: 88, title: "Cleaning around the gear selector" },
      { step: 89, title: "Detailed cleaning of accessible handbrake controls" },
      { step: 90, title: "Cleaning around seat-belt anchor areas" }
    ]
  },
  {
    id: "stage-5",
    title: "Stage 5: Performance Air Filter & 105-Point Quality Control",
    count: 18,
    summary: "Compatible reusable air filter inspection and cleaning, streak-free glass inspection, residue wipe, and QC checklist completion.",
    narrative: "The final stage ensures technical integrity and flawless presentation. If equipped with a compatible, reusable performance air filter (such as K&N or BMC), it is inspected, cleaned per manufacturer protocol, and securely reinstalled. Every panel, glass surface, and crevice undergoes LED light inspection to ensure all polish residue and compounds are eliminated. All serviced surfaces are verified dry and streak-free before the lead detailer signs off on the official 105-step quality control checklist, preparing your vehicle for delivery in showroom condition.",
    steps: [
      { step: 37, title: "Final interior quality inspection" },
      { step: 85, title: "Final inspection of exterior finish and gloss" },
      { step: 86, title: "Final inspection of interior surfaces" },
      { step: 92, title: "Performance air-filter inspection (if applicable)" },
      { step: 93, title: "Cleaning of compatible, reusable performance air filter (if required)" },
      { step: 94, title: "Reinstallation of filter according to manufacturer instructions" },
      { step: 95, title: "Verification that filter housing is properly closed" },
      { step: 96, title: "Final interior glass clarity inspection" },
      { step: 100, title: "Final inspection of accessible exterior crevices" },
      { step: 101, title: "Final inspection of high-touch interior areas" },
      { step: 102, title: "Confirmation that serviced surfaces are dry where required" },
      { step: 103, title: "Removal of detailing residue from all treated surfaces" },
      { step: 104, title: "Final vehicle presentation readiness" },
      { step: 105, title: "Completion of detailing quality-control checklist sign-off" }
    ]
  }
];

export const PACKAGE_STAGES_MAP = {
  'doctorate-car-package': DOCTORATE_WORKFLOW_STAGES,
  'graduate-car-package': [
    {
      id: "stage-1",
      title: "Stage 1: Exterior Touchless Pre-Rinse & Wash",
      count: 8,
      summary: "Pre-wash chemistry, foam bath, exterior panels, glass, and zero-TDS final rinse.",
      narrative: "Exterior surfaces undergo thorough preparation starting with an initial vehicle inspection, followed by a touchless pre-rinse using targeted pre-wash chemistry to dissolve road film without contact. A gentle pH-neutral shampoo bath, wheel and tyre surface cleaning, exterior body panel wipe-down, and glass cleaning culminate in TED's signature 0–4 TDS deionized-water spot-free rinse.",
      steps: [
        { step: 1, title: "Initial vehicle inspection and condition check" },
        { step: 2, title: "Wheel and tyre surface cleaning" },
        { step: 3, title: "Exterior pre-rinse" },
        { step: 4, title: "pH-neutral shampoo wash" },
        { step: 5, title: "Exterior panel cleaning" },
        { step: 6, title: "Exterior glass cleaning" },
        { step: 7, title: "Deionized-water final rinse (0-4 TDS)" },
        { step: 21, title: "Touchless pre-rinse using a suitable pre-wash chemical" }
      ]
    },
    {
      id: "stage-2",
      title: "Stage 2: Wheels, Arches & Exterior Dressing",
      count: 6,
      summary: "Detailed wheel-face, arches, tyre dressing, plastic trim dressing, and jambs.",
      narrative: "Deepens exterior refinement with dedicated wheel-face and wheel-arch cleaning, long-lasting tyre dressing, exterior plastic trim conditioning to prevent UV fading, door-jamb wiping, and interior glass cleaning for complete optical clarity.",
      steps: [
        { step: 11, title: "Detailed wheel-face cleaning" },
        { step: 12, title: "Accessible wheel-arch cleaning" },
        { step: 13, title: "Tyre dressing application" },
        { step: 14, title: "Exterior plastic-trim dressing" },
        { step: 15, title: "Door-jamb cleaning" },
        { step: 19, title: "Interior glass cleaning" }
      ]
    },
    {
      id: "stage-3",
      title: "Stage 3: Deep Interior Steam & Odour Control",
      count: 23,
      summary: "Steam cleaning, carpets, upholstery, seat crevices, cup holders, seat rails, and odour treatment.",
      narrative: "A comprehensive cabin reset incorporating high-temperature steam cleaning across suitable surfaces, deep carpet and floor-mat extraction, fabric-seat stain treatments, and intensive crevice detailing around cup holders, seat rails, and door pockets. Finishes with odour-source inspection, active neutralisation, and optional ozone treatment for an allergen-free cabin.",
      steps: [
        { step: 8, title: "Interior dust removal using clean microfiber" },
        { step: 9, title: "Interior vacuuming" },
        { step: 10, title: "Floor mat cleaning and placement" },
        { step: 16, title: "Dashboard microfiber cleaning" },
        { step: 17, title: "Centre-console surface cleaning" },
        { step: 18, title: "Interior door-panel cleaning" },
        { step: 20, title: "Interior dusting of accessible crevices" },
        { step: 22, title: "Steam cleaning of suitable interior surfaces" },
        { step: 23, title: "Deep cleaning of floor mats" },
        { step: 24, title: "Fabric-seat cleaning where appropriate" },
        { step: 25, title: "Carpet and floor-area deep cleaning" },
        { step: 26, title: "Targeted stain treatment" },
        { step: 27, title: "Detailed cleaning of accessible seat crevices" },
        { step: 28, title: "Deep cleaning of interior door pockets" },
        { step: 29, title: "Detailed cleaning around cup holders" },
        { step: 30, title: "Cleaning of accessible seat rails" },
        { step: 31, title: "Steering-wheel and control-area detailing" },
        { step: 32, title: "Targeted cleaning of interior plastic surfaces" },
        { step: 33, title: "Interior odour-source inspection" },
        { step: 34, title: "Appropriate odour-neutralisation treatment" },
        { step: 35, title: "Ozone treatment, when suitable and requested" },
        { step: 36, title: "Final interior vacuuming" },
        { step: 37, title: "Final interior quality inspection" }
      ]
    }
  ],
  'scholar-car-package': [
    {
      id: "stage-1",
      title: "Stage 1: The Fundamentals Exterior & Interior Care",
      count: 10,
      summary: "pH-neutral wash, panel cleaning, zero-TDS rinse, microfiber dust removal, and vacuuming.",
      narrative: "The essential routine foundation covering vehicle inspection, wheel and tyre wash, exterior pre-rinse, pH-neutral shampoo hand wash, panel cleaning, glass cleaning, 0–4 TDS deionized-water spot-free rinse, interior dusting, cabin vacuuming, and mat placement.",
      steps: FRESHMAN_OPERATIONS
    },
    {
      id: "stage-2",
      title: "Stage 2: Enhanced Trims, Wheels & Touchpoints",
      count: 10,
      summary: "Wheel-face & arch cleaning, tyre dressing, plastic trim dressing, door-jambs, dashboard, and console.",
      narrative: "Elevates the baseline with detailed wheel-face and wheel-arch cleaning, durable tyre dressing, exterior plastic trim restoration, door-jamb cleaning, interior dashboard and console microfiber treatment, and crevice dusting.",
      steps: SCHOLAR_ADDITIONAL_OPERATIONS
    }
  ],
  'freshman-car-package': [
    {
      id: "stage-1",
      title: "Stage 1: The Fundamentals Routine Maintenance Wash",
      count: 10,
      summary: "pH-neutral shampoo wash, microfiber wipe, vacuuming, and 0-4 TDS deionized rinse.",
      narrative: "A precise 10-operation routine maintenance care package for four-wheelers. Delivers an initial condition inspection, wheel and tyre surface cleaning, exterior pre-rinse, gentle pH-neutral shampoo wash, panel cleaning, exterior glass finishing, and TED's signature 0–4 TDS deionized-water spot-free rinse, paired with interior dusting, thorough cabin vacuuming, and floor-mat placement.",
      steps: FRESHMAN_OPERATIONS
    }
  ],
  'freshman-moto-package': [
    {
      id: "stage-1",
      title: "Two-Wheeler Basic Wash & Plastic Trim Restoration",
      count: 20,
      summary: "Gentle pH-neutral hand wash, mudguards, tank, levers, plastic trim dressing, and zero-TDS rinse.",
      narrative: "A dedicated 20-service routine maintenance treatment for bikes and scooters. Features vehicle inspection, pre-rinse, gentle pH-neutral foam hand wash, tank, mudguard, and lever cleaning, visor care, accessible crevice detailing with soft brushes, exterior plastic trim dressing, and safe controlled drying with a spot-free deionized-water final rinse.",
      steps: TWO_WHEELER_FRESHMAN_OPERATIONS.map((title, i) => ({ step: i + 1, title }))
    }
  ],
  'doctorate-moto-package': [
    {
      id: "stage-1",
      title: "Stage 1: Basic Wash & Deionized Final Rinse",
      count: 20,
      summary: "All 20 Freshman wash operations including trim dressing and safe drying.",
      narrative: "Delivers the complete 20-service Freshman baseline wash, including gentle foam hand washing of the tank, body panels, mudguards, and handlebars, delicate switchgear wiping, plastic trim dressing, and zero-TDS deionized-water spot-free rinsing.",
      steps: TWO_WHEELER_FRESHMAN_OPERATIONS.map((title, i) => ({ step: i + 1, title }))
    },
    {
      id: "stage-2",
      title: "Stage 2: Signature Detailing, Spoke & Drive Chain Care",
      count: 20,
      summary: "Spoke cleaning, chain clean & lube, sprocket cleaning, engine exterior cleaning, and water-mark treatment.",
      narrative: "An advanced technical treatment featuring individual spoke and rim detailing, drive chain degreasing with precision high-performance lubrication, front and rear sprocket cleaning, material-safe engine casing care, heat-shield and exhaust cleaning, and targeted exterior water-mark treatment.",
      steps: TWO_WHEELER_DOCTORATE_OPERATIONS.map((title, i) => ({ step: i + 1, title }))
    }
  ]
};

