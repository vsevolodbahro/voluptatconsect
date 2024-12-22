const MyComponent = ({ onPause }) => {
    // Simulating a pause event
    const handlePause = () => {
        const fakePauseTime = 120; // Let's say the media paused at 120 seconds
        onPause(fakePauseTime);
    };

    return <button onClick={handlePause}>Pause</button>;
};

// Usage
<MyComponent onPause={(time) => {
    console.log(`Media paused at ${time} seconds.`);
}} />;
