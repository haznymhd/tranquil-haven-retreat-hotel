import React from "react";

const ComingSoon = () => {
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
        textAlign: "center",
        color: "rgb(169, 77, 123)", 
    };

    const headingStyle = {
        fontSize: "4rem",
    };

    return (
        <section style={containerStyle}>
            <h1 style={headingStyle}>Coming Soon</h1>
        </section>
    );
}

export default ComingSoon;
