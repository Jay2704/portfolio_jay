# Jay Paun - Portfolio

Personal portfolio website showcasing AI/ML projects, work experience, and technical skills.

## Summary

AI Researcher and Software Engineer with expertise in end-to-end pipeline design, AI/ML development, and full-stack engineering. Currently pursuing M.S. in Computer Science at UMBC with hands-on experience at leading tech companies including IBM and Hewlett Packard Enterprise. Passionate about building scalable systems and delivering complete solutions from concept to deployment.


## About

Passionate AI Researcher and Software Engineer with expertise in multimodal systems, machine learning, and full-stack development. Currently pursuing advanced research in lie-detection systems combining EEG brain signals with computer vision at UMBC. Experienced in building scalable cloud infrastructure, optimizing AI models, and delivering end-to-end solutions from research to production. Committed to advancing the intersection of neuroscience and artificial intelligence through innovative engineering approaches.

## Key Projects

### Fine-Tuning LLaMA 2 with QLoRA
- Applied QLoRA techniques to fine-tune LLaMA 2–7B with 4-bit quantization
- Reduced GPU memory consumption by 60% while preserving 95% task-specific accuracy
- Optimized training workflow to accelerate iteration cycles by 40%

### Distributed File System
- Developed a distributed file system handling node failures and load balancing
- Improved reliability and access efficiency by 30%
- Packaged in Docker and managed via Kubernetes for streamlined deployment

### PyBot – Machine Learning Chatbot
- Built using ML and NLP techniques
- Improved intent recognition accuracy by 25% and boosted user engagement
- Deployed in containerized environments using Docker

### Brain Tumor Detection Web App
- Created web-based MRI classification system with CNNs and transformers
- Achieved 94% accuracy in tumor detection
- Enhanced inference speed by 35% for real-time diagnostics


## Technical Skills

- **Programming Languages**: Python, JavaScript, Java, HTML, CSS, Shell Scripting
- **Frameworks & Tools**: Flask, React.js, Node.js, PyTorch, TensorFlow, OpenCV, Express.js
- **Databases**: MySQL, MongoDB, PostgreSQL
- **Cloud & DevOps**: AWS, Docker, Jenkins, Kubernetes
- **AI/ML**: Computer Vision, Large Language Models, Deep Learning, Neural Networks

## Work Experience

- **AI Researcher** at University of Maryland, Baltimore County (UMBC) - May 2024 – Present
  - Developing multimodal lie-detection systems combining EEG and visual data
  - Engineering scalable data pipelines for preprocessing and augmentation
  - Ongoing work under peer review with promising classification results
- **Software Engineer** at Hewlett Packard Enterprise - Feb 2023 – Jul 2023
  - At HPE, I contributed to cloud infrastructure automation by building scalable DevOps pipelines using Ansible and Jenkins, reducing manual deployment effort by 40% and boosting delivery speed by 25%. I optimized application performance on AWS by configuring services like EC2, S3, and DynamoDB, resulting in 30% lower latency under peak load. I worked collaboratively across teams to improve deployment workflows and implemented infrastructure-as-code practices to ensure consistent, repeatable environments. This role strengthened my expertise in cloud-native development and CI/CD, while also giving me hands-on experience in delivering efficient, resilient systems in an enterprise setting.
- **Software Engineer** at IBM India - Mar 2022 – Sep 2022
  - At IBM, I developed a robust log assessment utility designed to streamline debugging in large-scale enterprise applications. The tool supported over 1,000 log files and featured automated error sequence detection, keyword-based filtering, and stack trace isolation. It significantly improved root cause analysis speed by 20%, enabling faster resolution of production issues. By categorizing logs based on patterns and timestamps, the utility helped identify recurring failures and performance bottlenecks. This project enhanced observability, reduced manual analysis, and supported smoother CI/CD workflows. It was a key backend enhancement, improving developer productivity and system reliability in a fast-paced enterprise environment.

## Education

