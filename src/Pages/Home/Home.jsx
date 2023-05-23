import React from "react";
import { HeroSection } from "../../Components/Hero Section/HeroSection";
import { Overview } from "../../Components/Overview/Overview";
import { AboutHome } from "../../Components/About/About";
import { OurClient } from "../../Components/Our Client/OurClient";
export const Home = () => {
    return(
        <div className="bg-slate-900">
<HeroSection/>
<Overview/>
<AboutHome/>
<OurClient/>
        </div>
    )
}