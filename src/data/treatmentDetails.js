import { Smile, Sparkles, User, RefreshCw, Clock, ShieldCheck, Heart } from 'lucide-react';

export const treatmentDetails = [
    {
        id: 'braces',
        title: "Metal & Ceramic Braces",
        subtitle: "Precision engineering for complex smiles.",
        icon: Smile,
        intro: "While aligners have grown in popularity, fixed braces remain the gold standard for treating complex bites and achieving absolute precision. Modern braces are nothing like the bulky appliances of the past.",
        features: [
            {
                title: "Ceramic Esthetics",
                desc: "Our translucent ceramic brackets blend seamlessly with your natural tooth enamel, making them virtually unnoticeable in photos and social settings."
            },
            {
                title: "Self-Ligating Technology",
                desc: "We use advanced low-friction clips instead of elastic bands. This means lighter forces, faster movement, and fewer appointment visits."
            },
            {
                title: "Unmatched Control",
                desc: "For rotations, height adjustments, and root parallelism, fixed braces offer 3D control that other systems sometimes struggle to match."
            }
        ],
        idealFor: ["Complex crowding or spacing", "Impacted teeth", "Deep overbites", "Adolescents & Adults"],
        process: "We bond tiny brackets to your teeth and connect them with a shape-memory wire. This wire gently guides your teeth into position over 12-18 months."
    },
    {
        id: 'aligners',
        title: "Clear Aligners",
        subtitle: "The invisible way to straighten your day.",
        icon: Sparkles,
        intro: "Enjoy the freedom of removable orthodontics. Clear aligners (like Invisalign®) allow you to eat whatever you want and brush without obstruction, all while straightening your teeth discreetly.",
        features: [
            {
                title: "Virtually Invisible",
                desc: "Made from proprietary SmartTrack® material, these clear trays are custom-trimmed to your gumline for ultra-discreet wear."
            },
            {
                title: "Lifestyle Friendly",
                desc: "Have a big presentation or a dinner date? You can remove your aligners for special moments (though we recommend 22 hours of wear!)."
            },
            {
                title: "Digital Planning",
                desc: "See your finished smile before we even start. Our 3D outcome simulator lets you visualize the journey."
            }
        ],
        idealFor: ["Mild to moderate crowding", "Relapse cases", "Busy professionals", "Self-disciplined patients"],
        process: "We take a 3D digital scan of your teeth (no goopy impressions!) and fabricate a series of custom trays. You switch to a new set every 7-10 days."
    },
    {
        id: 'adults',
        title: "Adult Orthodontics",
        subtitle: "It is never too late to invest in yourself.",
        icon: User,
        intro: "One in three of our patients is over the age of 30. Adult orthodontics is about more than just straight teeth—it's about preserving gum health, preventing bone loss, and preparing for restorative work.",
        features: [
            {
                title: "Interdisciplinary Care",
                desc: "We work closely with your general dentist, periodontist, or prosthodontist to manage complex cases involving implants, veneers, or gum issues."
            },
            {
                title: "Biologic Respect",
                desc: "Adult bone responds differently. We use lighter forces and longer intervals to ensure safety and stability for your roots and gums."
            },
            {
                title: "Discreet Options",
                desc: "From hidden lingual braces to clear aligners, we have solutions that fit a professional lifestyle."
            }
        ],
        idealFor: ["Pre-prosthetic alignment (implants)", "Crowding relapse", "Gum health improvement", "Aesthetic confidence"],
        process: "Your consultation includes a comprehensive periodontal check. We plan your movement carefully to respect existing boundaries and restorations."
    },
    {
        id: 'retention',
        title: "Retention & Stability",
        subtitle: "Protecting your investment for a lifetime.",
        icon: RefreshCw,
        intro: "Teeth have a memory. Without retention, they will naturally drift back towards their original positions. Our retention protocol is robust, ensuring your smile stays perfect forever.",
        features: [
            {
                title: "Fixed Bonded Retainers",
                desc: "A thin, invisible wire bonded behind your lower (and sometimes upper) front teeth. It's there 24/7 to prevent relapse."
            },
            {
                title: "Vivera® / Clear Retainers",
                desc: "Custom-made clear overlays worn at night. They act as a 'tupperware' for your smile, keeping everything locked in precise place."
            },
            {
                title: "Lifetime Monitoring",
                desc: "We encourage patients to bring their retainers for a check-up every year to ensure they still fit perfectly."
            }
        ],
        idealFor: ["Every single patient", "Post-braces", "Post-aligners"],
        process: "On the day your braces are removed, we bond your fixed retainer and take scans for your removable ones. You get the best of both worlds."
    }
];
