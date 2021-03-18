import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            
            <div className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/736x/03/27/5f/03275f2799e5d77c2236755aad6cb4b7.jpg)'
                }}>
                
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>

                <p className="journal_entry-content">
                    Ex laboris excepteur do ad qui ut.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
