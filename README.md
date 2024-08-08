# MeetUp

MeetUp is a video conferencing application inspired by Zoom, built with the latest web technologies to provide a seamless and secure communication experience. It allows users to create and join meetings, offering features such as real-time chat, screen sharing, and participant management.
<div align='center'>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

## Table of Contents

1. 🤖 [**Introduction**](#introduction)
2. ⚙️ [**Tech Stack**](#tech-stack)
3. 🔋 [**Features**](#features)
4. 🚀 [**Quick Start**](#quick-start)
5. 🤝 [**Contributing**](#contributing)
6. 📜 [**License**](#license)
7. 📞 [**Contact**](#contact)

## 🤖Introduction

MeetUp aims to replicate the core functionalities of popular video conferencing tools, enabling users to conduct virtual meetings with ease. With a focus on user privacy and data security, MeetUp provides a platform for both personal and professional use cases.

## Tech Stack

- **Next.js**: A React framework for building fast, server-rendered applications.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs.
- **Clerk**: A user management solution providing authentication and authorization.
- **GetStream**: A scalable API for building activity feeds, chat, and video applications.
- **shadcn**: A component library for building modern web applications.

## 🔋Features

- **Authentication**: Secure login with social sign-on or email/password using Clerk.
- **New Meeting**: Start a new meeting with configurable camera and microphone settings.
- **Meeting Controls**: Manage meetings with options for recording, screen sharing, and participant control.
- **Exit Meeting**: Leave or end meetings with ease.
- **Schedule Meetings**: Plan future meetings and access them via a dedicated page.
- **Recorded Meetings**: View past meeting recordings.
- **Personal Room**: Each user has a unique meeting room for instant collaboration.
- **Responsive Design**: Optimized for all devices with a responsive layout.

## 🚀Quick Start

Follow these steps to set up the MeetUp project locally:

### Prerequisites

Ensure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Cloning the Repository

```bash
git clone https://github.com/Devansh-46/MeetUp.git
cd MeetUp
```

Here is the requested content written in Markdown format:

```markdown
## Installation

Install the project dependencies using npm:

```bash
npm install
```

## Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

Replace the placeholder values with your actual credentials from Clerk and GetStream.

## Running the Project

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## 🤝Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜License

It is distributed under the MIT License. See `LICENSE` for more information.

## 📞Contact

Devansh - [Your Email](mailto:devansh.chaubey46@gmail.com)

Project Link: [https://github.com/Devansh-46/MeetUp](https://github.com/Devansh-46/MeetUp)
