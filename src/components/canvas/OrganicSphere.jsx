import React, {Suspense} from "react";
import CanvasLoader from "../Loader";
import MyVideo from "./../../../public/video/0001_2.mp4"



class OrganicSphere extends React.Component {
    handleVideoEnded = () => {
        this.videoRef.current.load();
        this.videoRef.current.play();
    }

    render() {
        return (
            <>
            <video className="
            rotate-90
            absolute
            inset-y-0
            right-0
            {/*lg:pl-[-800px]*/}
            lg:mt-[-200px]
            md:mt-[0px]
            xs:mt-[200px]
            mt-[300px]
            lg:pb-[530px]
            md:pb-[271px]
            xs:pb-[0px]
            pb-[0px]
            mt-[100px]
            -z-40
            " width="100%" height="100%" preload='auto' autoPlay loop muted
                   ref={this.videoRef} onEnded={this.handleVideoEnded}>
                <source src={MyVideo} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
            </>
        );
    }
};


export default OrganicSphere;
