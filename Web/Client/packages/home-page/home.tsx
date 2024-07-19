import {ReactElement} from "react";
import * as React from "react";
import {FormattedMessage} from "react-intl";
import {Link} from "react-router-dom";

const Home = (): ReactElement => {
    return (
        <div>
            <h1>
                <FormattedMessage
                    id="home.welcome"
                    defaultMessage="Welcome to Forge!"
                    description="Welcome text on home page"
                />
            </h1>
            <div>
                Click <Link to={"./app/lexicaldemo"}>here</Link> to go to Lexical demo
            </div>    
            <br />
            <div>
                Click <Link to={"./app/ReactRndDemo"}>here</Link> to go to RND demo
            </div>
        </div>
    );
}

export default Home;
