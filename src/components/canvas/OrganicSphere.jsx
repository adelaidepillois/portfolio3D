import React, {Suspense} from "react";
import CanvasLoader from "../Loader";
import MyVideo from "./../../../public/video/organicSphere.mp4"



class OrganicSphere extends React.Component {
    handleVideoEnded = () => {
        this.videoRef.current.load();
        this.videoRef.current.play();
    }

    render() {
        return (
            <>
            <video className="rotate-90 lg:absolute md:absolute inset-y-0 right-0 lg:pb-[400px] md:pb-[350px] -z-40" width="100%" height="100%" preload='auto' autoPlay loop muted
                   ref={this.videoRef} onEnded={this.handleVideoEnded}>
                <source src={MyVideo} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
            </>
        );
    }
};


export default OrganicSphere;
