import { useEffect, useState } from "react";

function CounterDemo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("CounterDemo mounted");

        return () => {
            console.log("CounterDemo unmounted");
        };
    }, []);

    useEffect(() => {
        console.log("Counter updated:", count);
    }, [count]);

    return (
        <div className="lifecycle-counter">
            <span>Current count</span>
            <strong>{count}</strong>

            <button
                className="primary-button"
                onClick={() => setCount((value) => value + 1)}
            >
                Update count +
            </button>
        </div>
    );
}

export default function LifecycleDemo() {
    const [visible, setVisible] = useState(true);

    return (
        <div className="lifecycle-panel">
            <div>
                <div className="eyebrow">REACT LAB</div>
                <h3>Lifecycle playground</h3>
                <p className="muted-text">
                    Toggle the counter and inspect the browser console.
                </p>
            </div>

            <div>
                <button
                    className="secondary-button"
                    onClick={() => setVisible((value) => !value)}
                >
                    {visible ? "Unmount demo" : "Mount demo"}
                </button>
            </div>

            {visible && <CounterDemo />}
        </div>
    );
}
