
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const TsParticlesHeader = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticlesHeader"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false, zIndex: 0 },  
                background: {
                    color: {
                        value: "#9ed2ce", 
                    },
                    image: "linear-gradient(to top, #fff1eb 0%, #ace0f9 5%)",  
                   /*  image: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)", */
                   /* image: "linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)",  */
                   /* image: "linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)", /* nice */  
                   /* image: "linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%);", */ 
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 160,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: 0,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default TsParticlesHeader;