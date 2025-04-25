FROM node:22-slim

RUN apt-get update -y \
    && apt-get install -y --no-install-recommends \
        git bash g++ make \
    # Clean-up
    && rm -rf /var/lib/apt/lists/* \
    # Add /code as safe directory
    && git config --global --add safe.directory /code

# Enable corepack
RUN corepack enable

WORKDIR /code

COPY package.json pnpm-lock.yaml /code/
RUN corepack prepare --activate

COPY . .
