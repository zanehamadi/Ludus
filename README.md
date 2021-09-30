# Ludus

[Visit Ludus!](https://ludus-search.herokuapp.com/)

## What is Ludus?

Ludus is a full stack search website that uses Steam's public API to seed data regarding games, with their categories and genres linked to them. It allows for a more in-depth search on games you are interested in playing, with the option to create an account and save the games to your profile for later reference. Once you have played the game, you can also rate it.

## Structure

Ludus is built on React frontend, using React and Redux. For the back end, it uses python and flask SQLAlchemy to help manage the massive data pool that is seeded into the tables.

## Frontend Technologies

### React

React is one of the vital components of this website, not just because it makes displaying and dynamic rendering easy, but for the stylistic choice as well. I capitalized off the on screen dynamic rendering that React allows, for a (hopefully) seemless transition from when you sign up, all the way to when you have a profile with all the games you want to play.

### Redux

This was the first time I've ever messed with anything remotely this massive in regards to data. I went from my previous websites using dummy data to make my websites seem populated, to transferring over 150,000 associations from the backend to the front. Redux is absurdly helpful with this, as it allows for me to store massive data pools in my store on initial render, and only grab what I need to grab when necessary. 

### AWS

I didn't set up AWS myself since I didn't need to use it for much of my page, but I was having trouble uploading my loading gif to a third party site, so my friend Kristian uploaded it to his AWS and it works perfectly now. Thanks, Kris!


## Backend Technologies

### Python

This was my first solo project that I used Python to manage my backend. While it was troubling at points, it was extremely helpful in managing massive data while cutting down on time complexity.


### Flask SQLAlchemy

As said for Python, same goes for Flask SQLAlchemy. I think these two helped manage my back end data extremely well.


### Steam API

When talking about React, I brought up how it was one of the vital component of my website. The reason I didn't say it was THE most vital component is because of the Steam API. This data is basically my entire website, the purpose of the website is to find real games you want to play, so I buckled down and tried to tame the beast that is this API. With a lot of trial and error, I was able to seed over 11 thousand games into my data base with the categories and genres linked to them. If you want to learn more about how I fetched this data, visit [Steam API data information](https://github.com/zanehamadi/Ludus/wiki/Steam-API-data-information) on the Ludus wiki! This was a bulk of the time I put into this website, and was a lot of fun! Maybe not a lot, but decently fun!(It was rough, man.)
## Code preview

Something I had to learn for this website, which I've never done before, is make a filtering system in the backend. I've always copped out and transfered all my seeder data to the front end using Redux and filtered through it through a series of useEffects and useStates, but since trying to fetch ALL my data(with their associations and all) to my front end took over 3 minutes, I had to buckle down and learn. This was an experience, but it was extremely fun! Here is the code snippets for that:


### Initial useState variable, to store the categories and genres in a key:value pairing, allowing for a easier JSON.stringify() experience to send to the backend.

![Initial useState variable](https://i.imgur.com/bxUTIua.png)


### Updating and adding to my useState variable

First set of Categories(hard coded so it forces those three to display first)
![Categories 1](https://i.imgur.com/rBaTdOU.png)

Optional second set of Categories

![Categories 2](https://i.imgur.com/GzMHMV6.png)


Genres

![Genres](https://i.imgur.com/ikfAaXQ.png)


### Once the user has inputed their filters, this async dispatch is fired off, waiting for a response. While there is no response, a loading screen is displayed.

Initial dispatch

![Dispatch](https://i.imgur.com/1U2Hm1L.png)


Redux handling the POST request

![Redux handling search](https://i.imgur.com/OHgDv57.png)


### Backend filtering for the search.

Python filters the request body in the back end, and as a response, returns the relevant games. 
![Python filtering](https://i.imgur.com/EwYlkKT.png)



## Future plans for the website

This is a website that I've wanted to make for a long time. Before I started my journey as a developer, I wanted an easier way to find games to play. My future plans for this website is to have a more indepth rendering of the Steam API. As it stands, due to API limitations and time restrictions, I couldn't have a dynamic API that fetched data in real time. My plan is to incorperate that, and display game information that show when games are on sale and user defined tags. I also want to add other platforms for this website, like Origin and uPlay, but one step at a time.



