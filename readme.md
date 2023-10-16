# Instructions For Setting Up This Repo

## FIRST, One Person In The Group Should:
1. Clone this repo down using `git clone insert_quick_setup_link_here`
2. Create a Vite project with `npm create vite@latest insert_project_name_frontend -- --template react`
3. Delete:
   - `App.css`
   - `index.css`
   - `App.jsx`
4. Check you're happy with the files to stage, using `git status` (check that there's nothing on that list you don't want to push to github)
4. If all looks good, stage files with `git add .`
5. Create the initial commit with `git commit -m "initial commit"`
6. Push to origin/main, using `git push origin main`

## THEN, All Other Group Members Should:
Clone the repo down with `git clone insert_quick_setup_link_here`

## Finally:
1. One group member should make a push replacing this readme text with the skeleton of your readme document.
2. All other group members should pull down this change (`git pull origin main`)

## Tips for using Git in a group will be posted on Thinkific shortly. :) 


# General
Note to anyone working on frontend, you will need to install Roboto - in your terminal just run the following line: npm install @fontsource/roboto


# Events
Currently using data from data.js until Backend is good to go. Events and Sticky pages are up and running.

Still to do.

Events Page -- component is EventCard
- change date and time
- update organiser

Event Sticky Page -- component is StickyNote
- functionality for create button is required
- when new sticky notes are added (manually) it just adds to the end of the row and not onto the next, this will need to be updated
- update commentor
- Do we need a "create" form


