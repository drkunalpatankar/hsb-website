import React, { createContext, useContext, useState } from 'react';
import BookingModal from '../components/BookingModal';
import SmileQuiz from '../components/SmileQuiz';

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const [bookingPurpose, setBookingPurpose] = useState('');

    const openBooking = (purpose = '') => {
        // Safeguard: If called via onClick without args, purpose will be the Event object.
        // We only want strings.
        const validPurpose = (typeof purpose === 'string') ? purpose : '';
        setBookingPurpose(validPurpose);
        setIsBookingOpen(true);
    };

    const closeBooking = () => {
        setIsBookingOpen(false);
        setBookingPurpose('');
    };

    const openQuiz = () => setIsQuizOpen(true);
    const closeQuiz = () => setIsQuizOpen(false);

    return (
        <BookingContext.Provider value={{ openBooking, closeBooking, openQuiz, closeQuiz }}>
            {children}
            <BookingModal isOpen={isBookingOpen} onClose={closeBooking} initialPurpose={bookingPurpose} />
            <SmileQuiz
                isOpen={isQuizOpen}
                onClose={closeQuiz}
                onBook={(result) => {
                    closeQuiz();
                    // Small delay to allow quiz to close smoothly
                    setTimeout(() => openBooking(result), 300);
                }}
            />
        </BookingContext.Provider>
    );
};
