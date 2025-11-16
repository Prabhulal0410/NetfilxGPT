# Steps 

- Created app using Vite and tailwind
- created Header
- Sign in Form
- Signup Form
- Added Validations
- Use UserRef hook for validation
- Setup firebase
- Created signin Signup auth using Firebase
- Created Redux store with userSlice 
- Added signout functionality using firebase and reduxstore
- Bugfix - if the user not login then redirect fro browse to login page and vice-versa
- Unscubscribe to the onAuthStateChanged callback
- Register on TMDB Api and register for access token
- Get Api call for now playing movie and get data




# Features

    -Login/Signup page
        -redirect to Browse page
    -Browse page(after Authentication)
        -Header
        -Main Movie
            -Trailer Movie in Background
            -Title and description
            -Moviesuggestions in row*n
    -NetflixGPT
        -searchbar
            -moviesuggestions
