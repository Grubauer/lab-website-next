import styled from "@emotion/styled";
import {useEffect, useRef} from "react";
import gsap from "gsap";
const Svg = styled.svg`
  height: 110vh;
  transform: scale(1.3);
  z-index: 0;
`


export default function BackgroundCircles()
{
    const circles = useRef({});
    const baseCircle = useRef();
    const circleProps = {
        amount: 8,
        radiusGrowStep: 50,
        startRadius: 160,
        animationPause: 1000
    }
    useEffect(() =>
    {
        let growMode = true;
        let counter = 0;
        let pause = false;
        setInterval(async () =>
        {
            const keys = Object.keys(circles.current);
            if (pause)
            {
                return;
            }
            else if(counter < keys.length)
            {
                console.log(keys[counter]);
                const circle = circles.current[keys[counter]];
                if(circle)
                {
                    if(growMode)
                    {
                        gsap.to(circle, {
                            duration: 2,
                            r: +keys[counter] + circleProps.radiusGrowStep,
                            ease: "power2.inOut"
                        });
                        // console.log();##
                        // circle.r.baseVal.value += circleProps.radiusGrowStep
                        // circle.setAttribute('r', circle.r + circleProps.radiusGrowStep) ;
                    }
                    else{
                        gsap.to(circle, {
                            duration: 2,
                            r: +keys[counter],
                            ease: "power2.inOut"
                        });
                    }
                }

            }
            else {
                growMode = !growMode;
                counter = 0;
                pause = true;
                await new Promise(resolve => setTimeout(() => {
                    pause = false;
                    resolve();
                }, circleProps.animationPause));
            }
            counter++;
        }, 200)
    }, [])

    return <Svg  viewBox="0 0 1092 1199" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle ref={el => baseCircle.current = el}  cx="630" cy="569" r="275" fill="url(#paint0_linear_300_55)"/>
        {[...Array(circleProps.amount)].map((_, i) =>
            <circle
                key={circleProps.startRadius + circleProps.radiusGrowStep * (i+1)}
                opacity={1-(i+1)/circleProps.amount}
                cx={630}
                cy={569}
                r={circleProps.startRadius + (i + 1) * circleProps.radiusGrowStep}
                stroke-width="10"
                ref={el => circles.current[circleProps.startRadius + circleProps.radiusGrowStep * (i+1)] = el}
                stroke={`url(#paint${i+1}_linear_300_55)`}/>
        )}
        {/*<circle opacity="0.7" cx="630" cy="569" r="325" stroke="url(#paint1_linear_300_55)" stroke-width="10"/>*/}
        {/*<circle opacity="0.6" cx="630" cy="569" r="375" stroke="url(#paint2_linear_300_55)" stroke-width="10"/>*/}
        {/*<circle opacity="0.5" cx="630" cy="569" r="425" stroke="url(#paint3_linear_300_55)" stroke-width="10"/>*/}
        {/*<circle opacity="0.4" cx="630" cy="569" r="475" stroke="url(#paint4_linear_300_55)" stroke-width="10"/>*/}
        {/*<circle opacity="0.3" cx="630" cy="569" r="525" stroke="url(#paint5_linear_300_55)" stroke-width="10"/>*/}
        {/*<circle opacity="0.2" cx="630" cy="569" r="575" stroke="url(#paint6_linear_300_55)" stroke-width="10"/>*/}
        {/*<circle opacity="0.1" cx="630" cy="569" r="625" stroke="url(#paint7_linear_300_55)" stroke-width="10"/>*/}
        <defs>
            <linearGradient id="paint0_linear_300_55" x1="510.796" y1="561.099" x2="1038.45" y2="451.386" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DA22FF"/>
                <stop offset="1" stop-color="#9733EE"/>
            </linearGradient>
            <linearGradient id="paint1_linear_300_55" x1="489.122" y1="559.663" x2="1112.71" y2="430.001" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DA22FF"/>
                <stop offset="1" stop-color="#9733EE"/>
            </linearGradient>
            <linearGradient id="paint2_linear_300_55" x1="467.449" y1="558.227" x2="1186.97" y2="408.617" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DA22FF"/>
                <stop offset="1" stop-color="#9733EE"/>
            </linearGradient>
            <linearGradient id="paint3_linear_300_55" x1="445.775" y1="556.79" x2="1261.23" y2="387.232" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DA22FF"/>
                <stop offset="1" stop-color="#9733EE"/>
            </linearGradient>
            <linearGradient id="paint4_linear_300_55" x1="424.102" y1="555.354" x2="1335.5" y2="365.848" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DA22FF"/>
                <stop offset="1" stop-color="#9733EE"/>
            </linearGradient>
            <linearGradient id="paint5_linear_300_55" x1="402.428" y1="553.917" x2="1409.76" y2="344.463" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DA22FF"/>
                <stop offset="1" stop-color="#9733EE"/>
            </linearGradient>
            <linearGradient id="paint6_linear_300_55" x1="380.754" y1="552.481" x2="1484.02" y2="323.079" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DA22FF"/>
                <stop offset="1" stop-color="#9733EE"/>
            </linearGradient>
            <linearGradient id="paint7_linear_300_55" x1="359.081" y1="551.044" x2="1558.28" y2="301.694" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DA22FF"/>
                <stop offset="1" stop-color="#9733EE"/>
            </linearGradient>
        </defs>
    </Svg>

}