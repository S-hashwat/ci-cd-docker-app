# Create a CI/CD Pipeline with GitHub Actions & Docker (No Cloud Needed)

## 📌 Project Overview

This project demonstrates how to build a **complete CI/CD pipeline** using **GitHub Actions**, **Docker**, and **Minikube**, without using any cloud platforms. The goal is to automate the process of testing, building, pushing Docker images, and deploying them locally using Kubernetes (Minikube).

---

## 🎯 Objectives

- Automate testing and Docker builds using GitHub Actions
- Push Docker images to Docker Hub via CI
- Deploy the application locally using Minikube and Kubernetes
- Avoid reliance on cloud providers, using local tools instead

---

## 🚀 Project Deliverables

- ✅ Public GitHub repository with GitHub Actions workflows
- ✅ Dockerfile and docker-compose configuration
- ✅ Docker image published on Docker Hub
- ✅ Kubernetes Deployment and Service YAMLs
- ✅ Local deployment on Minikube
- ✅ Live preview of the running app via Minikube service
- ✅ Documentation and screenshots

---

## 🛠️ Tools & Technologies Used

- **GitHub Actions** – For CI/CD workflows
- **Docker** – For containerizing the app
- **Docker Hub** – To store Docker images
- **Minikube** – To simulate a local Kubernetes environment
- **kubectl** – To interact with the Kubernetes cluster
- **Node.js** – Base application
- **YAML** – For Kubernetes configurations

---

## 📦 Folder Structure
ci-cd-docker-app/ │ ├── .github/workflows/ │ └── ci.yml │ ├── app/ │ └── index.js │ └── package.json │ ├── Dockerfile ├── docker-compose.yml ├── deployment.yaml ├── service.yaml └── README.md

## ⚙️ Setup & Run Instructions

### 1. Clone the Repository
git clone https://github.com/your-username/ci-cd-docker-app.git
cd ci-cd-docker-app

2. Configure Environment (Optional)
- Update Docker Hub credentials in GitHub repository secrets as:
- DOCKER_USERNAME
- DOCKER_PASSWORD

3. CI/CD Workflow
- GitHub Actions workflow (ci.yml) automatically:
- Installs dependencies
- Runs tests (if any)
- Builds Docker image
- Pushes image to Docker Hub

4. Run Locally with Minikube
Start Minikube and set Docker environment:
- kubectl apply -f deployment.yaml
- kubectl apply -f service.yaml
- minikube service node-app --url

5. Visit Application
The output of the above command gives a localhost URL like:
http://127.0.0.1:PORT
Visit this in your browser to view the app.


📚 Learnings
- Building Docker images and managing Docker Hub
- Creating GitHub workflows for automated CI/CD
- Kubernetes deployment using YAML configs
- Managing local Kubernetes services with Minikube
- Debugging deployment and container issues locally
