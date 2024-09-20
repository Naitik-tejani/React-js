import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f0f4f8', // Light grayish-blue background for modern look
            fontFamily: 'Arial, sans-serif',
            color: '#004d40', // Dark teal for text
            padding: '20px',
        },
        box: {
            background: 'linear-gradient(135deg, #69f575, #00796b)', // Brighter gradient for a fresh feel
            borderRadius: '25px',
            padding: '50px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            maxWidth: '450px',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
        },
        title: {
            fontSize: '3rem',
            marginBottom: '25px',
            color: '#ffffff', // White title for contrast
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)', // Light text shadow for emphasis
        },
        heading: {
            fontSize: '4.5rem',
            margin: '20px 0',
            color: '#ffffff', // White counter number
            textShadow: '3px 3px 5px rgba(0, 0, 0, 0.4)', // Deeper shadow for dramatic effect
        },
        button: {
            background: 'rgba(255, 255, 255, 0.85)', // Semi-transparent white for a softer touch
            color: '#004d40',
            border: 'none',
            borderRadius: '50px',
            padding: '15px 35px',
            margin: '10px',
            fontSize: '1.6rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out', // Smooth transition for hover effect
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)', // Depth effect on buttons
            outline: 'none',
        },
        buttonHover: {
            transform: 'scale(1.1)', // More noticeable enlargement on hover
            background: 'rgba(255, 255, 255, 1)', // Fully opaque on hover
        },
        texture: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")', // Subtle background texture
            opacity: '0.08',
            pointerEvents: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <div style={styles.texture}></div>
                <h1 style={styles.title}>Counter</h1>
                <h2 style={styles.heading}>{count}</h2>
                <div>
                    <button 
                        style={styles.button}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = styles.buttonHover.transform;
                            e.currentTarget.style.background = styles.buttonHover.background;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = styles.button.background;
                        }}
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>

                    <button 
                        style={styles.button}
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>
                    <button 
                        style={styles.button}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = styles.buttonHover.transform;
                            e.currentTarget.style.background = styles.buttonHover.background;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = styles.button.background;
                        }}
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
