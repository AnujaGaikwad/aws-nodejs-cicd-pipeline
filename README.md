# AWS Node.js CI/CD Pipeline

A beginner-friendly Node.js REST API with automated testing using AWS CodePipeline and AWS CodeBuild.

## Project Objective

Demonstrate how source code changes can trigger an automated build and test workflow, helping identify errors before changes are accepted.

## Technology Stack

- Node.js
- Express.js
- Supertest
- Node.js built-in test runner
- Git and GitHub
- AWS CodePipeline
- AWS CodeBuild

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Returns a welcome message |
| GET | `/health` | Returns application health status |
| GET | `/api/info` | Returns application name and version |

## Architecture

Developer → GitHub repository → AWS CodePipeline → AWS CodeBuild → Install dependencies → Run automated tests → Build result

The pipeline is intended to fail when automated tests fail.

## Project Structure

```text
aws-nodejs-cicd-pipeline/
├── src/
│   └── app.js
├── tests/
│   └── app.test.js
├── buildspec.yml
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Run Locally

Requirements: Node.js and npm.

```bash
npm ci
npm test
npm start
```

Open these URLs after starting the application:

- http://localhost:3000/
- http://localhost:3000/health
- http://localhost:3000/api/info

## Automated Testing

The current test suite verifies all three API endpoints using Node.js's built-in test runner and Supertest.

Local verification: 3 tests passed, 0 failed.

## AWS CodeBuild

The `buildspec.yml` file defines the build environment, installs dependencies using `npm ci`, and runs the automated tests using `npm test`.

## AWS CodePipeline

The planned pipeline connects the GitHub source repository to CodeBuild so that code changes can trigger automated validation.

AWS pipeline creation and execution results will be documented after configuration and testing.

## Cost Awareness

This project does not require a running EC2 instance. AWS CodePipeline and CodeBuild usage may incur charges depending on region, account eligibility, and current pricing. Check costs before running the services and delete resources after the practical exercise.

## Learning Outcomes

- Building a REST API using Express.
- Writing automated endpoint tests.
- Managing dependencies using npm.
- Using Git and GitHub for source control.
- Defining a repeatable build with `buildspec.yml`.
- Understanding CI/CD using AWS CodePipeline and CodeBuild.

## Author

Anuja Gaikwad

GitHub: https://github.com/AnujaGaikwad
