import { BookOpen, UserPlus, HelpCircle, Clock, Smile, ShieldCheck } from 'lucide-react';

export const blogs = [
    {
        id: 'life-with-braces',
        title: 'Life with Braces: A Survivor\'s Guide',
        icon: BookOpen,
        summary: 'Tips on eating, brushing, and flossing. Learn how to care for your appliances and keep your smile healthy during treatment.',
        content: `
            <h3>Adjusting to Your New Normal</h3>
            <p>Congratulations on starting your journey to a perfect smile! The first week with braces can be an adjustment period. You may experience some soreness, but this is completely normal and temporary.</p>
            
            <h3>Eating with Braces</h3>
            <p>During treatment, you'll need to modify your diet slightly to protect your brackets and wires.</p>
            <ul>
                <li><strong>Foods to Avoid:</strong> Hard, sticky, or chewy foods like popcorn, nuts, caramel, and chewing gum.</li>
                <li><strong>Foods to Enjoy:</strong> Soft fruits, cooked vegetables, pasta, dairy products, and smooth meats.</li>
                <li><strong>Tip:</strong> Cut hard foods like apples and carrots into bite-sized pieces instead of biting into them directly.</li>
            </ul>

            <h3>Oral Hygiene is Key</h3>
            <p>Brushing and flossing require extra attention with braces. Food particles can easily get trapped around brackets.</p>
            <ul>
                <li>Brush after every meal to prevent staining and decay.</li>
                <li>Use a floss threader or water flosser to clean between teeth and under wires.</li>
                <li>Interdental brushes allow you to clean around the sides of brackets effectively.</li>
            </ul>
        `
    },
    {
        id: 'your-first-visit',
        title: 'Your First Visit: What to Expect',
        icon: UserPlus,
        summary: 'From digital scans to discussing financial options, we walk you through every step of your initial consultation.',
        content: `
            <h3>Welcome to Heartstrings & Braces</h3>
            <p>Your first visit is an exciting opportunity for us to get to know you and your smile goals. Here is a step-by-step breakdown of what happens.</p>

            <h3>1. Comprehensive Exam</h3>
            <p>Dr. Patankar will perform a thorough examination of your teeth, jaw, and facial structure. We look beyond just crooked teeth to ensure your bite functions correctly.</p>

            <h3>2. Digital Scans & Photos</h3>
            <p>Say goodbye to gooey impressions! We likely use advanced intraoral scanners to create a precise 3D model of your teeth in minutes.</p>

            <h3>3. Treatment Planning</h3>
            <p>Based on your exam, we will create a customized treatment plan. We will discuss:</p>
            <ul>
                <li>Type of treatment recommended (Braces, Aligners, etc.)</li>
                <li>Estimated treatment duration</li>
                <li>Projected results</li>
            </ul>

            <h3>4. Financial Options</h3>
            <p>We believe a perfect smile should be accessible. Our team will walk you through payment plans and insurance coverage options transparency.</p>
        `
    },
    {
        id: 'orthodontist-vs-dentist',
        title: 'Orthodontist vs. Dentist',
        icon: HelpCircle,
        summary: 'Understanding the difference. Did you know orthodontists complete 2-3 years of additional specialized training?',
        content: `
            <h3>Specialists in Moving Teeth</h3>
            <p>While both dentists and orthodontists work to improve your oral health, they specialize in different areas. Think of it like a medical doctor vs. a cardiologist.</p>

            <h3>The Distinction</h3>
            <p><strong>Dentists:</strong> Focus on overall oral health, treating cavities, gum disease, and performing routine check-ups. They are like your primary care physician for your teeth.</p>
            <p><strong>Orthodontists:</strong> Are dentists who have gone on to complete an additional 2-3 years of full-time residency specializing in orthodontics and dentofacial orthopedics. They are experts in:</p>
            <ul>
                <li>Straightening teeth</li>
                <li>Correcting misaligned bites (malocclusion)</li>
                <li>Guiding jaw growth</li>
            </ul>

            <h3>Why It Matters</h3>
            <p>When it comes to moving teeth safely and permanently, seeing a specialist ensures you receive the most qualified care for complex structural issues.</p>
        `
    },
    {
        id: 'emergency-care',
        title: 'Emergency Care at Home',
        icon: Clock,
        summary: 'Guidance for poking wires or loose brackets. Most issues can be managed at home, but we are here if you need us.',
        content: `
            <h3>Don't Panic!</h3>
            <p>True orthodontic emergencies are rare. Most issues can be temporarily solved at home until you can see us.</p>

            <h3>Common Scenarios</h3>
            <p><strong>Poky Wire:</strong> If a wire is poking your cheek, use the wax provided in your starter kit. Roll a small piece into a ball and press it over the sharp end.</p>
            <p><strong>Loose Bracket:</strong> If a bracket comes loose but stays attached to the wire, cover it with wax. If it falls off completely, keep it safe and bring it to your next appointment.</p>
            <p><strong>Soreness:</strong> General soreness after an adjustment is normal. An over-the-counter pain reliever and a salt water rinse can give significant relief.</p>

            <p><em>Always call our office if you are in significant pain or if an appliance breaks.</em></p>
        `
    },
    {
        id: 'adult-orthodontics',
        title: 'Adult Orthodontics: Never Too Late',
        icon: Smile,
        summary: 'More adults than ever are seeking treatment. Explore discreet options like ceramic braces and clear aligners.',
        content: `
            <h3>The Shift in Creating Smiles</h3>
            <p>Gone are the days when braces were just for teenagers. Today, one in four orthodontic patients is an adult.</p>

            <h3>Why Now?</h3>
            <ul>
                <li><strong>Aesthetics:</strong> A confident smile can boost personal and professional relationships.</li>
                <li><strong>Health:</strong> Straight teeth are easier to clean, reducing the risk of gum disease and decay later in life.</li>
                <li><strong>Function:</strong> Correcting a bite can relieve jaw pain and prevent excessive wear on tooth enamel.</li>
            </ul>

            <h3>Discreet Options</h3>
            <p>We offer aesthetic solutions tailored for adults:</p>
            <ul>
                <li><strong>Clear Aligners:</strong> Virtually invisible and removable.</li>
                <li><strong>Ceramic Braces:</strong> Tooth-colored brackets that blend in with your smile.</li>
            </ul>
        `
    },
    {
        id: 'retention-importance',
        title: 'The Importance of Retainers',
        icon: ShieldCheck,
        summary: 'Why retention is forever. Protect your investment and keep your smile straight for a lifetime.',
        content: `
            <h3>Protecting Your Investment</h3>
            <p>The day your braces come off is a celebration! But the work isn't quite done. Ideally, retention is a lifetime commitment.</p>

            <h3>Why Do Teeth Move?</h3>
            <p>Teeth have a natural tendency to shift back to their original positions (relapse) due to elastic memory in the gums and pressures from the tongue and lips.</p>

            <h3>The Protocol</h3>
            <p>We typically recommend:</p>
            <ul>
                <li><strong>Full-time wear:</strong> For the first few months after treatment.</li>
                <li><strong>Night-time wear:</strong> Afterwards, indefinitely while you sleep.</li>
            </ul>
            <p>Think of your retainer as insurance for your smile. Replacing a lost retainer is far cheaper than a second round of braces!</p>
        `
    }
];

