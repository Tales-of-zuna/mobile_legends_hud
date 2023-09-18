import { useEffect } from "react";

const InGameOverlay = (props) => {
    useEffect(() => {}, []);
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="max-w-full max-h-full">
                <video
                    autoPlay
                    loop
                    className="w-full h-full object-cover"
                    muted
                    src="/assets/in_game_overlay.mp4"
                />
            </div>
        </div>
    );
};

export default InGameOverlay;
