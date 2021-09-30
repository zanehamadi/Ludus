import "./about-us.css"

function AboutUs(){

    return(
        <div className="about-us-div">
            <h2 className="about-us-headers">About Us</h2>

            <p className="about-us-paragraphs">Ludus was developed to aid the on going search to find the perfect game to play. I initially thought of this idea a couple of months ago, but with my knowledge and experience on web development, it was a pipe dream at the time. Now that I have grown and explored new languages and avenues of web development, I am excited to start this long term project to develop the perfect website for finding games.</p>

            <h2 className="about-us-headers">How the data was fetched</h2>

            <p className="about-us-paragraphs">The data for Ludus was fetched using Steam's public API library. Sadly, due to current time and authorization restrictions, the website only has a little over 11,000 games. For more detail about how I got this data, <a href="https://github.com/zanehamadi/Ludus/wiki/Steam-API-data-information">click here.</a> </p>

            <h2 className="about-us-headers">Future plans</h2>

            <ul>
                <li>More in depth search, incorporating user tags from Steam as well </li>
                <li>Steam Library data that updates</li>
                <li>Games from other platforms like Origin, Epic Games, and UPlay.</li>
            </ul>

            <h2 className="about-us-headers">Disclaimer</h2>
            <p className="about-us-paragraphs">Ludus is in no way affiliated with Steam. Both Valve and Ludus are independent contractors, devoid of any employer-employee relationship. </p>

        </div>
    )
}

export default AboutUs