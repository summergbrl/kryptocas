import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import affiliateLinks from '../data/affiliateLinks';

const RedirectPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const targetUrl = affiliateLinks[slug];

        if (targetUrl) {
            // Perform the redirection to the external URL
            window.location.href = targetUrl;
        } else {
            // Fallback: Redirect to home or show error
            console.error(`No redirect found for slug: ${slug}`);
            navigate('/'); // Redirect to home for now, or could show a 404 component
        }
    }, [slug, navigate]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h2>Weiterleitung...</h2>
            <p>Sie werden zu {slug} weitergeleitet.</p>
            {/* Optional: Add a loading spinner here */}
        </div>
    );
};

export default RedirectPage;
