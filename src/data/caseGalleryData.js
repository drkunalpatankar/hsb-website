/**
 * Case Gallery Data
 * Each case represents a complex orthodontic treatment for educational display.
 * 
 * Schema:
 * - id: Unique identifier
 * - title: Display title
 * - category: Filter category (e.g., "Class II", "Impactions", "Open Bite")
 * - thumbnail: Path to thumbnail/main image
 * - images: Array of image paths (for multi-image cases)
 * - summary: Brief 1-2 sentence description
 * - technicalDetails: In-depth orthodontic explanation
 * - tags: Keywords for search/filter
 */

export const caseCategories = [
    { id: 'all', label: 'All Cases' },
    { id: 'class-ii', label: 'Class II Correction' },
    { id: 'impactions', label: 'Impactions' },
    { id: 'open-bite', label: 'Open Bite' },
    { id: 'crowding', label: 'Severe Crowding' },
    { id: 'surgical', label: 'Surgical Cases' },
];

export const caseGalleryData = [
    {
        id: 1,
        title: "Simultaneous Mandibular Advancement with Alignment using FFA",
        category: "class-ii",
        thumbnail: "/images/cases/ffa-mandibular-advancement.jpg",
        images: ["/images/cases/ffa-mandibular-advancement.jpg"],
        summary: "A Class II Division 1 malocclusion treated with Fixed Functional Appliance (FFA) for simultaneous skeletal and dental correction.",
        technicalDetails: `
## Clinical Presentation
The patient presented with a Class II Division 1 malocclusion characterized by mandibular retrognathia, increased overjet (>8mm), and moderate crowding in both arches.

## Treatment Approach
We utilized a **Fixed Functional Appliance (FFA)**, specifically a Forsus™ Fatigue Resistant Device, in conjunction with comprehensive fixed appliances (MBT prescription, 0.022" slot).

### Biomechanics
- **Phase 1**: Initial alignment and leveling with NiTi archwires (0.014" to 0.019x0.025").
- **Phase 2**: FFA installation on rectangular stainless steel wires (0.019x0.025") to ensure adequate anchorage.
- **Force Application**: The FFA delivers a continuous Class II corrective force (~200g), promoting mandibular advancement through condylar growth modification and dentoalveolar compensation.

## Outcome
- Correction of the Class II molar and canine relationship.
- Reduction of overjet to within normal limits (2-3mm).
- Improved facial profile with enhanced mandibular projection.

## References
- Aras, I., et al. (2017). "Comparison of Forsus FRD EZ and Herbst Appliance in the Treatment of Class II Division 1 Malocclusion." *European Journal of Orthodontics*.
- McNamara, J.A. (2006). "Functional Appliances in Contemporary Orthodontics." *American Journal of Orthodontics and Dentofacial Orthopedics*.
    `,
        tags: ["class-ii", "ffa", "forsus", "mandibular-advancement", "fixed-functional"]
    }
];
