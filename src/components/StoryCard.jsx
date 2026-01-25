import React from 'react';
import './StoryCard.css';
import BeforeAfterSlider from './BeforeAfterSlider';

const StoryCard = ({ story, onViewDetails }) => {
    return (
        <article className="story-card">
            <div className="story-card__visual">
                <BeforeAfterSlider
                    beforeImg={story.beforeImg}
                    afterImg={story.afterImg}
                />
            </div>
            <div className="story-card__content">
                <span className="story-card__treatment">{story.category}</span>

                {/* Title instead of Patient Name */}
                <h3 className="story-card__title">
                    {story.title}
                </h3>

                {/* Summary instead of Quote */}
                <p className="story-card__summary">
                    {story.summary}
                </p>

                <div className="story-card__footer">
                    <button
                        className="story-card__btn"
                        onClick={() => onViewDetails(story)}
                    >
                        View Technique
                    </button>

                    {/* Decorative arrow or icon could go here */}
                </div>
            </div>
        </article>
    );
};

export default StoryCard;
