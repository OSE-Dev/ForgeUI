import {ReactElement} from "react";
import * as React from "react";
import {FormattedMessage} from "react-intl";
import { Card } from "primereact/card";
import wavylines from "./media/wavy_lines.jpeg";
import wavylines2 from "./media/wavy_lines2.jpeg";
import wavylines3 from "./media/wavy_lines3.jpeg";
import wavylines6 from "./media/wavy_lines6.jpeg";
const About = (): ReactElement => {
    return (
        // todo: if not logged in, give general page. else, redirect to dashboard
        <div className="home-wrapper">
            <h1>
                <FormattedMessage
                    id="home.welcome"
                    defaultMessage="Welcome to Forge!"
                    description="Welcome text on home page"
                />
            </h1>
            <div className="card-row">
                <Card className="card">
                    <FormattedMessage
                        id="home.about_ose"
                        defaultMessage="Open Source Education is an initiative to provide free educational content to the world
                        and free tools to create educational content to educators and experts."
                        description="Card containing information about open source education"
                    />                
                </Card>
                <Card className="card">
                    Login/sign up prompt
                </Card>
            </div>
            <Card className="card">
                <div className="card-content">
                    <FormattedMessage
                        id="home.about_content"
                        defaultMessage="info about the library/published content"
                        description="Card containing info about the library/published content"
                    />
                    <img src={wavylines} className="card-images"/>
                </div>
            </Card>
            <Card className="card">
                <div className="card-content">
                    <img src={wavylines2} className="card-images"/>
                    <FormattedMessage
                        id="home.about_certifications"
                        defaultMessage="info about Certifications"
                        description="Card containing info about Certifications"
                    />
                </div>
            </Card>
            <Card className="card">
                <div className="card-content">
                    <FormattedMessage
                        id="home.about_marketplace"
                        defaultMessage="info about Forge/gadget marketplace"
                        description="Card containing info about Forge/gadget marketplace"
                    />
                    <img src={wavylines3} className="card-images"/>
                </div>
            </Card>
            <Card className="card">
                <div className="card-content">
                    <img src={wavylines6} className="donation-card-image"/>
                    <FormattedMessage
                        id="home.about_donations"
                        defaultMessage="info about donations"
                        description="Card containing info about donations"
                    />
                </div>
            </Card>
        </div>
);
}

export default About;
