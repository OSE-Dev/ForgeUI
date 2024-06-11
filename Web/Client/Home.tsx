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
            Click <Link to={"./app/demo"}>here</Link> to get started
            <br />
            Click <Link to={"./app/lexicaldemo"}>here</Link> to go to Lexical demo
            <br />
            Click <Link to={"./app/lexicaldnddemo"}>here</Link> to go to Dndkit Lexical demo
            <br />
            Click <Link to={"./app/ResizableDemo"}>here</Link> to go to Resizable demo            
            <br />
            Click <Link to={"./app/ReactRndDemo"}>here</Link> to go to RND demo
        </div>
    );
}

export default Home;
