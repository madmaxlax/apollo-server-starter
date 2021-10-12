# Apollo Server TypeScript Stater

Foundation built on Apollo Server and TypeGraphQL
## Prerequisites

What you will need to install already before diving into contributing to this project.

1. [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - We have set up a Docker image with everything needed to run a local version of this project in your own docker container
   - For a consistant experience we can manage easily for all devs, we highly recommend using Docker, although running locally is possible

- [To run locally]
  - [VS Code](https://code.visualstudio.com/download) or some modern editor
  - [Node](https://nodejs.org/en/download/) with NPM or Yarn
  - [Git](https://git-scm.com/downloads) [Windows](https://gitforwindows.org/)
  - [Yarn](https://classic.yarnpkg.com/en/docs/install/) or `npm install --global yarn`
  - For **Windows** Users:
    - We use Linux style .sh shell scripts in this project. We have noticed many compatibility issues with Windows and highly recommend the Docker option rather than trying to run locally.
    - To get shell scripts to work on Windows
      - Mingw, which is easy because it comes with [Git for Windows](https://gitforwindows.org/), which you should already have installed. Simply open the 'Git Bash.' If using VS Code, it is heplful to select Git Bash as the default terminal
      - Another option is to use [Cygwin](https://cygwin.com/install.html)

## Getting Started

1. Clone repository

2. Run the script to set up Docker image and start local host

- make sure your Docker service is already up and running
- make sure your are in the root directory of this repo, where you can see the Dockerfile
- Mac users may first need to run `chmod +x ./utils/localdocker.sh` to give script permission

```bsh
./utils/localdocker.sh
```

#### What it's doing

- Grabbing the necessary Docker image to host your local setup
- Composing a Docker container based on instructions in docker-compose.yml and docker-compose.local.yml
- Within the container: running yarn install to grab all necessary dependencies for the React project (~2 minutes)
- running jest tests (supertest and nock testing frameworks are used)
- running a local host to show you the live server at http://localhost:3002

#### Troubleshooting Docker local host

- View output of Docker image
  - the output _should_ automatically show up in the terminal where you ran `localdocker.sh` and continuously flow, should that fail or should you need to quit but come back to it, you can run:
  - `docker attach "image name"`
- Hop into Docker container shell
  - To get access to the shell of the alpine image, run
  - `docker exec -it _repo-name_ /bin/sh`
- Check what containers in docker are running
  - `docker ps -a`
  - lists all active and non active containers. Check that STATUS column of container is up and running recently
- Have you tried turning it off and on?
  - a good way to fix the local setup is to stop and start it again.
  - stopping the docker container: `docker stop _container-name_`
  - starting again, just re-run `./utils/local.sh`
    - it should be much faster than the first time loading everything new

### Running Locally

You can choose to run the local host locally on your machine instead of in the Docker container. however, a lot more is uncontrolled there.

We recommend using `yarn` over `npm`; it is generally faster and some of our scripts call yarn, so having `yarn` installed is a prerequisite

1. Install dependencies
   run

```
yarn
```

to install all dependencies. This can take a while, 5 minutes (or more on Windows)

2. copy `.env-example` to the root of the codebase and rename to `.env-local`. You can get environment variable values from someone on the engineering team.

3. run locally

```
yarn start:dev
```
## Contributing

- Branches
  - Use branch names that indicate the feature or story or hotfix your are working on
- Commits - Use the commit message format [outlined here](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) - Format:

  ````
  type(scope): subject

          body of commit message

          footer of commit message
          ```
      - example:
          ```
          feat(ownersignin): new route for owner sign in

          adding a new route and page for the owner sign in workflow
          ```
      - example:
          ```
          fix(minimallayout): fix for margins

          fixing margins of the "minimal" layout to match responsive header
          ```

  \*\* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  ````

- Husky: you will get 'barked at' if your commit does not pass tsc ant eslint checks, and you will not be able to commit. Clean your code per the linting / prettier requiments and try the commit again
  - if there are problems, and you need to commit use `git -m "type(scope): subject" --no-verify`