export const faqs = [
    {
        question: "How much do braces cost?",
        answer: "The cost depends on the complexity of the case and the type of appliance used (Metal vs. Ceramic vs. Aligners). During your consultation, we provide a detailed quote and discuss our flexible interest-free payment plans."
    },
    {
        question: "Do braces hurt?",
        answer: "Placement is painless! You may feel some soreness or pressure for 3-5 days after adjustments as your teeth start to move. This is a sign that treatment is working. Soft foods and OTC pain relievers help significantly."
    },
    {
        question: "How long will I wear them?",
        answer: "Average treatment time ranges from 12 to 24 months. Simple cases may take less time, while complex bite corrections may take longer. Following instructions (like wearing elastics) is the best way to finish on time!"
    },
    {
        question: "Am I too old for braces?",
        answer: "Never! As long as your gums and bone structure are healthy, teeth can be moved at any age. We treat many patients in their 40s, 50s, and beyond."
    },
    {
        question: "Can I play sports with braces?",
        answer: "Absolutely. We recommend wearing a specialized orthodontic mouthguard to protect your lips and cheeks from the brackets during contact sports."
    },
    {
        question: "How often will I need appointments?",
        answer: "Appointments are typically scheduled every 4 to 8 weeks, depending on your stage of treatment. Aligner patients may have fewer in-office visits."
    }
];
