# Personal Portfolio Website

### Table of Contents

- [Live Application](#live-application)
- [Description](#description)
- [Technologies](#technologies)
- [How To Use](#how-to-use)
- [License](#license)
- [Author Info](#author-info)

## Live Application

This application can be viewed here: [mikitosaarna.com](http://mikitosaarna.com)

The backend API is currently running here: [https://portfolio-backend-six-omega.vercel.app](https://portfolio-backend-six-omega.vercel.app)

Both the client and server are hosted on [Vercel](https://vercel.com/) with some images hosted by AWS S3.

## Description

This is a portfolio meant to display my ability to create a full-stack website incorporating a beautiful and meticulously designed user experience and backend infrastructure for a robust end-to-end system.

Current features include:

- API call to backend to display certain images
- Fully responsive, mobile-friendly design
- Support for light and dark mode via toggle component

## Technologies

This project's frontend is built on React, TypeScript and Tailwind. The backend is built with Python and Flask utilizing RESTful APIs.

- Backend API setup
- Creating RESTful APIs
- Frontend built on React with React router and hooks
- TypeScript implemented on the frontend
- Python backend
- Flask for routing
- Project deployed on Vercel
- AWS S3 for image storage

## How To Use

### Installation:

1. Fork and clone this repository
2. `cd` into the newly created directory

### Backend setup
1. `cd` into the backend directory
2. Copy the `.env.example` to create your own `.env` file
    - Input the correct values for each environment variable
    - `FRONTEND_URL` does not need to be altered unless you wish to connect to the frontend at a location other than `http://localhost:3000`
3. Run the command `flask run` to start the backend server

### Frontend setup
- Ensure you have followed the backend setup instructions first before following the frontend setup instructions
1. `cd` into the frontend directory
2. Copy the `.env.example` to create your own `.env` file
    - Input the correct address that your backend is running at for `REACT_APP_API_URL`. You can find this address within the terminal window when the backend server was started
        - `* Running on <backend-server-address>`
3. Run the command `npm start` to start the frontend server

Please reach out for assitance if you are having trouble getting the server to properly run.

## License

MIT License

Copyright (c) [2021] [Miki Saarna]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author Info

- GitHub: [miki-saarna](https://github.com/miki-saarna)
- LinkedIn: [Mikito Saarna](https://www.linkedin.com/in/mikito-saarna/)
- Website: [mikitosaarna.com](https://mikitosaarna.com)

[Back To The Top](#personal-portfolio-website)
