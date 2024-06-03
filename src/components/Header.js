import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="user-info">
                    <img src="/Users/isha/personal-assistant/src/vc.jpeg" alt="User Avatar" className="avatar" />
                    <span className="greeting">Hello, User!</span>
                </div>
                <div className="settings">
                    <button className="settings-btn">Settings</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
