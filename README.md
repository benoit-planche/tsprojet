# Test de deploiement

## Usage

1. Start the development server:

    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Local Development

To run the project locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Deployment with Argo

To deploy the project using Argo CD, follow these steps:

1. Ensure you have Argo CD installed and configured. Refer to the [Argo CD documentation](https://argo-cd.readthedocs.io/en/stable/getting_started/) for installation instructions.
2. Create a new application in Argo CD:

    ```sh
    argocd app create my-app \
        --repo https://github.com/your-username/your-repo.git \
        --path path/to/your/app \
        --dest-server https://kubernetes.default.svc \
        --dest-namespace default
    ```

3. Sync the application to deploy it:

    ```sh
    argocd app sync my-app
    ```

4. Monitor the deployment status:

    ```sh
    argocd app get my-app
    ```

Replace `your-username` and `your-repo` with your actual GitHub username and repository name. Adjust the `--path` parameter to point to the correct path of your application within the repository.
