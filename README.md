# Project Setup and Contribution Guidelines

Welcome to our project repository! This guide will walk you through the steps necessary to get started with contributing to project efficiently. Please follow these instructions carefully to ensure a smooth workflow.

## Cloning the Repository

First, you need to clone the repository to your local machine. Use the following command to do so:

```bash
git clone [URL-of-the-repository]
cd [repository-name]
```

Replace `[URL-of-the-repository]` with the actual URL of the repository and `[repository-name]` with the name of the repository you cloned.

## Project Setup

This project is built using React with Vite as the build tool, and Tailwind CSS for styling. The template has already been created with Vite.

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```


### Tailwind CSS

Tailwind CSS is already installed and configured in this project. You can use Tailwind utility classes directly in your components.

### Additional Packages

You are free to use any other packages that might be necessary for your implementation. To install additional packages, use:

```bash
npm install package-name
```

Make sure to document any additional packages you add in your pull requests.

## Initial Setup

Once you have cloned the repository, navigate to the project directory and check the existing assets and boilerplate code:

### Check Assets:
* Navigate to the `assets` directory:
```bash
cd assets
```
* Review all the files to familiarize yourself with the resources available for the project.

### Review Boilerplate Code:
* Explore the boilerplate code provided in the main directories. This might include HTML, CSS, and JavaScript files, among others.
* Understand the basic structure and setup to ensure that your contributions align with the project's standards.

# Git Workflow Instructions

1. Issue Management
   - Review all open issues in the repository
   - Pick an issue to work on based on priority/issue number
   - Make note of the issue number as you'll need it for branch naming

2. Branch Creation
   - For each issue, create a new feature branch using the format:
   - `git checkout -b feature/issue-<number>-<short-description>`
   - Example: For issue #42 about navbar: `git checkout -b feature/issue-42-add-navbar`

3. Development Process
   - Make your changes in the feature branch
   - Commit your changes with meaningful commit messages
   - Push your branch to remote: `git push origin feature/issue-<number>-<description>`

4. Pull Request Process
   - Create a Pull Request (PR) targeting the main branch
   - Add appropriate reviewers to the PR
   - Do not merge the PR yourself - wait for review and approval

5. Working on Subsequent Issues
   - Before starting a new issue, pull the latest changes from the previous issue's branch
   - Create a new branch for the next issue following the same naming convention
   - Example: `git checkout -b feature/issue-43-add-footer`
   - This ensures you have all the code from previous changes

6. Communication
   - For any questions or clarifications, contact the team via:
     - Slack
     - WhatsApp

7. Important Notes
   - Always create a new branch for each issue
   - Never work directly on the main branch
   - Keep PRs focused on single issues for easier review
   - Ensure your branch is up to date before creating a PR