import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogs } from '../data/blogData';
import '../styles/pages.css';
import Button from '../components/ui/Button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === id);

    if (!blog) {
        return <Navigate to="/resources" replace />;
    }

    const { icon: Icon } = blog;

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.summary,
        "author": {
            "@type": "Person",
            "name": "Dr. Krutika Patankar",
            "jobTitle": "Orthodontist",
            "url": "https://heartstringsbraces.com/about"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Heartstrings & Braces",
            "logo": {
                "@type": "ImageObject",
                "url": "https://heartstringsbraces.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://heartstringsbraces.com/resources/${blog.id}`
        },
        "datePublished": "2024-01-01", // Fallback date
        "image": "https://heartstringsbraces.com/og-image.jpg"
    };

    return (
        <motion.div
            className="page blog-post-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title={blog.title}
                description={blog.summary}
                keywords={`${blog.title}, orthodontics, braces tips, heartstrings braces blog`}
                canonical={`https://heartstringsbraces.com/resources/${blog.id}`}
                openGraph={{
                    title: blog.title,
                    description: blog.summary,
                    type: 'article'
                }}
                schema={blogSchema}
            />
            <div className="container" style={{ maxWidth: '800px', padding: '120px 20px 60px' }}>
                <Link to="/resources" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '30px', color: 'var(--color-text-secondary)', fontWeight: '500' }}>
                    <ArrowLeft size={16} style={{ marginRight: '8px' }} />
                    Back to Resources
                </Link>

                <header style={{ marginBottom: '40px' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'var(--color-accent-mint)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        color: 'var(--color-primary-action)'
                    }}>
                        <Icon size={32} />
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '20px', lineHeight: '1.2' }}>{blog.title}</h1>
                    <div style={{ display: 'flex', gap: '20px', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}><User size={16} style={{ marginRight: '6px' }} /> Dr. Krutika Patankar</span>
                        <span style={{ display: 'flex', alignItems: 'center' }}><Calendar size={16} style={{ marginRight: '6px' }} /> Educational Series</span>
                    </div>
                </header>

                <article
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                    style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'var(--color-text-primary)'
                    }}
                />

                <div style={{ marginTop: '60px', padding: '40px', background: 'var(--color-bg-warm-beige)', borderRadius: '20px', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '15px' }}>Have more questions?</h3>
                    <p style={{ marginBottom: '25px' }}>We are here to help you on your journey to a perfect smile.</p>
                    <Link to="/contact">
                        <Button variant="primary">Book a Consultation</Button>
                    </Link>
                </div>
            </div>

            {/* Simple CSS for inner HTML content */}
            <style>{`
                .blog-content h3 {
                    font-size: 1.5rem;
                    margin-top: 40px;
                    margin-bottom: 20px;
                    color: var(--color-primary-action);
                    font-family: var(--font-serif);
                }
                .blog-content p {
                    margin-bottom: 20px;
                    color: var(--color-text-secondary);
                }
                .blog-content ul {
                    margin-bottom: 30px;
                    padding-left: 20px;
                }
                .blog-content li {
                    margin-bottom: 10px;
                    color: var(--color-text-secondary);
                }
                .blog-content strong {
                    color: var(--color-text-primary);
                }
            `}</style>
        </motion.div>
    );
};

export default BlogPost;
