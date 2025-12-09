import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-card-light dark:bg-card-dark border-t border-border-light dark:border-border-dark mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span className="font-bold text-text-light dark:text-text-dark">IMPA</span>
                    </div>
                    <div className="text-sm text-muted-light dark:text-muted-dark">© 2024 IMPA. Todos los derechos reservados.</div>
                    <div className="flex gap-4">
                        <a className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors" href="#">Facebook</a>
                        <a className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors" href="#">Instagram</a>
                        <a className="text-muted-light dark:text-muted-dark hover:text-primary transition-colors" href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;