- **M.S. in Computer Science** - University of Maryland, Baltimore County (UMBC) - Aug 2023 - May 2025
- **B.E. in Information Science** - BMS College of Engineering - August 2018 - June 2022

## Contact

- **Email**: jay.maryland2023@gmail.com
- **Phone**: +1 (667) 433-1441
- **LinkedIn**: [Jay Paun](https://www.linkedin.com/in/jay-paun-baa8ab217/)
- **GitHub**: [Jay2704](https://github.com/Jay2704)
- **LeetCode**: [ITS_HAMMER_TIME](https://leetcode.com/u/ITS_HAMMER_TIME/)
- **Codeforces**: [DecodeR2704](https://codeforces.com/profile/DecodeR2704)

## Technologies Used 

This portfolio is built with:
- React.js
- SCSS
- Font Awesome
- Lottie Animations
- React Reveal

## Features

- Dynamic sections driven by `src/portfolio.js`
- Optional GitHub data fetch for profile and repos
- Responsive layout with SCSS theming and dark mode toggle
- One-command local dev, build, and deploy scripts
- Enhanced “Technical Arsenal” section with emoji-rich, categorized skill highlights

## Quick Start

```bash
git clone https://github.com/Jay2704/portfolio_jay.git
cd developerFolio
cp env.example .env   # then edit .env
npm install
npm start
```

The app will start on `http://localhost:3000/`.

## Prerequisites

- Node.js 18+ (recommended Node 20 to match Dockerfile)
- npm 8+

## Environment Variables

Create a `.env` file from the provided example and fill in your values:

```bash
cp env.example .env
```

Required keys (see `env.example`):

- `REACT_APP_GITHUB_TOKEN`: Optional but recommended for higher GitHub API limits
- `GITHUB_USERNAME`: Your GitHub username (used when fetching data)
- `USE_GITHUB_DATA`: `"true"` to fetch profile/repo data from GitHub; set `"false"` to rely entirely on `src/portfolio.js`
- `MEDIUM_USERNAME`: Optional; set to fetch Medium blog data

Note: Do not commit your `.env`. Keep your token private.

## Run Locally

```bash
npm start
```

This runs `node fetch.js` before starting the dev server to pre-fetch any configured external data.

## Build for Production

```bash
npm run build
```

Outputs an optimized build in the `build/` directory.

## Docker

Build and run using Docker (Node 20 Alpine base):

```bash
docker build -t portfolio-jay .
docker run --rm -p 3000:3000 --env-file .env portfolio-jay
```

Then open `http://localhost:3000/`.

## Deploy

This repo includes a GitHub Pages workflow via `gh-pages`:

```bash
npm run deploy
```

Tips:

- Update `homepage` in `package.json` to your site URL for correct asset paths (e.g., `https://<username>.github.io/<repo>`).
- Ensure your branch and Pages settings align with the `deploy` script (current script publishes the `build/` directory to the `master` branch using `gh-pages`).

You can also deploy the `build/` folder to any static host (Netlify, Vercel, S3, etc.).

## Customization

- Content: Edit `src/portfolio.js` to change bio, projects, skills, and links.
- Theming: Adjust `src/_globalColor.scss` and SCSS modules for colors and styles.
- Assets: Replace images in `src/assets/images/` and Lottie files in `src/assets/lottie/`.
- Sections: Update containers under `src/containers/` and components in `src/components/`.

## Available Scripts

- `npm start`: Fetch data and start the development server
- `npm run build`: Fetch data and create a production build
- `npm run deploy`: Publish `build/` to GitHub Pages
- `npm test`: Run tests
- `npm run format`: Format code with Prettier
- `npm run check-format`: Check formatting

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Attribution**: This portfolio is based on the [developerFolio](https://github.com/saadpasta/developerFolio) template by Saad Pasta, which is also licensed under the MIT License.

**Copyright**: Portfolio content, personal information, and customizations are copyright © 2025 Jay Paun.

---

## Credits

This portfolio is built using the [developerFolio](https://github.com/saadpasta/developerFolio) template by [Saad Pasta](https://github.com/saadpasta).
